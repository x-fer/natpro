---
title: Vector
---

O vectoru, primjene, ogranicenja, kompleksnost, zadaci

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