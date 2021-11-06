---
title: Upiti nad statičkim poljima
---

import Author from '../../src/react_components/author.js';

import Spoiler from '../../src/react_components/spoiler.js';

<Author authorName='Adrian Brajković' githubUsername='Brajk19'/>

### Uvod  
Započet ćemo s jednim jednostavnim zadatkom/primjerom:  
Zadan je niz cijelih brojeva $[2, 5, 3, 0, -3, 1, 4]$ i potrebno je naći sumu niza nad nekim intervalom. Na primjer, neka je početak intervala na indeksu 2, a kraj intervala na indeksu 5. Rješenje je $3 + 0 +(-3) + 1 = 1$.  
Nazovimo funkciju koja će pronalaziti zbroj nad nekim intervalom $rangeSum(a, b)$, gdje su $a$ i $b$ početak i kraj intervala. Vrijedi $0 \le a \le b \lt N$, $N$ je duljina niza.  
U našem slučaju $rangeSum(2, 5) = 1$, &nbsp; $rangeSum(1, 2) = 8$, &nbsp; $rangeSum(0, 6) = 12$.  

Najjednostavnije rješenje bi bilo za svaki interval proći kroz niz i zbrojiti elemente. Tada bi funkcija izgledala ovako (pretpostavimo da je niz dostupan globalno):
```cpp
int rangeSum(int a, int b) {
    int sum = 0;

    for (int i = a; i <= b; ++i) {
        sum += array[i];
    }

    return sum;
}
```  
Neka je $Q$ broj upita nad tim nizom. Složenost funkcije $rangeSum$ je $O(N)$. Ako se funkcija pozove za svaki od Q upita, složenost cijelog programa bi bila $O(N*Q)$.  
Iako je ovo rješenje točno, presporo je za nizove s mnogo elemenata nad kojima se provodi velik broj upita. Na primjer, neka je $N = 10^6$, a $Q=10^5$. Naš algoritam je prespor da izračuna sume nad intervalima pod ograničenjem od 1 sekunde (standard u zadacima za natjecateljsko programiranje). Dakle, moramo naći bolje rješenje.  


### Suma prefiksa
Prvo uvodimo pojam sume prefikse. Suma prefiksa je zbroj svih brojeva u nizu od početka do nekog zadanog indeksa $n$. Nazovimo funkciju koja to računa $prefixSum(n)$. Vrijedi:  
$prefixSum(0) = array[0]$  
$prefixSum(1) = array[0] + array[1]$  
$prefixSum(n) = array[0] + array[1] + ... + array[n]$  

### Poboljšano rješenje zadatka

Primijetimo da se suma nekog intervala može prikazati razlika dviju sumi prefiksa.  
Uzmimo za primjer već zadani niz $[2, 5, 3, 0, -3, 1, 4]$ i sumu intervala od 2 do 5.  
$prefixSum(5) = 2 + 5 + 3 + 0 + (-3) + 1 = 8$  
$prefixSum(2 - 1) = 2 + 5 = 7$  

Oduzmemo li te dvije sume prefiksa, dobit ćemo rješenje 1 kao i s prvim načinom rješavanje. Dolazimo do zaključka da se svaka suma nad nekim intervalom može prikazatina ovaj način:  
$$
rangeSum(a, b) = prefixSum(b) - prefixSum(a - 1)
$$  

Kako nam ovo pomaže u poboljšanju našeg prvog algoritma? Sumu prefiksa za bilo koji indeks možemo izračunati jednom i spremiti u zaseban niz, a poslije za svaki od upita vrlo brzo dohvatiti taj podatak.  
Nazovimo taj niz $prefixSum[]$, a lako ćemo ga izračunati iterirajući jednom kroz zadani niz.  
```cpp
int prefixSum[N]; // N je broj elemenata zadanog niza
prefixSum[0] = array[0];

for (int i = 1; i < N; ++i) {
    prefixSum[i] = prefixSum[i - 1] + array[i];
}
```  

Sada u $O(1)$ možemo doći do sume bilo kojeg prefiksa, što znači da u $O(1)$ možemo doći i do sume bilo kojeg intervala.

Za niz $[2, 5, 3, 0, -3, 1, 4]$ imamo sljedeće sume prefiksa $[2, 7, 10, 10, 7, 8, 12]$

:::caution Oprez  
Pripazi na rubni slučaj kad program traži $prefixSum[-1]$ u slučaju da upit traži sumu intervala od početka do neke pozicije.
:::  

Funkciju $rangeSum(a, b)$ sada možemo poboljšati i ona izgleda ovako:  
```cpp
int rangeSum(int a, int b) {
    if (a == 0) {
        return prefixSum[b];
    } else {
        return prefixSum[b] - prefixSum[a - 1];
    }
}
```  

Sumu prefiksa smo izračunali u $O(N)$, a sumu intervala u $O(1)$. Za $Q$ upita nad intervalima, tj. za cijeli program složenost je $O(N + Q)$.  

Kompletno rješenje zajedno s unosom podataka i ispisom sada izgleda ovako:  

```cpp
#include <bits/stdc++.h>

using namespace std;

vector < int > arr(10e6);
vector < int > prefixSum(10e6);

int rangeSum(int a, int b) {
    if (a == 0) {
        return prefixSum[b];
    } else {
        return prefixSum[b] - prefixSum[a - 1];
    }
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N, Q;
    cin >> N >> Q; // broj elemenata u nizu i broj upita

    for (int i = 0; i < N; ++i) {
        cin >> arr[i];
    }

    //računanje niza sumi prefiksa
    prefixSum[0] = arr[0];
    for (int i = 1; i < N; ++i) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    for (int i = 0; i < Q; ++i) {
        int a, b; //donja i gornja granica intervala
        cin >> a >> b;

        cout << rangeSum(a, b) << endl;
    }

    return 0;
}
```  


### Suma prefiksa nad matricom  
Sada upiti neće biti nad jednodimenzionalnim poljem, već nad matricom. Imamo matricu od $R$ redaka i $S$ stupaca.  
Primjer:  
$3, 5, -2, 1$  
$1, 0, 3, -1$  
$8, 3, 1, -3$  

Ovdje se traži suma nekog "pravokutnika" matrice, a u upitima oni će se označavati s dvije točke, gornjom lijevom i donjom desnom točkom. Ako uzmemo $(0, 2)$ i $(2, 3)$ gdje prvi broj svake "točke" označava redak, a drugi stupac, rješenje će biti zbroj elemenata ove podmatrice:  
$-2, 1$  
$3, -1$  
$1, -3$  

Kao i u prvom zadatku, najjednostavnije rješenje je za svaki od $Q$ upita napraviti iteraciju po matrici i izračunati sumu, no i ovaj put to je presporo rješenje čija je složenost $O(Q * R * S)$.  
Koristit ćemo ideju iz prošlog zadatka, ali prefiks sume ćemo proširiti na dvije dimenzije. Svaki element u matrici prefiksa suma će sadržavati zbroj svih elemenata od početka matrice (gornji lijevi kut) do njega. Dakle, za gornji primjer imati ćemo sljedeću matricu suma prefiksa:  

$3, 8, 6, 7$  
$4, 9, 10, 10$  
$12, 20, 22, 19$   
Način na koji se računa $prefixSum$ matrica je sljedeći:  
Uzmimo kao primjer poziciju (2, 2). Vrijedi $prefixSum[2][2] = 22$ i to je ovaj pravokutnik

![Suma prefiksa (2, 2)](/img/upiti-intervali-matrica-1.png)  

Tu vrijednost brzo izračunamo koristeći informacije koje već imamo od prije. Uzmemo sume prefiksa od gornje i lijeve točke koje su izračunate u $prefixSum[1][2]$ i $prefixSum[2][1]$. Njih ćemo zbrojiti.

![Suma prefiksa (1, 2) i (2, 1)](/img/upiti-intervali-matrica-2.png)  

Ali, sada smo jedan dio dva puta zbrojili i stoga oduzmemo $prefiksSum[1][1]$  

![Suma prefiksa (1, 1)](/img/upiti-intervali-matrica-3.png)  

Još nam samo prostaje pribrojiti $arr[2][2]$ i imamo rješenje. Dakle, formula za izračunavanje sume prefiksa kod dvodimezionalnih polja je
$$
prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1] + arr[i][j]
$$  
Implementacija je vidljiva dolje u konačnom rješenju cijelog zadatka.  

##### Rješenje zadatka
Na vrlo sličan način će se i računati suma nad nekim intervalom nad matricom. Kao primjer uzet ćemo sumu pravokutnika (intervala) od $(1, 2)$ do $(2, 3)$, kvadrat plave površine na slici. Za početak odabiremo $prefixSum[2][3]$.

![Suma prefiksa (2, 3)](/img/upiti-intervali-matrica-5.png)  

I sada moramo oduzeti viškove, i to $prefixSum[2][1]$ te $prefixSum[0][3]$. Ovaj put smo jedno područje dva puta oduzeli, pa stoga pribrajamo $prefixSum[0][1]$.

![Suma prefiksa (1, 1)](/img/upiti-intervali-matrica-4.png)  

Konačna formula($r1, s1$ - redak i stupac lijevog gornjeg ugla, $r2, s2$ - redak i stupac desnog donjeg ugla):  
$$
rangeSum(r1, s1, r2, s2) = prefixSum[r2][s2] - prefixSum[r2][s1 - 1] - prefixSum[r1 - 1][s2] + prefixSum[r1 - 1][s1 - 1]
$$  

Kompletno rješenje zajedno s unosom podataka i ispisom ($R, S \le 1000$):  
```cpp
#include <bits/stdc++.h>

using namespace std;

vector < int > row(1005, 0);
vector < vector < int > > arr(1005, row);
vector < vector < int > > prefixSum(1005, row);

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int R, S, Q;
    cin >> R >> S >> Q; // broj redaka, stupaca i upita

    /*
    indeksiranje kreće od 1 kako bi se izbjegla potreba za
    provjeravanjem je li kod prefixSum[r][s] r ili s jednak nuli
    */
    for (int i = 1; i <= R; ++i) {
        for (int j = 1; j <= S; ++j) {
            cin >> arr[i][j];

            //odmah računamo i matricu za prefikse suma
            prefixSum[i][j] = prefixSum[i − 1][j] + prefixSum[i][j − 1]
                            − prefixSum[i − 1][j − 1] + arr[i][j];
        }
    }

    for (int i = 0; i < Q; ++i) {
        int r1, s1, r2, s2;

        cin >> r1 >> s1 >> r2 >> s2;

        //želimo indeksiranje koje kreće od 1
        r1++;
        s1++;
        r2++;
        s2++;

        cout << prefixSum[r2][s2] − prefixSum[r2][s1 − 1] − prefixSum[r1 − 1][s2] +
            prefixSum[r1 − 1][s1 − 1] << endl;
    }

    return 0;
}
```
