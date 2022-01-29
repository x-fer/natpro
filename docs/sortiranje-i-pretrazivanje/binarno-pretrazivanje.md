---
title: Binarno pretraživanje
---

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Maja Milas' githubUsername='javascript-m'/>

Zamislimo sljedeću situaciju. Dana je lista od $n$ brojeva koji su **sortirani** i zadatak nas pita nalazi li se u toj listi broj $x$? Prva ideja mogla bi biti prolazak po svim elementima liste pri čemu bismo svaki put radili usporedbu s brojem $x$ dok ga eventualno ne pronađemo. To nam daje algoritam složenosti $O(n)$. Postoji li brži način? Pomaže li nam ikako činjenica da je dobiveni niz brojeva sortiran? Tu na snagu stupa **binarno pretraživanje**.

Vjerovali ili ne, s binarnim pretraživanjem već ste se više puta susreli u svakodnevnom životu (npr. traženje riječi u rječniku ili točne stranice u knjizi). Sigurno ste i barem jednom u životu igrali igru u kojoj osoba zamisli broj u nekom intervalu (npr. $1-100$), a vi morate pogoditi koji je broj zamislila. Prilikom svakog pokušaja osoba vam kaže je li broj koji je ona zamislila veći, manji ili jednak broju koji ste predložili. Kada biste ovu igru igrali optimalno, prvo biste pokušali sa $50$. Osoba će vam reći je li njezin broj veći ili manji i vi ste tako problem pogađanja jednog od $100$ brojeva prepolovili na samo $50$ mogućih rješenja. Ako je npr. osoba rekla da je njezin broj veći, lako je zaključiti da je idući optimalan korak pretpostaviti broj $75$ čime je problem ponovo prepolovljen. Budući da se <ins>složenost problema prilikom svakog koraka prepolavlja</ins>, ukupna će složenost odgovarati **$O(log_2(n))$** (što je za velike $n$-ove punopuno manje od linearne).

Vratimo se sada na početni problem - nalaženje broja $x$ u nizu od n brojeva. Primjenjujemo istu logiku kao i u prethodnom primjeru samo ćemo ovoga puta binarno pretraživati poziciju na kojoj se nalazi traženi broj. U prvom koraku uspoređujemo $x$ s brojem u sredini liste. Ako je $x$ manji od njega, pretraživanje nastavljamo u lijevoj polovici, u suprotnom pretražujemo desnu polovicu (princip rada je prikazan na animaciji ispod).

![binary](../../static/img/binary_search.gif ) <br />

Ovo se rješenje može implementirani na sljedeći način:

```cpp
// l i r su lijeva i desna granica intervala koji trenutno pretražujemo
int l=0, r=n-1; 
int array[n];

while (l <= r) {
	int mid = (l+r)/2;
	if (array[mid] == x) {
		//pronašli smo broj x na poziciji mid
	}
	if (array[mid] > x) r = mid-1;
	else l = mid+1;
}
```

Budući da svaki put prepolovimo interval pretraživanja, složenost je i ovdje $O(log_2(n))$.

Alternativni način implementacije binarne pretrage je pomoću 'koraka'. Ideja je da na početku radimo veće korake, a kako se približavamo odgovoru koraci se prepolavljaju.

```cpp
int k = 0; //trenutna pozicija u listi
for (int b = n/2; b >= 1; b /= 2) {
	//ako s korakom ne bi preskočili broj, napravimo korak
	while (k+b < n && array[k+b] <= x) k += b;
}
if (array[k] == x) {
	//pronašli smo broj x na poziciji mid
}
```


## C++ funkcije

Standardne C++ biblioteke sadrže implementirane funkcije koje ponekad mogu zamijeniti binarnu pretragu. Sve također rade u logaritamskoj složenosti.

- **lower_bound** - vraća pointer na prvu vrijednost u listi koja je **barem $x$**
- **upper_bound** - vraća pointer na prvu vrijednost u listi koja je **veća od $x$**
- **equal range** - vraća oba navedena pointera

Ako traženog broja $x$ nema u listi, funkcije vraćaju pointer na .end() element.

```cpp
vector<int> v; //... npr. [5,5,5,6,6,6,7,7]

vector<int>::iterator lower, upper;
lower = lower_bound(v.begin(), v.end(), 6);
upper = upper_bound(v.begin(), v.end(), 6);
 
cout << "lower_bound: " << (lower-v.begin()) << '\n'; // lower_bound: 3
cout << "upper_bound: "<< (upper-v.begin()) << '\n'; // upper_bound: 6
```

:::cautionoprez
Navedene funkcije podrazumijevaju da je lista **sortirana**.
:::


## Primjene

Kao što smo vidjeli u ranijim primjerima, binarno pretraživanje često koristimo kada provjeravamo je li neki broj u listi i, ako je, na kojoj je poziciji. Pogledajmo sada neke drugačije primjene ovog algoritma.

### Pretraživanje rješenja

Zamislimo problem u kojem tražimo odgovarajuću veličinu kvadratnog kaveza za neki čopor majmuna u zoološkom vrtu. Želimo odabrati kavez tako da mu veličina bude <ins>minimalna</ins>, ali takva da svi majmuni budu zadovoljni (zadovoljstvo majmuna određeno je nekim uvjetima zadatka). Moguće je rješenje krenuti od veličine d=$1$ i povećavati veličinu za $1$ tako da pri svakom koraku provjeravamo jesmo li ispunili uvjet zadovoljstva (kad ga ispunimo, našli smo najmanju prihvatljivu veličinu i prestajemo izvršavati program). Ovo rješenje radi, ali je gotovo uvijek presporo.

Pokušajmo sada upotrijebiti znanje binarne pretrage. Važno je primijetiti da sve veličine kaveza do neke <ins>granične veličine</ins> **ne** ispunjavaju uvjet zadovoljstva, a sve veličine nakon te ga ispunjavaju. Naš je zadatak pronaći upravo tu graničnu veličinu. Postavimo lijevu granicu pretrage na $1$, a desnu na neki veliki broj koji sigurno ispunjava uvjet zadatka. Pri svakom koraku pretrage provjeravamo jesmo li ispunili uvjet zadatka. Ako jesmo, pomičemo desnu granicu (želimo još manju veličinu), a ako nismo, pomičemo lijevu granicu.

![happy monkey](../../static/img/sortiranje_happy_monkey.jpg ) <br />
Uistinu zadovoljan majmun.

### Maksimum funkcije

Binarnu pretragu također možemo koristiti za traženje maksimuma funkcija koje prvo rastu, a potom padaju. Za takve funkcije vrijedi da je $f(x)<f(x+1)$ za $x < k$, a $f(x)>f(x+1)$ za $x \geq k$. Mi tražimo poziciju $k$ koja odgovara maksimumu funkcije.:

```cpp
int x = -1;
for (int b = z; b >= 1; b /= 2) {
	while (f(x+b) < f(x+b+1)) x += b;
}
int k = x+1;
```

:::noteprimijetite
U ovom slučaju uzastopne vrijednosti funkcije ne smiju biti jednake. Kada bi to bilo dozvoljeno, ne bismo znali kako nastaviti pretragu.
:::
