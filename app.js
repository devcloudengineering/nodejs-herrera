const fs = require("fs");
const colors = require("colors");
const { getLine } = require("./helpers/multiplicar.js");
console.clear();

getLine()
  .then(([base, listar = false, hasta]) => {
    let salida = "";
    for (let i = 1; i < hasta + 1; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("=============".green);
      console.log(`Tabla del: ${base}`.blue);
      console.log("=============".green);
      console.log(salida);
    }
    fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
      console.log(`Archivo tabla-${base}.txt creado exitosamente`.rainbow);
    });
  })
  .catch((err) => console.log(err));

/* Para trabajar con argumentos (se utiliza la bandera -- o -) y pasarselos a la ejecucion del programa se utiliza yargs en vez de esta forma nativa */
// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");
// console.log(process.argv);
// console.log(argv);
// console.log("la base es ", argv.base);
