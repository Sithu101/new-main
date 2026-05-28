const { MongoClient } = require('mongodb');

const connStr = "mongodb://localhost:27017/new"

let conn;

const connectDB = (cb) => {

    MongoClient.connect(connStr)
        .then((client) => {
            conn = client.db('new');
            cb();
        })

        .catch(err => cb(err));

}

const getConn = () => conn;

module.exports = {
    connectDB,
    getConn
}