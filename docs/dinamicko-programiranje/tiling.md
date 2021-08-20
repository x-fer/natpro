---
title: Popločavanje
---

### Problem

Zadana je ploča veličine $2 * n$ koju je potrebno popločiti pločicama dimenzija $2 * 1$. Pločice je moguće rotirati. Na koliko načina je moguće ostvariti popločavanje? Pošto broj načina može biti jako velik, ispišite rješenje modulo 1e9 + 7.

### Rješenje

Problem ćemo riješiti rekurzivno. Ako je ploča duljine $1$, tada možemo postaviti pločicu samo vertikalno, inače imamo dvije opcije. Možemo staviti pločicu vertikalno i time smanjiti duljinu ploče za $1$ **ili** staviti pločicu horizontalno čime smo prisiljeni staviti i drugu pločicu horizontalno u iste stupce, time smanjujemo duljinu ploče za $2$. Tada se naša relacija svodi na sljedeće $F(x) = F(x - 1) + F(x - 2)$ što prepoznajemo kao *Fibbonacijev niz*.

```cpp
const int MAXN = 1e5 + 5;
int n;
int mod = 1e9 + 7;
int memo[MAXN];

int solve(int ostalo){
    if(ostalo == 0) return 1;
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

Zadana je ploča veličine $2 * n$ koju je potrebno popločiti pločicama dimenzija $2 * 1$. Pločice je moguće rotirati. *Neka polja su blokirana i na njih nije moguće postaviti pločicu.* Na koliko načina je moguće ostvariti popločavanje? Ako nije moguće popločiti ploču ispišite $-1$. Pošto broj načina može biti jako velik, ispišite rješenje modulo 1e9 + 7.

Ovaj jedan dodatni uvijet znatno nam otežava rješavanje zadatka jer prethodna formula više ne pomaže.

### Rješenje

Probajmo si olakšati zadatak s nekim opservacijama.

1. Ako je broj blokiranih polja neparan, zadatak nije moguće riješiti.
2. Ako su dva blokirana polja u istom stupcu, zadatak možemo razložiti na dva zadatka, lijevo i desno od tog stupca
3. Ako je samo jedno blokirano polje u stupca iznad njega se mora nalaziti horizontalna pločica

Treća opservacija nam može jako pomoći u rješavanju zadatka. Stupce do prvog stupca u kojem je polje blokirano riješavamo kao i lakšu verziju zadatka. Zatim moramo postaviti jednu horizontalnu pločicu(naravno ako je moguće), no primjetite da postavljanjem horizontalne pločice blokiramo suprotnu stranu u idućem stupcu pa onda opet moramo staviti horizontalnu pločicu. Taj postupak moramo ponavljati dok ne naiđemo na sljedeće blokirano polje ili dok ne dodemo u situaciju u kojoj nije moguće postaviti pločicu.

Sada možemo blokirana polja upariti s njihovim susjedom i napraviti sljedeće, ako bilo koji par ne poštuje sljedeća pravila ispisujemo $-1$.

1. Zadnje blokirano polje nema para(ista opservacija kao i prva opservacija napisana gore).
2. Polja u istom retku moraju imati različiti ostatak pri djeljenju s $2$. Razmislite zašto.
3. Polja u različitom retku moraju imati isti ostatak pri djeljenju s $2$. Iz istog razloga.

Primjetimo još jednu stvar. Ako rješenje postoji ono će biti umnožak rješenja prvog problema za sve stupce između parova blokova, razmislite zašto. Prvi dio je ploča do prvog bloka, nakon toga rješenje je determinirano do sljedećeg bloka, nakon toga ponovno računamo rješenje za drugi dio sve do sljedećeg bloka, nakon toga rješenje je opet determinirano do sljedećeg bloka, taj postupak ponavljamo do kraja.

```cpp
const int MAXN = 1e5 + 5;
int n;
int mod = 1e9 + 7;
int memo[MAXN];

int solve(int ostalo){
    if(ostalo == 0) return 1;
    if(ostalo == 1) return 1;
    if(memo[ostalo] != -1) return memo[ostalo];
    return memo[ostalo] = (solve(ostalo - 1) + solve(ostalo - 2)) % mod;
}

pair<int, int> blok[2 * MAXN];
vector<int> parts;

int main(){
    memset(memo, -1, sizeof memo);
    cin >> n >> m;
    // blokirana polja unijet cemo po naopakim kordinatama kako bi ih lakše sortirali s lijeva na desno
    for(int i = 0; i < m; i++) cin >> blok[i].second >> blok[i].first;
    sort(blok, blok + m);
    if(m % 2 == 1){
        cout << -1;
        return 0;
    }
    for(int i = 0; i < m; i += 2){
        //ako postoji stupac koji je blokiran, a prije njega se nalazi neparan broj blokova tada rješenje ne postoji
        if(i != m - 2 && blok[i + 1].first == blok[i + 2].second){
            cout << -1;
            return 0;
        }
        //isti redak(jer smo zamijenili koordinate)
        if(blok[i].second == blok[i + 1].second && blok[i].first % 2 == blok[i].second % 2){
            cout << -1;
            return 0;
        }
        //suprotni redak
        else if(blok[i].first % 2 != blok[i].second){
            cout << -1;
            return 0;
        }
    }
    //Sada znamo da rješenje postoji
    bool blokirano = false;
    int blok_cnt = 0;
    int cnt = 0;
    for(int i = 1; i <= n){
        if(blok[blok_cnt].first == i){
            blok_cnt++;
            if(blokirano) blokirano = false;
            else{
                parts.push_back(cnt);
                cnt = 0;
                //naišli smo na blokirani stupac
                if(blok[blok_cnt] == i) blok_cnt++;
                //dalje je rješenje determinirano
                else blokirano = true;
            }
        }
        if(!blokirano) cnt++;
    }
    // Razmislite zašto je bitno da je ovo long long iako koristimo mod
    long long int sol = 1;
    for(int i = 0; i < parts.size(); i++){
        sol *= solve(parts[i]);
        sol %= mod;
    }
    cout << sol;
    return 0;
}
```

### Analiza složenosti

Problem smo riješili u linearnoj složenosti no morali smo sortirati blokove pa je ukupna složenost programa $O(n \log n)$.