// ejecutamos: node pruebasEsquemainmueble.js

(async () => {
  const db = require('./dbConfig'); //abrimos la BDD de Mongo
  const inmueble = require('./models/inmueble'); //importamos la clase del Modelo

  //un objeto de la clase y asignamos los atributos:
  const prod = new inmueble();
  prod.piso = '1';
  prod.letra = 'A';
  prod.extension = 65; // (m2)
  prod.numero_habitaciones = 2;
  prod.alquilado = true; //SI/NO
  prod.nombre_propietario = 'Roberto';
  prod.mail_contacto = 'roberto.alonso.gandia@gmail.com';
  await prod.save(); //alta del registro
  db.close(); //cerramos la BDD de Mongo
})();
