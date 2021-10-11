---
title: Najbliži par točaka
---

### Problem
<img src="https://thealgoristsblob.blob.core.windows.net/thealgoristsimages/235597E5-D92A-46CF-84F6-CE4C016036D9.jpeg" width=240px>

Zadano je $N$ točaka u ravnini. Treba pronaći udaljenost najbližeg para među njima.

Ovo, naravno, možemo napraviti računajući udaljenost za svaki par točaka u vremenu $O(N^2)$. Ispostavlja se da za male $N$ to može biti optimalan pristup, ali za veće $N$ postaje prespor. Dolje opisano, bolje rješenje koristi _sweep line_ algoritam i ima složenost $O({N}\log{N})$ (a sličnu ideju možemo primijeniti i na <a href="https://www.cs.mcgill.ca/~cs251/ClosestPair/ClosestPairDQ.html">_divide-and-conquer_ algoritam</a> iste složenosti, ali malo kompliciranije implementacije).

### Rješenje

Zamislimo vertikalni pravac koji prolazi ravninom slijeva nadesno, drugim riječima, sortirajmo točke po x-koordinati. Pamtimo vrijednost $d$ - minimalnu udaljenost nekog para među dosad pregledanim točkama. Za svaku točku na koju pravac naiđe, provjeravat ćemo čini li ona, s nekom od točaka koje smo već prošli, najbliži par dosad.

Neka je trenutna točka $(x,y)$. Ako njoj slijeva postoji točka udaljena za manje od $d$, x-koordinata te točke mora biti u intervalu $[x-d,x]$, a y-koordinata u $[y-d,y+d]$. Stoga je dovoljno razmotriti samo točke u skupu $[x-d,x] \times [y-d,y+d]$, n. Efikasnost algoritma zasniva se na činjenici da ih taj skup uvijek sadrži $O(1)$.

#### Zašto je aktivnih točaka $O(1)$?

Kako znamo da je u $[x-d,x] \times [y-d,y+d]$ uvijek samo $O(1)$ već posjećenih točaka? Taj skup je pravokutnik sa stranicama duljina $d$ i $2d$. Zamislimo da smo ga podijelili na 8 regija (podjelom kraće stranice na 2, a dulje na 4 jednaka dijela), 8 kvadrata stranica duljine $\frac{d}{2}$. Svaki kvadrat može sadržavati najviše jednu točku, jer kad bi sadržavao barem dvije, njihova udaljenost bila bi maksimalno $\frac{d}{\sqrt{2}}$ (dijagonala kvadrata), što je manje od $d$, po pretpostavci dosad najmanje udaljenosti nekog para. To je kontradikcija, pa se u pravokutniku nalazi najviše 8 aktivnih točaka (zapravo i manje, no dovoljno je tvrdnju pokazati za 8).

#### Dodavanje i brisanje aktivnih točaka

Za brzinu algoritma ključno je da se operacije ubacivanja i izbacivanja točaka u skup aktivnih izvršavaju efikasno. To možemo postići, na primjer, pamćenjem sortirane liste (po y-koordinati) aktivnih točaka, koje dodajemo i brišemo koristeći binarnu pretragu. Za svaku točku na koju naiđemo _sweep_-om trebamo ažurirati aktivne: prolazimo listom dotad aktivnih točaka i brišemo ih slijeva sve dok se po x-koordinati razlikuju od trenutne za više od $d$. Trenutnu točku u aktivne ćemo dodati tek na kraju, nakon provjere udaljenosti s ostalima.

Zašto sortiramo po y-koordinati? Zbog načina na koji pamtimo skup aktivnih, sve točke u njemu imat će x-koordinatu manje od $d$ udaljenu od trenutne točke, pa ćemo kasnije, tijekom mjerenja udaljenosti, birati samo točke koje zadovoljavaju analogan uvjet za y-koordinatu. Po njoj sortiramo skup da bi takve točke bile uzastopne.

U C++-u je implementacija olakšana postojanjem tipa podatka _set_ implementiranog kao _binary search tree_, koji radi manje-više istu stvar; operacije dodavanja i brisanja odvijaju se u logaritamskom vremenu i čuvaju sortiranost.

### Implementacija i analiza složenosti

Sljedeći isječak koda koristi strukturu tocka uvedenu u ranijem poglavlju. Budući da koristimo set _struct_-ova, potrebno je definirati operator "<" za njihovo uspoređivanje kako bi se mogle držati sortiranima (po y-koordinati) u setu.

```cpp
bool operator<(const tocka& t1, const tocka& t2){
  if(t1.y==t2.y) return t1.x<t2.x;
  return t1.y<t2.y;
}

tocka t[MAX];

int comp(tocka t1, tocka t2)
{ 
    return t1.x<t2.x; 
}

double najblizi_par(tocka t[],int n)
{
        sort(t,t+n,comp);
        double d=INF;
        set<tocka> aktivne;
        aktivne.insert(t[0]);
        int lijevo = 0;

        for (int i=1;i<n;++i)
        {
            /* uklanjamo točke kojima je x-koordinata predaleko */
            while (lijevo<i && t[i].x-t[lijevo].x > d) 
                aktivne.erase(t[lijevo++]); 

            /* početak iteracije, najljevija i najdonja moguća točka, lower bound za dio aktivnih kojim iteriramo */
            tocka p;
            p.x=t[i].x-d;
            p.y=t[i].y-d;
            /* kraj iteracije: kraj seta ili su daljnje y-koordinate predaleko */
            bool kraj = it==aktivne.end() || it->y > t[i].y+d;
            set<tocka>::iterator it;
            for(it=aktivne.lower_bound(p); !kraj; ++it)
                d = min(d, sqrt(pow(t[i].y - it->y, 2.0)+pow(t[i].x - it->x, 2.0)));

            aktivne.insert(t[i]);
        }
        return d;
}
```

Poznato je da funkcija _sort_ ima vremensku složenost $O({N}\log{N})$.

Svaka će točka točno jednom biti ubačena i izbačena iz _aktivnih_, pa _while_ petlja u cijelom programu izvršava $N$ izbacivanja. Funkcija _erase_ ima složenost $O(\log{N})$, pa je ukupna složenost ovog dijela $O({N}\log{N})$.

U unutarnjoj _for_ petlji, pronalaženje _lower_bound_-a također traje $O(\log{N})$, a petlja prolazi kroz $O(1)$ točaka. Nju vanjska petlja poziva $N$ puta, pa je složenost ovog dijela opet $O({N}\log{N})$.

I funkcija _insert_ ima složenost $O(\log{N})$, a poziva se na svakoj od $N$ točaka, što daje $O({N}\log{N})$.

Ukupna vremenska složenost je $O({N}\log{N})$.
