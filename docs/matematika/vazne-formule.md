---
title: Važne formule
---

### Najveći zajednički djelitelj

Odredimo najveći zajednički djelitelj(dalje u tekstu **GCD** od eng. Greatest Common Divisor) od $a$ i $b$. Možemo krenuti od $min(a, b)$ prema $1$ tražeći prvi broj s kojim su oba djeljiva. Složenost ovog postupka je $O(min(a, b))$, odnosno složenost je linearna. 

Naravno postoji i brži način određivanja GCD, a riječ je o Euklidovom algoritmu. Prvo ćemo pokazati kod, a nakon toga objasniti o čemu je riječ.

```cpp
int GCD(int a, int b){
    if(b == 0) return a;
    return GCD(b, a % b);
}
```

**Dokaz točnosti algoritma.** ***TODO: nisam siguran jel ovaj dokaz točan***

Dokaz Euklidovog algoritma nije trivijalan, a možete ga pronaći na ovom linku

Složenost algoritma je $O(\log min(a, b))$. Kod možete pisati i iterativno, u obliku while petlje, kako bi izbjegli pozivanje rekurzije ako je *time limit* na zadatku strog.

### Najmanji zajednički višekratnik

Odredimo najmanji zajednički višekratnik(dalje u tekstu **LCM** od engl. Least Common Multiple) od $a$ i $b$. U ovom slučaju možemo tražiti od $max(a, b)$ do $a * b$, no složenost tog postupka je $O(a * b)$, na svu sreću postoji brži način računanja LCM. LCM možemo izračunati u složenosti Euklidovog algoritma koristeći sljedeću formulu: $LCM(a, b) = a * b / GCD(a, b)$. **Pazite na cast u *long long***.

#### Dokaz točnosti formule

GCD dvaju brojeva je broj čiji je rastav na proste faktore presjek rastava na proste faktore tih dvaju brojeva.

LCM dvaju brojeva je broj čiji rastav na proste faktore kao podskup sadržava rastav na proste faktore od oba broja.

Kada pomnožimo dva broja zapravo napravimo uniju njihovih prostih faktora. U toj uniji presjek(GCD) se očito nalazi $2$ puta(jednom zbog svakog broja). Uklanjanjem jednog presjeka dobivamo upravo LCM.

### Potenciranje i brzo potenciranje

Želimo li izračunati $x^n$ možemo koristiti ugrađenu funkciju *double pow(base, exp)*. Nažalost korištenje te funkcije često nije dovoljno jer može prouzročiti bitan problem. Često se u zadatku traži da se ispiše ostatak pri dijeljenju rješenja sa $1e9 + 7$. Ako su ulazni parametri veliki moguće je da će doći do overflowa tijekom računanja pa formula $pow(x, n) \% mod$ neće dati točno rješenje.

Problem je moguće riješiti da napišemo vlastitu funkciju za potenciranje koja podržava računanje s ostatkom pri dijeljenju. Ta bi funkcija izgledala ovako.

```cpp
//NAPOMENA: smatramo da su svi brojevi integeri
int pow_fixed(int base, int power, int mod){
    int ret = 1;
    for(int i = 0; i < power; i++){
        ret *= base;
        ret %= mod;
    }
}
```

Složenost ove funkcije je $O(power)$. Tu je funkciju moguće ubrzati ako primijetimo jedno korisno svojstvo potencija, a to je ako je potencija parna, tada broj možemo kvadrirati, a potenciju prepoloviti. $x^{2n} = x^{2^n}$. Sada našu funkciju možemo prilagoditi tako da provjeravamo parnost potencije i primijenimo gornju formulu.

```cpp
int brzo_potenciranje(int base, int power, int mod){
    if(power == 0) return 1;
    if(power == 1) return base;
    // ako je potencija parna primijenimo gornju formulu
    if(power % 2 == 0) return brzo_potenciranje(base * base % mod, power / 2, mod);
    //inače primijenimo običan postupak
    return (brzo_potenciranje(base, power - 1, mod) * base) % mod;
}
```
Složenost ovog algoritma je $O(\log power)$, no ovaj kod nam i dalje može stvarati neke probleme jer neki brojevi mogu *overflowati*, a i kod s puno modova nije baš lijep. Kako bismo izbjegli često *castanje* u *long long* i često pisanje mod koristimo nešto što je praksa u natjecateljskom programiranju, a to su vlastite funkcije za zbrajanje i množenje. To na prvu možda zvuči čudno i nepotrebno, no tako će naš kod izgledati ljepše, a i imat će bolje performanse(kasnije ćemo objasniti zašto).

```cpp
int add(int a, int b, int mod){
    int ret = a + b;
    if(ret >= mod) return ret - mod;
    if(ret < mod) return ret + mod;
    return ret;
}
int mul(long long int a, long long int b, int mod){
    return (a * b) % mod;
}
```
Sada možemo jednostavno prilagoditi funkciju za brzo potenciranje.
```cpp
int brzo_potenciranje(int base, int power, int mod){
    if(power == 0) return 1;
    if(power == 1) return base;
    // ako je potencija parna primijenimo gornju formulu
    if(power % 2 == 0) return brzo_potenciranje(mul(base, base, mod), power / 2, mod);
    //inače primijenimo običan postupak
    return mul(brzo_potenciranje(base, power - 1, mod), base, mod);
}
```
Sada kod izgleda nešto ljepše. Ono što nam je važnije od izgleda koda je njegova efikasnost. Funkcija ostatka pri dijeljenju, iako je konstante složenosti, ima veliku konstantu, odnosno funkcija je spora. Upravo zato nam je cilj ne koristiti tu funkciju ako nije potrebno. Možete primijetiti da u funkciji *add()* uopće ne koristimo ostatak pri dijeljenju, već isti problem rješavamo zbrajanjem i oduzimanjem što su brže funkcije od modanja. U funkciji *mul* to ne radimo jer ćemo u množenju često imati overflow pa bi nam ta provjera dodatno usporila program.