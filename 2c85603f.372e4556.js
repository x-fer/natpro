(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{123:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),c=function(e){var a=r.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},j=function(e){var a=c(e.components);return r.a.createElement(o.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},l=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),j=c(t),l=n,u=j["".concat(p,".").concat(l)]||j[l]||b[l]||i;return t?r.a.createElement(u,s(s({ref:a},o),{},{components:t})):r.a.createElement(u,s({ref:a},o))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=l;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var o=2;o<i;o++)p[o]=t[o];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},80:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return m})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return j}));var n=t(3),r=t(7),i=(t(0),t(123)),p=["components"],s={title:"Pruning"},m={unversionedId:"potpuno-pretrazivanje-i-pohlepni-pristupi/pruning",id:"potpuno-pretrazivanje-i-pohlepni-pristupi/pruning",isDocsHomePage:!1,title:"Pruning",description:"Pruning je tehnika ranijeg odbacivanja poku\u0161aja koji sigurno ne\u0107e",source:"@site/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/pruning.md",slug:"/potpuno-pretrazivanje-i-pohlepni-pristupi/pruning",permalink:"/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/pruning",editUrl:"https://github.com/x-fer/natpro/tree/main/website/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/pruning.md",version:"current",lastUpdatedBy:"Ivan Vlahov",lastUpdatedAt:1628869359,sidebar:"materijaliSidebar",previous:{title:"Meet in the middle",permalink:"/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/meet-in-the-middle"},next:{title:"Zadatci - potpuno pretra\u017eivanje",permalink:"/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/zadatci-potpuno"}},o=[{value:"Problem 2: Broj puteva koji pokrivaju polje",id:"problem-2-broj-puteva-koji-pokrivaju-polje",children:[]}],c={toc:o};function j(e){var a=e.components,t=Object(r.a)(e,p);return Object(i.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Pruning")," je tehnika ranijeg odbacivanja poku\u0161aja koji sigurno ne\u0107e\nrezultirati rje\u0161enjem, a termin se koristi primarno kod rekurzivnih istra\u017eivanja."),Object(i.b)("p",null,"U sljede\u0107em problemu demonstrirat \u0107emo kori\u0161tenje pruninga, a uz to\npokazati tehniku pametne predaje stanja iz jednog rekurzivnog poziva u drugi."),Object(i.b)("h3",{id:"problem-2-broj-puteva-koji-pokrivaju-polje"},"Problem 2: Broj puteva koji pokrivaju polje"),Object(i.b)("p",null,"U prvom retku zadana su dva broja, ",Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mi",{parentName:"mrow"},"n")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," i ",Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mi",{parentName:"mrow"},"m")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathnormal"},"m"))))),", za koje vrijedi ",Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mn",{parentName:"mrow"},"2"),Object(i.b)("mo",{parentName:"mrow"},"\u2264"),Object(i.b)("mi",{parentName:"mrow"},"n"),Object(i.b)("mo",{parentName:"mrow",separator:"true"},","),Object(i.b)("mi",{parentName:"mrow"},"m"),Object(i.b)("mo",{parentName:"mrow"},"\u2264"),Object(i.b)("mn",{parentName:"mrow"},"6")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2 \\leq n,m \\leq 6")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.78041em",verticalAlign:"-0.13597em"}}),Object(i.b)("span",{parentName:"span",className:"mord"},"2"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(i.b)("span",{parentName:"span",className:"mrel"},"\u2264"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.8304100000000001em",verticalAlign:"-0.19444em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathnormal"},"n"),Object(i.b)("span",{parentName:"span",className:"mpunct"},","),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathnormal"},"m"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),Object(i.b)("span",{parentName:"span",className:"mrel"},"\u2264"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord"},"6"))))),".\nTa dva broja definiraju dimenzije \u0161ahovskog polja, \u0161irinu i du\u017einu."),Object(i.b)("p",null,"Odredi koliko puteva postoji koji kre\u0107u s jednog kuta i zavr\u0161avaju u dijagonalnom,\na svakim poljem prolaze ",Object(i.b)("strong",{parentName:"p"},"to\u010dno jednom"),"."),Object(i.b)("h4",{id:"pruning"},"Pruning"),Object(i.b)("p",null,"Razmislite li je li mogu\u0107e zavr\u0161iti put koji nije posjetio sva polja,\na stao je na krajnje? Naravno, nije.\nDakle, svi rekurzivni pozivi koji nalete na takvu situaciju trebaju biti\nprekinuti bez daljnjeg razmotavanja."),Object(i.b)("p",null,"Jo\u0161 jedan primjeru pruninga je taj da u razvoju rekurzije nikad ne stanemo na polje\nna koje smo ve\u0107 stali; iako je ovo nu\u017eno za dobar algoritam i vjerojatno o\u010dito,\ntako\u0111er spada u tehniku pruninga."),Object(i.b)("h4",{id:"kako-provjeriti-gdje-smo-pro\u0161li"},"Kako provjeriti gdje smo pro\u0161li?"),Object(i.b)("p",null,"Svaki rekurzivni poziv mora biti svjestan svoje pro\u0161losti,\nto jest simulaciji kojeg puta on odgovara (koja su polja ve\u0107 posje\u0107ena, poredak nije bitan).\nOvo moramo posti\u0107i nekom varijantom dvodimenzijskog polja u kojem su ozna\u010dena polja koja smo pro\u0161li.\nNaravno, kopiranje tog polja minimalno promijenjenog iz jednog poziva u drugi je jako vremenski zahtijevno."),Object(i.b)("p",null,"Umjesto kopiranja, mo\u017eemo samo promijeniti jedan element i poslati referencu,\na kad se rekurzija izmota iz tog poziva, taj element vratiti na staru vrijednost.\nU sljede\u0107em rekurzivnom pozivu \u0107e se promijeniti neki drugi element,\na nakon njega \u0107e se i taj drugi element vratiti na staro.\nKad se cijeli rekurzivni poziv zavr\u0161i, rekurzija \u0107e se izmotati natrag,\ngdje \u0107e roditelj poziva napraviti istu stvar."),Object(i.b)("p",null,"Postizanje ovakvog efekta zahtijeva da struktura (polje posje\u0107enih polja)\nbude reverzibilna, tj. da na njoj mo\u017eemo napraviti promijene i onda ih poni\u0161titi."),Object(i.b)("h4",{id:"kako-provjeriti-jesmo-li-pro\u0161li-sva-polja"},"Kako provjeriti jesmo li pro\u0161li sva polja?"),Object(i.b)("p",null,"Ve\u0107 smo napomenuli da stajanje na zadnje polje bez da smo posjetili sva ostala\nnu\u017eno rezultira granom rekurzije koju treba podrezati (nema rje\u0161enja u toj grani)."),Object(i.b)("p",null,"Kako provjeriti da smo pro\u0161li sva polja bez iteracije po dvodimenzijskom polju?\nJednostavno, pozivi rekurzije pratit \u0107e koliko su polja posjetili,\nto \u0107e biti jo\u0161 jedan argument rekurzije."),Object(i.b)("h4",{id:"implementacija"},"Implementacija"),Object(i.b)("p",null,"Povratna vrijednost rekurzije ozna\u010davat \u0107e broj tra\u017eenih puteva na\u0111enih u toj rekurzivnoj grani."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"#include <bits/stdc++.h>\nusing namespace std;\n\nint rek(int i, int j, vector<vector<bool>>& I, int visited_cnt, int n, int m){\n    // na krajnjem smo polju\n    if (i == n-1 && j==m-1){\n        // pruning, ovakve grane nemaju rjesenja\n        if (visited_cnt != n*m){\n            return 0;\n        }\n        // rjesenje!\n        else{\n            return 1;\n        }\n    }\n\n\n    int paths = 0;\n    // zgodan trik za situacije s kretanjima po polju\n    vector<vector<int>> dirs = {{-1,0},{1,0},{0,-1},{0,1}};\n\n    for (auto dir : dirs){\n        int ti = i+dir[0];\n        int tj = j+dir[1];\n\n        // unutar polja i nije posje\u0107en\n        if (ti>=0 && tj>=0 && ti<n && tj<m && I[ti][tj]==false){\n            I[ti][tj] = true;\n            paths+=rek(ti, tj, I, visited_cnt+1, n, m);\n            I[ti][tj] = false;\n        }\n    }\n\n    return paths;\n}\n\nint main(){\n    int n,m; cin>>n>>m;\n    \n    // polje posje\u0107enih polja\n    vector<vector<bool>> I(n,vector<bool>(m));\n\n    // vidi opis\n    I[0][0] = true;\n    cout << rek(0,0,I,1,n,m) << endl;\n    return 0;\n}\n")),Object(i.b)("p",null,"Primjetite da smo se u ovoj implementaciji dr\u017eali sljede\u0107e ",Object(i.b)("em",{parentName:"p"},"filozofije"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"svaki rekurzivni poziv na svom po\u010detku ima dobre vrijednosti polja ",Object(i.b)("span",{parentName:"em",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mtext",{parentName:"mrow",mathvariant:"monospace"},"I")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\texttt{I}")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.61111em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord text"},Object(i.b)("span",{parentName:"span",className:"mord texttt"},"I"))))))," i broja ",Object(i.b)("span",{parentName:"em",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mtext",{parentName:"mrow",mathvariant:"monospace"},"visited_cnt")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\texttt{visited\\_cnt}")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.70625em",verticalAlign:"-0.09514em"}}),Object(i.b)("span",{parentName:"span",className:"mord text"},Object(i.b)("span",{parentName:"span",className:"mord texttt"},"visited_cnt"))))))))),Object(i.b)("p",null,"Iako to nije moralo biti tako (sam poziv je to mogao a\u017eurirati),\ntreba unaprijed odlu\u010diti i dr\u017eati se toga u cijelom programu.\nImplikacija na\u0161eg izbora ujedno je i postavljanje vrijednosti polja u mainu."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"savjet")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Prethodno spomenute ",Object(i.b)("em",{parentName:"p"},"filozofije")," u \u017eargonu ra\u010dunalne znanosti zovemo\n",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Invariant_(mathematics)#Invariants_in_computer_science"},"invarijantama")))),Object(i.b)("h4",{id:"simetrija"},"Simetrija"),Object(i.b)("p",null,"Ograni\u010dimo problem na takav da su ",Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mi",{parentName:"mrow"},"n")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," i ",Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mi",{parentName:"mrow"},"m")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"m")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathnormal"},"m")))))," jednaki."),Object(i.b)("p",null,"Primijetite da se u rje\u0161enjima mo\u017ee na\u0107i simetrija:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"za svako rje\u0161enje koje kre\u0107e u u jednom od dva dostupna smjera,\npostoji drugo rje\u0161enje koje kre\u0107e u onom drugom smjeru, a ta rje\u0161enja\nse mogu dobiti jedno od drugoga zrcaljenjem")),Object(i.b)("p",null,"Dakle, umjesto da istra\u017eujemo oba puta, mi \u0107emo ru\u010dno krenuti jednim,\na zatim rezultat pomno\u017eiti s ",Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mn",{parentName:"mrow"},"2")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord"},"2"))))),"."),Object(i.b)("p",null,"Implementacija se razlikuje samo u dijelu funkcije ",Object(i.b)("span",{parentName:"p",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mtext",{parentName:"mrow",mathvariant:"monospace"},"main")),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\texttt{main}")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.61111em",verticalAlign:"0em"}}),Object(i.b)("span",{parentName:"span",className:"mord text"},Object(i.b)("span",{parentName:"span",className:"mord texttt"},"main")))))),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"    I[0][0] = true;\n    I[0][1] = true;\n    cout << rek(0,1,I,2,n,m)*2 << endl;\n    return 0;\n")),Object(i.b)("p",null,"Ova jednostavna optimizacije u\u0161tedjet \u0107e nam pola vremena!\nU drugim postavkama i zadatcima postoje i slo\u017eenije simetrije koje ne\u0107emo istra\u017eivati."))}j.isMDXComponent=!0}}]);