---
title: Knapsack
---

import Author from '../../src/react_components/author.js';

import Spoiler from '../../src/react_components/spoiler.js';

<Author authorName='Karlo Franić' githubUsername='kfranic1'/>

### Problem

Ruksak kapaciteta $x$ moramo napuniti sa stvarima kojih ima $n$, a od kojih svaka zauzima određeni kapacitet i ima određenu vrijednost. Naravno cilj nam je maksimizirati ukupnu vrijednost stvari u ruksaku. U zadatku bitnu razliku čini jesu li stvari tekuće(možemo odabrati proizvoljnu količinu svake stvari) ili čvrste(moramo uzeti cijelu stvar).

### Rješenje 1

Ako su stvari tekuće onda pohlepno možemo uzimati stvari što većeg omjera vrijednosti naspram količine.

Ako su stvari čvrste tada nam isti pohlepni pristup neće dati točno rješenje i to je jednostavno pokazati. Neka je kapacitet ruksaka $10$ i imamo $3$ stvari oblika $\{size, value\}$: $\{7, 7\}, \{5, 4\}, \{5, 4\}$. Pohlepni pristup uzeo bi stvar vrijednosti $7$ i više ništa ne bi stalo u ruksak, a bolja opcija je uzeti ostale dvije stvari i postići vrijednost $8$.

Neka nam je stanje određeno s 2 parametra, broj stvari koje koristimo i veličina ruksaka. Prijelaz radimo tako da odaberemo stvar koja stane u trenutnu veličinu i smanjimo veličinu ruksaka za veličinu te stvari ili jednostavno ne odaberemo tu stvar. Kod je jednostavno napisati rekurzivno, naravno koristeći memoizaciju.

```cpp
const int MAXN = 100;
const int MAXX = 100000;
int x, n;
pair<int, int> stvari[MAXN];
//bitno je paziti može li ukupna vrijednost biti veca od integera
//takoder, ako su stvari tekuce rješenje može biti decimalni broj
long long int memo[MAXN][MAXX];

long long int solve(int items, int cap){
    if(items < 0) return 0;
    if(memo[items][cap] != -1) return memo[items][cap];
	if(stvari[items].first > cap) return memo[items][cap] = solve(items - 1, cap);
	return memo[items][cap] = max(solve(items - 1, cap), stvari[items].second + solve(items - 1, cap - stvari[items].first));;
}

int main(){
    memset(memo, -1, sizeof memo);
    cin >> n >> x;
    for(int i = 0; i < n; i++) cin >> stvari[i].first >> stvari[i].second;
    cout << solve(n - 1, x) << endl;
    return 0;
}
```

### Rješenje 2

Neka nam je stanje najveća vrijednost koju možemo ostvariti za neku vrijednost $a$. Funkcija prijelaza je $val[a] = max(val[a], val[a - velicina[i]] + vrijednost[i])$ za svaki $i$.

```cpp
const int MAXX = 100000;
int x, n;
int vrijednost, velicina;
//bitno je paziti može li ukupna vrijednost biti veća od integera
//također, ako su stvari tekuće rješenje može biti decimalni broj
long long int dp[MAXX];

int main(){
    memset(dp, 0, sizeof dp);
    cin >> n >> x;
    for(int i = 0; i < n; i++){
        cin >> velicina >> vrijednost;
        //ako for petlja ide od 0 tada bi se moglo dogoditi da istu stvar stavimo u ruksak više puta
        for(int j = x - velicina; j >= 0; j--){
            dp[j + velicina] = max(dp[j + velicina], dp[j] + vrijednost);
        }
    }
    cout << dp[x];
    return 0;
}
```

### Analiza složenosti

U slučaju tekućih stvari je potrebno sortirati prema omjeru vrijednosti naspram količine, nakon toga moguće je linearno riješiti zadatak. Pošto je sortiranje složenosti $O(n \log n)$ to je i složenost rješenja.

U slučaju čvrstih stvari složenost oba rješenja je $O(n * w)$, no primijetimo da je u prvom rješenju memorijska složenost $O(n * w)$, dok je u drugom samo $O(w)$;