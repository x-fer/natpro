---
title: Union-find struktura
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Maja Milas' githubUsername='javascript-m'/>

Motivacija -> primjer nekog zadatka gdje bi se upotrijebio

## Struktura

Union find (nekad i disjoint set) je struktura podataka koja elemente raspodjeljuje u skupove. Za dva skupa kažemo da su disjunktni (disjoint) ako ne postoji element koji pripada u oba skupa. Struktura je napravljena tako da svaki skup ima svoga predstavnika (representative), a elementi skupa su preko lanca povezani s predstavnikom. Na slici ispod su prikazana tri skupa, {1, 4, 7}, {5} i {2, 3, 6, 8}. Predstavnici skupova su redom 4, 5 i 2.

<img src="/img/algoritmi-nad-grafovima-1/uf1.png" alt="union_find" width="500"/>

Union find podržava dvije operacije:

-   **unite** - operacija koja spaja dva skupa
-   **find** - operacija koja traži predstavnika skupa koji sadrži neki element

Obje operacije rade u logaritamskoj složenosti.

Dva skupa možemo spojiti tako da povežemo njihove predstavnike. Na slici ispod spojili smo skupove {1, 4, 7} i {2, 3, 6, 8} tako da 2 postaje novi predstacnik, a skup koji u konačnici dobivamo je {1, 2, 3, 4, 6, 7, 8}.

<img src="/img/algoritmi-nad-grafovima-1/uf2.png" alt="union_find2" width="400"/>

Pokazuje se da je prilikom spajanja uvijek efikasnije spajati manji skup na veći te. Na taj je način naš skup više 'razgranat' i možemo postići logaritamsku složenost pretraživanja.

## Implementacija

Za ovu ćemo implementaciju koristiti 1D polje `link` gdje će na i-tom mjestu pisati predstavnik i-tog elemenata te polje `len` gdje ćemo na mjestima na kojima su predstavnici pisati veličina skupa kojeg predstavljaju.

Na početku svaki element pripada svom skupu pa je i sam svoj predstavnik. Duljina svih skupova je $1$.

```cpp
for(int i=0; i<n; i++) link[i] = i;
for(int i=0; i<n; i++) len[i] = 1;
```

Funkcija **find(x)** vraća predstavnika za element x. Pretraživanje obavljamo penjanjem po lancu dok ne dođemo do predstavnika.

```cpp
int find(int x) {
    while(x != link[x]) x = link[x]; //penjanje po lancu
    return x;
}
```

Možemo napisati i funkciju koja provjerava jesu li dva elementa u istom skupu.

```cpp
bool same(int a, int b) {
    return find(a) == find(b);
}
```

Funkcija **unite(a,b)** spaja skupove koji sadrže element a i element b. Prvo nalazimo njihove predstavnike i provjeravamo koji je skup manji, a potom spajamo manji skup na veći.

```cpp
void unite(int a, int b) {
    a = find(a);
    b = find(b);
    if(len[a] < len[b]) swap(a,b);
    len[a] += len[b];
    link[b] = a;
}
```
