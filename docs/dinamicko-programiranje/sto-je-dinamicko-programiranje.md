---
title: Što je dinamika?
---

### Uvod

Prvo pogledajmo jedan zadatak. Zadana je matrica veličine $N*N$ gdje je $N <= 1000$ te su u polja upisani prirodni brojevi $x_{i,j} < 1e9$. Želimo naći put iz gornjeg lijevog polja do donjeg desnog polja, krećući se samo dolje i desno, čija je suma ćelija na putu najveća. 

Možemo primijetiti da je iz jednog polja moguće otići samo u dva druga polja pa bi netko mogao pomisliti da odlaskom u polje s većim brojem dolazimo do rješenja. Ova ideja mogla bi se nazvati pohlepnim pristupom, no ona nam neće dati točno rješenje, a dokaz ostavljamo čitatelju za vježbu(HINT: nađite protuprimjer). 

Sljedeće rješenje koje se prirodno nameće je isprobati sve puteve te uzeti onaj s najvećom vrijednošću. Možemo primijetiti da će put uvijek biti duljine $2 * (N - 1)$ jer sigurno moramo otići $N - 1$ puta desno i $N - 1$ puta dolje. Postoji $2 * (N - 1) \choose (N - 1)$ različitih puteva, dokaz ove tvrdnje također ostavljamo čitatelju za vježbu. Očito će, za $N = 1000$, prolazak svim putevima biti prespor za uobičajeno vremensko ograničenje od jedne sekunde.

### Što je dinamika

Primijetimo sljedeće: ako se nalazimo u ćeliji $X, Y$ matrice $M$ onda će maksimalna suma koju možemo dobiti do te ćelije biti $max(rješenje[X - 1, Y], rješenje[X, Y - 1]) + M[X, Y]$ što znači da ako znamo rezultate ćelije iznad i lijevo od trenutne ćelije onda jednostavno možemo izračunati rezultat za trenutnu ćeliju. 

Upravo je to ideja dinamičkog programiranja. Dinamičko programiranje karakterizira skup stanja i jedna(ili više) funkcija prijelaza. Uvijek je zadano početno stanje i pomoću prijelaza potrebno je odrediti vrijednost traženog stanja. Specifično za ovaj zadatak, postavimo da nam je stanje optimalna suma u nekoj ćeliji, početno stanje je ćelija $(0,0)$ čija je početna vrijednost broj zapisan u toj ćeliji, a stanje čiju vrijednost tražimo je $(N - 1, N - 1)$. Funkcija prijelaza je navedena gore.

### Složenost dinamike

Kod dinamičkog programiranje gotovo je uvijek potrebno posjetiti sva stanja. U svako stanje potrebno je doći iz nekog prethodnog stanja pomoću funkcije prijelaza te prema tome možemo zaključiti da je složenost takvog programa jednaka broju stanja pomnoženog sa složenošću prijelaza. Za naš zadatak složenost bi bila $O(N^2)$ jer postoji $N^2$ stanja, a složenost prijelaza je $O(1).$

### Rješenje

```cpp
int solve(int x, int y){
    //nalazimo se u početnom stanju
    if(x == 0 && y == 0) return M[x][y];
    //nalazimo se u gornje retku
    if(x == 0) return M[x][y] + solve(x, y - 1);
    //nalazimo se u prvom stupcu
    if(y == 0) return M[x][y] + solve(x - 1, y);
    //nalazimo se u općem polju matrice
    return max(solve(x - 1, y), solve(x, y - 1)) + M[x][y];
}

int main(){
    // unos podataka
    cout << solve(n - 1, n - 1);
    return 0;
}
```
Ovo rješenje je skica točnog rješenja, no ono nam može javiti dvije greške, prije nego nastavite čitati razmislite koje bi to greške mogle biti.

### Memoizacija

Jedna od grešaka u skici rješenja je to što više puta posjećujemo ista stanja i za njih više puta računamo njihovu vrijednost. Npr. kada iz zadnjeg stanja provjerimo stanje od polja iznad$(X - 1, Y)$ tada ćemo iz toga polja rekurzivno pozvati polje lijevo od njega$(X - 1, Y - 1)$, također kada iz zadnjeg stanja provjerimo stanje od polja lijevo$(X, Y - 1)$ iz tog polje ćemo također rekurzivno posjetiti polje iznad njega $(X - 1, Y - 1)$. Možemo primijetiti da smo dva puta pozvali izračun vrijednosti u polju $(X - 1, Y - 1)$. To je nepotrebno jer će svaki izračun dati isti rezultat, a osim toga što je nepotrebno također će izazvati **TLE**(razmislite zašto).

Za ovaj problem postoji vrlo jednostavno rješenje. Memoizacija.

Memoizacija je postupak pamćenja posjećenih stanja kako ih ne bi bespotrebno računali više puta. Za naš zadatak stvorit ćemo matricu koju ćemo popuniti sa $-1$ te će taj broj predstavljati neposjećeno stanje, a kad izračunamo neko stanje onda ćemo u matricu zapisati izračunatu vrijednost. Ako u toj matrici na nekom mjestu broj nije $-1$ tada znamo da smo to stanje već izračunali. Primjenom memoizacije naše rješenje izgleda ovako.

```cpp
//najveća moguća dimenzija matrice
const int MAXN = 1000;

int n;
int M[MAXN][MAXN];
int memo[MAXN][MAXN];

int solve(int x, int y){
    //ako na trenutnom mjestu postoji broj koji nije -1 tada je to stanje već posjećeno
    if(memo[x][y] != -1) return memo[x][y]
    //nalazimo se u početnom stanju
    if(x == 0 && y == 0) return M[x][y];
    //nalazimo se u gornje retku
    if(x == 0) return memo[x][y] = M[x][y] + solve(x, y - 1);
    //nalazimo se u prvom stupcu
    if(y == 0) return memo[x][y] = M[x][y] + solve(x - 1, y);
    //nalazimo se u općem polju matrice
    return memo[x][y] = max(solve(x - 1, y), solve(x, y - 1)) + M[x][y];
}

int main(){
    //popunjavamo memo sa -1
    memset(memo, -1, sizeof memo);
    cin >> n;
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            cin >> M[i][j];
    cout << solve(n - 1, n - 1);
    return 0;
}
```
Prikazano rješenje jako je blizu ispravnog rješenja, no i dalje postoji jedan detalj koji će nam stvarati probleme. Što ako se u svakom polju matrice nalazi broj $1e9$, tada će naše rješenje biti $1998 * 1e9$, a to je broj koji izlazi iz granica $int$-a što znači da u našem rješenju trebamo koristiti *long long int*. Time će naše rješenje biti točno.

### Digresija

Zadatke s dinamičkim programiranjem uglavnom je moguće riješiti rekurzivno i iterativno. Svaki pristup ima svoje prednosti i mane te jedino vježbom možete vidjeti kako vam je lakše i brže rješavati takve zadatke. Kod rekurzivnog rješavanja često je potrebno paziti na to da se funkcija ne zove više puta za isto stanje(nekada to nije moguće samo memoizacijom), no rekurzivni kodovi uglavnom budu kraći i lakše čitljiv. S druge strane kod iterativnog obilaska ponekad nije intuitivno kako obići sva stanja. Odabir načina pisanja stvar je osobne preferencije, a usporedbe radi napisat ćemo i iterativno rješenje zadatka iz Uvoda.

```cpp
const int MAXN = 1000;
int n;
int M[MAXN][MAXN];
long long int memo[MAXN][MAXN];

int main(){
    cin >> n;
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            cin >> M[i][j];
    for(int i = 0; i < n; i++){
        for(int j = 0; j < n; j++){
            if(i == 0 && j == 0) memo[i][j] = M[i][j];
            else if(i == 0) memo[i][j] = M[i][j] + memo[i][j - 1];
            else if(j == 0) memo[i][j] = M[i][j] + memo[i - 1][j];
            else memo[i][j] = M[i][j] + max(memo[i - 1][j], memo[i][j - 1]);
        }
    }
    cout << memo[n - 1][n - 1];
    return 0;
}
```