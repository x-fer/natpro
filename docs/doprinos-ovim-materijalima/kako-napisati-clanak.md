---
title: Kako napisati članak?
---

Želite li objaviti članak u ovim materijalima, trebate napraviti _fork_ GitHub [repozitorija](https://github.com/x-fer/natpro) ovog projekta, napisati članak koristeći [Markdown](upute-za-markdown), te ga predati na pregled.

Da biste napravili _fork_ ovog repozitorija, trebate imati GitHub račun. Odite na stranicu repozitorija, te u gornjem desnom kutu pritisnite na gumb **Fork**.

!['Fork gumb'](../../static/img/fork-1.png)

Za sljedeći korak na računalu trebate imati instaliran git. Trebate _klonirati_ repozitorij na svoje računalo koristeći naredbu 

`git clone https://github.com/vaše-korisničko-ime/natpro.git`

u naredbenom retku (zamijenite dio vaše-korisničko-ime sa svojim korisničkim imenom), te u njemu možete početi pisati svoj novi članak u mapi `docs/ime-poglavlja`, gdje `ime-poglavlja` označava stvarno ime poglavlja za koje pišete članak, napisano malim slovima, bez dijakritičkih i interpunkcijskih znakova, s crticama umjesto razmaka.

Ime datoteke članka mora koliko-toliko odgovarati naslovu članka: umjesto razmaka treba koristiti crticu (-), umjesto slova čćđšž treba koristiti ccdsz, te ne koristiti interpunkcijske znakove. Na primjer, za članak s naslovom `Kako napisati članak?`, datoteka se treba zvati `kako-napisati-clanak.md`.

Svaki članak trebate započeti tako da kopirate sadržaj datoteke `sablona-clanak.md` u njega te uredite naslov i sadržaj.

```markdown
---
title: Naslov velikim slovom
---

Ovdje ide tekst
```

Nakon što završite s pisanjem, dodajte svoj članak u `sidebars.js` datoteku na pravo mjesto te ste spremni za zadnji korak.

Kad završite i s tim, _commitajte_ svoje promjene, _pushajte_ ih te odite na GitHub i pritisnite gumb _Compare & pull request_. Zatim ukratko opišite što ste napravili i pošaljite članak na uvid. Ubrzo ćete dobiti osvrt i eventualno ćemo vaš članak prihvatiti i dodati na stranicu.

Ako negdje zapnete u procesu, preporučam da pogledate `README.md` datoteku [ovog repozitorija](https://github.com/firstcontributions/first-contributions) u kojem se odlično objašnjava kako funkcionira doprinos projektima otvorenog koda.


