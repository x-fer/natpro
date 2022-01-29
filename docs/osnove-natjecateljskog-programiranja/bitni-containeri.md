---
title: Bitni containeri
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Ivan Vlahov' githubUsername='vlahovivan'/>

## Što su containeri

U ovom poglavlju ukratko ćemo objasniti kako funkcioniraju i što su *containeri*. *Container* je objekt u koji možemo spremiti više drugih objekata, te koristeći članske funkcije na određeni način manipulirati tim podacima, iterirati kroz njih, raditi određene upite i slično kako bismo riješili neki zadatak. U C++-u su *containeri* implementirani kao *class template*, što znači da u njih možemo pohraniti bilo koju vrstu objekata. Kao što ćemo vidjeti u nastavku, različiti *containeri* se različito ponašaju, pa počnimo od jednostavnijih.

## Vector

Recimo da imate zadatak u kojem se od vas traži da s ulaza čitate brojeve sve dok ne učitate broj $$0$$, a zatim trebate ispisati broj učitanih parnih brojeva te sve učitane parne brojeve onim redoslijedom kojim su učitani. Ovaj zadatak bismo mogli riješiti koristeći polje, međutim, postavlja se pitanje, kako odrediti veličinu tog polja? Mogli bismo nagađati da nećemo učitati više od npr. $$1000$$ parnih brojeva, pa postaviti veličinu polja na $$1000$$, te bi to rješenje izgledalo ovako nekako:

```cpp
int brojParnih = 0;
int parniBrojevi[1000];

int x;

do {
    cin >> x;

    if(x % 2 == 0) {
        parniBrojevi[brojParnih] = x;
        brojParnih++;
    }
} while(x != 0);

cout << brojParnih << endl;

for(int i = 0; i < brojParnih; i++){
    cout << parniBrojevi[i] << " ";
}
```

Međutim, očito je da naš program neće raditi ako upišemo više od $$1000$$ parnih brojeva. Osim toga, ako upišemo puno manje od $$1000$$ parnih brojeva, ostavit ćemo dobar dio rezervirane memorije neiskorištenom. Ovo su samo od nekih problema koje _container_ vector može riješiti.

Vector je dinamičko polje, odnosno polje varijabilne duljine, kojem možemo dodavati elemente na kraj te skidati elemente s kraja u $$O(1)$$ vremenu (u većini slučajeva). Pomoću vectora rješenje gore navedenog zadatka bi izgledalo ovako:

```cpp
vector<int> parniBrojevi;

int x;

do {
    cin >> x;
    
    if(x % 2 == 0) parniBrojevi.push_back(x);
} while(x != 0);

cout << parniBrojevi.size() << endl;

for(auto broj : parniBrojevi){
    cout << broj << " ";
}
```

Kao što smo vidjeli, vector možemo deklarirati linijom:

```cpp
vector<tip> ime;
```

gdje `tip` označava tip podataka koji želimo spremiti u vector (npr. `int`, `char`, `vector<int>` itd.), a `ime` označava ime varijable. U gornjem primjeru to smo učinili u retku `vector<int> parniBrojevi`. Osim ovog načina možemo i postaviti početni broj elemenata i njihovu početnu vrijednost:

```cpp
// Vector znakova veličine 100
vector<char> vectorZnakova(100); 

// Vector doubleova veličine 314, svi elementi su postavljeni na 3.14159
vector<double> vectorPijeva(314, 3.14159);
```

Dodavanje na kraj vectora izvršavamo naredbom `push_back`, a s kraja možemo ukloniti element naredbom `pop_back`. Elementima možemo pristupiti naredbom `at` ili operatorom pristupa (uglate zagrade, [ ]). Prvi element možemo dohvatiti naredbom `front`, a posljednji element naredbom `back`. Veličinu polja možemo dohvatiti naredbom `size`. Možemo izbrisati sve elemente naredbom `clear`. Sve navedene naredbe osim `clear` su konstantne složenosti, a `clear` je linearne složenosti, ovisno o veličini vectora.

Također, kao što smo vidjeli u gornjem rješenju zadatka, možemo iterirati kroz sve elemente niza korištenjem for-each petlje.

Dokumentaciju i još podataka o vectoru možete pronaći [ovdje](https://www.cplusplus.com/reference/vector/vector/).

## Set

Sljedeća struktura o kojoj ćemo pričati je set. Set je struktura podataka u koju u $O(log(n))$ vremenu možemo dodati elemente tako da poredak ostane sortiran. Osim toga, možemo provjeriti i nalazi li se neki element u skupu u $O(log(n))$ vremenu.

Set definiramo ovako:

```cpp
set<tip> ime;
```

gdje `tip` označava tip podataka koji želimo unositi u set, a `ime` označava ime varijable.

```cpp
set<int> parniBrojevi;

// Redom dodajemo brojeve 10, 8, 6, 4 i 2
for(int i = 10; i > 0; i -= 2) {
    parniBrojevi.insert(i);
}

// Ispisujemo sadržaj seta
for(auto broj : parniBrojevi) {
    cout << broj << " ";
}
```

Ispis će izgledati ovako:

```
2 4 6 8 10
```

jer dodavanjem u set elemente postavljamo tako da set ostane sortiran uzlazno. Elemente dodajemo naredbom `insert`, brišemo ih naredbom `erase`, a osim toga možemo i provjeriti nalazi li se neki element u setu naredbom `count` - vraća $1$ ako se element nalazi, odnosno $0$ ako se ne nalazi u skupu. Naredba `size` vraća broj elemenata u setu. U dijelu o iteratorima i članku [Binarno pretraživanje](../sortiranje-i-pretrazivanje/binarno-pretrazivanje) pričat ćemo o još nekim naredbama nad setovima.

Pogledajmo sljedeći primjer:

```cpp
set<int> punoBrojeva;

// Dodajemo redom vrijednosti:
// 1, 1, 1, 2, 2, 2, 3, 3, 3
for(int i = 3; i < 12; i++) {
    punoBrojeva.insert(i / 3);
}

// Ispisujemo elemente seta
for(auto broj : punoBrojeva) {
    cout << broj << " ";
}
```

Ispis će izgledati ovako:

```
1 2 3
```

Naime, set ne prihvaća duplikate, te će se vrijednosti $1$, $2$ i $3$ dodati samo jednom. U slučaju da trebate strukturu sa sličnim karakteristikama kao set, a u koju se mogu dodati i duplikati, možete koristiti strukturu multiset. 

```cpp
multiset<int> punoBrojeva;

// Dodajemo redom vrijednosti:
// 1, 1, 1, 2, 2, 2, 3, 3, 3
for(int i = 3; i < 12; i++) {
    punoBrojeva.insert(i / 3);
}

// Ispisujemo elemente seta
for(auto broj : punoBrojeva) {
    cout << broj << " ";
}
```

Ispis će ovaj put biti drugačiji:

```
1 1 1 2 2 2 3 3 3
```


## Map

Još jedna u nizu struktura o kojima ćemo pričati je map. U map se spremaju parovi ključ-vrijednost, te im možemo pristupati u $O(log(n))$ vremenu, gdje $n$ označava broj ključeva u mapi.

Recimo da imamo zadatak u kojem se od nas traži da učitamo $n$ brojeva, te ispišemo koliko je puta koji broj učitan. Kad bismo znali da će ti brojevi biti npr. manji od $1000$, mogli bismo napraviti polje cijelih brojeva te u njega spremati koliko se puta koji broj pojavio.

```cpp
int n;
cin >> n;

// Postavljamo sve elemente polja na 0
int brojPojavljivanja[1000] = {0};

for(int i = 0; i < n; i++) {
    int broj;
    cin >> broj;

    brojPojavljivanja[broj]++;
}

for(int i = 0; i < 1000; i++) {
    if(brojPojavljivanja[i] > 0) {
        cout << "Broj " << i << " se pojavio " << brojPojavljivanja[i] << " puta.\n";
    }
}
```

Međutim, kada bi učitani brojevi bili puno veći od $1000$, npr. veličine do $10^{9}$, ne bismo mogli napraviti polje te veličine. Taj problem možemo lako riješiti koristeći mapu.

```cpp
int n;
cin >> n;

map<int, int> brojPojavljivanja;

for(int i = 0; i < n; i++) {
    int broj;
    cin >> broj;

    brojPojavljivanja[broj]++;
}

for(auto par : brojPojavljivanja) {
    cout << "Broj " << par.first << " se pojavio " << par.second << " puta.\n";
}
```

Za ulaz:

```
4
1 300 500 500
```

Izlaz će u oba slučaja izgledati ovako:

```
Broj 1 se pojavio 1 puta.
Broj 300 se pojavio 1 puta.
Broj 500 se pojavio 2 puta.
```

Rješenje s mapom je dosta elegantnije, i u najgorem slučaju (kada su svi brojevi različiti) zauzima $O(n)$ memorije. Možda ste primijetili da nigdje nismo inicirali vrijednosti unutar mape, nego smo ih samo povećavali. Naime, operator pristupa [ ], u slučaju da mapa ne sadrži ključ s kojim je pozvan, kreira taj ključ i postavlja njegovu vrijednost na neku zadanu vrijednost, u ovom slučaju $0$. Da smo htjeli početi od neke druge vrijednosti, morali bismo eksplicitno provjeravati nalazi li se ključ u mapi naredbom `count`, te postaviti tu vrijednost ako ključ ne postoji. Još jedna stvar koju ste mogli primijetiti jest da se for-each petljom kroz parove iterira uzlazno ovisno o ključu. 

## Iteratori

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

## Pair

Želimo li u jedan objekt spremiti dva podatka (npr. ime i godine neke osobe), koristimo strukturu pair. Definiramo je na jedan od sljedećih načina:

```cpp
pair<string, int> ivan = {"Ivan", 21};
pair<string, int> luka = make_pair("Luka", 24);
```

Podacima pristupamo koristeći članove `first` i `second`:

```cpp
cout << ivan.first << " " << ivan.second << "\n";
cout << luka.first << " " << luka.second << "\n";
```

Ispis:

```
Ivan 21
Luka 24
```

Više o strukturi pair možete pronaći [ovdje](https://www.cplusplus.com/reference/utility/pair/pair/).

## Tuple

Želimo li spremiti više podataka (npr. ime, godine i prosjek ocjena), možemo koristiti tuple:

```
tuple<string, int, double> ivana = {"Ivana", 22, 4.8};
tuple<string, int, double> lucija = make_tuple("Lucija", 23, 3.95); 
```

Članovima pristupamo koristeći funkciju `get<>`:

```    
cout << get<0>(ivana) << " " << get<1>(ivana) << " " << get<2>(ivana) << "\n";
cout << get<0>(lucija) << " " << get<1>(lucija) << " " << get<2>(lucija) << "\n";
```

Ispis:

```
Ivana 22 4.8
Lucija 23 3.95
```

Više o strukturi tuple možete pronaći [ovdje](https://www.cplusplus.com/reference/tuple/tuple/).

## Ostali containeri

Osim navedenih, na sljedećim linkovima možete pronaći i dokumentaciju ostalih *containera* koji bi vam mogli zatrebati tijekom rješavanja zadataka:

- [queue](https://www.cplusplus.com/reference/queue/queue/)
- [deque](https://www.cplusplus.com/reference/deque/deque/)
- [priority_queue](https://www.cplusplus.com/reference/queue/priority_queue/)
- [stack](https://www.cplusplus.com/reference/stack/stack/)
- [forward_list](https://www.cplusplus.com/reference/forward_list/forward_list/)
- [list](https://www.cplusplus.com/reference/list/list/)
- [unordered_set](https://www.cplusplus.com/reference/unordered_set/unordered_set/)
- [unordered_multiset](https://www.cplusplus.com/reference/unordered_set/unordered_multiset/)
- [unordered_map](https://www.cplusplus.com/reference/unordered_map/unordered_map/)
- [multimap](https://www.cplusplus.com/reference/map/multimap/)
- [unordered_multimap](https://www.cplusplus.com/reference/unordered_map/unordered_multimap/)