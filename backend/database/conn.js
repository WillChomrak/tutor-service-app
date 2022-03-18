const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://node-admin:3azNav8TxU9OJTXJ@cluster0.3wgau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
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
