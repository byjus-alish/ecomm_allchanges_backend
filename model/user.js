const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    first_name: {
        type:     String
    },
    last_name: {
        type:     String
    },
    email:{
        type:      String,
        trim:      true, 
        lowercase: true,
        unique:    true,
        required:  true,
    },
    password: {
        type: String
    },
    updated: {
        type:    Date,
        default: Date.now
    },
    created: {
        type:    Date, 
        default: Date.now
    },
    refreshToken: String,
    roles: {
        User: {
            type: Number,
            default: 1
        },
        Admin: Number
    },      
});

module.exports = mongoose.model('User', UserSchema)