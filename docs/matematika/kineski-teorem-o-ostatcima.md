---
title: Kineski teorem o ostatcima
---

### Problem

Zadano je $N$ jednadžbi oblika $x \equiv a_i(\textrm{mod}\ b_i)$. Značenje ove jednadžbe je da $x$ ima ostatak $a_i$ pri dijeljenju s $b_i$. Nađi najmanji $x$ koji zadovoljava sve jednadžbe, ako takav broj ne postoji ispiši $-1$.

### Rješenje

Rješenje koje se prvo nameće je *brute force* provjera svih brojeva dok ne nađemo prvi koji zadovoljava jednadžbe. Primijetimo da, u ovisnosti o ulaznim podatcima, rješenje može biti jako veliko, također rješenje ne mora postojati. Stoga *brute force* nije najsretnija opcija.

Probajmo riješiti problem ako imamo samo dvije jednadžbe. Neka su jednadžbe:
1. $x \equiv 3(\textrm{mod}\ 5)$
2. $x \equiv 4(\textrm{mod}\ 6)$

Primijetimo da ne moramo prolaziti sve brojeve nego samo one koji odgovaraju prvoj jednadžbi te njih možemo uspoređivati s drugom jednadžbom kako bi našli najmanje rješenje. Znamo da je rješenje prve jednadžbe oblika $k * b_1 + a_1$, odnosno $5k + 3$ te možemo početi od $k = 0$ sve dok ne nađemo neki $k$ koji zadovoljava obje jednadžbe. Rješenje dobivamo za $k = 5$, odnosno prvi broj koji zadovoljava obje jednadžbe je $x = 28$. 

Dodajmo treću jednadžbu: $x \equiv 0(\textrm{mod}\ 8)$.

Sada moramo prolaziti brojeve koji zadovoljavaju obje prve jednadžbe te ih uspoređivati s novom jednadžbom. Primijetimo da sve te brojeve možemo zapisati pomoću nove jednadžbe. U ovom slučaju ta jednadžba je $30x + 28$. Do te jednadžbe možemo doći dodavanjem $a_1$ ili $a_2$ početnom broju tražeći sljedeću vrijednost koja zadovoljava obje jednadžbe, no taj postupak može biti spor. Primijetimo da će faktor uz $x$ dijeliti i $a_1$ i $a_2$, a pošto bi htjeli najmanji takav broj dovoljno je naći $LCM(a_1, a_2)$. Sada smo problem ponovno sveli na samo dvije jednadžbe, a taj smo problem riješili gore pa ćemo primijeniti isti postupak.

1. $x \equiv 28(\textrm{mod}\ 30)$
2. $x \equiv 0(\textrm{mod}\ 8)$

Krećemo od $28$ i dodajemo 30 sve dok ne pronađemo prvi broj koji zadovoljava drugu jednadžbu.

0. $k = 0$, $x = 28$, $28 \equiv 4(\textrm{mod}\ 8)$
1. $k = 1$, $x = 58$, $58 \equiv 6(\textrm{mod}\ 8)$
2. $k = 2$, $x = 88$, $88 \equiv 0(\textrm{mod}\ 8)$

Postavlja se pitanje kako ćemo otkriti ako rješenje ne postoji. Odgovor je vrlo jednostavan, ako dva puta naiđemo na isti ostatak tada znamo da rješenje ne postoji. Ako rješenje ne postoji prvo ćemo naići upravo na prvi ostatak jer se ostatci ponašaju ciklično.

```cpp
int n;
pair jed[MAXN];
pair cur;
long long int sol;

int LCM(int a, int b){
    /*znamo od prije*/
}

int main(){
    cin >> n;
    for(int i = 0; i < n; i++) cin >> jed[i].first >> jed[i].second;
    cur = jed[0];
    for(int i = 1; i < n; i++){
        for(int k = 0; k < jed[i].second; k++){
            if((k * cur.second + cur.first) % jed[i].second == jed[i].first){
                cur.first = k * cur.second + cur.first;
                cur.second = LCM(jed[i].second, cur.second);
                break;
            }
        }
    }
    cout << cur.first;
}
```

### Analiza složenosti

Pošto postoji $N$ jednadžbi, a mi postupno zamjenjujemo dvije jednadžbe s jednom novom, to ćemo ponoviti $N - 1$ puta. Svaka zamjena je složenosti $O(a_i + log(a_i))$ jer ćemo proći najviše $a_i$ brojeva da nađemo onaj koji nam odgovara ili da shvatimo da nema rješenja, a nakon toga ćemo računati $LCM$, no ta je složenost manja pa ju možemo zanemariti. Stoga je ukupna složenost $O(\sum_{i=1}^n(a_i))$, naravno to možemo zapisati i kao $O(N * max(a_i))$.