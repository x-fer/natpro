---
title: Iteratori
---

iteratori, begin(), end(), rbegin(), rend(), next(), prev(), advance() i slicno

Tijekom rada s *containerima* kao što su `vector` i `set`, često ćete se susretati s funkcijama koje kao parametre primaju *iteratore*. U ovom članku ćemo govoriti o iteratorima i dat ćemo nekoliko primjera iteratora za koje biste trebali znati.

Iteratori služe kao pokazivači na elemente određenih *containera*. Pomoću njih možemo, kao što im ime govori, iterirati kroz elemente određenih struktura te ih koristiti kao parametre u brojnim algoritmima standardne biblioteke. Podacima na koje iteratori pokazuju pristupamo koristeći operator `*`.

Uzmimo za primjer jedan `set` i jedan `vector`.

```cpp
set<int> s = {1, 2, 3, 4, 5, 6}; // jos jedan nacin za dodati elemente u set
vector<int> v = {1, 1, 2, 3, 5, 8}; // jos jedan nacin za dodati elemente u vector
```

Prva funkcija kojom ćemo se baviti je članska funkcija `begin`. Ona vraća iterator na prvi element niza, pa bi za naše *containere* iz primjera to izgledalo ovako (sjetimo se da podacima pristupamo koristeći operator `*`):

```cpp
cout << *s.begin() << "\n"; // ispisuje 1
cout << *v.begin() << "\n"; // ispisuje 1
```

Druga funkcija je funkcija `end`. Ona vraća iterator na poziciju **nakon** posljednjeg elementa niza. Možemo je koristiti u for petlji da bismo provjerili jesmo li došli do kraja iteracije, a također se koristi u mnoštvu funkcija o kojima ćemo kasnije više govoriti.

```cpp
// it++ mijenja iterator tako da pokazuje na sljedeći element niza
for(auto it = s.begin(); it != s.end(); it++) {
    cout << *it << " ";
}
```

Ovaj isječak koda će ispisati sve članove seta.

Slične funkcijama `begin` i `end` su funkcije `rbegin` i `rend` koje vraćaju *reverse iteratore*, odnosno iterator koji pokazuje na posljednji element niza i iterator koji pokazuje na poziciju **prije** prvog elementa niza.

```cpp
for(auto it = s.rbegin(); it != s.rend(); it++) {
    cout << *it << " ";
}
```

Ovaj isječak će ispisati sve članove seta, ali obrnutim redoslijedom.

Funkcije `next` i `prev` kao argumente primaju iterator i cijeli broj `n`, a vraćaju iterator za `n` pozicija ispred ili iza zadanog iteratora. Ako `n` nije zadan, podrazumijevana vrijednost je 1. Ove funkcije ne mijenjaju poziciju zadanog iteratora.

```cpp
cout << *next(s.begin(), 2) << "\n"; // ispisuje 3
cout << *prev(s.end(), 2) << "\n"; // ispisuje 5
```

Funkcija `advance` kao argumente prima iterator i cijeli broj `n`, te **mijenja** zadani iterator tako da mu pomakne poziciju za `n` mjesta.

```cpp
auto it = s.begin();
cout << *it << "\n"; // ispisuje 1

advance(it, 3);
cout << *it << "\n"; // ispisuje 4

advance(it, -1);
cout << *it << "\n"; // ispisuje 3
```

U poglavlju o sortiranju i pretraživanju ćemo pričati više o praktičnim primjenama iteratora.



