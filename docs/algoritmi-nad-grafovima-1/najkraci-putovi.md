---
title: Najkraći putovi
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Maja Milas' githubUsername='javascript-m'/>

Traženje najkraćeg puta između dva vrha grafa vrlo je čest problem s puno praktičnih primjena. U netežinskim grafovima duljina najkraćeg puta odgovara broju bridova između dva odabrana vrha. Da bi pronašli takav put dovoljno je pustiti BFS iz početnog čvora i odmah dobivamo rješenje. Međutim, ako je graf težinski, stvar se malo komplicira jer BFS ponekad daje krivo rješenje. U ovom ćemo potpoglavlju tražiti najkraće puteve na **težinskim** grafovima.

## Bellman-Ford

**Bellman-Ford** algoritam pronalazi duljinu najkraćeg puta od nekog početnog vrha do svih ostalih vrhova u grafu. Algoritam radi na svim tipovima grafova pod uvjetom da nemaju ciklus s negativnom sumom težina. Ali, ako u grafu postoji ciklus s negativnom težinom, ovaj algoritam to može detektirati.

//gif

### 'Kuharica'

Napravimo polje distance u kojem na poziciji distance[i] piše kolika je minimalna udaljenost od početnog do i-tog vrha. Označimo početni vrh slovom $p$ i postavimo udaljenost do njega na nulu. Udaljenost do ostalih vrhova postavimo na $\infty$ (čitaj: neki ogroman broj).

//slika!

Sada iteriramo po svim bridovima. Za svaki brid između $a$ i $b$ težine $w$ provjeravamo možemo li pomoću njega smanjiti udaljenost od početnog vrha. Odnosno za brid (a, b, w) radimo distance[b] = min(distance[b], distance[a]+w).

//slika!2

Postupak ponavljamo $n-1$ puta (n je broj vrhova u grafu) zato što svaki najkraći put može sadržavati maksimalno $n-1$ brid.

U sljedećoj je implementaciji graf spremljen kao lista bridova s težinama (vector<tuple<int,int,int>>).

```cpp
//INF je neki veliki broj, p je pocetni vrh
for(int i=0; i<n; i++) distance[i] = INF;
distance[p] = 0;

for(int i=0; i<n-1; i++) {
    for(auto e : edgeList) {
        int a, b, w;
        tie(a, b, w) = e; // "raspakira" tuple u a, b i w
        distance[b] = min(distance[b], distance[a]+w);
    }
}

```

:::noteprimijetite

Složenost ovog algoritma je $O(n*m)$, gdje je $n$ broj vrhova, a $m$ broj bridova.

:::

### Negativan ciklus

Ako u grafu postoji ciklus kojemu je suma težina negativna, ne možemo dobro definirati najkraći put između dva čvora zato što ćemo uvijek moći još jednom obići ciklus i smanjiti ukupan put. Ako nakon $n-1$ koraka i dalje možemo popraviti put do nekog čvora, to nam govori da graf ima takav ciklus.

## Dijkstrin algoritam

Članak je u izradi.

## Floyd-Warshall

Članak je u izradi.
