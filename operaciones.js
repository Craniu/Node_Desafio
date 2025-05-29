const fs = require('fs')

const Registrar = (nombre,edad,tipo,color,enfermedad) => {
    const mascota = {
        nombre :nombre,
        edad : edad,
        tipo : tipo,
        color: color, 
        enfermedad: enfermedad
    }
    fs.writeFileSync('citas.json', JSON.stringify(mascota))
    console.log("Mascota registrada correctamente")
    console.log(mascota)
}

const Leer = () => {
    const data = JSON.parse(fs.readFileSync('citas.json','UTF8'))
    console.log(data)
}

module.exports = {Registrar, Leer};