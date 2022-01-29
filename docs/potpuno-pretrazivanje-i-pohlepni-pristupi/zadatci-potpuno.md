---
title: "Zadatci 1"
---

import Author from '@site/src/react_components/author.js';

<Author authorName='Petar Mihalj' githubUsername='PetarMihalj'/>

### Zadatak: Permutacije

Zadan je broj $n$. Ispišite sve permutacije niza $1, 2, ..., n$.

1. Koristeći rekurzivni pristup
2. Koristeći ugrađenu funkciju [next_permutation](https://www.cplusplus.com/reference/algorithm/next_permutation/)

Rekurzivni pristup koristi tehniku koju smo opisali u poglavlju *pruning*:

- postoji vektor kojeg dijele rekurzivni pozivi (šalje se preko reference)
- rekurzivni pozivi na mjesto $i$ stavljaju svaki od elemenata na mjestima $i$ do $n-1$, granaju se, a zatim poništavaju promjenu

### Ostali zadatci

Tutoriali za sve zadatke dostupni u *Contest materials* s desne strane.

- [Points on the line](https://codeforces.com/problemset/problem/940/A)
- [Vitamins](https://codeforces.com/problemset/problem/1042/B)
