// scripts/generate-version.js
const { version } = require('../package.json');
const fs = require('fs');
fs.writeFileSync('src/version.js', `export default "${version}";\n`);