var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var connectedDb = null;

mongoClient.connect("mongodb://admin:admin@ds117889.mlab.com:17889/CloudFoundry_jc5t6s0b_i2ob8qqs", {
    native_parser: true,
    poolSize: 20,
    socketTimeoutMS: 480000,
    keepAlive: 300000,
    connectTimeoutMS: 30000,
    sslValidate: false
}, function (err, db) {
    assert.equal(null, err);
    connectedDb = db;
    db.collection('users').update({ "user": "skallepalli" }, { "user": "skallepalli", "pwd": "Oct@2017" }, { upsert: true }, function (err, result) {
        assert.equal(null, err);
        assert.equal(1, result.result.ok);
    });
});

exports.getDb = function () {
    return connectedDb;
}