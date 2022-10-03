---
title: MST
---

<!-- TODO
    - pitati ivana za onaj kod
    - pravopis
    - vidjeti jel jos fali kakvih objasnjenja
-->

import Author from '@site/src/react_components/author.js';

import Spoiler from '@site/src/react_components/spoiler.js';

<Author authorName='Maja Milas' githubUsername='javascript-m'/>

## Minimalno razapinjuće stablo (MST)

**Razapinjuće stablo** nekog grafa je podgraf koji se sastoji od svih njegovih vrhova i nekih bridova tako da **postoji put između svaka dva vrha**. Kao i obična stabla, razapinjuća stabla su povezana i nemaju cikluse. MST je razapinjuće stablo čiji je zbroj težina bridova minimalan.

<img src="/img/algoritmi-nad-grafovima-1/mst1.png" alt="mst1" width="600"/>

Na slici je lijevo prikazan neki graf, a desno njegov MST. Sličnom logikom možemo konstruirati i maksimalno razapinjuće stablo (maksimalna suma težina), ali to u pravilu nije jako popularno.

:::noteprimijetite

Minimalno (maksimalno) razapinjuće stablo ne mora biti jedinstven graf.

:::

## Kruskalov algoritam

Kruskalov je algoritam jedan u nizu algoritama koji konstruiraju MST. Na početku ćemo u graf dodati samo vrhove, a potom ćemo dodavati bridove po redu od manjih prema većima. Algoritam dodaje brid u stablo ako dodavanjem tog brida ne nastaje ciklus. Kako bi jednostavno provjeravali koristit ćemo Union find strukturu.

Pogledajmo kako bi Kruskalov algoritam radio za graf sa prethodne slike. Na početku u stablu imamo samo vrhove i svaki čini zaseban skup. Bridove smo sortirali po težinama.

<img src="/img/algoritmi-nad-grafovima-1/mst2.png" alt="mst2" width="500"/>

Prvo dodajemo brid 5-6 te spajamo odgovarajuće skupove funkcijom unite (lijevo). Nakon toga dodajemo bridove 1-2, 3-6 i 1-5 na sličan način (desno).

<img src="/img/algoritmi-nad-grafovima-1/mst3.png" alt="mst3" width="600"/>

Nakon tih koraka u strukturi imamo 2 skupa: {1,2,3,5,6} i {4}. Sljedeći brid na popisu je 2-3, ali njega nećemo dodavati jer su 2 i 3 unutar iste komponente (dodavanjem bi nastao ciklus). Slično je i za brid 4-5. Na kraju dodamo brid 4-6 i gotovi smo.

<img src="/img/algoritmi-nad-grafovima-1/mst4.png" alt="mst4" width="300"/>

:::noteprimijetite

Kruskalov algoritam spada u pohlepne algoritme.

:::

### Zašto ovo radi?

Ovaj će algoritam uvijek u MST dodati najmanji brid, ali zamislimo da postoji situacija kada to nije rješenje. U našem bi primjeru to bilo kada bi postojalo bolje razapinjuće stablo koje ne sadržava brid 5-6. Međutim, ovo ne može biti rješenje zato što uvijek možemo maknuti jedan brid iz takvog grafa i zamijeniti ga s bridom 5-6 što sigurno smanjuje rješenje. Sličnim razmišljanjem možemo obrazložiti i dodavanje drugih bridova. Dakle, Kruskalov algoritam radi.

<img src="/img/algoritmi-nad-grafovima-1/mst5.png" alt="mst5" width="600"/>

### Implementacija

Za implementaciju koristimo Union find strukturu i njezine funkcije iz prošle lekcije. Bridove ćemo držati u listi `vector<tuple<int, int, int>>` u kojoj je svaki brid između a i b težine w tuple oblika (w, a, b). Lista je sortirana po težinama. MST će također biti u takvoj listi.

```cpp
vector<tuple<int, int, int>> mst;
for(auto &edge : edgeList) {
    int a, b;
    tie(ignore, a, b) = edge;

    if(!same(a, b)) {
        mst.push_back(edge);
        unite(a, b);
    }
}
```

:::noteprimijetite

Složenost ovog algoritma je $O(m \log m)$ zbog sortiranja, gdje je $m$ broj bridova.

:::
