// scripts/generate-version.js
const { version } = require('../package.json');
const fs = require('fs');
fs.writeFileSync('src/version.js', `const version = "${version}";\nexport default version;\n`);