import { getAllPostsModel, createPostModel } from "../models/likeMe.Models.js"; 

export const getAllPost = async (req,res) => {
    try{
        const posts = await getAllPostsModel();
        res.status(200).json(posts);
    }catch(e){
        console.error(e);
        res.status(500).json({ error: "Internal Server Error", mensaje: e.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const {titulo, img, descripcion} = req.body;
        const post = await createPostModel(titulo, img, descripcion);
        res.status(201).json(post);
    }catch(e){
        console.error(e);
        res.status(500).json({ error: "Internal Server Error", mensaje: e.message });
    }
}