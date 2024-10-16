const argv = require("yargs")
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla multiplicar",
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: "Es la opcion para enlistar los resultados de la tabla",
  })
  .options("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "Es la opcion para definir hasta donde llega la tabla",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = {
  argv,
};
