---
title: Sortiranje
---

Algoritme za sortiranje koristimo kako bismo složili podatke u smisleni poredak prema nekom kriteriju. Iako ćemo ovdje prvenstveno govoriti o primjeni sortiranja u natjecateljskom programiranju (sortiranje nad brojevima, stringovima...), treba biti svjestan da je primjena puno šira pa je ova vještina potrebna svakome tko se želi ozbiljnije baviti programiranjem. Također, sortiranje je ključan preduvjet za mnoge druge korisne algoritme. U ovom ćete članku naučiti nešto o različitim sortovima i njihovoj složenosti. Ako vas zanima više, istražite dostupne linkove ili se javite putem foruma 😄.

<div style={{"textAlign":"center"}}>
	<img src="../../static/img/sortingHat.jpg" width="250"/>
	<figcaption>Harry Potter i kamen mudraca, Sorting Hat</figcaption>
</div>

## $O(n^2)$ algoritmi

Najjednostavniji algoritmi sortiraju liste u kvadratnoj složenosti. Jedan od najpoznatijih primjera ovakvog sortiranja je tzv. **bubble sort**. Algoritam se sastoji od $n$ koraka. U svakom koraku prolazimo kroz sve elemente u listi koju sortiramo i uspoređujemo susjedne članove. Ako dva susjedna člana nisu u odgovarajućem poretku (npr. sortiramo uzlazno), algoritam im mijenja mjesta. Tako osiguravamo da će se nakon prvog prolaska kroz niz najveći član nalaziti na točnom mjestu. Nakon maksimalno $n$ koraka svi će članovi biti na svojim mjestima i lista će biti sortirana. Više o bubble sortu pročitajte [ovdje](https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm "Bubble sort").

```cpp
for(int i=0; i<n; i++) {
	for(int j=0; j<n-1; j++) {
		if(array[j] > array[j+1]) {
			swap(array[j], array[j+1]);
		}
	}
}
```

Prednost bubble sorta i sličnih algoritama je što su jako kratki za kodiranje i lako se razumiju. Ipak, u natjecateljskom programiranju češće ćete sretati veće količine podataka za koje je kvadratna složenost prevelika (npr. za $n=10^5$ kvadratna složenost daje vrijeme izvršavanja od oko $100$ sekundi što ne prolazi time limit$^1$. Sada se postavlja pitanje kako ubrzati ovaj algoritam? Početna ideja mogla bi biti prekinuti izvršavanje u unutarnjoj petlji ako nismo napravili niti jednu zamjenu. To bi ponešto optimiziralo program, ali složenost je u najgorem slučaju i dalje O($n^2$). Može li brže? Nego što!

$^1$ više o time limitu pročitajte ovdje.
TODO: dodaj link

## $O(n \log(n))$ algoritmi
Postoji više algoritama koji rade u ovoj složenosti, ali njihovi detalji nisu toliko bitni za natjecateljsko programiranje pa ćemo ih ovdje samo spomenuti. Više o njima možete pročitati 
na dostupnim linkovima.
+ **merge sort** - sort koji se bazira na rekurziji, dijeli početnu listu na manje dijelove i sortira svaki zasebno, a potom ih spaja prilikom povratka u rekurziji. Više pročitajte [ovdje](https://www.geeksforgeeks.org/merge-sort/ "Merge sort").
+ **heap sort**  - sort koji radi nad strukturom poznatom kao 'binary heap', sličan selection sortu. Detalji [ovdje](https://www.geeksforgeeks.org/heap-sort/ "Heap sort").
+ **quick sort** - sort koji radi nad strukturom poznatom kao 'binary heap', sličan selection sortu. Detalji [ovdje](https://www.geeksforgeeks.org/quick-sort/ "Quick sort").

:::tipsavjet
Prije nego počnete pisati kod, dobro razmislite o složenosti programa kojeg ste smislili. Pokušajte uvijek tražiti rješenje koje prolazi ograničenja, a zahtijeva minimalno vrijeme pisanja.
:::


## Može li još brže?
Nažalost, može se pokazati da za algoritme koji uspoređuju elemente niza nije moguće postići manju složenost od O($n \log(n)$). Ipak, postoje algoritmi koji rade brže, ali pritom **ne uspoređuju članove niza**. Primjer je **counting sort** koji radi u linearnoj složenosti. Ovaj se algoritam temelji na tome da unaprijed imamo neku informaciju o članovima liste koju sortiramo. Npr. možemo zamisliti da je potrebno sortirati $10^6$ brojeva, ali su svi ti brojevi u intervalu $[0,100]$. Counting sort  napravi praznu pomoćnu listu ispunjenu nulama. Potom jednom prolazimo kroz sve članove u listi koju sortiramo te na $i$-toj poziciji u pomoćnoj listi pratimo koliko se puta pojavio broj iznosa $i$. Pogledajmo konkretan primjer. Neka je potrebno sortirati niz brojeva $[2, 44, 23, 25, 88, 44, 23]$. Nakon što provedemo sortiranje na poziciji $i=44$ u pomoćnoj listi piše $2$ zato što se broj $44$ nalazi <ins>dva puta</ins> u nizu koji sortiramo. Po završetku sortiranja prolazimo kroz pomoćnu listu tako da za svaku poziciju i ispisujemo onoliko brojeva kolika je vrijednost na toj poziciji.

```cpp
int lista[101]; //na početku nule
for(int i=0; i<n; i++) {
	cin >> x; //brojevi koje unosimo
	lista[x]++;
}

//ispis sortiranog niza
for(int i=0; i<=100; i++) {
	for(int j=0; j<lista[i]; j++)
		cout << i << ", ";
}
```

Prednost ovog algoritma je već spomenuta iznimno mala vremenska složenost. Najveća mana je potrebna memorija (ovakvo bi se sortiranje moglo provesti za brojeve koji su otprilike do $10^5$, a u zadacima često imamo i puno veće brojeve).


## Ugrađeni sort (C++)
Iako postoje razni algoritmi za sortiranje, u natjecateljskom programiranju je najčešće cilj uštediti što više vremena na implementaciji kako bi ga ostalo dovoljno za mozganje. Iz tog se razloga u praksi gotovo uvijek koriste već <ins>gotove implementacije sorta</ins>. Pogledajmo primjer sortiranja nekoliko tipova spremnika u CPP-u:

```cpp
vector<int> v = {4,2,5,3,8,5,8,3};
sort(v.begin(), v.end());

int n = 7;
int a[] = {4,2,5,3,8,5,8,3};
sort(a,a+n);

string s="sladoled";
sort(s.begin(), s.end()); //addellos
```

### Komparator
Kao treći argument funkciji *sort* moguće je zadati operator usporedbe (komparator). On mora biti definiran nad tipom podataka koji sortiramo (npr. nad parovima cijelih brojeva). 
C++ ima već ugrađeni komparator za ovaj tip pa se po defaultu parovi sortiraju tako da se prvo uspoređuje prvi element iz para, a potom drugi. Što ako želimo drugačiji kriterij? 
Tu nalazimo primjenu **vanjskih komparatora** (custom comparators). Npr. zamislimo da parove integera želim sortirati prema drugom elementu iz para.

```cpp
#include <bits/stdc++.h>
#define pii pair<int,int>
using namespace std;

bool comp(pii a, pii b) {
	if (a.second == b.second) {
		return a.first < b.first;
	}
	return a.second < b.second;
}

int main() {
    vector<pair<int,int>> v; //... dodavanje parova u vektor
    
    sort(v.begin(), v.end(),comp);
    return 0;
}
```

### Reverse funkcija
Reverse funkcija okreće poredak elemenata u bilo kojem tipu spremnika (lista, vektor...). Okreće elemente kojima su pozicije u intervalu \[first,last>
i radi u složenosti O($n$).

```cpp
vector<int> v; //... dodavanje elemenata u vektor

reverse(v.begin()+1, v.begin()+5);
//input: 1,2,3,4,5,6,7,8
//output: 1,5,4,3,2,6,7,8

reverse(v.begin(), v.end());
//input: 1,2,3,4,5,6,7,8
//output: 8,7,6,5,4,3,2,1
```