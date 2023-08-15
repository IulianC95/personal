let startTime;
let interval;
const testArea = document.getElementById('testArea');
const wordCount = document.getElementById('wordCount');
const timer = document.getElementById('timer');
const sampleTextDiv = document.getElementById('sampleText');
sampleTextDiv.textContent = sampleTextDiv.textContent
  .trim()
  .replace(/\s+/g, ' ');

let sampleText = sampleTextDiv.textContent;

// Încarcă sunetul folosind Howler.js
const keySound = new Howl({
  src: ['keyPressSound.mp3'],
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

const texts = [
  'Un element HTML este format din continut, taguri de inchidere si deschidere.',
  'Un document HTML este format din elementele head si body, imbracate in elementul html.',
  'Un element se considera pozitionat atunci cand valoarea proprietatii position, diferta de "static".',
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
  'In CSS, selectarea se face prin atribute speciale adaugate in markup, respectiv id si class.',
  'Un selector CSS poate fi compus atat din identificatori de clasa, atribut, cat si de id.',
  'Box model este reprezentarea tipica a elementelor dintr-un document si are 4 zone revelante: continut, padding, bordura si margini.',
  'Unitatile de masura pentru width si height, in CSS, sunt: px, em, %, vh, vw.',
  'Proprietatea padding controleaza spatiul ramas intre continut si bordura elementului.',
  'Proprietatea border manipuleaza culoarea, grosimea si stilul bordurii elementului. Border radius manipuleaza raza colturilor bordurii.',
  'Proprietatea margin manipuleaza zonele din afara bordurii elementului.',
  'box-sizing seteaza box modelul elementului: content-box (sistemul clasic - paddingul se aduna la cutie) si border-box (sistemul nou - contentul este redimensionat in functie de dimensiunile specificate pe cutie).',
  'Proprietatea position manipuleaza modul in care se pozitioneaza elementul in flowul documentului.',
  'Pozitionarea implicita este "static". Cand valoarea difera de static, elementul se va numi \u201cpozitionat\u201d.',
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
  'CDN (Content Delivery Network): server specializat care serveste resurse statice (imagini, video, text). Pot fi referentiate si ca Edge servers.',
  'Atributul target cu valoarea _blank pe o ancora va instrui browserul sa deschida acea pagina intr-un tab nou.',
  'Un element ul poate contine doar elemente li ca si descendenti directi',
  'Un element select poate contine doar elemente option sau optgroup ca descendenti directi',
  'Metoda POST va trimite informatie in corpul requestului iar GET va adauga informatia la URL',
  'URL inseamna Uniform Resource Locator',
];

function setRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  sampleTextDiv.textContent = texts[randomIndex];
  sampleText = texts[randomIndex];
}

setRandomText();

// Funcții pentru leaderboard
function addScoreToLeaderboard(name, score) {
  fetch('../php/leaderboard.php', {
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
  fetch('../php/leaderboard.php')
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

// Inițializează leaderboard-ul la încărcarea paginii
displayLeaderboard();
