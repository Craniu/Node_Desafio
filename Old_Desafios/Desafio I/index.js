const {Registrar, Leer} = require('./operaciones');
const arg = process.argv.slice(2);

switch (arg[0]) {
    case 'registrar' :
        if(arg.length !== 6) {
        console.log("Para registrar una mascota debes ingresar nombre, edad, tipo, color, enfermedad.");
    }else {
        const [nombre, edad, tipo, color, enfermedad] = arg.slice(1);
        Registrar(nombre, edad, tipo, color, enfermedad);
    }
    break;
    case 'leer' :
        console.log(Leer());
        break;
    default:
        console.log("Comando no reconocido. Usa 'registrar' o 'leer'.");
        break;  
}
