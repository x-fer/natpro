---
title: Osnove geometrije
---

### Implementacija točke

Točku u 2D možemo implementirati kao strukturu koja pamti koordinate, tako da _tip_podatka_ zamijenimo odgovarajućim tipom, najčešće _int_, _long long_ ili _double_. Svaki isječak koda koji slijedi možemo prilagoditi i za 3D slučaj.
```cpp
struct tocka {
  tip_podatka x, y;
};
```
Možemo je doživljavati kao uređeni par koordinata, ali i kao vektor s početkom u ishodištu i krajem u $(x,y)$, pa pojmove vektora i točke možemo poistovjećivati. Sljedeći operatori, na primjer, baziraju se na vizualizaciji točke kao vektora:
```cpp
struct tocka {
  tip_podatka x, y;
  
  tocka& operator+=(const tocka &t) {
        x += t.x;
        y += t.y;
        return *this;
    }
  tocka operator+(const tocka &t) const {
        tocka rez = *this;
        rez += t;
        return rez;
    }
  tocka& operator*=(tip_podatka t) {
        x *= t;
        y *= t;
        return *this;
    }
  tocka operator*(tip_podatka t) const {
        tocka rez = *this;
        rez *= t;
        return rez;
    }  
  /* slično za oduzimanje i dijeljenje */
};
tocka operator*(tip_podatka a, tocka b) {
    return b * a;
}
```
### Skalarni produkt

Skalarni produkt dvaju vektora može se definirati na dva ekvivalentna načina.
Geometrijski, on je duljina projekcije jednog vektora na drugi, pa iznosi $\overrightarrow{v_1} \cdot \overrightarrow{v_2} =|\overrightarrow{v_1}| |\overrightarrow{v_2}| \cos{\theta}$, gdje je $\theta$ mjera kuta između njih.
Algebarski, on je zbroj umnožaka odgovarajućih koordinata. Uz zapis $\overrightarrow{v_1} = (x_1, y_1)$ i $\overrightarrow{v_2} = (x_2, y_2)$, iznosi $\overrightarrow{v_1} \cdot \overrightarrow{v_2} = x_1 x_2 + y_1 y_2$ (s dodatnom z-koordinatom u 3D slučaju).

 ```cpp
 tip_podatka skalarni_produkt(tocka a, tocka b) {
    return a.x * b.x + a.y * b.y;
}
```

### Vektorski produkt

Vektorski produkt definiramo samo za 3D vektore, i također ima više interpretacija. Geometrijski, vektorski produkt vektora $\overrightarrow{v_1}$ i $\overrightarrow{v_2}$ novi je vektor koji je po <a href="https://hr.wikipedia.org/wiki/Pravilo_desne_ruke">smjeru</a> okomit na oba faktora, a po iznosu površina paralelograma kojeg $\overrightarrow{v_1}$ i $\overrightarrow{v_2}$ razapinju ($|\overrightarrow{v_1}| |\overrightarrow{v_2}| \sin{\theta}$). Algebarski se može dobiti kao sljedeća determinanta:

$\overrightarrow{v_1} \times \overrightarrow{v_2} = \begin{vmatrix} \overrightarrow{e_1} & \overrightarrow{e_2} & \overrightarrow{e_3} \\ x_1 & y_1 & z_1 \\ x_2 & y_2 & z_2 \end{vmatrix}$

gdje je $\overrightarrow{e_1} = (1,0,0)$, $\overrightarrow{e_2} = (0,1,0)$ a $\overrightarrow{e_3} = (0,0,1)$. Raspisan izgleda ovako:

$\overrightarrow{v_1} \times \overrightarrow{v_2} = (y_1 z_2 -z_1 y_2) \overrightarrow{e_1} +(z_1 x_2 − x_1 z_2) \overrightarrow{e_2} + (x_1 y_2 − y_1 x_2) \overrightarrow{e_3}$.

```cpp
struct tocka {
  tip_podatka x, y, z;
  }
tocka vektorski_produkt(tocka a, tocka b) {
  tocka rez;
  rez.x = a.y * b.z - a.z * b.y;
  rez.y = a.z * b.x - a.x * b.z;
  rez.z = a.x * b.y - a.y * b.x;
  return rez;
}
```
Zanimljiva primjena vektorskog produkta je u računanju volumena paralelepipeda. Ako su njegove stranice vektori $\overrightarrow{a}$, $\overrightarrow{b}$ i $\overrightarrow{c}$, volumen možemo dobiti kao $|\overrightarrow{a} \cdot \left( \overrightarrow{b} \times \overrightarrow{c} \right) |$.

#### Pseudoskalarni produkt

Nešto slično vektorskom produktu možemo implementirati i u 2D ravnini: površinu paralelograma kojeg razapinju $\overrightarrow{a}$ i $\overrightarrow{b}$ možemo dobiti kao $|\overrightarrow{e_3} \cdot \left( \overrightarrow{a} \times \overrightarrow{b} \right) | = |x_1 y_2−y_1 x_2|$. Tako i definiramo pseudoskalarni produkt:

```cpp
tip_podatka pseudoskalarni(tocka a, tocka b) {
    return a.x * b.y - a.y * b.x;
}
```

#### Orijentacija kuta

Bitna primjena ovog produkta je u računanju orijentacije kuta između dvaju vektora. Može se pokazati da, ako kut između $\overrightarrow{a}$ i $\overrightarrow{b}$ opisujemo u smjeru kazaljke na satu (_clockwise_), njihov pseudoskalarni produkt bit će pozitivan, a inače (u _counterclockwise_ smjeru) negativan. Kut može biti zadan i točkama; ako su dane tri točke koje određuju kut ($P_1$ na jednom kraku, sjecište $P_2$, $P_3$ na drugom), orijentaciju kuta možemo provjeriti sljedećim funkcijama:
```cpp
bool clockwise(tocka p1, tocka p2, tocka p3) {
    return pseudoskalarni(p2 - p1, p3 - p2) < 0;
}
bool counterclockwise(tocka p1, tocka p2, tocka p3) {
    return pseudoskalarni(p2 - p1, p3 - p2) > 0;
}
```
