const { MongoClient } = require('mongodb');
const uri = "<your-uri-here>"
const client = new MongoClient(uri);

let dbConnection;

const conn = {
    connectToServer: async function (callback) {
        client.connect((err, db) => {
            if (err || !db) {
                return callback (err);
            }
            dbConnection = db.db('Tutor-app-database');
            console.log('connectToServer');
            return callback();
        })
    },
    getDatabase: function (callback) {
        console.log('getDatabase');
        return dbConnection;
    }
}

module.exports = conn;
