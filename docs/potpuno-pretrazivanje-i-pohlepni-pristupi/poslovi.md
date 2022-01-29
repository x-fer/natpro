---
title: "Raspored poslova"
---

import Author from '@site/src/react_components/author.js';

<Author authorName='Petar Mihalj' githubUsername='PetarMihalj'/>

### Problem 4: Raspored poslova

Zadan je broj $k$.
U sljedećih $k$ redova zadano je po dva broja, $a_i$ i $b_i$,
koji označavaju početno i krajnje vrijeme posla $i$.
Samo jedan posao se može obavljati u isto vrijeme.
Posao se obavlja u vremenskom intervalu $[a_i, b_i]$ (uključno).

Vrijedi $1 \leq k \leq 10^6$, $0 \leq a_i, b_i \leq 10^9$.

Koliko je najviše poslova moguće obaviti?

#### Testni primjeri

Pokušajte razviti pohlepni pristup i iskušajte ga na sljedećim primjerima:

```shell
3
1 5
2 2
3 10
```
Rješenje: 2

```shell
3
1 3
2 2
3 3
```
Rješenje: 2

Pokušajte dokazati optimalnost vašeg pristupa!

#### Pohlepni pristup:

Poslove je potrebno sortirati prema vremenu završetka (od najmanjeg prema najvećem).
Zatim je potrebno izvršavati poslove redom, i paziti da se ne preklapaju s već izvršenima.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    int k; cin>>k;

    vector<pair<int,int>> P(k);
    for (int i=0; i<k; i++){
        int a,b; cin>>a>>b;
        P[i] = {a,b};
    }

    sort(P.begin(), P.end(), 
        [](auto p1, auto p2) -> bool{return p1.second < p2.second;}
    );

    int last_time = -1;
    int cnt = 0;

    for (auto p : P){
        if (p.first > last_time){
            cnt++;
            last_time = p.second;
        }
    }

    cout << cnt << endl;
}
```

#### Dokaz:

Gotovo svaki dokaz optimalnosti pohlepnog algoritma $A$ počinje sa tezom:
- pretpostavimo da dolazimo do *nekog* optimalnog rješenja koji **ne bi pronašao** algoritam $A$.

Izraz *nekog* bitan je zbog mogućnosti postojanja više optimalnih rješenja.
Izraz "**ne bi pronašao** algoritam $A$" u kombinaciji s definicijom $A$ implicira da
je u rješenju postoji prvo odudaranje od algoritma $A$, to jest trenutak kad smo mogli
izabrati ono što bi birao algoritam $A$, a nismo.

Na primjer, rješenje je lista poslova koja počinje listom $X_1$, zatim poslom $x$, a završava listom $X_2$.
Posao $x$ označava trenutak kad smo mogli odabrati posao $z$ (kojeg bi odabrao $A$), a nismo.

Po definiciji taj posao $z$ smo mogli odabrati, a završava prije $x$.
Zbog toga je lista $X_1$ - $z$ - $X_2$ isto tako dobra lista poslova ($z$ ne smeta poslovima
poslije jer završava prije $x$). Dakle, uzimanjem posla $z$ umjesto $x$ dobivamo
barem jednako dobro rješenje.

Zaključak je da koje god rješenje imamo, postupanje pohlepnog algoritma nam daje bar jednako dobro rješenje
kao što imamo - pohlepni algoritam je optimalan.

#### Apstraktni pregled dokaza

Dokaz se svodi na razmatranje rješenja koje odudara od pohlepnog algoritma,
a zatim pokazivanje da se prelaskom na odluke koje bi činio pohlepni algoritam 
dobiva barem jednako dobro rješenje.

Pokušajte sljedeći [problem](https://codeforces.com/problemset/problem/1238/B) riješiti (i dokazati rješenje) na sličan način. Razmotrite vaš postupak u svakom koraku, i razmislite postoji li neki
koji je uvijek barem jednako dobar.

