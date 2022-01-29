---
title: Primjeri
---

# Zadaci za vježbu

### Zadatak: Years

Tekst zadatka: [Years](https://codeforces.com/problemset/problem/1424/G)

<details>
  <summary>
    Hint 1
  </summary>
  <div>
    Zamislite da u zadatku imate samo popis godina rođenja svih mogućih ljudi na tom planetu i pitanje je koliko je ljudi rođeno PRIJE neke godine? Da bismo mogli efikasno odgovarati na ovakve upite (koristeći binarnu pretragu), potrebno je prvo SORTIRATI dobiveni niz godina.
  </div>  
</details>

<details>
  <summary>
    Hint 2
  </summary>
  <div>
    Koje sve godine mogu biti rješenje? Ako malo razmislite, primijetit ćete da su jedino godine kada se netko rodio / umro moguća rješenja upita (broj mogućih rješenja 'odgovara' broju ljudi). Drugim riječima, ako je neka godina u kojoj nije bilo promjene broja stanovnika rješenje, onda je sigurno i prethodna godina rješenje, ali njoj dajemo prednost zbog uvjeta zadatka koji traži minimalnu godinu. 
  </div>  
</details>

<details>
  <summary>
    Hint 3
  </summary>
  <div>
    Iako nam je prirodno vezati godinu rođenja i godinu smrti uz pojedinu osobu, važno je primijetiti da u ovom zadatku ta dva podatka ne trebaju biti povezana i da ih možemo gledati neovisno.
  </div>  
</details>

<details>
  <summary>
    Rješenje
  </summary>
  <div>
    Jedan od pristupa je da pri unosu podataka skupimo sve godine koje su moguće rješenje zadatka i potom za svku provjeravamo koliko je ljudi tada bilo živo (pamtimo samo godinu s maksimalnim brojem i broj ljudi koji su živjeli te godine).
    Recimo da nas zanima koliko je ljudi bilo živo 1996. Taj podatak možemo odrediti ako od svih ljudi koji su se rodili prije 1996. oduzmemo sve one koji su umrli prije 1996. Prvi član u razlici dobivamo binarnom pretragom po godinama rođenja, a drugi pretragom po godinama smrti. Ukupna složenost algoritma je O(n logn)
  </div>  
</details>

### Zadatak: The Parade

Tekst zadatka: [The Parade](https://codeforces.com/problemset/problem/1250/J)

<details>
  <summary>
    Hint 1
  </summary>
  <div>
    Što ako odaberemo neku veličinu reda <b>r</b> i pitamo se možemo li napraviti <b>k redova veličine r</b>? U kojoj složenosti možemo izračunati taj podatak?
  </div>
</details>

<details>
  <summary>
    Hint 2
  </summary>
  <div>
    Prethodna se provjera može napraviti u linearnoj složenosti (O(n)). Neka su brojevi vojnika redom 7, 3 i 2. Pokušajmo napraviti redove veličine 3. Od prvih 7 vojnika visine 1 možemo napraviti dva reda veličine 3 (ostao je jedan vojnik). Tada tog jednog pokušamo ubaciti u idući red zajedno s vojnicima visine 2. Napravili smo red [1,2,2] i preostao je jedan vojnik visine 2. Sada spajamo tog preostalog vojnika s 2 vojnika visine 3 i dobili smo red [2,3,3].
  </div>
</details>

<details>
  <summary>
    Rješenje
  </summary>
  <div>
    Time limit je 2s pa dozvoljen broj operacija redom veličine odgovara 10^8. Budući da je u zadatku do 10^4 test-primjera, ostatak se koda također treba izvršavati u složenosti O(10^4). Uočite da postoji neka granična veličina reda, tj. maksimalna moguća s kojom možemo napraviti k redova. Ideja je da binary-searchamo tu veličinu reda (<b>r</b>) i za svaku moguću u linearnoj složenosti provjeravamo je li moguće složiti k redova. Ako nije, pretražujemo po nižim veličinama, a ako je, pretražujemo po višima. Konačno rješenje je onda r*k.
  </div>
</details>

### Ostali zadaci

-   [Sorted Adjacent Differences](https://codeforces.com/problemset/problem/1339/B)
-   [Worms](https://codeforces.com/problemset/problem/474/B)
