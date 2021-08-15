---
title: "Raspored poslova"
---
Zadan je broj $k$.
U sljedećih $k$ redova zadano je po dva broja, $a_i$ i $b_i$,
koji označavaju početno i krajnje vrijeme zadatka $i$.
Samo jedan zadatak se može obavljati u isto vrijeme.
Zadatak se obavlja u vremenskom intervalu $[a_i, b_i]$ (uključno).

Koliko je najviše zadataka moguće obaviti?

#### Testni primjeri

Pokušajte razviti pohlepni pristup i iskušajte ga na sljedećim primjerima (u svakom su dana po 3 zadatka):

- (1,5), (2,2), (3,10) - rješenje je 2
- (1,3), (2,2), (3,3) - rješenje je 2

Pokušajte dokazati optimalnost vašeg pristupa!

#### Pohlepni pristup:

Zadatka je potrebno sortirati prema vremenu završetka (od najmanjeg prema najvećem).
Zatim je potrebno izvršavati zadatke redom, i paziti da se ne preklapaju s već izvršenima.

Tu treba biti kod!

#### Dokaz:

Napisati dokaz!
