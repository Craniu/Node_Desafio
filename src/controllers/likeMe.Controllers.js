import { getAllPostsModel, createPostModel, addLikeModel, deletePostModel } from "../models/likeMe.Models.js"; 

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
        res.status(201).json({message:"Post Creado",post});
    }catch(e){
        console.error(e);
        res.status(500).json({ error: "Internal Server Error", mensaje: e.message });
    }
}

export const addLike = async (req, res) => {
    try{
        const {id} = req.params;
        const post = await addLikeModel(id);
        res.status(200).json({message:"Like agregado",post})
    }catch(e){
        console.error(e);
        res.status(500).json({ error: "Internal Server Error", mensaje: e.message });
    }
}


export const deletePost = async (req,res) => {
    try{
        const {id} = req.params;
        const post = await deletePostModel(id);
            res.status(200).json({ message: "Post eliminado", post });
    }catch(e){
        console.error(e);
        res.status(500).json({ error: "Internal Server Error", mensaje: e.message });
    }
}