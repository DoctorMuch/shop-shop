export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // open connection to the db 'shop-shop' with the version of 1
    const request = window.indexedDB.open('shop-shop', 1);

    // create variables to hold db reference, transaction (tx), and object store
    let db, tx, store;

    // if version change (or first time using db), run this method and create object stores
    request.onupgradeneeded = function (e) {
      const db = request.result;
      // create object store for each data type and set 'primary' key index to be data '_id'
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    //handle connection errors
    request.onerror = function (e) {
      console.log('We have encountered an error.');
    };

    // on db open success
    request.onsuccess = function (e) {
      // save a db reference to 'db' variable
      db = request.result;
      // open transaction to do whatever we pass into 'storeName'--(must match one of the object's store names)
      tx = db.transaction(storeName, 'readwrite');
      // save reference to the object store
      store = tx.objectStore(storeName);

      // alert of any errors
      db.onerror = function (e) {
        console.log('error', e);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      // close db connection when transaction is complete
      tx.oncomplete = function () {
        db.close();
      };
    };

  });
}