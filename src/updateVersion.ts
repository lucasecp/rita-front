import { readFileSync, writeFileSync, readdir } from 'fs';

const myArgs = process.argv.slice(2);
const build = myArgs[0];

// Atualizando o main.ts

let data = readFileSync('./src/components/Layout/shared/Footer/index.js', 'utf-8');

let indexOfVersion = data.indexOf('<CustomTooltip label="v') + 23;

let indexOfEndOfVersion = indexOfVersion;
while (data.substr(indexOfEndOfVersion, 1) != '"') {
  indexOfEndOfVersion++;
}

const version = data.substring(indexOfVersion, indexOfEndOfVersion);
console.log(version);

const splitVersions = version.split('.');
console.log(splitVersions[0]);
console.log(splitVersions[1]);
console.log(splitVersions[2]);
if (splitVersions.length > 3) {
  console.log(splitVersions[3]);
}

let major = parseInt(splitVersions[0]);
let minor = parseInt(splitVersions[1]);
let patch = parseInt(splitVersions[2]);

patch++;
if (patch > 20) {
  patch = 0;
  minor++;
  if (minor > 20) {
    minor = 0;
    major++;
  }
}

const newVersion = major + '.' + minor + '.' + patch + '.' + build;

data =
  data.substring(0, indexOfVersion) +
  newVersion +
  data.substring(indexOfEndOfVersion, data.length);

writeFileSync('./src/components/Layout/shared/Footer/index.js', data, 'utf-8');
