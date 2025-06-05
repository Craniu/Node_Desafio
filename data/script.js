import { writeFile, readFile } from "fs/promises";



const leerArchivo = async () => {
    try {
        console.log("Leyendo archivo...");
        console.log(JSON.parse(await readFile('./data/repertorio.json', 'utf8')))
        return JSON.parse(await readFile('./data/repertorio.json', 'utf8'))
    }catch (e) {
        console.log("hola");
        await writeFile("repertorio.json", "[]");
        return [];
    }
}


const escribirArchivo = async (data) => {
    try {
        await writeFile("data/repertorio.json", JSON.stringify(data, null, 2));
        console.log("Archivo escrito correctamente");
    } catch (e) {
        console.error("Error al escribir el archivo:", e);
    }
}

const agregarCancion = async (cancion) => {
    const canciones = await leerArchivo();
    canciones.push(cancion);
    await escribirArchivo(canciones);
    console.log("Canción agregada:", cancion);
}

const eliminarCancion = async (titulo) => {
    const canciones = await leerArchivo();
    const index = canaciones.findIndex(c => c.titulo === titulo);
    if (index !== -1) {
        const cancionEliminada = canciones.splice(index, 1);
        await escribirArchivo(canciones);
        console.log("Canción eliminada:", cancionEliminada);
    } else {
        console.log("Canción no encontrada:", titulo);
    }
}


export { leerArchivo, escribirArchivo, agregarCancion, eliminarCancion };