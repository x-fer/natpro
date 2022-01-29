---
title: Upute za Markdown
---

import Spoiler from '@site/src/react_components/spoiler.js';

Možete pisati članke koristeći [GitHub-flavored Markdown sintaksu](https://github.github.com/gfm/)


## Markdown sintaksa

Ovdje možete pronaći primjere markdown stilova s kojima možete uljepšati svoje članke.

## Naslovi

# H1 - Napišite najbolji članak

## H2 - Napišite najbolji članak

### H3 - Napišite najbolji članak

#### H4 - Napišite najbolji članak

##### H5 - Napišite najbolji članak

###### H6 - Napišite najbolji članak

---

## Naglašavanje

Naglašavanje, ili italik, radite koristeći *zvjezdice* ili _podvlake_.

Jako naglašavanje, ili bold, radite koristeći **dvije zvjezdice** ili __dvije podvlake__.

Mješovito naglašavanje radite koristeći **zvjezdice i _podvlake_**.

Precrtani tekst radite koristeći dvije tilde. ~~Evo ovako.~~

---

## Liste

1. Prva stavka numerirane liste
1. Još jedna stavka
   - Nenumerirana podlista.
1. Nije bitno koji broj navedete, glavno je da je broj
   1. Numerirana podlista
1. Još jedna stavka.

* Nenumerirane liste mogu koristiti zvjezdice

- ili crtice

+ ili pluseve.

---

## Veze

[Ovo je veza u jednom redu](https://www.google.com/)

[Ovo je veza u jednom redu s naslovom](https://www.google.com/ "Naslovnica Googlea")

[Ovo je veza s referencom][neki tekst kojim označavate link]

[Možete koristiti i brojeve za linkove s referencom][1]

Ili ostaviti prve zagrade praznima i koristiti [sami tekst veze].

URL-ovi i URL-ovi u šiljastim zagradama će se automatski pretvoriti u linkove. http://www.example.com/ ili <http://www.example.com/> a nekad i example.com (ne na GitHubu, na primjer).

Ovaj tekst služi samo da pokažemo da nakon njega mogu slijediti veze referenci.

[neki tekst kojim označavate link]: https://www.mozilla.org/
[1]: http://slashdot.org/
[sami tekst veze]: http://www.reddit.com/

---

## Slike

Prikaz slika (prijeđite mišem preko slike za alt-tekst):

Veza u jednom redu: ![alternativni tekst](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo tekst 1')

Veza s referencom: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo tekst 2'

Možete koristiti i veze na mape u ovom projektu (slike spremajte u mapu `static/img`).

![img](../../static/img/logo.svg)

---

## Programski kod

```cpp
#include <iostream>

using namespace std;

int main(void){
  cout << "Označavanje C++ sintakse.";

  return 0;
}
```

```python
s = "Označavanje Python sintakse"
print(s)
```

```
Nije označen jezik, pa nema ni označavanja sintakse.
Možemo dodati <b>oznaku</b>.
```

```js {2}
function naglasiMe() {
  console.log('Možete i posebno naglasiti neke retke!');
}
```

---

## Tablice

Možete koristiti dvotočke da biste namjestili stupce.

| Tablice       |      Su         |  Kul   |
| ------------- | :-----------:   | -----: |
| stupac 3 je   | pomaknut udesno | $1600  |
| stupac 2 je   |   centriran     |   $12  |
| zebre su      |     super       |    $1  |

Barem 3 crtice moraju dijeliti naslov od ostatka tablice. Vanjske uspravne crte (|) nisu obvezne, te nije potrebno uredno posložiti sve retke i stupce u Markdown obliku. Možete koristiti i Markdown u ćelijama tablica.

| Markdown | se        |    svejedno   |
| -------- | --------- | ------------- |
| _skroz_  | `dobro`   | **prikazuje** |
| 1        | 2         | 3             |

---

## Blok citati

> Blok citati su jako zgodni u emailovima za prikazivanje teksta odgovora.

Prekid citata.

> Ovo je jako dug citat koji će se svejedno uredno prikazati i kad prijeđe u novi redak. Nastavimo pisati da bismo bili sigurni da je dovoljno dug da se prebaci u novi redak na svim uređajima. E da, možete _dodati_ **Markdown** u blok citate.

---

## HTML

<dl>
  <dt>Lista definicija</dt>
  <dd>Je nešto što ljudi nekad koriste</dd>

  <dt>Markdown u HTML-u</dt>
  <dd>*Ne* radi baš **najbolje**. Koristite HTML <em>oznake</em>.</dd>
</dl>

---

## Matematički izrazi

Matematičke izraze upisujemo koristeći Latex. Na ovoj [stranici](https://www.overleaf.com/learn/latex/mathematical_expressions) možete pronaći znakove koji će vam možda zatrebati pri pisanju matematičkih izraza.

Da biste započeli matematički izraz u istoj liniji, koristi se znak `$`, pa izraz, pa opet `$`, npr. `$F_{n} = F_{n-1} + F_{n-2}$`, što će prikazati izraz $F_{n} = F_{n-1} + F_{n-2}$. Da biste započeli blok izraz, koristite dva znaka `$` na početku i na kraju bloka, npr.:

```
$$
a^{2} + b^{2} = c^{2}
$$
```

A prikazat će se:

$$
a^{2} + b^{2} = c^{2}
$$

---

## Prekidi redaka

Započet ćemo s ovim retkom.

Ovaj redak je odvojen od prošlog s dva prijelaza u novi red, pa će postati _odvojeni odlomak_.

Ovaj redak je također odvojeni odlomak, ali...
Ovaj redak je odvojen samo jednim prijelazom u novi red, pa će ostati u _istom odlomku_.

---

## Skriveni tekst

Želite li napisati tekst koji neće odmah biti vidljiv čitatelju, koristite React komponentu Spoiler: 

```
<Spoiler text='ovdje upisite tekst'/>
```

što će se prikazati ovako: <Spoiler text='ovdje upisite tekst'/> - klikom na sivi pravokutnik otkrivate skriveni tekst, ponovnim klikom ga skrivate.

Želite li prikazati veći komad teksta, preporučujemo korištenje HTML oznake *details*:

```
<details>
  <summary>
    Ovo je naslov skrivenog teksta.
  </summary>
  <div>
    A ovo je skriveni tekst.
  </div>  
</details>
```

<details>
  <summary>
    Ovo je naslov skrivenog teksta.
  </summary>
  <div>
    A ovo je skriveni dio gdje možete ubaciti puno više teksta. Nastavit ću s tekstom kako bi se na svim ekranima prikazao u barem dva retka. Nažalost, matematički izrazi trenutno ne rade unutar HTML-a, pokušat ćemo to popraviti uskoro.
  </div>  
</details>


## Napomene

:::noteprimijetite

Ova napomena vam okreće pozornost na nešto.

:::

:::tipsavjet

Ova napomena vam daje savjet.

:::

:::importantbitno

Ova napomena ukazuje na nešto bitno.

:::

:::cautionoprez

Ova napomena vam govori da budete oprezni.

:::

:::warningupozorenje

Ova napomena vas upozorava na nešto.

:::
