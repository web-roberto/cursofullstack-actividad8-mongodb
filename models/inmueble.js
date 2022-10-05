// Tipos de Mongoose: String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, Schema.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const inmuebleSchema = new Schema({
  piso : String,
  letra : String,
  extension : Number,// (m2)
  numero_habitaciones: Number,
  alquilado :Boolean, //SI/NO
  nombre_propietario : String,
  mail_contacto : String
});

// propiedades virtuales
inmuebleSchema.virtual('cuota').get(function () {
  return this.extension * 0.6; //cada metro cuadrado 0.6€ de cuota
});
/*inmuebleSchema.virtual('cuota').set(function (newCuota) {
  this.price = newPrice / 1.21;
});*/
//Método de instancia -> consulta segun el valor de un atributo
inmuebleSchema.methods.mismoPropietario = function () {
  return this.model('inmueble').find({  nombre_propietario : this.nombre_propietario  });
};
//Método estático: es guardar una consulta por un valor fijo
inmuebleSchema.statics.alquilados = function () {
  return this.model('inmueble').find({ alquilado: true });
};

module.exports = mongoose.model('inmueble', inmuebleSchema);
