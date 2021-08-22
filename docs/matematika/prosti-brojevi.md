---
title: Prosti brojevi
---

### Je li broj prost?

Broj je prost ako ima točno dva različita djelitelja, odnosno djeljiv je s 1 i sa samim sobom, no ova definicija ne dopušta da $1$ bude prost. Kako odrediti je li neki broj $x$ prost? Možemo jednostavno proći po svim brojevima između $2$ i $x - 1$ te ako $x$ nije djeljiv niti s jednim od tih brojeva onda je prost. Složenost ovog postupka je očito $O(x)$.

Postoji li brži načina da odredimo prostost broja? Naravno. Primjetimo da nije nužno gledati brojeve veće od $\sqrt x$. Zašto? Neka je $x$ djeljiv s nekim brojem $k$, tada je $x$ nužno djeljiv i sa brojem $x/k$. Jedan od brojeva $k$ i $x/k$ nužno je manji ili jednak $\sqrt x$. Razmislite zašto.

Sada više ne moramo provjeravati $x$, već samo $\sqrt x$ brojeva čime smo složenost spustili na $O(\sqrt x)$. Tu složenost možemo dodatno prepoloviti ako gledamo djeljivost samo s neparnim brojevima, a broj $2$ provjerimo samo jednom, no to često nije nužno.

```cpp
//funkcija vraća true ako je broj prost odnosno false ako nije
bool isPrime(int x){
    //1 nije prost
    if(x == 1) return false
    if(x % 2 == 0 && x != 2) return false;
    for(int i = 3; i <= sqrt(x); i += 2) if(x % i == 0) return false;
    return true;
}
```

### Eratostenovo sito

Zanimaju nas svi brojevi manji od $n$ koji su prosti. Naravno možemo primjeniti funkciju napisanu gore i za svaki broj provjeriti je li prost. Složenost tog postupka bila bi $O(n \sqrt n)$. No postoji još jedan način određivanja prostih brojeva koji ima neka korisna svojstva. Rijeć je o Erastotenovom situ(engl. sieve of Eratosthenes). Postupak je sljedeći:
1. Svi brojevi su prosti
2. Krećemo od 2 i svaki višekratnik tog broja označimo kao **ne** prost
3. Brojeve koji su označeni kao ne prosti preskačemo

```cpp
const int MAXN = 1e5 + 5;
bool prosti[MAXN];
void eratosten(int n){
    //označimo sve višekratnike od 2 kao ne proste
    for(int i = 4; i < n; i += 2)
        prosti[i] = false;
    for(int i = 3; i < n; i += 2){
        if(!prosti[i]) continue;
        for(int j = i + i; j < n; j += i)
            prosti[i] = false;
    }
}
int main(){
    memset(prosti, true, sizeof prosti);
    eratosten(MAXN);
    //sada u poju prosti imamo označene sve proste brojeve
}
```

Složenost ovog algoritma je $O(n (\log n) (\log\log n))$, no to ovdje nećemo dokazivati. Možete primjetiti da je član $\log \log n$ jako mali i za potrebe natjecateljskog programiranje ne prelazi $5$ pa ga je gotovo moguće zanemariti, ipak ako je ograničenje gusto ili je *time limit* malen, treba imati na umu da postoji.

### Rastav broja na proste faktore

Eratostenovo sito moguće je prilagoditi kako bi pomoću njega mogli saznati rastav broja na proste faktore. Umjesto da zapisujemo je li broj prost ili ne, u polje ćemo zapisivati koji broj je *poništio* prostost tog broja. 

```cpp
const int MAXN = 1e5 + 5;
int prosti[MAXN];
void eratosten(int n){
    for(int i = 4; i < n; i += 2)
        prosti[i] = 2;
    for(int i = 3; i < n; i++){
        if(prosti[i] != 0) continue;
        for(int j = i + i; j < n; j += i)
            prosti[j] = i;
    }
}
void ispisi_rastav(int x){
    while(prosti[x] != 0){
        cout << prosti[x] << ' ';
        x = x/prosti[x];
    }
    cout << x;
}
int main(){
    memset(prosti, 0, sizeof prosti);
    eratosten(MAXN);
    int n;
    cin >> n;
	ispisi_rastav(n);
}
```

Na sljedeći načina dobivamo ispis rastava broja $x$ na proste faktore:
1. Ispiši broj zapisan na $x$-tom mjestu
2. Podijeli $x$ s ispisanim brojem
3. Ako novi broj nije prost vrati se na $1$, inače ispiši taj broj

Možemo primjetiti da će na mjestu nekog broja uvijek biti zapisan njegov najveći prosti faktor. Time će ispis rastava na proste faktore biti silazno sortiran. Ako je brojeve potrebno ispisati ulazno sortirano prvo ih moramo spremiti u neko polje na koje potom možemo primjeniti funkciju *reverse()*.