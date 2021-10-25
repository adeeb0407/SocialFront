import mongoose  from "mongoose";
import PostModel from "../model/postModel.js";

export const postRoute = async (req, res) => {
    try {
        const getPost = await PostModel.find()
        res.status(200).json(getPost)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
  
};

export const createRoute = async (req, res) => {

    const createPost = new PostModel(req.body);

    try {
        await createPost.save();
        console.log('created')
        res.status(201).json(createPost);

    } catch (error) {
        res.status(409).json( {message : error.message} )
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    console.log('deleted')
    await PostModel.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, caption, imageUpload, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, caption, imageUpload, tags, _id: id };

    await PostModel.findByIdAndUpdate(id, updatedPost, { new: true });
    console.log('updated')
    res.json(updatedPost);
}