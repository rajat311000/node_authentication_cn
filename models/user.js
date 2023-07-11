const mongoose = require('mongoose');



const userSchema = new mongoose.Schema
({
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    name:
    {
        type: String,
        required: true
    },
    avatar:
    {
        type: String
    },
    accessToken:
    {
        type: String,
        default: 'abc'
    },
    isTokenValid:
    {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});



// static




const User = mongoose.model('User', userSchema);

module.exports = User;