var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var OfertasSchemas = new mongoose.Schema({
  titulo : String,
  descripcion : String,
  cargo : String,
  informacion : String,
  salario: String,
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('OfertasTrabajo', OfertasTrabajoSchema);
