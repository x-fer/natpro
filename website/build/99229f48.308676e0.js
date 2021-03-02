(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{110:function(e,a,n){"use strict";n.d(a,"a",(function(){return u})),n.d(a,"b",(function(){return s}));var t=n(0),i=n.n(t);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var j=i.a.createContext({}),c=function(e){var a=i.a.useContext(j),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},u=function(e){var a=c(e.components);return i.a.createElement(j.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,r=e.parentName,j=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=t,s=u["".concat(r,".").concat(d)]||u[d]||m[d]||o;return n?i.a.createElement(s,p(p({ref:a},j),{},{components:n})):i.a.createElement(s,p({ref:a},j))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:t,r[1]=p;for(var j=2;j<o;j++)r[j]=n[j];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return r})),n.d(a,"metadata",(function(){return p})),n.d(a,"toc",(function(){return l})),n.d(a,"default",(function(){return c}));var t=n(3),i=n(7),o=(n(0),n(110)),r={title:"Tipi\u010dni program"},p={unversionedId:"osnovni-pojmovi/tipicni-program",id:"osnovni-pojmovi/tipicni-program",isDocsHomePage:!1,title:"Tipi\u010dni program",description:"\u0160ablona",source:"@site/docs\\osnovni-pojmovi\\tipicni-program.md",slug:"/osnovni-pojmovi/tipicni-program",permalink:"/docs/osnovni-pojmovi/tipicni-program",editUrl:"https://github.com/ivvlspirit/natpro/tree/main/website/docs/osnovni-pojmovi/tipicni-program.md",version:"current",sidebar:"materijaliSidebar",previous:{title:"Savjeti",permalink:"/docs/uvod/savjeti"},next:{title:"Tipovi podataka",permalink:"/docs/osnovni-pojmovi/tipovi-podataka"}},l=[{value:"\u0160ablona",id:"\u0161ablona",children:[]},{value:"Kompajliranje",id:"kompajliranje",children:[]},{value:"Dodatne mogu\u0107nosti",id:"dodatne-mogu\u0107nosti",children:[]},{value:"Pobolj\u0161anja specifi\u010dna za Codeforces",id:"pobolj\u0161anja-specifi\u010dna-za-codeforces",children:[]}],j={toc:l};function c(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},j,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\u0161ablona"},"\u0160ablona"),Object(o.b)("p",null,"Razli\u010dite platforme za natjecateljsko programiranje imaju razli\u010dite vrste zadataka, razli\u010dita ograni\u010denja, na nekim natjecanjima smijete koristiti dijelove programskog koda napisane prije natjecanja (npr. ",Object(o.b)("a",{parentName:"p",href:"https://codeforces.com"},"Codeforces"),"), a na nekima ne smijete (npr. ",Object(o.b)("a",{parentName:"p",href:"https://informatika.azoo.hr"},"Natjecanje iz informatike"),"), pa se iz tog razloga i priprema za razli\u010dita natjecanja razlikuje."),Object(o.b)("p",null,"Me\u0111utim, vi\u0161e-manje svako rje\u0161enje zapo\u010dinje pisanjem sljede\u0107ih linija koda:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main(){\n    // Rje\u0161enje va\u0161eg zadatka\n}\n")),Object(o.b)("p",null,"U prvom retku uklju\u010dujemo biblioteku u kojoj se nalazi velik broj struktura podataka i funkcija koje \u0107e nam sigurno trebati tijekom rje\u0161avanja zadataka. Iako u jednom zadatku sigurno ne\u0107emo koristiti ve\u0107inu mogu\u0107nosti ove biblioteke, bolje je uklju\u010diti sve odjednom nego tro\u0161iti vrijeme na razmi\u0161ljanje o tome koju bismo specifi\u010dnu biblioteku trebali uklju\u010diti."),Object(o.b)("p",null,"U drugom retku postavljamo prostor imena ",Object(o.b)("inlineCode",{parentName:"p"},"std")," kao zadani prostor imena. Ta naredba nam tako\u0111er olak\u0161ava pisanje koda jer bismo ina\u010de morali pisati ",Object(o.b)("inlineCode",{parentName:"p"},"std::")," ispred puno drugih izraza (npr. ",Object(o.b)("inlineCode",{parentName:"p"},"std::cin"),", ",Object(o.b)("inlineCode",{parentName:"p"},"std::cout"),", ",Object(o.b)("inlineCode",{parentName:"p"},"std::string"),"). "),Object(o.b)("p",null,"Zatim slijedi funkcija ",Object(o.b)("inlineCode",{parentName:"p"},"main")," u koju upisujemo svoje rje\u0161enje odre\u0111enog zadatka."),Object(o.b)("p",null,"U slu\u010daju da se planirate natjecati na natjecanjima gdje je dozvoljeno kori\u0161tenje unaprijed napisanog koda, uvijek je dobro imati spremljen ",Object(o.b)("em",{parentName:"p"},"template")," koji mo\u017eete samo kopirati i lijepiti te si tako dodatno u\u0161tedjeti neko vrijeme."),Object(o.b)("h3",{id:"kompajliranje"},"Kompajliranje"),Object(o.b)("p",null,"Svoje programe mo\u017eete kompajlirati i pokrenuti naredbom"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"g++ -std=c++11 -O2 -Wall program.cpp -o program\n")),Object(o.b)("p",null,"u naredbenom retku, \u0161to \u0107e stvoriti izvr\u0161nu datoteku koju \u0107ete zatim mo\u0107i pokrenuti."),Object(o.b)("h3",{id:"dodatne-mogu\u0107nosti"},"Dodatne mogu\u0107nosti"),Object(o.b)("p",null,"Iako su gore navedena \u0161ablona i naredba za kompajliranje dovoljno dobri, mo\u017eemo ih jo\u0161 malo doraditi kako bismo br\u017ee pisali kod i kako bi se program br\u017ee izvr\u0161avao."),Object(o.b)("p",null,"Mo\u017eemo ubrzati \u010ditanje ulaznih podataka kori\u0161tenjem sljede\u0107a dva retka na po\u010detku funkcije ",Object(o.b)("inlineCode",{parentName:"p"},"main"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"ios::sync_with_stdio(0);\ncin.tie(0);\n")),Object(o.b)("p",null,"Tako\u0111er, \u010desto se doga\u0111a da shvatite da imate gre\u0161ku u programu, zbog toga izvr\u0161avate svoj program nekoliko puta koriste\u0107i iste ulazne podatke, te na kopiranje i lijepljenje ulaznih podataka tro\u0161ite previ\u0161e vremena. Taj problem se mo\u017ee izbje\u0107i tako da zalijepite ulazne podatke u neku datoteku (npr. ",Object(o.b)("inlineCode",{parentName:"p"},"ulaz.txt"),"), te kori\u0161tenjem naredbe"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'freopen("ulaz.txt", "r", stdin);\n')),Object(o.b)("p",null,"preusmjerite sadr\u017eaj datoteke ",Object(o.b)("inlineCode",{parentName:"p"},"ulaz.txt")," na standardni ulaz. Me\u0111utim, koriste\u0107i ovakvo rje\u0161enje, morali biste uklanjati ovaj redak prije predaje svog rje\u0161enja. Da bismo to izbjegli, mo\u017eemo koristiti uvjetno kompajliranje na samom po\u010detku funkcije ",Object(o.b)("inlineCode",{parentName:"p"},"main"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#ifdef DEBUG\nfreopen("ulaz.txt", "r", stdin);\n#endif\n')),Object(o.b)("p",null,"te dodati zastavicu ",Object(o.b)("inlineCode",{parentName:"p"},"-DDEBUG")," u naredbu kompajleru tako da naredba sad izgleda ovako:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"g++ -std=c++11 -O2 -Wall -DDEBUG program.cpp -o program\n")),Object(o.b)("p",null,"Ovime \u0107ete omogu\u0107iti da se na va\u0161em ra\u010dunalu ulaz \u010dita iz datoteke ",Object(o.b)("inlineCode",{parentName:"p"},"ulaz.txt"),", a na poslu\u017eitelju koji ocjenjuje va\u0161e rje\u0161enje sa standardnog ulaza. Uzmite u obzir da se datoteka ",Object(o.b)("inlineCode",{parentName:"p"},"ulaz.txt")," mora nalaziti u istoj mapi kao i ",Object(o.b)("inlineCode",{parentName:"p"},"program.cpp"),"."),Object(o.b)("p",null,"Nakon ovih pobolj\u0161anja, va\u0161a \u0161ablona bi trebala izgledati ovako:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main(){\n    #ifdef DEBUG\n    freopen("ulaz.txt", "r", stdin);\n    #endif\n\n    ios::sync_with_stdio(0);\n    cin.tie(0);\n\n    // Rje\u0161enje va\u0161eg zadatka\n}\n')),Object(o.b)("h3",{id:"pobolj\u0161anja-specifi\u010dna-za-codeforces"},"Pobolj\u0161anja specifi\u010dna za Codeforces"),Object(o.b)("p",null,"S obzirom da \u0107e ve\u0107ina primjera u ovim materijalima biti s natjecanja na platformi Codeforces, treba spomenuti da se na toj platformi ulazni podaci sastoje od vi\u0161e test primjera te se algoritam mora izvr\u0161iti vi\u0161e puta u jednom izvr\u0161avanju programa. Iz tog razloga mo\u017eemo napraviti posebnu \u0161ablonu za Codeforces koja \u0107e izgledati ovako:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},'#include <bits/stdc++.h>\n\nusing namespace std;\n\nint main(){\n    #ifdef DEBUG\n    freopen("ulaz.txt", "r", stdin);\n    #endif\n\n    ios::sync_with_stdio(0);\n    cin.tie(0);\n\n    int TEST;\n    cin >> TEST;\n\n    while(TEST--){\n        // Rje\u0161enje va\u0161eg zadatka\n    }\n}\n')),Object(o.b)("p",null,"Bitno je napomenuti da u svakom zadatku morate pa\u017eljivo pro\u010ditati kako izgledaju ulazni podaci, nekad se znaju pojaviti i zadaci u kojima se u jednom primjerku ulaza nalazi samo jedan test!"))}c.isMDXComponent=!0}}]);