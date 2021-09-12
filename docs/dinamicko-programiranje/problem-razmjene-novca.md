---
title: Problem razmjene novca
---

Riječ je o problemu s kojim smo se susreli u poglavlju o pohlepnim pristupima. Pogledajmo kako bismo taj problem riješili dinamičkim programiranjem.

### Rješenje

Rješenje ovog problema blago se razlikuje u iterativnom i rekurzivnom pristupu. Prvo ćemo problem riješiti iterativno, a zatim rekurzivno.
Neka je stanje neka količina novca koju smo do sad razmijenili. Stanje $DP[i]$ označava najmanji broj novčanica s kojima možemo razmijeniti količinu novca $i$. Iz tog stanja sa jednom novčanicom možemo prijeći u stanja koja su veća upravo za vrijednost neke novčanice koja nam je na raspolaganju. Krenimo od početnog stanja, u ovom zadatku zapravo imamo $k$ početnih stanja jer svaku količinu novca koja je jednaka jednoj od novčanica možemo razmijeniti upravo s tom jednom novčanicom te je vrijednost tih stanja $1$, sva ostala stanja imaju vrijednost $beskonačno$. Neka je trenutno stanje $i$, za svako stanje radimo sljedeće: povećamo $i$ za vrijednost svake novčanice i pogledamo jesmo li popravili rješenje koje smo već imali za tu(novu) vrijednost. Naravno uvijek uzimamo minimum od prethodnog i novog rješenja kako bi smo dobili optimalanu razmjenu.

***Ograničenja***

$x < 10000$

$k < 100$

$a_{i} < 10000$

***ITERATIVNO***
```cpp
//pazimo na ovu veličinu kako tokom rješavanje ne bi izašli iz nekog polja
const int MAXN = 20000;

int x, k
int novcanice[MAXN];
int sol[MAXN];

int main(){
    //pretpostavimo da nam za razmjenu bilo koje količine novca treba beskonačno novčanica
    memset(sol, 1e9, sizeof(sol));
    cin >> k >> x;
    for(int i = 0; i < k; i++){
        cin >> novcanice[i];
        //svaku količinu koja je jednaka nekoj novčanici možemo razmijeniti upravo s tom (jednom) novčanicom
        sol[novcanice[i]] = 1;
    }
    for(int i = 1; i <= x; i++)
        for(int j = 0; j < k; j++)
            //funkcija prijelaza
            sol[i + novcanice[j]] = min(sol[i + novcanice[j]], sol[i] + 1);
    //Na x-tom mjestu se nalazi traženo rješenje
    cout << sol[x];
    return 0;
}
```

***REKURZIVNO***
```cpp
const int MAXN = 20000;

int x, k
int novcanice[MAXN];
int memo[MAXN];

int solve(int ostatak){
    //ako je ostatak manji od 0 znaci da nismo na dobar nacin razmijenili novce
    if(ostatak < 0) return 1e9;
    //ako je ostatak jednak 0 znaci da smo sve novce razmijenili sa novcanicama koje su nam na raspolaganju
    if(ostatak == 0) return 0;

    //ako smo vec racunali kako najbolje razmijeniti ostatak onda to ne moramo ponovno racunati
    if(memo[ostatak] != -1) return memo[ostatak];

    int ret = 1e9;

    for(int i = 0; i < k; i++)
        ret = min(ret, 1 + solve(ostatak - novcanice[i]));
    return memo[ostatak] = ret;
}

int main(){
    //pretpostavimo da nam za razmjenu bilo koje količine novca treba beskonačno novčanica
    memset(memo, -1, sizeof(sol));
    cin >> k >> x;
    for(int i = 0; i < k; i++) cin >> novcanice[i];
    cout << solve(x);
    return 0;
}
```

### Analiza složenosti

Prisjetimo se kako se određuje složenost dinamike. Složenost dinamike jednaka je umnošku broja stanja i složenosti prijelaza. Naše rješenje ima stanja koliko novaca želimo razmijeniti, odnosno $x$. Iz svakog stanja imamo $k$ prijelaza, a složenost svakog prijelaza je $O(1)$, stoga je složenost prijelaza $O(k)$. Time je ukupna složenost ovog rješenja $O(x * k)$

### Poveznica s pohlepnim pristupom

Ovom dinamikom možemo provjeriti bi li nam pohlepni algoritam objašnjen u predavanju o *Potpunom pretraživanju i pohlepnim pristupima* dao optimalno rješenje. 
:::cautionoprez
Ova dinamika dat će odgovor na pitanje: Može li se pohlepnim pristupom dobiti točno rješenje za razmjenu bilo koje količine novca ako su nam na raspolaganju zadane novčanice.

Pošto zadatci uglavnom imaju testne primjere sa raznim skupovima novčanica, nije nužno da ako pohlepno rješenje radi za neki skup novčanica da radi i za ostale skupove.
:::

Pogledajmo malu promjenu u ograničenjima u zadaku. Neka vrijedi $x < 1e9$. Možemo primjetiti da u tom slučaju gore navedeno rješenje nije točno. Ne možemo napraviti polje veličine $1e9$, a i kad bi smo imali dovoljno memorije i dalje bi rješenje bilo presporo. Tu nam je korisno znati pohlepni pristup. Primjetimo da, ako je najveća novčanica veličine $1e4$ tada je očito da ćemo sve iznad $2e4$ razmjenjivati upravo s tom novčanicom. Ako vam nije jasno zašto je to tako ponovno pročitajte pogljavlje *Pohlepni pristupi*. 

Rješenje se tada svodi na primjenu redukcije na početni $x$ dok ne bude u intervalu $[max(a_i), 2 * max(a_i)>$. Tu redukciju moguće je napraviti u složenosti $O(1)$ jednostavnom matematikom.
Analizirajmo složenost rješenja u tom slučaju. Tada ćemo dinamiku provoditi na maksimalno $2 * max(a_i)$. Što nam složenost svodi na $O(2 * max(a_i) * k)$. Sad imamo dva slična rješenja čija se složenost skalira s različitim faktorima, u jednom rješenju taj je faktor $x$, a u drugom $max(a_i)$. Pa možemo koristiti ono rješenje koje ima manji faktor kako bi dobili brži kod.