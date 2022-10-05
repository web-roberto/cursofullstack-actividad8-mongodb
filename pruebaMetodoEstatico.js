//Método estático: es guardar una consulta por un valor fijo
(async () => {
  const db = require('./dbConfig');
  const inmueble = require('./models/inmueble');
  const prod = new inmueble();
  // prod.department = 'home';
  const inmuebles = await inmueble.alquilados();
  console.log(inmuebles);
  db.close();
})();
