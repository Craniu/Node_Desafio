const fs = require('fs');

const Registrar = (nombre,edad,tipo,color,enfermedad) => {
    const mascota = {
        nombre :nombre,
        edad : edad,
        tipo : tipo,
        color: color, 
        enfermedad: enfermedad
    }
    try {
        if(fs.existsSync('citas.json')) {
            const citas =  JSON.parse(fs.readFileSync('citas.json', 'UTF8'));
            citas.push(mascota);
            fs.writeFileSync('citas.json', JSON.stringify(citas));
        }else {
            fs.writeFileSync('citas.json', JSON.stringify([mascota]));
        }
        console.log("Mascota registrada correctamente");
    }catch (e) {
        console.log(e.message);
    }
    //console.log(mascota)
}

const Leer = () => {
    try{
    const data = JSON.parse(fs.readFileSync('citas.json','UTF8'))
    return data;
    }catch (e) {
        console.log("Error:", e.message);
        return "Nose pudo leer el archivo o no existe.";
    }
    //console.log(data)
}

module.exports = {Registrar, Leer};