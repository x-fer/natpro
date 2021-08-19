---
title: Knapsack
---

### Problem

Ruksak kapaciteta $x$ moramo napuniti sa stvarima kojih ima $n$, a od kojih svaka zauzima određeni kapacitet i ima određenu vrijednost. Naravno cilj nam je maksimizirati ukupnu vrijednost stvari u ruksaku. U zadatku bitnu razliku čini jesu li stvari tekuće(možemo odabrati proizvoljnu količinu svake stvari) ili čvrste(moramo uzeti cijelu stvar).

### Rješenje

Ako su stvari tekuće onda pohlepno možemo uzimati stvari što većeg omjera vrijednosti naspram količine.

Ako su stvari čvrste tada nam isti pohlepni pristup neće dati točno rješenje i to je jednostavno pokazati. Neka je kapacitet ruksaka $10$ i imamo $3$ stvari oblika $\{value, size\}$: $\{7, 7\}, \{4, 5\}, \{4, 5\}$. Pohlepni pristup uzeo bi stvar vrijednosti $7$ i više ništa ne bi stalo u ruksak, a bolja opcija je uzeti ostale dvije stvari i postići vrijednost $8$.

Neka nam je stanje najveća vrijednost koju možemo ostvariti za neku vrijednost $a$. Funkcija prijelaza je $val[a] = max(val[a], val[a - velicina[i]] + vrijednost[i])$ za svaki $i$.

```cpp
const int MAXN = 10000;
int x, n;
int vrijednost, velicina;
//bitno je paziti može li ukupna vrijednost biti veća od integera
//također, ako su stvari tekuće rješenje može biti decimalni broj
long long int dp[MAXN];

int main(){
    memset(dp, 0, sizeof dp);
    cin >> x >> n;
    for(int i = 0; i <= n; i++){
        cin >> vrijednost >> velicina;
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

U slučaju tekućih stvari stvari je potrebno sortirati prema omjeru vrijednosti naspram količine, nakon toga moguće je linearno riješiti zadatak. Pošto je sortiranje složenosti $O(n \log n)$ to je i složenost rješenja.

U slučaju čvrstih stvari složenost je $O(n * w)$;