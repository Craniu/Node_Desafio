import express from "express";
import cors from "cors";
import 'dotenv/config';
import { leerArchivo, escribirArchivo, agregarCancion, eliminarCancion } from "./data/script.js";
//import { writeFile, readFile } from "fs/promises";

const app = express();
app.use(express.json());
app.use(cors());

//Declareichons
const port = process.env.PORT || 3000;

//METODOS

//GET
app.get("/", (req, res) => {
    res.json({"Desafio": "Desafio II"})
})

app.get("/canciones", async (req, res) => {
    const canciones = await leerArchivo();
    res.send(canciones);
});

//POST
app.post("/canciones", (req, res) => {
    const { id, titulo, artista, tono } = req.body;
    if (!id || !titulo || !artista || !tono) {
        return res.status(400).send({ message: "Faltan datos" });
    }
    const nuevaCancion = { id, titulo, artista, tono };
    agregarCancion(nuevaCancion);
    res.status(201).send({ message: "Canción agregada", cancion: nuevaCancion });
});

//PUT
app.put("/canciones/:id", async (req, res) => {
    const {id} = req.params;
    const {titulo, artista, tono} = req.body;

    if (!titulo || !artista || !tono) {
        return res.status(400).send({ message: "Faltan datos en el body" });
    }

    const canciones = await leerArchivo();
    const index = canciones.findIndex(c => c.id === parseInt(id));

    if (index !== -1) {
        console.log(id);
        canciones[index] = { id: parseInt(id),titulo, artista, tono };
        await escribirArchivo(canciones);
        res.status(200).send({ message: "Canción actualizada", cancion: canciones[index] });
    } else {
        console.log(id);
        res.status(404).send({ message: "Canción no encontrada" });
    }
});

//DELETE
app.delete("/canciones/:id", async (req, res) => {
    const { id } = req.params;
    const canciones = await leerArchivo();
    const index = canciones.findIndex(c => c.id === parseInt(id));

    if (index !== -1) {
        const cancionEliminada = canciones.splice(index, 1);
        await escribirArchivo(canciones);
        res.status(200).send({ message: "Canción eliminada", cancion: cancionEliminada });
    } else {
        res.status(404).send({ message: "Canción no encontrada" });
    } 
})


//Levanto el server
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});