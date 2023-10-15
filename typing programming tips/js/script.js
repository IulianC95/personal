let startTime;
let interval;
const testArea = document.getElementById('testArea');
const wordCount = document.getElementById('wordCount');
const timer = document.getElementById('timer');
const sampleTextDiv = document.getElementById('sampleText');

const texts = {
  html: [
    'Un element HTML este format din continut, taguri de inchidere si deschidere.',
    'Un document HTML este format din elementele head si body, imbracate in elementul html.',
    'Exemple de elemente de tip block sunt: <div>, <section>, <form>, <ul>, <ol>, <table>, <article>, <nav>, <h1>-<h6>.',
    'Exemple de elemente de tip inline sunt: <a>, <img>, <span>, <button>.',
    'POST si GET sunt metode (sau verbe http) prin care se transmite informatia din formulare catre URL-ul specificat.',
    'Input-ul checkbox genereaza o casuta de bifat si functioneaza bine cu elementul label, fiind legate prin atributul for.',
    'Input-ul radio este similar cu checkbox, dar atunci cand ele formeaza un radio group, doar unul poate fi bifat.',
    'Elementul select genereaza o lista dropdown cu valori (elemente de tip option).',
    'Textarea este un element de formular care permite introducerea unei cantitati de text pe mai multe randuri.',
    '<header> este un element semantic de tip block ce delimiteaza si poate contine informatie cu rol de antent',
    '<footer> este un element semantic de tip block ce marcheaza subsolul sectiunii parinte (elemente legate de continutul principal dar nu esentiale)',
    '<aside> este un element semantic de tip block ce delimiteaza continut care este legat de continutul principal in mod tangential (exemplu: linkuri spre articole similare).',
    '<main> este un element semantic de tip block ce delimiteaza continutul principal al unui document si poate exista o singura data per document',
    '<nav> este un element semantic de tip block folosit pentru delimitarea navigatiei unui document (meniuri, grupuri de butoane etc.)',
    'Modurile prin care se poate adauga cod CSS in HTML: fisier extern (elementul <link>); elementul <style> (in mod tipic se adauga in elementul head) si inline (ca atribut - style- al oricarui element).',
    'CDN (Content Delivery Network): server specializat care serveste resurse statice (imagini, video, text). Pot fi referentiate si ca Edge servers.',
    'Atributul target cu valoarea _blank pe o ancora va instrui browserul sa deschida acea pagina intr-un tab nou.',
    'Un element ul poate contine doar elemente li ca si descendenti directi',
    'Un element select poate contine doar elemente option sau optgroup ca descendenti directi',
    'Metoda POST va trimite informatie in corpul requestului iar GET va adauga informatia la URL',
    'URL inseamna Uniform Resource Locator',
    'Elementul <link> este folosit pentru a include fisierul CSS extern in documentul HTML.',
    'Elementul <meta> ofera metadata despre documentul HTML.',
    'Elementul <base> specifica URL-ul de baza pentru toate URL-urile relative din pagina.',
    'Elementul <script> este folosit pentru a include cod JavaScript in pagina HTML.',
    'Doctype declara tipul de document si versiunea HTML.',
    'Elementul <blockquote> este folosit pentru a afisa citate lungi.',
    'Elementul <q> este folosit pentru a afisa citate scurte.',
    'Elementul <abbr> reprezinta o abreviere sau un acronim.',
    'Elementul <cite> defineste titlul unei opere creative.',
    'Elementul <dfn> defineste un termen.',
    'Elementul <address> ofera informatii de contact pentru document sau o sectiune a acestuia.',
    'Elementul <code> afiseaza text cu font monospace, util pentru cod.',
    'Elementul <samp> este folosit pentru a afisa esantioane de cod.',
    'Elementul <kbd> reprezinta intrarea de la tastatura.',
    'Elementul <var> reprezinta numele unei variabile in expresii matematice sau in cod.',
    'Elementul <time> reprezinta timpul sau o data.',
    'Elementul <mark> evidentiaza text in context.',
    'Elementul <bdi> izoleaza o parte din text care ar putea fi formatata intr-un mod diferit de textul inconjurator.',
    'Elementul <bdo> suprascrie directia textului.',
    'Elementul <ruby> reprezinta text Ruby pentru marcare fonetica sau explicativa.',
    'Elementul <rt> ofera explicatii sau pronuntii pentru caracterele din textul Ruby.',
    'Elementul <rp> ofera paranteze pentru navigatoarele care nu suporta Ruby.',
    'Elementul <data> leaga un continut cu o masina-legibila reprezentata a acestuia.',
    'Elementul <wbr> sugereaza un punct de rupere optional intr-un text lung.',
    'Elementul <span> este un container inline folosit pentru styling.',
    'Elementul <i> reprezinta un text in cursiva pentru accentuare.',
    'Elementul <b> reprezinta un text ingrosat pentru accentuare.',
    'Elementul <strong> indica importanta unui text.',
    'Elementul <em> pune accent pe un text.',
    'Elementul <small> micsoreaza textul pentru a indica note de subsol sau comentarii.',
    'Elementul <ins> indica text care a fost introdus intr-un document.',
    'Elementul <del> indica text care a fost sters dintr-un document.',
    'Elementul <s> afiseaza text care nu mai este relevant sau corect.',
    'Elementul <u> subliniaza text pentru stilizare.',
    'Elementul <sup> afiseaza text sau numere ca exponent.',
    'Elementul <sub> afiseaza text sau numere ca indice.',
    'Elementul <caption> ofera un titlu pentru elementul <table>.',
    'Elementul <colgroup> grupeaza un set de coloane intr-un tabel HTML.',
    'Elementul <col> seteaza proprietatile pentru o coloana intr-un tabel.',
    'Elementul <thead> grupeaza header-ul intr-un tabel HTML.',
    'Elementul <tbody> grupeaza corpul intr-un tabel HTML.',
    'Elementul <tfoot> grupeaza footer-ul intr-un tabel HTML.',
    'Elementul <figure> marcheaza continutul care este referentiat din textul principal.',
    'Elementul <figcaption> ofera o legenda pentru <figure>.',
    'Elementul <dialog> reprezinta o cutie de dialog sau o fereastra.',
    'Elementul <menu> reprezinta o lista de comenzi.',
    'Elementul <menuitem> reprezinta un element intr-un meniu.',
    'Elementul <summary> ofera un rezumat vizibil pentru <details>.',
    'Elementul <details> creeaza un widget interactiv care ascunde sau afiseaza informatii suplimentare.',
    'Elementul <progress> reprezinta progresul unei operatiuni.',
    'Elementul <meter> masoara valoarea scalar intr-un interval cunoscut.',
    'Elementul <fieldset> grupeaza elemente intr-un formular HTML.',
    'Elementul <legend> ofera un titlu pentru <fieldset>.',
    'Elementul <datalist> contine o lista de optiuni pentru input-uri.',
    'Elementul <keygen> genereaza o pereche de chei publica si privata.',
    'Elementul <output> reprezinta rezultatul unei expresii sau calcul.',
    'Elementul <slot> este un placeholder intr-un template web pentru continutul injectat.',
    'Elementul <template> contine continutul care nu este afisat pana nu este instantiat.',
    'Elementul <picture> contine surse de imagine pentru elementul <img>.',
    'Elementul <source> specifica resurse media multiple pentru <audio> si <video>.',
    'Elementul <track> furnizeaza piste text pentru <video> si <audio>.',
    "Atributul 'alt' ofera text alternativ pentru elementele <img>.",
    "Atributul 'href' specifica destinatia unei legaturi.",
    "Atributul 'src' specifica sursa pentru elementele <img>, <audio>, si <video>.",
    "Atributul 'disabled' dezactiveaza un element de formular.",
    "Atributul 'readonly' seteaza un element de formular ca doar-citire.",
    "Atributul 'required' marcheaza un camp de formular ca necesar.",
    "Atributul 'placeholder' ofera un indiciu despre valoarea asteptata pentru un camp de formular.",
    "Atributul 'autocomplete' controleaza daca browserul ar trebui sa autocompleteze un camp de formular.",
    "Atributul 'autofocus' pune focusul pe un element cand pagina se incarca.",
    "Atributul 'multiple' permite selectarea mai multor valori pentru un camp de formular.",
    "Atributul 'spellcheck' activeaza sau dezactiveaza verificarea ortografica pentru un element.",
    "Atributul 'contenteditable' permite editarea continutului unui element.",
    "Atributul 'draggable' specifica daca un element poate fi trasat sau nu.",
    "Atributul 'hidden' ascunde un element de la afisare.",
    "Atributul 'tabindex' seteaza ordinea de navigare a elementelor prin tasta Tab.",
  ],
  css: [
    'In CSS, selectarea se face prin atribute speciale adaugate in markup, respectiv id si class.',
    'Un selector CSS poate fi compus atat din identificatori de clasa, atribut, cat si de id.',
    'Box model este reprezentarea tipica a elementelor dintr-un document si are 4 zone revelante: continut, padding, bordura si margini.',
    'Unitatile de masura pentru width si height, in CSS, sunt: px, em, %, vh, vw.',
    'Proprietatea padding controleaza spatiul ramas intre continut si bordura elementului.',
    'Proprietatea border manipuleaza culoarea, grosimea si stilul bordurii elementului. Border radius manipuleaza raza colturilor bordurii.',
    'Proprietatea margin manipuleaza zonele din afara bordurii elementului.',
    'box-sizing seteaza box modelul elementului: content-box (sistemul clasic - paddingul se aduna la cutie) si border-box (sistemul nou - contentul este redimensionat in functie de dimensiunile specificate pe cutie).',
    'Proprietatea position manipuleaza modul in care se pozitioneaza elementul in flowul documentului.',
    'Pozitionarea implicita este "static". Cand valoarea difera de static, elementul se va numi "pozitionat".',
    'Relative: elementul se va rupe din document flow, dar se va pozitiona relativ fata de pozitia pe care ar avea-o in mod normal.',
    'Absolute: elementul se va rupe complet din flow si se va pozitiona absolut fata de primul stramos pozitionat sau daca nu intalneste unul, fata de document.',
    'Fixed: elementul se va rupe din flow si va ramane pe ecran indiferent de pozitia scrollbarului.',
    'Stacking context este un model de ordonare pe axa "z" a cutiilor care s-ar putea suprapune din diverse motive.',
    'Valorile posibile pentru proprietatea display: block, inline-block, flex, inline-flex, grid, inline-grid.',
    'Proprietatea float scoate elementul din flowul normal al paginii si are ca valori posibile: left, right si none.',
    'Transformarile CSS sunt modificari vizuale ale elementului randat in document, create prin proprietatea speciala transform.',
    'Combinatorii sunt simboluri speciale (>, +, ~, inclusiv spatiul) folosite pentru a crea selectori avansati, facand referinta la relatia dintre elemente (descendenta sau adiacenta)',
    'Specificitatea este un mecanism prin care browserul decide declaratiile carui selector sunt aplicate pe un element in functie de cat de specific este selectorul respectiv.',
    'Mostenirea: anumite proprietati setate pe un element parinte, se vor aplica si pe descendentii directi si indirecti ai acestuia (daca nu exista declaratii venite din reguli cu selectori mai specifici pe acestia).',
    'Alinierea intr-un grid de CSS se face intre liniile gridului si nu bazat pe randuri si coloane.',
    'Un PWA (Progressive Web App) este un website care arata si se comporta ca o aplicatie de mobil.',
    'npm este un package manager pentru node.js, iar pachetele se instaleaza folosind comanda npm install nume_pachet',
    '@keyframes este un at-rule care specifica cadrele prin care trebuie sa treaca o animatie de CSS.',
    'Intr-un container de tip flex, descendentii directi ai acestuia vor deveni flex items si vor putea fi pozitionati printr-un mecanism mai avansat decat float sau position.',
    'Elementele unui flex container se vor alinia pe axa principala (main) si axa transversala (cross), nu se numesc x si y pentru ca flex container se poate roti.',
    'Pe axa principala a unui container flex se foloseste proprietatea justify-content, iar pe axa transversala se foloseste proprietatea align-items.',
    'Proprietatea align-self aliniaza individual un anume flex item pe axa transversala a cutiei flex. ',
    'flex-shrink / flex-grow se aplica pe flex items si specifica coeficientul cu care acestea trebuie sa se micsoreze / mareasca. ',
    'align-content aliniaza in mod similar cu align-items liniile unui container flex cu wrap',
    'CDN (Content Delivery Network) este un o retea de servere menite sa serveasca informatie pe web, cat mai apropiate de locatia fizica a utilizatorului.',
    "Proprietatea 'z-index' controleaza ordinea pe axa Z pentru elemente pozitionate.",
    "Proprietatea 'opacity' controleaza transparenta unui element.",
    "'text-align' controleaza alinierea orizontala a textului intr-un element.",
    "'line-height' seteaza inaltimea liniei de text.",
    "'letter-spacing' controleaza spatiul dintre caracterele de text.",
    "'word-spacing' controleaza spatiul dintre cuvinte in text.",
    "'text-transform' schimba cazul textului intr-un element.",
    "'text-decoration' adauga sau scoate decoratiuni de text ca subliniere, peste linie sau linie prin text.",
    "'text-shadow' adauga umbre la text.",
    "'font-family' specifica ce familie de fonturi sa fie folosita pentru text.",
    "'font-size' seteaza marimea fontului.",
    "'font-weight' controleaza grosimea caracterelor textului.",
    "'font-style' seteaza stilul fontului, cum ar fi italic sau normal.",
    "'list-style' seteaza stilul pentru liste ordonate si neordonate.",
    "'list-style-type' seteaza tipul de marker pentru liste.",
    "'list-style-position' seteaza pozitia marker-ului in liste.",
    "'list-style-image' foloseste o imagine ca marker pentru lista.",
    "'column-count' imparte continutul unui element in mai multe coloane.",
    "'column-gap' seteaza spatiul intre coloane.",
    "'column-rule' seteaza o linie intre coloane.",
    "'transform' permite transformari 2D sau 3D ale unui element.",
    "'transition' controleaza trecerea lenta intre doua stari ale unui element.",
    "'animation' aplica animatii la elemente.",
    "'media query' permite aplicarea de stiluri CSS in functie de anumite conditii, cum ar fi latimea ecranului.",
    "'visibility' seteaza daca un element este vizibil sau nu.",
    "'cursor' seteaza tipul cursorului la trecerea peste un element.",
    "'pointer-events' seteaza daca un element raspunde sau nu la evenimente de pointer.",
    "'clip-path' creeaza o zona de vizualizare a unui element.",
    "'mask' aplica o masca peste un element.",
    "'object-fit' specifica cum o imagine sau video sa se potriveasca intr-un element.",
    "'filter' aplica efecte grafice la un element, cum ar fi blur sau saturatie.",
    "'backdrop-filter' aplica efecte grafice la zona din spatele unui element.",
    "'counter-reset' si 'counter-increment' permit crearea de contoare pentru generarea de numere sau alte valori pentru elemente.",
    "'will-change' ofera indicii browserului despre ce proprietati CSS ale unui element se vor schimba in viitor pentru optimizarea performantei.",
    "'contain' indica daca un element si continutul sau sunt independente de restul arborescentei DOM pentru optimizarea performantei.",
    "'mix-blend-mode' descrie cum continutul unui element ar trebui sa se amestece cu continutul din spatele acestuia.",
    "'isolation' seteaza un element ca izolat, creand un nou stacking context.",
    "'perspective' seteaza o perspectiva pentru o scena 3D.",
    "'backface-visibility' seteaza daca partea din spate a unui element este vizibila sau nu atunci cand este rotit.",
    "'resize' controleaza daca si cum un element poate fi redimensionat de utilizatori.",
    "'tab-size' seteaza numarul de spatii de afisat pentru caracterele tab intr-un element.",
    "'widows' si 'orphans' controleaza comportamentul randurilor la inceputul si sfarsitul blocurilor de text in caz de rupere a paginii.",
    "'text-overflow' indica ce se intampla cand textul iese in afara unui element bloc cu supradenivelare ascunsa.",
    "'white-space' seteaza cum spatii albe sunt tratate.",
    "'word-break' seteaza cum se rup cuvintele la sfarsitul liniei.",
    "'word-wrap' seteaza daca cuvintele pot fi rupte pentru a preveni supradenivelarea.",
  ], 
   'js': [
    'Tipurile de date primitive in JavaScript sunt String, Number si Boolean.',
    'JavaScript nu are decat tipul Number pentru a reprezenta orice fel numar.',
    'In JavaScript obiectele se transmit prin referinta si nu prin valoare.',
    'Exista trei moduri prin care se poate adauga cod JavaScript in HTML: fisier extern, intern, cu elementul <script> si inline, cu event handlers.',
    'Local scope: variabilele si functiile declarate in interiorul unei functii pot fi accesate doar in interiorul ei.',
    'Daca o variabila este declarata in contextul global, aceasta poate fi accesata de oriunde din aplicatie.',
    'In contextul programarii clasice,"this" este folosit pentru a accesa instanta curenta.',
    'IIFE / SIAF (Immediately Invoked Function Expression) - o functie care ruleaza imediat ce este definita, de obicei anonima (nu are denumire).',
    'Operatorul == reprezinta egalitatea toleranta (type coercion), in timp ce === verifica atat egalitatea cat si tipul de date folosit (valorile trebuie sa fie de acelasi tip).  ',
    'Scope-ul (contextul) in JS determina accesibilitatea variabilelor, obiectelor si functiilor intr-o anumita parte a codului - global scope si local scope.',
    'Rezultatul operatiunii cu operatori booleni este tot o valoare booleana.',
    'Obiectele pot fi literale (folosite la structuri de date sau la configurari) sau instante (returnate de constructorul unei clase).',
    'Hardcodare - a atribui o valoare unei variabile direct din cod, fara a fi solicitata de la un user, scoasa dintr-o baza de date sau preluata dintr-un API.',
    'O expresie in JavaScript este orice combinatie de variabile, operatori, alte expresii care evalueaza la o singura valoare.',
    'Blocul if este compus dintr-un bloc logic in care se folosesc una sau mai multe conditii.',
    'Bucla for este un statement care repeta instructiuni, in functie de o variabila care se incrementeaza la fiecare iteratie.',
    'Array.forEach() este o metoda iterativa care ruleaza pe arrayuri, pentru fiecare element din array executa o functie callback.',
    'In cazul forEach(), keywordurile continue si break nu functioneaza.',
    'Argumentele callbackului metodei Array.forEach() sunt elementul curent, indexu curent si o referinta la arrayul initial.',
    'Object.keys() este o metoda care returneaza un array cu numele cheilor unui obiect.',
    'Functiile sunt obiecte reprezentate prin blocuri de cod unitare cat mai specifice ce pot fi refolosite si parametrizate.',
    'Functiile pot returna o valoare prin keywordul return care de asemenea opreste complet executia acestora.',
    'Atunci cand functiile sunt proprietati ale obiectelor, ele se numesc metode.',
    "Bracket notation este metoda de a accesa elementele unui array dupa index (arr[2]) sau proprietatile unui obiect dupa numele lor reprezentat ca string (myObj['myProp'])",
    'O functie anonima poate fi executata, dar nu are un nume, ea sa poate folosi pe post de callback pentru diferite metode.',
    'O functie overloaded poate rula alte operatiuni in functie de numarul (sau tipul) argumentelor pe care le primeste.',
    'BOM (Browser Object Model) este o colectie ierarhica de obiecte care contin metode si proprietati asociate cu browserul in sine',
    'Metodele .querySelector si .querySelectorAll primesc un selector identic cu cei din CSS.',
    'Programarea clasica este programarea bazata pe clase (se considera class based)',
    'Programarea orientata pe obiecte (OOP - Object Oriented Programming) este centrata pe notiuna de clase si instante (in JavaScript sunt obiecte simple).',
    'Cele 4 principii ale OOP sunt: encapsulation, inheritance, polymorphism si abstraction.',
    'JavaScript este un limbaj bazat pe prototipuri (fiecare obiect are un prototip).',
    'Prototype chain poate fi vazut ca mecanismul "real" de mostenire din JavaScript, fiind prototype based, fiecare obiect are o proprietate __proto__ prin care poate mosteni de la alte obiecte mai generice.',
    'Method chaining este o tehnica in programarea cu obiecte prin care fiecare metoda a unui obiect sau a unei instante returneaza ori obiectul this, ori un alt obiect.',
    'DOM (Document Object Model) permite JavaScript sa interactioneze cu elementele documentului incarcat in browser.',
    'Spread operator (...) copiaza (shallow copy) elementele dintr-un array sau obiect total sau partial, intr-un alt array sau obiect.',
    'Variable look-up este procesul prin care parserul verifica daca in contextul local (curent) are o anumita variabila accesibila, iar daca nu urca in sus in contexte, pana ajunge in cel global.Obiectele in JavaScript pot fi definite ca obiecte literale, specificand proprietatile prin cheie si valoare; sau pot fi instantiate din anumite clase.',
    'JavaScript fiind orientat pe prototipuri, isi bazeaza mosternirea pe conceptul de prototype chain, in care fiecare are obiect are o proprietate numita prototype (__proto__) in care exista o referinta la obiectul de la care mosteneste informatii (proprietati sau metode)',
    'JSON (JavaScript Object Notation) este un format bazat pe sintaxa obiectului literal din JavaScript cu anumite restrictii, care permite stocarea de date intr-un format text, usor interpretabil de catre JS.',
    'Diferenta dintr-o metoda mutating si o metoda non-mutating este ca cea mutating altereaza setul de date pe care a fost rulata iar cea non-mutating ne da un shalow copy, rupand astfel referinta cu setul de date original.',
    'Diferenta dintre operatorul == si === este ca == verifica valoarea (facand type coercion daca este necesar) iar === verifica si tipul de date al operanzi.',
    'Un arrow function este o functie care nu se defineste prin function keyword; iar "this" in interiorul sau este o referinta spre contextul imediat de deasupra.',
    'Function functions sunt "hoisted" ceea ce inseamna ca ele vor fi valabile peste tot in contextul in care au fost definite, inclusiv daca sunt chemate deasupra liniei la care au fost definite.',
    'ES6 Classes este "sintatic sugar" peste o tehnica de JavaScript prin care se poate simula programarea orientata pe obiecte asa cum este ea intalnita in limbaje precum C++ sau Java sau C#.',
    'Callbackul este o functie care este executata atunci cand in executia programului are loc o anumita actiune sau eveniment.',
    'Event Delegation este o tehnica prin care un event listener (handler) este atasat pe un element parinte sau stramos al altor elemente de pe care vrem sa preluam si ascultam evenimente.',
    'Minificarea este un proces prin care codul (CSS, HTML, JS) este pregatit pentru a fi servit de pe un server web, prin eliminarea spatiilor, punctuatiei redundante sau redenumirea anumitor variabile pentru a avea nume mai scurte.',
    'In sintaxa JavaScript de ES6+ constructorul este metoda care este apelata atunci cand se instantiaza un obiect din acea clasa.',
    'Metoda event.preventDefault poate fi folosita pentru a preveni comportamentul implicit al unui element. Spre exemplu poate preveni formularele de a trimite informatii prin metoda implicita a browserului sau poate preveni navigarea la click pe ancora.',
    'Operatorul spread (...) poate fi folosit pentru a copia (shallow) elementele unui obiect (implicit unui array).',
    'Tipurile de date din JavaScript sunt Number, String, Boolean, Object (Array - e tot obiect), null, undefined, Symbol',
    'Metoda Array.push() poate fi folosita pentru a adauga un element la finalul unui array; este o operatiune mutating care altereaza arrayul in sine si nu creeaza unul nou.',
    'Keywordul continue (valabil in bucle - for, while, do while) va obliga bucla sa sara la urmatoarea iteratie.',
    'Keywordul break (valabile in bucle -for, while, do while si declaratia switch) va opri complet bucla si va continua executia programului, sau va opri cascada din switch.',
    'Asincronismul in JavaScript poate fi gestionat prin callbacks, Promises sau async/await.',
    'Node.js permite rularea codului JavaScript in afara browserului.',
    'API-urile (Application Programming Interfaces) permit interactiunea cu alte servicii web sau baze de date.',
    'Metoda Array.map() creeaza un nou array aplicand o functie pe fiecare element al array-ului initial.',
    'Metoda Array.filter() creeaza un nou array cu toate elementele care trec o anumita conditie.',
    'Metoda Array.reduce() reduce array-ul la o singura valoare, procesand fiecare element cu o functie.',
    'Metoda Array.splice() modifica un array adaugand sau stergand elemente.',
    'localStorage si sessionStorage permit stocarea de date in browser.',
    'Event bubbling descrie modul in care evenimentele se propaga prin DOM.',
    'Debounce si Throttle sunt tehnici de optimizare pentru evenimente frecvente ca scroll sau resize.',
    'CORS (Cross-Origin Resource Sharing) este un mecanism care permite sau refuza resurse web sa interacioneze cu resurse de pe alte domenii.',
    'JSON.parse() si JSON.stringify() permit conversia intre obiecte JavaScript si string-uri JSON.',
    'Metodele Array.indexOf() si Array.lastIndexOf() returneaza pozitia primului/ultimului element gasit in array.',
    'Metoda Array.find() returneaza primul element care indeplineste o conditie data.',
    'Set si Map sunt structuri de date introduse in ES6.',
    'Metoda Array.concat() combina doua sau mai multe array-uri intr-unul nou.',
    'Array.isArray() verifica daca o variabila este un array.',
    'Metoda String.replace() inlocuieste un substring cu un altul intr-un string.',
    'Metoda String.split() imparte un string intr-un array de substring-uri.',
    'Metoda String.join() combina un array de string-uri intr-un singur string.',
    'Metoda String.trim() elimina spatii albe de la inceputul si sfarsitul unui string.',
    'Metoda Math.random() genereaza un numar aleatoriu intre 0 si 1.',
    'Metoda Math.round() rotunjeste un numar la cel mai apropiat intreg.',
    'Metoda Math.floor() rotunjeste un numar in jos la cel mai apropiat intreg.',
    'Metoda Math.ceil() rotunjeste un numar in sus la cel mai apropiat intreg.',
    'Metoda Date.now() returneaza numarul de milisecunde de la 1 ianuarie 1970.',
    'Web Workers permit rularea de script-uri in background, fara a bloca thread-ul principal.',
    'Fetch API furnizeaza o modalitate moderna de a face request-uri HTTP.',
    'Metoda Object.assign() copiaza valorile tuturor proprietatilor enumerabile din unul sau mai multe obiecte sursa intr-un obiect tinta.',
    'Metoda Object.keys() returneaza un array cu numele tuturor proprietatilor enumerabile ale unui obiect.',
    'Metoda Object.values() returneaza un array cu valorile tuturor proprietatilor enumerabile ale unui obiect.',
    'Destructuring assignment permite extragerea datelor din array-uri sau obiecte intr-un mod concis.',
    'Template literals permit interpolarea de string-uri folosind backticks si expresii intre ${}.',
    "Arrow functions ofera o sintaxa mai concisa pentru declararea functiilor, dar nu au propriul 'this'.",
    "Metoda .bind() creeaza o noua functie care are 'this' setat la valoarea data.",
    "Metoda .call() apeleaza o functie cu o valoare data pentru 'this' si argumente separate prin virgule.",
    "Metoda .apply() apeleaza o functie cu o valoare data pentru 'this' si un array de argumente.",
    'DOM traversal se refera la actiunea de a parcurge arborele DOM pentru a gasi anumite elemente sau noduri.',
    'Metoda Element.classList permite manipularea claselor unui element DOM.',
    'Metoda Element.setAttribute() seteaza valoarea unui atribut pe un element DOM.',
    'Metoda Element.getAttribute() obtine valoarea unui atribut de pe un element DOM.',
    'Metoda Element.removeAttribute() elimina un atribut de pe un element DOM.',
    'Metoda Element.appendChild() adauga un nod copil la un element parinte.',
    'Metoda Element.removeChild() elimina un nod copil dintr-un element parinte.',
    'Metoda Element.replaceChild() inlocuieste un nod copil intr-un element parinte cu un alt nod.',
    'Metoda Element.cloneNode() creeaza o copie a unui element DOM.',
    'Metoda Element.insertBefore() insereaza un nod inainte de un nod copil specificat intr-un element parinte.',
       ],
  'php': [
    'In PHP, variabilele incep cu simbolul dolar ($).',
    'PHP suporta tipuri de date ca int, float, string si array.',
    'Comentariile in PHP pot incepe cu // sau /* */ pentru comentarii pe mai multe linii.',
    'In PHP, functia echo este folosita pentru a afisa date pe ecran.',
    'Operatorul de concatenare in PHP este punctul (.).',
    'Functia date() in PHP este folosita pentru a obtine data si ora curente.',
    'In PHP, $_GET este un array global folosit pentru a colecta date dintr-un formular HTML cu metoda GET.',
    '$_POST este un array global in PHP folosit pentru a colecta date dintr-un formular HTML cu metoda POST.',
    'In PHP, functia isset() verifica daca o variabila este setata si nu este NULL.',
    'Functia empty() in PHP verifica daca o variabila este goala.',
    'In PHP, functia die() opreste scriptul si afiseaza un mesaj.',
    'Functia strlen() returneaza lungimea unui sir de caractere.',
    'In PHP, functia str_replace() inlocuieste un sir cu un alt sir intr-un text.',
    'Functia count() in PHP este folosita pentru a numara elementele unui array.',
    'In PHP, functia sort() este folosita pentru a sorta un array.',
    'Functia json_encode() in PHP este folosita pentru a codifica o valoare la JSON.',
    'In PHP, functia json_decode() este folosita pentru a decodifica un sir JSON.',
    'Functia var_dump() afiseaza informatii despre o variabila, inclusiv tipul si valoarea.',
    'In PHP, operatorul === verifica egalitatea si tipul de date.',
    'Functia is_array() verifica daca o variabila este un array.',
    'In PHP, functia implode() converteste un array intr-un sir de caractere.',
    'Functia explode() in PHP este folosita pentru a diviza un sir in functie de un delimitator.',
    'In PHP, functia file_get_contents() citeste un fisier intr-un sir de caractere.',
    'Functia file_put_contents() scrie date intr-un fisier.',
    'In PHP, functia header() este folosita pentru a trimite un header HTTP brut.',
    'Functia mail() in PHP este folosita pentru a trimite email.',
    'In PHP, functia filter_var() filtreaza o variabila cu un filtru specificat.',
    'Functia preg_match() executa o cautare cu expresii regulate.',
    'In PHP, functia glob() returneaza un array cu numele fisierelor care corespund unui model.',
    'Functia is_numeric() verifica daca o variabila este un numar sau un sir numeric.',
    'In PHP, functia round() rotunjeste un numar la cele mai apropiate zecimale.',
    'Functia rand() genereaza un numar intreg aleatoriu.',
    'In PHP, functia gettype() returneaza tipul de date al unei variabile.',
    'Functia settype() seteaza tipul de date al unei variabile.',
    'In PHP, functia intval() returneaza valoarea intreaga a unei variabile.',
    'Functia floatval() returneaza valoarea in virgula mobila a unei variabile.',
    'In PHP, functia strval() returneaza valoarea sir de caractere a unei variabile.',
    'Functia is_string() verifica daca o variabila este un sir de caractere.',
    'In PHP, functia is_bool() verifica daca o variabila este de tip boolean.',
    'Functia is_object() verifica daca o variabila este un obiect.',
    'In PHP, functia unset() distruge o variabila specificata.',
    'Functia is_null() verifica daca o variabila este NULL.',
    'Functia echo este folosita pentru a afisa date.',
    'Functia isset() verifica daca o variabila a fost setata.',
    'In PHP, $_GET colecteaza date trimise prin URL.',
    '$_POST colecteaza date trimise prin HTTP POST.',
    'Functia die() opreste scriptul daca intampina o eroare.',
    'Operatorul .= este folosit pentru concatenare.',
    'In PHP, functia empty() verifica daca o variabila este goala.',
    'Functia header() este folosita pentru a trimite headere HTTP.',
    'In PHP, metoda POST nu adauga date la URL.',
    'Functia file_get_contents() citeste un fisier intr-un sir.',
    'Functia file_put_contents() scrie un sir intr-un fisier.',
    'In PHP, functia json_encode() converteaza un array in JSON.',
    'Functia json_decode() converteaza un JSON intr-un array sau obiect.',
    'In PHP, sesiunile pastreaza date de utilizator pe multiple pagini.',
    'Functia session_start() incepe o noua sesiune sau continua una existenta.',
    'In PHP, functia date() formateaza o data/ora locala.',
    'Functia time() returneaza timpul actual ca timestamp Unix.',
    'In PHP, functia mktime() returneaza un timestamp Unix pentru o data.',
    'Functia strtotime() parseaza orice descriere a datei textuale in engleza in timestamp Unix.',
    'In PHP, functia number_format() formateaza numere ca siruri de caractere.',
    'Functia rand() genereaza un numar intreg aleator.',
    'In PHP, functia ceil() returneaza cel mai mic intreg care este mai mare sau egal cu un numar.',
    'Functia floor() returneaza cel mai mare intreg care este mai mic sau egal cu un numar.',
    'In PHP, functia round() rotunjeste un numar la cel mai apropiat intreg.',
    'Functia pi() returneaza valoarea lui pi.',
    'In PHP, functia sqrt() returneaza radacina patrata a unui numar.',
    'Functia strlen() returneaza lungimea unui sir de caractere.',
    'In PHP, functia str_word_count() numara cuvintele dintr-un sir.',
    'Functia strrev() inverseaza un sir.',
    'In PHP, functia ucwords() converteste primul caracter al fiecarui cuvant intr-un sir la majuscula.',
    'Functia lcfirst() converteste primul caracter al unui sir la minuscula.',
    'In PHP, functia strip_tags() elimina tagurile HTML si PHP dintr-un sir.',
    'Functia addslashes() adauga backslashes inainte de caracterele speciale dintr-un sir.',
    'In PHP, functia strcmp() compara doua siruri.',
    'Functia md5() calculeaza hash-ul MD5 al unui sir.',
      ],
  'sql': [
    'In MySQL, comanda SELECT este folosita pentru a interoga o baza de date si a recupera datele dorite.',
    'Comanda INSERT INTO adauga noi randuri intr-o tabela din baza de date.',
    'In MySQL, cheia primara este o coloana care identifica in mod unic fiecare inregistrare din tabel.',
    'Comanda UPDATE modifica datele existente dintr-un tabel.',
    'In MySQL, comanda DELETE este folosita pentru a sterge inregistrari dintr-o tabela.',
    'Clauza WHERE este folosita pentru a filtra inregistrari.',
    'In MySQL, JOIN este folosit pentru a combina randuri din doua sau mai multe tabele.',
    'Comanda CREATE TABLE este folosita pentru a crea o noua tabela.',
    'In MySQL, functia COUNT() returneaza numarul de randuri dintr-un set de rezultate.',
    'Comanda DROP TABLE sterge o tabela si toate datele sale.',
    'In MySQL, INDEX este folosit pentru a crea un index pe una sau mai multe coloane.',
    'Comanda ALTER TABLE este folosita pentru a adauga, sterge sau modifica coloane intr-un tabel existent.',
    'In MySQL, clauza GROUP BY este folosita impreuna cu functii agregate pentru a grupa rezultatele in functie de una sau mai multe coloane.',
    'Functia MAX() returneaza valoarea maxima dintr-o coloana numerica.',
    'In MySQL, functia MIN() returneaza valoarea minima dintr-o coloana numerica.',
    'Comanda SHOW DATABASES listeaza toate bazele de date disponibile pe server.',
    'In MySQL, functia SUM() returneaza suma unei coloane numerice.',
    'Comanda GRANT acorda permisiuni specifice utilizatorilor asupra bazei de date.',
    'In MySQL, clauza HAVING este folosita pentru a filtra rezultatele unei interogari in functie de o conditie.',
    'Functia AVG() calculeaza media valorilor dintr-o coloana numerica.',
    'In MySQL, comanda RENAME TABLE redenumeste o tabela.',
    'Comanda SHOW TABLES listeaza toate tabelele dintr-o baza de date specifica.',
    'In MySQL, functia CONCAT() este folosita pentru a concatena doua sau mai multe siruri de caractere.',
    'Comanda REVOKE anuleaza permisiunile acordate utilizatorilor asupra bazei de date.',
    'In MySQL, functia NOW() returneaza data si ora curente.',
    'Comanda CREATE DATABASE creeaza o noua baza de date.',
    'In MySQL, clauza LIMIT este folosita pentru a restrange numarul de randuri returnate de o interogare.',
    'Comanda BACKUP DATABASE creeaza o copie de siguranta a bazei de date.',
    'In MySQL, functia LENGTH() returneaza lungimea unui sir de caractere.',
    'Comanda RESTORE DATABASE restaureaza o baza de date dintr-o copie de siguranta.',
    'In MySQL, functia ROUND() rotunjeste un numar la un numar specific de zecimale.',
    'Comanda CREATE INDEX creeaza un index pe una sau mai multe coloane ale unei tabele.',
    'In MySQL, functia SUBSTRING() extrage o parte dintr-un sir de caractere.',
    'Comanda SHOW USERS listeaza toti utilizatorii de baza de date.',
    'In MySQL, functia ABS() returneaza valoarea absoluta a unui numar.',
    'Comanda TRUNCATE TABLE sterge toate randurile dintr-o tabela fara a sterge tabela insasi.',
    'In MySQL, functia RAND() genereaza un numar aleatoriu intre 0 si 1.',
    'Comanda DROP DATABASE sterge o baza de date.',
    'In MySQL, functia UCASE() transforma toate literele unui sir de caractere in majuscule.',
    'Comanda CHECK TABLE verifica integritatea unei tabele.',
    'In MySQL, functia LCASE() transforma toate literele unui sir de caractere in minuscule.',
    'Comanda ROLLBACK anuleaza orice modificare facuta in cadrul unei tranzactii.',
    'In MySQL, functia SQRT() calculeaza radacina patrata a unui numar.',
    'Comanda COMMIT valideaza toate modificarile facute in cadrul unei tranzactii.',
    'In MySQL, functia REPLACE() inlocuieste toate aparitiile unui sir intr-un alt sir.',
    'Comanda SHOW INDEX listeaza toate indicii unei tabele.',
    'In MySQL, functia MD5() calculeaza hash-ul MD5 al unui sir.',
    'Comanda CREATE USER creeaza un nou utilizator de baza de date.',
    'In MySQL, functia DATEDIFF() returneaza diferenta dintre doua date.',
    'Comanda SHOW GRANTS afiseaza permisiunile unui utilizator.',
    'SELECT este folosit pentru a extrage date dintr-o baza de date.',
    'UPDATE modifica datele existente intr-o baza de date.',
    'DELETE sterge date dintr-o baza de date.',
    'INSERT INTO adauga date noi intr-o baza de date.',
    'CREATE DATABASE creeaza o baza de date noua.',
    'ALTER DATABASE modifica o baza de date existenta.',
    'CREATE TABLE creeaza o tabela noua intr-o baza de date.',
    'ALTER TABLE modifica o tabela existenta.',
    'DROP TABLE sterge o tabela.',
    'CREATE INDEX creeaza un index pe una sau mai multe coloane.',
    'DROP INDEX sterge un index existent.',
    'SQL JOIN combina randuri din doua sau mai multe tabele.',
    'SQL INNER JOIN returneaza randuri care au valori comune in ambele tabele.',
    'SQL LEFT JOIN returneaza toate randurile din tabela din stanga, si randurile corespunzatoare din tabela din dreapta.',
    'SQL RIGHT JOIN returneaza toate randurile din tabela din dreapta, si randurile corespunzatoare din tabela din stanga.',
    'SQL FULL OUTER JOIN returneaza daca exista o potrivire in una dintre tabele.',
    'SQL UNION combina setul de rezultate al doua sau mai multe interogari SELECT.',
    'SQL GROUP BY grupa rezultatele pe una sau mai multe coloane.',
    'SQL ORDER BY ordoneaza rezultatele intr-o anumita ordine.',
    'SQL DISTINCT returneaza numai rezultate diferite.',
    'SQL WHERE filtreaza rezultatele pe baza unei conditii.',
    'SQL AND afiseaza un inregistrare daca toate conditiile specificate sunt adevarate.',
    'SQL OR afiseaza un inregistrare daca oricare dintre conditii sunt adevarate.',
    'SQL NOT afiseaza un inregistrare daca conditia(orile) nu sunt adevarate.',
    'SQL IN permite sa specifici multiple valori intr-o clauza WHERE.',
    'SQL BETWEEN afiseaza valori intre o anumita gama.',
    'SQL LIKE cauta un model specificat intr-o coloana.',
    'SQL NULL testeaza pentru valori NULL.',
    'SQL AS redenumeste o coloana sau o tabela folosind un alias.',
    'SQL HAVING filtreaza valori care rezulta dintr-o instructiune GROUP BY.',
    'SQL ANY returneaza true daca oricare dintre subinterogari returneaza true.',
    'SQL ALL returneaza true daca toate subinterogarile returneaza true.',
    'SQL EXISTS testeaza daca o subinterogare returneaza vreun rezultat.',
    'SQL SELECT INTO copiaza date dintr-o tabela intr-o noua tabela.',
    'SQL CASE creeaza o ramificare conditionala in interogarile SQL.',
    'SQL CONSTRAINT impune limite pe tipul de date din tabela.',
    'SQL UNIQUE specifica ca toate valorile dintr-o coloana trebuie sa fie diferite.',
    'SQL PRIMARY KEY reprezinta o cheie primara intr-o tabela SQL.',
    'SQL FOREIGN KEY reprezinta o cheie straina intr-o tabela SQL.',
    'SQL CHECK permite sa specifici o conditie ca toate valorile dintr-o coloana sa o indeplineasca.',
    'SQL DEFAULT specifica o valoare implicita atunci cand este creat un nou inregistrare.',
      ],
  'python': [
    'Python este un limbaj de programare interpretat, de nivel inalt.',
    'In Python, indentarea este folosita pentru a delimita blocurile de cod.',
    'Comentariile in Python incep cu simbolul #.',
    'Functia print() este folosita pentru a afisa date pe ecran.',
    'In Python, listele sunt colectii ordonate si modificabile.',
    'Tuplele sunt ca listele, dar nu pot fi modificate.',
    'In Python, seturile sunt colectii neordonate fara elemente duplicate.',
    'Dictionarele in Python stocheaza perechi cheie-valoare.',
    'In Python, operatorul == verifica egalitatea intre doua variabile.',
    'Functia len() returneaza numarul de elemente dintr-o colectie.',
    'In Python, functia type() returneaza tipul unei variabile.',
    'Functia str() converteste o variabila la tipul string.',
    'In Python, functia int() converteste o variabila la tipul int.',
    'Functia float() converteste o variabila la tipul float.',
    'In Python, metoda append() adauga un element la sfarsitul unei liste.',
    'Functia input() citeste un sir de la tastatura.',
    'In Python, metoda split() imparte un sir in functie de un delimitator.',
    'Functia range() genereaza o secventa de numere.',
    'In Python, bucla for este folosita pentru a parcurge o colectie.',
    'Bucla while se executa cat timp o conditie este adevarata.',
    'In Python, instructiunea break iese din bucla curenta.',
    'Instructiunea continue trece la urmatoarea iteratie a buclei.',
    'In Python, functia enumerate() returneaza un obiect enumerat.',
    'Functia map() aplica o functie la toate elementele unei colectii.',
    'In Python, functia filter() filtreaza elementele unei colectii.',
    'Functia lambda creeaza o functie anonima.',
    'In Python, functia zip() combina doua sau mai multe liste intr-o lista de tuple.',
    'Functia sorted() returneaza o lista sortata.',
    'In Python, metoda pop() sterge un element dintr-o lista.',
    'Functia del sterge un element sau o sectiune dintr-o lista.',
    'In Python, functia min() returneaza elementul minim dintr-o colectie.',
    'Functia max() returneaza elementul maxim dintr-o colectie.',
    'In Python, metoda count() numara aparitiile unui element intr-o lista.',
    'Functia sum() returneaza suma elementelor unei liste.',
    'In Python, metoda join() combina elementele unei liste intr-un sir.',
    'Functia reversed() inverseaza ordinea elementelor unei liste.',
    'In Python, functia all() verifica daca toate elementele unei colectii sunt adevarate.',
    'Functia any() verifica daca cel putin un element dintr-o colectie este adevarat.',
    'In Python, functia isinstance() verifica daca un obiect este o instanta a unei clase.',
    'Functia getattr() returneaza valoarea unui atribut al unui obiect.',
    'In Python, functia hasattr() verifica daca un obiect are un atribut specific.',
    'Functia setattr() seteaza valoarea unui atribut al unui obiect.',
    'In Python, functia delattr() sterge un atribut al unui obiect.',
    'Functia pow() returneaza valoarea lui x la puterea y.',
    'In Python, variabilele de tip global pot fi modificate folosind cuvantul cheie global.',
    'Functia repr() returneaza un sir ce reprezinta un obiect imprimabil.',
    'In Python, modulul math ofera functii matematice.',
    'Functia abs() returneaza valoarea absoluta a unui numar.',
    'In Python, modulul datetime ofera functii pentru manipularea datelor si timpului.',
    'Functia open() este folosita pentru a deschide fisiere.',
    'In Python, metoda read() citeste din fisier.',
    'Metoda write() scrie in fisier.',
    'In Python, metoda close() inchide fisierul.',
    'Functia os.remove() sterge un fisier.',
    'In Python, modulul re ofera suport pentru expresii regulate.',
    'Functia compile() compileaza o expresie regulata intr-un obiect expresie regulata.',
    'In Python, metoda search() cauta un model in sir.',
    'Metoda findall() returneaza toate aparitiile unui model din sir.',
    'In Python, metoda split() imparte sirul la fiecare aparitie a modelului.',
    'Metoda sub() inlocuieste un model cu un sir.',
    'In Python, cuvantul cheie yield este folosit in generatori.',
    'Functia next() returneaza urmatorul element dintr-un iterator.',
    'In Python, cuvantul cheie finally este folosit pentru a executa cod indiferent daca apare o exceptie sau nu.',
    'Functia iter() returneaza un iterator dintr-o colectie.',
    'In Python, cuvantul cheie assert este folosit pentru debugging.',
    'Functia globals() returneaza un dictionar care reprezinta tabela de simboluri globala.',
    'In Python, functia locals() returneaza un dictionar care reprezinta tabela de simboluri locala.',
    'Functia exec() executa codul Python dinamic.',
    'In Python, functia eval() evalueaza o expresie Python intr-un sir si returneaza rezultatul.',
    'Functia format() formateaza siruri de caractere.',
    'In Python, metoda isdigit() verifica daca toate caracterele din sir sunt cifre.',
    'Metoda isalpha() verifica daca toate caracterele din sir sunt litere.',
    'In Python, metoda isalnum() verifica daca toate caracterele din sir sunt alfanumerice.',
    'Metoda isspace() verifica daca toate caracterele din sir sunt spatii albe.',
    'In Python, metoda endswith() verifica daca sirul se termina cu un anumit sufix.',
    'Metoda startswith() verifica daca sirul incepe cu un anumit prefix.',
    'In Python, metoda replace() inlocuieste un model cu un alt model intr-un sir.',
    'Metoda swapcase() inverseaza toate literele dintr-un sir.',
    'In Python, metoda title() converteste primul caracter al fiecarui cuvant din sir la majuscula.',
      ]
};

let currentTexts = texts.html; 
let sampleText = '';

const keySound = new Howl({
  src: ['keyPressSound.mp3'],
});

document.querySelectorAll('.btns button').forEach((button) => {
  button.addEventListener('click', function () {
    currentTexts = texts[this.id];
    setRandomText();
  });
});

testArea.addEventListener('focus', function () {
  if (!startTime) {
    startTime = new Date().getTime();
    interval = setInterval(updateTimer, 1000);
  }
});

testArea.addEventListener('input', function () {
  const text = testArea.value;
  wordCount.textContent = text.split(/\s+/).length;

  // Redă sunetul de tastă
  keySound.play();

  checkWords(text);

  if (text.trim() === sampleText) {
    clearInterval(interval); // Oprește cronometrul

    const totalTime = (new Date().getTime() - startTime) / 1000;
    const totalWords = text.split(/\s+/).length;

    const wpm = calculateWPM(totalTime, totalWords);

    const playerName = prompt('Introduceți numele dvs. pentru leaderboard:');
    if (playerName) {
      addScoreToLeaderboard(playerName, wpm);
    }

    const isNext = confirm(
      `Felicitări! Ați completat textul corect.\nWPM: ${Math.round(
        wpm,
      )}\n\nDoriți să încercați un alt text?`,
    );
    if (isNext) {
      setRandomText();
      testArea.value = '';
      wordCount.textContent = '0';
      timer.textContent = '0';
      startTime = null;
      interval = null;
    }
  }
});

function updateTimer() {
  if (!startTime) return;

  const currentTime = new Date().getTime();
  const difference = (currentTime - startTime) / 1000;
  timer.textContent = Math.floor(difference);
}

function checkWords(inputText) {
  const cleanedInputText = inputText.replace(/\s+/g, ' ').trim();

  const words = sampleText.split(' ');
  const inputWords = cleanedInputText.split(' ');

  let matchedWordsLength = 0;

  for (let i = 0; i < inputWords.length; i++) {
    if (inputWords[i] && inputWords[i] === words[i]) {
      matchedWordsLength += words[i].length + 1; // +1 pentru spațiu
    } else {
      break;
    }
  }

  const remainingText = sampleText.substring(matchedWordsLength);
  sampleTextDiv.textContent = remainingText;
}

function calculateWPM(timeInSeconds, totalWords) {
  return (totalWords / timeInSeconds) * 60;
}

function calculateCPM(timeInSeconds, totalCharacters) {
  return (totalCharacters / timeInSeconds) * 60;
}

function setRandomText() {
  const randomIndex = Math.floor(Math.random() * currentTexts.length);
  sampleTextDiv.textContent = currentTexts[randomIndex];
  sampleText = currentTexts[randomIndex];
}

setRandomText();

function addScoreToLeaderboard(name, score) {
  fetch('/php/leaderboard.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `name=${name}&score=${score}`,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      displayLeaderboard();
    });
}

function displayLeaderboard() {
  fetch('/php/leaderboard.php')
    .then((response) => response.json())
    .then((data) => {
      const scoresList = document.getElementById('scoresList');
      scoresList.innerHTML = '';
      data.forEach((entry) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${entry.name}: ${Math.round(entry.score)} WPM`;
        scoresList.appendChild(listItem);
      });
    });
}

displayLeaderboard();
