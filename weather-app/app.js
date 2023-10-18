const peaks = [
    { name: "Moldoveanu", latitude: 45.5959, longitude: 24.6176 },
    { name: "Negoiu", latitude: 45.3854, longitude: 24.6517 },
    // Adăugați aici alte vârfuri
  ];
  
  async function getWeather(condition) {
    const dateInput = document.getElementById('datePicker').value || new Date().toISOString().split('T')[0];
    let messages = [];
  
    for (const peak of peaks) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${peak.latitude}&longitude=${peak.longitude}&hourly=precipitation`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      let message = '';
      const precipitation = data.hourly && data.hourly.precipitation ? data.hourly.precipitation[0] : 'N/A'; // Presupunem că prima valoare din array reprezintă precipitațiile
  
      switch (condition) {
        case 'clear':
          message = precipitation === 0 ? `În data de ${dateInput}, nu va ploua pe ${peak.name}.` : `În data de ${dateInput}, va ploua pe ${peak.name}.`;
          break;
        case 'snow':
          // Logica pentru zăpadă
          break;
        case 'cloud':
          // Logica pentru nori
          break;
        case 'current':
          message = `Precipitații actuale / la data selectată (${dateInput}) pe ${peak.name}: ${precipitation}`;
          break;
      }
      console.log(data);
      messages.push(message);
    }
  
    document.getElementById('result').innerText = messages.join('\n');
  }
  
  
  