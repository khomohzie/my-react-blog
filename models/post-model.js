const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        title: {type: String, required: true},
        introduction: {type: String, required: true},
        content: {type: String, required: true},
        subtitle: {type: String, required: true},
    }
)

module.exports = mongoose.model('posts', Post)