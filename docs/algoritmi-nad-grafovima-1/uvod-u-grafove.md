---
title: Uvod u grafove
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Maja Milas' githubUsername='javascript-m'/>

## Što su grafovi?

Graf je struktura podataka sastavljena od **vrhova** (čvorova, _eng. node_) i **bridova** (_eng. edge_). Vrhovi opisuju podatke, a bridovi veze između njih. Graf na slici 1 ima $5$ vrhova i $6$ bridova (i izgleda kao Toblerone).

<img src="/img/algoritmi-nad-grafovima-1/graph1.png" alt="graph1" width="350"/>

## Terminologija

Primijetit ćete da u ovom poglavlju ima _užasno_ puno novih pojmova. Neke koristimo non-stop, a neki se gotovo nikad ne pojavljuju, ali svakako se nemojte opterećivati ako odmah sve na popamtite. Na početku se fokusirajte na dio 'Osnovni pojmovi', a ostalo će doći s vremenom.

### Osnovni pojmovi

-   **staza (2A)** = vodi od vrha **a** do vrha **b** (ne ponavljaju se bridovi)
    -   _put_ je staza u kojoj se ne ponavljaju vrhovi (osim ako je ciklus)
    -   _duljina staze_ je broj bridova u stazi ili suma težina bridova ako je u pitanju težinski graf
-   **ciklus (2B)** = put koji počinje i završava na istom vrhu
-   **podgraf (2C)** = (_eng. subgraph_) graf napravljen od podskupa vrhova i bridova nekog originalnog grafa

![Terminologija1](/img/algoritmi-nad-grafovima-1/terminologija1.png)

### Povezanost grafa

Graf u kojem postoji put između _svaka_ dva vrha je **povezan**. Na gornjim je slikama graf 2A povezan dok graf 2C nije povezan jer ne postoji put između 0 i 1. Povezani dijelovi grafa zovu se **komponente**. Graf 2C ima dvije komponente: {1, 4, 5} i {0, 2, 3}.

### Stablo

**Stablo (3A)** je povezan graf koji se sastoji od $n$ vrhova i $n-1$ bridova te nema cikluse. Postoji _jedinstven_ put između bilo koja dva vrha stabla. Vrhovi koji imaju samo jednog susjeda zovu se **listovi stabla** (_eng. leaf_).

Kada prikazujemo stabla često biramo jedan vrh kojeg nazovemo **korijenom** (_eng. root_) od kojeg krećemo crtati stablo. Kažemo da su njegovi prvi susjedi njegova _djeca_, a on je njihov _roditelj_. Preostali susjedi njegove djece su njihova djeca i tako dalje.

<img src="/img/algoritmi-nad-grafovima-1/terminologija2.png" alt="stablo" width="600"/>

### Bridovi

-   **usmjeren graf (4A)** = (_eng. directed graph_) graf u kojem se preko brida može prijeći samo u jednom smjeru
-   **težinski graf (4B)** = (_eng. weighted graph_) graf u kojem je svakom bridu pridružena _težina_; težina se najčešće interpretira kao duljina brida
    -   duljina puta u težinskom grafu određuje se kao zbroj težina bridova koji čine put

<img src="/img/algoritmi-nad-grafovima-1/terminologija3.png" alt="bridovi" width="400"/>

### Susjedi

Za dva vrha kažemo da su **susjedni** (_eng. neighbours ili adjacent_) ako između njih postoji brid. **Stupanj** (_eng. degree_) nekog vrha je broj njegovih susjeda. Na grafu 4B vrh 2 ima susjede 0 i 3 pa je njegov stupanj 2.

Graf je **regularan** (_eng. regular_) ako su svi vrhovi istog konstantnog stupnja $d$, a **potpun** (_eng. complete_) ako je stupanj svakog vrha $n-1$ (gdje je $n$ ukupan broj vrhova). U potpunom grafu postoji brid između svaka dva vrha.

Vrhovi usmjerenog grafa imaju ulazni i izlazni stupanj. **Ulazni stupanj** (_eng. indegree_) vrha je broj bridova koji završavaju u tom vrhu, a **izlazni stupanj** (_eng. outdegree_) je broj bridova koji počinju u tom vrhu.

### Bojanje grafova

Pri bojanju grafa (_eng. colouring_) svakom je vrhu dodijeljena boja tako da ne postoje dva susjedna vrha iste boje. Graf je $k$-obojiv ako ga možemo obojiti koristeći $k$ boja, a specijalno ako je $k=2$ kažemo da je graf **bipartitni (5)** (_eng. bipartite graph_). **Kromatski broj** grafa je najmanji $k$ za koji je graf $k$-obojiv.

<img src="/img/algoritmi-nad-grafovima-1/terminologija4.png" alt="bipartitni_graf" width="350"/>

## Zašto učiti grafove?

Puno se problema u programiranju može prikazati pomoću grafova. Tipičan primjer takvog problema je mreža cesta i gradova. Ceste prikazujemo kao bridove, a gradove kao vrhove. Sada se možemo pitati postoji li put između neka dva grada ili, ako znamo da postoji više puteva, kolika je duljina najkraćeg puta. Koji gradovi čine povezanu cjelinu unutar koje postoji put između svih gradova? Ulice unutar gradova možemo prikazati kao usmjereni težinski graf gdje je težina brida duljina ulice, a smjer određuje je li ulica dvosmjerna ili jednosmjerna.

Ipak, nisu svi problemi s grafovima tako očiti. Ponekad ćemo grafom prikazivati odnose zaposlenika u nekoj tvrtki ili obiteljsko stablo. Više-manje svi problemi koji se mogu riješiti dinamičkim programiranjem mogu se gledati kao problemi s grafovima.

U svakom slučaju, ne želite preskočiti grafove! 😄
