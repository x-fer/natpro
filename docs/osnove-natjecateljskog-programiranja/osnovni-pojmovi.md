---
title: Osnovni pojmovi
---

## Tipični program

### Šablona

Različite platforme za natjecateljsko programiranje imaju različite vrste zadataka, različita ograničenja, na nekim natjecanjima smijete koristiti dijelove programskog koda napisane prije natjecanja (npr. [Codeforces](https://codeforces.com)), a na nekima ne smijete (npr. [Natjecanje iz informatike](https://informatika.azoo.hr)), pa se iz tog razloga i priprema za različita natjecanja razlikuje.

Međutim, više-manje svako rješenje započinje pisanjem sljedećih linija koda:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main(){
    // Rješenje vašeg zadatka
}
```

U prvom retku uključujemo biblioteku u kojoj se nalazi velik broj struktura podataka i funkcija koje će nam sigurno trebati tijekom rješavanja zadataka. Iako u jednom zadatku sigurno nećemo koristiti većinu mogućnosti ove biblioteke, bolje je uključiti sve odjednom nego trošiti vrijeme na razmišljanje o tome koju bismo specifičnu biblioteku trebali uključiti.

U drugom retku postavljamo prostor imena `std` kao zadani prostor imena. Ta naredba nam također olakšava pisanje koda jer bismo inače morali pisati `std::` ispred puno drugih izraza (npr. `std::cin`, `std::cout`, `std::string`). 

Zatim slijedi funkcija `main` u koju upisujemo svoje rješenje određenog zadatka.

U slučaju da se planirate natjecati na natjecanjima gdje je dozvoljeno korištenje unaprijed napisanog koda, uvijek je dobro imati spremljen _template_ koji možete samo kopirati i lijepiti te si tako dodatno uštedjeti neko vrijeme.

### Kompajliranje

Svoje programe možete kompajlirati i pokrenuti naredbom

```
g++ -std=c++11 -O2 -Wall program.cpp -o program
```

u naredbenom retku, što će stvoriti izvršnu datoteku koju ćete zatim moći pokrenuti.

### Dodatne mogućnosti

Iako su gore navedena šablona i naredba za kompajliranje dovoljno dobri, možemo ih još malo doraditi kako bismo brže pisali kod i kako bi se program brže izvršavao.

Možemo ubrzati čitanje ulaznih podataka korištenjem sljedeća dva retka na početku funkcije `main`:

```cpp
ios::sync_with_stdio(0);
cin.tie(0);
```

Također, često se događa da shvatite da imate grešku u programu, zbog toga izvršavate svoj program nekoliko puta koristeći iste ulazne podatke, te na kopiranje i lijepljenje ulaznih podataka trošite previše vremena. Taj problem se može izbjeći tako da zalijepite ulazne podatke u neku datoteku (npr. `ulaz.txt`), te korištenjem naredbe

```cpp
freopen("ulaz.txt", "r", stdin);
```

preusmjerite sadržaj datoteke `ulaz.txt` na standardni ulaz. Međutim, koristeći ovakvo rješenje, morali biste uklanjati ovaj redak prije predaje svog rješenja. Da bismo to izbjegli, možemo koristiti uvjetno kompajliranje na samom početku funkcije `main`:

```cpp
#ifdef DEBUG
freopen("ulaz.txt", "r", stdin);
#endif
```

te dodati zastavicu `-DDEBUG` u naredbu kompajleru tako da naredba sad izgleda ovako:

```
g++ -std=c++11 -O2 -Wall -DDEBUG program.cpp -o program
```

Ovime ćete omogućiti da se na vašem računalu ulaz čita iz datoteke `ulaz.txt`, a na poslužitelju koji ocjenjuje vaše rješenje sa standardnog ulaza. Uzmite u obzir da se datoteka `ulaz.txt` mora nalaziti u istoj mapi kao i `program.cpp`.

Nakon ovih poboljšanja, vaša šablona bi trebala izgledati ovako:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main(){
    #ifdef DEBUG
    freopen("ulaz.txt", "r", stdin);
    #endif

    ios::sync_with_stdio(0);
    cin.tie(0);

    // Rješenje vašeg zadatka
}
```

### Poboljšanja specifična za Codeforces

S obzirom da će većina primjera u ovim materijalima biti s natjecanja na platformi Codeforces, treba spomenuti da se na toj platformi ulazni podaci sastoje od više test primjera te se algoritam mora izvršiti više puta u jednom izvršavanju programa. Iz tog razloga možemo napraviti posebnu šablonu za Codeforces koja će izgledati ovako:

```cpp
#include <bits/stdc++.h>

using namespace std;

int main(){
    #ifdef DEBUG
    freopen("ulaz.txt", "r", stdin);
    #endif

    ios::sync_with_stdio(0);
    cin.tie(0);

    int TEST;
    cin >> TEST;

    while(TEST--){
        // Rješenje vašeg zadatka
    }
}
```

Bitno je napomenuti da u svakom zadatku morate pažljivo pročitati kako izgledaju ulazni podaci, nekad se znaju pojaviti i zadaci u kojima se u jednom primjerku ulaza nalazi samo jedan test!

## Tipovi podataka

### int

Cjelobrojni tip podataka `int` zauzima $32$ bita memorije, odnosno $4$ bajta, te pokriva cijele brojeve od $-2^{31}$ do $2^{31} - 1$, odnosno otprilike od oko $-2.147 \cdot 10^{9}$ do oko $2.147 \cdot 10^{9}$.

U slučaju da trebate izvršiti neke aritmetičke operacije s velikim brojevima, često se dogodi da prekoračimo granicu tipa `int` te zbog toga rješenja zadataka ispadnu netočna. Na primjer, sljedeći isječak koda daje neočekivano rješenje:

```cpp
int a = 50000;
int b = a*a;
int c = b/2;

cout << a << " " << b << " " << c;
```

Očekivali bismo ovakav ispis:

```
50000 2500000000 1250000000
```

Međutim, dobijemo ovakav ispis:

```
50000 -1794967296 -897483648
```

jer se u varijablu $b$ spremi kriva vrijednost zato što je vrijednost $50000^{2}$ veća od gornje granice tipa `int`, te se vrijednost "prelije" natrag u negativne brojeve.

### long long

Da bismo izbjegli pogreške nastale zbog preljeva (eng. _overflow_), koristit ćemo tip `long long` koji zauzima 64 bita memorije, a pokriva cijele brojeve od $-2^{63}$ do $2^{63} - 1$, odnosno od oko $-9.223 \cdot 10^{18}$ do oko $9.223 \cdot 10^{18}$.

Zamjenom tipa `int` za tip `long long` u prošlom isječku koda:

```cpp
long long a = 50000;
long long b = a*a;
long long c = b/2;

cout << a << " " << b << " " << c;
```

Dobijemo očekivani izlaz:

```
50000 2500000000 1250000000
```

Također, s obzirom da kao natjecatelji želimo uštedjeti što je više moguće vremena, možemo na početak naše šablone (ispod `#include <bits/stdc++.h>` retka) dodati i liniju:

```cpp
#define ll long long
```

Te tako uštedjeti vrijeme pišući `ll` umjesto `long long`.

### float

Želimo li koristiti brojeve s pomičnim zarezom, koristimo tip `float`.

Bitno je spomenuti da često preciznost tipa `float` nije dovoljno dobra te ga je bolje izbjegavati. Na primjer, sljedeći isječak koda ne daje očekivani ispis:

```cpp
float x = 3.14159265f;

cout << x << endl;
printf("%1.8f", x);
```

Ispis:

```
3.14159
3.14159274
```


### double 

Želimo li koristiti brojeve s pomičnim zarezom dvostruke preciznosti, koristimo tip `double`. Uzmemo li prošli isječak i promijenimo tip, dobit ćemo drugačiji ispis.

```cpp
double x = 3.14159265;

cout << x << endl;
printf("%1.8f", x);
```

Ispis:

```
3.14159
3.14159265
```

### char

Želimo li u memoriju spremiti neki znak, koristimo tip `char`. Taj tip je zapravo cjelobrojni tip podataka, može se pretvarati u ostale cjelobrojne tipove te se mogu i vršiti neke aritmetičke operacije s njima, poput zbrajanja i oduzimanja (mogu se vršiti i ostale operacije, ali to nema baš smisla).

```cpp
cout << (int)'a' << "\n";
cout << (char)('a' + 1) << "\n";
cout << (char)(97) << "\n";
cout << ('a' < 'z') << "\n";
cout << (int)('a' * 'b'); // Ovo, iako radi, nema baš smisla...
```

Ispis:

```
97
b
a
1
9506
```

### string

Želimo li u memoriju spremiti nekakvu riječ ili rečenicu, koristimo `string`. `string` nije osnovni tip podataka, već je više kao polje podataka tipa `char` koje ima ugrađene neke funkcije koje možemo koristiti da bismo manipulirali tim podacima, ali o tome više u poglavlju o tipu `string`.

Za spremanje podataka u varijablu tipa `string` možemo koristiti naredbu `cin`, međutim, ako taj izraz na ulazu sadrži razmake, u varijablu će se spremiti samo prva riječ. Da bismo spremili čitav redak, koristimo naredbu `getline`. Na primjer, za ulaz:

```
NatPro je super!
```

Sljedeći isječak koda

```cpp
string s;
cin >> s;

cout << s;
```

će ispisati `NatPro`, dok će za sljedeći isječak

```cpp
string s;
getline(cin, s);

cout << s;
```

ispisati `NatPro je super!`.

Neke funkcije s kojima ćete se susretati kao argumente primaju tip `const char *` te iz tog razloga neće raditi s tipom `string`, međutim, korištenjem funkcije `c_str` možete pretvoriti `string` u `const char *` te tako riješiti potencijalni problem.

```cpp
string s = "echo NatPro je super!";

// system(s); Ne radi!
system(s.c_str());
```

U ovom primjeru naredba `system` izvršava naredbu u naredbenom retku.

## Osnovna matematika

TODO: o osnovnim stvarima iz matematike, logike i teorije skupova koje treba znati za rjesavanje zadataka