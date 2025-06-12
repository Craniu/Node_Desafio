import express from "express";
import 'dotenv/config';
import cors from "cors";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());


app.listen(port, console.log(`Server is running on port ${port}`));