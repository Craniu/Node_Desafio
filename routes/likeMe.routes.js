import { Router } from "express";
import { getAllPost, createPost } from "../src/controllers/likeMe.Controllers.js";

export const router = Router();

router.get("/posts", getAllPost);

router.post("/posts", createPost);
