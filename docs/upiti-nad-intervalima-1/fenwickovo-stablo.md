---
title: Fenwickovo stablo
---

### Uvod  
Fenwickovo stablo je struktura podataka koja omogućuje upite sumom prefiksa niza i promjenu vrijednosti elementa niza, sve u $O(log(n))$. Fenwickovo stablo je još poznato pod imenom binarno indeksirano stablo, iako zapravo nije ni stablo, već niz.  
Prije nego što objasnimo strukturu, upoznajmo se sa sljedećom operacijom.  

### Izoliranje posljednjeg postavljenog bita
Kao što naslov kaže, potrebno je iz nekog broja uzeti posljednji postavljeni bit, dakle bit čija je vrijednost 1.  
Npr, imamo broj 14. Ako ga prikažemo u bazi 2, on izgleda ovako: 0000 1110  
Ako izoliramo posljedni postavljeni bit, dobijemo 2 (0000 0010), a to se postiže bitovnom operacijom $AND(\&)$ s dvojnim komplementom broja. Brzo rješenje je sljedeće:  

$$  
n\&(-n)
$$  

Ova operacija je vrlo bitna za Fenwickovo stablo.

### Struktura  
Svaki indeks $i$ u fenwickovom stablu predstavlja sumu intervala $[i - 2^{\smash{j - 1}} + 1, i]$, gdje $j$ predstavlja posljednji postavljeni bit u indeksu $i$. Koristit ćemo 1-indeksiranje kod nizova.

Primjer:  
Neka je $L = i - 2^{\smash{j - 1}} + 1$ početak intervala, a $R = i$ kraj intervala.  

| Indeks $i$ | bitovni prikaz | $j = i\&(-i)$ | $L$           | interval $[L, R]$ |
|--------|--------------------|---------------|-------------------------|---------|
| 1      | 0001               | 1             | $1 - 2^{\smash{0}} + 1$ |$[1, 1]$ |
| 2      | 0010               | 2             | $2 - 2^{\smash{1}} + 1$ |$[1, 2]$ |
| 3      | 0011               | 1             | $3 - 2^{\smash{0}} + 1$ |$[3, 3]$ |
| 4      | 0100               | 3             | $4 - 2^{\smash{2}} + 1$ |$[1, 4]$ |
| 5      | 0101               | 1             | $5 - 2^{\smash{0}} + 1$ |$[5, 5]$ |
| 6      | 0110               | 2             | $6 - 2^{\smash{1}} + 1$ |$[5, 6]$ |
| 7      | 0111               | 1             | $7 - 2^{\smash{0}} + 1$ |$[7, 7]$ |
| 8      | 1000               | 4             | $8 - 2^{\smash{3}} + 1$ |$[1, 8]$ |  

Kako sad iz ovoga izračunati sumu prefika niza?  
Uzet ćemo indeks 7 kao primjer. On predstavlja sumu intervala $[7, 7]$. Ako od njega oduzmemo posljednji postavljeni bit (1), dobijemo indeks 6, tj. interval $[5, 6]$. Od broja 6 oduzmemo njemu posljednji postavljeni bit (2). Dobijemo indeks 4 ili interval $[1, 4]$.  
Imamo sljedeće intervale: $[1, 4]$, $[5, 6]$, $[7, 7]$. Njihovom unijom dobijemo interval $[1, 7]$ što predstavlja sumu prefiksa niza za indeks 7.  

Ilustracija:  
![Fenwick tree - primjer](/img/fenwick-tree.png)  

Programski kod za računanje sume prefiksa koristeći fenwickovo stablo:  
```cpp
// suma intervala [1, index]
int prefixSum(int index, vector <int> &fenwickTree) {
	int sum = 0;

	while(index >= 1) {
		sum += fenwickTree[index];

		index -= index & -index;
	}

	return sum;
}
```  

### Promjena vrijednosti elementa niza  
Dodavanje nekog broja $x$ elementu originalnog niza se vrši na sličan način kao i računanje sume prefiksa, samo ovaj put se kreće od manjeg indeksa prema većima. Kao primjer ćemo uzeti broj na indeksu 3, a cilj nam je promijeniti vrijednost za $x$ svim elementima Fenwickovog stabla koji prestavljaju sumu u kojoj se nalazi element na indeksu 3. Idemo obrnutim smjerom nego prije.  

Prvo ažuriramo fenwickovo stablo na indeksu 3: $fenwickTree[3] += x$  
Zatim indeksu dodajemo posljedni postavljeni bit (1) i dobijemo 4.  
Mijenjamo vrijednost fenwickovog stabla na ideksu 4: $fenwickTree[4] += x$  
Novi index: 8   
$fenwickTree[8] += x$  
...  
postupak se nastavlja dok indeks ne prijeđe granice niza.  

![Fenwick tree - primjer](/img/fenwick-tree2.png)  

###  

Programski kod je vrlo sličan onomu za dohvaćanje sume prefiksa:  
```cpp
//elementu na poziciji index dodaje x
void update(int index, int x, vector <int> &fenwickTree) {
	while(index < fenwickTree.size()) {
		fenwickTree[index] += x;

		index += index & -index;
	}
}
```

:::caution Oprez  
U ovoj implementaciji $fenwickTree.size()$ ne označava pravu veličinu niza.  
Ona je zapravo za 1 manja zbog nultog indeksa kojeg tu ne koristimo.
:::  

Koristeću ovu funkciju možemo iz bilo kojeg niza izgraditi Fenwickovo stablo:  
```cpp
/*
	vraća Fenwickovo stablo za dani niz arr.
	pretpostavimo da se radi o 1-indeksiranju
*/
vector <int> getFenwick(vector <int> arr) {
	vector <int> fenwickTree(arr.size(), 0);

	for(int i = 1; i < arr.size(); ++i) {
		update(i, arr[i], fenwickTree);
	}

	return fenwickTree;
}
```  

Sada efikasno možemo odgovoriti na upite o sumi nekog podniza of $l$ do $r$ na isti način kao kod niza [sumi prefiksa](https://materijali.xfer.hr/docs/upiti-nad-intervalima-1/upiti-nad-statickim-poljima#suma-prefiksa):
$$
rangeSum(l, r) = prefixSum(r) - prefixSum(l - 1)
$$  
:::info Informacija
Korištenje 1-indeksiranja nam pokriva rubni slučaj kad se pozove $prefixSum$ za indeks 0.
:::  

Ovime smo pokrili promjene nad jednim elementom i upite nad intervalima. Pogledajmo sada kako obavljati promjene nad intervalima i upite nad jednim elementom.  

### Range update, point query  
Kako bi ovo postigli, potrebno je podsjetiti se [difference arraya](https://materijali.xfer.hr/docs/upiti-nad-intervalima-1/difference-array).  
Kako bi intervalu $[l, r]$ promijenili vrijednost za $x$, potrebno je elementu na indeksu $l$ dodati $x$, a onom na indeksu $r$ oduzeti.    

Dohvaćanje vrijednosti je također isto kao kod niza razlika, potrebno je napraviti sumu prefiksa. Prednost je u tome što se dohvaćanje elementa koristeći Fenwickovo stablo obavlja u $O(log(n))$.  

#### Programski kodovi  

```cpp
void rangeUpdate(int l, int r, int x, vector <int> &fenwickTree) {
	update(l, x, fenwickTree);
	update(r + 1, -x, fenwickTree);

	/*
		nije potrebno provjeravati je li r + 1 izvan granica
		jer while(index < fenwickTree.size()) rješava taj slucaj
	*/
}
```  

```cpp
// vraca vrijednost elementa na indeksu i
void pointQuery(int i, vector <int> &fenwickTree) {
	return prefixSum(i, fenwickTree);
}
```
