---
title: Meet in the middle
---

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

Traženje preklapanja možemo ostvariti sortiranjem jednog od nizova, a zatim iteriranjem po jednom skupu,
tražeći elemente tog skupa binarnom pretragom u drugom.

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

#### Alternativno rješenje


