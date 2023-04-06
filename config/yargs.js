const argv = require('yargs')
    .option('b', {
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Es la base de ka tabla de multiplicar',
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        demandOption:true,
        default:false, 
        describe: 'Es la bandera para imprimir la tabla en consola'
    })
    .option('h', {
        alias:'hasta',
        type:'number',
        demandOption:true,
        default:10, 
        describe: 'Limite de hasta donde llegara la multiplicacion'
    })
    .check( (argv,option) =>{
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero';
        }
        return true;
    })
    .argv;


module.exports = argv;