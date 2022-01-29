---
title: Pruning
---

import Author from '../../src/react_components/author.js';

<Author authorName='Petar Mihalj' githubUsername='PetarMihalj'/>

**Pruning** je tehnika ranijeg odbacivanja pokušaja koji sigurno neće
rezultirati rješenjem, a termin se koristi primarno kod rekurzivnih istraživanja.

U sljedećem problemu demonstrirat ćemo korištenje pruninga, a uz to
pokazati tehniku pametne predaje stanja iz jednog rekurzivnog poziva u drugi.

### Problem 2: Broj puteva koji pokrivaju polje

U prvom retku zadana su dva broja, $n$ i $m$, za koje vrijedi $2 \leq n,m \leq 6$.
Ta dva broja definiraju dimenzije šahovskog polja, širinu i dužinu.

Odredi koliko puteva postoji koji kreću s jednog kuta i završavaju u dijagonalnom,
a svakim poljem prolaze **točno jednom**.

#### Pruning

Razmislite li je li moguće završiti put koji nije posjetio sva polja,
a stao je na krajnje? Naravno, nije.
Dakle, svi rekurzivni pozivi koji nalete na takvu situaciju trebaju biti
prekinuti bez daljnjeg razmotavanja.

Još jedan primjeru pruninga je taj da u razvoju rekurzije nikad ne stanemo na polje
na koje smo već stali; iako je ovo nužno za dobar algoritam i vjerojatno očito,
također spada u tehniku pruninga.

#### Kako provjeriti gdje smo prošli?  

Svaki rekurzivni poziv mora biti svjestan svoje prošlosti,
to jest simulaciji kojeg puta on odgovara (koja su polja već posjećena, poredak nije bitan).
Ovo moramo postići nekom varijantom dvodimenzijskog polja u kojem su označena polja koja smo prošli.
Naravno, kopiranje tog polja minimalno promijenjenog iz jednog poziva u drugi je jako vremenski zahtijevno.

Umjesto kopiranja, možemo samo promijeniti jedan element i poslati referencu,
a kad se rekurzija izmota iz tog poziva, taj element vratiti na staru vrijednost.
U sljedećem rekurzivnom pozivu će se promijeniti neki drugi element,
a nakon njega će se i taj drugi element vratiti na staro.
Kad se cijeli rekurzivni poziv završi, rekurzija će se izmotati natrag,
gdje će roditelj poziva napraviti istu stvar.

Postizanje ovakvog efekta zahtijeva da struktura (polje posjećenih polja)
bude reverzibilna, tj. da na njoj možemo napraviti promijene i onda ih poništiti.

#### Kako provjeriti jesmo li prošli sva polja?

Već smo napomenuli da stajanje na zadnje polje bez da smo posjetili sva ostala
nužno rezultira granom rekurzije koju treba podrezati (nema rješenja u toj grani).

Kako provjeriti da smo prošli sva polja bez iteracije po dvodimenzijskom polju?
Jednostavno, pozivi rekurzije pratit će koliko su polja posjetili,
to će biti još jedan argument rekurzije.

#### Implementacija

Povratna vrijednost rekurzije označavat će broj traženih puteva nađenih u toj rekurzivnoj grani.

```cpp
#include <bits/stdc++.h>
using namespace std;

int rek(int i, int j, vector<vector<bool>>& I, int visited_cnt, int n, int m){
    // na krajnjem smo polju
    if (i == n-1 && j==m-1){
        // pruning, ovakve grane nemaju rjesenja
        if (visited_cnt != n*m){
            return 0;
        }
        // rjesenje!
        else{
            return 1;
        }
    }


    int paths = 0;
    // zgodan trik za situacije s kretanjima po polju
    vector<vector<int>> dirs = {{-1,0},{1,0},{0,-1},{0,1}};

    for (auto dir : dirs){
        int ti = i+dir[0];
        int tj = j+dir[1];

        // unutar polja i nije posjećen
        if (ti>=0 && tj>=0 && ti<n && tj<m && I[ti][tj]==false){
            I[ti][tj] = true;
            paths+=rek(ti, tj, I, visited_cnt+1, n, m);
            I[ti][tj] = false;
        }
    }

    return paths;
}

int main(){
    int n,m; cin>>n>>m;
    
    // polje posjećenih polja
    vector<vector<bool>> I(n,vector<bool>(m));

    // vidi opis
    I[0][0] = true;
    cout << rek(0,0,I,1,n,m) << endl;
    return 0;
}
```

Primjetite da smo se u ovoj implementaciji držali sljedeće *filozofije*:

- *svaki rekurzivni poziv na svom početku ima dobre vrijednosti polja $\texttt{I}$ i broja $\texttt{visited\_cnt}$*

Iako to nije moralo biti tako (sam poziv je to mogao ažurirati), 
treba unaprijed odlučiti i držati se toga u cijelom programu.
Implikacija našeg izbora ujedno je i postavljanje vrijednosti polja u mainu.

:::tipsavjet

Prethodno spomenute *filozofije* u žargonu računalne znanosti zovemo 
[invarijantama](https://en.wikipedia.org/wiki/Invariant_(mathematics)#Invariants_in_computer_science)

:::

#### Simetrija

Ograničimo problem na takav da su $n$ i $m$ jednaki.

Primijetite da se u rješenjima može naći simetrija:
- za svako rješenje koje kreće u u jednom od dva dostupna smjera,
postoji drugo rješenje koje kreće u onom drugom smjeru, a ta rješenja
se mogu dobiti jedno od drugoga zrcaljenjem

Dakle, umjesto da istražujemo oba puta, mi ćemo ručno krenuti jednim,
a zatim rezultat pomnožiti s $2$.

Implementacija se razlikuje samo u dijelu funkcije $\texttt{main}$:

```cpp
    I[0][0] = true;
    I[0][1] = true;
    cout << rek(0,1,I,2,n,m)*2 << endl;
    return 0;
```

Ova jednostavna optimizacije uštedjet će nam pola vremena!
U drugim postavkama i zadatcima postoje i složenije simetrije koje nećemo istraživati.
