---
title: "Pohlepni pristupi" 
---

import Author from '@site/src/react_components/author.js';

<Author authorName='Petar Mihalj' githubUsername='PetarMihalj'/>

**Pohlepni pristupi** predstavljaju skup algoritamskih postupaka u kojima se potpuno rješenje problema
komponira poduzimajući korake koji se u djelomičnom rješenju čine *lokalno najboljima*.

### Problem 3: Problem razmjene novca (coin change problem)

Zadana je cjelobrojna vrijednost $x$, koja predstavlja ukupnu količinu novca koju treba razmijeniti.
U sljedećem retku dan je broj $k$, broj različitih novčanica koje su nam dostupne.
U trećem retku dano je $k$ brojeva, $a_1, a_2, ..., a_n$ - novčanice koje su nam dostupne.

Svake novčanice dostupno je beskonačno mnogo. Barem jedna od novčanica ima vrijednost $1$,
tako da je moguće razmijeniti bilo koji iznos.

Cilj je razmijeniti iznos koristeći najmanji broj novčanica. Novčanice koje uzmemo više puta
broje se toliko puta.

#### Pohlepni pristup

Neka je skup novčanica jednak $\{1,2,5,10\}$.
Pohlepni pristup koji nama pada napamet pretpostavlja da uzmemo najveću novčanicu koju imamo,
sve što možemo vratimo pomoću nje, a zatim krenemo na manje.

Za različite količine $x$ dobili bi sljedeće postupke:

| $X$           |      Postupak   |  Količina novčanica   |
| ------------- | :-----------:   | -----: |
| 8   | 5,2,1 | 3  |
| 17   |   10,5,2     |   3  |
| 11      |     10,1       |    2  |

Za ovaj početni skup novčanica (kao i za hrvatski sustav novčanica) vrijedi da
pohlepni pristup daje **optimalno rješenje**. Prije nego krenemo na dokaz,
pogledajmo rješenja koja daje ovaj pohlepni pristup za skup $\{1,3,4,5\}$: 

| $X$           |      Postupak   |  Količina novčanica   |
| ------------- | :-----------:   | -----: |
| 8             | 5,3 | 2  |
| 7      |     5,1,1       |    3  |

Pozorni čitatelj primjetit će da slučaj sa $x=7$ možemo razložiti bolje nego što
je to učinio pohlepni pristup - $7 = 4 + 3$. Dakle, pohlepni pristup nije optimalan
za sve skupove novčanica. 

Zbog ovog neočekivanog problema bitno je naučiti
dokazivati optimalnost različitih pohlepnih pristupa.
Iako na natjecanjima često preskačemo formalne dokaze,
gotovo uvijek neke od njihovih dijelova intuitivno shvatimo prilikom rješavanja.
Ovim dokazima pokušat ćemo čitatelju približiti taj proces zaključivanja.

#### Optimalnost pohlepnog pristupa nakon određenog iznosa

Intuitivno, jasno je da kad je $x$ *ogroman* (u odnosu na najveću novčanicu $M$),
tu novčanicu trebamo iskorištavati mnogo puta (dok se iznos ne smanji).
Pokušajmo odrediti što točno znači *ogroman*.

Neka je $M$ najveća novčanica iz skupa $S$.
Dokazat ćemo da (**ovaj**, od sad implicitno) pohlepni algoritam 
daje **optimalno rješenje** za sve $x$, pod uvjetom
da daje **optimalno rješenje** za sve $x \leq 2 \cdot M - 1$.
Primijetimo da je poredak razmjene novčanica nebitan, 
pa se možemo fokusirati na one poretke u kojima prvo vraćamo veće novčanice. 

1. **Baza indukcije**: 
- pohlepni algoritam daje optimalno rješenje za sve $x \leq 2 \cdot M -1$.

2. **Korak indukcije**: 
* dokažimo da optimalnost pohlepnog algoritma za sve $x \leq n$ povlači optimalnost algoritma
za sve $x \leq n+1$. Za $x \leq 2 \cdot M-1$ tvrdnja vrijedi iz pretpostavke. 
Za $x = n+1$ pretpostavimo suprotno, tj. da pohlepni algoritam nije optimalan. 
Imamo dva slučaja:
  *  a) optimalno rješenje u sebi ima novčanicu $M$. Ako je to istina, onda smo taj $M$ mogli uzeti
odmah (što bi napravio i pohlepni algoritam), a onda bi nam optimalnost za $x \leq n$ tvrdila
da i dalje slijedimo pohlepni algoritam. U ovom slučaju je pohlepni algoritam optimalan - kontradikcija.
  *  b) optimalno rješenje u sebi nema novčanicu $M$. Ako je to istina, onda će se zamjena eventualno svesti na vraćanje $y$ novca, $M \leq y \leq 2 \cdot M -1$ (jer ne možemo preskočiti taj raspon veličine $M$).
Budući da je u tom intervalu pohlepni algoritam optimalan, on će sigurno uzeti i novčanicu $M$ (po definiciji pohlepnog algoritma) - kontadikcija s tim da takve novčanice u rješenju uopće nema.
* U svakom slučaju dobivamo kontradikciju - pohlepni algoritam ipak jest optimalan.

Induktivnim zaključivanjem dokazali smo da optimalnost pohlepnog algoritma za
sve vrijednost $x \leq 2 \cdot M - 1$ implicira globalnu optimalnost pohlepnog algoritma.

Drugim riječima, dovoljno je provjeriti je li pohlepni algoritam ispravan
samo za konačno mnogo vrijedosti $x$. Ipak, kako ovo provjeriti naučit ćemo
tek na predavanju vezanom za *dinamičko programiranje*.











