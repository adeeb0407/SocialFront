import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    imageUpload: {
        type: String,
        required: true,
    },
    likeCount: {
        type: Number,
        default : 0,
    },
    createdAt: {
        type: Date,
        default : new Date(),
    }
})

const PostModel = mongoose.model('post', postSchema)

export default PostModel;