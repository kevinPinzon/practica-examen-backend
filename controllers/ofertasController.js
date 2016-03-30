var student = require('../schemas/OfertasTrabajo');

exports.crearOferta = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var newOferta = new OfertasTrabajo({
      titulo: request.payload.titulo,
      descripcion: request.payload.descripcion,
      cargo: request.payload.cargo,
      informacion: request.payload.informacion,
      salario: request.payload.salario,
    });
    newOferta.save();
    console.log('oferta de trabajo creada');
    return reply('ok');
  }
}
