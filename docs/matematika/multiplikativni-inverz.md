---
title: Multiplikativni inverz
---

**Modularni multiplikativni inverz** cijelog broja $a$ modulo $m$ je cijeli broj $a^{-1}$ koji zadovoljava kongruenciju $a \cdot a^{-1} \equiv 1 \ (\textrm{mod}\ m)$.

Na primjer, $6^{-1} \equiv 3 \ (\textrm{mod}\ 17)$, jer je $6 \cdot 3 \equiv 1 \ (\textrm{mod}\ 17)$. Primijetimo da je inverz različit za različite $m$, i da ne postoji uvijek (pokušajte ga pronaći za $a=2$, $m=4$), a može se pokazati da postoji ako i samo ako su $a$ i $m$ relativno prosti. Multiplikativni inverzi korisni su u modularnom dijeljenju - dijeljenje brojem $a$ modulo $m$ odgovarat će množenju s $a^{-1}$, kao i u običnoj aritmetici.

Jedan način za njihovo računanje koristi Eulerov teorem.

### Eulerov teorem

**Eulerova funkcija $\varphi(n)$**, engl. _Euler's Totient Function_, daje broj prirodnih brojeva izmedu $1$ i $n$ koji su relativno prosti s $n$. Npr., $\varphi(10)=4$, jer su 1, 3, 7 i 9 relativno prosti s 10. Primijetimo da će za proste $n$ vrijediti $\varphi(n)=n-1$.

Neka su $p_i$ prosti brojevi iz rastava $n$ na proste faktore, i neka ih ima $k$. Tada se vrijednost Eulerove funkcije može dobiti formulom $\varphi(n) = n\prod_{i=1}^{k}\left(1-\frac{1}{p_i}\right)$. Sljedeći algoritam implementira ovu formulu u složenosti $O(\sqrt{n})$:

```cpp
int phi(int n) {
    int rez = n;
    for (int i = 2; i * i <= n; ++i) {
        /* Provjeravamo je li n djeljiv s i. Ako jest, onda je i prost broj iz njegovog rastava. */
        /* Kako znamo da je i prost? Počinjemo s prostim brojem 2. Za trenutni i, u while petlji ispod */
        /* ćemo 'ukloniti' sva javljanja faktora i iz n, pa svaki sljedeći i koji dijeli (promijenjeni) n */
        /* neće biti višekratnik trenutnog i. Tako svaki trenutni i nije višekratnik brojeva 2..i-1, pa je prost. */
        if (n % i == 0) {
            while (n % i == 0)
                n /= i;
            /* rez = rez * (1 - 1/i) = rez - rez/i */
            rez -= rez / i;
        }
    }
    /* Ako je n>1, onda postoji prost faktor od n veći od sqrt(n). */
    /* Takav može biti samo jedan. Dokaz: pretp. da postoje dva prosta faktora a,b>sqrt(n). */
    /* Tada i a*b dijeli n, pa je a*b<=n. Ali, sqrt(n)*sqrt(n)<a*b<=n pa slijedi n<n (kontradikcija). */
    /* Taj preostali prosti faktor upravo je trenutni n, pa promijenimo rez kao gore. */
    if (n > 1)
        rez -= rez / n;
    return rez;
}
```

Kako je Eulerova funkcija vezana za računanje multiplikativnih inverza, postat će jasnije uvođenjem **Eulerovog teorema**. On kaže da, za relativno proste prirodne brojeve $a$ i $m$, vrijedi $a^{\varphi(m)} \equiv 1 \ (\textrm{mod}\ m)$.

Množenjem obiju strana gornje kongruencije s $a^{-1}$, dobivamo $a^{\varphi(m)-1} \equiv a^{-1} \ (\textrm{mod}\ m)$. Za prost $m$, izraz se pojednostavljuje na $a^{m-2} \equiv a^{-1} \ (\textrm{mod}\ m)$.

### Računanje multiplikativnog inverza

Korištenjem Eulerovog teorema, algoritma za <a href="https://materijali.xfer.hr/docs/matematika/vazne-formule/#potenciranje-i-brzo-potenciranje">brzo potenciranje</a> objašnjenog u poglavlju Važne formule, i gornje funkcije _phi_, možemo lako izračunati multiplikativni inverz broja $a$ modulo $m$:

```cpp
int multiplikativni_inverz(int a, int m){
  return brzo_potenciranje(a, phi(m)-1, m);
}
```

Ako je vrijednost _phi(m)_ unaprijed poznata, npr. kada je $m$ prost i vrijednost funkcije $m-1$, složenost ove metode određena je funkcijom _brzo_potenciranje_ i iznosi $O(\log{m})$. U nekim slučajevima, poput računa modulo $1e9 + 7$, ovaj pristup može biti dovoljno dobar.

Ako se radi o računu modulo $m$ gdje je $m$ složen broj, a vrijednost Eulerove funkcije _phi(m)_ nije unaprijed poznata, potrebno je računati i nju što može biti vremenski zahtjevno. Bolji pristup koristio bi prošireni Euklidov algoritam, ili računao inverze za niz brojeva odjednom. Ti algoritmi traže dodatno poznavanje teorije brojeva pa su izvan opsega ovog poglavlja, ali same formule i implementacija nisu teški. Više o njima možete saznati <a href="https://cp-algorithms.com/algebra/module-inverse.html">ovdje</a>.
