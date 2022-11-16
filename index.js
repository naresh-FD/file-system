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

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

const initFS = (fs, fileName, data = null, callback = null) => {
  const retVal = null;
  fs.root.getFile(
    fileName,
    { create: false, exclusive: true },
    (fileEntry) => {
      fileEntry.file(function (file) {
        const prom = new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.onloadend = function (e) {
            resolve(e.result);
          };
          reader.readAsText(file);
        });
        let retVal = JSON.parse(Promise.all([prom]));
        return retVal;
      }, errorHandler);
      if (data) {
        let retVal = [...retVal, data];
        fileEntry.createWriter((fileWriter) => {
          window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder;
          fileWriter.write(JSON.stringify(retVal));
        }, errorHandler);
      }
    },
    errorHandler
  );
  if (callback) callback(retVal);
};
const errorHandler = (err) => {
  console.error('error', err);
};
const createfile = (fileName) => {
  window.requestFileSystem(
    window.TEMPORARY,
    50 * 1024 * 1024,
    create.bind(null, fileName),
    errorHandler
  );
};
const create = (fs, fileName) => {
  fs.root.getFile(
    fileName,
    { create: true, exclusive: true },
    (fileEntry) => {
      console.log('fileEntry', fileEntry);
    },
    errorHandler
  );
};

const savefile = (fileName, json, callback) => {
  window.requestFileSystem(
    window.TEMPORARY,
    50 * 1024 * 1024,
    initFS.bind(null, fileName, json, callback),
    errorHandler
  );
};
savefile('users', localStorage.getItem('user'), (res) => console.log('saveFile', res));
