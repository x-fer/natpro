---
title: Bitni containeri
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Ivan Vlahov' githubUsername='vlahovivan'/>

## Što su containeri?

U ovom poglavlju ukratko ćemo objasniti kako funkcioniraju i što su *containeri*. *Container* je objekt u koji možemo spremiti više drugih objekata, te koristeći članske funkcije na određeni način manipulirati tim podacima, iterirati kroz njih, raditi određene upite i slično kako bismo riješili neki zadatak. U C++-u su *containeri* implementirani kao *class template*, što znači da u njih možemo pohraniti bilo koju vrstu objekata. Kao što ćemo vidjeti u nastavku, različiti *containeri* se različito ponašaju, pa počnimo od jednostavnijih.

## Vektor

Recimo da imate zadatak u kojem se od vas traži da s ulaza čitate brojeve sve dok ne učitate broj $0$, a zatim trebate ispisati broj učitanih parnih brojeva te sve učitane parne brojeve onim redoslijedom kojim su učitani. Ovaj zadatak bismo mogli riješiti koristeći polje, međutim, postavlja se pitanje, kako odrediti veličinu tog polja? Mogli bismo nagađati da nećemo učitati više od npr. $1000$ parnih brojeva, pa postaviti veličinu polja na $1000$, te bi to rješenje izgledalo ovako nekako:

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

Međutim, očito je da naš program neće raditi ako upišemo više od $1000$ parnih brojeva. Osim toga, ako upišemo puno manje od $1000$ parnih brojeva, ostavit ćemo velik dio rezervirane memorije neiskorištenom. Ovo su samo neki od problema koje _container_ vektor može riješiti.

Vektor je dinamičko polje, odnosno polje varijabilne duljine, kojem možemo dodavati elemente na kraj te skidati elemente s kraja u $O(1)$ vremenu (u većini slučajeva). Pomoću vektora rješenje gore navedenog zadatka bi izgledalo ovako:

```
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

Kao što smo vidjeli, vektor možemo deklarirati linijom:

```cpp
vector<tip> ime;
```

gdje `tip` označava tip podataka koji želimo spremiti u vektor (npr. `int`, `char`, `vector<int>` itd.), a `ime` označava ime varijable. U gornjem primjeru to smo učinili u retku `vector<int> parniBrojevi`. Osim ovog načina možemo i postaviti početni broj elemenata i njihovu početnu vrijednost:

```cpp
// Vektor znakova veličine 100
vector<char> vektorZnakova(100); 

// Vektor doubleova veličine 314, svi elementi su postavljeni na 3.14159
vector<double> vektorPijeva(314, 3.14159);
```

Dodavanje na kraj vektora izvršavamo naredbom `push_back`, a s kraja možemo ukloniti element naredbom `pop_back`. Elementima možemo pristupiti naredbom `at` ili operatorom pristupa (uglate zagrade, [ ]). Prvi element možemo dohvatiti naredbom `front`, a posljednji element naredbom `back`. Veličinu polja možemo dohvatiti naredbom `size`. Možemo izbrisati sve elemente naredbom `clear`. Sve navedene naredbe osim `clear` su konstantne složenosti, a `clear` je linearne složenosti, ovisno o veličini vektora.

Također, kao što smo vidjeli u gornjem rješenju zadatka, možemo iterirati kroz sve elemente niza korištenjem range-based for petlje.

Dokumentaciju i još podataka o vektoru možete pronaći [ovdje](https://www.cplusplus.com/reference/vector/vector/).

## Set

Sljedeća struktura o kojoj ćemo pričati je set. Set je struktura podataka u koju u $O(\log n)$ vremenu možemo dodati elemente tako da poredak ostane sortiran. Osim toga, možemo provjeriti i nalazi li se neki element u skupu u $O(\log n)$ vremenu.

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

Dokumentaciju i još podataka o setu možete pronaći [ovdje](https://www.cplusplus.com/reference/set/set/).


## Mapa

Još jedna u nizu struktura o kojima ćemo pričati je mapa. U mapu se spremaju parovi ključ-vrijednost, te im možemo pristupati u $O(\log n)$ vremenu, gdje $n$ označava broj ključeva u mapi.

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

Rješenje s mapom je dosta elegantnije, i u najgorem slučaju (kada su svi brojevi različiti) zauzima $O(n)$ memorije. Možda ste primijetili da nigdje nismo inicirali vrijednosti unutar mape, nego smo ih samo povećavali. Naime, operator pristupa [ ], u slučaju da mapa ne sadrži ključ s kojim je pozvan, kreira taj ključ i postavlja njegovu vrijednost na neku zadanu vrijednost, u ovom slučaju $0$. Da smo htjeli početi od neke druge vrijednosti, morali bismo eksplicitno provjeravati nalazi li se ključ u mapi naredbom `count`, te postaviti tu vrijednost ako ključ ne postoji. Još jedna stvar koju ste mogli primijetiti jest da se range-based for petljom kroz parove iterira uzlazno ovisno o ključu. 

Dokumentaciju i još podataka o mapi možete pronaći [ovdje](https://www.cplusplus.com/reference/map/map/).

## Red

Red je tzv. FIFO struktura podataka (od eng. *first in, first out*). Podatke možemo na kraj reda ubacivati i čitati u $O(1)$ složenosti, te ih s početka reda možemo čitati i ukloniti u $O(1)$ složenosti. Struktura se koristi u nekoliko algoritama (npr. [BFS](../algoritmi-nad-grafovima-1/pretrazivanje-grafova.md#breadth-first-search)), a u C++-u je implementirana kao container `queue`. Podatke na kraj reda dodajemo koristeći metodu `push`, a uklanjamo ih s početka reda koristeći metodu `pop`. Podacima s početka pristupamo koristeći metodu `front`, a s kraja metodom `back`. Veličinu reda provjeravamo metodom `size`, a metodom `empty` provjeravamo je li red prazan. Sve navedene metode su konstantne složenosti.

```
queue<int> q;
q.push(1);
q.push(2);
q.push(3);

cout << q.size() << " " << q.empty() << "\n";

while(!q.empty()) {
    cout << q.front() << " ";
    q.pop();
}
```

Ispis:

```
3 0
1 2 3
```

Dokumentaciju i još podataka o redu možete pronaći [ovdje](https://www.cplusplus.com/reference/queue/queue/).


## Prioritetni red

Prioritetni red je struktura slična redu, no u prioritetnom redu imamo pristup najvećem elementu u kolekciji. Dodavanje i uklanjanje elementa iz strukture se odvija u logaritamskoj složenosti, a pristup najvećem elementu, pristup broju elemenata i provjera je li prioritetni red prazan se odvija u konstantnoj složenosti. Pomoću prioritetnog reda se npr. može implementirati [Dijkstrin algoritam](../algoritmi-nad-grafovima-1/najkraci-putovi.md#dijkstrin-algoritam). U C++-u je implementiran u containeru `priority_queue`, a metode dodavanja i uklanjanja su redom `push` i `pop`, dok su pristup najvećem elementu, broju elemenata i provjeri je li prioritetni red prazan redom metode `top`, `size` i `empty`.

```
priority_queue<int> pq;

pq.push(2);
pq.push(3);
pq.push(1);

cout << pq.size() << " " << pq.empty() << "\n";

while(!pq.empty()) {
    cout << pq.top() << " ";
    pq.pop();
}
```

Ispis:

```
3 0
3 2 1
```

Osim traženja najvećeg elementa, možemo korištenjem komparatorskih funkcija iz standardne biblioteke implementirati i prioritetni red koji traži najmanji element:

```
priority_queue<int, vector<int>, greater<int>> pqMin;

pqMin.push(2);
pqMin.push(3);
pqMin.push(1);

cout << pqMin.size() << " " << pqMin.empty() << "\n";

while(!pqMin.empty()) {
    cout << pqMin.top() << " ";
    pqMin.pop();
}
```

:::infoinformacija

`priority_queue` se može parametrizirati samo tipom, ili tipom, unutarnjom strukturom i komparatorskom funkcijom, te zbog toga moramo kao parametar dati i `vector<int>` koji je i zadana unutarnja struktura implementacije containera `priority_queue`.

:::

Dokumentaciju i još podataka o prioritetnom redu možete pronaći [ovdje](https://www.cplusplus.com/reference/queue/priority_queue/).


## Stog

Stog je tzv. LIFO struktura (od eng. *last in, first out*). Podatke možemo ubacivati, uklanjati i čitati s vrha stoga u $O(1)$ složenosti. Pomoću stoga se npr. može implementirati [DFS](../algoritmi-nad-grafovima-1/pretrazivanje-grafova.md#depth-first-search), a u C++-u je implementiran containerom `stack` koji ima metode `push`, `pop` i `top` koje redom odgovaraju ubacivanju, uklanjanju i čitanju s vrha stoga, te metode `size` i `empty` koje redom odgovaraju provjeri broja elemenata i provjeri je li stog prazan.

```
stack<int> st;

st.push(3);
st.push(2);
st.push(1);

cout << st.size() << " " << st.empty() << "\n";

while(!st.empty()) {
    cout << st.top() << " ";
    st.pop();
}
```

Ispis:

```
3 0
1 2 3 
```

Dokumentaciju i još podataka o stogu možete pronaći [ovdje](https://www.cplusplus.com/reference/stack/stack/).

## Iteratori

Tijekom rada s *containerima* kao što su `vector` i `set`, često ćete se susretati s funkcijama koje kao parametre primaju *iteratore*. U ovom članku ćemo govoriti o iteratorima i dat ćemo nekoliko primjera iteratora za koje biste trebali znati.

Iteratori služe kao pokazivači na elemente određenih *containera*. Pomoću njih možemo, kao što im ime govori, iterirati kroz elemente određenih struktura te ih koristiti kao parametre u brojnim algoritmima standardne biblioteke. Podacima na koje iteratori pokazuju pristupamo koristeći operator `*`.

Uzmimo za primjer jedan `set` i jedan `vector`.

```cpp
set<int> s = {1, 2, 3, 4, 5, 6}; // jos jedan nacin za dodati elemente u set
vector<int> v = {1, 1, 2, 3, 5, 8}; // jos jedan nacin za dodati elemente u vektor
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

```
pair<string, int> ivan = {"Ivan", 22};
pair<string, int> luka = make_pair("Luka", 24);
```

Podacima možemo pristupati koristeći članove `first` i `second`:

```
cout << ivan.first << " " << ivan.second << "\n";
cout << luka.first << " " << luka.second << "\n";
```

Ispis:

```
Ivan 22
Luka 24
```

Možemo im pristupiti i korištenjem funkcije `tie`:

```
string lukaName;
int lukaAge;

tie(lukaName, lukaAge) = luka;

cout << lukaName << " " << lukaAge << "\n";
```

Dobijemo očekivani ispis:

```
Luka 24
```

:::cautionoprez

Sljedeći tekst se odnosi na [C++17](https://en.wikipedia.org/wiki/C%2B%2B17) i kasnije verzije jezika C++!

:::

Još jedan način pristupa parovima je korištenjem tzv. *structured bindinga*:

```
vector<pair<string, int>> people = {
    {"Ivan", 22},
    {"Vice", 24},
    {"Marko", 32},
    {"Lucia", 34}
};

auto [ivanName, ivanAge] = people[0];

cout << ivanName << " is " << ivanAge << " years old.";
```

Dobit ćemo očekivani ispis:

```
Ivan is 22 years old.
```

Slično ih možemo koristiti i kad koristimo range-based for petlju:

```
for(auto &[name, age] : people) {
    cout << name << " is " << age << " years old.\n";
}
```

Dobijemo sljedeći ispis:

```
Ivan is 22 years old.
Vice is 24 years old.
Marko is 32 years old.
Lucia is 34 years old.
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

Možemo pristupiti podacima i korištenjem funkcije `tie`:

```
string ivanaName;
int ivanaAge;
double ivanaAvg;

tie(ivanaName, ivanaAge, ivanaAvg) = ivana;
cout << ivanaName << " " << ivanaAge << " " << ivanaAvg << "\n";
```

Dobijemo očekivani ispis:

```
Ivana 22 4.8
```


:::cautionoprez

Sljedeći tekst se odnosi na [C++17](https://en.wikipedia.org/wiki/C%2B%2B17) i kasnije verzije jezika C++!

:::


Kao i za parove, i za tuple možemo koristiti *structured binding*:

```
vector<tuple<string, string, int, int>> matches = {
    {"Croatia", "Nigeria", 2, 0},
    {"Argentina", "Croatia", 0, 3},
    {"Iceland", "Croatia", 1, 2}
};

auto [arg, cro, argScore, croScore] = matches[1];

cout << arg << " " << argScore << ":" << croScore << " " << cro << "\n";

for(auto &[team1, team2, score1, score2] : matches) {
    cout << team1 << " " << score1 << ":" << score2 << " " << team2 << "\n";
}
```

Dobijemo očekivani ispis:

```
Argentina 0:3 Croatia
Croatia 2:0 Nigeria
Argentina 0:3 Croatia
Iceland 1:2 Croatia
```

Više o strukturi tuple možete pronaći [ovdje](https://www.cplusplus.com/reference/tuple/tuple/).

## Ostali containeri

Osim navedenih, na sljedećim linkovima možete pronaći i dokumentaciju ostalih *containera* koji bi vam mogli zatrebati tijekom rješavanja zadataka:

- [deque](https://www.cplusplus.com/reference/deque/deque/)
- [forward_list](https://www.cplusplus.com/reference/forward_list/forward_list/)
- [list](https://www.cplusplus.com/reference/list/list/)
- [unordered_set](https://www.cplusplus.com/reference/unordered_set/unordered_set/)
- [unordered_multiset](https://www.cplusplus.com/reference/unordered_set/unordered_multiset/)
- [unordered_map](https://www.cplusplus.com/reference/unordered_map/unordered_map/)
- [multimap](https://www.cplusplus.com/reference/map/multimap/)
- [unordered_multimap](https://www.cplusplus.com/reference/unordered_map/unordered_multimap/)

## Vrijednost ili referenca?

Prilikom slanja containera kao argumente funkcija bitno je pripaziti na to šaljemo li container kao vrijednost (eng. *pass by value*) ili kao referencu (eng. *pass by reference*). Pogledajmo sljedeću funkciju:

```
void printAddressValue(vector<int> v) {
    cout << "By value:\t" << &v[0] << "\n";
}
```

Ova funkcija ispisuje adresu prvog elementa vektora `v`. Pogledajmo sad sljedeći isječak koda:

```
vector<int> v = {1, 2, 3};

cout << "v[0] address:\t" << &v[0] << "\n";

printAddressValue(v);
```

Ovaj isječak dat će sljedeći ispis:

```
v[0] address:   0x55c99becbeb0
By value:       0x55c99becc2e0
```

Iz ovoga možemo vidjeti da poziv funkcije `printAddressValue` kopira prvu vrijednost vektora `v` na novu adresu. Takvo ponašanje se nekad slučajno može ponoviti nekoliko stotina ili tisuća puta (npr. u rekurzivnim funkcijama), što može uzrokovati gubitak bodova na natjecanju zbog prekoračenja memorijskog ograničenja. Ako želimo koristiti uvijek iste podatke bez kopiranja, bolje je poslati referencu na vektor kao argument funkcije:

```
void printAddressReference(vector<int> &v) {
    cout << "By reference:\t" << &v[0] << "\n";
}
```

Pozovemo li tu funkciju za vektor `v`, dobit ćemo očekivani ispis:

```
By reference:   0x55c99becbeb0
```

Vidimo da je ta adresa jednaka onoj koju smo dobili u funkciji `main`, iz čega možemo zaključiti da se podaci ne kopiraju.

Slična stvar se događa u range-based for petljama:

```
cout << "v addresses:\t\t\t";
for(int i=0; i<v.size(); i++) {
    cout << &v[i] << " ";
}

cout << "\nrange-based for by value:\t";
for(auto it : v) {
    cout << &it << " ";
}

cout << "\nrange-based for by reference:\t";

for(auto &it : v) {
    cout << &it << " ";
}
```

Dobijemo sljedeći ispis:

```
v addresses:                    0x55c99becbeb0 0x55c99becbeb4 0x55c99becbeb8 
range-based for by value:       0x7ffcc1bbf8ec 0x7ffcc1bbf8ec 0x7ffcc1bbf8ec 
range-based for by reference:   0x55c99becbeb0 0x55c99becbeb4 0x55c99becbeb8 
```

Iz čega vidimo da se prilikom korištenja referenci vrijednosti ne kopiraju na novu adresu.