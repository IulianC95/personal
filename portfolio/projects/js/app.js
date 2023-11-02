function toggleMathPaperBackground() {
  const body = document.body;
  body.classList.toggle('math-paper-background');
  // Când se activează fundalul, adaugă creioane
  if (body.classList.contains('math-paper-background')) {
    const numberOfPencils = 30; // Spre exemplu, 50 de creioane pentru densitate mai mare
    for (let i = 0; i < numberOfPencils; i++) {
      let creion = document.createElement('img');
      creion.src = 'images/creion.png'; // calea către imaginea creionului
      creion.className = 'creion';
      creion.style.top = Math.random() * window.innerHeight + 'px';
      creion.style.left = Math.random() * window.innerWidth + 'px';
      creion.style.transform = `rotate(${Math.random() * 360}deg)`;
      body.appendChild(creion);
    }
  } else {
    // Când se dezactivează fundalul, elimină creioanele
    document.querySelectorAll('.creion').forEach((creion) => creion.remove());
  }
}

window.onload = toggleMathPaperBackground;
