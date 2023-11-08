const allQuestions = {
  javascript: [
    {
      question: "Ce reprezinta 'this' intr-un context de functie JavaScript?",
      answers: [
        { text: 'Refera intotdeauna la obiectul global', correct: false },
        {
          text: 'Refera la elementul HTML care a apelat functia',
          correct: false,
        },
        { text: 'Refera la obiectul care a invocat functia', correct: true },
        { text: 'Este o variabila care stocheaza o functie', correct: false },
      ],
    },
    {
      question:
        'Ce metoda JavaScript este folosita pentru a crea noi elemente HTML?',
      answers: [
        { text: 'document.createElement()', correct: true },
        { text: 'document.newElement()', correct: false },
        { text: 'document.addChild()', correct: false },
        { text: 'document.appendElement()', correct: false },
      ],
    },
    {
      question: 'Care sunt tipurile de date primitive in JavaScript',
      answers: [
        { text: 'String, Number si Boolean', correct: true },
        { text: 'newElement si addChild', correct: false },
        { text: 'appendElement si appendThis', correct: false },
        { text: 'Arrow functions', correct: false },
      ],
    },
    {
      question:
        'JavaScript are doar tipul ______ pentru a reprezenta orice fel de numar',
      answers: [
        { text: 'Boolean', correct: false },
        { text: 'Number', correct: true },
        { text: 'String', correct: false },
        { text: 'Math.PI', correct: false },
      ],
    },
    {
      question: 'In JavaScript obiectele se transmit prin ________',
      answers: [
        { text: 'Valoare', correct: false },
        { text: 'Array', correct: false },
        { text: 'Referinta', correct: true },
        { text: 'Functii', correct: false },
      ],
    },
    {
      question:
        'Care sunt modurile prin care se poate adauga cod JavaScript in HTML?',
      answers: [
        {
          text: 'Fisier extern, intern cu <script> si cu event handlers',
          correct: true,
        },
        { text: 'Fisier intern si inline in atributul style', correct: false },
        { text: 'Doar fisier exter', correct: false },
        { text: 'Doar cu event handlers', correct: false },
      ],
    },
    {
      question: 'Ce este Local scope?',
      answers: [
        { text: 'Este o metoda de a face debugg', correct: false },
        { text: 'O functie predefinita', correct: false },
        { text: 'Un framework JavaScript', correct: false },
        {
          text: 'Variabilele si functiile declarate in interiorul unei functii pot fi accesate doar in interiorul ei.',
          correct: true,
        },
      ],
    },
    {
      question:
        'Ce se intampla cu o variabila care este declarata in contextul global?',
      answers: [
        {
          text: 'Aceasta poate fi accesata doar din contextul local',
          correct: false,
        },
        {
          text: 'Aceasta poate fi accesata doar din contextul global',
          correct: false,
        },
        {
          text: 'Aceasta poate fi accesata de oriunde din aplicatie',
          correct: true,
        },
        { text: 'Aceasta nu poate fi accesata', correct: false },
      ],
    },
    {
      question:
        'Pentru ce este folosit "this" in contextul programarii clasice?',
      answers: [
        { text: 'Pentru a accesa codul HTML', correct: false },
        { text: 'Pentru a accesa instanta curenta', correct: true },
        { text: 'Pentru a bloca accesul la codul JavaScript', correct: false },
        { text: 'Pentru a accesa codul CSS', correct: false },
      ],
    },
    {
      question: 'Ce este IIFE / SIAF ?',
      answers: [
        {
          text: 'O functie care ruleaza imediat ce este definita',
          correct: true,
        },
        {
          text: 'O functie care trebuie sa aiba un nume neaparat',
          correct: false,
        },
        { text: 'O functie care nu poate avea un nume', correct: false },
        { text: 'O functie falsa', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta "==" ?',
      answers: [
        { text: 'Diferenta', correct: false },
        { text: 'O functie', correct: false },
        { text: 'Egalitate toleranta (type coercion)', correct: true },
        { text: 'O variabila', correct: false },
      ],
    },
    {
      question: 'Ce determina Scope-ul in JavaScript?',
      answers: [
        {
          text: 'Accesibilitatea variabilelor, obiectelor si functiilor intr-o anumita parte a codului',
          correct: true,
        },
        {
          text: 'Doar accesibilitatea variabilelor intr-o anumita parte a codului',
          correct: false,
        },
        {
          text: 'Doar accesibilitatea obiectelor intr-o anumita parte a codului',
          correct: false,
        },
        {
          text: 'Doar accesibilitatea functiilor intr-o anumita parte a codului',
          correct: false,
        },
      ],
    },
    {
      question:
        'Rezultatul operatiunii cu operatori booleni este o valoare _______',
      answers: [
        { text: 'Booleana', correct: true },
        { text: 'String', correct: false },
        { text: 'Number', correct: false },
        { text: 'Function', correct: false },
      ],
    },
    {
      question: 'Ce inseamna ca obiectele pot fi literale?',
      answers: [
        {
          text: 'Folosite la structuri de date sau la configurari',
          correct: true,
        },
        { text: 'Scrise doar cu litere', correct: false },
        { text: 'Returnate de constructorul unei clase', correct: false },
        { text: 'Scrise pentru literatura', correct: false },
      ],
    },
    {
      question: 'Ce inseamna "Hardcodare"?',
      answers: [
        { text: 'A cere valoarea variabilei de la user', correct: false },
        { text: 'A scrie cod greu', correct: false },
        {
          text: 'A atribui o valoare unei variabile direct din cod',
          correct: true,
        },
        { text: 'A avea un cod indescifrabil', correct: false },
      ],
    },
    {
      question: 'Ce este o expresie in JavaScript?',
      answers: [
        { text: 'O functie predefinita', correct: false },
        { text: 'O combinatie de variabile let', correct: false },
        { text: 'O combinatie de functii', correct: false },
        {
          text: 'Orice combinatie de variabile, operatori, alte expresii care evalueaza la o singura valoare',
          correct: true,
        },
      ],
    },
    {
      question:
        'Blocul "if" (in JavaScript) este compus dintr-un bloc logic in care se folosesc una sau mai multe ______',
      answers: [
        { text: 'Evenimente', correct: false },
        { text: 'Limbaje de programare', correct: false },
        { text: 'Conditii', correct: true },
        { text: 'DOM', correct: false },
      ],
    },
    {
      question: 'Ce face o buclă for în JavaScript?',
      answers: [
        {
          text: 'Execută o funcție de un număr nedefinit de ori',
          correct: false,
        },
        {
          text: 'Repetă instrucțiuni bazate pe o variabilă care se incrementează la fiecare iterație',
          correct: true,
        },
        { text: 'Iterează peste proprietățile unui obiect', correct: false },
        { text: 'Conectează la o bază de date', correct: false },
      ],
    },
    {
      question: 'Ce face metoda Array.forEach() în JavaScript?',
      answers: [
        { text: 'Sortează elementele unui array', correct: false },
        {
          text: 'Execută o funcție callback pentru fiecare element al array-ului',
          correct: true,
        },
        { text: 'Concatenează două array-uri', correct: false },
        { text: 'Filtrază elementele unui array', correct: false },
      ],
    },
    {
      question:
        'Pot fi folosite keyword-urile continue și break în cadrul metodei forEach() din JavaScript?',
      answers: [
        { text: 'Da, în orice caz', correct: false },
        { text: 'Doar continue', correct: false },
        { text: 'Doar break', correct: false },
        { text: 'Nu, acestea nu funcționează în forEach()', correct: true },
      ],
    },
    {
      question:
        'Care sunt argumentele callback-ului metodei Array.forEach() în JavaScript?',
      answers: [
        { text: 'Elementul curent și dimensiunea array-ului', correct: false },
        { text: 'Indexul curent și elementul curent', correct: false },
        {
          text: 'Elementul curent, indexul curent și o referință la array-ul inițial',
          correct: true,
        },
        { text: 'Valoarea maximă și minimă din array', correct: false },
      ],
    },
    {
      question: 'Ce returnează metoda Object.keys() în JavaScript?',
      answers: [
        { text: 'Un array cu valorile unui obiect', correct: false },
        { text: 'Un array cu numele cheilor unui obiect', correct: true },
        { text: 'Numărul de chei ale unui obiect', correct: false },
        { text: 'Cheia cu cea mai mare valoare din obiect', correct: false },
      ],
    },
    {
      question: 'Ce reprezintă funcțiile în JavaScript?',
      answers: [
        { text: 'Comenzi pentru compilator', correct: false },
        {
          text: 'Obiecte de tip bloc de cod care pot fi reutilizate și parametrizate',
          correct: true,
        },
        { text: 'Variabile utilizate pentru stocarea datelor', correct: false },
        { text: 'Instrucțiuni pentru cicluri', correct: false },
      ],
    },
    {
      question: 'Ce efect are keyword-ul return într-o funcție JavaScript?',
      answers: [
        {
          text: 'Redirectează utilizatorul pe o altă pagină web',
          correct: false,
        },
        { text: 'Inițializează o variabilă globală', correct: false },
        {
          text: 'Returnează o valoare din funcție și oprește executia funcției',
          correct: true,
        },
        { text: 'Afișează un mesaj de eroare', correct: false },
      ],
    },
    {
      question:
        'Cum se numesc funcțiile care sunt proprietăți ale obiectelor în JavaScript?',
      answers: [
        { text: 'Construcții', correct: false },
        { text: 'Prototipuri', correct: false },
        { text: 'Metode', correct: true },
        { text: 'Clase', correct: false },
      ],
    },
    {
      question: 'Ce este bracket notation în JavaScript?',
      answers: [
        { text: 'O metodă de a declara array-uri', correct: false },
        {
          text: 'O metodă de a accesa elementele unui array sau proprietățile unui obiect după nume',
          correct: true,
        },
        { text: 'O sintaxă pentru definirea obiectelor', correct: false },
        { text: 'Un operator matematic', correct: false },
      ],
    },
    {
      question: 'Ce este o funcție anonimă în JavaScript?',
      answers: [
        { text: 'O funcție care se autodistruge după apelare', correct: false },
        {
          text: 'O funcție care nu are un nume și poate fi utilizată ca callback',
          correct: true,
        },
        { text: 'O funcție care nu poate fi reutilizată', correct: false },
        {
          text: 'O funcție care returnează întotdeauna undefined',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce înseamnă că o funcție este "overloaded" în JavaScript?',
      answers: [
        { text: 'Funcția este suprascrisă de o altă funcție', correct: false },
        { text: 'Funcția conține prea mult cod', correct: false },
        {
          text: 'Funcția efectuează operațiuni diferite în funcție de argumentele primite',
          correct: true,
        },
        {
          text: 'Funcția este ineficientă și încetineste browserul',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce reprezintă BOM în contextul dezvoltării web?',
      answers: [
        {
          text: 'O colecție de obiecte asociate cu serverul web',
          correct: false,
        },
        {
          text: 'Un model de obiecte folosit pentru manipularea bazei de date',
          correct: false,
        },
        {
          text: 'Un set de reguli CSS pentru stilizarea paginilor web',
          correct: false,
        },
        {
          text: 'O colecție ierarhică de obiecte asociate cu browserul web',
          correct: true,
        },
      ],
    },
    {
      question:
        'Ce primesc metodele .querySelector și .querySelectorAll ca argument în JavaScript?',
      answers: [
        { text: 'O funcție callback', correct: false },
        { text: 'Un selector CSS', correct: true },
        { text: 'Un obiect JSON', correct: false },
        { text: 'O valoare numerică', correct: false },
      ],
    },
    {
      question: 'Ce reprezintă programarea clasică?',
      answers: [
        { text: 'Programarea fără a folosi claselor', correct: false },
        { text: 'Programarea folosind funcții exclusiv', correct: false },
        { text: 'Programarea bazată pe clase', correct: true },
        { text: 'Programarea în stil functional', correct: false },
      ],
    },
    {
      question:
        'Pe ce se centrează programarea orientată pe obiecte (OOP) în JavaScript?',
      answers: [
        { text: 'Folosirea de prototipuri și obiecte simple', correct: true },
        { text: 'Programarea în consolă', correct: false },
        { text: 'Folosirea unui singur obiect global', correct: false },
        { text: 'Evitarea utilizării obiectelor', correct: false },
      ],
    },
    {
      question: 'Care sunt cele patru principii ale OOP?',
      answers: [
        {
          text: 'Encapsulation, inheritance, polymorphism, abstraction',
          correct: true,
        },
        {
          text: 'Securitate, performanță, scalabilitate, disponibilitate',
          correct: false,
        },
        { text: 'Variabile, funcții, obiecte, prototipuri', correct: false },
        { text: 'Syntax, semantica, pragmatics, fonetică', correct: false },
      ],
    },
    {
      question:
        'Ce tip de limbaj este JavaScript în ceea ce privește obiectele?',
      answers: [
        { text: 'Bazat pe clasă', correct: false },
        { text: 'Bazat pe prototipuri', correct: true },
        { text: 'Bazat pe funcții', correct: false },
        { text: 'Bazat pe blocuri', correct: false },
      ],
    },
    {
      question: 'Ce este prototype chain în JavaScript?',
      answers: [
        { text: 'Un model de securitate pentru obiecte', correct: false },
        {
          text: 'Un tip de structură de date pentru stocarea obiectelor',
          correct: false,
        },
        { text: 'Mecanismul de moștenire din JavaScript', correct: true },
        { text: 'O bibliotecă pentru animații', correct: false },
      ],
    },
    {
      question: 'Ce este method chaining în programarea orientată pe obiecte?',
      answers: [
        { text: 'Un șir de caractere', correct: false },
        {
          text: 'O tehnică prin care metodele returnează instanța obiectului pentru a permite apeluri succesive',
          correct: true,
        },
        {
          text: 'O secvență de metode care se execută în paralel',
          correct: false,
        },
        { text: 'Un lanț de metode statice', correct: false },
      ],
    },
    {
      question: 'Ce permite DOM în JavaScript?',
      answers: [
        { text: 'Desenarea grafică 2D și 3D', correct: false },
        {
          text: 'Interacțiunea cu elementele documentului în browser',
          correct: true,
        },
        { text: 'Conectarea la baza de date a aplicației', correct: false },
        { text: 'Crearea rapidă de noi pagini web', correct: false },
      ],
    },
    {
      question: 'Ce face spread operator (...) în JavaScript?',
      answers: [
        { text: 'Construiește o conexiune de rețea', correct: false },
        {
          text: 'Extinde un array sau obiect, copiind elementele sale',
          correct: true,
        },
        { text: 'Calculează sume matematice', correct: false },
        { text: 'Generează numere aleatorii', correct: false },
      ],
    },
    {
      question: 'Ce este variable look-up în JavaScript?',
      answers: [
        { text: 'Căutarea tipurilor de date variabile', correct: false },
        {
          text: 'Căutarea unei variabile în contextul local și apoi în lanțul de contexte până la global',
          correct: true,
        },
        { text: 'O funcție de debug pentru variabile', correct: false },
        { text: 'O bibliotecă pentru variabile dinamice', correct: false },
      ],
    },
    {
      question: 'Cum se bazează JavaScript pe prototipuri pentru moștenire?',
      answers: [
        { text: 'Folosind funcții de clasă', correct: false },
        {
          text: 'Prin intermediul prototype chain, unde fiecare obiect are o proprietate prototype',
          correct: true,
        },
        { text: 'Prin utilizarea strictă a constructorilor', correct: false },
        { text: 'Folosind module de import/export', correct: false },
      ],
    },
    {
      question: 'Ce este JSON în contextul JavaScript?',
      answers: [
        { text: 'Un limbaj de programare', correct: false },
        { text: 'Un format de stocare și schimb de date text', correct: true },
        { text: 'Un tip de obiect JavaScript', correct: false },
        { text: 'O funcție built-in în JavaScript', correct: false },
      ],
    },
    {
      question:
        'Care este diferența dintre o metodă mutating și una non-mutating în JavaScript?',
      answers: [
        {
          text: 'Metoda mutating adaugă noi proprietăți obiectului',
          correct: false,
        },
        {
          text: 'Metoda non-mutating nu poate fi utilizată pe array-uri',
          correct: false,
        },
        {
          text: 'Metoda mutating schimbă setul de date original, pe când non-mutating returnează o copie',
          correct: true,
        },
        { text: 'Metoda non-mutating este mai rapidă', correct: false },
      ],
    },
    {
      question: 'Ce diferență există între operatorii == și === în JavaScript?',
      answers: [
        {
          text: '== verifică doar tipul, === verifică tipul și valoarea',
          correct: false,
        },
        {
          text: '== verifică valoarea cu type coercion, === verifică valoarea și tipul fără coercion',
          correct: true,
        },
        { text: 'Nu există nicio diferență', correct: false },
        { text: '== este mai rapid decât ===', correct: false },
      ],
    },
    {
      question: 'Ce caracterizează un arrow function în JavaScript?',
      answers: [
        { text: 'Nu poate fi utilizată ca metodă', correct: false },
        { text: 'Are propriul context "this"', correct: false },
        {
          text: 'Nu se definește cu keyword-ul function și "this" este legat de contextul înconjurător',
          correct: true,
        },
        {
          text: 'Este echivalentă cu o funcție definită cu function',
          correct: false,
        },
      ],
    },
    {
      question:
        'Ce înseamnă că function functions sunt "hoisted" în JavaScript?',
      answers: [
        {
          text: 'Pot fi apelate înainte de a fi definite în cod',
          correct: true,
        },
        {
          text: 'Sunt întotdeauna mutate la începutul fișierului',
          correct: false,
        },
        { text: 'Pot fi utilizate doar după declarație', correct: false },
        {
          text: 'Sunt ridicate vizual în partea de sus a codului',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce reprezintă ES6 Classes în JavaScript?',
      answers: [
        { text: 'O nouă versiune de JavaScript', correct: false },
        {
          text: 'Un "syntactic sugar" pentru simularea programării orientate pe obiecte',
          correct: true,
        },
        { text: 'O bibliotecă pentru programarea funcțională', correct: false },
        { text: 'Un framework pentru backend', correct: false },
      ],
    },
    {
      question: 'Ce este un callback în JavaScript?',
      answers: [
        { text: 'O funcție apelată imediat după declarație', correct: false },
        { text: 'Un tip de variabilă', correct: false },
        {
          text: 'O funcție executată ca răspuns la un anumit eveniment',
          correct: true,
        },
        { text: 'Un apel către o bază de date', correct: false },
      ],
    },
    {
      question: 'Ce este Event Delegation în JavaScript?',
      answers: [
        { text: 'O librărie pentru gestionarea evenimentelor', correct: false },
        {
          text: 'Un pattern prin care evenimentele sunt capturate și gestionate la nivel de element părinte',
          correct: true,
        },
        { text: 'Un API pentru crearea rapidă de evenimente', correct: false },
        {
          text: 'Un mod de a delega executarea evenimentelor către server',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce reprezintă minificarea în contextul dezvoltării web?',
      answers: [
        { text: 'Procesul de testare a codului', correct: false },
        {
          text: 'Compilarea codului sursă în limbaje de nivel jos',
          correct: false,
        },
        {
          text: 'Procesul de reducere a dimensiunii codului prin eliminarea spațiilor și a codului inutil',
          correct: true,
        },
        { text: 'Criptarea codului sursă', correct: false },
      ],
    },
    {
      question:
        'Când este apelat constructorul într-o clasă JavaScript de tip ES6+?',
      answers: [
        { text: 'La apelarea unei metode', correct: false },
        { text: 'La crearea unei instanțe noi a clasei', correct: true },
        { text: 'La compilarea clasei', correct: false },
        { text: 'Când clasa este ștearsă din memorie', correct: false },
      ],
    },
    {
      question:
        'Pentru ce este folosită metoda event.preventDefault în JavaScript?',
      answers: [
        { text: 'Pentru a opri propagarea evenimentelor', correct: false },
        {
          text: 'Pentru a preveni comportamentul implicit al elementului',
          correct: true,
        },
        { text: 'Pentru a genera evenimente personalizate', correct: false },
        { text: 'Pentru a activa un eveniment implicit', correct: false },
      ],
    },
    {
      question: 'Cum poate fi folosit operatorul spread (...) în JavaScript?',
      answers: [
        { text: 'Pentru a crea spațiu în memorie', correct: false },
        { text: 'Pentru a împărți un string în litere', correct: false },
        {
          text: 'Pentru a copia elementele unui obiect sau array',
          correct: true,
        },
        { text: 'Pentru a răspândi valori în rețea', correct: false },
      ],
    },
    {
      question: 'Care sunt tipurile de date primitive în JavaScript?',
      answers: [
        { text: 'Class, Function, Promise', correct: false },
        {
          text: 'Number, String, Boolean, Object, null, undefined, Symbol',
          correct: true,
        },
        { text: 'Element, Event, Error', correct: false },
        { text: 'Window, Document, Navigator', correct: false },
      ],
    },
    {
      question: 'Cum funcționează metoda Array.push() în JavaScript?',
      answers: [
        { text: 'Adaugă un element la începutul array-ului', correct: false },
        { text: 'Creează un nou array cu elementul adăugat', correct: false },
        {
          text: 'Adaugă un element la finalul array-ului și modifică array-ul original',
          correct: true,
        },
        { text: 'Elimină un element de la finalul array-ului', correct: false },
      ],
    },
    {
      question: 'Ce efect are keywordul continue în buclele JavaScript?',
      answers: [
        { text: 'Termină execuția buclei imediat', correct: false },
        {
          text: 'Omite instrucțiunile rămase și trece la următoarea iterație',
          correct: true,
        },
        { text: 'Repetă iterația curentă', correct: false },
        { text: 'Nu are niciun efect asupra buclei', correct: false },
      ],
    },
    {
      question: 'Ce efect are keywordul break în JavaScript?',
      answers: [
        { text: 'Creează o pauză în execuția codului', correct: false },
        {
          text: 'Întrerupe execuția unei bucle sau a unei declarații switch',
          correct: true,
        },
        { text: 'Întrerupe execuția unei funcții', correct: false },
        { text: 'Împiedică propagarea evenimentelor', correct: false },
      ],
    },
    {
      question: 'Cum poate fi gestionat asincronismul în JavaScript?',
      answers: [
        { text: 'Utilizând API-uri', correct: false },
        { text: 'Utilizând bucle și switch-uri', correct: false },
        {
          text: 'Utilizând callbacks, Promises sau async/await',
          correct: true,
        },
        { text: 'Utilizând keywordul continue', correct: false },
      ],
    },
    {
      question: 'Ce permite Node.js în ceea ce privește JavaScript?',
      answers: [
        {
          text: 'Rularea codului JavaScript exclusiv în browser',
          correct: false,
        },
        { text: 'Rularea codului JavaScript doar pe server', correct: false },
        {
          text: 'Rularea codului JavaScript în afara browserului',
          correct: true,
        },
        { text: 'Transformarea codului JavaScript în Java', correct: false },
      ],
    },
    {
      question: 'Ce sunt API-urile în contextul programării web?',
      answers: [
        {
          text: 'Seturi de instrucțiuni pentru construirea de aplicații',
          correct: false,
        },
        {
          text: 'Interfețe de programare care permit interacțiunea cu alte servicii web sau baze de date',
          correct: true,
        },
        {
          text: 'Protocoale pentru securizarea aplicațiilor web',
          correct: false,
        },
        {
          text: 'Metode de optimizare a performanței website-urilor',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face metoda Array.map() în JavaScript?',
      answers: [
        { text: 'Adaugă elemente noi la sfârșitul unui array', correct: false },
        {
          text: 'Creează un nou array aplicând o funcție pe fiecare element al array-ului inițial',
          correct: true,
        },
        {
          text: 'Modifică array-ul original ștergând sau înlocuind elemente',
          correct: false,
        },
        {
          text: 'Filtrează elementele unui array bazat pe o condiție',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează metoda Array.filter() în JavaScript?',
      answers: [
        { text: 'Un array cu elementele modificate', correct: false },
        {
          text: 'Un array cu toate elementele care trec o anumită condiție',
          correct: true,
        },
        { text: 'Valoarea totală a elementelor unui array', correct: false },
        {
          text: 'Noul array cu elementele adăugate sau șterse',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face metoda Array.reduce() în JavaScript?',
      answers: [
        { text: 'Conectează două sau mai multe array-uri', correct: false },
        { text: 'Reduce array-ul la o singură valoare', correct: true },
        { text: 'Reduce lungimea unui array', correct: false },
        { text: 'Împarte array-ul în mai multe subarray-uri', correct: false },
      ],
    },
    {
      question: 'Cum modifică metoda Array.splice() un array în JavaScript?',
      answers: [
        { text: 'Ordonează elementele array-ului', correct: false },
        {
          text: 'Convertește elementele array-ului în majuscule',
          correct: false,
        },
        { text: 'Adaugă sau șterge elemente din array', correct: true },
        {
          text: 'Creează un nou array cu elemente specificate',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce rol au localStorage și sessionStorage în JavaScript?',
      answers: [
        { text: 'Transferă date între server și client', correct: false },
        { text: 'Permit stocarea de date în browser', correct: true },
        {
          text: 'Sincronizează datele între diferite dispozitive',
          correct: false,
        },
        { text: 'Criptează datele stocate în browser', correct: false },
      ],
    },
    {
      question: 'Ce descrie conceptul de event bubbling în JavaScript?',
      answers: [
        { text: 'Procesul de criptare a evenimentelor', correct: false },
        { text: 'Generarea secvențială a evenimentelor', correct: false },
        {
          text: 'Propagarea unui eveniment de la un element fiu către elementele părinte',
          correct: true,
        },
        {
          text: 'Obligarea unui eveniment să se execute doar pe elementul pe care a fost inițial declanșat',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce reprezintă debounce și throttle în JavaScript?',
      answers: [
        { text: 'Operatori noi adăugați în ES6', correct: false },
        {
          text: 'Tehnici de optimizare pentru evenimente frecvente ca scroll sau resize',
          correct: true,
        },
        { text: 'Funcții pentru gestionarea eroarelor', correct: false },
        { text: 'Metode de criptare a datelor', correct: false },
      ],
    },
    {
      question: 'Ce este CORS în dezvoltarea web?',
      answers: [
        {
          text: 'Un protocol de comunicare între diferite browsere',
          correct: false,
        },
        { text: 'O bibliotecă JavaScript pentru animații', correct: false },
        {
          text: 'Un mecanism care permite sau refuză resurse web să interacționeze cu resurse de pe alte domenii',
          correct: true,
        },
        { text: 'Un tip de eroare în JavaScript', correct: false },
      ],
    },
    {
      question: 'Ce fac metodele JSON.parse() și JSON.stringify()?',
      answers: [
        {
          text: 'Parsează și codifică XML în obiecte JavaScript',
          correct: false,
        },
        { text: 'Comprimă și dezarhivează fișiere JSON', correct: false },
        {
          text: 'Permit conversia între obiecte JavaScript și string-uri JSON',
          correct: true,
        },
        {
          text: 'Trimit și primesc date de la server în format JSON',
          correct: false,
        },
      ],
    },
    {
      question:
        'Ce returnează metodele Array.indexOf() și Array.lastIndexOf()?',
      answers: [
        { text: 'Numărul de elemente din array', correct: false },
        { text: 'Ultimul element al array-ului', correct: false },
        {
          text: 'Pozitia primului/ultimului element găsit în array',
          correct: true,
        },
        {
          text: 'Un array nou cu indexurile tuturor elementelor',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face metoda Array.find()?',
      answers: [
        { text: 'Sortează elementele array-ului', correct: false },
        {
          text: 'Returnează primul element care îndeplinește o condiție dată',
          correct: true,
        },
        { text: 'Caută un element într-o bază de date', correct: false },
        { text: 'Creează un nou array cu elementele găsite', correct: false },
      ],
    },
    {
      question: 'Ce reprezintă Set și Map în JavaScript?',
      answers: [
        {
          text: 'Funcții pentru setarea și maparea valorilor din obiecte',
          correct: false,
        },
        {
          text: 'Operatori pentru comparație și transformare de tipuri',
          correct: false,
        },
        { text: 'Variabile globale pentru setări de limbaj', correct: false },
        { text: 'Structuri de date introduse în ES6', correct: true },
      ],
    },
    {
      question: 'Ce face metoda Array.concat()?',
      answers: [
        { text: 'Elimină elementele duplicate din array-uri', correct: false },
        {
          text: 'Combine două sau mai multe array-uri într-unul nou',
          correct: true,
        },
        { text: 'Conectează array-ul la un element DOM', correct: false },
        { text: 'Face calcule pe elementele array-ului', correct: false },
      ],
    },
    {
      question: 'Cum verifici dacă o variabilă este un array?',
      answers: [
        { text: 'Array.isArray()', correct: true },
        { text: 'typeof variabila', correct: false },
        { text: 'variabila instanceof Array', correct: false },
        { text: 'variabila.isArray()', correct: false },
      ],
    },
    {
      question: 'Ce face metoda String.replace()?',
      answers: [
        {
          text: 'Caută și înlocuiește un substring într-un string',
          correct: true,
        },
        { text: 'Repară string-ul dacă are erori', correct: false },
        { text: 'Restaurează un string la valoarea inițială', correct: false },
        {
          text: 'Înlocuiește un string cu un altul într-o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează metoda String.split()?',
      answers: [
        { text: 'Un array de substring-uri', correct: true },
        { text: 'Numărul de caractere din string', correct: false },
        { text: 'Un obiect cu substring-uri ca proprietăți', correct: false },
        { text: 'Un string cu literele separate prin virgulă', correct: false },
      ],
    },
    {
      question:
        'Cum poți combina un array de string-uri într-un singur string?',
      answers: [
        { text: 'String.concat()', correct: false },
        { text: 'Array.join()', correct: true },
        { text: 'Array.combine()', correct: false },
        { text: 'String.merge()', correct: false },
      ],
    },
    {
      question: 'Ce face metoda String.trim()?',
      answers: [
        { text: 'Schimbă literele mari cu litere mici', correct: false },
        { text: 'Trimite un string către un server', correct: false },
        {
          text: 'Elimină spațiile albe de la începutul și sfârșitul unui string',
          correct: true,
        },
        { text: 'Verifică lungimea unui string', correct: false },
      ],
    },
    {
      question: 'Ce returnează metoda Math.random()?',
      answers: [
        { text: 'Un număr aleatoriu între 0 și 1', correct: true },
        { text: 'Un număr aleatoriu între 1 și 10', correct: false },
        { text: 'Un număr aleatoriu între 0 și 100', correct: false },
        { text: 'Un număr aleatoriu negativ', correct: false },
      ],
    },
    {
      question: 'Cum funcționează metoda Math.round()?',
      answers: [
        { text: 'Rotunjește un număr la zeci', correct: false },
        {
          text: 'Rotunjește un număr la cel mai apropiat întreg',
          correct: true,
        },
        { text: 'Rotunjește un număr la sute', correct: false },
        { text: 'Rotunjește un număr la două zecimale', correct: false },
      ],
    },
    {
      question: 'Ce face metoda Math.floor()?',
      answers: [
        {
          text: 'Rotunjește un număr în sus la cel mai apropiat întreg',
          correct: false,
        },
        {
          text: 'Rotunjește un număr în jos la cel mai apropiat întreg',
          correct: true,
        },
        { text: 'Calculează podeaua unui spațiu', correct: false },
        { text: 'Verifică dacă un număr este par', correct: false },
      ],
    },
    {
      question: 'Ce face metoda Math.ceil()?',
      answers: [
        {
          text: 'Rotunjește un număr în sus la cel mai apropiat întreg',
          correct: true,
        },
        { text: 'Generează un număr aleatoriu întreg', correct: false },
        { text: 'Calculează tavanul unei încăperi', correct: false },
        {
          text: 'Rotunjește un număr la cel mai apropiat zecime',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce informație oferă metoda Date.now()?',
      answers: [
        { text: 'Data și ora curentă', correct: false },
        { text: 'Numărul de secunde de la 1 ianuarie 1970', correct: false },
        { text: 'Numărul de milisecunde de la 1 ianuarie 1970', correct: true },
        { text: 'Ziua săptămânii curente', correct: false },
      ],
    },
    {
      question: 'La ce sunt folosiți Web Workers în JavaScript?',
      answers: [
        { text: 'Pentru stilizarea paginilor web', correct: false },
        {
          text: 'Pentru rularea de script-uri în background fără a bloca thread-ul principal',
          correct: true,
        },
        { text: 'Pentru testarea performanței aplicației web', correct: false },
        { text: 'Pentru crearea de noi thread-uri în browser', correct: false },
      ],
    },
    {
      question: 'Ce face Fetch API în JavaScript?',
      answers: [
        { text: 'Optimizează imagini pentru web', correct: false },
        { text: 'Permite efectuarea de request-uri HTTP', correct: true },
        { text: 'Încarcă rapid paginile web', correct: false },
        {
          text: 'Furnizează un set de metode pentru manipularea DOM',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce realizează metoda Object.assign()?',
      answers: [
        { text: 'Creează un array nou', correct: false },
        {
          text: 'Copiaza proprietățile unui obiect într-un obiect țintă',
          correct: true,
        },
        { text: 'Asignează valori variabilelor', correct: false },
        {
          text: 'Combina mai multe string-uri într-unul singur',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează metoda Object.keys()?',
      answers: [
        {
          text: 'Un array cu valorile proprietăților unui obiect',
          correct: false,
        },
        {
          text: 'Un array cu numele proprietăților unui obiect',
          correct: true,
        },
        { text: 'Numărul de proprietăți ale unui obiect', correct: false },
        {
          text: 'Un array cu perechi de chei-valori ale unui obiect',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează metoda Object.values()?',
      answers: [
        {
          text: 'Un array cu valorile proprietăților unui obiect',
          correct: true,
        },
        {
          text: 'Un array cu numele proprietăților unui obiect',
          correct: false,
        },
        { text: 'Numărul de valori ale unui obiect', correct: false },
        {
          text: 'Un array cu perechi de chei-valori ale unui obiect',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce permite "destructuring assignment" în JavaScript?',
      answers: [
        { text: 'Construirea de obiecte complexe', correct: false },
        { text: 'Extragerea datelor din array-uri sau obiecte', correct: true },
        { text: 'Distrugerea unui obiect sau array', correct: false },
        {
          text: 'Crearea de asignări multiple într-o singură linie',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum sunt utilizate template literals în JavaScript?',
      answers: [
        { text: 'Pentru scrierea regulilor CSS în JavaScript', correct: false },
        {
          text: 'Pentru interpolarea de string-uri folosind backticks',
          correct: true,
        },
        { text: 'Pentru scrierea de comentarii multiline', correct: false },
        { text: 'Pentru a defini template-uri HTML', correct: false },
      ],
    },
    {
      question: 'Ce caracteristica nu poseda arrow functions in JavaScript?',
      answers: [
        { text: 'Nu au propriul context "this"', correct: true },
        {
          text: 'Nu pot fi folosite pentru declararea functiilor',
          correct: false,
        },
        { text: 'Nu suporta parametri', correct: false },
        { text: 'Nu pot returna valori', correct: false },
      ],
    },
    {
      question: 'Ce face metoda .bind() in JavaScript?',
      answers: [
        { text: 'Leaga un selector CSS de un element', correct: false },
        {
          text: 'Creeaza o copie a unei functii cu "this" pre-setat',
          correct: true,
        },
        { text: 'Conecteaza doua noduri in DOM', correct: false },
        {
          text: 'Realizeaza binding-ul datelor pentru o aplicatie',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum se utilizeaza metoda .call() in JavaScript?',
      answers: [
        {
          text: 'Pentru a apela o functie cu "this" si argumente separate prin punct si virgula',
          correct: false,
        },
        { text: 'Pentru a apela o functie fara argumente', correct: false },
        {
          text: 'Pentru a apela o functie cu "this" setat la o valoare data si argumente separate prin virgule',
          correct: true,
        },
        { text: 'Pentru a apela o functie asincron', correct: false },
      ],
    },
    {
      question: 'La ce se foloseste metoda .apply() in JavaScript?',
      answers: [
        { text: 'Pentru a aplica stiluri CSS', correct: false },
        {
          text: 'Pentru a apela o functie cu "this" setat la o valoare data si un array de argumente',
          correct: true,
        },
        { text: 'Pentru a aplica o animatie', correct: false },
        { text: 'Pentru a atribui o metoda unui obiect', correct: false },
      ],
    },
    {
      question: 'Ce este DOM traversal?',
      answers: [
        { text: 'O tehnica de debugging pentru JavaScript', correct: false },
        { text: 'Compilarea codului JavaScript', correct: false },
        { text: 'Parcurgerea arborelui DOM', correct: true },
        { text: 'Transferul de date intre server si client', correct: false },
      ],
    },
    {
      question: 'Ce permite metoda Element.classList?',
      answers: [
        { text: 'Listarea elementelor dintr-o baza de date', correct: false },
        { text: 'Manipularea claselor unui element DOM', correct: true },
        { text: 'Sortarea elementelor unui array', correct: false },
        { text: 'Generarea unei liste de elemente HTML', correct: false },
      ],
    },
    {
      question: 'Ce face metoda Element.setAttribute() in JavaScript?',
      answers: [
        { text: 'Obtine valoarea unui atribut', correct: false },
        { text: 'Elimina un atribut', correct: false },
        { text: 'Adauga un nou copil la un element parinte', correct: false },
        {
          text: 'Seteaza sau modifica valoarea unui atribut al unui element',
          correct: true,
        },
      ],
    },
    {
      question:
        'Cum obtii valoarea unui atribut de pe un element DOM folosind JavaScript?',
      answers: [
        { text: 'Element.setAttribute()', correct: false },
        { text: 'Element.getAttribute()', correct: true },
        { text: 'Element.removeChild()', correct: false },
        { text: 'Element.appendChild()', correct: false },
      ],
    },
    {
      question: 'Ce face metoda Element.removeAttribute()?',
      answers: [
        { text: 'Adauga un atribut unui element', correct: false },
        { text: 'Inlocuieste valoarea unui atribut', correct: false },
        { text: 'Elimina un atribut de pe un element DOM', correct: true },
        { text: 'Obtine valoarea unui atribut', correct: false },
      ],
    },
    {
      question: 'Cum adaugi un nod copil la un element parinte in DOM?',
      answers: [
        { text: 'Element.removeChild()', correct: false },
        { text: 'Element.appendChild()', correct: true },
        { text: 'Element.replaceChild()', correct: false },
        { text: 'Element.setAttribute()', correct: false },
      ],
    },
    {
      question:
        'Cum elimini un nod copil dintr-un element parinte folosind JavaScript?',
      answers: [
        { text: 'Element.appendChild()', correct: false },
        { text: 'Element.removeAttribute()', correct: false },
        { text: 'Element.removeChild()', correct: true },
        { text: 'Element.setAttribute()', correct: false },
      ],
    },
    {
      question: 'Ce permite metoda Element.replaceChild() in lucrul cu DOM-ul?',
      answers: [
        { text: 'Schimba atributul unui element', correct: false },
        { text: 'Inlocuieste un nod copil cu un altul', correct: true },
        { text: 'Adauga un nod copil unui element', correct: false },
        { text: 'Elimina un atribut de pe un element', correct: false },
      ],
    },
    {
      question: 'Ce face metoda Element.cloneNode() in manipularea DOM-ului?',
      answers: [
        { text: 'Insereaza un nod nou', correct: false },
        { text: 'Creeaza o copie a unui element DOM', correct: true },
        { text: 'Elimina un element DOM', correct: false },
        { text: 'Inlocuieste un element DOM', correct: false },
      ],
    },
    {
      question:
        'Cum inserezi un nod nou in DOM inainte de un nod copil specificat?',
      answers: [
        { text: 'Element.appendChild()', correct: false },
        { text: 'Element.cloneNode()', correct: false },
        { text: 'Element.insertBefore()', correct: true },
        { text: 'Element.removeChild()', correct: false },
      ],
    },
  ],
  // html questions ____________________________________________________________________
  html: [
    {
      question: 'Ce element HTML este folosit pentru a defini un paragraf?',
      answers: [
        { text: '<div>', correct: false },
        { text: '<p>', correct: true },
        { text: '<span>', correct: false },
        { text: '<br>', correct: false },
      ],
    },
    {
      question: 'Cum inserati un comentariu in HTML?',
      answers: [
        { text: '<-- Acesta este un comentariu -->', correct: false },
        { text: '<!–- Acesta este un comentariu -–>', correct: true },
        { text: '/* Acesta este un comentariu */', correct: false },
        { text: '// Acesta este un comentariu', correct: false },
      ],
    },
    {
      question: 'Din ce este format un element HTML?',
      answers: [
        { text: 'Continut, taguri de inchidere si deschidere', correct: true },
        { text: 'Doar taguri de deschidere', correct: false },
        { text: 'Doar taguri de inchidere', correct: false },
        { text: 'Un singur tag fara continut', correct: false },
      ],
    },
    {
      question:
        'Ce elemente sunt imbracate in elementul html intr-un document HTML?',
      answers: [
        { text: 'header si footer', correct: false },
        { text: 'title si div', correct: false },
        { text: 'head si body', correct: true },
        { text: 'form si a', correct: false },
      ],
    },
    {
      question:
        'Care dintre urmatoarele sunt exemple de elemente de tip block?',
      answers: [
        { text: '<span>, <a>, <img>', correct: false },
        {
          text: '<div>, <section>, <form>, <ul>, <ol>, <table>, <article>, <nav>, <h1>-<h6>',
          correct: true,
        },
        { text: '<em>, <strong>, <i>', correct: false },
        { text: '<br>, <hr>, <wbr>', correct: false },
      ],
    },
    {
      question:
        'Care dintre urmatoarele sunt exemple de elemente de tip inline?',
      answers: [
        { text: '<div>, <p>, <h1>', correct: false },
        { text: '<ul>, <ol>, <li>', correct: false },
        { text: '<table>, <tr>, <td>', correct: false },
        { text: '<a>, <img>, <span>, <button>', correct: true },
      ],
    },
    {
      question:
        'Ce metode HTTP sunt folosite pentru a transmite informatia din formulare catre URL-ul specificat?',
      answers: [
        { text: 'PUT si DELETE', correct: false },
        { text: 'POST si GET', correct: true },
        { text: 'TRACE si CONNECT', correct: false },
        { text: 'OPTIONS si PATCH', correct: false },
      ],
    },
    {
      question: 'Ce genereaza input-ul de tip checkbox?',
      answers: [
        { text: 'Un câmp text simplu', correct: false },
        { text: 'O caseta de selectare multipla', correct: false },
        { text: 'O caseta de bifat', correct: true },
        { text: 'Un buton radio', correct: false },
      ],
    },
    {
      question: 'Cum functioneaza input-ul radio in comparatie cu checkbox?',
      answers: [
        { text: 'Poate fi bifat in grupuri multiple simultan', correct: false },
        { text: 'Permite introducerea textului', correct: false },
        {
          text: 'Doar unul poate fi bifat dintr-un radio group',
          correct: true,
        },
        { text: 'Nu exista diferente intre ele', correct: false },
      ],
    },

    {
      question:
        'Elementul select genereaza o ______ cu valori (elemente de tip option).?',
      answers: [
        { text: 'lista numerotata', correct: false },
        { text: 'lista cu puncte', correct: false },
        { text: 'text pe mai multe randuri', correct: false },
        { text: 'lista dropdown', correct: true },
      ],
    },
    {
      question:
        'Textarea este un element de formular care permite introducerea unei cantitati de ______.?',
      answers: [
        { text: 'text intr-o singura linie', correct: false },
        { text: 'selectie de data', correct: false },
        { text: 'casuta de bifat', correct: false },
        { text: 'text pe mai multe randuri', correct: true },
      ],
    },
    {
      question: 'Ce reprezinta elementul header in HTML?',
      answers: [
        { text: 'Subsolul sectiunii parinte', correct: false },
        {
          text: 'Continut tangential legat de continutul principal',
          correct: false,
        },
        { text: 'Informatie cu rol de antet', correct: true },
        { text: 'Continutul principal al unui document', correct: false },
      ],
    },
    {
      question: 'Ce marcheaza elementul footer in HTML?',
      answers: [
        { text: 'Navigatia unui document', correct: false },
        { text: 'Subsolul sectiunii parinte', correct: true },
        { text: 'Informatia cu rol de antet', correct: false },
        { text: 'Un grup de butoane radio', correct: false },
      ],
    },
    {
      question: 'Ce delimiteaza elementul aside in HTML?',
      answers: [
        { text: 'Continutul principal al unui document', correct: false },
        { text: 'Navigatia unui document', correct: false },
        {
          text: 'Continut tangential legat de continutul principal',
          correct: true,
        },
        { text: 'Subsolul sectiunii parinte', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul main in HTML?',
      answers: [
        { text: 'Navigatia documentului', correct: false },
        { text: 'Continutul principal al documentului', correct: true },
        { text: 'Un meniu deschis', correct: false },
        { text: 'O lista ordonata', correct: false },
      ],
    },
    {
      question: 'Ce rol are elementul nav in HTML?',
      answers: [
        { text: 'Delimiteaza un formular', correct: false },
        { text: 'Delimiteaza navigatia documentului', correct: true },
        { text: 'Marcheaza subsolul documentului', correct: false },
        { text: 'Reprezinta o sectiune tangentiala', correct: false },
      ],
    },
    {
      question: 'Cum se poate adauga cod CSS in HTML?',
      answers: [
        { text: 'Prin tagul <script>', correct: false },
        {
          text: 'Prin tagul <link>, <style> sau ca atribut "style"',
          correct: true,
        },
        { text: 'Doar inline, folosind atributul "style"', correct: false },
        { text: 'Prin tagul <meta>', correct: false },
      ],
    },
    {
      question: 'Ce este un CDN?',
      answers: [
        { text: 'O baza de date', correct: false },
        { text: 'Un tip de container HTML', correct: false },
        { text: 'Un server care serveste resurse statice', correct: true },
        { text: 'Un protocol de securitate pentru HTML', correct: false },
      ],
    },
    {
      question: 'Ce face atributul target="_blank" pe o ancora in HTML?',
      answers: [
        { text: 'Deschide link-ul in acelasi tab', correct: false },
        { text: 'Descarca resursa link-ului', correct: false },
        { text: 'Deschide link-ul intr-un tab nou', correct: true },
        { text: 'Creeaza un bookmark', correct: false },
      ],
    },
    {
      question: 'Ce pot contine elementele ul in HTML?',
      answers: [
        { text: 'Orice elemente HTML', correct: false },
        { text: 'Doar elemente li', correct: true },
        { text: 'Text fara niciun alt element HTML', correct: false },
        { text: 'Elemente img', correct: false },
      ],
    },
    {
      question: 'Ce pot contine elementele select in HTML?',
      answers: [
        { text: 'Orice elemente HTML', correct: false },
        { text: 'Doar elemente option sau optgroup', correct: true },
        { text: 'Elemente script', correct: false },
        { text: 'Elemente div', correct: false },
      ],
    },
    {
      question:
        'Cum diferentiaza metodele POST si GET modul de trimitere a informatiei?',
      answers: [
        {
          text: 'POST adauga informatia in URL, iar GET in corpul requestului',
          correct: false,
        },
        { text: 'POST si GET sunt identice', correct: false },
        {
          text: 'POST trimite informatia in corpul requestului, iar GET adauga la URL',
          correct: true,
        },
        { text: 'GET cripteaza informatia, iar POST nu', correct: false },
      ],
    },
    {
      question: 'Ce inseamna URL?',
      answers: [
        { text: 'User Role Login', correct: false },
        { text: 'Uniform Resource Locator', correct: true },
        { text: 'Unique Request Link', correct: false },
        { text: 'Unified Resource Link', correct: false },
      ],
    },
    {
      question: 'Pentru ce este folosit elementul link in HTML?',
      answers: [
        { text: 'Pentru a crea link-uri interne', correct: false },
        { text: 'Pentru a include scripturi JavaScript', correct: false },
        { text: 'Pentru a include fisierul CSS extern', correct: true },
        { text: 'Pentru a defini metadata', correct: false },
      ],
    },
    {
      question: 'Ce ofera elementul meta despre documentul HTML?',
      answers: [
        { text: 'Stiluri CSS', correct: false },
        { text: 'Metadata', correct: true },
        { text: 'Instructiuni JavaScript', correct: false },
        { text: 'Elemente de navigatie', correct: false },
      ],
    },
    {
      question: 'Ce specifica elementul base in HTML?',
      answers: [
        { text: 'Baza de date a site-ului', correct: false },
        { text: 'Culoarea de baza pentru stiluri', correct: false },
        { text: 'Baza de referinta pentru scripturi', correct: false },
        {
          text: 'URL-ul de baza pentru toate URL-urile relative din pagina',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face elementul <script> intr-o pagina HTML?',
      answers: [
        { text: 'Stilizeaza pagina', correct: false },
        { text: 'Include cod JavaScript', correct: true },
        { text: 'Creeaza un hyperlink', correct: false },
        { text: 'Include un fisier multimedia', correct: false },
      ],
    },
    {
      question: 'Ce declara doctype intr-un document HTML?',
      answers: [
        { text: 'Tipul de caracter', correct: false },
        { text: 'Versiunea CSS', correct: false },
        { text: 'Tipul si versiunea documentului HTML', correct: true },
        { text: 'Locatia documentului', correct: false },
      ],
    },
    {
      question: 'Pentru ce este folosit elementul <blockquote> in HTML?',
      answers: [
        { text: 'Pentru a afisa formule matematice', correct: false },
        { text: 'Pentru a afisa citate lungi', correct: true },
        { text: 'Pentru a afisa imagini', correct: false },
        { text: 'Pentru a defini o sectiune in pagina', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <q> in HTML?',
      answers: [
        { text: 'O intrebare', correct: false },
        { text: 'Un citat scurt', correct: true },
        { text: 'O coada de mesaje', correct: false },
        { text: 'Un element de coada', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <abbr> in HTML?',
      answers: [
        { text: 'Un text accentuat', correct: false },
        { text: 'O abreviere sau un acronim', correct: true },
        { text: 'Un text abstract', correct: false },
        { text: 'Un text absent', correct: false },
      ],
    },
    {
      question: 'Ce defineste elementul <cite> in HTML?',
      answers: [
        { text: 'Un citat', correct: false },
        { text: 'Un site web', correct: false },
        { text: 'Titlul unei opere creative', correct: true },
        { text: 'O citatie legala', correct: false },
      ],
    },
    {
      question: 'Ce defineste elementul <dfn> in HTML?',
      answers: [
        { text: 'O definitie', correct: true },
        { text: 'Un font diferit', correct: false },
        { text: 'O diferenta', correct: false },
        { text: 'Un termen dificil', correct: false },
      ],
    },
    {
      question:
        'Ce informatii ofera elementul <address> intr-un document HTML?',
      answers: [
        { text: 'Adresa URL a site-ului', correct: false },
        { text: 'Informatii de contact', correct: true },
        { text: 'O adresa IP', correct: false },
        { text: 'Adresa fizica a unei locatii', correct: false },
      ],
    },
    {
      question: 'Ce tip de text afiseaza elementul <code> in HTML?',
      answers: [
        { text: 'Italic', correct: false },
        { text: 'Subliniat', correct: false },
        { text: 'Cu font monospace', correct: true },
        { text: 'Bolduit', correct: false },
      ],
    },
    {
      question: 'Pentru ce este folosit elementul <samp> in HTML?',
      answers: [
        { text: 'Pentru a afisa exemple de sunet', correct: false },
        { text: 'Pentru a afisa esantioane de cod', correct: true },
        { text: 'Pentru a afisa esantioane de text', correct: false },
        { text: 'Pentru a afisa esantioane de date', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <kbd> in HTML?',
      answers: [
        { text: 'Un panou de control', correct: false },
        { text: 'Intrarea de la tastatura', correct: true },
        { text: 'Un buton virtual', correct: false },
        { text: 'O comanda de sistem', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <var> in HTML?',
      answers: [
        { text: 'Valoarea unei variabile', correct: false },
        { text: 'Numele unei variabile', correct: true },
        { text: 'O variatie de text', correct: false },
        { text: 'Un container variabil', correct: false },
      ],
    },
    {
      question: 'Ce tip de informatie reprezinta elementul <time> in HTML?',
      answers: [
        { text: 'Durata unui eveniment', correct: false },
        { text: 'Timpul sau o data', correct: true },
        { text: 'O cronologie', correct: false },
        { text: 'Un interval de timp', correct: false },
      ],
    },
    {
      question: 'Ce face elementul <mark> in HTML?',
      answers: [
        { text: 'Pune o marca de verificare', correct: false },
        { text: 'Evidentiaza textul', correct: true },
        { text: 'Creeaza un marcaj', correct: false },
        { text: 'Adauga un semn de carte', correct: false },
      ],
    },
    {
      question: 'La ce serveste elementul <bdi> in HTML?',
      answers: [
        { text: 'Pentru a defini o imagine de fundal', correct: false },
        { text: 'Pentru a izola o parte de text', correct: true },
        { text: 'Pentru a indica o directie bidimensionala', correct: false },
        { text: 'Pentru a ingradi textul', correct: false },
      ],
    },
    {
      question: 'Ce efect are elementul <bdo> asupra textului in HTML?',
      answers: [
        { text: 'Bolduieste textul', correct: false },
        { text: 'Ordoneaza textul', correct: false },
        { text: 'Suprascrie directia textului', correct: true },
        { text: 'Distribuie textul uniform', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <ruby> in HTML?',
      answers: [
        { text: 'O piatra pretioasa', correct: false },
        { text: 'Un tip de script', correct: false },
        { text: 'Text pentru marcare fonetica sau explicativa', correct: true },
        { text: 'Un stil de font', correct: false },
      ],
    },
    {
      question: 'Pentru ce este folosit elementul <rt> in HTML?',
      answers: [
        { text: 'Pentru a oferi rute de navigatie', correct: false },
        { text: 'Pentru a oferi explicatii sau pronuntii', correct: true },
        { text: 'Pentru a redimensiona tabele', correct: false },
        { text: 'Pentru a repeta continutul', correct: false },
      ],
    },
    {
      question: 'Ce face elementul <rp> in HTML?',
      answers: [
        { text: 'Reseteaza proprietatile', correct: false },
        { text: 'Reprezinta un rol de prezentare', correct: false },
        {
          text: 'Ofera paranteze pentru navigatoarele care nu suporta Ruby',
          correct: true,
        },
        { text: 'Creaza un nou paragraf', correct: false },
      ],
    },
    {
      question: 'Ce leaga elementul <data> in HTML?',
      answers: [
        { text: 'Datele utilizatorului cu profilul sau', correct: false },
        {
          text: 'Un continut cu o reprezentare legibila de masina a acestuia',
          correct: true,
        },
        { text: 'Datele financiare cu grafice', correct: false },
        { text: 'Baza de date cu serverul', correct: false },
      ],
    },
    {
      question: 'Ce indica elementul <wbr> in HTML?',
      answers: [
        { text: 'Un nou inceput', correct: false },
        { text: 'Un punct de intoarcere', correct: false },
        {
          text: 'Un punct de rupere optional intr-un text lung',
          correct: true,
        },
        { text: 'Un cod secret', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <span> in HTML?',
      answers: [
        { text: 'O perioada de timp', correct: false },
        { text: 'Un container inline folosit pentru styling', correct: true },
        { text: 'Un spatiu special', correct: false },
        { text: 'O unitate de masura', correct: false },
      ],
    },
    {
      question: 'Ce exprima elementul <i> in HTML?',
      answers: [
        { text: 'O informatie', correct: false },
        { text: 'Un text in cursiva pentru accentuare', correct: true },
        { text: 'O imagine', correct: false },
        { text: 'O iconita', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <b> in HTML?',
      answers: [
        { text: 'Un buton', correct: false },
        { text: 'Un text ingrosat pentru accentuare', correct: true },
        { text: 'Un text ingrosat pentru un titlu', correct: false },
        { text: 'O eticheta pentru elemente de tip block', correct: false },
      ],
    },
    {
      question: 'Ce indica elementul <strong> in HTML?',
      answers: [
        { text: 'Un text puternic', correct: false },
        { text: 'O structura de cod', correct: false },
        { text: 'Importanta unui text', correct: true },
        { text: 'O conexiune sigura', correct: false },
      ],
    },
    {
      question: 'Ce rol are elementul <em> in HTML?',
      answers: [
        { text: 'Evidentiaza un e-mail', correct: false },
        { text: 'Pune accent pe un text', correct: true },
        { text: 'Creeaza o enumerare', correct: false },
        { text: 'Emite un sunet', correct: false },
      ],
    },
    {
      question: 'Pentru ce este folosit elementul <small> in HTML?',
      answers: [
        { text: 'Pentru a micsora toate elementele', correct: false },
        {
          text: 'Pentru a indica note de subsol sau comentarii',
          correct: true,
        },
        { text: 'Pentru a face textul mai putin important', correct: false },
        { text: 'Pentru a indica text secundar', correct: false },
      ],
    },
    {
      question: 'Ce indica elementul <ins> in HTML?',
      answers: [
        { text: 'O instructiune', correct: false },
        { text: 'Text care a fost introdus intr-un document', correct: true },
        { text: 'O inserare de date', correct: false },
        { text: 'O insula de continut', correct: false },
      ],
    },
    {
      question: 'Ce semnifica elementul <del> in HTML?',
      answers: [
        { text: 'O livrare', correct: false },
        { text: 'Text care a fost sters dintr-un document', correct: true },
        { text: 'O scadere a valorilor', correct: false },
        { text: 'Un element depreciat', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <s> in HTML?',
      answers: [
        { text: 'Un stil special', correct: false },
        { text: 'Un spatiu', correct: false },
        { text: 'Text care nu mai este relevant sau corect', correct: true },
        { text: 'Un subtitlu', correct: false },
      ],
    },
    {
      question: 'Ce functie are elementul <u> in HTML?',
      answers: [
        { text: 'Creeaza un nou utilizator', correct: false },
        { text: 'Updateaza continutul', correct: false },
        { text: 'Subliniaza textul pentru stilizare', correct: true },
        { text: 'Desubliniaza textul', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <sup> in HTML?',
      answers: [
        { text: 'Un supliment text', correct: false },
        { text: 'Text sau numere afisate ca exponent', correct: true },
        { text: 'Sustine textul', correct: false },
        { text: 'Suprafata textului', correct: false },
      ],
    },
    {
      question: 'Ce rol are elementul <sub> in HTML?',
      answers: [
        { text: 'Aboneaza utilizatorii', correct: false },
        { text: 'Text sau numere afisate ca indice', correct: true },
        { text: 'Subsumeaza textul', correct: false },
        { text: 'Subliniaza textul', correct: false },
      ],
    },
    {
      question: 'Pentru ce este folosit elementul <caption> in HTML?',
      answers: [
        { text: 'Capteaza atentia utilizatorului', correct: false },
        { text: 'Ofera un titlu pentru elementul <table>', correct: true },
        { text: 'Descrie o captura de ecran', correct: false },
        { text: 'Adauga o legenda fotografiilor', correct: false },
      ],
    },
    {
      question: 'Ce face elementul <colgroup> in HTML?',
      answers: [
        { text: 'Coloreaza grupul', correct: false },
        {
          text: 'Grupeaza un set de coloane intr-un tabel HTML',
          correct: true,
        },
        { text: 'Colecteaza grupuri de date', correct: false },
        { text: 'Colaboreaza cu alte elemente', correct: false },
      ],
    },
    {
      question: 'Ce specifica elementul <col> in HTML?',
      answers: [
        { text: 'Comportamentul unei coloane de text', correct: false },
        { text: 'Proprietatile pentru o coloana intr-un tabel', correct: true },
        { text: 'O colectie de elemente', correct: false },
        { text: 'Un grup de coloane', correct: false },
      ],
    },
    {
      question: 'Ce grup de elemente este reprezentat de <thead> in HTML?',
      answers: [
        { text: 'Thread-uri sau discutii', correct: false },
        { text: 'Header-ul unui tabel HTML', correct: true },
        { text: 'Capul paginii web', correct: false },
        { text: 'Elementele principale', correct: false },
      ],
    },
    {
      question: 'Ce rol are elementul <tbody> in HTML?',
      answers: [
        { text: 'infatiseaza corpul textului', correct: false },
        { text: 'Grupeaza corpul unui tabel HTML', correct: true },
        { text: 'Descrie corpul documentului', correct: false },
        { text: 'Evidentiaza paragrafele importante', correct: false },
      ],
    },
    {
      question: 'Ce grupeaza elementul <tfoot> in HTML?',
      answers: [
        { text: 'Partea superioara a paginii', correct: false },
        { text: 'Footer-ul unui tabel HTML', correct: true },
        { text: 'Notele de subsol ale unui document', correct: false },
        { text: 'Ultima parte a unui articol', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <figure> in HTML?',
      answers: [
        { text: 'O figura geometrica', correct: false },
        { text: 'Continut referentiat din textul principal', correct: true },
        { text: 'O ilustratie artistica', correct: false },
        { text: 'O diagrama sau un grafic', correct: false },
      ],
    },
    {
      question: 'Ce rol are elementul <figcaption> in HTML?',
      answers: [
        { text: 'O figura de stil', correct: false },
        { text: 'O legenda pentru elementul <figure>', correct: true },
        { text: 'Caption pentru imagini', correct: false },
        { text: 'Un subtitlu pentru sectiuni', correct: false },
      ],
    },
    {
      question: 'Ce descrie elementul <dialog> in HTML?',
      answers: [
        { text: 'Un monolog', correct: false },
        { text: 'Un dialog sau o fereastra de dialog', correct: true },
        { text: 'O conversatie de chat', correct: false },
        { text: 'O discutie in comentarii', correct: false },
      ],
    },
    {
      question: 'Ce functie are elementul <menu> in HTML?',
      answers: [
        { text: 'Reprezinta un meniu de restaurant', correct: false },
        { text: 'O lista de comenzi', correct: true },
        { text: 'Un meniu dropdown', correct: false },
        { text: 'O bara de navigatie', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <menuitem> in HTML?',
      answers: [
        { text: 'Un articol de meniu', correct: false },
        { text: 'Un element intr-un meniu', correct: true },
        { text: 'Un punct de meniu interactiv', correct: false },
        { text: 'Un buton in bara de navigatie', correct: false },
      ],
    },
    {
      question: 'Ce ofera elementul <summary> in HTML?',
      answers: [
        { text: 'Un sumar al unui articol', correct: false },
        {
          text: 'Un rezumat vizibil pentru elementul <details>',
          correct: true,
        },
        { text: 'O sinteza a unei cercetari', correct: false },
        { text: 'Un rezumat al meniurilor', correct: false },
      ],
    },
    {
      question: 'Ce creeaza elementul <details> in HTML?',
      answers: [
        { text: 'O lista detaliata de elemente', correct: false },
        {
          text: 'Un widget interactiv pentru informatii suplimentare',
          correct: true,
        },
        { text: 'Detalii despre stilurile CSS aplicate', correct: false },
        { text: 'Un sumar pentru un document', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <progress> in HTML?',
      answers: [
        { text: 'Avansarea intr-un joc', correct: false },
        { text: 'Progresul unei operatiuni', correct: true },
        { text: 'Progresul incarcarii unei pagini', correct: false },
        { text: 'Un indicator de performanta', correct: false },
      ],
    },
    {
      question: 'Ce masoara elementul <meter> in HTML?',
      answers: [
        { text: 'Viteza de conexiune la internet', correct: false },
        { text: 'Valoarea scalara intr-un interval cunoscut', correct: true },
        { text: 'Nivelul de baterie al dispozitivului', correct: false },
        { text: 'Intensitatea semnalului Wi-Fi', correct: false },
      ],
    },
    {
      question: 'Ce functie are elementul <fieldset> in HTML?',
      answers: [
        { text: 'Seteaza un câmp de joc', correct: false },
        { text: 'Grupeaza elemente intr-un formular', correct: true },
        { text: 'Creeaza un teren de fotbal virtual', correct: false },
        { text: 'Defineste un set de reguli CSS', correct: false },
      ],
    },
    {
      question: 'Ce rol are elementul <legend> in HTML?',
      answers: [
        { text: 'Nararea unei povesti', correct: false },
        { text: 'Ofera un titlu pentru <fieldset>', correct: true },
        { text: 'Descrie legenda unei harti', correct: false },
        { text: 'Reprezinta o legenda urbana', correct: false },
      ],
    },
    {
      question: 'Ce contine elementul <datalist> in HTML?',
      answers: [
        { text: 'Date despre utilizatori', correct: false },
        { text: 'O lista de optiuni pentru input-uri', correct: true },
        { text: 'Informatii despre server', correct: false },
        { text: 'O baza de date locala', correct: false },
      ],
    },
    {
      question: 'Ce genereaza elementul <keygen> in HTML?',
      answers: [
        { text: 'Un set de instructiuni', correct: false },
        { text: 'O lista de chei de acces', correct: false },
        { text: 'O pereche de chei publica si privata', correct: true },
        { text: 'O cheie de criptare unica', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta elementul <output> in HTML?',
      answers: [
        { text: 'Rezultatul unei expresii sau calcul', correct: true },
        { text: 'Iesirea audio a unui videoclip', correct: false },
        { text: 'Informatii de iesire de la server', correct: false },
        { text: 'Continut generat de utilizator', correct: false },
      ],
    },
    {
      question: 'Ce rol are elementul <slot> intr-un template web?',
      answers: [
        {
          text: 'Salveaza informatii pentru utilizare ulterioara',
          correct: false,
        },
        { text: 'Este un loc pentru continut injectat', correct: true },
        { text: 'Ofera un spatiu pentru publicitate', correct: false },
        { text: 'Creeaza un spatiu de stocare local', correct: false },
      ],
    },
    {
      question: 'Ce contine elementul <template> in HTML?',
      answers: [
        { text: 'O sablona de document', correct: false },
        { text: 'Continut care nu este afisat initial', correct: true },
        { text: 'Un model pentru aplicatii web', correct: false },
        { text: 'O structura de date predefinite', correct: false },
      ],
    },
    {
      question: 'Ce rol are elementul <picture> in HTML?',
      answers: [
        { text: 'Ofera un cadru pentru imagini', correct: false },
        { text: 'Contine surse de imagine pentru <img>', correct: true },
        { text: 'Afiseaza o galerie de imagini', correct: false },
        { text: 'Creeaza o pictura digitala', correct: false },
      ],
    },
    {
      question:
        'Ce specifica elementul <source> pentru elementele <audio> si <video>?',
      answers: [
        { text: 'Codul sursa al mediilor', correct: false },
        { text: 'Sursa de alimentare pentru redare', correct: false },
        { text: 'Resurse media multiple', correct: true },
        { text: 'Locatia de stocare a fisierelor', correct: false },
      ],
    },
    {
      question:
        'Ce furnizeaza elementul <track> pentru elementele <video> si <audio>?',
      answers: [
        { text: 'Subtitrari si descrieri', correct: true },
        { text: 'Piste audio suplimentare', correct: false },
        { text: 'Efecte vizuale', correct: false },
        { text: 'Piste de navigare', correct: false },
      ],
    },
    {
      question: "Ce ofera atributul 'alt' pentru elementele <img>?",
      answers: [
        { text: 'Text alternativ pentru imagini', correct: true },
        { text: 'Dimensiuni alternative pentru imagini', correct: false },
        { text: 'Culori alternative pentru imagini', correct: false },
        { text: 'Formate alternative de fisiere', correct: false },
      ],
    },
    {
      question: "Pentru ce este utilizat atributul 'href'?",
      answers: [
        { text: 'Pentru a specifica stilul hyperlink-ului', correct: false },
        { text: 'Pentru a specifica destinatia unei legaturi', correct: true },
        { text: 'Pentru a specifica istoricul navigarii', correct: false },
        {
          text: 'Pentru a specifica tipul de mediu al legaturii',
          correct: false,
        },
      ],
    },
    {
      question: "Ce specifica atributul 'src'?",
      answers: [
        { text: 'Sursa scripturilor', correct: false },
        {
          text: 'Sursa pentru elementele <img>, <audio>, si <video>',
          correct: true,
        },
        { text: 'Sursa datelor pentru elementele <data>', correct: false },
        { text: 'Sursa stilurilor CSS', correct: false },
      ],
    },
    {
      question:
        "Ce efect are atributul 'disabled' asupra unui element de formular?",
      answers: [
        { text: 'Ascunde elementul', correct: false },
        { text: 'Schimba culoarea elementului', correct: false },
        { text: 'Dezactiveaza elementul', correct: true },
        { text: 'Reseteaza elementul', correct: false },
      ],
    },
    {
      question:
        "Ce determina atributul 'readonly' intr-un element de formular?",
      answers: [
        { text: 'Elementul nu poate fi modificat', correct: true },
        { text: 'Elementul poate fi editat', correct: false },
        { text: 'Elementul va fi ascuns', correct: false },
        { text: 'Elementul va fi sters dupa citire', correct: false },
      ],
    },
    {
      question: "Ce indica atributul 'required' intr-un formular?",
      answers: [
        { text: 'Câmpul trebuie sa fie unic', correct: false },
        { text: 'Câmpul este optional', correct: false },
        { text: 'Câmpul nu accepta caractere speciale', correct: false },
        {
          text: 'Câmpul este necesar pentru trimiterea formularului',
          correct: true,
        },
      ],
    },
    {
      question: "Ce ofera atributul 'placeholder' intr-un camp de formular?",
      answers: [
        { text: 'O valoare predefinita', correct: false },
        { text: 'Un indiciu despre valoarea asteptata', correct: true },
        {
          text: 'Un mesaj de eroare cand valoarea este gresita',
          correct: false,
        },
        { text: 'Un pattern de validare pentru date', correct: false },
      ],
    },
    {
      question:
        "Ce controleaza atributul 'autocomplete' intr-un camp de formular?",
      answers: [
        {
          text: 'Daca se completeaza automat cu valori precedente',
          correct: true,
        },
        { text: 'Daca campul este completat corect', correct: false },
        { text: 'Daca campul este obligatoriu', correct: false },
        { text: 'Daca campul verifica ortografia', correct: false },
      ],
    },
    {
      question: "Ce face atributul 'autofocus' cand o pagina se incarca?",
      answers: [
        { text: 'Dezactiveaza toate campurile de formular', correct: false },
        { text: 'Pune focusul pe un anumit element', correct: true },
        {
          text: 'Selecteaza automat toate campurile de formular',
          correct: false,
        },
        {
          text: 'Verifica toate campurile de formular pentru erori',
          correct: false,
        },
      ],
    },
    {
      question:
        "La ce foloseste atributul 'multiple' intr-un camp de formular?",
      answers: [
        { text: 'Permite introducerea de multiple caractere', correct: false },
        { text: 'Permite selectarea mai multor valori', correct: true },
        { text: 'Creeaza multiple campuri de acelasi tip', correct: false },
        { text: 'Valideaza multiple conditii pentru camp', correct: false },
      ],
    },
    {
      question: "Ce face atributul 'spellcheck' pentru un element?",
      answers: [
        { text: 'Verifica daca stilul CSS este corect', correct: false },
        {
          text: 'Verifica daca gramatica textului este corecta',
          correct: false,
        },
        {
          text: 'Activeaza sau dezactiveaza verificarea ortografica',
          correct: true,
        },
        { text: 'Controleaza daca un element este printabil', correct: false },
      ],
    },
    {
      question: "Ce permite atributul 'contenteditable' intr-un element HTML?",
      answers: [
        { text: 'Sa fie redimensionat', correct: false },
        { text: 'Sa fie copiat usor', correct: false },
        { text: 'Sa fie editat direct de catre utilizatori', correct: true },
        { text: 'Sa fie mutat in pagina', correct: false },
      ],
    },
    {
      question: "Ce specifica atributul 'draggable' pentru un element HTML?",
      answers: [
        { text: 'Daca poate fi sortat', correct: false },
        { text: 'Daca poate fi trasat', correct: true },
        { text: 'Daca poate fi dublu-clicat', correct: false },
        { text: 'Daca poate fi ascuns', correct: false },
      ],
    },
    {
      question: "Ce face atributul 'hidden' cu un element HTML?",
      answers: [
        { text: 'Il transforma in transparent', correct: false },
        { text: 'Il face nedetectabil', correct: false },
        { text: 'Il ascunde de la afisare', correct: true },
        { text: 'Il dezactiveaza', correct: false },
      ],
    },
    {
      question: "Ce seteaza atributul 'tabindex' intr-un element HTML?",
      answers: [
        { text: 'Ordinea de focusare cu tasta Tab', correct: true },
        {
          text: 'Numarul de taburi necesare pentru a ajunge la element',
          correct: false,
        },
        { text: 'Marimea taburilor in pixeli', correct: false },
        { text: 'Ordinea elementelor in codul sursa', correct: false },
      ],
    },
  ],
  // /html questions ____________________________________________________________________

  // /CSS questions _________________________________________________________
  css: [
    {
      question: "Care este selectorul CSS pentru elementele cu clasa 'button'?",
      answers: [
        { text: '.button', correct: true },
        { text: '#button', correct: false },
        { text: 'button', correct: false },
        { text: '*button', correct: false },
      ],
    },
    {
      question:
        "Cum aplici un stil doar pentru paragrafele directe dintr-o clasa 'content'?",
      answers: [
        { text: '.content p', correct: false },
        { text: '.content > p', correct: true },
        { text: '.content + p', correct: false },
        { text: '.content p:first-child', correct: false },
      ],
    },
    {
      question: 'Cum se face selectarea elementelor in CSS pentru stilizare?',
      answers: [
        {
          text: 'Prin atribute speciale adaugate in markup, cum ar fi id si class',
          correct: true,
        },
        { text: 'Prin folosirea tagurilor HTML direct', correct: false },
        { text: 'Prin scrierea de functii JavaScript', correct: false },
        { text: 'Prin utilizarea comentariilor CSS', correct: false },
      ],
    },
    {
      question: 'Din ce poate fi compus un selector CSS?',
      answers: [
        { text: 'Doar din identificatori de clasa', correct: false },
        { text: 'Doar din identificatori de id', correct: false },
        { text: 'Doar din identificatori de atribut', correct: false },
        { text: 'Din identificatori de clasa, atribut, si id', correct: true },
      ],
    },
    {
      question: "Ce reprezinta 'Box model' in CSS?",
      answers: [
        { text: 'Un model de layout pentru pagini web', correct: false },
        {
          text: 'Reprezentarea tipica a elementelor dintr-un document',
          correct: true,
        },
        { text: 'Un framework CSS', correct: false },
        { text: 'Un plugin pentru browsere', correct: false },
      ],
    },
    {
      question:
        "Care sunt unitatile de masura pentru 'width' si 'height' in CSS?",
      answers: [
        { text: 'cm, mm, in, pt', correct: false },
        { text: 'lb, kg, g, mg', correct: false },
        { text: 'px, em, %, vh, vw', correct: true },
        { text: 'hours, minutes, seconds, milliseconds', correct: false },
      ],
    },
    {
      question: "Ce controleaza proprietatea 'padding' in CSS?",
      answers: [
        { text: 'Spatiul intre elemente', correct: false },
        { text: 'Grosimea bordurii elementului', correct: false },
        {
          text: 'Spatiul ramas intre continut si bordura elementului',
          correct: true,
        },
        { text: 'Marimea fontului', correct: false },
      ],
    },
    {
      question: "Ce manipuleaza proprietatea 'border' in CSS?",
      answers: [
        { text: 'Marginile paginii', correct: false },
        {
          text: 'Culoarea, grosimea si stilul bordurii elementului',
          correct: true,
        },
        { text: 'Fundalul elementului', correct: false },
        { text: 'Animatiile elementului', correct: false },
      ],
    },
    {
      question: "Ce face proprietatea 'border-radius' in CSS?",
      answers: [
        { text: 'Creeaza borduri animate', correct: false },
        {
          text: 'Seteaza marginile exterioare ale elementului',
          correct: false,
        },
        { text: 'Manipuleaza raza colturilor bordurii', correct: true },
        { text: 'Elimina bordurile elementului', correct: false },
      ],
    },
    {
      question: "Ce controleaza proprietatea 'margin' in CSS?",
      answers: [
        { text: 'Zona din interiorul bordurii', correct: false },
        { text: 'Zona din afara bordurii elementului', correct: true },
        { text: 'Grosimea bordurii elementului', correct: false },
        { text: 'Fundalul elementului', correct: false },
      ],
    },
    {
      question: "Ce seteaza 'box-sizing' in CSS?",
      answers: [
        { text: 'Culorile elementului', correct: false },
        { text: 'Animatiile elementului', correct: false },
        { text: 'Box modelul elementului', correct: true },
        { text: 'Fonturile elementului', correct: false },
      ],
    },
    {
      question: "Ce descrie proprietatea 'position' in CSS?",
      answers: [
        { text: 'Pozitionarea fonturilor', correct: false },
        {
          text: 'Pozitionarea elementului in flowul documentului',
          correct: true,
        },
        { text: 'Ordinea elementelor in pagina', correct: false },
        { text: 'Pozitionarea imaginilor de fundal', correct: false },
      ],
    },
    {
      question: "Ce inseamna cand un element este 'pozitionat' in CSS?",
      answers: [
        { text: 'Are o pozitionare "static"', correct: false },
        { text: 'Este centrat in pagina', correct: false },
        { text: 'Are o pozitionare diferita de "static"', correct: true },
        { text: 'Este ascuns in pagina', correct: false },
      ],
    },
    {
      question: "Ce face pozitionarea 'relative' intr-un element CSS?",
      answers: [
        {
          text: 'Il fixeaza pe ecran, indiferent de pozitia scrollbarului',
          correct: false,
        },
        {
          text: 'Il pozitioneaza absolut fata de marginea paginii',
          correct: false,
        },
        {
          text: 'Il pozitioneaza relativ fata de locul sau normal',
          correct: true,
        },
        { text: 'Il elimina din flowul documentului', correct: false },
      ],
    },
    {
      question: "Ce inseamna pozitionarea 'absolute' in CSS?",
      answers: [
        { text: 'Elementul este pozitionat static', correct: false },
        {
          text: 'Elementul este pozitionat relativ fata de primul stramos pozitionat',
          correct: true,
        },
        {
          text: 'Elementul ramane fix pe ecran la defilarea paginii',
          correct: false,
        },
        {
          text: 'Elementul este pozitionat fara a afecta alte elemente',
          correct: false,
        },
      ],
    },
    {
      question: "Ce determina proprietatea 'fixed' in CSS?",
      answers: [
        { text: 'Elementul se pozitioneaza static', correct: false },
        {
          text: 'Elementul se pozitioneaza absolut fata de stramosul sau',
          correct: false,
        },
        {
          text: 'Elementul ramane fix pe ecran la defilarea paginii',
          correct: true,
        },
        {
          text: 'Elementul se pozitioneaza relativ la alt element',
          correct: false,
        },
      ],
    },
    {
      question: "Ce este 'stacking context' in CSS?",
      answers: [
        {
          text: 'Un model de ordonare pe axa "z" a elementelor',
          correct: true,
        },
        {
          text: 'Un sistem de pozitionare a elementelor pe axa "x"',
          correct: false,
        },
        { text: 'O metoda de a defini latimea elementelor', correct: false },
        {
          text: 'O setare care controleaza vizibilitatea elementelor',
          correct: false,
        },
      ],
    },
    {
      question: "Ce valori sunt posibile pentru proprietatea 'display' in CSS?",
      answers: [
        { text: 'color, background, border', correct: false },
        {
          text: 'block, inline-block, flex, inline-flex, grid, inline-grid',
          correct: true,
        },
        { text: 'padding, margin, border', correct: false },
        { text: 'relative, absolute, fixed', correct: false },
      ],
    },
    {
      question: "Ce face proprietatea 'float' in CSS?",
      answers: [
        { text: 'Schimba culoarea elementului', correct: false },
        {
          text: 'Scoate elementul din flowul normal si il pozitioneaza la stanga sau dreapta',
          correct: true,
        },
        { text: 'Face elementul transparent', correct: false },
        { text: 'Creeaza o animatie pentru element', correct: false },
      ],
    },
    {
      question: "Ce permite proprietatea 'transform' in CSS?",
      answers: [
        {
          text: 'Modificarea pozitionarii elementelor in document',
          correct: false,
        },
        {
          text: 'Modificari vizuale ale elementului randat, cum ar fi rotirea sau scalarea',
          correct: true,
        },
        { text: 'Schimbarea culorilor elementului', correct: false },
        { text: 'Aplicarea de animatii complexe', correct: false },
      ],
    },
    {
      question: 'Ce sunt combinatorii in CSS?',
      answers: [
        { text: 'Proprietati care schimba fontul elementelor', correct: false },
        {
          text: 'Simboluri speciale pentru a crea selectori avansati care se refera la relatia dintre elemente',
          correct: true,
        },
        {
          text: 'Metode JavaScript pentru manipularea stilurilor',
          correct: false,
        },
        { text: 'Setari de aliniere pentru elemente', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta specificitatea in CSS?',
      answers: [
        {
          text: 'O unitate de masura pentru dimensiunea fonturilor',
          correct: false,
        },
        {
          text: 'Mecanismul prin care se stabileste ce declaratii de stil sunt aplicate unui element',
          correct: true,
        },
        {
          text: 'O regula pentru a determina cum se mostenesc stilurile',
          correct: false,
        },
        { text: 'Prioritatea de incarcare a fisierelor CSS', correct: false },
      ],
    },
    {
      question: 'Cum functioneaza mostenirea in CSS?',
      answers: [
        {
          text: 'Stilurile unui element parinte sunt aplicate doar pe descendentii directi',
          correct: false,
        },
        {
          text: 'Toate stilurile sunt aplicate uniform pe toate elementele',
          correct: false,
        },
        {
          text: 'Anumite proprietati setate pe un element parinte se aplica si pe descendentii directi si indirecti',
          correct: true,
        },
        {
          text: 'Elementele copil suprascriu orice stil al elementului parinte',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum se realizeaza alinierea elementelor intr-un grid CSS?',
      answers: [
        { text: 'Bazat pe alinierea verticala a elementelor', correct: false },
        { text: 'Prin setarea marginei si padding-ului', correct: false },
        { text: 'Bazat pe alinierea orizontala a elementelor', correct: false },
        {
          text: 'Intre liniile gridului, nu bazat pe randuri si coloane',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce este un PWA (Progressive Web App)?',
      answers: [
        { text: 'O aplicatie nativa instalata pe telefon', correct: false },
        {
          text: 'Un website care are aspect si functionalitate de aplicatie mobila',
          correct: true,
        },
        { text: 'Un plugin pentru browser', correct: false },
        { text: 'O aplicatie desktop', correct: false },
      ],
    },
    {
      question: 'Ce face npm in contextul node.js?',
      answers: [
        { text: 'Un browser pentru node.js', correct: false },
        {
          text: 'Un package manager care instaleaza pachete cu npm install nume_pachet',
          correct: true,
        },
        {
          text: 'Un framework pentru construirea aplicatiilor',
          correct: false,
        },
        { text: 'Un compilator pentru JavaScript', correct: false },
      ],
    },
    {
      question: 'Ce specifica at-rule @keyframes in CSS?',
      answers: [
        { text: 'Setari de culoare pentru elemente', correct: false },
        {
          text: 'Cadrele prin care trebuie sa treaca o animatie',
          correct: true,
        },
        { text: 'Reguli pentru media queries', correct: false },
        { text: 'Proprietati default pentru elemente', correct: false },
      ],
    },
    {
      question:
        'Ce se intampla cu descendentii directi ai unui container de tip flex?',
      answers: [
        { text: 'Devin flex items si sunt pozitionati static', correct: false },
        {
          text: 'Devin flex items si pot fi pozitionati cu float sau position',
          correct: false,
        },
        {
          text: 'Devin flex items si sunt pozitionati folosind flexbox',
          correct: true,
        },
        { text: 'Nu sunt afectati de flex container', correct: false },
      ],
    },
    {
      question: 'Cum se aliniaza elementele intr-un flex container?',
      answers: [
        { text: 'Pe axele x si y', correct: false },
        { text: 'Doar pe axa verticala', correct: false },
        { text: 'Doar pe axa orizontala', correct: false },
        {
          text: 'Pe axa principala (main) si axa transversala (cross)',
          correct: true,
        },
      ],
    },
    {
      question:
        'Ce proprietati se folosesc pentru alinierea pe axele principala si transversala intr-un container flex?',
      answers: [
        { text: 'margin si padding', correct: false },
        { text: 'border si outline', correct: false },
        { text: 'justify-content si align-items', correct: true },
        { text: 'width si height', correct: false },
      ],
    },
    {
      question: 'Ce face proprietatea align-self intr-un container flex?',
      answers: [
        { text: 'Aliniaza continutul pe axa principala', correct: false },
        {
          text: 'Aliniaza toate flex items pe axa transversala',
          correct: false,
        },
        {
          text: 'Aliniaza individual un flex item pe axa transversala',
          correct: true,
        },
        { text: 'Seteaza ordinea flex items', correct: false },
      ],
    },
    {
      question: 'Ce descriu proprietatile flex-shrink si flex-grow?',
      answers: [
        { text: 'Directia in care flex items sunt asezate', correct: false },
        { text: 'Cum elementele sunt imbricate', correct: false },
        { text: 'Cum flex items se micsoreaza sau maresc', correct: true },
        { text: 'Culoarea si stilul flex items', correct: false },
      ],
    },
    {
      question: 'Ce face proprietatea align-content intr-un container flex?',
      answers: [
        { text: 'Aliniaza flex items pe axa principala', correct: false },
        {
          text: 'Aliniaza liniile flex container-ului cand acesta are wrap',
          correct: true,
        },
        { text: 'Controleaza flow-ul documentului', correct: false },
        { text: 'Seteaza marimea flex container-ului', correct: false },
      ],
    },
    {
      question: 'Ce este un CDN (Content Delivery Network)?',
      answers: [
        { text: 'Un sistem de caching pentru browser', correct: false },
        {
          text: 'O retea de servere pentru distributia de continut web',
          correct: true,
        },
        { text: 'Un protocol de securitate pentru internet', correct: false },
        { text: 'O colectie de baze de date distribuite', correct: false },
      ],
    },
    {
      question: "Ce controleaza proprietatea 'z-index' in CSS?",
      answers: [
        { text: 'Transparența unui element', correct: false },
        { text: 'Ordinea pe axa Z a elementelor pozitionate', correct: true },
        { text: 'Gradul de zoom al unui element', correct: false },
        {
          text: 'Cât de repede se încarcă un element pe pagină',
          correct: false,
        },
      ],
    },
    {
      question: "Ce controleaza proprietatea 'opacity' in CSS?",
      answers: [
        { text: 'Saturatia culorilor', correct: false },
        { text: 'Vizibilitatea unui element', correct: false },
        { text: 'Transparenta unui element', correct: true },
        { text: 'Inaltimea unui element', correct: false },
      ],
    },
    {
      question: "Ce seteaza proprietatea 'text-align' in CSS?",
      answers: [
        { text: 'Alinierea verticala a textului', correct: false },
        { text: 'Alinierea orizontala a textului', correct: true },
        { text: 'Culoarea textului', correct: false },
        { text: 'Marimea textului', correct: false },
      ],
    },
    {
      question: "Ce specifica proprietatea 'line-height' in CSS?",
      answers: [
        { text: 'Latimea liniei de text', correct: false },
        { text: 'Inaltimea liniei de text', correct: true },
        { text: 'Grosimea liniei de text', correct: false },
        { text: 'Lungimea liniei de text', correct: false },
      ],
    },
    {
      question: "Ce regleaza proprietatea 'letter-spacing' in CSS?",
      answers: [
        { text: 'Spatiul dintre cuvinte', correct: false },
        { text: 'Spatiul dintre randuri', correct: false },
        { text: 'Spatiul dintre caractere', correct: true },
        { text: 'Spatiul dintre paragrafe', correct: false },
      ],
    },
    {
      question: "Ce controleaza proprietatea 'word-spacing' in CSS?",
      answers: [
        { text: 'Spatiul dintre litere', correct: false },
        { text: 'Spatiul dintre randuri', correct: false },
        { text: 'Spatiul dintre cuvinte', correct: true },
        { text: 'Spatiul dintre sectiuni', correct: false },
      ],
    },
    {
      question:
        "Ce efect are proprietatea 'text-transform' asupra textului in CSS?",
      answers: [
        { text: 'Schimba fontul textului', correct: false },
        { text: 'Schimba culoarea textului', correct: false },
        { text: 'Schimba marimea textului', correct: false },
        { text: 'Schimba cazul textului', correct: true },
      ],
    },
    {
      question: "Ce face proprietatea 'text-decoration' in CSS?",
      answers: [
        { text: 'Schimba culoarea textului', correct: false },
        { text: 'Adauga sau scoate decoratiuni de text', correct: true },
        { text: 'Modifica spatierea dintre caractere', correct: false },
        { text: 'Aplica umbre textului', correct: false },
      ],
    },
    {
      question:
        "Ce efect are proprietatea 'text-shadow' asupra textului in CSS?",
      answers: [
        { text: 'Face textul negru', correct: false },
        { text: 'Adauga umbre la text', correct: true },
        { text: 'Scoate textul din fluxul normal', correct: false },
        { text: 'Creeaza o animatie pentru text', correct: false },
      ],
    },
    {
      question: "Ce specifica proprietatea 'font-family' in CSS?",
      answers: [
        { text: 'Grosimea fontului', correct: false },
        { text: 'Marimea fontului', correct: false },
        { text: 'Familia de fonturi pentru text', correct: true },
        { text: 'Stilul de font italic', correct: false },
      ],
    },
    {
      question: "Ce seteaza proprietatea 'font-size' in CSS?",
      answers: [
        { text: 'Marimea fontului', correct: true },
        { text: 'Inaltimea liniei de text', correct: false },
        { text: 'Grosimea fontului', correct: false },
        { text: 'Culoarea fontului', correct: false },
      ],
    },
    {
      question: "Ce controleaza proprietatea 'font-weight' in CSS?",
      answers: [
        { text: 'Stilul fontului', correct: false },
        { text: 'Grosimea caracterelor textului', correct: true },
        { text: 'Marimea caracterelor textului', correct: false },
        { text: 'Familia de fonturi utilizata', correct: false },
      ],
    },
    {
      question: "Ce seteaza proprietatea 'font-style' in CSS?",
      answers: [
        { text: 'Dimensiunea fontului', correct: false },
        { text: 'Stilul fontului, cum ar fi italic sau normal', correct: true },
        { text: 'Grosimea fontului', correct: false },
        { text: 'Decoratiunile fontului', correct: false },
      ],
    },
    {
      question: "Ce face proprietatea 'list-style' in CSS?",
      answers: [
        {
          text: 'Seteaza stilul pentru liste ordonate si neordonate',
          correct: true,
        },
        { text: 'Creeaza liste noi', correct: false },
        { text: 'Seteaza dimensiunea elementelor listei', correct: false },
        { text: 'Pozitioneaza listele in pagina', correct: false },
      ],
    },
    {
      question: "La ce se refera proprietatea 'list-style-type' in CSS?",
      answers: [
        { text: 'Stilul de numerotare a listei', correct: false },
        { text: 'Culoarea listei', correct: false },
        { text: 'Tipul de marker pentru liste', correct: true },
        { text: 'Pozitia marker-ului in lista', correct: false },
      ],
    },
    {
      question: "Ce determina proprietatea 'list-style-position' in CSS?",
      answers: [
        { text: 'Tipul de marker al listei', correct: false },
        { text: 'Pozitia marker-ului in liste', correct: true },
        { text: 'Culoarea marker-ului listei', correct: false },
        { text: 'Stilul general al listei', correct: false },
      ],
    },
    {
      question: "Cum folosesti proprietatea 'list-style-image' in CSS?",
      answers: [
        { text: 'Pentru a seta o culoare de fundal a listei', correct: false },
        {
          text: 'Pentru a folosi o imagine ca marker pentru lista',
          correct: true,
        },
        { text: 'Pentru a seta stilul textului in lista', correct: false },
        { text: 'Pentru a imparti lista in coloane', correct: false },
      ],
    },
    {
      question:
        "Ce efect are 'column-count' asupra continutului unui element in CSS?",
      answers: [
        { text: 'Seteaza culoarea textului', correct: false },
        {
          text: 'Imparte continutul unui element in mai multe coloane',
          correct: true,
        },
        { text: 'Creeaza borduri pentru element', correct: false },
        { text: 'Seteaza alinierea textului in element', correct: false },
      ],
    },
    {
      question: "Ce seteaza proprietatea 'column-gap' in CSS?",
      answers: [
        { text: 'Grosimea coloanelor', correct: false },
        { text: 'Spatiul intre coloane', correct: true },
        { text: 'Numarul de coloane', correct: false },
        { text: 'Culoarea coloanelor', correct: false },
      ],
    },
    {
      question: "Ce face proprietatea 'column-rule' in CSS?",
      answers: [
        { text: 'Creeaza o regula de stil pentru coloane', correct: false },
        { text: 'Seteaza o linie intre coloane', correct: true },
        { text: 'Seteaza reguli pentru textul din coloane', correct: false },
        { text: 'Seteaza latimea coloanelor', correct: false },
      ],
    },
    {
      question: "La ce foloseste proprietatea 'transform' in CSS?",
      answers: [
        { text: 'Schimba pozitia elementului', correct: false },
        {
          text: 'Permite transformari 2D sau 3D ale unui element',
          correct: true,
        },
        {
          text: 'Controleaza trecerea intre stari ale elementului',
          correct: false,
        },
        { text: 'Aplica animatii elementului', correct: false },
      ],
    },
    {
      question: "Ce controleaza proprietatea 'transition' in CSS?",
      answers: [
        { text: 'Durata animatiei', correct: false },
        {
          text: 'Trecerea lenta intre doua stari ale unui element',
          correct: true,
        },
        { text: 'Transformarea 3D a elementului', correct: false },
        { text: 'Raspunsul la hover', correct: false },
      ],
    },
    {
      question:
        "Ce efect are proprietatea 'animation' asupra elementelor in CSS?",
      answers: [
        { text: 'Creeaza o tranziție între stări', correct: false },
        { text: 'Schimbă culoarea elementului', correct: false },
        { text: 'Aplica animatii la elemente', correct: true },
        { text: 'Setează dimensiunea elementului', correct: false },
      ],
    },
    {
      question: "Ce permit 'media queries' in CSS?",
      answers: [
        { text: 'Conectarea la media', correct: false },
        { text: 'Incarcarea de imagini', correct: false },
        { text: 'Aplicarea stilurilor in functie de conditii', correct: true },
        { text: 'Crearea animatiilor', correct: false },
      ],
    },
    {
      question: "Ce controleaza proprietatea 'visibility' in CSS?",
      answers: [
        { text: 'Daca un element ocupa spatiu pe pagina', correct: false },
        { text: 'Daca un element este vizibil sau nu', correct: true },
        { text: 'Transparency of an element', correct: false },
        { text: 'Daca un element este printabil', correct: false },
      ],
    },
    {
      question: "La ce se refera proprietatea 'cursor' in CSS?",
      answers: [
        { text: 'Viteza cursorului', correct: false },
        { text: 'Tipul cursorului cand trece peste un element', correct: true },
        { text: 'Pozitia cursorului', correct: false },
        { text: 'Culoarea cursorului', correct: false },
      ],
    },
    {
      question: "Ce determina proprietatea 'pointer-events' in CSS?",
      answers: [
        { text: 'Numarul de evenimente de click', correct: false },
        {
          text: 'Daca un element raspunde la actiuni de pointer',
          correct: true,
        },
        { text: 'Daca elementul este un pointer', correct: false },
        { text: 'Tipul cursorului', correct: false },
      ],
    },
    {
      question: "Ce face proprietatea 'clip-path' in CSS?",
      answers: [
        { text: 'Copiaza un element', correct: false },
        { text: 'Creeaza o zona de vizualizare a unui element', correct: true },
        { text: 'Lipeste un element de altul', correct: false },
        { text: 'Seteaza un drum pentru animatii', correct: false },
      ],
    },
    {
      question: "Ce efect are proprietatea 'mask' asupra unui element in CSS?",
      answers: [
        { text: 'Schimba culoarea elementului', correct: false },
        { text: 'Aplica o masca peste un element', correct: true },
        { text: 'Protejeaza elementul de modificari', correct: false },
        { text: 'Creeaza un contur pentru element', correct: false },
      ],
    },
    {
      question:
        "Ce specifica proprietatea 'object-fit' pentru imagini si video in CSS?",
      answers: [
        { text: 'Modul de incarcare al obiectelor media', correct: false },
        { text: 'Cum se potrivesc in elementul lor container', correct: true },
        { text: 'Modul de aliniere a obiectelor media', correct: false },
        { text: 'Rezolutia obiectelor media', correct: false },
      ],
    },
    {
      question: "Ce face proprietatea 'filter' in CSS?",
      answers: [
        { text: 'Selecteaza elemente bazate pe query', correct: false },
        { text: 'Sorteaza elementele DOM', correct: false },
        {
          text: 'Aplica efecte grafice cum ar fi blur sau saturatie',
          correct: true,
        },
        { text: 'Creeaza filtre pentru cautari', correct: false },
      ],
    },
    {
      question: "La ce se refera proprietatea 'backdrop-filter' in CSS?",
      answers: [
        { text: 'Filtrarea elementelor din fundalul paginii', correct: false },
        {
          text: 'Aplicarea efectelor grafice la zona din spatele unui element',
          correct: true,
        },
        { text: 'Adaugarea unui fundal la un element', correct: false },
        { text: 'Setarea unei imagini de fundal', correct: false },
      ],
    },
    {
      question: "Ce permit 'counter-reset' si 'counter-increment' in CSS?",
      answers: [
        {
          text: 'Resetarea si incrementarea valorilor in input-uri',
          correct: false,
        },
        { text: 'Numararea elementelor dintr-o lista', correct: false },
        { text: 'Crearea de contoare pentru elemente', correct: true },
        {
          text: 'Resetarea si incrementarea valorilor de z-index',
          correct: false,
        },
      ],
    },
    {
      question: "Cum ajuta proprietatea 'will-change' in optimizarea CSS?",
      answers: [
        {
          text: 'Anunta browserul despre schimbari ale dimensiunii elementului',
          correct: false,
        },
        { text: 'Ajuta la cache-ul stilurilor CSS', correct: false },
        {
          text: 'Ofera indicii despre ce proprietati ale elementului se vor schimba',
          correct: true,
        },
        { text: 'Schimba proprietatile elementului la hover', correct: false },
      ],
    },
    {
      question: "Ce indica proprietatea 'contain' in CSS?",
      answers: [
        { text: 'Daca un element contine alte elemente', correct: false },
        {
          text: 'Daca un element este independent de restul DOM-ului',
          correct: true,
        },
        { text: 'Daca un element poate contine scripturi', correct: false },
        {
          text: 'Daca un element este continut de un alt element',
          correct: false,
        },
      ],
    },
    {
      question: "Ce descrie proprietatea 'mix-blend-mode' in CSS?",
      answers: [
        {
          text: 'Cum se amesteca culorile de fundal ale elementului',
          correct: false,
        },
        { text: 'Cum se aplica blend-uri la imagini', correct: true },
        { text: 'Cum se mixeaza texte de diferite dimensiuni', correct: false },
        { text: 'Cum se modifica dimensiunile unui element', correct: false },
      ],
    },
    {
      question: "La ce foloseste proprietatea 'isolation' in CSS?",
      answers: [
        { text: 'Seteaza un element ca fiind transparent', correct: false },
        {
          text: 'Creeaza o zona izolata in care elementele nu se pot suprapune',
          correct: false,
        },
        {
          text: 'Seteaza un element ca izolat, creand un nou stacking context',
          correct: true,
        },
        { text: 'Aplica efecte de izolare la imagini', correct: false },
      ],
    },
    {
      question: "Cum afecteaza proprietatea 'perspective' un element in CSS?",
      answers: [
        { text: 'Seteaza grosimea unui element', correct: false },
        { text: 'Creeaza un efect de perspectiva pentru text', correct: false },
        { text: 'Seteaza o perspectiva pentru o scena 3D', correct: true },
        { text: 'Modifica culoarea de fundal a elementului', correct: false },
      ],
    },
    {
      question: "La ce se refera proprietatea 'backface-visibility' in CSS?",
      answers: [
        { text: 'Seteaza daca elementul este vizibil sau nu', correct: false },
        {
          text: 'Seteaza culoarea partii din spate a unui element',
          correct: false,
        },
        {
          text: 'Seteaza daca partea din spate a unui element este vizibila sau nu atunci cand este rotit',
          correct: true,
        },
        {
          text: 'Seteaza grosimea partii din spate a unui element',
          correct: false,
        },
      ],
    },
    {
      question: "La ce controleaza proprietatea 'resize' in CSS?",
      answers: [
        { text: 'Controlul dimensiunilor fontului', correct: false },
        {
          text: 'Controlul modului de redimensionare a imaginilor',
          correct: false,
        },
        {
          text: 'Controlul daca si cum un element poate fi redimensionat de utilizatori',
          correct: true,
        },
        {
          text: 'Controlul alinierii textului in interiorul unui element',
          correct: false,
        },
      ],
    },
    {
      question: "Ce face proprietatea 'tab-size' in CSS?",
      answers: [
        { text: 'Controleaza dimensiunea tab-urilor in text', correct: true },
        { text: 'Seteaza numarul de spatii dintre cuvinte', correct: false },
        { text: 'Schimba culoarea textului', correct: false },
        { text: 'Modifica fontul folosit pentru text', correct: false },
      ],
    },
    {
      question:
        "Cum controleaza proprietatile 'widows' si 'orphans' randurile la inceputul si sfarsitul blocurilor de text?",
      answers: [
        { text: 'Seteaza distanta dintre randuri', correct: false },
        { text: 'Stabilesc alinierea textului', correct: false },
        { text: 'Controleaza spatierea cuvintelor', correct: false },
        {
          text: 'Controleaza comportamentul randurilor la inceputul si sfarsitul blocurilor de text in caz de rupere a paginii',
          correct: true,
        },
      ],
    },
    {
      question: "La ce se refera proprietatea 'text-overflow' in CSS?",
      answers: [
        {
          text: 'Controleaza spatiul dintre caracterele textului',
          correct: false,
        },
        {
          text: 'Indica cum se suprapune textul cu alte elemente',
          correct: false,
        },
        {
          text: 'Indica ce se intampla cand textul iese in afara unui element bloc cu supradenivelare ascunsa',
          correct: true,
        },
        { text: 'Seteaza fontul folosit pentru text', correct: false },
      ],
    },
    {
      question:
        "Cum controleaza proprietatea 'white-space' spatiile albe din text?",
      answers: [
        { text: 'Seteaza culoarea textului', correct: false },
        { text: 'Stabileste distanta dintre linii', correct: false },
        { text: 'Controleaza spatierea cuvintelor', correct: false },
        { text: 'Seteaza cum spatii albe sunt tratate', correct: true },
      ],
    },
    {
      question: "La ce se refera proprietatea 'word-break' in CSS?",
      answers: [
        { text: 'Controleaza distanta dintre cuvinte', correct: false },
        { text: 'Controleaza spatierea textului', correct: false },
        {
          text: 'Seteaza cum cuvintele sunt rupte la sfarsitul liniei',
          correct: false,
        },
        { text: 'Seteaza cum se rup cuvintele in text', correct: true },
      ],
    },
    {
      question: "Cum controleaza proprietatea 'word-wrap' cuvintele in text?",
      answers: [
        { text: 'Seteaza distanta dintre cuvinte', correct: false },
        { text: 'Controleaza spatierea cuvintelor', correct: false },
        {
          text: 'Seteaza cum cuvintele pot fi rupte pentru a preveni supradenivelarea',
          correct: true,
        },
        { text: 'Controleaza culoarea cuvintelor', correct: false },
      ],
    },
  ],
  // /CSS questions _________________________________________________________
  // PHP Questions ____________________________________________________
  php: [
    {
      question: 'Cum declari o variabila in PHP?',
      answers: [
        { text: 'var $name;', correct: false },
        { text: 'let $name;', correct: false },
        { text: '$name = value;', correct: true },
        { text: 'create $name = value;', correct: false },
      ],
    },
    {
      question: 'Cum trimiti datele unui formular catre server in PHP?',
      answers: [
        { text: 'Folosind metoda GET sau POST', correct: true },
        { text: 'Cu apeluri AJAX', correct: false },
        { text: 'Prin e-mail', correct: false },
        { text: 'Direct, fara o metoda', correct: false },
      ],
    },
    {
      question: 'Cu ce simbol incep variabilele in PHP?',
      answers: [
        { text: '$', correct: true },
        { text: '@', correct: false },
        { text: '#', correct: false },
        { text: '&', correct: false },
      ],
    },
    {
      question: 'Ce tipuri de date suporta PHP?',
      answers: [
        { text: 'int, float, string si array', correct: true },
        { text: 'boolean, char, double si list', correct: false },
        { text: 'text, number, array si object', correct: false },
        { text: 'integer, decimal, text si dictionary', correct: false },
      ],
    },
    {
      question: 'Cum pot incepe comentariile in PHP?',
      answers: [
        { text: '// sau /* */', correct: true },
        { text: '-- sau ##', correct: false },
        { text: '/* sau */', correct: false },
        { text: '/* sau //', correct: false },
      ],
    },
    {
      question:
        'Care functie in PHP este folosita pentru a afisa date pe ecran?',
      answers: [
        { text: 'echo', correct: true },
        { text: 'print', correct: false },
        { text: 'display', correct: false },
        { text: 'show', correct: false },
      ],
    },
    {
      question: 'Ce operator este folosit pentru concatenare in PHP?',
      answers: [
        { text: '.', correct: true },
        { text: '+', correct: false },
        { text: '-', correct: false },
        { text: '*', correct: false },
      ],
    },
    {
      question: 'Ce face functia date() in PHP?',
      answers: [
        { text: 'Obtine data si ora curente', correct: true },
        { text: 'Transforma textul in litere mari', correct: false },
        {
          text: 'Returneaza lungimea unei siruri de caractere',
          correct: false,
        },
        { text: 'Verifica daca o variabila este goala', correct: false },
      ],
    },
    {
      question: 'Ce reprezinta $_GET in PHP?',
      answers: [
        {
          text: 'Un array global folosit pentru a colecta date dintr-un formular HTML cu metoda GET',
          correct: true,
        },
        { text: 'Un operator pentru comparatii', correct: false },
        { text: 'Un simbol special pentru comentarii', correct: false },
        { text: 'Un tip de date scalar', correct: false },
      ],
    },
    {
      question: 'La ce este folosit $_POST in PHP?',
      answers: [
        {
          text: 'Este un array global folosit pentru a colecta date dintr-un formular HTML cu metoda POST',
          correct: true,
        },
        { text: 'Este un operator pentru comparatii', correct: false },
        { text: 'Este un simbol special pentru comentarii', correct: false },
        { text: 'Este un tip de date scalar', correct: false },
      ],
    },
    {
      question: 'Ce face functia isset() in PHP?',
      answers: [
        {
          text: 'Verifica daca o variabila este setata si nu este NULL',
          correct: true,
        },
        {
          text: 'Transforma un sir de caractere in litere mici',
          correct: false,
        },
        { text: 'Returneaza lungimea unui sir de caractere', correct: false },
        { text: 'Concateneaza doua siruri de caractere', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia empty() in PHP?',
      answers: [
        { text: 'Verifica daca o variabila este goala', correct: true },
        {
          text: 'Transforma un sir de caractere in litere mici',
          correct: false,
        },
        { text: 'Returneaza lungimea unui sir de caractere', correct: false },
        { text: 'Concateneaza doua siruri de caractere', correct: false },
      ],
    },
    {
      question: 'Ce face functia die() in PHP?',
      answers: [
        { text: 'Opreste scriptul si afiseaza un mesaj', correct: true },
        { text: 'Returneaza lungimea unui sir de caractere', correct: false },
        {
          text: 'Inlocuieste un sir cu un alt sir intr-un text',
          correct: false,
        },
        { text: 'Numara elementele unui array', correct: false },
      ],
    },
    {
      question: 'Ce returneaza functia strlen() in PHP?',
      answers: [
        { text: 'Lungimea unui sir de caractere', correct: true },
        { text: 'Un sir de caractere inversat', correct: false },
        { text: 'Valoarea absoluta a unui numar', correct: false },
        { text: 'Un array sortat', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia str_replace() in PHP?',
      answers: [
        {
          text: 'Inlocuieste un sir cu un alt sir intr-un text',
          correct: true,
        },
        { text: 'Returneaza lungimea unui sir de caractere', correct: false },
        { text: 'Numara elementele unui array', correct: false },
        { text: 'Sorteaza un array', correct: false },
      ],
    },
    {
      question: 'Ce face functia count() in PHP?',
      answers: [
        { text: 'Numara elementele unui array', correct: true },
        {
          text: 'Inlocuieste un sir cu un alt sir intr-un text',
          correct: false,
        },
        { text: 'Returneaza lungimea unui sir de caractere', correct: false },
        { text: 'Opreste scriptul si afiseaza un mesaj', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia sort() in PHP?',
      answers: [
        { text: 'Sorteaza un array', correct: true },
        {
          text: 'Inlocuieste un sir cu un alt sir intr-un text',
          correct: false,
        },
        { text: 'Returneaza lungimea unui sir de caractere', correct: false },
        { text: 'Opreste scriptul si afiseaza un mesaj', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia json_encode() in PHP?',
      answers: [
        { text: 'Codifica o valoare la JSON', correct: true },
        { text: 'Decodifica un sir JSON', correct: false },
        { text: 'Afiseaza informatii despre o variabila', correct: false },
        { text: 'Verifica daca o variabila este un array', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia json_decode() in PHP?',
      answers: [
        { text: 'Decodifica un sir JSON', correct: true },
        { text: 'Codifica o valoare la JSON', correct: false },
        { text: 'Afiseaza informatii despre o variabila', correct: false },
        { text: 'Verifica daca o variabila este un array', correct: false },
      ],
    },
    {
      question: 'Ce face functia var_dump() in PHP?',
      answers: [
        {
          text: 'Afiseaza informatii despre o variabila, inclusiv tipul si valoarea',
          correct: true,
        },
        { text: 'Codifica o valoare la JSON', correct: false },
        { text: 'Decodifica un sir JSON', correct: false },
        { text: 'Verifica daca o variabila este un array', correct: false },
      ],
    },
    {
      question: 'La ce este folosit operatorul === in PHP?',
      answers: [
        { text: 'Verifica egalitatea si tipul de date', correct: true },
        {
          text: 'Afiseaza informatii despre o variabila, inclusiv tipul si valoarea',
          correct: false,
        },
        { text: 'Codifica o valoare la JSON', correct: false },
        { text: 'Decodifica un sir JSON', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia is_array() in PHP?',
      answers: [
        { text: 'Verifica daca o variabila este un array', correct: true },
        {
          text: 'Afiseaza informatii despre o variabila, inclusiv tipul si valoarea',
          correct: false,
        },
        { text: 'Codifica o valoare la JSON', correct: false },
        { text: 'Decodifica un sir JSON', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia implode() in PHP?',
      answers: [
        {
          text: 'Converteste un array intr-un sir de caractere',
          correct: true,
        },
        {
          text: 'Afiseaza informatii despre o variabila, inclusiv tipul si valoarea',
          correct: false,
        },
        { text: 'Codifica o valoare la JSON', correct: false },
        { text: 'Decodifica un sir JSON', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia explode() in PHP?',
      answers: [
        {
          text: 'Divizeaza un sir in functie de un delimitator',
          correct: true,
        },
        {
          text: 'Afiseaza informatii despre o variabila, inclusiv tipul si valoarea',
          correct: false,
        },
        { text: 'Codifica o valoare la JSON', correct: false },
        { text: 'Decodifica un sir JSON', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia file_get_contents() in PHP?',
      answers: [
        { text: 'Citeste un fisier intr-un sir de caractere', correct: true },
        {
          text: 'Afiseaza informatii despre o variabila, inclusiv tipul si valoarea',
          correct: false,
        },
        { text: 'Codifica o valoare la JSON', correct: false },
        { text: 'Decodifica un sir JSON', correct: false },
      ],
    },
    {
      question: 'Ce face functia file_put_contents() in PHP?',
      answers: [
        { text: 'Scrie date intr-un fisier', correct: true },
        { text: 'Citeste date dintr-un fisier', correct: false },
        { text: 'Trimite un email', correct: false },
        {
          text: 'Verifica daca o variabila este un numar sau un sir numeric',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosita functia header() in PHP?',
      answers: [
        { text: 'Trimite un header HTTP brut', correct: true },
        { text: 'Scrie date intr-un fisier', correct: false },
        { text: 'Trimite un email', correct: false },
        {
          text: 'Verifica daca o variabila este un numar sau un sir numeric',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia mail() in PHP?',
      answers: [
        { text: 'Trimite email', correct: true },
        { text: 'Scrie date intr-un fisier', correct: false },
        { text: 'Trimite un header HTTP brut', correct: false },
        {
          text: 'Verifica daca o variabila este un numar sau un sir numeric',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosita functia filter_var() in PHP?',
      answers: [
        {
          text: 'Filtreaza o variabila cu un filtru specificat',
          correct: true,
        },
        { text: 'Scrie date intr-un fisier', correct: false },
        { text: 'Trimite email', correct: false },
        { text: 'Trimite un header HTTP brut', correct: false },
      ],
    },
    {
      question: 'Ce face functia preg_match() in PHP?',
      answers: [
        { text: 'Executa o cautare cu expresii regulate', correct: true },
        { text: 'Scrie date intr-un fisier', correct: false },
        { text: 'Trimite email', correct: false },
        {
          text: 'Filtreaza o variabila cu un filtru specificat',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosita functia glob() in PHP?',
      answers: [
        {
          text: 'Returneaza un array cu numele fisierelor care corespund unui model',
          correct: true,
        },
        { text: 'Executa o cautare cu expresii regulate', correct: false },
        { text: 'Trimite email', correct: false },
        {
          text: 'Filtreaza o variabila cu un filtru specificat',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia is_numeric() in PHP?',
      answers: [
        {
          text: 'Verifica daca o variabila este un numar sau un sir numeric',
          correct: true,
        },
        { text: 'Executa o cautare cu expresii regulate', correct: false },
        { text: 'Trimite email', correct: false },
        {
          text: 'Returneaza un array cu numele fisierelor care corespund unui model',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia round() in PHP?',
      answers: [
        {
          text: 'Rotunjeste un numar la cele mai apropiate zecimale',
          correct: true,
        },
        { text: 'Executa o cautare cu expresii regulate', correct: false },
        { text: 'Trimite email', correct: false },
        {
          text: 'Filtreaza o variabila cu un filtru specificat',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia rand() in PHP?',
      answers: [
        { text: 'Genereaza un numar intreg aleatoriu', correct: true },
        { text: 'Executa o cautare cu expresii regulate', correct: false },
        { text: 'Trimite email', correct: false },
        { text: 'Scrie date intr-un fisier', correct: false },
      ],
    },
    {
      question: 'Ce face functia gettype() in PHP?',
      answers: [
        { text: 'Returneaza tipul de date al unei variabile', correct: true },
        { text: 'Seteaza tipul de date al unei variabile', correct: false },
        {
          text: 'Returneaza valoarea intreaga a unei variabile',
          correct: false,
        },
        {
          text: 'Returneaza valoarea in virgula mobila a unei variabile',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosita functia settype() in PHP?',
      answers: [
        { text: 'Seteaza tipul de date al unei variabile', correct: true },
        { text: 'Returneaza tipul de date al unei variabile', correct: false },
        {
          text: 'Returneaza valoarea intreaga a unei variabile',
          correct: false,
        },
        {
          text: 'Returneaza valoarea in virgula mobila a unei variabile',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia intval() in PHP?',
      answers: [
        {
          text: 'Returneaza valoarea intreaga a unei variabile',
          correct: true,
        },
        { text: 'Seteaza tipul de date al unei variabile', correct: false },
        { text: 'Returneaza tipul de date al unei variabile', correct: false },
        {
          text: 'Returneaza valoarea in virgula mobila a unei variabile',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia floatval() in PHP?',
      answers: [
        {
          text: 'Returneaza valoarea in virgula mobila a unei variabile',
          correct: true,
        },
        { text: 'Seteaza tipul de date al unei variabile', correct: false },
        { text: 'Returneaza tipul de date al unei variabile', correct: false },
        {
          text: 'Returneaza valoarea intreaga a unei variabile',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia strval() in PHP?',
      answers: [
        {
          text: 'Returneaza valoarea sir de caractere a unei variabile',
          correct: true,
        },
        { text: 'Seteaza tipul de date al unei variabile', correct: false },
        { text: 'Returneaza tipul de date al unei variabile', correct: false },
        {
          text: 'Returneaza valoarea intreaga a unei variabile',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosita functia is_string() in PHP?',
      answers: [
        {
          text: 'Verifica daca o variabila este un sir de caractere',
          correct: true,
        },
        {
          text: 'Verifica daca o variabila este de tip boolean',
          correct: false,
        },
        { text: 'Verifica daca o variabila este de tip int', correct: false },
        { text: 'Verifica daca o variabila este de tip float', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia is_bool() in PHP?',
      answers: [
        {
          text: 'Verifica daca o variabila este de tip boolean',
          correct: true,
        },
        {
          text: 'Verifica daca o variabila este un sir de caractere',
          correct: false,
        },
        { text: 'Verifica daca o variabila este de tip int', correct: false },
        { text: 'Verifica daca o variabila este de tip float', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia is_object() in PHP?',
      answers: [
        { text: 'Verifica daca o variabila este un obiect', correct: true },
        {
          text: 'Verifica daca o variabila este de tip boolean',
          correct: false,
        },
        {
          text: 'Verifica daca o variabila este un sir de caractere',
          correct: false,
        },
        { text: 'Verifica daca o variabila este de tip int', correct: false },
      ],
    },
    {
      question: 'Ce face functia unset() in PHP?',
      answers: [
        { text: 'Distruge o variabila specificata', correct: true },
        { text: 'Verifica daca o variabila este setata', correct: false },
        { text: 'Afiseaza date pe ecran', correct: false },
        { text: 'Verifica daca o variabila este NULL', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia is_null() in PHP?',
      answers: [
        { text: 'Verifica daca o variabila este NULL', correct: true },
        {
          text: 'Verifica daca o variabila este de tip boolean',
          correct: false,
        },
        { text: 'Verifica daca o variabila este un obiect', correct: false },
        {
          text: 'Verifica daca o variabila este un sir de caractere',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosita functia isset() in PHP?',
      answers: [
        { text: 'Verifica daca o variabila a fost setata', correct: true },
        {
          text: 'Verifica daca o variabila este de tip boolean',
          correct: false,
        },
        { text: 'Verifica daca o variabila este un obiect', correct: false },
        { text: 'Verifica daca o variabila este NULL', correct: false },
      ],
    },
    {
      question: 'Ce colecteaza $_GET in PHP?',
      answers: [
        { text: 'Date trimise prin URL', correct: true },
        { text: 'Date trimise prin HTTP POST', correct: false },
        { text: 'Variabile globale', correct: false },
        { text: 'Date dintr-un formular HTML', correct: false },
      ],
    },
    {
      question: 'Ce colecteaza $_POST in PHP?',
      answers: [
        { text: 'Date trimise prin HTTP POST', correct: true },
        { text: 'Date trimise prin URL', correct: false },
        { text: 'Variabile globale', correct: false },
        { text: 'Date dintr-un formular HTML', correct: false },
      ],
    },
    {
      question: 'Ce face functia die() in PHP?',
      answers: [
        {
          text: 'Opreste scriptul si afiseaza un mesaj daca intampina o eroare',
          correct: true,
        },
        { text: 'Concateneaza doua siruri de caractere', correct: false },
        { text: 'Verifica daca o variabila este goala', correct: false },
        { text: 'Trimite headere HTTP', correct: false },
      ],
    },
    {
      question: 'La ce este folosit operatorul .= in PHP?',
      answers: [
        { text: 'Pentru concatenare', correct: true },
        {
          text: 'Pentru a verifica daca o variabila este goala',
          correct: false,
        },
        { text: 'Pentru a trimite headere HTTP', correct: false },
        { text: 'Pentru a opri scriptul in caz de eroare', correct: false },
      ],
    },
    {
      question: 'Ce verifica functia empty() in PHP?',
      answers: [
        { text: 'Daca o variabila este goala', correct: true },
        { text: 'Daca o variabila este setata', correct: false },
        { text: 'Daca o variabila este NULL', correct: false },
        { text: 'Daca o variabila contine o valoare booleana', correct: false },
      ],
    },
    {
      question: 'La ce este folosita functia header() in PHP?',
      answers: [
        { text: 'Pentru a trimite headere HTTP', correct: true },
        {
          text: 'Pentru a verifica daca o variabila este goala',
          correct: false,
        },
        { text: 'Pentru a opri scriptul in caz de eroare', correct: false },
        { text: 'Pentru a citi un fisier intr-un sir', correct: false },
      ],
    },
    {
      question: 'Ce face metoda POST in PHP?',
      answers: [
        { text: 'Trimite date in corpul requestului', correct: true },
        { text: 'Adauga date la URL', correct: false },
        { text: 'Trimite headere HTTP', correct: false },
        { text: 'Verifica daca o variabila este goala', correct: false },
      ],
    },
    {
      question: 'Ce face functia file_get_contents() in PHP?',
      answers: [
        { text: 'Citește un fișier intr-un șir', correct: true },
        { text: 'Scrie un șir intr-un fișier', correct: false },
        { text: 'Trimite headere HTTP', correct: false },
        {
          text: 'Oprește scriptul și afișează un mesaj dacă întâmpină o eroare',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia file_put_contents() in PHP?',
      answers: [
        { text: 'Scrie un șir intr-un fișier', correct: true },
        { text: 'Citește un fișier intr-un șir', correct: false },
        { text: 'Trimite headere HTTP', correct: false },
        {
          text: 'Oprește scriptul și afișează un mesaj dacă întâmpină o eroare',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosita functia json_encode() in PHP?',
      answers: [
        { text: 'Pentru a converti un array in JSON', correct: true },
        {
          text: 'Pentru a verifica daca o variabila este goala',
          correct: false,
        },
        { text: 'Pentru a trimite headere HTTP', correct: false },
        { text: 'Pentru a opri scriptul in caz de eroare', correct: false },
      ],
    },
    {
      question: 'Ce face functia json_decode() in PHP?',
      answers: [
        { text: 'Convertește un JSON într-un array sau obiect', correct: true },
        {
          text: 'Convertește un array sau obiect într-un JSON',
          correct: false,
        },
        { text: 'Verifică dacă o variabilă este goală', correct: false },
        { text: 'Trimite headere HTTP', correct: false },
      ],
    },
    {
      question: 'La ce sunt folosite sesiunile în PHP?',
      answers: [
        {
          text: 'Pentru a păstra date de utilizator pe multiple pagini',
          correct: true,
        },
        { text: 'Pentru a trimite email-uri', correct: false },
        {
          text: 'Pentru a verifica dacă o variabilă este goală',
          correct: false,
        },
        { text: 'Pentru a opri scriptul în caz de eroare', correct: false },
      ],
    },
    {
      question: 'Ce face functia session_start() în PHP?',
      answers: [
        {
          text: 'Începe o nouă sesiune sau continuă una existentă',
          correct: true,
        },
        {
          text: 'Convertește un JSON într-un array sau obiect',
          correct: false,
        },
        { text: 'Formatează o dată/oră locală', correct: false },
        { text: 'Returnează timpul actual ca timestamp Unix', correct: false },
      ],
    },
    {
      question: 'Ce face functia date() în PHP?',
      answers: [
        { text: 'Formatează o dată/oră locală', correct: true },
        { text: 'Returnează timpul actual ca timestamp Unix', correct: false },
        {
          text: 'Convertește un JSON într-un array sau obiect',
          correct: false,
        },
        {
          text: 'Începe o nouă sesiune sau continuă una existentă',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia time() în PHP?',
      answers: [
        { text: 'Returnează timpul actual ca timestamp Unix', correct: true },
        { text: 'Formatează o dată/oră locală', correct: false },
        {
          text: 'Convertește un JSON într-un array sau obiect',
          correct: false,
        },
        {
          text: 'Începe o nouă sesiune sau continuă una existentă',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia mktime() în PHP?',
      answers: [
        { text: 'Returnează un timestamp Unix pentru o dată', correct: true },
        { text: 'Formatează o dată/oră locală', correct: false },
        {
          text: 'Convertește un JSON într-un array sau obiect',
          correct: false,
        },
        {
          text: 'Începe o nouă sesiune sau continuă una existentă',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia strtotime() în PHP?',
      answers: [
        {
          text: 'Parsează orice descriere a datei textuale în engleză în timestamp Unix',
          correct: true,
        },
        { text: 'Formatează o dată/oră locală', correct: false },
        {
          text: 'Convertește un JSON într-un array sau obiect',
          correct: false,
        },
        {
          text: 'Începe o nouă sesiune sau continuă una existentă',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia number_format() în PHP?',
      answers: [
        { text: 'Formatează numere ca șiruri de caractere', correct: true },
        { text: 'Generează numere întregi aleatorii', correct: false },
        {
          text: 'Returnează cel mai mic întreg care este mai mare sau egal cu un număr',
          correct: false,
        },
        {
          text: 'Returnează cel mai mare întreg care este mai mic sau egal cu un număr',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia ceil() în PHP?',
      answers: [
        {
          text: 'Returnează cel mai mic întreg care este mai mare sau egal cu un număr',
          correct: true,
        },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        {
          text: 'Returnează cel mai mare întreg care este mai mic sau egal cu un număr',
          correct: false,
        },
        {
          text: 'Rotunjește un număr la cel mai apropiat întreg',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia floor() în PHP?',
      answers: [
        {
          text: 'Returnează cel mai mare întreg care este mai mic sau egal cu un număr',
          correct: true,
        },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        {
          text: 'Returnează cel mai mic întreg care este mai mare sau egal cu un număr',
          correct: false,
        },
        {
          text: 'Rotunjește un număr la cel mai apropiat întreg',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face functia round() în PHP?',
      answers: [
        {
          text: 'Rotunjește un număr la cel mai apropiat întreg',
          correct: true,
        },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        {
          text: 'Returnează cel mai mic întreg care este mai mare sau egal cu un număr',
          correct: false,
        },
        {
          text: 'Returnează cel mai mare întreg care este mai mic sau egal cu un număr',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face funcția sqrt() în PHP?',
      answers: [
        { text: 'Returnează radacina patrata a unui numar', correct: true },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        { text: 'Numara cuvintele dintr-un sir', correct: false },
        { text: 'Inverseaza un sir', correct: false },
      ],
    },
    {
      question: 'Ce face funcția strlen() în PHP?',
      answers: [
        { text: 'Returnează lungimea unui sir de caractere', correct: true },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        { text: 'Numara cuvintele dintr-un sir', correct: false },
        { text: 'Inverseaza un sir', correct: false },
      ],
    },
    {
      question: 'Ce face funcția str_word_count() în PHP?',
      answers: [
        { text: 'Returnează lungimea unui sir de caractere', correct: false },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        { text: 'Numara cuvintele dintr-un sir', correct: true },
        { text: 'Inverseaza un sir', correct: false },
      ],
    },
    {
      question: 'Ce face funcția strrev() în PHP?',
      answers: [
        { text: 'Returnează lungimea unui sir de caractere', correct: false },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        { text: 'Numara cuvintele dintr-un sir', correct: false },
        { text: 'Inverseaza un sir', correct: true },
      ],
    },
    {
      question: 'Ce face funcția ucwords() în PHP?',
      answers: [
        { text: 'Returnează lungimea unui sir de caractere', correct: false },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        { text: 'Numara cuvintele dintr-un sir', correct: false },
        {
          text: 'Converteste primul caracter al fiecarui cuvant intr-un sir la majuscula',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face funcția lcfirst() în PHP?',
      answers: [
        { text: 'Returnează lungimea unui sir de caractere', correct: false },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        { text: 'Numara cuvintele dintr-un sir', correct: false },
        {
          text: 'Converteste primul caracter al unui sir la minuscula',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face funcția strip_tags() în PHP?',
      answers: [
        { text: 'Elimina tagurile HTML si PHP dintr-un sir', correct: true },
        {
          text: 'Adauga backslashes inainte de caracterele speciale dintr-un sir',
          correct: false,
        },
        { text: 'Compara doua siruri', correct: false },
        { text: 'Calculeaza hash-ul MD5 al unui sir', correct: false },
      ],
    },
    {
      question: 'Ce face funcția addslashes() în PHP?',
      answers: [
        { text: 'Elimina tagurile HTML si PHP dintr-un sir', correct: false },
        {
          text: 'Adauga backslashes inainte de caracterele speciale dintr-un sir',
          correct: true,
        },
        { text: 'Compara doua siruri', correct: false },
        { text: 'Calculeaza hash-ul MD5 al unui sir', correct: false },
      ],
    },
    {
      question: 'Ce face funcția strcmp() în PHP?',
      answers: [
        { text: 'Elimina tagurile HTML si PHP dintr-un sir', correct: false },
        {
          text: 'Adauga backslashes inainte de caracterele speciale dintr-un sir',
          correct: false,
        },
        { text: 'Compara doua siruri', correct: true },
        { text: 'Calculeaza hash-ul MD5 al unui sir', correct: false },
      ],
    },
    {
      question: 'Ce face funcția md5() în PHP?',
      answers: [
        { text: 'Elimina tagurile HTML si PHP dintr-un sir', correct: false },
        {
          text: 'Adauga backslashes inainte de caracterele speciale dintr-un sir',
          correct: false,
        },
        { text: 'Compara doua siruri', correct: false },
        { text: 'Calculeaza hash-ul MD5 al unui sir', correct: true },
      ],
    },
    {
      question: 'Ce face functia pi() în PHP?',
      answers: [
        { text: 'Returnează valoarea lui pi', correct: true },
        { text: 'Formatează numere ca șiruri de caractere', correct: false },
        {
          text: 'Returnează cel mai mic întreg care este mai mare sau egal cu un număr',
          correct: false,
        },
        {
          text: 'Returnează cel mai mare întreg care este mai mic sau egal cu un număr',
          correct: false,
        },
      ],
    },
  ],
  // /PHP Questions ____________________________________________________
  // SQL Questions ____________________________________________________________
  mysql: [
    {
      question: 'Cum selectezi toate coloanele dintr-un tabel MySQL?',
      answers: [
        { text: 'SELECT * FROM tabel', correct: true },
        { text: 'SELECT tabel.*', correct: false },
        { text: 'SELECT tabel', correct: false },
        { text: 'SHOW tabel', correct: false },
      ],
    },
    {
      question: 'Cum actualizezi un record in MySQL?',
      answers: [
        { text: 'UPDATE tabel SET coloana = valoare', correct: true },
        { text: 'MODIFY tabel SET coloana = valoare', correct: false },
        { text: 'CHANGE tabel SET coloana = valoare', correct: false },
        { text: 'EDIT tabel WHERE coloana = valoare', correct: false },
      ],
    },
    {
      question: 'Ce face comanda SELECT în MySQL?',
      answers: [
        {
          text: 'Adauga noi randuri intr-o tabela din baza de date',
          correct: false,
        },
        { text: 'Modifica datele existente dintr-un tabel', correct: false },
        {
          text: 'Interoghează o baza de date și recuperează datele dorite',
          correct: true,
        },
        { text: 'Șterge înregistrări dintr-o tabelă', correct: false },
      ],
    },
    {
      question: 'Ce face comanda INSERT INTO în MySQL?',
      answers: [
        {
          text: 'Adauga noi randuri intr-o tabela din baza de date',
          correct: true,
        },
        { text: 'Modifica datele existente dintr-un tabel', correct: false },
        {
          text: 'Interoghează o baza de date și recuperează datele dorite',
          correct: false,
        },
        { text: 'Șterge înregistrări dintr-o tabelă', correct: false },
      ],
    },
    {
      question: 'Ce este cheia primară în MySQL?',
      answers: [
        { text: 'O comanda SQL speciala', correct: false },
        {
          text: 'O coloană care identifica in mod unic fiecare înregistrare din tabel',
          correct: true,
        },
        { text: 'Un tip de date în MySQL', correct: false },
        { text: 'Un sistem de autentificare', correct: false },
      ],
    },
    {
      question: 'Ce face comanda UPDATE în MySQL?',
      answers: [
        {
          text: 'Adauga noi randuri intr-o tabela din baza de date',
          correct: false,
        },
        { text: 'Modifica datele existente dintr-un tabel', correct: true },
        {
          text: 'Interoghează o baza de date și recuperează datele dorite',
          correct: false,
        },
        { text: 'Șterge înregistrări dintr-o tabelă', correct: false },
      ],
    },
    {
      question: 'Ce face comanda DELETE în MySQL?',
      answers: [
        {
          text: 'Adauga noi randuri intr-o tabela din baza de date',
          correct: false,
        },
        { text: 'Modifica datele existente dintr-un tabel', correct: false },
        {
          text: 'Interoghează o baza de date și recuperează datele dorite',
          correct: false,
        },
        { text: 'Șterge înregistrări dintr-o tabelă', correct: true },
      ],
    },
    {
      question: 'La ce este folosita clauza WHERE în MySQL?',
      answers: [
        {
          text: 'Adauga noi randuri intr-o tabela din baza de date',
          correct: false,
        },
        { text: 'Modifica datele existente dintr-un tabel', correct: false },
        {
          text: 'Interoghează o baza de date și recuperează datele dorite',
          correct: false,
        },
        { text: 'Filtrează înregistrările', correct: true },
      ],
    },
    {
      question: 'La ce este folosită comanda JOIN în MySQL?',
      answers: [
        { text: 'Pentru a crea o nouă tabelă', correct: false },
        {
          text: 'Pentru a combina rânduri din două sau mai multe tabele',
          correct: true,
        },
        { text: 'Pentru a șterge o tabelă și datele sale', correct: false },
        { text: 'Pentru a modifica coloanele unei tabele', correct: false },
      ],
    },
    {
      question: 'Ce face comanda CREATE TABLE în MySQL?',
      answers: [
        {
          text: 'Pentru a combina rânduri din două sau mai multe tabele',
          correct: false,
        },
        { text: 'Pentru a crea o nouă tabelă', correct: true },
        { text: 'Pentru a crea un index pe coloane', correct: false },
        {
          text: 'Pentru a adăuga, șterge sau modifica coloanele unei tabele existente',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează funcția COUNT() în MySQL?',
      answers: [
        { text: 'Numărul de rânduri dintr-un set de rezultate', correct: true },
        { text: 'Numele coloanelor unei tabele', correct: false },
        { text: 'Valoarea maximă dintr-un set de date', correct: false },
        { text: 'Un șir de caractere', correct: false },
      ],
    },
    {
      question: 'La ce este folosită comanda DROP TABLE în MySQL?',
      answers: [
        {
          text: 'Pentru a combina rânduri din două sau mai multe tabele',
          correct: false,
        },
        { text: 'Pentru a crea o nouă tabelă', correct: false },
        { text: 'Pentru a șterge o tabelă și datele sale', correct: true },
        { text: 'Pentru a modifica coloanele unei tabele', correct: false },
      ],
    },
    {
      question: 'La ce este folosit INDEX în MySQL?',
      answers: [
        { text: 'Pentru a crea o nouă tabelă', correct: false },
        {
          text: 'Pentru a combina rânduri din două sau mai multe tabele',
          correct: false,
        },
        {
          text: 'Pentru a crea un index pe una sau mai multe coloane',
          correct: true,
        },
        {
          text: 'Pentru a adăuga, șterge sau modifica coloanele unei tabele existente',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda ALTER TABLE în MySQL?',
      answers: [
        { text: 'Pentru a crea o nouă tabelă', correct: false },
        {
          text: 'Pentru a combina rânduri din două sau mai multe tabele',
          correct: false,
        },
        {
          text: 'Pentru a adăuga, șterge sau modifica coloanele într-o tabelă existentă',
          correct: true,
        },
        { text: 'Pentru a crea un index pe coloane', correct: false },
      ],
    },
    {
      question: 'La ce este folosită clauza GROUP BY în MySQL?',
      answers: [
        {
          text: 'Pentru a combina rânduri din două sau mai multe tabele',
          correct: false,
        },
        {
          text: 'Pentru a grupa rezultatele în funcție de una sau mai multe coloane și pentru a aplica funcții agregate',
          correct: true,
        },
        {
          text: 'Pentru a crea un index pe coloane',
          correct: false,
        },
        {
          text: 'Pentru a adăuga, șterge sau modifica coloanele unei tabele existente',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face funcția MAX() în MySQL?',
      answers: [
        {
          text: 'Returnează valoarea minimă dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Returnează valoarea maximă dintr-o coloană numerică',
          correct: true,
        },
        {
          text: 'Numără numărul de rânduri dintr-un set de rezultate',
          correct: false,
        },
        {
          text: 'Returnează suma unei coloane numerice',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face funcția MIN() în MySQL?',
      answers: [
        {
          text: 'Returnează valoarea maximă dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Returnează valoarea minimă dintr-o coloană numerică',
          correct: true,
        },
        {
          text: 'Numără numărul de rânduri dintr-un set de rezultate',
          correct: false,
        },
        {
          text: 'Returnează suma unei coloane numerice',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda SHOW DATABASES în MySQL?',
      answers: [
        {
          text: 'Pentru a combina rânduri din două sau mai multe tabele',
          correct: false,
        },
        {
          text: 'Pentru a grupa rezultatele în funcție de una sau mai multe coloane și pentru a aplica funcții agregate',
          correct: false,
        },
        {
          text: 'Pentru a lista toate bazele de date disponibile pe server',
          correct: true,
        },
        {
          text: 'Pentru a adăuga, șterge sau modifica coloanele unei tabele existente',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face funcția SUM() în MySQL?',
      answers: [
        {
          text: 'Returnează valoarea maximă dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Returnează valoarea minimă dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Returnează suma unei coloane numerice',
          correct: true,
        },
        {
          text: 'Numără numărul de rânduri dintr-un set de rezultate',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda GRANT în MySQL?',
      answers: [
        {
          text: 'Pentru a combina rânduri din două sau mai multe tabele',
          correct: false,
        },
        {
          text: 'Pentru a grupa rezultatele în funcție de una sau mai multe coloane și pentru a aplica funcții agregate',
          correct: false,
        },
        {
          text: 'Pentru a lista toate bazele de date disponibile pe server',
          correct: false,
        },
        {
          text: 'Pentru a acorda permisiuni specifice utilizatorilor asupra bazei de date',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită clauza HAVING în MySQL?',
      answers: [
        {
          text: 'Pentru a interoga o bază de date și a recupera datele dorite',
          correct: false,
        },
        {
          text: 'Pentru a filtra rezultatele unei interogări în funcție de o condiție',
          correct: true,
        },
        {
          text: 'Pentru a calcula media valorilor dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Pentru a redenumi o tabelă',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face funcția AVG() în MySQL?',
      answers: [
        {
          text: 'Pentru a interoga o bază de date și a recupera datele dorite',
          correct: false,
        },
        {
          text: 'Pentru a calcula media valorilor dintr-o coloană numerică',
          correct: true,
        },
        {
          text: 'Pentru a filtra rezultatele unei interogări în funcție de o condiție',
          correct: false,
        },
        {
          text: 'Pentru a redenumi o tabelă',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda RENAME TABLE în MySQL?',
      answers: [
        {
          text: 'Pentru a interoga o bază de date și a recupera datele dorite',
          correct: false,
        },
        {
          text: 'Pentru a calcula media valorilor dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Pentru a redenumi o tabelă',
          correct: true,
        },
        {
          text: 'Pentru a lista toate tabelele dintr-o bază de date specifică',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face comanda SHOW TABLES în MySQL?',
      answers: [
        {
          text: 'Pentru a interoga o bază de date și a recupera datele dorite',
          correct: false,
        },
        {
          text: 'Pentru a calcula media valorilor dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Pentru a redenumi o tabelă',
          correct: false,
        },
        {
          text: 'Pentru a lista toate tabelele dintr-o bază de date specifică',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită funcția CONCAT() în MySQL?',
      answers: [
        {
          text: 'Pentru a interoga o bază de date și a recupera datele dorite',
          correct: false,
        },
        {
          text: 'Pentru a calcula media valorilor dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Pentru a concatena două sau mai multe șiruri de caractere',
          correct: true,
        },
        {
          text: 'Pentru a lista toate tabelele dintr-o bază de date specifică',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda REVOKE în MySQL?',
      answers: [
        {
          text: 'Pentru a interoga o bază de date și a recupera datele dorite',
          correct: false,
        },
        {
          text: 'Pentru a calcula media valorilor dintr-o coloană numerică',
          correct: false,
        },
        {
          text: 'Pentru a redenumi o tabelă',
          correct: false,
        },
        {
          text: 'Pentru a anula permisiunile acordate utilizatorilor asupra bazei de date',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face funcția NOW() în MySQL?',
      answers: [
        {
          text: 'Returnează data și ora curente',
          correct: true,
        },
        {
          text: 'Creează o nouă bază de date',
          correct: false,
        },
        {
          text: 'Restricționează numărul de rânduri returnate de o interogare',
          correct: false,
        },
        {
          text: 'Creează o copie de siguranță a bazei de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda CREATE DATABASE în MySQL?',
      answers: [
        {
          text: 'Returnează data și ora curente',
          correct: false,
        },
        {
          text: 'Creează o nouă bază de date',
          correct: true,
        },
        {
          text: 'Restricționează numărul de rânduri returnate de o interogare',
          correct: false,
        },
        {
          text: 'Creează o copie de siguranță a bazei de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită clauza LIMIT în MySQL?',
      answers: [
        {
          text: 'Returnează data și ora curente',
          correct: false,
        },
        {
          text: 'Creează o nouă bază de date',
          correct: false,
        },
        {
          text: 'Restricționează numărul de rânduri returnate de o interogare',
          correct: true,
        },
        {
          text: 'Creează o copie de siguranță a bazei de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda BACKUP DATABASE în MySQL?',
      answers: [
        {
          text: 'Returnează data și ora curente',
          correct: false,
        },
        {
          text: 'Creează o nouă bază de date',
          correct: false,
        },
        {
          text: 'Restricționează numărul de rânduri returnate de o interogare',
          correct: false,
        },
        {
          text: 'Creează o copie de siguranță a bazei de date',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face funcția LENGTH() în MySQL?',
      answers: [
        {
          text: 'Returnează data și ora curente',
          correct: false,
        },
        {
          text: 'Creează o nouă bază de date',
          correct: false,
        },
        {
          text: 'Restricționează numărul de rânduri returnate de o interogare',
          correct: false,
        },
        {
          text: 'Returnează lungimea unui șir de caractere',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda RESTORE DATABASE în MySQL?',
      answers: [
        {
          text: 'Returnează data și ora curente',
          correct: false,
        },
        {
          text: 'Creează o nouă bază de date',
          correct: false,
        },
        {
          text: 'Restricționează numărul de rânduri returnate de o interogare',
          correct: false,
        },
        {
          text: 'Restaurează o bază de date dintr-o copie de siguranță',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face funcția ROUND() în MySQL?',
      answers: [
        {
          text: 'Rotunjește un număr la un număr specific de zecimale',
          correct: true,
        },
        {
          text: 'Creează un index pe una sau mai multe coloane ale unei tabele',
          correct: false,
        },
        {
          text: 'Extrage o parte dintr-un șir de caractere',
          correct: false,
        },
        {
          text: 'Listează toți utilizatorii de bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda CREATE INDEX în MySQL?',
      answers: [
        {
          text: 'Rotunjește un număr la un număr specific de zecimale',
          correct: false,
        },
        {
          text: 'Creează un index pe una sau mai multe coloane ale unei tabele',
          correct: true,
        },
        {
          text: 'Extrage o parte dintr-un șir de caractere',
          correct: false,
        },
        {
          text: 'Listează toți utilizatorii de bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită funcția SUBSTRING() în MySQL?',
      answers: [
        {
          text: 'Rotunjește un număr la un număr specific de zecimale',
          correct: false,
        },
        {
          text: 'Creează un index pe una sau mai multe coloane ale unei tabele',
          correct: false,
        },
        {
          text: 'Extrage o parte dintr-un șir de caractere',
          correct: true,
        },
        {
          text: 'Listează toți utilizatorii de bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda SHOW USERS în MySQL?',
      answers: [
        {
          text: 'Rotunjește un număr la un număr specific de zecimale',
          correct: false,
        },
        {
          text: 'Creează un index pe una sau mai multe coloane ale unei tabele',
          correct: false,
        },
        {
          text: 'Extrage o parte dintr-un șir de caractere',
          correct: false,
        },
        {
          text: 'Listează toți utilizatorii de bază de date',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face funcția ABS() în MySQL?',
      answers: [
        {
          text: 'Rotunjește un număr la un număr specific de zecimale',
          correct: false,
        },
        {
          text: 'Creează un index pe una sau mai multe coloane ale unei tabele',
          correct: false,
        },
        {
          text: 'Extrage o parte dintr-un șir de caractere',
          correct: false,
        },
        {
          text: 'Returnează valoarea absolută a unui număr',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda TRUNCATE TABLE în MySQL?',
      answers: [
        {
          text: 'Rotunjește un număr la un număr specific de zecimale',
          correct: false,
        },
        {
          text: 'Creează un index pe una sau mai multe coloane ale unei tabele',
          correct: false,
        },
        {
          text: 'Extrage o parte dintr-un șir de caractere',
          correct: false,
        },
        {
          text: 'Șterge toate rândurile dintr-o tabelă fără a șterge tabela însăși',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face funcția RAND() în MySQL?',
      answers: [
        {
          text: 'Generează un număr aleatoriu între 0 și 1',
          correct: true,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
        {
          text: 'Transformă toate literele unui șir de caractere în majuscule',
          correct: false,
        },
        {
          text: 'Verifică integritatea unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda DROP DATABASE în MySQL?',
      answers: [
        {
          text: 'Generează un număr aleatoriu între 0 și 1',
          correct: false,
        },
        {
          text: 'Șterge o bază de date',
          correct: true,
        },
        {
          text: 'Transformă toate literele unui șir de caractere în majuscule',
          correct: false,
        },
        {
          text: 'Verifică integritatea unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită funcția UCASE() în MySQL?',
      answers: [
        {
          text: 'Generează un număr aleatoriu între 0 și 1',
          correct: false,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
        {
          text: 'Transformă toate literele unui șir de caractere în majuscule',
          correct: true,
        },
        {
          text: 'Verifică integritatea unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda CHECK TABLE în MySQL?',
      answers: [
        {
          text: 'Generează un număr aleatoriu între 0 și 1',
          correct: false,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
        {
          text: 'Transformă toate literele unui șir de caractere în majuscule',
          correct: false,
        },
        {
          text: 'Verifică integritatea unei tabele',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită funcția LCASE() în MySQL?',
      answers: [
        {
          text: 'Generează un număr aleatoriu între 0 și 1',
          correct: false,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
        {
          text: 'Transformă toate literele unui șir de caractere în minuscule',
          correct: true,
        },
        {
          text: 'Verifică integritatea unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda ROLLBACK în MySQL?',
      answers: [
        {
          text: 'Generează un număr aleatoriu între 0 și 1',
          correct: false,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
        {
          text: 'Transformă toate literele unui șir de caractere în minuscule',
          correct: false,
        },
        {
          text: 'Anulează orice modificare făcută în cadrul unei tranzacții',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face funcția SQRT() în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: true,
        },
        {
          text: 'Validează toate modificările făcute în cadrul unei tranzacții',
          correct: false,
        },
        {
          text: 'Înlocuiește toate aparițiile unui șir în alt șir',
          correct: false,
        },
        {
          text: 'Listează toate indicii unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda COMMIT în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Validează toate modificările făcute în cadrul unei tranzacții',
          correct: true,
        },
        {
          text: 'Înlocuiește toate aparițiile unui șir în alt șir',
          correct: false,
        },
        {
          text: 'Listează toate indicii unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită funcția REPLACE() în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Validează toate modificările făcute în cadrul unei tranzacții',
          correct: false,
        },
        {
          text: 'Înlocuiește toate aparițiile unui șir în alt șir',
          correct: true,
        },
        {
          text: 'Listează toate indicii unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda SHOW INDEX în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Validează toate modificările făcute în cadrul unei tranzacții',
          correct: false,
        },
        {
          text: 'Înlocuiește toate aparițiile unui șir în alt șir',
          correct: false,
        },
        {
          text: 'Listează toate indicii unei tabele',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită funcția MD5() în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Validează toate modificările făcute în cadrul unei tranzacții',
          correct: false,
        },
        {
          text: 'Calculează hash-ul MD5 al unui șir',
          correct: true,
        },
        {
          text: 'Listează toate indicii unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda CREATE USER în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Creează un nou utilizator de bază de date',
          correct: true,
        },
        {
          text: 'Înlocuiește toate aparițiile unui șir în alt șir',
          correct: false,
        },
        {
          text: 'Listează toate indicii unei tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită funcția DATEDIFF() în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Afișează permisiunile unui utilizator',
          correct: false,
        },
        {
          text: 'Calculează diferența dintre două date',
          correct: true,
        },
        {
          text: 'Extrage date dintr-o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda SHOW GRANTS în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Afișează permisiunile unui utilizator',
          correct: true,
        },
        {
          text: 'Calculează diferența dintre două date',
          correct: false,
        },
        {
          text: 'Extrage date dintr-o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda SELECT în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Afișează permisiunile unui utilizator',
          correct: false,
        },
        {
          text: 'Calculează diferența dintre două date',
          correct: false,
        },
        {
          text: 'Extrage date dintr-o bază de date',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda UPDATE în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Afișează permisiunile unui utilizator',
          correct: false,
        },
        {
          text: 'Calculează diferența dintre două date',
          correct: false,
        },
        {
          text: 'Modifică datele existente într-o bază de date',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda DELETE în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Afișează permisiunile unui utilizator',
          correct: false,
        },
        {
          text: 'Calculează diferența dintre două date',
          correct: false,
        },
        {
          text: 'Șterge date dintr-o bază de date',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda INSERT INTO în MySQL?',
      answers: [
        {
          text: 'Calculează rădăcina pătrată a unui număr',
          correct: false,
        },
        {
          text: 'Afișează permisiunile unui utilizator',
          correct: false,
        },
        {
          text: 'Calculează diferența dintre două date',
          correct: false,
        },
        {
          text: 'Adaugă date noi într-o bază de date',
          correct: true,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda CREATE DATABASE în SQL?',
      answers: [
        {
          text: 'Creează o bază de date nouă',
          correct: true,
        },
        {
          text: 'Modifică o bază de date existentă',
          correct: false,
        },
        {
          text: 'Creează o tabelă nouă',
          correct: false,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda ALTER DATABASE în SQL?',
      answers: [
        {
          text: 'Creează o bază de date nouă',
          correct: false,
        },
        {
          text: 'Modifică o bază de date existentă',
          correct: true,
        },
        {
          text: 'Creează o tabelă nouă',
          correct: false,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda CREATE TABLE în SQL?',
      answers: [
        {
          text: 'Creează o bază de date nouă',
          correct: false,
        },
        {
          text: 'Modifică o bază de date existentă',
          correct: false,
        },
        {
          text: 'Creează o tabelă nouă într-o bază de date',
          correct: true,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda ALTER TABLE în SQL?',
      answers: [
        {
          text: 'Creează o bază de date nouă',
          correct: false,
        },
        {
          text: 'Modifică o bază de date existentă',
          correct: false,
        },
        {
          text: 'Modifică o tabelă existentă',
          correct: true,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda DROP TABLE în SQL?',
      answers: [
        {
          text: 'Creează o bază de date nouă',
          correct: false,
        },
        {
          text: 'Modifică o bază de date existentă',
          correct: false,
        },
        {
          text: 'Șterge o tabelă',
          correct: true,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosită comanda CREATE INDEX în SQL?',
      answers: [
        {
          text: 'Creează o bază de date nouă',
          correct: false,
        },
        {
          text: 'Modifică o bază de date existentă',
          correct: false,
        },
        {
          text: 'Creează un index pe coloanele unei tabele',
          correct: true,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face comanda DROP INDEX în SQL?',
      answers: [
        {
          text: 'Șterge un index existent',
          correct: true,
        },
        {
          text: 'Creează un index nou',
          correct: false,
        },
        {
          text: 'Modifică un index existent',
          correct: false,
        },
        {
          text: 'Șterge o bază de date',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce este folosit SQL JOIN?',
      answers: [
        {
          text: 'Creează tabele noi',
          correct: false,
        },
        {
          text: 'Modifică tabele existente',
          correct: false,
        },
        {
          text: 'Combina rânduri din două sau mai multe tabele',
          correct: true,
        },
        {
          text: 'Șterge tabele',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează SQL INNER JOIN?',
      answers: [
        {
          text: 'Toate rândurile din tabela din stânga și din dreapta',
          correct: false,
        },
        {
          text: 'Toate rândurile din tabela din stânga și din dreapta cu valori comune',
          correct: true,
        },
        {
          text: 'Doar rândurile din tabela din stânga',
          correct: false,
        },
        {
          text: 'Doar rândurile din tabela din dreapta',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează SQL LEFT JOIN?',
      answers: [
        {
          text: 'Toate rândurile din tabela din stânga',
          correct: true,
        },
        {
          text: 'Toate rândurile din tabela din stânga și din dreapta',
          correct: false,
        },
        {
          text: 'Toate rândurile din tabela din dreapta',
          correct: false,
        },
        {
          text: 'Doar rândurile din tabela din dreapta cu valori comune',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează SQL RIGHT JOIN?',
      answers: [
        {
          text: 'Toate rândurile din tabela din stânga și din dreapta',
          correct: false,
        },
        {
          text: 'Toate rândurile din tabela din dreapta',
          correct: true,
        },
        {
          text: 'Toate rândurile din tabela din stânga',
          correct: false,
        },
        {
          text: 'Doar rândurile din tabela din stânga cu valori comune',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează SQL FULL OUTER JOIN?',
      answers: [
        {
          text: 'Toate rândurile din ambele tabele indiferent de potrivire',
          correct: true,
        },
        {
          text: 'Toate rândurile din tabela din stânga și din dreapta',
          correct: false,
        },
        {
          text: 'Toate rândurile din tabela din stânga',
          correct: false,
        },
        {
          text: 'Toate rândurile din tabela din dreapta',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face comanda SQL UNION?',
      answers: [
        {
          text: 'Returnează numai rezultate diferite',
          correct: false,
        },
        {
          text: 'Grupă rezultatele pe una sau mai multe coloane',
          correct: false,
        },
        {
          text: 'Combina setul de rezultate al două sau mai multe interogări SELECT',
          correct: true,
        },
        {
          text: 'Filtrează rezultatele pe baza unei condiții',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face comanda SQL GROUP BY?',
      answers: [
        {
          text: 'Returnează numai rezultate diferite',
          correct: false,
        },
        {
          text: 'Grupă rezultatele pe una sau mai multe coloane',
          correct: true,
        },
        {
          text: 'Combina setul de rezultate al două sau mai multe interogări SELECT',
          correct: false,
        },
        {
          text: 'Filtrează rezultatele pe baza unei condiții',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face comanda SQL ORDER BY?',
      answers: [
        {
          text: 'Returnează numai rezultate diferite',
          correct: false,
        },
        {
          text: 'Grupă rezultatele pe una sau mai multe coloane',
          correct: false,
        },
        {
          text: 'Ordonează rezultatele într-o anumită ordine',
          correct: true,
        },
        {
          text: 'Filtrează rezultatele pe baza unei condiții',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face comanda SQL DISTINCT?',
      answers: [
        {
          text: 'Returnează numai rezultate diferite',
          correct: true,
        },
        {
          text: 'Grupă rezultatele pe una sau mai multe coloane',
          correct: false,
        },
        {
          text: 'Combina setul de rezultate al două sau mai multe interogări SELECT',
          correct: false,
        },
        {
          text: 'Filtrează rezultatele pe baza unei condiții',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face comanda SQL WHERE?',
      answers: [
        {
          text: 'Returnează numai rezultate diferite',
          correct: false,
        },
        {
          text: 'Grupă rezultatele pe una sau mai multe coloane',
          correct: false,
        },
        {
          text: 'Combina setul de rezultate al două sau mai multe interogări SELECT',
          correct: false,
        },
        {
          text: 'Filtrează rezultatele pe baza unei condiții',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face comanda SQL AND?',
      answers: [
        {
          text: 'Returnează numai rezultate diferite',
          correct: false,
        },
        {
          text: 'Grupă rezultatele pe una sau mai multe coloane',
          correct: false,
        },
        {
          text: 'Combina setul de rezultate al două sau mai multe interogări SELECT',
          correct: false,
        },
        {
          text: 'Afișează un înregistrare dacă toate condițiile specificate sunt adevărate',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL OR?',
      answers: [
        {
          text: 'Returnează un înregistrare dacă toate condițiile sunt adevărate',
          correct: false,
        },
        {
          text: 'Returnează un înregistrare dacă una dintre condiții este adevărată',
          correct: true,
        },
        {
          text: 'Returnează un înregistrare dacă nicio condiție nu este adevărată',
          correct: false,
        },
        {
          text: 'Returnează un înregistrare dacă toate condițiile sunt false',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL NOT?',
      answers: [
        {
          text: 'Returnează un înregistrare dacă toate condițiile sunt adevărate',
          correct: false,
        },
        {
          text: 'Returnează un înregistrare dacă condiția (sau condițiile) nu este adevărată',
          correct: true,
        },
        {
          text: 'Returnează un înregistrare dacă nicio condiție nu este adevărată',
          correct: false,
        },
        {
          text: 'Returnează un înregistrare dacă toate condițiile sunt false',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL IN?',
      answers: [
        {
          text: 'Permite specificarea a două sau mai multe valori într-o clauză WHERE',
          correct: true,
        },
        {
          text: 'Returnează valori dintr-o anumită gamă',
          correct: false,
        },
        {
          text: 'Caută un model specificat într-o coloană',
          correct: false,
        },
        {
          text: 'Testează pentru valori NULL',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL BETWEEN?',
      answers: [
        {
          text: 'Permite specificarea a două sau mai multe valori într-o clauză WHERE',
          correct: false,
        },
        {
          text: 'Returnează valori dintr-o anumită gamă',
          correct: true,
        },
        {
          text: 'Caută un model specificat într-o coloană',
          correct: false,
        },
        {
          text: 'Testează pentru valori NULL',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL LIKE?',
      answers: [
        {
          text: 'Permite specificarea a două sau mai multe valori într-o clauză WHERE',
          correct: false,
        },
        {
          text: 'Returnează valori dintr-o anumită gamă',
          correct: false,
        },
        {
          text: 'Caută un model specificat într-o coloană',
          correct: true,
        },
        {
          text: 'Testează pentru valori NULL',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL NULL?',
      answers: [
        {
          text: 'Permite specificarea a două sau mai multe valori într-o clauză WHERE',
          correct: false,
        },
        {
          text: 'Returnează valori dintr-o anumită gamă',
          correct: false,
        },
        {
          text: 'Caută un model specificat într-o coloană',
          correct: false,
        },
        {
          text: 'Testează pentru valori NULL',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL AS?',
      answers: [
        {
          text: 'Redenumește o coloană sau o tabelă folosind un alias',
          correct: true,
        },
        {
          text: 'Filtrează valori care rezultă dintr-o instrucțiune GROUP BY',
          correct: false,
        },
        {
          text: 'Returnează true dacă oricare dintre subinterogări returnează true',
          correct: false,
        },
        {
          text: 'Returnează true dacă toate subinterogările returnează true',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL HAVING?',
      answers: [
        {
          text: 'Redenumește o coloană sau o tabelă folosind un alias',
          correct: false,
        },
        {
          text: 'Filtrează valori care rezultă dintr-o instrucțiune GROUP BY',
          correct: true,
        },
        {
          text: 'Returnează true dacă oricare dintre subinterogări returnează true',
          correct: false,
        },
        {
          text: 'Returnează true dacă toate subinterogările returnează true',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL ANY?',
      answers: [
        {
          text: 'Redenumește o coloană sau o tabelă folosind un alias',
          correct: false,
        },
        {
          text: 'Filtrează valori care rezultă dintr-o instrucțiune GROUP BY',
          correct: false,
        },
        {
          text: 'Returnează true dacă oricare dintre subinterogări returnează true',
          correct: true,
        },
        {
          text: 'Returnează true dacă toate subinterogările returnează true',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL ALL?',
      answers: [
        {
          text: 'Redenumește o coloană sau o tabelă folosind un alias',
          correct: false,
        },
        {
          text: 'Filtrează valori care rezultă dintr-o instrucțiune GROUP BY',
          correct: false,
        },
        {
          text: 'Returnează true dacă oricare dintre subinterogări returnează true',
          correct: false,
        },
        {
          text: 'Returnează true dacă toate subinterogările returnează true',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL EXISTS?',
      answers: [
        {
          text: 'Redenumește o coloană sau o tabelă folosind un alias',
          correct: false,
        },
        {
          text: 'Filtrează valori care rezultă dintr-o instrucțiune GROUP BY',
          correct: false,
        },
        {
          text: 'Testează dacă o subinterogare returnează vreun rezultat',
          correct: true,
        },
        {
          text: 'Returnează true dacă toate subinterogările returnează true',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face operatorul SQL SELECT INTO?',
      answers: [
        {
          text: 'Redenumește o coloană sau o tabelă folosind un alias',
          correct: false,
        },
        {
          text: 'Filtrează valori care rezultă dintr-o instrucțiune GROUP BY',
          correct: false,
        },
        {
          text: 'Copiază date dintr-o tabelă într-o nouă tabelă',
          correct: true,
        },
        {
          text: 'Returnează true dacă toate subinterogările returnează true',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face SQL CASE?',
      answers: [
        {
          text: 'Creează o ramificare condițională în interogările SQL',
          correct: true,
        },
        {
          text: 'Impune limite pe tipul de date din tabelă',
          correct: false,
        },
        {
          text: 'Specifică că toate valorile dintr-o coloană trebuie să fie diferite',
          correct: false,
        },
        {
          text: 'Reprezintă o cheie primară într-o tabelă SQL',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face SQL CONSTRAINT?',
      answers: [
        {
          text: 'Creează o ramificare condițională în interogările SQL',
          correct: false,
        },
        {
          text: 'Impune limite pe tipul de date din tabelă',
          correct: true,
        },
        {
          text: 'Specifică că toate valorile dintr-o coloană trebuie să fie diferite',
          correct: false,
        },
        {
          text: 'Reprezintă o cheie primară într-o tabelă SQL',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face SQL UNIQUE?',
      answers: [
        {
          text: 'Creează o ramificare condițională în interogările SQL',
          correct: false,
        },
        {
          text: 'Impune limite pe tipul de date din tabelă',
          correct: false,
        },
        {
          text: 'Specifică că toate valorile dintr-o coloană trebuie să fie diferite',
          correct: true,
        },
        {
          text: 'Reprezintă o cheie primară într-o tabelă SQL',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face SQL PRIMARY KEY?',
      answers: [
        {
          text: 'Creează o ramificare condițională în interogările SQL',
          correct: false,
        },
        {
          text: 'Impune limite pe tipul de date din tabelă',
          correct: false,
        },
        {
          text: 'Specifică că toate valorile dintr-o coloană trebuie să fie diferite',
          correct: false,
        },
        {
          text: 'Reprezintă o cheie primară într-o tabelă SQL',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face SQL FOREIGN KEY?',
      answers: [
        {
          text: 'Creează o ramificare condițională în interogările SQL',
          correct: false,
        },
        {
          text: 'Impune limite pe tipul de date din tabelă',
          correct: false,
        },
        {
          text: 'Specifică că toate valorile dintr-o coloană trebuie să fie diferite',
          correct: false,
        },
        {
          text: 'Reprezintă o cheie străină într-o tabelă SQL',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face SQL CHECK?',
      answers: [
        {
          text: 'Creează o ramificare condițională în interogările SQL',
          correct: false,
        },
        {
          text: 'Impune limite pe tipul de date din tabelă',
          correct: false,
        },
        {
          text: 'Specifică că toate valorile dintr-o coloană trebuie să fie diferite',
          correct: false,
        },
        {
          text: 'Permite să specifici o condiție ca toate valorile dintr-o coloană să o îndeplinească',
          correct: true,
        },
      ],
    },
    {
      question: 'Ce face SQL DEFAULT?',
      answers: [
        {
          text: 'Creează o ramificare condițională în interogările SQL',
          correct: false,
        },
        {
          text: 'Impune limite pe tipul de date din tabelă',
          correct: false,
        },
        {
          text: 'Specifică că toate valorile dintr-o coloană trebuie să fie diferite',
          correct: false,
        },
        {
          text: 'Specifică o valoare implicită atunci când este creată o nouă înregistrare',
          correct: true,
        },
      ],
    },
  ],
  // /SQL Questions ____________________________________________________________
  // Python Question ___________________________________________________________
  python: [
    {
      question: 'Cum declari o functie in Python?',
      answers: [
        { text: 'function myFunc():', correct: false },
        { text: 'def myFunc():', correct: true },
        { text: 'create myFunc():', correct: false },
        { text: 'func myFunc():', correct: false },
      ],
    },
    {
      question: 'Ce face operatorul `==` in Python?',
      answers: [
        { text: 'Atribuie o valoare', correct: false },
        { text: 'Compara valoarea si tipul', correct: false },
        { text: 'Compara doar valoarea', correct: true },
        { text: 'Verifica daca variabilele sunt identice', correct: false },
      ],
    },
    {
      question: 'Ce caracteristică definitorie are Python?',
      answers: [
        {
          text: 'Limbaj de programare interpretat',
          correct: true,
        },
        {
          text: 'Limbaj de programare compilat',
          correct: false,
        },
        {
          text: 'Limbaj de programare orientat pe obiect',
          correct: false,
        },
        {
          text: 'Limbaj de programare de nivel scăzut',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum se delimitează blocurile de cod în Python?',
      answers: [
        {
          text: 'Cu ajutorul indentării',
          correct: true,
        },
        {
          text: 'Cu ajutorul acoladelor',
          correct: false,
        },
        {
          text: 'Cu ajutorul parantezelor',
          correct: false,
        },
        {
          text: 'Cu ajutorul virgulelor',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum încep comentariile în Python?',
      answers: [
        {
          text: 'Cu simbolul #',
          correct: true,
        },
        {
          text: 'Cu simbolul //',
          correct: false,
        },
        {
          text: 'Cu simbolul /*',
          correct: false,
        },
        {
          text: 'Cu simbolul <!--',
          correct: false,
        },
      ],
    },
    {
      question:
        'Ce funcție este folosită pentru a afișa date pe ecran în Python?',
      answers: [
        {
          text: 'Functia print()',
          correct: true,
        },
        {
          text: 'Functia display()',
          correct: false,
        },
        {
          text: 'Functia show()',
          correct: false,
        },
        {
          text: 'Functia output()',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum sunt caracterizate listele în Python?',
      answers: [
        {
          text: 'Colecții ordonate și modificabile',
          correct: true,
        },
        {
          text: 'Colecții ordonate și nemodificabile',
          correct: false,
        },
        {
          text: 'Colecții neordonate și modificabile',
          correct: false,
        },
        {
          text: 'Colecții neordonate și nemodificabile',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum sunt caracterizate tuplele în Python?',
      answers: [
        {
          text: 'Asemănătoare cu listele, dar imutabile',
          correct: true,
        },
        {
          text: 'Asemănătoare cu listele, dar modificate cu metode speciale',
          correct: false,
        },
        {
          text: 'Colecții neordonate și modificabile',
          correct: false,
        },
        {
          text: 'Colecții ordonate și modificabile',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce reprezintă seturile în Python?',
      answers: [
        { text: 'Colecții ordonate de elemente unice', correct: false },
        { text: 'Colecții neordonate fără elemente duplicate', correct: true },
        { text: 'Colecții de perechi cheie-valoare', correct: false },
        { text: 'Colecții de elemente accesibile prin index', correct: false },
      ],
    },
    {
      question: 'Cum sunt stocate datele într-un dicționar Python?',
      answers: [
        { text: 'Sub forma unei liste de valori', correct: false },
        { text: 'Ca o colecție neordonată de elemente', correct: false },
        { text: 'Sub forma de perechi cheie-valoare', correct: true },
        { text: 'Într-un format strict tipizat', correct: false },
      ],
    },
    {
      question: 'Ce face operatorul "==" în Python?',
      answers: [
        { text: 'Atribuie o valoare unei variabile', correct: false },
        { text: 'Creează o copie profundă a unei variabile', correct: false },
        { text: 'Compară referințele a două obiecte', correct: false },
        { text: 'Verifică egalitatea între două valori', correct: true },
      ],
    },
    {
      question: 'Ce returnează funcția "len()" în Python?',
      answers: [
        { text: 'Numărul de proprietăți ale unui obiect', correct: false },
        { text: 'Lungimea celei mai lungi secvențe posibile', correct: false },
        { text: 'Numărul de elemente dintr-o colecție', correct: true },
        { text: 'Distanța dintre două puncte', correct: false },
      ],
    },
    {
      question: 'Ce determină funcția "type()" în Python?',
      answers: [
        { text: 'Dacă o variabilă este globală sau locală', correct: false },
        { text: 'Tipul de date al unei variabile', correct: true },
        { text: 'Numărul de metode ale unui obiect', correct: false },
        {
          text: 'Dacă o variabilă este mutabilă sau imutabilă',
          correct: false,
        },
      ],
    },
    {
      question: 'Cu ce scop se utilizează funcția "str()" în Python?',
      answers: [
        { text: 'Pentru a căuta substring-uri', correct: false },
        {
          text: 'Pentru a converti o variabilă în tipul string',
          correct: true,
        },
        { text: 'Pentru a sorta elementele unei liste', correct: false },
        { text: 'Pentru a conecta mai multe string-uri', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "int()" în Python?',
      answers: [
        { text: 'Transformă un șir de caractere într-o listă', correct: false },
        { text: 'Converteste o variabilă la tipul integer', correct: true },
        {
          text: 'Rotunjește un număr la cel mai apropiat întreg',
          correct: false,
        },
        { text: 'Verifică dacă o valoare este numerică', correct: false },
      ],
    },
    {
      question: 'Pentru ce este folosită funcția "float()" în Python?',
      answers: [
        {
          text: 'Pentru a verifica dacă o valoare este un punct flotant',
          correct: false,
        },
        {
          text: 'Pentru a crea un număr cu zecimale dintr-un șir de caractere sau un număr',
          correct: true,
        },
        {
          text: 'Pentru a genera un interval de numere cu virgulă mobilă',
          correct: false,
        },
        {
          text: 'Pentru a rotunji un număr la cel mai apropiat punct flotant',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face metoda "append()" în Python?',
      answers: [
        { text: 'Adaugă un element la începutul unei liste', correct: false },
        { text: 'Adaugă un element la sfârșitul unei liste', correct: true },
        { text: 'Conectează două liste', correct: false },
        { text: 'Extinde o listă cu elementele altei liste', correct: false },
      ],
    },
    {
      question: 'Ce realizează funcția "input()" în Python?',
      answers: [
        { text: 'Afișează un mesaj pe ecran', correct: false },
        { text: 'Citeste un șir de caractere de la tastatură', correct: true },
        { text: 'Deschide un fișier pentru citire', correct: false },
        { text: 'Inițializează o variabilă cu o valoare dată', correct: false },
      ],
    },
    {
      question: 'Cum funcționează metoda "split()" în Python?',
      answers: [
        { text: 'Concatenează mai multe șiruri de caractere', correct: false },
        {
          text: 'Împarte un șir de caractere într-o listă, folosind un delimitator specificat',
          correct: true,
        },
        {
          text: 'Înlătură spațiile de la începutul și sfârșitul unui șir',
          correct: false,
        },
        { text: 'Inversează ordinea caracterelor într-un șir', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "range()" în Python?',
      answers: [
        {
          text: 'Stabilește o gamă de valori pentru o variabilă',
          correct: false,
        },
        { text: 'Generează o secvență de numere întregi', correct: true },
        { text: 'Caută un număr într-o listă', correct: false },
        {
          text: 'Definește o serie de parametri pentru o funcție',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum se folosește bucla "for" în Python?',
      answers: [
        { text: 'Pentru a genera numere aleatoare', correct: false },
        { text: 'Pentru a compara două valori', correct: false },
        { text: 'Pentru a parcurge elementele unei colecții', correct: true },
        { text: 'Pentru a executa un cod o singură dată', correct: false },
      ],
    },
    {
      question: 'Când se execută bucla "while" în Python?',
      answers: [
        { text: 'Doar dacă condiția este falsă', correct: false },
        { text: 'O singură dată, indiferent de condiție', correct: false },
        { text: 'Cât timp condiția evaluată este adevărată', correct: true },
        { text: 'Pentru a parcurge un set fix de elemente', correct: false },
      ],
    },
    {
      question: 'Ce face instrucțiunea "break" în Python?',
      answers: [
        { text: 'Întrerupe execuția programului', correct: false },
        { text: 'Termină execuția buclei curente', correct: true },
        {
          text: 'Creează o pauză în execuție pentru debugging',
          correct: false,
        },
        {
          text: 'Sare peste toate instrucțiunile rămase și reia bucla',
          correct: false,
        },
      ],
    },
    {
      question: 'La ce servește instrucțiunea "continue" în Python?',
      answers: [
        {
          text: 'Operează returnarea controlului către începutul scriptului',
          correct: false,
        },
        {
          text: 'Ignoră condițiile buclei și o reia de la capăt',
          correct: false,
        },
        {
          text: 'Încetează execuția codului și începe următoarea iteratie a buclei',
          correct: true,
        },
        {
          text: 'Continuă execuția unei funcții din punctul unde a fost întreruptă',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează funcția "enumerate()" în Python?',
      answers: [
        { text: 'O listă de tuple', correct: false },
        { text: 'O listă cu elemente duplicate', correct: false },
        { text: 'Un obiect enumerat', correct: true },
        { text: 'Un interval de numere', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "map()" în Python?',
      answers: [
        {
          text: 'Asociază o valoare cu o cheie într-un dicționar',
          correct: false,
        },
        { text: 'Creează o hartă a unui set de date', correct: false },
        {
          text: 'Aplică o funcție la fiecare element al unei colecții',
          correct: true,
        },
        {
          text: 'Transformă un obiect map într-o listă sau un set',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face funcția "filter()" în Python?',
      answers: [
        { text: 'Sortează elementele unei colecții', correct: false },
        {
          text: 'Filtrează elementele unei colecții bazat pe o funcție',
          correct: true,
        },
        { text: 'Combină elementele mai multor colecții', correct: false },
        { text: 'Elimină toate elementele dintr-o colecție', correct: false },
      ],
    },
    {
      question: 'Ce este o funcție "lambda" în Python?',
      answers: [
        { text: 'O funcție care se auto-apelază', correct: false },
        { text: 'O funcție definită într-un mod obișnuit', correct: false },
        { text: 'O funcție anonimă definită pe loc', correct: true },
        {
          text: 'O funcție care poate fi folosită o singură dată',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face funcția "zip()" în Python?',
      answers: [
        { text: 'Despachetează arhive zip', correct: false },
        {
          text: 'Combină două sau mai multe colecții într-o serie de tuple',
          correct: true,
        },
        { text: 'Împachetează date într-un format comprimat', correct: false },
        { text: 'Înlănțuiește iterabilele într-una singură', correct: false },
      ],
    },
    {
      question: 'Ce returnează funcția "sorted()" în Python?',
      answers: [
        { text: 'O colecție de date în ordinea introducerii', correct: false },
        { text: 'O colecție în ordine aleatorie', correct: false },
        { text: 'O listă sortată a elementelor unei colecții', correct: true },
        { text: 'O listă cu elementele inversate', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "pop()" în Python?',
      answers: [
        { text: 'Adaugă un element la o listă', correct: false },
        {
          text: 'Extrage și șterge un element de la sfârșitul unei liste',
          correct: true,
        },
        { text: 'Afișează toate elementele unei liste', correct: false },
        { text: 'Împarte o listă în mai multe subliste', correct: false },
      ],
    },
    {
      question: 'Cum se utilizează funcția "del" în Python?',
      answers: [
        { text: 'Pentru a defini o variabilă', correct: false },
        { text: 'Pentru a crea o copie a unei liste', correct: false },
        {
          text: 'Pentru a șterge un element sau o secțiune dintr-o listă',
          correct: true,
        },
        {
          text: 'Pentru a verifica dacă un element există într-o listă',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează funcția "min()" în Python?',
      answers: [
        { text: 'Suma elementelor unei colecții', correct: false },
        {
          text: 'Elementul cu valoarea maximă dintr-o colecție',
          correct: false,
        },
        {
          text: 'Elementul cu valoarea minimă dintr-o colecție',
          correct: true,
        },
        { text: 'Numărul de elemente dintr-o colecție', correct: false },
      ],
    },
    {
      question: 'Ce returnează funcția "max()" în Python?',
      answers: [
        {
          text: 'Elementul cu valoarea minimă dintr-o colecție',
          correct: false,
        },
        {
          text: 'Elementul cu valoarea maximă dintr-o colecție',
          correct: true,
        },
        { text: 'O listă sortată în ordine descrescătoare', correct: false },
        { text: 'Numărul de elemente dintr-o colecție', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "count()" în Python?',
      answers: [
        { text: 'Sortează elementele unei liste', correct: false },
        { text: 'Combină elementele unei liste într-un șir', correct: false },
        { text: 'Numără aparițiile unui element într-o listă', correct: true },
        { text: 'Returnează suma elementelor unei liste', correct: false },
      ],
    },
    {
      question: 'Ce returnează funcția "sum()" în Python?',
      answers: [
        { text: 'Media aritmetică a elementelor unei liste', correct: false },
        { text: 'Suma elementelor unei liste', correct: true },
        { text: 'Diferența elementelor unei liste', correct: false },
        { text: 'Produsul elementelor unei liste', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "join()" în Python?',
      answers: [
        {
          text: 'Separa elementele unei liste cu un delimitator specific',
          correct: false,
        },
        { text: 'Inversează ordinea elementelor unei liste', correct: false },
        { text: 'Combina elementele unei liste într-un șir', correct: true },
        { text: 'Elimină un element dintr-o listă', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "reversed()" în Python?',
      answers: [
        { text: 'Elimină elementele duplicate dintr-o listă', correct: false },
        { text: 'Inversează ordinea elementelor unei liste', correct: true },
        { text: 'Returnează elementul maxim dintr-o listă', correct: false },
        { text: 'Creează o copie a unei liste', correct: false },
      ],
    },
    {
      question: 'Ce verifică funcția "all()" în Python?',
      answers: [
        { text: 'Dacă o colecție este sortată', correct: false },
        {
          text: 'Dacă toate elementele unei colecții sunt adevărate',
          correct: true,
        },
        {
          text: 'Dacă cel puțin un element al unei colecții este adevărat',
          correct: false,
        },
        { text: 'Dacă o colecție este neordonată', correct: false },
      ],
    },
    {
      question: 'Ce verifică funcția "any()" în Python?',
      answers: [
        {
          text: 'Dacă toate elementele unei colecții sunt adevărate',
          correct: false,
        },
        {
          text: 'Dacă cel puțin un element al unei colecții este adevărat',
          correct: true,
        },
        {
          text: 'Dacă o colecție este sortată în ordine descrescătoare',
          correct: false,
        },
        {
          text: 'Dacă o colecție conține numai elemente unice',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce verifică funcția "isinstance()" în Python?',
      answers: [
        { text: 'Dacă un obiect este sortat', correct: false },
        { text: 'Dacă un obiect este o instanță a unei clase', correct: true },
        { text: 'Dacă o funcție returnează o instanță', correct: false },
        { text: 'Dacă o clasă are un atribut specific', correct: false },
      ],
    },
    {
      question: 'Ce returnează funcția "getattr()" în Python?',
      answers: [
        { text: 'Lista tuturor atributelor unui obiect', correct: false },
        { text: 'Valoarea unui atribut al unui obiect', correct: true },
        {
          text: 'Adevărat sau Fals, dacă un obiect are un atribut specific',
          correct: false,
        },
        { text: 'Numele atributului cu cea mai mare valoare', correct: false },
      ],
    },
    {
      question: 'Ce verifică funcția "hasattr()" în Python?',
      answers: [
        { text: 'Dacă o colecție are elemente', correct: false },
        { text: 'Dacă un obiect are un atribut specific', correct: true },
        { text: 'Dacă o clasă există', correct: false },
        { text: 'Dacă o metodă poate fi apelată', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "setattr()" în Python?',
      answers: [
        { text: 'Returnează toate atributele unui obiect', correct: false },
        { text: 'Șterge un atribut al unui obiect', correct: false },
        { text: 'Setează valoarea unui atribut al unui obiect', correct: true },
        { text: 'Verifică tipul unui atribut al unui obiect', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "delattr()" în Python?',
      answers: [
        { text: 'Creează un atribut nou al unui obiect', correct: false },
        {
          text: 'Returnează valoarea unui atribut al unui obiect',
          correct: false,
        },
        { text: 'Șterge un atribut al unui obiect', correct: true },
        {
          text: 'Verifică existența unui atribut al unui obiect',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce returnează funcția "pow()" în Python?',
      answers: [
        { text: 'Produsul a două numere', correct: false },
        { text: 'Rădăcina pătrată a unui număr', correct: false },
        { text: 'Valoarea lui x la puterea y', correct: true },
        { text: 'Inversul multiplicativ al unui număr', correct: false },
      ],
    },
    {
      question: 'Cum se modifică variabilele de tip global în Python?',
      answers: [
        { text: 'Folosind cuvântul cheie "static"', correct: false },
        { text: 'Folosind cuvântul cheie "const"', correct: false },
        { text: 'Folosind cuvântul cheie "global"', correct: true },
        { text: 'Folosind cuvântul cheie "public"', correct: false },
      ],
    },
    {
      question: 'Ce returnează funcția "repr()" în Python?',
      answers: [
        { text: 'Valoarea absolută a unui număr', correct: false },
        { text: 'Un șir care reprezintă un obiect imprimabil', correct: true },
        { text: 'Numele de tip al unui obiect', correct: false },
        { text: 'O listă de atribute ale unui obiect', correct: false },
      ],
    },
    {
      question: 'Ce oferă modulul "math" în Python?',
      answers: [
        { text: 'Functii pentru manipularea textului', correct: false },
        { text: 'Interfața grafică de utilizator', correct: false },
        { text: 'Funcții matematice', correct: true },
        { text: 'Funcții pentru lucrul cu rețele', correct: false },
      ],
    },
    {
      question: 'Ce returnează funcția "abs()" în Python?',
      answers: [
        { text: 'Valoarea absolută a unui număr', correct: true },
        { text: 'Suma a două numere', correct: false },
        { text: 'Numărul inversat', correct: false },
        { text: 'Valoarea unui număr ridicat la pătrat', correct: false },
      ],
    },
    {
      question: 'Ce oferă modulul "datetime" în Python?',
      answers: [
        { text: 'Funcții pentru rețele', correct: false },
        {
          text: 'Funcții pentru manipularea datelor și timpului',
          correct: true,
        },
        { text: 'Functii grafice', correct: false },
        { text: 'Funcții pentru testarea codului', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "open()" în Python?',
      answers: [
        { text: 'Deschide o conexiune de rețea', correct: false },
        { text: 'Deschide un fisier', correct: true },
        { text: 'Deschide un URL', correct: false },
        { text: 'Deschide o bază de date', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "read()" în Python?',
      answers: [
        { text: 'Citeste input de la utilizator', correct: false },
        { text: 'Citeste din fisier', correct: true },
        { text: 'Citeste un URL', correct: false },
        { text: 'Citeste o bază de date', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "write()" în Python?',
      answers: [
        { text: 'Scrie în consolă', correct: false },
        { text: 'Scrie într-un fisier', correct: true },
        { text: 'Scrie într-o bază de date', correct: false },
        { text: 'Scrie pe un URL', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "close()" în Python?',
      answers: [
        { text: 'Închide o aplicație', correct: false },
        { text: 'Închide un fisier', correct: true },
        { text: 'Închide o conexiune de rețea', correct: false },
        { text: 'Închide un socket', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "os.remove()" în Python?',
      answers: [
        { text: 'Elimină o variabilă', correct: false },
        { text: 'Sterge un fisier', correct: true },
        { text: 'Elimină o funcție', correct: false },
        { text: 'Sterge o clasă', correct: false },
      ],
    },
    {
      question: 'Ce oferă modulul "re" în Python?',
      answers: [
        { text: 'Suport pentru rețele', correct: false },
        { text: 'Suport pentru expresii regulate', correct: true },
        { text: 'Suport pentru GUI', correct: false },
        { text: 'Suport pentru testare', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "compile()" în Python?',
      answers: [
        { text: 'Compilează cod Python', correct: false },
        {
          text: 'Compilează o expresie regulată într-un obiect expresie regulată',
          correct: true,
        },
        { text: 'Compilează un program', correct: false },
        { text: 'Compilează o funcție', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "search()" în Python?',
      answers: [
        { text: 'Caută fișiere pe sistem', correct: false },
        { text: 'Caută un model într-un șir', correct: true },
        { text: 'Caută într-o bază de date', correct: false },
        { text: 'Caută erori în cod', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "findall()" în Python?',
      answers: [
        { text: 'Găsește toate fișierele dintr-un folder', correct: false },
        {
          text: 'Returnează toate aparițiile unui model într-un șir',
          correct: true,
        },
        { text: 'Găsește toate clasele dintr-un modul', correct: false },
        { text: 'Returnează toate metodele unui obiect', correct: false },
      ],
    },
    {
      question:
        'Ce face metoda "split()" în Python atunci când e folosită în modulul "re"?',
      answers: [
        { text: 'Împarte un șir la fiecare spațiu', correct: false },
        {
          text: 'Împarte un șir la fiecare aparitie a modelului',
          correct: true,
        },
        { text: 'Împarte un șir în liste', correct: false },
        { text: 'Împarte un șir în tuple', correct: false },
      ],
    },
    {
      question: 'Ce face metoda "sub()" în Python?',
      answers: [
        { text: 'Scade un număr din altul', correct: false },
        { text: 'Înlocuiește un model cu un șir într-un text', correct: true },
        { text: 'Creează un subproces', correct: false },
        { text: 'Subscrie o metodă', correct: false },
      ],
    },
    {
      question: 'În Python, pentru ce este folosit cuvântul cheie "yield"?',
      answers: [
        { text: 'Pentru a întrerupe execuția unei funcții', correct: false },
        { text: 'Pentru a genera o valoare dintr-un generator', correct: true },
        { text: 'Pentru a produce erori', correct: false },
        { text: 'Pentru a face codul mai eficient', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "next()" în Python?',
      answers: [
        {
          text: 'Navighează la pagina următoare într-un browser',
          correct: false,
        },
        {
          text: 'Returnează următorul element dintr-un iterator',
          correct: true,
        },
        { text: 'Merge la următoarea linie de cod', correct: false },
        { text: 'Incrementează o valoare numerică', correct: false },
      ],
    },
    {
      question: 'Pentru ce este folosit cuvântul cheie "finally" în Python?',
      answers: [
        { text: 'Pentru a încheia o instrucțiune if', correct: false },
        {
          text: 'Pentru a executa cod, indiferent dacă apare o excepție sau nu',
          correct: true,
        },
        { text: 'Pentru a finaliza execuția unui loop', correct: false },
        { text: 'Pentru a semnala finalul unui program', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "iter()" în Python?',
      answers: [
        { text: 'Repetă un proces de mai multe ori', correct: false },
        { text: 'Returnează un iterator dintr-o colecție', correct: true },
        { text: 'Convertește un tip de date în altul', correct: false },
        { text: 'Execută o iterație a unui loop', correct: false },
      ],
    },
    {
      question: 'În Python, pentru ce este folosit cuvântul cheie "assert"?',
      answers: [
        { text: 'Pentru a confirma finalizarea unei funcții', correct: false },
        { text: 'Pentru debugging, verificând o condiție', correct: true },
        { text: 'Pentru a crea o aserțiune legală', correct: false },
        { text: 'Pentru a adăuga o descriere la o funcție', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "globals()" în Python?',
      answers: [
        { text: 'Converteste variabile locale în globale', correct: false },
        {
          text: 'Returnează un dicționar care reprezintă tabela de simboluri globală',
          correct: true,
        },
        { text: 'Apeluri de funcții pe scară largă', correct: false },
        { text: 'Configurează variabilele de mediu globale', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "locals()" în Python?',
      answers: [
        {
          text: 'Returnează un dicționar cu variabilele globale',
          correct: false,
        },
        {
          text: 'Returnează un dicționar cu variabilele locale curente',
          correct: true,
        },
        { text: 'Blochează accesul la variabilele locale', correct: false },
        {
          text: 'Creează o copie locală a unei variabile globale',
          correct: false,
        },
      ],
    },
    {
      question: 'Cum funcționează funcția "exec()" în Python?',
      answers: [
        { text: 'Execută o funcție specificată', correct: false },
        { text: 'Închide un program', correct: false },
        { text: 'Execută dinamic codul Python dat', correct: true },
        { text: 'Execută o comandă de sistem', correct: false },
      ],
    },
    {
      question: 'Ce face funcția "eval()" în Python?',
      answers: [
        {
          text: 'Evaluează corectitudinea sintaxei codului Python',
          correct: false,
        },
        {
          text: 'Evaluează o expresie Python dintr-un șir și returnează rezultatul',
          correct: true,
        },
        {
          text: 'Calculează valoarea numerică a unei expresii',
          correct: false,
        },
        {
          text: 'Determină valoarea de adevăr a unei expresii',
          correct: false,
        },
      ],
    },
    {
      question: 'Pentru ce este folosită funcția "format()" în Python?',
      answers: [
        {
          text: 'Pentru a formata codul Python pentru o citire mai ușoară',
          correct: false,
        },
        { text: 'Pentru a formata o unitate de stocare', correct: false },
        { text: 'Pentru a formata șiruri de caractere', correct: true },
        { text: 'Pentru a configura setările regionale', correct: false },
      ],
    },
    {
      question: 'Ce verifică metoda "isdigit()" într-un șir din Python?',
      answers: [
        { text: 'Dacă șirul este o cifră validă', correct: false },
        { text: 'Dacă toate caracterele în șir sunt cifre', correct: true },
        { text: 'Dacă șirul este un identificator valid', correct: false },
        {
          text: 'Dacă șirul conține doar caractere alfanumerice',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce verifică metoda "isalpha()" într-un șir din Python?',
      answers: [
        { text: 'Dacă șirul este alfabetic', correct: false },
        { text: 'Dacă toate caracterele din șir sunt litere', correct: true },
        { text: 'Dacă șirul este un argument valid', correct: false },
        { text: 'Dacă șirul conține doar caractere ASCII', correct: false },
      ],
    },
    {
      question: 'Ce verifică metoda "isalnum()" într-un șir din Python?',
      answers: [
        { text: 'Dacă șirul este alfabetic', correct: false },
        {
          text: 'Dacă toate caracterele din șir sunt alfanumerice',
          correct: true,
        },
        { text: 'Dacă șirul conține doar cifre', correct: false },
        { text: 'Dacă șirul este un argument valid', correct: false },
      ],
    },
    {
      question: 'Ce verifică metoda "isspace()" într-un șir din Python?',
      answers: [
        { text: 'Dacă șirul este gol', correct: false },
        {
          text: 'Dacă toate caracterele din șir sunt spatii albe',
          correct: true,
        },
        { text: 'Dacă șirul conține doar litere', correct: false },
        { text: 'Dacă șirul este o cifră validă', correct: false },
      ],
    },
    {
      question: 'Cum funcționează metoda "endswith()" în Python?',
      answers: [
        {
          text: 'Verifică dacă șirul începe cu un anumit prefix',
          correct: false,
        },
        { text: 'Verifică dacă șirul conține un anumit sufix', correct: true },
        {
          text: 'Verifică dacă șirul are exact o anumită lungime',
          correct: false,
        },
        { text: 'Verifică dacă șirul este gol', correct: false },
      ],
    },
    {
      question: 'Cum funcționează metoda "startswith()" în Python?',
      answers: [
        {
          text: 'Verifică dacă șirul începe cu un anumit sufix',
          correct: false,
        },
        { text: 'Verifică dacă șirul conține un anumit prefix', correct: true },
        {
          text: 'Verifică dacă șirul are exact o anumită lungime',
          correct: false,
        },
        {
          text: 'Verifică dacă șirul se termină cu un anumit sufix',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face metoda "replace()" în Python?',
      answers: [
        { text: 'Șterge un caracter specific din șir', correct: false },
        { text: 'Înlocuiește un model cu alt model în șir', correct: true },
        { text: 'Adaugă un sufix la șir', correct: false },
        {
          text: 'Transformă toate literele din șir în majuscule',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face metoda "swapcase()" în Python?',
      answers: [
        { text: 'Schimbă ordinea caracterelor din șir', correct: false },
        { text: 'Inversează toate literele din șir', correct: true },
        {
          text: 'Transformă toate literele din șir în majuscule',
          correct: false,
        },
        {
          text: 'Transformă toate literele din șir în litere mici',
          correct: false,
        },
      ],
    },
    {
      question: 'Ce face metoda "title()" în Python?',
      answers: [
        {
          text: 'Transformă toate literele din șir în majuscule',
          correct: false,
        },
        {
          text: 'Transformă toate literele din șir în litere mici',
          correct: false,
        },
        {
          text: 'Converteste primul caracter al fiecarui cuvant din sir la majuscula',
          correct: true,
        },
        { text: 'Transformă toate cifrele din șir în litere', correct: false },
      ],
    },
  ],
  // /Python Question ___________________________________________________________
};

let currentLanguage;

function selectLanguage(language) {
  currentLanguage = language;
  questions = selectRandomQuestions(allQuestions[currentLanguage], 10);
  document.querySelector('.language-selection').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  startGame();
}

function selectRandomQuestions(questionSet, numQuestions) {
  return shuffleArray(questionSet).slice(0, numQuestions);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

function startGame() {
  currentQuestionIndex = 0;
  score = 0;

  questions = selectRandomQuestions(allQuestions[currentLanguage], 10);

  const quizElement = document.getElementById('quiz');
  quizElement.innerHTML = `
    <div class="question" id="question"></div>
    <div class="choices" id="choices"></div>
  `;

  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  questionElement.innerText = question.question;
  choicesElement.innerHTML = '';
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(index, answer.correct));
    choicesElement.appendChild(button);
  });
}

function selectAnswer(choiceIndex, isCorrect) {
  const buttons = document.querySelectorAll('#choices .btn');

  buttons.forEach((button) => {
    button.disabled = true;
  });

  const selectedButton = buttons[choiceIndex];
  if (isCorrect) {
    selectedButton.classList.add('correct');
    score++;
  } else {
    selectedButton.classList.add('incorrect');
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();

      buttons.forEach((button) => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
      });
    } else {
      showResults();
    }
  }, 1500);
}

function saveScore() {
  const name = prompt('Introdu numele pentru a salva scorul:');
  if (name) {
    fetch('php/quiz-leaderboard.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, score: score }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Scorul a fost salvat!');
        updateLeaderboard();
        document.getElementById('save-score-btn').remove();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

function showLanguageSelection() {
  document.getElementById('quiz-container').style.display = 'none';

  document.querySelector('.language-selection').style.display = 'flex';

  questions = [];
  score = 0;
}

function showResults() {
  const quizElement = document.getElementById('quiz');
  quizElement.innerHTML = `
    <h1>Rezultat</h1>
    <p>Ai obtinut ${score} din ${questions.length} puncte.</p>
    <button class="btn" id="save-score-btn" onclick="saveScore()">Salveaza scorul</button>
    <button class="btn" onclick="startGame()">Incepe din nou</button>
    <button class="btn" onclick="showLanguageSelection()">Schimba limbajul</button>
  `;
}

function updateLeaderboard() {
  fetch('php/quiz-leaderboard.php')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const leaderboardElement = document.getElementById('leaderboard');
      leaderboardElement.innerHTML = data
        .map((user) => `${user.username}: ${user.score}`)
        .join('<br>');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
  updateLeaderboard();
});

window.startGame = startGame;
window.selectLanguage = selectLanguage;

const closeMenu2 = document.querySelector('.close-menu2');

closeMenu2.addEventListener('click', function () {
  slideMenu.classList.remove('active');
});
const slideMenu = document.querySelector('.slide-menu');
const featuresMenu = document.getElementById('features-menu');

featuresMenu.addEventListener('click', function (event) {
  event.stopPropagation();
  slideMenu.classList.toggle('active');
});

slideMenu.addEventListener('click', function () {
  slideMenu.classList.remove('active');
});

document.addEventListener('click', function (event) {
  if (!slideMenu.contains(event.target)) {
    slideMenu.classList.remove('active');
  }
});

slideMenu.addEventListener('click', function (event) {
  event.stopPropagation();
});
