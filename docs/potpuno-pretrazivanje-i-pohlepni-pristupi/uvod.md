---
title: "Potpuno pretraživanje"
---

**Potpuno pretraživanje** (*complete search*, *brute force*) skup je metoda kojima prolazimo cijelim prostorom rješenja.
Na primjer, ako se traži najbolji raspored, mi razmatramo **svaki** i među njima biramo najbolji.

Ako unaprijed možemo odrediti da neki rasporedi sigurno nisu među najboljima,
značajno smanjujemo vrijeme izvođenja - tehnike koje proizlaze iz ove ideje nazivamo tehnikama **podrezivanja** (*pruning*).


### Problem 1: K-sum (iterativno)

U prvom retku zadan je broj $n$ ($1 \leq n \leq 20$)
U drugom retku zadana je lista brojeva $a_1, ..., a_n$ ($0 \leq a_i \leq 10^8$).
U trećem retku dan je broj $x$ ($0 \leq x \leq 2 \cdot 10^9$).

Postoji li podlista liste brojeva $\{a_1, ..., a_n\}$, takav da je njegova
suma jednaka x? Ispišite DA ili NE.

Napomena: u zadatku se koristi izraz *podlista*, jer *skup* i *podskup* označavaju
matematičke objekte u kojima ne postoje duplikati. Često se umjesto tih koriste
*multiskup* i *mulitpodskup*, ali mi ćemo se zadržati na listama.

#### Analiza

Ako nam je zadana lista $\{1, 5, 7, 5\}$, a $x$ je $11$, očito postoji rješenje
$1+5+5 = 11$. 

Ako nam je zadana lista $\{1, 5, 7, 5\}$, a $x$ je $9$, rješenje ne postoji.

Prvo rješenje problema koje nam pada napamet podrazumijeva iteraciju po svim
podlistama dane liste. Intuitivnije je na ovaj problem gledati kao da iteriramo po svim
pod**skupovima** indeksa $\{1, ..., n\}$, umjesto po samim brojevima.

Na primjer, ako imamo listu veličine $3$ i predstavimo ju indeksima $\{0, 1, 2\}$ 
(primjeti prelazak na 0-indeksiranje), onda zapravo želimo razmotriti skupove:

1. $\{\}$
2. $\{0\}$
3. $\{1\}$
4. $\{2\}$
5. $\{0,1\}$
6. $\{0,2\}$
7. $\{1,2\}$
8. $\{0,1,2\}$

#### Iteracija po podskupovima

Ovih $2^3 = 8$ podskupova može se predstaviti i sistemom u kojem simboliziramo kojeg originalnog
skupa u podskupu ima, a kojeg ne:

1. $\{\} = 000$ (nema niti jednog elementa)
2. $\{0\} = 001$ (ima samo onog s indeksom 0, gledamo s desna)
3. $\{1\} = 010$ (ima samo onog s indeksom 1)
4. $\{2\} = 100$ (ima samo onog s indeksom 2)
5. $\{0,1\} = 011$ (ima onih s indeksima 0 i 1)
6. $\{0,2\} = 101$  
7. $\{1,2\} = 110$
8. $\{0,1,2\} = 111$ (podskup jednak skupu, svi elementi su tu)

Primjetite da svakom podskupu odgovara jedan broj, predstavljen u binarnom obliku.
Ovu činjenicu možemo iskoristiti da bismo jednostavno iterirali po podskupovima.

Ako želimo proći sve podskupove skupa $I = \{0, ..., n-1\}$, razmotrit ćemo sve prirodne brojeve
od $0$ do $2^n-1$; njihove binarne reprezentacije odgovarat će podskupovima skupa $I$.

Za rješenje zadatka potrebno je u svakom koraku zbrojiti brojeve na indeksima podskupa kojeg smo generirali,
i usporediti taj zbroj sa $x$. Rješenje je u nastavku.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n,x;
    cin >> n;

    vector<int> A(n);
    for (int i=0;i<n;i++){
        cin>>A[i];
    }
    cin >> x;

    //2^n - 1
    int p = (1<<n)-1;

    //iteracija po brojevima koji predstavljaju podskupove
    for(int i=0; i <= p; i++){
        int sum = 0;
        //iteracija po bitovima brojeva
        for (int j=0;j<n;j++){
            if ((i & (1<<j)) != 0){
                // Broj i ima 1 na j-tom mjestu u binarom obliku.
                // Pazi na poredak, != je jači od &:
                // https://en.cppreference.com/w/cpp/language/operator_precedence
                sum += A[j];
            }
        }

        if (sum == x){
            cout << "DA" << endl;
            return 0;
        }
    }
    cout << "NE" << endl;
    return 0;
}
```

:::cautionoprez
Primjetimo da nam limiti na brojeve (najviše $20$ brojeva, brojevi veličine do $10^8$),
omogućuju da koristimo $\texttt{int}$ (suma je najviše $2\cdot 10^9$, stane u $\texttt{int}$).

Kad bismo imali više brojeva, ili bi oni bili većih vrijednosti, ovo rješenje ne bi prošlo.
Morali bismo koristiti tip $\texttt{long long}$. Ovo je izvor nebrojenih
problema za početnike u natjecateljskom programiranju;
budite iznimno pozorni kad analizirate ograničenja!
:::

#### Analiza složenosti

Dodatni prostor koji zauzimamo (osim čitanja ulaznih podataka) konstantan je, 
stoga je memorijska složenost
jednaka $\mathcal{O}(1)$.

Vremenska složenost jednaka je ukupnom broju iteracija petlji 
(jer su ostale operacije u petljama konstantne složenosti).
Stoga je vremenska složenost jednaka $\mathcal{O}(2^n \cdot n)$.

Budući da je $n$ manji ili jednak $20$, vremenska složenost
koju smo dobili ovim pristupom bit će dovoljno niska da rješenje prođe na
većini evaluatora ispod 1 sekunde.

### Problem 1: K-sum (rekurzivno)

Iako je iterativni pristup dovoljno jednostavan i efikasan,
pokazat ćemo alternativni, rekurizvni način rješavanja zadatka.

Ideja je izvrtiti rekurzivnu funkciju koja je parametrizirana sljedećim vrijednostima:

- trenutna suma
- element s najmanjim indeksom koji može biti uzet

Svaki podskup moguće je poredati, 

```cpp
#include <bits/stdc++.h>
using namespace std;

/*
 * A, n, x -> umjesto globalnih varijabli (primjeti & kod A)
 * last, sum -> pravi parametri rekurzije, promjenjivi
 * last -> označava najveći indeks elementa u skupu kojeg predstavlja rekurzivni poziv
 * sum -> označava sumu svih elemenata skupa kojeg predstavlja rekurzivni poziv
 */
bool f(vector<int>& A, int n, int x, int last, int sum){
    // uspjeli smo napraviti x
    if (sum == x){
        return true;
    }

    // kreni s ostalim elementima od kojih se mogu izgraditi novi podskupovi
    for (int i=last+1;i<n;i++){
        if (f(A,n,x,i,sum+A[i])){
            return true;
        }
    }
    return false;
}

int main(){
    int n,x;
    cin >> n;

    vector<int> A(n);
    for (int i=0;i<n;i++){
        cin>>A[i];
    }
    cin >> x;

    // -1 se dobro uklapa, 
    // jer će prvi rekurzivni poziv krenuti razmatrati sve elemente (-1+1 = 0)
    if (f(A,n,x,-1,0)){
        cout << "DA" << endl;
    }
    else{
        cout << "NE" << endl;
    }

    return 0;
}

```

#### Analiza složenosti

Analiza dodatnog prostora koji zauzimamo suptilnija je nego u iterativno slučaju.
Naime, prostor zauzimamo na stogu prilikom pozivanja rekurzivnih funkcija.
Najveća dubina rekurzivnog grananja određuje ukupnu memorijsku složenost,
budući da je memorijska složenost svakog rekurzivnog poziva konstantna
(mogli bismo reći da je *stack frame* konstantne veličine, a sve je alocirano na stogu).
Dakle, memorijska složenost jednaka je $\mathcal{O}(n)$, jer je to najveći broj rekurzivnih
poziva u nekom trenutku (odgovara razvoju podskupa koji je jednak cijelom skupu).

Vremenska složenost jednaka je ukupnom broju rekurzivnih poziva 
(jer su ostale operacije u pozivima konstantne složenosti).
Stoga je vremenska složenost jednaka $\mathcal{O}(2^n)$ (pozivi odgovaraju podskupovima,
kojih je upravo toliko, nemamo duplikate).

Primjetimo da smo vrijeme uštedjeli na zbrajanju, jer smo u ovom pristupu pametno obilazili
podskupove (svaki put bismo dodali samo jedan element). Tako smo jednostavno mogli
računati novu sumu, koristeći onu prethodnu, umjesto da svaki puta krećemo ispočetka.

