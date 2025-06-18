import { Router } from "express";
import { getAllPost, createPost, addLike, deletePost } from "../src/controllers/likeMe.Controllers.js";

export const router = Router();

router.get("/posts", getAllPost);

router.post("/posts", createPost);

router.put("/posts/like/:id", addLike);

router.delete("/posts/:id", deletePost);