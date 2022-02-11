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

:::noteprimijetite
Ne postoji razlika u implementaciji ako se radi o usmjerenom grafu.
:::

<!-- TODO: implementacija stogom -->

#### Bitna svojstva i varijacije DFS-a

U izradi

### Breadth First Search

Drugi način pretraživanja grafova jest pretraživanje u širinu. Ideja ove metode je da čvorove obrađujemo po "slojevima" - obradimo početni čvor, taj čvor je dio sloja 0, zatim njegove neposjećene susjede - sloj 1, pa neposjećene susjede čvorova iz sloja 1 - oni su dio sloja 2, i tako dalje dok ne obradimo sve čvorove do kojih postoji put iz početnog čvora.

![Primjer grafa nad kojim radimo BFS](/img/algoritmi-nad-grafovima-1/pretrazivanje2.png)

Započnemo li pretraživanje u širinu na grafu sa slike u čvoru 1, i ako opet pretpostavimo da su susjedi sortirani uzlazno po indeksu, algoritam će se ponašati na sljedeći način. Obradimo čvor jedan, označimo ga kao posjećenog, te redom posjećujemo njegove neposjećene susjede - to su redom čvorovi 3, 5 i 6. Nakon toga posjećujemo sve neposjećene susjede čvora 3 - to je čvor 4, pa neposjećene susjede čvora 5 - to su čvorovi 2 i 7, pa neposjećene susjede čvora 6 - takvih čvorova više nema. Nakon toga pokušavamo posjetiti neposjećene susjede čvorova 4, 2 i 7, međutim oni nemaju niti jednog neposjećenog susjeda, pa algoritam završava.

![Graf sa slojevima obojanim u različite boje](/img/algoritmi-nad-grafovima-1/pretrazivanje3.png)

Kad bismo prilikom posjeta čvora ispisali njegov vrh, dobili bismo ovakav ispis:

```
1 3 5 6 4 2 7
```

Implementacija BFS-a temelji se na korištenju reda. Početni čvor dodamo u red te ponavljamo sljedeći postupak sve dok se red ne isprazni: skinemo čvor s početka reda, ako već nije posjećen obradimo ga, označimo ga kao posjećenog, te na kraj reda dodamo sve njegove neposjećene susjede.

U C++-u ta implementacija izgleda ovako, npr. za graf sa slike i početni čvor 1:

```
graph[1] = {3, 5, 6};
graph[2] = {5, 6, 7};
graph[3] = {1, 4, 5};
graph[4] = {3, 5, 7};
graph[5] = {1, 2, 3, 4, 6, 7};
graph[6] = {1, 2, 5};
graph[7] = {2, 4, 5};

queue<int> q;

// pocetni cvor rucno dodajemo u red
q.push(1);

while(!q.empty()) {
    int node = q.front();
    q.pop();

    if(visited[node]) continue;
    visited[node] = true;

    // radi nesto s cvorom, npr. ispis vrha
    cout << "Usao u cvor " << node << "\n";

    for(auto &it : graph[node]) {
        if(!visited[it]) {
        q.push(it);
        }
    }
}
```

Ovaj isječak koda daje očekivani ispis:

```
Usao u cvor 1
Usao u cvor 3
Usao u cvor 5
Usao u cvor 6
Usao u cvor 4
Usao u cvor 2
Usao u cvor 7
```

:::noteprimijetite
Za razliku od DFS-a, u BFS-u moramo raditi provjeru je li neki vrh posjećen i za taj sami vrh i za njegove susjede. Razlog je činjenica da dva različita čvora koja su dio istog sloja mogu dodati istog susjeda u red dva puta, pa se moramo pobrinuti da se čvor ne obradi opet drugi put kad se nađe na početku reda.
:::


#### Bitna svojstva i varijacije BFS-a

U izradi
