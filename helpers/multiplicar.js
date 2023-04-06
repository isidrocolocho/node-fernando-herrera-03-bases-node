const fs = require('fs');
const colors = require('colors');
const crearArchivo = async(base = 5, l = false,h =10) => {
    try{
        let consola =`--Tabla de ${base}--\n`.green;
        let salida =`--Tabla de ${base}--\n`;

        for (let index = 1; index <= h; index++) {
            salida+=`${base} X ${index} = ${base * index}\n`;
            consola+=`${base} X ${index} = ${base * index}\n`;
        }
        (l) ? console.log(consola) : console.log('');
        fs.writeFileSync(`salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`;

    }catch(error){
        throw error;
    }
}

module.exports = {
    crearArchivo,
}