---
title: Meet in the middle
---

import Author from '@site/src/react_components/author.js';

<Author authorName='Petar Mihalj' githubUsername='PetarMihalj'/>

**Meet in the middle** (*MITM*) skup je tehnika kojima prostor pretraživanje krenemo pretraživati
s obe strane. Na primjer, traženje najkraćeg puta može istodobno krenuti od odredišta i cilja.


### Problem 1: K-sum (MITM)

Ideja korištenja MITM tehnike nad ovim problemom dolazi iz činjenice da bismo
brojeve mogli podijeliti na $2$ skupa, $A$ i $B$, brojevima iz skupa $A$
*povećavati nulu*, a brojevima iz skupa $B$ *smanjivati $x$*.

Iako je ovo dobra formulacija rješenja, pretraga bi uključivala traženje
svih stanja (zbrojeva) koji se mogu dobiti iz $A$ - ovo stanja nazovimo $S_A$.
S druge strane, sva reduciranja $x$-a brojevima iz B rezultiraju stanjima koja
nazivamo $S_B$. Na kraju moramo pronaći broj $p$ koji postoji i u $S_A$ i u $S_B$.

Na primjer, ako brojeve $\{3,5,7\}$ zajedno sa ciljem 10 podijelimo u skupove
$A = \{3,5\}$ i $B = \{7\}$, rezultatna stanja su
$S_A = \{0,3,5,8\}$ i $S_B = \{10,3\}$. Budući da je broj 3 nalazimo u oba skupa stanja,
odgovor na problem je "DA".

Traženje preklapanja možemo ostvariti sortiranjem jednog od skupova stanja ($S_A$), 
a zatim iteriranjem po elementima $S_B$, kojima tražimo para u $S_A$ binarnom pretragom.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main(){
    int n,x;
    cin >> n;
    int a = n/2;
    int b = n-a;

    // pola u A
    vector<int> A(a);
    for (int i=0;i<a;i++){
        cin>>A[i];
    }
    
    // pola u B
    vector<int> B(b);
    for (int i=0;i<b;i++){
        cin>>B[i];
    }
    cin >> x;

    // izracunaj i zapamti S_A (from0)
    vector<int> from0;
    for(int i=0; i < (1<<a); i++){
        int sum = 0;
        for (int j=0;j<a;j++){
            if ((i & (1<<j)) != 0){
                sum += A[j];
            }
        }
        from0.push_back(sum);
    }

    // sortiraj S_A
    sort(from0.begin(), from0.end());

    // iteriraj po S_B
    for(int i=0; i < (1<<b); i++){
        int fromX = x;
        for (int j=0;j<b;j++){
            if ((i & (1<<j)) != 0){
                fromX -= B[j];
            }
        }
        // trazi para u S_A
        auto r = lower_bound(from0.begin(), from0.end(), fromX);
        if (r != from0.end() && *r == fromX){
            cout << "DA" << endl;
            return 0;
        }
    }

    cout << "NE" << endl;
    return 0;
}
```

Postoji i drugi pristup koji daje slično rješenje, a on se svodi na računanje oba skupa krećući od nule,
ali tražeći $x-t$ u $S_A$, gdje je $t$ trenutni element iz $S_B$. Probajte i ovaj pristup!

#### Analiza složenosti

Vremenska složenost ovog rješenja dobije se iz komponenata:

1. Generiranje skupova $\mathcal{O}(2^{n/2} \cdot 2)$
2. Pretraga $\mathcal{O}(2^{n/2} \cdot \log(2^{n/2})) = \mathcal{O}(2^{n/2} \cdot \frac{n}{2} \log(2))$

Ukupna vremenska složenost je dakle $\mathcal{O}(2^{n/2} \cdot n)$

Ipak, rušenje eksponenta u vremenskoj složenosti na pola 
platili smo dizanjem prostorne složenosti na $\mathcal{O}(2^{n/2})$.
Primjetimo i da jedan skup stvarno treba zapamtiti (onaj po kojem tražimo), 
a drugi možemo generirati *on-the-fly*.
Ovo je klasični primjer *time-space tradeoff*-a u algoritamskim tehnikama.
