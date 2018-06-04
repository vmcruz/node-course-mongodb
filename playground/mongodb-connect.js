// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server', err);
    }

    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Users').insertOne({
    //     name: 'Víctor',
    //     age: 29,
    //     location: 'México'
    // }, (err, result) => {
    //     if(err)
    //         return console.log('Unable to insert user', err);
    //     console.log(result.ops);
    // });
    client.close();
});