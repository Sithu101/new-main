const { MongoClient } = require('mongodb');

const connStr = "mongodb://localhost:27017/"

let conn;

const connectDB = (cb) => {

    MongoClient.connect(connStr)
        .then((client) => {
            conn = client.db();
            cb();
            console.log('Connected to MongoDB');
        })

        .catch(err => cb(err));

}

const getConn = () => conn;

module.exports = {
    connectDB,
    getConn
}