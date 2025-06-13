import { getAllPosts } from "../models/likeMe.Models"; 

export const getAllPost = async (req,res) => {
    try{
        const posts = await getAllPosts();
        res.status(200).json(posts);
    }catch(e){
        console.error(e);
        res.status(500).json({ error: "Internal Server Error", mensaje: e.message });
    }
}