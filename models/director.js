const{ Schema,model}= require('mongoose')

const DirectorSchema = Schema({
    nombre: {
        type: String,
        require:[true,'Nombre director requerido'],
        minlength: 1
    },
    estado:{
        type: Boolean,
        default: true,
        require: true
    },
    fechaCreacion:{
        type: Date,
        default: new Date()
    },
    fechaActualizacion:{
        type: Date,
        default: new Date()

    }

})

module.exports = model('Director', DirectorSchema)