---
title: Najdulji rastući podniz
---

import Author from '../../src/react_components/author.js';

import Spoiler from '../../src/react_components/spoiler.js';

<Author authorName='Karlo Franić' githubUsername='kfranic1'/>

### Problem
Jedan od klasičnih problema dinamičkog programiranja je određivanje najduljeg rastućeg podniza zadanog niza.

Zadan je niz duljine $N$ čiji su elementi $x_i < 1e5$. Odredi najdulji podniz, ne nužno uzastopnih elemenata, za čije elemente vrijedi da je svaki element veći ili jednak od elemenata prije njega.

### Rješenje

Za ovaj problem postoji jednostavno rješenje. Neka nam je stanje duljina najduljeg podniza razmatrajući niz do nekog elementa(uključujući taj element), a funkcija prijelaza je prolazak po svim prethodnim elementima gdje od svih elemenata koji su manji ili jednaki trenutnom tražimo onaj koji do tada tvori najdulji podniz, odnosno onaj u čijoj je dinamici zapisan najveći broj. Tom broju dodajemo 1 te to postaje vrijednost trenutnog stanja dinamike.

```cpp
int n, sol = 0;
int niz[100005];
int dp[100005];

int main(){
    memset(dp, 1, sizeof dp);
    cin >> n;
    for(int i = 0; i < n; i++){
        cin >> niz[i];
        for(int j = 0; j < i; j++){
            if(niz[j] <= niz[i]) 
                dp[i] = max(dp[i], dp[j] + 1);
        }
        sol = max(sol, dp[i]);
    }
    cout << sol;
    return 0;
}
```

### Analiza složenosti

Postoji $N$ stanja, a za izračun stanja moramo provjeriti sva prijašnja stanja, stoga je složenost prijelaza $O(N)$. Ukupna složenost je dakle $O(N^2)$. Nažalost ovo rješenje često nije dovoljno jer su ograničenja uglavnom $N < 1e5$. Stoga nam treba neko brže rješenje.

### Brže rješenje

Uvedimo novi niz koji će na mjestu $x$ imati zapisan najmanji broj koji može biti na kraju podniza duljine $x$. Zašto nam je taj niz koristan? Upravo njegova duljina odgovara na naš problem. Sada se postavlja pitanje možemo li taj niz stvoriti nešto brže kako bi nam rješenje stalo u vremensko ograničenje. 

```cpp
int n, x;
vector<int> najmanji;

int main(){
    cin >> n;
    najmanji.push_back(-1e9);
    for(int i = 0; i < n; i++){
        cin >> x;
        //ako je zadnji broj u podnizu manji od novog broja, tada možemo novi broj staviti kao zadnji broj u podnizu
        //time smo dodali novi zadnji broj i popravili trenutno rješenje
        if(najmanji.back() <= x) najmanji.push_back(x);
        for(int j = najmanji.size() - 2; j > 0; j--)
            //ako je uneseni broj veći od trenutnog onda se može nalaziti iza njega u potencijalnom rješenju
            //taj ćemo broj zapisati na sljedeće mjesto samo ako je manji od broja koji je tamo već zapisan kako bi popravili rješenje
            //time smo popravili podniz duljine j + 1 tako da sad završava s još manjim brojem
            if(najmanji[j] <= x && x < najmanji[j + 1])
                najmanji[j + 1] = x;
    }
    cout << najmanji.size() - 1;
    return 0;
}
```

Pogledajmo složenost ovog rješenja. Vidimo da za svaki uneseni broj prolazimo kroz cijeli podniz kako bi ga popravili. Što ako nam je ulazni niz već sortiran ulazno? Tada će polje $najmanji$ stalno rasti i to nam je najgori slučaj koji i dalje daje kvadratnu složenost. Možemo li kako riješiti taj problem?


Bitno je primijetiti da će brojevi u tom nizu uvijek biti sortirani uzlazno. Razmislite zašto. Također možemo primijetiti da ćemo popravak podniza napraviti samo jednom u prolasku kroz cijeli podniz. Promjena jednog elementa u sortiranom nizu navodi nas na binarnu pretragu. Binarnom pretragom možemo naći mjesto na kojem trebamo napraviti promjenu i time ne moramo prolaziti kroz čitav podniz. Složenost tog rješenja bit će $O(rješenje \log rješenje)$, odnosno u najgorem slučaju $O(n \log n)$.

```cpp
int n, x;
vector<int> najmanji;
vector<int>::iterator it;

int main(){
    cin >> n;
    najmanji.push_back(-1e9);
    for(int i = 0; i < n; i++){
        cin >> x;
        it = upper_bound(najmanji.begin(), najmanji.end(), x);
        if(it == najmanji.end()) najmanji.push_back(x);
        else *it = x;
    }
    cout << najmnji.size();
    return 0;
}
```

Ovaj zadatak savršen je primjer zadatka dinamičkog programiranja. Jako kratak kod koji je teško smisliti.

### Najdulji padajući podniz

Na prvi pogled potrebno je promijeniti dinamiku i u vektor spremati najveće brojeve, no stvari se mogu zakomplicirati jer je vektor sada silazno sortiran pa više ne smijemo koristiti $upper\_bound()$ nego bismo trebali kodirati vlastitu binarnu pretragu. Na svu sreću problem možemo riješiti vrlo jednostavno tako da spremimo ulazni niz u neko polje i zatim primijenimo funkciju $reverse()$ na to polje. Tada problem postaje traženje najduljeg **rastućeg** podniza.