const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/paginationInReact')


const commentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for consistency
        ref: 'User', // Reference to User model
        required: true,
    },
    text: {
        type: String,
        required: true,
        maxLength: 400,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    replies: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId, // Use ObjectId for replies as well
            ref: 'User', // Reference to User model
            required: true,
        },
        text: {
            type: String,
            required: true,
            maxLength: 400,
        },
        timestamp: {
            type: Date,
            default: Date.now,
        },
    }],
});



const postSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    desc:{
        type: String,
        maxLength:500
    },
    img: {
        type: String
        // data: Buffer,       // Store image data as binary
        // contentType: String // Store the MIME type of the image
    },
    likes:[{
        type:mongoose.SchemaTypes.ObjectId,
        default:[],
        ref: 'User'
    }],
    comments:[commentSchema]
},{timestamps:true})


module.exports = mongoose.model('Comment', commentSchema);
module.exports = mongoose.model("post", postSchema)