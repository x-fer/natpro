---
title: "Pisanje članka"
---

## Pisanje članaka

Svatko može doprinijeti ovim materijalima pisanjem novih ili prepravljanjem starih članaka.

Potrebno
- git klijent (upute su za git command-line interface)
- github account (opcionalno, samo za pull-request način)
- npm (node package manager) (opcionalno, samo ako želite vidjeti rezultat, ali preporučeno).

### Korak 1: preuzimanje repozitorija i pokretanje servera

Pozicionirajte se na mjesto gdje želite klonirati repozitorij.
Sa naredbom `git clone https://github.com/x-fer/natpro`
klonirajte repozitorij.

Ako želite uživo vidjeti rezultate vaših modifikacije, pokrenite
`npm install` , a zatim `npm start`.
Zadnja komanda pokrenut će server koji prati promjene i automatski ažurira stranicu.
Stranicu možete vidjeti na `localhost:3000`.

### Korak 2: doprinos

Ugasite server ako je upaljen.
Napravite novu granu i pozicionirajte se na nju sa naredbom `git checkout -b ime-prezime-tema`,
npr. `petar-mihalj-pohlepni-algoritmi`.
Sad ponovo možete upaliti server.

Jedini folderi koje biste trebali mijenjati su `static` i `docs`, uz file `sidebars.js`.
Namjena svih trebala bi biti jasna, a primjere markdown sintakse možete vidjeti u `docs/doprinos-ovim-materijalima/upute-za-markdown`.

Dok radite na materijalima korisno je dijelove doprinosa odvajati u različite commit-ove,
ali strukturu tih prepuštamo autoru, dok god krajnji rezultat bude u commitu koji je na inicijalno napravljenom branchu.

### Korak 3: stvaranje commita

Nakon završetka doprinosa autor bi trebao commitati sve promjene koje ima.
Naredba `git status` trebala bi pokazati samo datoteke koje autor mijenja.
Autor zatim treba pripremiti commit dodavanjem svih promijenjenih datoteka koje su bitne za sadržaj,
uzastopnom primjenom naredbi `git add <file>` ili `git add .` (druga samo ako status pokazuje točno ono što treba dodati).
Na kraju treba završiti commit naredbom `git commit -m "Poruka koja opisuje što je napravljeno"`.
Poruka može biti i deskriptivnija.

### Korak 4: predaja

Izaberite jednu od ponuđenih metoda predaje članka.

#### Korak 4a (nije potreban github account):

Prva metoda slanja rezultata svodi se na slanje *.patch* datoteka na oba maila:

- `ivan.vlahov@gmail.com`
- `git@pmihalj.com`

Patch datoteke možete generirati naredbom `git format-patch $(git merge-base --fork-point main) --stdout > ime-prezime-tema.patch`.
Ta naredba generirat će `.patch` datoteku koja sadrži sve promjene od trenutka kad se trenutni branch odvojio od `main` brancha.
Datoteku je potrebno poslati na mailove koji su već navedeni.

#### Korak 4b (potreban github account):

Druga metoda slanja svodi se na upload novih/uređenih datoteka na `pastebin.com` i otvaranje github issue-a.

Odite na github, otvorite issue na `x-fer/natpro` repozitoriju, opišite što ste napravili i pošaljite linkove na datoteke.
Urednici će promjene razmotriti i eventualno ugraditi u stranicu.

#### Korak 4c (potreban github account):

Treća metoda slanja svodi se na forkanje repozitorija i pushanje podataka na svoj repozitorij, 
a zatim otvaranje pull requesta na `x-fer/natpro` repozitoriju.

U github sučelju u desnom gornjem kutu postoji `fork` gumb. Njim kreirate kopiju
natpro repozitorija na vašem github računu.

Nakon što to napravite, trebate poslati branch koji ste napravili lokalno,
upravo na taj repozitorij. Za početak promijenite referentni remote na vaš remote.

Uklonite postojeći:
`git remote rm origin`

a) Ako koristite username i password za autorizaciju:
`git remote add origin https://github.com/GITHUB_ACCOUNT/natpro`

b) Ako koristite ssh ključ:
`git remote add origin git@github.com:GITHUB_ACCOUNT/natpro`

Pošaljite branch na svoj remote.
`git branch --set-upstream-to origin/ime-prezime-tema`
`git push`

Napravite pull request kojim targetirate taj branch na remoteu.
(ovo treba malo dopisati)

### Hvala!

Vaš doprinos će se razmotriti, a ako je dobar, uključit će se u materijale!


