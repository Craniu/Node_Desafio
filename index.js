import express from "express";
import 'dotenv/config';
import cors from "cors";
import { router } from "./routes/likeMe.routes.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port, console.log(`Server is running on port ${port}`));