const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');




//console.log( process.argv);
console.clear();
//console.log( argv);
//console.log('base: yargs' , argv.base);

//console.log(process.argv);

//capturar datos desde la consola
//const [, , arg3 = 'base=5'] = process.argv;
//const[ , base = 5] = arg3.split('=');
//console.log(base);

//const base = 3;

crearArchivo( argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));




