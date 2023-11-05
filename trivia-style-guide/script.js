// Acest cod ar trebui să fie plasat în script.js și inclus după scripturile hărții

document.addEventListener('DOMContentLoaded', function () {
  // Așteaptă o secundă după încărcarea DOM-ului pentru a te asigura că harta este complet încărcată
  setTimeout(function () {
    // Selectează toate elementele de județe folosind clasa specifică hărții
    var states = document.querySelectorAll('[class^="sm_state"]');

    // Adaugă event listener la fiecare județ
    states.forEach(function (state) {
      state.addEventListener('click', function () {
        // Aici poți accesa 'id' sau alte atribute ale județului
        var stateId = this.id;
        var stateClass = this.getAttribute('class');

        // Extrage codul unic al județului din clasă, presupunând că este ultima parte după '_'
        var uniqueCode = stateClass.split('_').pop();

        // Logica pentru a afișa o întrebare specifică județului
        switch (uniqueCode) {
          case 'ROU305': // Brasov
            alert('Intrebare pentru Brasov');
            break;
          case 'ROU122':
            alert('Intrebare pentru DOlj');
            break;
          // Adaugă cazuri suplimentare pentru alte județe folosind același pattern
          // ...
          default:
            alert('Intrebare generală pentru restul județelor');
        }
      });
    });
  }, 1000); // Ajustează această întârziere dacă este necesar
});
