import { Router } from "express";
import { getAllPost } from "../controllers/likeMe.Controllers.js";

export const router = Router();

router.get("/posts", getAllPost);


