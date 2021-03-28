---
title: Map
---

O mapu, kompleksnosti, primjeni, zadaci, multimapu, unordered varijantama

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