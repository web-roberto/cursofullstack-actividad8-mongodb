//Método de instancia -> consulta segun el valor de un atributo
(async () => {
  const db = require('./dbConfig');
  const inmueble = require('./models/inmueble');
  const prod = new inmueble();
  prod.nombre_propietario  = "Roberto";
  const inmuebles = await prod.mismoPropietario();
  console.log(inmuebles);
  db.close();
})();
