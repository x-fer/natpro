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

### Kako radi?

Napravimo polje distance u kojem na poziciji distance[i] piše kolika je minimalna udaljenost od početnog do i-tog vrha. Označimo početni vrh slovom $p$ i postavimo udaljenost do njega na nulu. Udaljenost do ostalih vrhova postavimo na $\infty$ (čitaj: neki ogroman broj).

//slika!

Sada iteriramo po svim bridovima. Za svaki brid između $a$ i $b$ težine $w$ provjeravamo možemo li pomoću njega smanjiti udaljenost od početnog vrha. Odnosno za brid (a, b, w) radimo distance[b] = min(distance[b], distance[a]+w).

//slika!2

Postupak ponavljamo $n-1$ puta (n je broj vrhova u grafu) zato što svaki najkraći put može sadržavati maksimalno $n-1$ brid.

### Implementacija

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

**Dijkstrin algoritam**, kao i Bellman-Ford, pronalazi duljine najkraćih puteva pod početnog vrha do svih ostalih. Prednost ovog algoritma je što je brži od Bellman-Forda pa ga možemo koristiti i na većim grafovima. Međutim, ovaj algoritam zahtjeva da graf ne posjeduje bridove negativne težine što nije bio uvjet za Bellman-Ford.

### Kako radi?

Ponovno ćemo koristiti polje distance analogno onom ranije te mu na isti način incijalizirati vrijednosti prije provođenja algoritma.

U svakom koraku biramo neobrađeni vrh s najmanjom udaljenosti od početnog (trenutno _najbliži_ vrh) te pokušavamo smanjiti udaljenost svih njegovih susjeda. Kada smo obradili neki čvor, njegova je udaljenost konačna i više ga ne provjeravamo.

### Implementacija

Da bi algoritam bio efikasan, moramo na brz način moći doći do trenutno najbližeg neobrađenog vrha. Bilo bi super kada bismo polje distance imali u nekoj strukturi koja nam odmah govori koji vrh trenutno ima najmanju udaljenost. Nakon malo kopanja po moždanoj arhivi, sjetit ćete da bi za ovo priliku mogli koristiti prioritetni red (priority_queue) koji omogućava dodavanje i vađenje elemenata u logaritamskoj složenosti. Budući da prioritetni red omogućava pristup najvećem elementu, u njega ćemo spremati parove (-d, x), gdje d označava trenutnu udaljenost vrha x, tako da možemo pritupiti vrhovima s najmanjim udaljenostima.

U sljedećoj je implementaciji graf spremljen kao vector<vector<pair<int,int>>>, odnosno kao lista susjedstva gdje je uz vrh napisana i težina brida. Početni brid je $p$. Koristimo i polje processed u kojem zapisujemo jesmo li već posjetili neki vrh.

```cpp
for(int i=0; i<n; i++) distance[i] = INF;
distance[p] = 0;
q.push({0, p});

while(!q.empty()) {
    int a = q.top().second;
    q.pop();

    if(processed[a]) continue;
    for(auto u : adjList[a]) {
        int b = u.first, w = u.second;
        if(distance[a]+w < distance[b]) {
            distance[b] = distance[a] + w;
            q.push({-distance[b], b});
        }
    }
}

```

:::noteprimijetite

Složenost ovog algoritma je $O(n+m*\log{m})$ jer algoritam prolazi kroz sve vrhove i za svaki brid u queue doda najviše jedan par.

:::

## Floyd-Warshall

**Floyd-Warshall** algortam za razliku od prethodna dva traži najkraći put između **svaka dva** vrha grafa. Algoritam koristi 2D matricu u kojoj su zapisane udaljenosti među vrhovima. Na početku računamo samo udaljenosti koje dobijemo direktnim vezama, a ostale postavljamo na beskonačno. Kasnije kombinacijom bridova popravljamo i ostale udaljenosti dok ne dobijemo točno rješenje.

### Kako radi?

Prvo napravimo matricu udaljenosti na sljedeći način:

-   distance[i][j]=0 ako je i=j
-   distance[i][j]=w ako postoji brid između vrhova i i j
-   distance[i][j]=INF ako ne postoji brid između vrhova i i j

Pri svakom koraku algoritam bira jedan vrh te preko njega pokušava popraviti udaljenosti do svih vrhova. Drugim riječima, ako popravljamo udaljenosti pomoću nekog vrha x, pitamo se za svaka dva čvora a i b je li bolja vrijednost distance[a][b] (trenutna njihova najkraća udaljenost) ili je bolje da idemo preko vrha x, odnosno vrijednost distance[a][x] + distance[x][b]

### Implementacija

Implementacja je jednostavna blabla

## Usporedba algoritama

Dodaj onu tablicu koju si napravila Lei :)
