const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

// Permit accesul de oriunde (rezolvă problema CORS)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Încarcă misiunile din fișierul JSON
fs.readFile('missions.json', 'utf8', (err, data) => {
  if (err) {
    console.log(`Error reading the file: ${err}`);
  } else {
    const missions = JSON.parse(data);
    console.log('Missions loaded:', missions);
  }
});

app.get('/mission', (req, res) => {
  // Aici, în loc să returnezi un obiect static, ai putea să returnezi o misiune din array-ul `missions`
  res.json({
    missionId: 1,
    description: 'Solve a basic addition problem.',
    code: 'function add(a, b) { return a + b; }',
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
