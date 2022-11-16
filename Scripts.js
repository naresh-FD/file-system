const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const users = fetch(BASE_URL)
  .then((response) => response.json())
  .then((user) => {
    return user;
  });

const printUsers = async () => {
  const a = await users;
  localStorage.setItem('user', JSON.stringify(a));
};

const foo = localStorage.getItem('user');
// Fs system functions

const root = this;
window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024, SaveDatFileBro);
async function SaveDatFileBro(localstorage) {
  localstorage.root.getFile('123.json', { create: true }, async function (DatFile) {
    await DatFile.createWriter(async function (DatContent) {
      const blob = await new Blob([foo], { type: 'application/json' });
      DatContent.write(blob);
    });
  });
}

// console.log('testing', SaveDatFileBro());

function readTextFile(file) {
  console.log(file);
  let rawFile = new XMLHttpRequest();

  rawFile.open('GET', file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status === 0) {
        let allText = rawFile.responseText;
        // console.log(typeof JSON.parse(allText));
        return JSON.parse(allText);
      }
    }
  };
  // console.log(rawFile);
  return rawFile;
}

const txt = JSON.stringify(readTextFile(`filesystem:${window.location.href}/persistent/123.json`));

console.log(readTextFile(`filesystem:${window.location.href}/persistent/123.json`));

document.getElementById('swt').innerHTML = txt;
