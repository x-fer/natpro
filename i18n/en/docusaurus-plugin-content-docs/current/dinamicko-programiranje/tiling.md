---
title: Popločavanje
---

import Author from '../../src/react_components/author.js';

import Spoiler from '../../src/react_components/spoiler.js';

<Author authorName='Karlo Franić' githubUsername='kfranic1'/>

### Problem

Zadana je ploča veličine $2 * n$ koju je potrebno popločiti pločicama dimenzija $2 * 1$. Pločice je moguće rotirati. Na koliko načina je moguće ostvariti popločavanje? Pošto broj načina može biti jako velik, ispišite rješenje modulo 1e9 + 7.

### Rješenje

Problem ćemo riješiti rekurzivno. Ako je ploča duljine $1$, tada možemo postaviti pločicu samo vertikalno, inače imamo dvije opcije. Možemo staviti pločicu vertikalno i time smanjiti duljinu ploče za $1$ **ili** staviti pločicu horizontalno čime smo prisiljeni staviti i drugu pločicu horizontalno u iste stupce, time smanjujemo duljinu ploče za $2$. Tada se naša relacija svodi na sljedeće $F(x) = F(x - 1) + F(x - 2)$ što prepoznajemo kao *Fibonaccijev niz*.

```cpp
const int MAXN = 1e5 + 5;
int n;
int mod = 1e9 + 7;
int memo[MAXN];

int solve(int ostalo){
    if(ostalo == 0) return 0;
    if(ostalo == 1) return 1;
    if(memo[ostalo] != -1) return memo[ostalo];
    return memo[ostalo] = (solve(ostalo - 1) + solve(ostalo - 2)) % mod;
}

int main(){
    memset(memo, -1, sizeof memo);
    cin >> n;
    cout << solve(n);
    return 0;
}
```
Složenost ovog rješenja je $O(n)$ jer svako stanje posjećujemo samo jednom.

### Teži problem

Zadana je ploča veličine $2 * n$ koju je potrebno popločiti pločicama dimenzija $2 * 1$. Pločice je moguće rotirati. *Neka polja su blokirana i preko njih nije moguće postaviti pločicu.* Na koliko načina je moguće ostvariti popločavanje? Pošto broj načina može biti jako velik, ispišite rješenje modulo $1e9 + 7$.

Ovaj jedan dodatni uvjet znatno nam otežava rješavanje zadatka jer prethodna formula više ne pomaže.

### Rješenje

Neka nam je stanje određeno trenutnim stupcem i vrstom bloka u tom stupca, taj stupac još nije riješen, ali neka su svi stupci prije njega riješeni. Postoje 4 vrste bloka:


    
0 - u stupcu nema bloka

    
1 - postoji blok u gornjem retku

    
2 - postoji blok u donjem retku

    
3 - postoji blok u oba retka




Funkciju prijelaza više nije trivijalno odrediti, nego za svaku vrstu bloka moramo odrediti posebnu funkciju prijelaza. Funkcije prijelaza možete pogledati u kodu.

```cpp
const int MAXN = 1e5 + 5;
int n;
int mod = 1e9 + 7;
int dp[MAXN][4];
int blok[MAXN];
string prvi, drugi;

int main(){
    //prvi i drugi predstavljaju retke ploče na kojoj '.' predstavlja prazno, a 'X' blokirano polje
    cin >> n >> prvi >> drugi;
    for(int i = 0; i < n; i++){
    	if(prvi[i] == '.' && drugi[i] == '.') blok[i] = 0;
        if(prvi[i] != '.' && drugi[i] == '.') blok[i] = 1;
        if(prvi[i] == '.' && drugi[i] != '.') blok[i] = 2;
        if(prvi[i] != '.' && drugi[i] != '.') blok[i] = 3;
    }
    dp[0][0] = (blok[0] == 0);
    dp[0][1] = (blok[0] == 1);
    dp[0][2] = (blok[0] == 2);
    // | predstavlja bitovno ili
    dp[0][3] = (blok[0] == 3) | (blok[0] == 0);
    for(int i = 1; i < n; i++){
        if(blok[i] == 0){
            dp[i][0] = dp[i - 1][3];
            dp[i][1] = dp[i - 1][2];
            dp[i][2] = dp[i - 1][1];
            dp[i][3] = (dp[i - 1][3] + dp[i - 1][0]) % mod;
        }
        if(blok[i] == 1){
            dp[i][1] = dp[i - 1][3];
            dp[i][3] = dp[i - 1][1];
        }
        if(blok[i] == 2){
            dp[i][2] = dp[i - 1][3];
            dp[i][3] = dp[i - 1][2];
        }
        if(blok[i] == 3){
            dp[i][3] = dp[i - 1][3];
        }
    }
    cout << dp[n - 1][3] << endl;
    return 0;
}

```

### Analiza složenosti

Dinamika ima $4 * n$ stanja, a složenost prijelaza je $O(1)$, tako da je ukupna složenost dinamike $O(n)$.

### Još teži problem

Problem možemo dodatno otežati tako da, umjesto ploče, polja koja su blokirana unosimo njihovim koordinatama. Neka je $m < 1e5$ blokiranih polja, tada je moguće dopustiti $n < 1e9$. Rješenje ovog problema nećemo prikazati ovdje te ga ostavljamo čitatelju za vježbu.

<details>
    <summary>HINT</summary>
    <p>
    Blokove je potrebno sortirati po <i>x</i> koordinati te ih potom upariti. Ako se blokovi u paru nalaze u istom stupcu onda taj stupac dijeli problem na dva manja problema(lijevo i desno od stupca). Inače je riješenje između dva bloka u paru determinirano ili ne postoji pa je konačno rješenje 0.
    </p>
</details>
<details>
    <summary>HINT 2</summary>
    <p>
    Zadatak se svodi na određivanje rješenja za velik broj ne blokiranih ploča, a konačno rješenje je umnožak svih rješenja. Pošto znamo odrediti rješenje jedne ploče pomoću <i>Fibonaccijevog niza</i>, a element Fibonaccijevog niza je moguće izračunati u složenosti <i>O(log n)</i> tada je i ukupno rješenje složenosti <i>O(m * log(n))</i> jer ćemo imati maksimalno <i>m / 2 + 1</i> manju ploču.
    </p>
</details>