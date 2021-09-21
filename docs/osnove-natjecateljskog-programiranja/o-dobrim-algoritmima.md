---
title: O dobrim algoritmima
---

import Author from '../../src/react_components/author.js';

import Spoiler from '../../src/react_components/spoiler.js';

<Author authorName='Ivan Vlahov' githubUsername='vlahovivan'/>

## Dobar algoritam

Cilj rješavanja zadataka na natjecanjima nije **samo** predati program koji daje točan rezultat, često je bitno i da taj program bude efikasan. Zadaci uglavnom imaju vremenska i memorijska ograničenja izvođenja programa te je bitno znati na vrijeme odrediti pristup kojim ćete rješavati određeni zadatak. Na nekim platformama (npr. Codeforces) je bitno i koliko vam je vremena trebalo da riješite određeni zadatak, te je iz tog razloga važno i brzo odrediti hoće li neki pristup raditi dovoljno brzo s postavljenim ograničenjima ulaznih podataka.

Što više zadataka budete rješavali, to će vam lakše biti brzo odrediti efikasan pristup rješavanju zadataka. Svakako preporučamo da tijekom natjecanja koristite papir i olovku da biste mogli skicirati, ručno isprobavati neke testne primjere i provjeravati radi li vaš program na njima. Iako je korištenje olovke i papira poželjno, s vremenom (i s mnoštvom riješenih zadataka!) ćete primijetiti da za lakše zadatke uopće nećete trebati papir i olovku već će rješenja početi dolaziti "sama od sebe".

Osim toga, često ćete se pronaći u situaciji da vaš program radi za sve testne primjere koje mu postavite na ulaz, a u evaluatoru dobivate dojavu o netočnom rješenju na nekom testnom primjeru. U tom slučaju je bitno razmisliti o tome koliko su vaši testni primjeri zapravo dobri. Nekad se zna dogoditi da naš program ne uspije na rubnim testovima (npr. zbog _overflowa_ cjelobrojnih varijabli), ili u nekom dijelu koda pokušamo dohvatiti indeks polja izvan njegovih granica i slično. S obzirom da smo sami smislili algoritam, često našem programu nesvjesno dajemo samo one testove za koje znamo da će program raditi. Bitnije je pokušati smisliti testove za koje program **neće** raditi, jer pomoću njih možete vidjeti što u programu trebate popraviti.

Bitno je spomenuti da, kao i sve, natjecateljsko programiranje zahtijeva veliku količinu rada da bi se postigli odlični rezultati. Na platformi Codeforces možete pronaći [listu zadataka](https://codeforces.com/problemset) u kojoj zadatke možete poredati po težini ($800$ - najlakši zadaci, $3500$ - najteži), po temama (korištenjem _tagova_) ili po broju korisnika koji su riješili taj zadatak. Također možete i odabrati neko natjecanje te virtualno sudjelovati na tom natjecanju, i tako dobiti ideju o tome koliko dobro biste se plasirali da ste se zapravo natjecali.

## Asimptotska složenost algoritma

S obzirom da se neki zadaci mogu riješiti na više različitih načina, dobro bi bilo imati neku notaciju pomoću koje bismo mogli označavati koliko je koji algoritam dobar ili loš. Upravo zato ćemo se upoznati s _Veliko O_ notacijom, pomoću koje na jednostavan način možemo opisati algoritme te brzo odrediti trebamo li koristiti određeni algoritam za određeni zadatak.

Pomoću Veliko O notacije možemo odrediti način na koji brzina izvođenja programa ovisi o jednoj ili više varijabli. 

Uzmimo na primjer sljedeći isječak koda:

```cpp
int a, b;
cin >> a >> b;

cout << a + b;
```

Primijetit ćemo da će program, neovisno o vrijednostima varijabli $a$ i $b$, uvijek izvršiti jednu operaciju zbrajanja. Takav program nazivamo programom **konstantne** složenosti, te njegovu složenost zapisujemo kao $O(1)$ u Veliko O notaciji. Pogledajmo sad sljedeći primjer:

```cpp
int n;
cin >> n;

for(int i=0; i<n; i++){
    cout << i << endl;
}
```

Primjećujemo da broj operacija ispisa u ovom programskom isječku ovisi o vrijednosti varijabli $n$ - za $n=1$, operacija ispisa će se izvršiti jednom, za $n=10$ će se izvršiti $10$ puta, i tako dalje. U ovom slučaju govorimo o **linearnoj** složenosti, te zapisujemo $O(n)$. Pogledajmo još jedan primjer:

```cpp
int n;
cin >> n;

for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
        cout << i*n + j << endl;
    }
}
```

U ovom slučaju će se za $n=1$ operacija ispisa izvršiti jedan put, a za $n=10$ će se izvršiti $100$ puta. Lako možemo zaključiti da će se operacija uvijek izvesti $n^{2}$ puta. U tom slučaju govorimo o **kvadratnoj** složenosti, odnosno $O(n^{2})$.

Složenost ne mora nužno biti u obliku $O(n^{p})$. Pogledajmo sljedeće primjere:

```cpp
// O(log(n)), logaritamska složenost (u bazi 2)
int n;
cin >> n;

while(n>0){
    cout << n << endl;

    n = n/2;
}
```

```cpp
// O(sqrt(n)), korijen iz n složenost
int n;
cin >> n;

for(int i=0; i*i < n; i++){
    cout << i << endl;
}
```

Naravno, nisu svi programi ovako jednostavni. Programi se uglavnom sastoje od nekakvih faza, gdje svaka faza ima svoju složenost. Ukupan broj operacija je naravno suma broja operacija u svakoj od faza. Međutim, u Veliko O notaciji zapisujemo samo složenost one faze koja najviše opterećuje brzinu izvođenja programa.

```cpp
int n;
cin >> n;

// Prva faza
for(int i=0; i<n; i++){
    cout << i << endl;
}

// Druga faza
for(int i=0; i<n; i++){
    for(int j=i; j<n; j++){
        cout << i << " " << j << endl;
    }
}
```

Već znamo da je složenost prve faze $O(n)$, međutim, koja je složenost druge faze? U ovom slučaju varijabla $j$ u for petlji ne počinje od nule, već od vrijednosti varijable $i$, te možemo izračunati da će se operacija ispisa izvršiti $\frac{n\cdot(n+1)}{2}$ puta. Kad raspišemo taj izraz, dobijemo $\frac{1}{2}n^{2} + \frac{1}{2}n$. I u ovom slučaju govorimo o **kvadratnoj** složenosti, odnosno $O(n^{2})$, jer je pribrojnik $\frac{1}{2}n^{2}$ onaj koji najviše opterećuje brzinu izvođenja programa. Što se tiče konstantnog faktora $\frac{1}{2}$, njega ne zapisujemo u Veliko O notaciji. Sada kad znamo broj operacija obje faze, kad ih zbrojimo dobijemo ukupan broj operacija: $\frac{1}{2}n^{2} + \frac{3}{2}n$. I tako zaključujemo da je ukupna složenost ovog programa $O(n^{2})$.

Nekad složenost programa ne ovisi samo o jednoj varijabli:

```cpp
int n, m;
cin >> n >> m;

for(int i=0; i<n; i++){
    for(int j=0; j<m; j++){
        cout << i << " " << j << endl;
    }
}
```

U ovom slučaju će se izvršiti $nm$ operacija ispisa, pa je složenost $O(nm)$.

Možda ste se tijekom čitanja zapitali, zašto je ovo uopće bitno? Odgovor leži u tome da poznavanjem asimptotske složenosti algoritama možemo jako brzo procijeniti hoće li naše rješenje biti dovoljno dobro da se program izvrši unutar zadanog vremenskog ograničenja. Uzmimo na primjer da evaluator može obaviti $10^{9}$ operacija u jednoj sekundi. U tekstu zadatka piše da varijabla $n$ može poprimiti vrijednosti od $1$ do $10^{5}$, a vremensko ograničenje izvođenja programa je $1$ sekunda. Tada možemo biti sigurni da $O(n^{2})$ neće biti dovoljno dobro jer možemo računati da će se izvršiti puno veći broj operacija nego što evaluator može izračunati u sekundi.

