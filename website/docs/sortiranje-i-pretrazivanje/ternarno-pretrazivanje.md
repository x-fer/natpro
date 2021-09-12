---
title: Ternarno pretraživanje
---

Kao što smo vidjeli u prethodnom članku, binarno pretraživanje pri svakom koraku dijeli niz koji pretražujemo na **dva** podniza te pomoću uvjeta određuje u kojem podnizu nastavljamo pretragu. Što se dogodi ako podniz podijelimo na **tri** dijela?

Algoritam ternarnog pretraživanja gotovo se potpuno podudara s binarnim te i njega koristimo za pronalazak broja $x$ u **sortiranom** nizu brojeva. Umjesto jedne srednje vrijednosti $mid$ ovoga puta biramo dvije i to na sljedeći način:

 ```code
mid1 = l + (r-l)/3 
mid2 = r – (r-l)/3 
 ```

gdje su $r$ i $l$ desna i lijeva granica trenutnog podniza.

Sada uspoređujemo $x$ s vrijednostima $array[mid1]$ i $array[mid2]$. Ako je $x$ različit od obje vrijednosti (nismo pronašli rješenje), imamo tri slučaja: 

1. $x$ je manji od $array[mid1]$ $\rightarrow$ $x$ se (ako ga ima) nalazi u intervalu $[l,mid1\rangle$
2. $x$ je veći od $array[mid2]$ $\rightarrow$ $x$ se (ako ga ima) nalazi u intervalu $\langle mid2,r]$
3. inače $\rightarrow$  $x$ se nalazi u intervalu $\langle mid1,mid2 \rangle$

Varijable $r$ i $l$ mijenjamo ovisno o slučaju koji je nastupio i ponavljamo postupak dok ne pronađemo rješenje ili provjerimo cijeli niz. Povučemo li analogiju s binarnim pretraživanjem, problem se ovdje pri svakom koraku svodi na $1/3$ prethodnog problema pa je složenost algoritma $O(log_3(n))$.

Ovoga ćemo puta pokazati <ins>rekurzivnu implementaciju</ins> (slična se može napraviti za binarnu pretragu):
```cpp
int ternary_search(int l,int r, int x) {
    if(r >= l) {
        int mid1 = l + (r-l)/3;
        int mid2 = r - (r-l)/3;

        if(array[mid1] == x)
            return mid1;
        if(array[mid2] == x)
            return mid2;
        if(x < array[mid1])
            return ternary_search(l,mid1-1,x);
        else if(x > array[mid2])
            return ternary_search(mid2+1,r,x);
        else
            return ternary_search(mid1+1,mid2-1,x);
    }
    return -1;
}
```

## Implementacija na realnom intervalu
Ponekad želimo raditi pretraživanje na intervalu realnih brojeva. Ako koristimo implementaciju kao u prethodnim primjerima, mogu se dogoditi pogreške pri uspoređivanju brojeva zato što računala nemaju beskonačnu preciznost i uvijek zaokružuju vrijednosti na nekoj decimali. Iz tog razloga nećemo provjeravati 'jednakost' dvaju brojeva nego razlikuju li se oni do na neki mali faktor. Prethodni bi se primjer mogao modificirati na sljedeći način:

**UMJESTO OVOG STAVI ONO ZA FUNKCIJE NA LINKU DOLJE**

```cpp
double epsilon = 1e-7;
...
int ternary_search(int l, int r, int x) {
    if(r-l > epsilon) {
        int mid1 = l + (r-l)/3;
        int mid2 = r - (r-l)/3;

        if(abs(array[mid1]-x) < epsilon)
            return mid1;
        ...
    }
}
```

## Primjena
Ternarna pretraga često se koristi kod traženja vrijednosti ekstrema kod funkcija za koje znamo da imaju točno jedan ekstrem. Ako funkcija ima više lokalnih ekstrema, ternarna pretraga će pronaći barem jedan. 

Više detalja i primjera zadataka pročitajte [ovdje](https://cp-algorithms.com/num_methods/ternary_search.html).