---
title: Tipični program
---

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