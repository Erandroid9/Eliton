export const UPDATEINDEX = (dbName, storeName, data, callback) => {

    const request = indexedDB.open(dbName);

    request.onsuccess = function (event) {

        const db = event.target.result;

        if (!db.objectStoreNames.contains(storeName)) {

            console.error(`Object store "${storeName}" not found.`);

            db.close();

            return;

        }

        const transaction = db.transaction(storeName, "readwrite");

        const store = transaction.objectStore(storeName);

        const putRequest = store.put(data);

        putRequest.onsuccess = function () {
            
            callback();

        };

        putRequest.onerror = function (event) {

            console.error("Error updating data", event.target.error);

        };

        transaction.oncomplete = function () {

        };

        transaction.onerror = function (event) {

            console.error("Transaction error", event.target.error);

        };

        db.close();

    };

    request.onerror = function (event) {

        console.error("Error opening database", event.target.error);

    };
    
};