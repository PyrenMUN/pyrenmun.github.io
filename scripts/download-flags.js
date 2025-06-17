const https = require('https');
const fs = require('fs');
const path = require('path');

const countries = [
  { name: "France", code: "fr" },
  { name: "Spain", code: "es" },
  { name: "Germany", code: "de" },
  { name: "Italy", code: "it" },
  { name: "United Kingdom", code: "gb" },
  { name: "Netherlands", code: "nl" },
  { name: "Belgium", code: "be" },
  { name: "Switzerland", code: "ch" },
  { name: "Portugal", code: "pt" },
  { name: "Austria", code: "at" },
  { name: "Poland", code: "pl" },
  { name: "Czech Republic", code: "cz" }
];

const flagsDir = path.join(__dirname, '../public/images/flags');

if (!fs.existsSync(flagsDir)) {
  fs.mkdirSync(flagsDir, { recursive: true });
}

countries.forEach(country => {
  const url = `https://flagcdn.com/w320/${country.code}.png`;
  const filePath = path.join(flagsDir, `${country.name.toLowerCase()}.png`);

  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Téléchargé: ${country.name}`);
      });
    } else {
      console.error(`Erreur pour ${country.name}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Erreur pour ${country.name}: ${err.message}`);
  });
}); 