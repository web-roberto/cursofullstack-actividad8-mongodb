// propiedad virtual ´price_w_taxes' del modelo inmueble
(async () => {
  const db = require('./dbConfig');
  const inmueble = require('./models/inmueble'); //importamos la clase del Modelo
  const inmuebles = await inmueble.find();
  for (let inmueble of inmuebles) {
    console.log(inmueble.cuota);
  }
  db.close();
})();
