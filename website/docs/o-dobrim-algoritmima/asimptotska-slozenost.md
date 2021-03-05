---
title: Asimptotska složenost algoritma
---

o asimptotskoj složenosti, vremenskoj i prostornoj složenosti, usporedbi a.s.a. s vremenom izvođenja, par primjera brute force algoritama koji se mogu rijesiti jednom formulom, nekih koji se mogu ubrzati s n^2 na n*log(n) i slično, kako prepoznati koja se kompleksnost ocekuje iz ogranicenja zadatka

S obzirom da se neki zadaci mogu riješiti na više različitih načina, dobro bi bilo imati neku notaciju pomoću koje bismo mogli označavati koliko je koji algoritam dobar ili loš. Upravo zato ćemo se upoznati s _Veliko O_ notacijom, pomoću koje na jednostavan način možemo opisati algoritme te brzo odrediti trebamo li koristiti određeni algoritam za određeni zadatak.

Pomoću Veliko O notacije možemo odrediti način na koji brzina izvođenja programa ovisi o jednoj ili više varijabli. 

Uzmimo na primjer sljedeći isječak koda:

```cpp
int a, b;
cin >> a >> b;

cout << a + b;
```

Primijetit ćemo da će program, neovisno o vrijednostima varijabli `a` i `b`, uvijek izvršiti jednu operaciju zbrajanja. Takav program nazivamo programom **konstantne** složenosti, te njegovu složenost zapisujemo kao _O(1)_ u Veliko O notaciji. Pogledajmo sad sljedeći primjer:

```cpp
int n;
cin >> n;

for(int i=0; i<n; i++){
    cout << i << endl;
}
```

Primjećujemo da broj operacija ispisa u ovom programskom isječku ovisi o vrijednosti varijabli `n` - za `n=1`, operacija ispisa će se izvršiti jednom, za `n=10` će se izvršiti 10 puta, i tako dalje. U ovom slučaju govorimo o **linearnoj** složenosti, te zapisujemo _O(n)_. Pogledajmo još jedan primjer:

```cpp
int n;
cin >> n;

for(int i=0; i<n; i++){
    for(int j=0; j<n; j++){
        cout << i*n + j << endl;
    }
}
```

U ovom slučaju će se za `n=1` operacija ispisa izvršiti jedan put, a za `n=10` će se izvršiti 100 puta. Lako možemo zaključiti da će se operacija uvijek izvesti n<sup>2</sup> puta. U tom slučaju govorimo o **kvadratnoj** složenosti, odnosno _O(n<sup>2</sup>)_.

Složenost ne mora nužno biti u obliku O(n<sup>x</sup>). Pogledajmo sljedeće primjere:

```cpp
// O(log(n)), logaritamska složenost
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

Već znamo da je složenost prve faze _O(n)_, međutim, koja je složenost druge faze? U ovom slučaju varijabla `j` u for petlji ne počinje od nule, već od vrijednosti varijable `i`, te možemo izračunati da će se operacija ispisa izvršiti n\*(n+1)/2 puta. Kad raspišemo taj izraz, dobijemo n<sup>2</sup>/2 + n/2. I u ovom slučaju govorimo o **kvadratnoj** složenosti, odnosno _O(n<sup>2</sup>)_, jer je pribrojnik n<sup>2</sup>/2 onaj koji najviše opterećuje brzinu izvođenja programa. Što se tiče konstantnog faktora 1/2, njega ne zapisujemo u Veliko O notaciji. Sada kad znamo broj operacija obje faze, kad ih zbrojimo dobijemo ukupan broj operacija: n<sup>2</sup>/2 + 3\*n/2. I tako zaključujemo da je ukupna složenost ovog programa _O(n<sup>2</sup>)_.

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

U ovom slučaju će se izvršiti n\*m operacija ispisa, pa je složenost _O(nm)_.

Možda ste se tijekom čitanja zapitali, zašto je ovo uopće bitno? Odgovor leži u tome da poznavanjem asimptotske složenosti algoritama možemo jako brzo procijeniti hoće li naše rješenje biti dovoljno dobro da se program izvrši unutar zadanog vremenskog ograničenja. Uzmimo na primjer da evaluator može obaviti 10<sup>9</sup> operacija u jednoj sekundi. U tekstu zadatka piše da varijabla `n` može poprimiti vrijednosti od 1 do 10<sup>5</sup>, a vremensko ograničenje izvođenja programa je 1 sekunda. Tada možemo biti sigurni da _O(n<sup>2</sup>)_ neće biti dovoljno dobro jer možemo računati da će se izvršiti puno veći broj operacija nego što evaluator može izračunati u sekundi. U tablici možemo pogledati koliko bi otprilike trajalo izvođenje za koju složenost.

**OVDJE IDE TABLICA**

