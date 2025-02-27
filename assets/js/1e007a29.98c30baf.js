"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2934],{8453:(e,i,a)=>{a.d(i,{R:()=>t,x:()=>s});var o=a(6540);const r={},n=o.createContext(r);function t(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(n.Provider,{value:i},e.children)}},9354:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>j});var o=a(4848),r=a(8453);const n={title:"Primjeri"},t="Zadaci za vje\u017ebu",s={id:"sortiranje-i-pretrazivanje/primjeri",title:"Primjeri",description:"Zadatak: Years",source:"@site/docs/sortiranje-i-pretrazivanje/primjeri.md",sourceDirName:"sortiranje-i-pretrazivanje",slug:"/sortiranje-i-pretrazivanje/primjeri",permalink:"/docs/sortiranje-i-pretrazivanje/primjeri",draft:!1,unlisted:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/sortiranje-i-pretrazivanje/primjeri.md",tags:[],version:"current",frontMatter:{title:"Primjeri"},sidebar:"materijaliSidebar",previous:{title:"Ternarno pretra\u017eivanje",permalink:"/docs/sortiranje-i-pretrazivanje/ternarno-pretrazivanje"},next:{title:"Potpuno pretra\u017eivanje",permalink:"/docs/potpuno-pretrazivanje-i-pohlepni-pristupi/uvod"}},d={},j=[{value:"Zadatak: Years",id:"zadatak-years",level:3},{value:"Zadatak: The Parade",id:"zadatak-the-parade",level:3},{value:"Ostali zadaci",id:"ostali-zadaci",level:3}];function l(e){const i={a:"a",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components},{Details:a}=i;return a||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"zadaci-za-vje\u017ebu",children:"Zadaci za vje\u017ebu"}),"\n",(0,o.jsx)(i.h3,{id:"zadatak-years",children:"Zadatak: Years"}),"\n",(0,o.jsxs)(i.p,{children:["Tekst zadatka: ",(0,o.jsx)(i.a,{href:"https://codeforces.com/problemset/problem/1424/G",children:"Years"})]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.p,{children:"Hint 1"})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.p,{children:"Zamislite da u zadatku imate samo popis godina ro\u0111enja svih mogu\u0107ih ljudi na tom planetu i pitanje je koliko je ljudi ro\u0111eno PRIJE neke godine? Da bismo mogli efikasno odgovarati na ovakve upite (koriste\u0107i binarnu pretragu), potrebno je prvo SORTIRATI dobiveni niz godina."})})]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.p,{children:"Hint 2"})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.p,{children:"Koje sve godine mogu biti rje\u0161enje? Ako malo razmislite, primijetit \u0107ete da su jedino godine kada se netko rodio / umro mogu\u0107a rje\u0161enja upita (broj mogu\u0107ih rje\u0161enja 'odgovara' broju ljudi). Drugim rije\u010dima, ako je neka godina u kojoj nije bilo promjene broja stanovnika rje\u0161enje, onda je sigurno i prethodna godina rje\u0161enje, ali njoj dajemo prednost zbog uvjeta zadatka koji tra\u017ei minimalnu godinu."})})]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.p,{children:"Hint 3"})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.p,{children:"Iako nam je prirodno vezati godinu ro\u0111enja i godinu smrti uz pojedinu osobu, va\u017eno je primijetiti da u ovom zadatku ta dva podatka ne trebaju biti povezana i da ih mo\u017eemo gledati neovisno."})})]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.p,{children:"Rje\u0161enje"})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.p,{children:"Jedan od pristupa je da pri unosu podataka skupimo sve godine koje su mogu\u0107e rje\u0161enje zadatka i potom za svku provjeravamo koliko je ljudi tada bilo \u017eivo (pamtimo samo godinu s maksimalnim brojem i broj ljudi koji su \u017eivjeli te godine).\nRecimo da nas zanima koliko je ljudi bilo \u017eivo 1996. Taj podatak mo\u017eemo odrediti ako od svih ljudi koji su se rodili prije 1996. oduzmemo sve one koji su umrli prije 1996. Prvi \u010dlan u razlici dobivamo binarnom pretragom po godinama ro\u0111enja, a drugi pretragom po godinama smrti. Ukupna slo\u017eenost algoritma je O(n logn)"})})]}),"\n",(0,o.jsx)(i.h3,{id:"zadatak-the-parade",children:"Zadatak: The Parade"}),"\n",(0,o.jsxs)(i.p,{children:["Tekst zadatka: ",(0,o.jsx)(i.a,{href:"https://codeforces.com/problemset/problem/1250/J",children:"The Parade"})]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.p,{children:"Hint 1"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(i.p,{children:["\u0160to ako odaberemo neku veli\u010dinu reda ",(0,o.jsx)("b",{children:"r"})," i pitamo se mo\u017eemo li napraviti ",(0,o.jsx)("b",{children:"k redova veli\u010dine r"}),"? U kojoj slo\u017eenosti mo\u017eemo izra\u010dunati taj podatak?"]})})]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.p,{children:"Hint 2"})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.p,{children:"Prethodna se provjera mo\u017ee napraviti u linearnoj slo\u017eenosti (O(n)). Neka su brojevi vojnika redom 7, 3 i 2. Poku\u0161ajmo napraviti redove veli\u010dine 3. Od prvih 7 vojnika visine 1 mo\u017eemo napraviti dva reda veli\u010dine 3 (ostao je jedan vojnik). Tada tog jednog poku\u0161amo ubaciti u idu\u0107i red zajedno s vojnicima visine 2. Napravili smo red [1,2,2] i preostao je jedan vojnik visine 2. Sada spajamo tog preostalog vojnika s 2 vojnika visine 3 i dobili smo red [2,3,3]."})})]}),"\n",(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)(i.p,{children:"Rje\u0161enje"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(i.p,{children:["Time limit je 2s pa dozvoljen broj operacija redom veli\u010dine odgovara 10^8. Budu\u0107i da je u zadatku do 10^4 test-primjera, ostatak se koda tako\u0111er treba izvr\u0161avati u slo\u017eenosti O(10^4). Uo\u010dite da postoji neka grani\u010dna veli\u010dina reda, tj. maksimalna mogu\u0107a s kojom mo\u017eemo napraviti k redova. Ideja je da binary-searchamo tu veli\u010dinu reda (",(0,o.jsx)("b",{children:"r"}),") i za svaku mogu\u0107u u linearnoj slo\u017eenosti provjeravamo je li mogu\u0107e slo\u017eiti k redova. Ako nije, pretra\u017eujemo po ni\u017eim veli\u010dinama, a ako je, pretra\u017eujemo po vi\u0161ima. Kona\u010dno rje\u0161enje je onda r*k."]})})]}),"\n",(0,o.jsx)(i.h3,{id:"ostali-zadaci",children:"Ostali zadaci"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://codeforces.com/problemset/problem/1339/B",children:"Sorted Adjacent Differences"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"https://codeforces.com/problemset/problem/474/B",children:"Worms"})}),"\n"]})]})}function m(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);