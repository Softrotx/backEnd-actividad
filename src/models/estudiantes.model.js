const mongoose = require('mongoose')



const estudiantesSchema = mongoose.Schema({
    nombre: {type:String, required: true},
    apellido: {type:String, required: true},
    edad: {type:Number, required: true},
    dni: { type: String, unique: true, required: true },
    curso: {type:String, required: true},
    nota: {type:Number, required: true}



});

module.exports= mongoose.model('estudiantes', estudiantesSchema);
