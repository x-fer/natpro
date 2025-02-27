"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6149],{4359:(s,a,e)=>{e.d(a,{A:()=>n});const n=e.p+"assets/images/sortiranje_happy_monkey-da07e50a315f7bc40984a794fcd77b8b.jpg"},6549:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>j,frontMatter:()=>r,metadata:()=>m,toc:()=>h});var n=e(4848),i=e(8453),l=e(6749);e(9630);const r={title:"Binarno pretra\u017eivanje"},t=void 0,m={id:"sortiranje-i-pretrazivanje/binarno-pretrazivanje",title:"Binarno pretra\u017eivanje",description:"Zamislimo sljede\u0107u situaciju. Dana je lista od $n$ brojeva koji su sortirani i zadatak nas pita nalazi li se u toj listi broj $x$? Prva ideja mogla bi biti prolazak po svim elementima liste pri \u010demu bismo svaki put radili usporedbu s brojem $x$ dok ga eventualno ne prona\u0111emo. To nam daje algoritam slo\u017eenosti $O(n)$. Postoji li br\u017ei na\u010din? Poma\u017ee li nam ikako \u010dinjenica da je dobiveni niz brojeva sortiran? Tu na snagu stupa binarno pretra\u017eivanje.",source:"@site/docs/sortiranje-i-pretrazivanje/binarno-pretrazivanje.md",sourceDirName:"sortiranje-i-pretrazivanje",slug:"/sortiranje-i-pretrazivanje/binarno-pretrazivanje",permalink:"/docs/sortiranje-i-pretrazivanje/binarno-pretrazivanje",draft:!1,unlisted:!1,editUrl:"https://github.com/x-fer/natpro/edit/main/docs/sortiranje-i-pretrazivanje/binarno-pretrazivanje.md",tags:[],version:"current",frontMatter:{title:"Binarno pretra\u017eivanje"},sidebar:"materijaliSidebar",previous:{title:"Sortiranje",permalink:"/docs/sortiranje-i-pretrazivanje/sortiranje"},next:{title:"Ternarno pretra\u017eivanje",permalink:"/docs/sortiranje-i-pretrazivanje/ternarno-pretrazivanje"}},c={},h=[{value:"C++ funkcije",id:"c-funkcije",level:2},{value:"Primjene",id:"primjene",level:2},{value:"Pretra\u017eivanje rje\u0161enja",id:"pretra\u017eivanje-rje\u0161enja",level:3},{value:"Maksimum funkcije",id:"maksimum-funkcije",level:3}];function o(s){const a={annotation:"annotation",code:"code",div:"div",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{authorName:"Maja Milas",githubUsername:"javascript-m"}),"\n",(0,n.jsxs)(a.p,{children:["Zamislimo sljede\u0107u situaciju. Dana je lista od ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"n"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"})]})})]})," brojeva koji su ",(0,n.jsx)(a.strong,{children:"sortirani"})," i zadatak nas pita nalazi li se u toj listi broj ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]}),"? Prva ideja mogla bi biti prolazak po svim elementima liste pri \u010demu bismo svaki put radili usporedbu s brojem ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," dok ga eventualno ne prona\u0111emo. To nam daje algoritam slo\u017eenosti ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})})]}),". Postoji li br\u017ei na\u010din? Poma\u017ee li nam ikako \u010dinjenica da je dobiveni niz brojeva sortiran? Tu na snagu stupa ",(0,n.jsx)(a.strong,{children:"binarno pretra\u017eivanje"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Vjerovali ili ne, s binarnim pretra\u017eivanjem ve\u0107 ste se vi\u0161e puta susreli u svakodnevnom \u017eivotu (npr. tra\u017eenje rije\u010di u rje\u010dniku ili to\u010dne stranice u knjizi). Sigurno ste i barem jednom u \u017eivotu igrali igru u kojoj osoba zamisli broj u nekom intervalu (npr. ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsx)(a.mn,{children:"100"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1-100"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"100"})]})]})]}),"), a vi morate pogoditi koji je broj zamislila. Prilikom svakog poku\u0161aja osoba vam ka\u017ee je li broj koji je ona zamislila ve\u0107i, manji ili jednak broju koji ste predlo\u017eili. Kada biste ovu igru igrali optimalno, prvo biste poku\u0161ali sa ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"50"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"50"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"50"})]})})]}),". Osoba \u0107e vam re\u0107i je li njezin broj ve\u0107i ili manji i vi ste tako problem poga\u0111anja jednog od ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"100"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"100"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"100"})]})})]})," brojeva prepolovili na samo ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"50"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"50"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"50"})]})})]})," mogu\u0107ih rje\u0161enja. Ako je npr. osoba rekla da je njezin broj ve\u0107i, lako je zaklju\u010diti da je idu\u0107i optimalan korak pretpostaviti broj ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"75"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"75"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"75"})]})})]})," \u010dime je problem ponovo prepolovljen. Budu\u0107i da se ",(0,n.jsx)("ins",{children:"slo\u017eenost problema prilikom svakog koraka prepolavlja"}),", ukupna \u0107e slo\u017eenost odgovarati ",(0,n.jsx)(a.strong,{children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(log_2(n))"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mclose",children:"))"})]})})]})})," (\u0161to je za velike ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"n"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"})]})})]}),"-ove punopuno manje od linearne)."]}),"\n",(0,n.jsxs)(a.p,{children:["Vratimo se sada na po\u010detni problem - nala\u017eenje broja ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," u nizu od n brojeva. Primjenjujemo istu logiku kao i u prethodnom primjeru samo \u0107emo ovoga puta binarno pretra\u017eivati poziciju na kojoj se nalazi tra\u017eeni broj. U prvom koraku uspore\u0111ujemo ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," s brojem u sredini liste. Ako je ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," manji od njega, pretra\u017eivanje nastavljamo u lijevoj polovici, u suprotnom pretra\u017eujemo desnu polovicu (princip rada je prikazan na animaciji ispod)."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"binary",src:e(6922).A+"",width:"773",height:"406"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(a.p,{children:"Ovo se rje\u0161enje mo\u017ee implementirani na sljede\u0107i na\u010din:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"// l i r su lijeva i desna granica intervala koji trenutno pretra\u017eujemo\nint l=0, r=n-1; \nint array[n];\n\nwhile (l <= r) {\n\tint mid = (l+r)/2;\n\tif (array[mid] == x) {\n\t\t//prona\u0161li smo broj x na poziciji mid\n\t}\n\tif (array[mid] > x) r = mid-1;\n\telse l = mid+1;\n}\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Budu\u0107i da svaki put prepolovimo interval pretra\u017eivanja, slo\u017eenost je i ovdje ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"O"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"l"}),(0,n.jsx)(a.mi,{children:"o"}),(0,n.jsxs)(a.msub,{children:[(0,n.jsx)(a.mi,{children:"g"}),(0,n.jsx)(a.mn,{children:"2"})]}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"n"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"O(log_2(n))"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"o"}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(a.span,{style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(a.span,{})})})]})})]}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(a.span,{className:"mclose",children:"))"})]})})]}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Alternativni na\u010din implementacije binarne pretrage je pomo\u0107u 'koraka'. Ideja je da na po\u010detku radimo ve\u0107e korake, a kako se pribli\u017eavamo odgovoru koraci se prepolavljaju."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"int k = 0; //trenutna pozicija u listi\nfor (int b = n/2; b >= 1; b /= 2) {\n\t//ako s korakom ne bi presko\u010dili broj, napravimo korak\n\twhile (k+b < n && array[k+b] <= x) k += b;\n}\nif (array[k] == x) {\n\t//prona\u0161li smo broj x na poziciji mid\n}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"c-funkcije",children:"C++ funkcije"}),"\n",(0,n.jsx)(a.p,{children:"Standardne C++ biblioteke sadr\u017ee implementirane funkcije koje ponekad mogu zamijeniti binarnu pretragu. Sve tako\u0111er rade u logaritamskoj slo\u017eenosti."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"lower_bound"})," - vra\u0107a pointer na prvu vrijednost u listi koja je ",(0,n.jsxs)(a.strong,{children:["barem ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})]})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"upper_bound"})," - vra\u0107a pointer na prvu vrijednost u listi koja je ",(0,n.jsxs)(a.strong,{children:["ve\u0107a od ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})]})]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"equal range"})," - vra\u0107a oba navedena pointera"]}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Ako tra\u017eenog broja ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"x"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})})]})," nema u listi, funkcije vra\u0107aju pointer na .end() element."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"vector<int> v; //... npr. [5,5,5,6,6,6,7,7]\n\nvector<int>::iterator lower, upper;\nlower = lower_bound(v.begin(), v.end(), 6);\nupper = upper_bound(v.begin(), v.end(), 6);\n \ncout << \"lower_bound: \" << (lower-v.begin()) << '\\n'; // lower_bound: 3\ncout << \"upper_bound: \"<< (upper-v.begin()) << '\\n'; // upper_bound: 6\n"})}),"\n",(0,n.jsx)(a.div,{children:(0,n.jsxs)(a.p,{children:["Navedene funkcije podrazumijevaju da je lista ",(0,n.jsx)(a.strong,{children:"sortirana"}),"."]})}),"\n",(0,n.jsx)(a.h2,{id:"primjene",children:"Primjene"}),"\n",(0,n.jsx)(a.p,{children:"Kao \u0161to smo vidjeli u ranijim primjerima, binarno pretra\u017eivanje \u010desto koristimo kada provjeravamo je li neki broj u listi i, ako je, na kojoj je poziciji. Pogledajmo sada neke druga\u010dije primjene ovog algoritma."}),"\n",(0,n.jsx)(a.h3,{id:"pretra\u017eivanje-rje\u0161enja",children:"Pretra\u017eivanje rje\u0161enja"}),"\n",(0,n.jsxs)(a.p,{children:["Zamislimo problem u kojem tra\u017eimo odgovaraju\u0107u veli\u010dinu kvadratnog kaveza za neki \u010dopor majmuna u zoolo\u0161kom vrtu. \u017delimo odabrati kavez tako da mu veli\u010dina bude ",(0,n.jsx)("ins",{children:"minimalna"}),", ali takva da svi majmuni budu zadovoljni (zadovoljstvo majmuna odre\u0111eno je nekim uvjetima zadatka). Mogu\u0107e je rje\u0161enje krenuti od veli\u010dine d=",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"1"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})})]})," i pove\u0107avati veli\u010dinu za ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"1"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})})]})," tako da pri svakom koraku provjeravamo jesmo li ispunili uvjet zadovoljstva (kad ga ispunimo, na\u0161li smo najmanju prihvatljivu veli\u010dinu i prestajemo izvr\u0161avati program). Ovo rje\u0161enje radi, ali je gotovo uvijek presporo."]}),"\n",(0,n.jsxs)(a.p,{children:["Poku\u0161ajmo sada upotrijebiti znanje binarne pretrage. Va\u017eno je primijetiti da sve veli\u010dine kaveza do neke ",(0,n.jsx)("ins",{children:"grani\u010dne veli\u010dine"})," ",(0,n.jsx)(a.strong,{children:"ne"})," ispunjavaju uvjet zadovoljstva, a sve veli\u010dine nakon te ga ispunjavaju. Na\u0161 je zadatak prona\u0107i upravo tu grani\u010dnu veli\u010dinu. Postavimo lijevu granicu pretrage na ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mn,{children:"1"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"1"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"})]})})]}),", a desnu na neki veliki broj koji sigurno ispunjava uvjet zadatka. Pri svakom koraku pretrage provjeravamo jesmo li ispunili uvjet zadatka. Ako jesmo, pomi\u010demo desnu granicu (\u017eelimo jo\u0161 manju veli\u010dinu), a ako nismo, pomi\u010demo lijevu granicu."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.img,{alt:"happy monkey",src:e(4359).A+"",width:"600",height:"399"})," ",(0,n.jsx)("br",{}),"\nUistinu zadovoljan majmun."]}),"\n",(0,n.jsx)(a.h3,{id:"maksimum-funkcije",children:"Maksimum funkcije"}),"\n",(0,n.jsxs)(a.p,{children:["Binarnu pretragu tako\u0111er mo\u017eemo koristiti za tra\u017eenje maksimuma funkcija koje prvo rastu, a potom padaju. Za takve funkcije vrijedi da je ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x)<f(x+1)"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})]})]})," za ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{children:"<"}),(0,n.jsx)(a.mi,{children:"k"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x < k"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"<"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})]})]}),", a ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:">"}),(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x)>f(x+1)"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:">"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mclose",children:")"})]})]})]})," za ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{children:"\u2265"}),(0,n.jsx)(a.mi,{children:"k"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"x \\geq k"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"\u2265"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})]})]}),". Mi tra\u017eimo poziciju ",(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsx)(a.mi,{children:"k"})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"k"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"})]})})]})," koja odgovara maksimumu funkcije.:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-cpp",children:"int x = -1;\nfor (int b = z; b >= 1; b /= 2) {\n\twhile (f(x+b) < f(x+b+1)) x += b;\n}\nint k = x+1;\n"})}),"\n",(0,n.jsx)(a.div,{children:(0,n.jsx)(a.p,{children:"U ovom slu\u010daju uzastopne vrijednosti funkcije ne smiju biti jednake. Kada bi to bilo dozvoljeno, ne bismo znali kako nastaviti pretragu."})})]})}function j(s={}){const{wrapper:a}={...(0,i.R)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(o,{...s})}):o(s)}},6749:(s,a,e)=>{e.d(a,{A:()=>i});e(6540);var n=e(4848);const i=s=>{let{authorName:a,githubUsername:e}=s;return(0,n.jsxs)("div",{className:"author",children:["Autor: ",(0,n.jsx)("a",{target:"_blank",href:"https://github.com/"+e,children:a})]})}},6922:(s,a,e)=>{e.d(a,{A:()=>n});const n=e.p+"assets/images/binary_search-d5f5fa729c0f39ee9235fda2a332b564.gif"},8453:(s,a,e)=>{e.d(a,{R:()=>r,x:()=>t});var n=e(6540);const i={},l=n.createContext(i);function r(s){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function t(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:r(s.components),n.createElement(l.Provider,{value:a},s.children)}},9630:(s,a,e)=>{e.d(a,{A:()=>r});var n=e(6540),i=e(4848);const{useState:l}=n,r=s=>{let{text:a}=s;const[e,n]=l(!1);return(0,i.jsx)("span",{onClick:()=>n(!e),className:"react-spoiler-"+(e?"shown":"hidden"),children:a})}}}]);