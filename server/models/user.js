const mongoose = require('mongoose');

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

module.exports = { User }