---
title: Upute za Markdown
---

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

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

![img](../static/img/logo.svg)

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

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Blok citati

> Blok citati su jako zgodni u emailovima za prikazivanje teksta odgovora.

Prekid citata.

> Ovo je jako dug citat koji će se svejedno uredno prikazati i kad prijeđe u novi redak. Nastavimo pisati da bismo bili sigurni da je dovoljno dug da se prebaci u novi redak na svim uređajima. E da, možete _dodati_ **Markdown** u blok citate.

---

## HTML

<dl>
  <dt>List definicija</dt>
  <dd>Je nešto što ljudi nekad koriste</dd>

  <dt>Markdown u HTML-u</dt>
  <dd>*Ne* radi baš **najbolje**. Koristite HTML <em>oznake</em>.</dd>
</dl>

---

## Prekidi redaka

Započet ćemo s ovim retkom.

Ovaj redak je odvojen od prošlog s dva prijelaza u novi red, pa će postati _odvojeni odlomak_.

Ovaj redak je također odvojeni odlomak, ali...
Ovaj redak je odvojen samo jednim prijelazom u novi red, pa će ostati u _istom odlomku_.

---

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
