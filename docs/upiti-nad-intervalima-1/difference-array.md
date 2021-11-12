---
title: Difference array
---

import Author from '../../src/react_components/author.js';

<Author authorName='Adrian Brajković' githubUsername='Brajk19'/>

### Uvod  
U prošlom poglavlju smo imali statičke nizove i nad njima obavljali upite. Zakomplicirat ćemo stvari tako što niz više neće biti statički, nego u ulazu možemo dobivati zahtjeve da promijenimo neki element niza ili pak podniz. Za tu svrhu postoji više različitih struktura podataka, a kao početak ćemo se upoznati s jednom jednostavnijom, nizom razlika.  

&nbsp;  
&nbsp;  

### Niz razlika (difference array)  
Niz razlika omogućuje promjenu podniza u $O(1)$, bez potrebe da iteriramo po cijelom podnizu i svakom elementu zbrajamo/oduzimamo zadani broj. Nedostatak ove strukture podataka je u tom što je složenost upita za vrijednost nekog elementa $O(n)$ što će biti demonstrirano ubrzo. Vrijednost svakog elementa niza razlika predstavlja razliku između uzastopnih elemenata originalnog niza.

### Primjer  
Prvo ćemo na jednostavnijem primjeru pokazati kako se izvršavaju promjene nad intervalima u nizu.  
Imamo niz $[0, 0, 0, 0, 0, 0]$ i upite tipa $a, b, x$, gdje je $a$ indeks početka podniza, $b$ indeks kraja podniza, a $x$ vrijednost koju pridodajemo svim članovima tog podniza.  
Neka su upiti sljedeći:  
$1, 3, 4$  
$0, 4, 2$  
$3, 5, 3$  

&nbsp;  
&nbsp;  

#### 1. korak
Upit: $a = 1$, $b = 3$, $x = 4$  
Niz razlika: $[0, 0, 0, 0, 0, 0]$  
Originalni niz: $[0, 0, 0, 0, 0, 0]$  

Povećamo vrijednost na indeksu 1 za 4, niz razlika sada izgleda ovako: $[0, 4, 0, 0, 0, 0]$  
Ali, povećavši vrijednost za 4 mi smo zapravo povećali vrijednost svih elemenata od indeksa 1 do kraja, tako da je originalni niz trenutno $[0, 4, 4, 4, 4, 4]$ iako to nigdje ne zapisujemo jer bi nam za to trebalo iteriranje po cijelom intervalu.  
S obzirom na to da naš interval nije od 1 do 5, posljednja dva člana moramo nekako ispraviti. To radimo tako da indeksu $b + 1$ **oduzmemo** vrijednost $x$. Pogledajmo zašto:  

Niz razlika: $[0, 4, 0, 0, -4, 0]$  
Mi smo ovime svim članovima niza od indeksa 4 do kraja oduzeli broj 4, tako da je vrijednost našeg niza sada $[0, 4, 4, 4, 4-4, 4-4]$ -> $[0, 4, 4, 4, 0, 0]$ što je željeni izgled nakon ovog upita.

Promjenu cijelog intervala smo napravili s dvije operacije u $O(1)$.  

$$
differenceArray[a] = differenceArray[a] + x  
$$
$$
differenceArray[b + 1] = differenceArray[b + 1] - x  
$$  

:::caution Oprez  
Pripazi na rubni slučaj kad interval ide do kraja niza. U tom slučaju se nema od čega oduzeti $x$
:::  

&nbsp;  
&nbsp;  

#### 2. korak  
Upit: $0, 4, 2$  
Niz razlika: $[0, 4, 0, 0, -4, 0]$  
Originalni niz: $[0, 4, 4, 4, 0, 0]$  (njega nemamo nigdje zapisanog, ovdje je samo za lakše shvaćanje)  

Indeks 0 povećamo za 2, a indeks 5 smanjimo za 2. Niz razlika izgleda  $[2, 4, 0, 0, -4, -2]$, a originalni $[2, 6, 6, 6, 2, 0]$.  

&nbsp;  
&nbsp;  


#### 3. korak  
Upit: $3, 5, 3$  
Niz razlika: $[2, 4, 0, 0, -4, -2]$  
Originalni niz: $[2, 6, 6, 6, 2, 0]$  

Ponovimo isti postupak i dobijemo konačni izgled niza razlika: $[2, 4, 0, 3, -4, -2]$ (s obzirom na to da je indeks 5 posljednji, nismo ni od jednog elementa oduzeli 3).  

&nbsp;  
&nbsp;  

#### Dohvaćanje vrijednosti  
Kako sada iz razlike niza izračunati vrijednost konačnog niza $array$? Jednostavnom iteracijom kroz niz razlika pamtimo dosadašnju sumu koje predstavlja vrijednost trenutnog člana:  

$array[0]$ = 2 = **2**  
$array[1]$ = 2 + 4 = **6**    
$array[2]$ = 2 + 4 + 0 = **6**  
$array[3]$ = 2 + 4 + 0 + 3 = **9**  
$array[4]$ = 2 + 4 + 0 + 3 - 4 = **5**    
$array[5]$ = 2 + 4 + 0 + 3 - 4 - 2 = **3**  

&nbsp;  
&nbsp;  

#### Što ako početni niz nisu samo nule?  
Što ako nam je početni niz bio ovo: $[3, 8, 6, -2]$? U tom slučaju početni niz razlika nije niz nula kao u prethodnom primjeru.  
Možemo zamisliti to kao četiri upita za promjenu intervala(ili u ovom slučaju jednog elementa):  
1. $0, 0, 3$  
2. $1, 1, 8$  
3. $2, 2, 6$  
4. $3, 3, -2$  

i sada gradimo naš niz razlika $[0, 0, 0, 0]$:  

1. $[3, -3, 0, 0]$  
2. $[3, 5, -8, 0]$  
3. $[3, 5, -2, -6]$  
4. $[3, 5, -2, -8]$  

Jednostavnom iteracijom kroz niz i zbrajanjem možemo se uvjeriti da je ovo uistinu točan niz razlika.  
Drugi način kreiranja niza razlike od početnog niza je korištenjem sljedeće formule (obrati pažnju na slučaj kad je i = 0):  
$$
differenceArray[i] = array[i] - array[i-1]  
$$  

$$
differenceArray[0] = array[0]
$$

&nbsp;  
&nbsp;  

### Programski kodovi  
```cpp  
/*
	a - početni indeks intervala
	b - krajnji indeks intervala
	x - vrijednost za koju mijenjamo interval
	differenceArray - niz razlika
*/
void rangeUpdate(int a, int b, int x, vector <int> &differenceArray) {
	differenceArray[a] += x;

	if(b + 1 < differenceArray.size()) { //pripazi da kraj intervala nije ujedino i kraj niza
		differenceArray[b + 1] -= x;
	}

	return;
}
```  

```cpp
/*
	arr - originalni niz

	funkcija vraća niz razlika za zadani niz
*/
vector <int> initializeDiffArray(vector <int> &arr) {
	vector <int> differenceArray(arr.size(), 0);

	for(int i = 0; i < arr.size(); ++i) {
		rangeUpdate(i, i, arr[i], differenceArray);
	}

	return differenceArray;
}
```

```cpp
/*
	alternativni način
*/
vector <int> initializeDiffArray(vector <int> &arr) {
	vector <int> differenceArray(arr.size(), 0);

	differenceArray[0] = arr[0];

	for(int i = 1; i < arr.size(); ++i) {
		differenceArray[i] = arr[i] - arr[i - 1];
	}

	return differenceArray;
}
```

```cpp
/*
	izračunava vrijednost originalnog niz koristeći niz razlika
*/
int getValue(int index, vector <int> &diffArr) {
    //funkcija se nalazi u headeru <numeric>
    //zbraja sve elemente niza u intervalu [0, index]
	return accumulate(diffArr.begin(), diffArr.begin() + index + 1, 0);
}
```
```cpp
/*
	stvara originalni niz iz niza razlika
*/
vector <int> getOriginalArray(vector <int> &diffArr) {
	vector <int> arr(diffArr.size(), 0);

	arr[0] = diffArr[0];

	for(int i = 1; i < arr.size(); ++i) {
		arr[i] = arr[i - 1] + diffArr[i];
	}

	return arr;
}
```

### Zaključak  
Difference array vrlo efikasno u $O(1)$ dodaje neku vrijednost cijelom intervalu niza, a kao što smo rekli i što vidimo iz $getValue$ funkcije, dohvat elemenata se odvija u $O(n)$, što je presporo ako imamo puno takvih upita.  


U savršenom scenariju gdje se sve promjene nad nizom odvijaju prije upita složenost je O(n + m + q), gdje je:  
$n$ - broj zahtjeva za promjenom nekog niza, $n$ puta odradimo update u $O(1)$  
$m$ - veličina niza; u $O(m)$ izračunamo originalni niz  
$q$ - broj upita, $q$ upita za vrijednost nekog člana u $O(1)$ koristeći izračunati originalni niz  

Što ako se u upitima traži suma intervala umjesto vrijednosti pojedinog elementa? Tada jednostavno možemo kreirati [sumu prefiksa](https://materijali.xfer.hr/docs/upiti-nad-intervalima-1/upiti-nad-statickim-poljima#suma-prefiksa) nad nizom i te sume intervala isto računati u $O(1)$  

Za kompliciranije situacije postoje bolja rješenja koja će se obrađivati u sljedećim poglavljima.
