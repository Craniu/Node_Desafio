import express from "express";
import 'dotenv/config';
import { leerArchivo, escribirArchivo, agregarCancion, eliminarCancion } from "./data/script.js";
import { writeFile, readFile } from "fs/promises";


const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Desafio II")
})

//METODOS

//GET
app.get("/canciones", (req, res) => {
    res.send(leerArchivo());
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
app.put("/canciones/:id", (req, res) => {
    const {id} = req.params;
    const {titulo, artista, tono} = req.body;
    const canciones = leerArchivo();
    const index = canciones.findIndex(c => c.id === parseInt(id));
    if (index !== -1) {
        canciones[index] = { titulo, artista, tono };
        escribirArchivo(canciones);
        res.status(200).send({ message: "Canción actualizada", cancion: canciones[index] });
    } else {
        res.status(404).send({ message: "Canción no encontrada" });
    }
});



//Levanto el server
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});