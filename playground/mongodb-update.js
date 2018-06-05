// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to mongodb server', err);
    }

    console.log('Connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID('5b15947f7ad2960c74b69753')
    //     }, 
    //     { 
    //         $set: {
    //             completed: true
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //         console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b16205a7ad2960c74b69755')
    }, {
        $set: {
            name: 'Víctor Cruz'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
    //client.close();
});