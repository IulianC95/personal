document.addEventListener('DOMContentLoaded', function() {
  
  function displayEntriesLeaderboard() {
    fetch('php/leaderboard-count.php') 
      .then(response => response.json())
      .then(data => {
        const entriesDiv = document.getElementById('entriesLeaderboard'); 
        entriesDiv.innerHTML = ''; 
        data.forEach(entry => {
          entriesDiv.innerHTML += `<li>${entry.name}: ${entry.entries}</li>`; 
        });
      })
      .catch(error => console.error('Error:', error));
  }

  
  displayEntriesLeaderboard();
});
