const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/paginationInReactAuthentication');

// User Schema Definition
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true, // Trims whitespace
        minlength: 3, // Minimum length for username
        maxlength: 30, // Maximum length for username
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum length for password
    },
    posts:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }],
    blackList:[String]
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
