// ...

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
printUsers();
// Fs system functions

const root = this;
window.webkitRequestFileSystem(window.PERSISTENT, 1024 * 1024, SaveDatFileBro);
async function SaveDatFileBro(localstorage) {
  localstorage.root.getFile('123.json', { create: true }, async function (DatFile) {
    await DatFile.createWriter(async function (DatContent) {
      const blob = await new Blob([JSON.stringify(bar)], { type: 'application/json' });
      DatContent.write(blob);
    });
  });
}

// console.log('testing', SaveDatFileBro());

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open('GET', file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        console.log(allText);
      }
    }
  };
  rawFile.send(null);
}
readTextFile('filesystem:http://127.0.0.1:5500/persistent/123.json');
