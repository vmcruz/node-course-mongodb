var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//save new something
// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// var todotest = new Todo({
//     text: '  Edit this video '
// });

// todotest.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log('Unable to save todo', err);
// });

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        validate: {
            validator: function(v) {
                return /\w+\.?\w+@\w+\.\w{2,}/.test(v);
            },
            message: '{VALUE} is not a valid email'
        }
    }
});

var user = new User({
    email: 'vmcruz16@gmail.com'
});

user.save().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});