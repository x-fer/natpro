"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4983],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>l});var i=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,i)}return o}function t(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,i,n=function(e,a){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var v=i.createContext({}),p=function(e){var a=i.useContext(v),o=a;return e&&(o="function"==typeof e?e(a):t(t({},a),e)),o},u=function(e){var a=p(e.components);return i.createElement(v.Provider,{value:a},e.children)},j="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},m=i.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,v=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),j=p(o),m=n,l=j["".concat(v,".").concat(m)]||j[m]||d[m]||r;return o?i.createElement(l,t(t({ref:a},u),{},{components:o})):i.createElement(l,t({ref:a},u))}));function l(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,t=new Array(r);t[0]=m;var s={};for(var v in a)hasOwnProperty.call(a,v)&&(s[v]=a[v]);s.originalType=e,s[j]="string"==typeof e?e:n,t[1]=s;for(var p=2;p<r;p++)t[p]=o[p];return i.createElement.apply(null,t)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},903:(e,a,o)=>{o.d(a,{Z:()=>n});var i=o(7294);const n=e=>{let{authorName:a,githubUsername:o}=e;return i.createElement("div",{className:"author"},"Autor: ",i.createElement("a",{target:"_blank",href:"https://github.com/"+o},a))}},5884:(e,a,o)=>{o.d(a,{Z:()=>r});var i=o(7294);const{useState:n}=i,r=e=>{let{text:a}=e;const[o,r]=n(!1);return i.createElement("span",{onClick:()=>r(!o),className:"react-spoiler-"+(o?"shown":"hidden")},a)}},71:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>t,metadata:()=>v,toc:()=>u});var i=o(7462),n=(o(7294),o(3905)),r=o(903);o(5884);const t={title:"Pretra\u017eivanje grafova"},s=void 0,v={unversionedId:"algoritmi-nad-grafovima-1/pretrazivanje-grafova",id:"algoritmi-nad-grafovima-1/pretrazivanje-grafova",title:"Pretra\u017eivanje grafova",description:"Ve\u0107ina algoritama nad grafovima koje \u0107ete koristiti za natjecateljsko programiranje temelje se na nekakvom obilasku svih \u010dvorova grafa kako bi se iz tog obilaska mogli izvu\u0107i nekakvi zaklju\u010dci. Upravo iz tog razloga bitno je razumijeti pretra\u017eivanje u dubinu - depth first search, i pretra\u017eivanje u \u0161irinu - breadth first search. Razumijevanjem tih metoda pretra\u017eivanja i njihovih karakteristika mo\u0107i \u0107ete ih koristiti za jako \u0161iroku paletu problema i po potrebi ih adaptirati za specifi\u010dne probleme.",source:"@site/docs/algoritmi-nad-grafovima-1/pretrazivanje-grafova.md",sourceDirName:"algoritmi-nad-grafovima-1",slug:"/algoritmi-nad-grafovima-1/pretrazivanje-grafova",permalink:"/docs/algoritmi-nad-grafovima-1/pretrazivanje-grafova",draft:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/algoritmi-nad-grafovima-1/pretrazivanje-grafova.md",tags:[],version:"current",frontMatter:{title:"Pretra\u017eivanje grafova"},sidebar:"materijaliSidebar",previous:{title:"Zapisi grafova",permalink:"/docs/algoritmi-nad-grafovima-1/zapisi-grafova"},next:{title:"Najkra\u0107i putovi",permalink:"/docs/algoritmi-nad-grafovima-1/najkraci-putovi"}},p={},u=[{value:"Depth First Search",id:"depth-first-search",level:3},{value:"Bitna svojstva i varijacije DFS-a",id:"bitna-svojstva-i-varijacije-dfs-a",level:4},{value:"Breadth First Search",id:"breadth-first-search",level:3},{value:"Bitna svojstva i varijacije BFS-a",id:"bitna-svojstva-i-varijacije-bfs-a",level:4}],j={toc:u},d="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(d,(0,i.Z)({},j,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(r.Z,{authorName:"Ivan Vlahov",githubUsername:"vlahovivan",mdxType:"Author"}),(0,n.kt)("p",null,"Ve\u0107ina algoritama nad grafovima koje \u0107ete koristiti za natjecateljsko programiranje temelje se na nekakvom obilasku svih \u010dvorova grafa kako bi se iz tog obilaska mogli izvu\u0107i nekakvi zaklju\u010dci. Upravo iz tog razloga bitno je razumijeti pretra\u017eivanje u dubinu - ",(0,n.kt)("em",{parentName:"p"},"depth first search"),", i pretra\u017eivanje u \u0161irinu - ",(0,n.kt)("em",{parentName:"p"},"breadth first search"),". Razumijevanjem tih metoda pretra\u017eivanja i njihovih karakteristika mo\u0107i \u0107ete ih koristiti za jako \u0161iroku paletu problema i po potrebi ih adaptirati za specifi\u010dne probleme."),(0,n.kt)("h3",{id:"depth-first-search"},"Depth First Search"),(0,n.kt)("p",null,"Pretra\u017eivanje u dubinu, ",(0,n.kt)("em",{parentName:"p"},"depth first search"),", ili ukratko DFS, metoda je obilaska \u010dvorova u kojoj prelazimo s jednog \u010dvora na drugi dok god nalazimo nove, neposje\u0107ene \u010dvorove. U slu\u010daju da iz trenutnog \u010dvora ne mo\u017eemo obi\u0107i neki novi \u010dvor, vra\u0107amo se na \u010dvor iz kojeg smo do\u0161li, poku\u0161avamo i\u0107i na neposje\u0107ene \u010dvorove itd. Pretra\u017eivanje zavr\u0161ava kad se posjete svi \u010dvorovi do kojih postoji put iz prvog \u010dvora nad kojim je DFS pozvan."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Primjer grafa nad kojim radimo DFS",src:o(7124).Z,width:"355",height:"355"})),(0,n.kt)("p",null,"Uzmimo na primjer graf sa slike. Recimo da za sljede\u0107i \u010dvor u obilasku biramo prvo onaj neposje\u0107eni \u010dvor s najmanjim indeksom, te da je po\u010detni \u010dvor onaj s indeksom 1. Ozna\u010dimo njega kao posje\u0107enog, te iz njega prelazimo na neposje\u0107eni susjedni \u010dvor s najmanjim indeksom, u ovom slu\u010daju \u010dvor 4. Ponavljamo postupak za \u010dvor 4: ozna\u010davamo ga kao posje\u0107enog, njegovi neposje\u0107eni susjedi su 2 i 5 - prelazimo na \u010dvor 2. Ozna\u010dimo \u010dvor 2 kao posje\u0107enog, prelazimo na \u010dvor 3. Ozna\u010dimo \u010dvor 3 kao posje\u0107enog. Iz \u010dvora 3 nemamo vi\u0161e gdje i\u0107i, pa se vra\u0107amo u \u010dvor iz kojeg smo do\u0161li, a to je \u010dvor 2. Opet tra\u017eimo neposje\u0107enog susjeda \u010dvora 2 s najmanjim indeksom - sad je to \u010dvor 6. Prelazimo na njega, ozna\u010dimo ga kao posje\u0107enog i vra\u0107amo se opet na 2 jer nemamo kamo drugdje iz 6. Sad ni 2 vi\u0161e nema neposje\u0107enih susjeda, pa se vra\u0107amo u 4. Iz 4 idemo u 5, iz 5 se vra\u0107amo u 4, te iz 4 natrag u 1, gdje pretra\u017eivanje zavr\u0161ava."),(0,n.kt)("p",null,"Kad bismo prilikom prvog ulaska u svaki \u010dvor ispisali njegov indeks, dobili bismo sljede\u0107i ispis:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1 4 2 3 6 5\n")),(0,n.kt)("p",null,"DFS se mo\u017ee implementirati na vi\u0161e na\u010dina. Naj\u010de\u0161\u0107i i jednostavan na\u010din implementacije je rekurzivnim pozivima - zadani \u010dvor ozna\u010dimo kao posje\u0107enog, a zatim redom pozivamo DFS na svim njegovim neposje\u0107enim susjedima."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'// mozete graf deklarirati globalno\n// ili, ako ne zelite, proslijediti \n// referencu na graf funkciji dfs\n// MAXN je neka konstanta, npr. najveci\n// moguci broj cvorova iz teksta zadatka\nvector<vector<int>> graph(MAXN);\n\n// isto vrijedi i za polje posjecenih cvorova\n// visited[i] je true ako je cvor i posjecen,\n// inace false\n// na pocetku je false za sve cvorove\nvector<bool> visited(MAXN, false);\n\nvoid dfs(int node) {\n    visited[node] = true;\n\n    // radi nesto s cvorom, npr. ispis indeksa\n    cout << "Usao u cvor " << node << "\\n";\n\n    for(auto &it : graph[node]) {\n        if(!visited[it]) dfs(it);\n    }\n}\n')),(0,n.kt)("p",null,"Pozovemo li sad ovu funkciju na grafu sa slike:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"graph[1] = {4};\ngraph[2] = {3, 4, 6};\ngraph[3] = {2};\ngraph[4] = {1, 2, 5};\ngraph[5] = {4};\ngraph[6] = {2};\n\ndfs(1);\n")),(0,n.kt)("p",null,"Dobit \u0107emo o\u010dekivani ispis:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Usao u cvor 1\nUsao u cvor 4\nUsao u cvor 2\nUsao u cvor 3\nUsao u cvor 6\nUsao u cvor 5\n")),(0,n.kt)("admonition",{title:"primijetite",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Ne postoji razlika u implementaciji ako se radi o usmjerenom grafu.")),(0,n.kt)("h4",{id:"bitna-svojstva-i-varijacije-dfs-a"},"Bitna svojstva i varijacije DFS-a"),(0,n.kt)("p",null,"Ako su nakon DFS-a svi \u010dvorovi neusmjerenog grafa ozna\u010deni kao posje\u0107eni, graf je povezan. Tako\u0111er koriste\u0107i DFS mo\u017eemo prona\u0107i broj komponenti nepovezanog grafa tako \u0161to iteriramo kroz sve \u010dvorove i pozivamo DFS za one koji dosad nisu posje\u0107eni. Broj poziva DFS-a je ujedno i broj komponenti."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"int components = 0;\n\nfor(int i=1; i<=n; i++) {\n    if(!visited[i]) {\n        components++;\n        dfs(i);\n    }\n}\n")),(0,n.kt)("p",null,"Tako\u0111er, ako prilikom DFS-a nijednom ne nai\u0111emo na posje\u0107en \u010dvor (osim onoga iz kojeg smo do\u0161li u trenutni \u010dvor), mo\u017eemo zaklju\u010diti da je graf stablo jer u stablima vrijedi da izme\u0111u dva \u010dvora postoji to\u010dno jedan put."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"bool graphIsATree = true;\n\nvoid checkIfGraphIsATree(int node, int pred) {\n    visited[node] = true;\n\n    for(auto &it : graph[node]) {\n        if(it == pred) continue;\n\n        if(visited[it]) {\n            graphIsATree = false;\n            return;\n        }else{\n            checkIfGraphIsATree(it, node);\n        }\n    }\n}\n")),(0,n.kt)("p",null,"Ako smo sigurni da je graf stablo (npr. iz teksta zadatka), polje visited nam ni ne treba:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// izvan maina\n\nvoid dfsOnTree(int node, int pred) {\n    // radi nesto s cvorom\n\n    for(auto &it : graph[node]) {\n        if(it == pred) continue;\n\n        dfs(it, node);\n    }\n}\n\n// u mainu\n\n// ne mora nuzno prvi argument biti 1,\n// moze biti koji god cvor hocete\ndfsOnTree(1, -1);\n")),(0,n.kt)("p",null,"Ako nai\u0111emo na ve\u0107 posje\u0107eni \u010dvor, a koji nije onaj \u010dvor iz kojeg smo do\u0161li u trenutni \u010dvor, mo\u017eemo zaklju\u010diti da su trenutni \u010dvor i taj ve\u0107 posje\u0107eni \u010dvor dio istog ciklusa. Ako pri pozivu DFS-a zapamtimo na kojoj smo dubini rekurzije, mo\u017eemo jako jednostavno izra\u010dunati duljinu ciklusa na koji smo nai\u0161li."),(0,n.kt)("p",null,"Pomo\u0107u jedne varijacije DFS-a mo\u017eemo i obi\u0107i sve mogu\u0107e jednostavne putove u grafu - nakon \u0161to obradimo cvor i pozovemo DFS za njegove neposje\u0107ene susjede, vratimo taj \u010dvor nazad u neposje\u0107eno stanje i nastavimo obra\u0111ivati pro\u0161li \u010dvor. Ako pozovemo takav DFS za sve \u010dvorove u grafu, obi\u0107i \u0107emo sve mogu\u0107e jednostavne putove u grafu."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'// mozemo ovo koristiti za pracenje trenutnog puta\nvector<int> currentPath;\n\nvoid tryAllPaths(int node) {\n    visited[node] = true;\n    currentPath.push_back(node);\n\n    for(auto &it : graph[node]) {\n        if(!visited[it]) {\n            tryAllPaths(it);\n        }\n    }\n\n    for(auto &it : currentPath) {\n        cout << it << " ";\n    }\n    cout << "\\n";\n\n    currentPath.pop_back();\n    visited[node] = false;\n}\n')),(0,n.kt)("p",null,"Pozovemo li ovu funkciju za primjer sa slike:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Primjer grafa za koji tra\u017eimo sve puteve",src:o(7124).Z,width:"355",height:"355"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"tryAllPaths(1);\n")),(0,n.kt)("p",null,"Dobit \u0107emo sljede\u0107i ispis:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1 4 2 3 \n1 4 2 6 \n1 4 2 \n1 4 5 \n1 4 \n1\n")),(0,n.kt)("p",null,"U ovom primjeru nalazimo samo jednostavne putove koji po\u010dinju u \u010dvoru 1, a jednostavnom iteracijom po svim \u010dvorovima mo\u017eemo prona\u0107i sve mogu\u0107e jednostavne putove iz svih \u010dvorova."),(0,n.kt)("h3",{id:"breadth-first-search"},"Breadth First Search"),(0,n.kt)("p",null,'Drugi na\u010din pretra\u017eivanja grafova jest pretra\u017eivanje u \u0161irinu. Ideja ove metode je da \u010dvorove obra\u0111ujemo po "slojevima" - obradimo po\u010detni \u010dvor, taj \u010dvor je dio sloja 0, zatim njegove neposje\u0107ene susjede - sloj 1, pa neposje\u0107ene susjede \u010dvorova iz sloja 1 - oni su dio sloja 2, i tako dalje dok ne obradimo sve \u010dvorove do kojih postoji put iz po\u010detnog \u010dvora.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Primjer grafa nad kojim radimo BFS",src:o(3697).Z,width:"355",height:"355"})),(0,n.kt)("p",null,"Zapo\u010dnemo li pretra\u017eivanje u \u0161irinu na grafu sa slike u \u010dvoru 1, i ako opet pretpostavimo da su susjedi sortirani uzlazno po indeksu, algoritam \u0107e se pona\u0161ati na sljede\u0107i na\u010din. Obradimo \u010dvor jedan, ozna\u010dimo ga kao posje\u0107enog, te redom posje\u0107ujemo njegove neposje\u0107ene susjede - to su redom \u010dvorovi 3, 5 i 6. Nakon toga posje\u0107ujemo sve neposje\u0107ene susjede \u010dvora 3 - to je \u010dvor 4, pa neposje\u0107ene susjede \u010dvora 5 - to su \u010dvorovi 2 i 7, pa neposje\u0107ene susjede \u010dvora 6 - takvih \u010dvorova vi\u0161e nema. Nakon toga poku\u0161avamo posjetiti neposje\u0107ene susjede \u010dvorova 4, 2 i 7, me\u0111utim oni nemaju niti jednog neposje\u0107enog susjeda, pa algoritam zavr\u0161ava."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Graf sa slojevima obojanim u razli\u010dite boje",src:o(7206).Z,width:"355",height:"355"})),(0,n.kt)("p",null,"Kad bismo prilikom posjeta \u010dvora ispisali njegov indeks, dobili bismo ovakav ispis:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1 3 5 6 4 2 7\n")),(0,n.kt)("p",null,"Implementacija BFS-a temelji se na kori\u0161tenju reda. Po\u010detni \u010dvor dodamo u red te ponavljamo sljede\u0107i postupak sve dok se red ne isprazni: skinemo \u010dvor s po\u010detka reda, ako ve\u0107 nije posje\u0107en obradimo ga, ozna\u010dimo ga kao posje\u0107enog, te na kraj reda dodamo sve njegove neposje\u0107ene susjede."),(0,n.kt)("p",null,"U C++-u ta implementacija izgleda ovako, npr. za graf sa slike i po\u010detni \u010dvor 1:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'graph[1] = {3, 5, 6};\ngraph[2] = {5, 6, 7};\ngraph[3] = {1, 4, 5};\ngraph[4] = {3, 5, 7};\ngraph[5] = {1, 2, 3, 4, 6, 7};\ngraph[6] = {1, 2, 5};\ngraph[7] = {2, 4, 5};\n\nqueue<int> q;\n\n// pocetni cvor rucno dodajemo u red\nq.push(1);\n\nwhile(!q.empty()) {\n    int node = q.front();\n    q.pop();\n\n    if(visited[node]) continue;\n    visited[node] = true;\n\n    // radi nesto s cvorom, npr. ispis indeksa\n    cout << "Usao u cvor " << node << "\\n";\n\n    for(auto &it : graph[node]) {\n        if(!visited[it]) {\n        q.push(it);\n        }\n    }\n}\n')),(0,n.kt)("p",null,"Ovaj isje\u010dak koda daje o\u010dekivani ispis:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Usao u cvor 1\nUsao u cvor 3\nUsao u cvor 5\nUsao u cvor 6\nUsao u cvor 4\nUsao u cvor 2\nUsao u cvor 7\n")),(0,n.kt)("admonition",{title:"primijetite",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Za razliku od DFS-a, u BFS-u moramo raditi provjeru je li neki cvor posje\u0107en i za taj sami cvor i za njegove susjede. Razlog je \u010dinjenica da dva razli\u010dita \u010dvora koja su dio istog sloja mogu dodati istog susjeda u red dva puta, pa se moramo pobrinuti da se \u010dvor ne obradi opet drugi put kad se na\u0111e na po\u010detku reda.")),(0,n.kt)("h4",{id:"bitna-svojstva-i-varijacije-bfs-a"},"Bitna svojstva i varijacije BFS-a"),(0,n.kt)("p",null,"Jedno zanimljivo svojstvo BFS-a jest da pomo\u0107u njega mo\u017eemo provjeriti je li graf bipartitan ili ne. Ideja jest da po\u010detni \u010dvor obojimo u jednu boju (npr. crvenu), postavimo ga u red i ponavljamo sljede\u0107e korake: skinemo \u010dvor s po\u010detka reda, provjerimo jesu li njegovi susjedi obojani - ako postoji ijedan susjed koji je obojan u istu boju kao i trenutni \u010dvor, graf nije bipartitan. U suprotnom, bojamo sve neobojane susjede u obrnutu boju od one trenutnog \u010dvora (plavu ako je crven, crvenu ako je plav), dodajemo ih u red i nastavljamo dok se red ne isprazni."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Primjer bipartitnog grafa",src:o(973).Z,width:"355",height:"355"})),(0,n.kt)("p",null,"Drugo zanimljivo, a \u010desto i jako korisno svojstvo BFS-a jest da se pomo\u0107u njega u nete\u017einskim grafovima mo\u017ee prona\u0107i duljina najkra\u0107eg puta izme\u0111u nekog po\u010detnog \u010dvora i svih ostalih \u010dvorova grafa. Ideja je vrlo jednostavna - do \u010dvorova u prvom sloju BFS-a sigurno ne postoji kra\u0107i put - oni su za 1 brid udaljeni od po\u010detnog \u010dvora. Duljina najkra\u0107eg puta do \u010dvorova u drugom sloju je sigurno 2, jer su za 1 udaljeni od \u010dvorova iz prvog sloja, a da je manja, ve\u0107 bismo ih obradili u prvom sloju. Sli\u010dno vrijedi i za \u010dvorove idu\u0107ih slojeva."))}m.isMDXComponent=!0},7124:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/pretrazivanje1-4fd36327035f37386af68322692b7f88.png"},3697:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/pretrazivanje2-131f629a9187045ef62bfccfda253d73.png"},7206:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/pretrazivanje3-5dea4945c6cc5ff1e0d8d071d00e2b4d.png"},973:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/pretrazivanje4-0cbc2d4f16bc8a776cb869382e1db1d5.png"}}]);