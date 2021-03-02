---
title: Tipovi podataka
---

### int

Cjelobrojni tip podataka `int` zauzima 32 bita memorije, odnosno 4 bajta, te pokriva cijele brojeve od -2<sup>31</sup> do 2<sup>31</sup> - 1, odnosno otprilike od oko -2.147 x 10<sup>9</sup> do oko 2.147 x 10<sup>9</sup>.

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

jer se u varijablu `b` spremi kriva vrijednost zato što je vrijednost 50000<sup>2</sup> veća od gornje granice tipa `int`, te se vrijednost "prelije" natrag u negativne brojeve.

### long long

Da bismo izbjegli pogreške nastale zbog preljeva (eng. _overflow_), koristit ćemo tip `long long` koji zauzima 64 bita memorije, a pokriva cijele brojeve od -2<sup>63</sup> do 2<sup>63</sup> - 1, odnosno od oko -9.223 x 10<sup>18</sup> do oko 9.223 x 10<sup>18</sup>.

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


