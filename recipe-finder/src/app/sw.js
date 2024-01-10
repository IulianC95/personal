self.addEventListener('install', (event) => {
  console.log('Service worker installing...');
  // Aici poți pre-cache resursele tale dacă e necesar
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  // Aici poți adăuga logica pentru cache sau returnarea resurselor
});
