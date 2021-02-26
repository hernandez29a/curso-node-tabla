const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type:'number',
        demandOption:true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type:'number',
        default: false,
        describe: 'Es es el número hasta donde quieres la tabla'
    })
    .option('l', {
        alias: 'listar',
        type:'boolean',
        default: false,
        describe:'muestra la tabla por consola'

    })
    .check( (argv, options) => {
       //console.log('yargs', argv) 
       if( isNaN( argv.b) ){
            throw ' La base deben que ser un numero'
       }
       return true;
    })
    .argv;

    module.exports = argv;