// Pasul 1: Încărcăm imaginea și o desenăm pe un canvas
console.log('Începe procesul de generare a CSS-ului...');
const img = new Image();
img.src = 'peugeot.jpg';
img.onload = function () {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Pasul 2: Obținem datele despre pixeli
  const pixelData = ctx.getImageData(0, 0, img.width, img.height).data;

  // Pasul 3: Generăm CSS-ul
  let cssString = '';
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      const i = (y * img.width + x) * 4;
      const color = `rgba(${pixelData[i]}, ${pixelData[i + 1]}, ${
        pixelData[i + 2]
      }, ${pixelData[i + 3] / 255})`;

      cssString += `.pixel-${x}-${y} { background-color: ${color}; width: 1px; height: 1px; }\n`;
    }
  }
  console.log('CSS generat. Începe crearea blob-ului...');
  // Creăm și descărcăm fișierul CSS
  const blob = new Blob([cssString], { type: 'text/css' });
  const url = URL.createObjectURL(blob);

  console.log('Blob creat. Începe descărcarea...');

  const link = document.createElement('a');
  link.href = url;
  link.download = 'pixel-art.css';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log('Fișierul CSS a fost generat și descărcat.');
};

// Generăm conținutul HTML
let htmlString =
  '<!DOCTYPE html>\n<html>\n<head>\n<link rel="stylesheet" type="text/css" href="pixel-art.css">\n</head>\n<body>\n';
htmlString +=
  '<div style="display: grid; grid-template-columns: repeat(' +
  img.width +
  ', 1px);">\n';
for (let y = 0; y < img.height; y++) {
  for (let x = 0; x < img.width; x++) {
    htmlString += `<div class="pixel-${x}-${y}"></div>\n`;
  }
}
htmlString += '</div>\n</body>\n</html>';

// Creăm și descărcăm fișierul HTML
const htmlBlob = new Blob([htmlString], { type: 'text/html' });
const htmlUrl = URL.createObjectURL(htmlBlob);

const htmlLink = document.createElement('a');
htmlLink.href = htmlUrl;
htmlLink.download = 'pixel-art.html';
document.body.appendChild(htmlLink);
htmlLink.click();
document.body.removeChild(htmlLink);

console.log('Fișierul HTML a fost generat și descărcat.');
