//const { argv2 } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

 console.log(argv);

// console.log('base: yargs', argv.b);

//const tabla = 5;

// const [ , , argv3='base=5'] = process.argv;
// const [,base=5 ] = argv3.split('=');
// console.log(base);

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
