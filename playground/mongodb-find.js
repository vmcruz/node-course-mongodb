// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server', err);
    }

    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('Todos').find().count().then((count) => {
        console.log('Todos');
        console.log(`Total: ${count}`);
        //console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fecth docs', err);
    });

    //client.close();
});