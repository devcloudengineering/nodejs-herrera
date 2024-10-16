// const readline = require("readline");
const { argv } = require("../config/yargs.js");
const getLine = () => {
  return new Promise((resolve, rejected) => {
    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout,
    // });
    // rl.question(
    //   "Introduce un valor para crear la tabla de multiplicar: ",
    //   (respuesta) => {
    //     if (parseInt(respuesta)) {
    //       console.log(`El valor introducido es: ${respuesta}`);
    //       resolve(respuesta);
    //     } else {
    //       rejected("Ingresa un numero valido");
    //     }
    //     rl.close();
    //   }
    // );
    if (parseInt(argv.b)) {
      resolve([argv.b, argv.l, argv.h]);
    } else {
      rejected("Ha ocurrido un error, ingrese una base valida");
    }
  });
};

module.exports = {
  getLine,
};
