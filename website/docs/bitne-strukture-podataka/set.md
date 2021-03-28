---
title: Set
---

O setu, kompleksnosti, primjeni, zadacima, multisetu, unordered varijantama

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

jer dodavanjem u set elemente postavljamo tako da set ostane sortiran uzlazno. Elemente dodajemo naredbom `insert`, brišemo ih naredbom `erase`, a osim toga možemo i provjeriti nalazi li se neki element u setu naredbom `count` - vraća $1$ ako se element nalazi, odnosno $0$ ako se ne nalazi u skupu. Naredba `size` vraća broj elemenata u setu. U članku [Iteratori](iteratori) i članku [Binarno pretraživanje](../sortiranje-i-pretrazivanje/binarno-pretrazivanje) pričat ćemo o još nekim naredbama nad setovima.

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

**UNORDERED SET, DI SE KORISTE, CUSTOM COMPARATOR**