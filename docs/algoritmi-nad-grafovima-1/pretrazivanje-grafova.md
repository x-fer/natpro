---
title: Pretraživanje grafova
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Ivan Vlahov' githubUsername='vlahovivan'/>

Većina algoritama nad grafovima koje ćete koristiti za natjecateljsko programiranje temelje se na nekakvom obilasku svih čvorova grafa kako bi se iz tog obilaska mogli izvući nekakvi zaključci. Upravo iz tog razloga bitno je razumijeti pretraživanje u dubinu - *depth first search*, i pretraživanje u širinu - *breadth first search*. Razumijevanjem tih metoda pretraživanja i njihovih karakteristika moći ćete ih koristiti za jako široku paletu problema i po potrebi ih adaptirati za specifične probleme.

### Depth First Search

Pretraživanje u dubinu, *depth first search*, ili ukratko DFS, metoda je obilaska čvorova u kojoj prelazimo s jednog čvora na drugi dok god nalazimo nove, neposjećene čvorove. U slučaju da iz trenutnog čvora ne možemo obići neki novi čvor, vraćamo se na čvor iz kojeg smo došli, pokušavamo ići na neposjećene čvorove itd. Pretraživanje završava kad se posjete svi čvorovi do kojih postoji put iz prvog čvora nad kojim je DFS pozvan.

![Primjer grafa nad kojim radimo DFS](/img/algoritmi-nad-grafovima-1/pretrazivanje1.png)

Uzmimo na primjer graf sa slike. Recimo da za sljedeći čvor u obilasku biramo prvo onaj neposjećeni čvor s najmanjim indeksom, te da je početni čvor onaj s indeksom 1. Označimo njega kao posjećenog, te iz njega prelazimo na neposjećeni susjedni čvor s najmanjim indeksom, u ovom slučaju čvor 4. Ponavljamo postupak za čvor 4: označavamo ga kao posjećenog, njegovi neposjećeni susjedi su 2 i 5 - prelazimo na čvor 2. Označimo čvor 2 kao posjećenog, prelazimo na čvor 3. Označimo čvor 3 kao posjećenog. Iz čvora 3 nemamo više gdje ići, pa se vraćamo u čvor iz kojeg smo došli, a to je čvor 2. Opet tražimo neposjećenog susjeda čvora 2 s najmanjim indeksom - sad je to čvor 6. Prelazimo na njega, označimo ga kao posjećenog i vraćamo se opet na 2 jer nemamo kamo drugdje iz 6. Sad ni 2 više nema neposjećenih susjeda, pa se vraćamo u 4. Iz 4 idemo u 5, iz 5 se vraćamo u 4, te iz 4 natrag u 1, gdje pretraživanje završava.

Kad bismo prilikom prvog ulaska u svaki vrh ispisali njegov indeks, dobili bismo sljedeći ispis:

```
1 4 2 3 6 5
```

DFS se može implementirati na više načina. Najčešći i jednostavan način implementacije je rekurzivnim pozivima - zadani čvor označimo kao posjećenog, a zatim redom pozivamo DFS na svim njegovim neposjećenim susjedima.

```
// mozete graf deklarirati globalno
// ili, ako ne zelite, proslijediti 
// referencu na graf funkciji dfs
// MAXN je neka konstanta, npr. najveci
// moguci broj vrhova iz teksta zadatka
vector<vector<int>> graph(MAXN);

// isto vrijedi i za polje posjecenih cvorova
// visited[i] je true ako je cvor i posjecen,
// inace false
// na pocetku je false za sve cvorove
vector<bool> visited(MAXN, false);

void dfs(int node) {
    visited[node] = true;

    // radi nesto s cvorom, npr. ispis vrha
    cout << "Usao u cvor " << node << "\n";

    for(auto &it : graph[node]) {
        if(!visited[it]) dfs(it);
    }
}
```

Pozovemo li sad ovu funkciju na grafu sa slike:

```
graph[1] = {4};
graph[2] = {3, 4, 6};
graph[3] = {2};
graph[4] = {1, 2, 5};
graph[5] = {4};
graph[6] = {2};

dfs(1);
```

Dobit ćemo očekivani ispis:

```
Usao u cvor 1
Usao u cvor 4
Usao u cvor 2
Usao u cvor 3
Usao u cvor 6
Usao u cvor 5
```

#### Bitna svojstva i varijacije DFS-a

U izradi

### Breadth First Search

U izradi

#### Bitna svojstva i varijacije BFS-a

U izradi
