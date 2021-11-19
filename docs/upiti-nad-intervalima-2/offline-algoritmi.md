---
title: Offline algoritmi
---

import Author from '../../src/react_components/author.js';

import Spoiler from '../../src/react_components/spoiler.js';

<Author authorName='Martin Josip Kocijan' githubUsername='kocijan'/>

### Uvod

U nekim je zadacima s upitima potrebno rješavati upite jedan po jedan, onim redom kojim su zadani. Tada gradimo neku strukturu koja odgovara na upite u složenosti npr. $O(1)$ ili $O(\log N)$. Naravno, te složenosti mogu biti i amortizirane ako nam to treba.

Često ne moramo ispisati odgovor na upit prije nego se unosi novi upit, i prethodni upiti ne utječu na stanje naše strukture za novi upit. Možemo reći da su svi upiti međusobno nezavisni i nebitan je redoslijed kojim na njih odgovaramo. Zato možemo poredati upite onako kako nama najviše odgovara, preprocesuirati ih sve odjednom, i ispisati odgovore u izvornom poretku.

### Primjer

Riješimo sljedeći zadatak s Mo's algorithm / sqrt decomposition.

- [Powerful array](https://codeforces.com/contest/86/problem/D)

Trik je da izaberemo neki $K$ i podijelimo niz duljine $N$ na $K$ bucketa duljine $\left\lfloor{\frac{N}{K}}\right\rfloor$ (zadnji skratimo po potrebi). Zatim ćemo prvo riješiti sve upite kojima je lijevi indeks unutar $1.$ bucketa, pa sve upite kojima je lijeva granica unutar $2.$ bucketa, i tako sve do $K$-tog bucketa. Unutar nekog bucketa pak rješavamo upite tako da sortiramo desnu granicu, a lijevu pomičemo po potrebi unutar bucketa. Naša će složenost biti $O(N \cdot \frac{N}{K} + N \cdot K)$, a može se dokazati da to poprima minimum za $K = \sqrt{N}$, te je složenost našeg rješenja $O(N \sqrt{N})$.

```cpp
#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <algorithm>
 
using namespace std;
typedef long long ll;
const int MaxN = 200005;
const int MaxA = 1000005;
const int BLOC = 450;
 
struct query{
  int L, R;
  int j; //indeks
  ll res;
};
 
bool cmp(query X, query Y){
  if (X.L / BLOC != Y.L / BLOC)
    return X.L / BLOC < Y.L / BLOC;
 
  return X.R < Y.R;
}
 
bool cmp_end(query X, query Y){
  return X.j < Y.j;
}
 
query Q[MaxN];
int a[MaxN];
int c[MaxA];
int N, M;
 
ll add(int pos){
  c[a[pos]]++;
  return (ll)a[pos] * (2*c[a[pos]] - 1); 
}
 
ll rem(int pos){
  c[a[pos]]--;
  return (ll)a[pos] * (2*c[a[pos]] + 1);
}
 
int main(){
  scanf("%d%d", &N, &M);
  for (int i = 1; i <= N; i++){
    scanf("%d", a+i); 
  }
  int tL, tR;
  for (int i = 0; i < M; i++){
    scanf("%d%d", &tL, &tR);
    Q[i].L = tL; Q[i].R = tR; Q[i].j = i;
  }
 
  sort(Q, Q + M, cmp);
  int cL = 0, cR = 0;
  ll ans = 0;
  for (int i = 0; i < M; i++){
    int L = Q[i].L;
    int R = Q[i].R;
 
    while (cL < L){
      ans -= rem(cL);
      cL++;
    }
    while (cL > L){
      cL--;
      ans += add(cL);
    }
    while (cR < R){
      cR++;
      ans += add(cR);
    }
    while (cR > R){
      ans -= rem(cR);
      cR--;
    }
 
    Q[i].res = ans;
  }
 
  sort(Q, Q + M, cmp_end);
  for (int i = 0; i < M; i++)
    cout<<Q[i].res<<endl;
 
  return 0;
}
```