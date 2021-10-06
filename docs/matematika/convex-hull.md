---
title: Convex hull
---

### Problem

Zadano je $N$ točaka u ravnini. Treba pronaći njihovu "konveksnu ljusku", engl. _convex hull_, tj. najmanji konveksni poligon koji obuhvaća sve točke.

Poligon je konveksan ako za svake dvije točke koje sadržava, sadržava i dužinu koja ih povezuje. Možemo ga karakterizirati i kao poligon kojem su svi kutovi manji od 180°. Traženje najmanjeg takvog povlači da  će mu vrhovi biti neke od zadanih točaka, pa je problem upravo određivanje o kojim točkama se radi. Ako zamislimo da oko cijelog skupa rastegnemo gumicu i pustimo je da se stisne, njezin krajnji oblik ocrtavat  će "ljusku" koju tražimo:

![analogija s gumicom](https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/ConvexHull.svg/330px-ConvexHull.svg.png)

### Rješenje

Algoritam opisan ovdje varijanta je <a href="https://en.wikipedia.org/wiki/Graham_scan">Grahamovog skena</a>, poznata kao Andrewov <a href="https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Convex_hull/Monotone_chain">algoritam "monotonog lanca"</a>.

Prvi korak je sortirati točke uzlazno po x-osi (ako je x-koordinata jednaka, uzlazno po y-osi) i tako odrediti krajnju lijevu točku, $A$, i krajnju desnu, $B$. Naravno, $A$ i $B$ moraju biti dio ljuske jer su po x-osi najudaljenije, pa ne mogu biti obuhvaćene stranicama poligona koje spajaju neke druge dvije točke. Nacrtajmo pravac kroz $A$ i $B$. Sada točke možemo podijeliti u dva skupa s obzirom na stranu pravca na kojoj se nalaze: $S_1$ koji sadrži točke "iznad" pravca, i $S_2$ koji sadrži točke "ispod" pravca. Ljusku ćemo konstruirati iz dvaju dijelova: gornjeg, za koji ćemo točke izabrati iz $S_1$, i donjeg, s točkama iz $S_2$.

Dakle, daljnji tok algoritma svodi se na dvije važne provjere: određivanje s koje strane pravca $AB$ se nalazi neka točka, i određivanje točaka koje će činiti vrhove konveksne ljuske.

#### Provjera položaja točke

Da bismo odredili s koje strane $AB$ se nalazi neka točka $T$, tj. pripada li skupu $S_1$ ili $S_2$, potrebne su nam točke sortirane po x-koordinati, i pojam orijentacije uveden u ranijem poglavlju. Točke $A$ i $B$ smatrat ćemo elementima obiju skupova. Redom za svaku drugu točku $T$ provjeravamo je li orijentacija kuta izmedu pravaca $AT$ i $TB$ _clockwise_, te ju smatramo elementom $S_1$ ako jest, odnosno $S_2$ ako nije (za točke koje su točno na pravcu svejedno je kojem skupu pripadaju). Možete se sami uvjeriti da _clockwise_ orijentacija odgovara položaju iznad $AB$, a _counterclockwise_ ispod.

#### Konstrukcija konveksne ljuske

Konstruirajmo najprije gornji dio, počevši dodavanjem točke $A$ u ljusku. Prolazimo redom elementima $S_1$ sortiranima po x-koordinati. Ako su u ljusci trenutno manje od dvije točke, dodamo trenutnu točku $T$. Ako su u ljusci barem dvije točke, provjeravamo kut između pravca kojeg čine predzadnja i zadnja dodana točka ljuske, i pravca kojeg čine zadnja točka ljuske i $T$. Ako orijentacija kuta nije _clockwise_, uklonimo zadnju točku iz ljuske, i dodamo trenutnu.

Dok smo iznad pravca $AB$, skretanje u suprotnom smjeru od kazaljke sata znači da će poligon sadržavati izbočeni kut, što je protivno konveksnosti, pa smo morali neku točku ukloniti. Ljuska sa samo predzadnjom i trenutnom točkom kao vrhovima obuhvaćat će i zadnju točku, jer orijentacija osigurava da je ona ispod ostale dvije, pa smo ju mogli izbaciti.

Analogno konstruiramo i donji dio, ali provjeravamo da orijentacija odgovarajućeg kuta nije _counterclockwise_. Konačna konveksna ljuska unija je gornjeg i donjeg dijela.

### Implementacija i analiza složenosti

Sljedeći isječak koda koristi strukturu _tocka_ te funkcije _cw_ i _ccw_ uvedene u ranijem poglavlju.

```cpp
bool cmp(tocka a, tocka b) {
    if(a.x == b.x) return a.y < b.y;
    return a.x < b.x;
}

void convex_hull(vector<tocka>& tocke) {
    if (tocke.size() == 1)
        return;

    sort(tocke.begin(), tocke.end(), &cmp);
    tocka A = tocke[0], B = tocke.back();
    vector<tocka> gore, dolje; /* gornji i donji dio konveksne ljuske */
    gore.push_back(A);
    dolje.push_back(A);
    
    for (int i = 1; i < tocke.size(); i++) {
        /* ako je trenutna tocka B, ili je iznad pravca AB */
        if (i == tocke.size() - 1 || cw(A, tocke[i], B)) {
            /* !cw umjesto ccw: uključujemo i slučaj kuta od 180° (ako je u nekom 'vrhu' kut od 180°, ta je točka element stranice, a ne vrh) */
            /* dok u ljusci postoje bar 2 točke, i vrijedi da trenutna točka ne skrece clockwise */
            while (gore.size() >= 2 && !cw(gore[gore.size()-2], gore[gore.size()-1], tocke[i]))
                gore.pop_back();
            gore.push_back(tocke[i]);
        }
        if (i == tocke.size() - 1 || ccw(A, tocke[i], B)) {
            while(dolje.size() >= 2 && !ccw(dolje[dolje.size()-2], dolje[dolje.size()-1], tocke[i]))
                dolje.pop_back();
            dolje.push_back(tocke[i]);
        }
    }
  
    /* u ovoj implementaciji, vrhovi ljuske spremljeni su u isti vektor koji je čuvao početne točke, koje su izgubljene */
    tocke.clear();
    for (int i = 0; i < gore.size(); i++)
        tocke.push_back(gore[i]);
    for (int i = dolje.size() - 2; i > 0; i--) /* ne prepisujemo krajnje točke iz 'dolje' jer su A i B vec prepisane iz 'gore' */
        tocke.push_back(dolje[i]);
}
```

U dijelu konstrukcije ljuske nakon sortiranja, svaka se točka može u operacijama javiti samo dvaput. Na primjer, promotrimo skup $S_1$. Točkama prolazimo slijeva nadesno, pa na pojedinu točku prvi put nailazimo kada ju dodajemo u ljusku, a algoritam nastavlja dalje. Na istu točku se možemo vratiti samo kada utvrdimo da sa sljedećom zatvara kut u obrnutom smjeru od kazaljke na satu, a operacija u kojoj sudjeluje u tom slučaju je njeno uklanjanje, pa se ne može pojaviti opet. Slično vrijedi i za $S_2$, dakle, _for_ petlja ima složenost $O(n)$.

Funkcija _sort_, s druge strane, ima složenost $O(n\log(n))$ i dominira ukupnim vremenom izvršavanja. Složenost cijelog algoritma zato je jednaka $O(n\log(n))$.
