const{ Schema,model}= require('mongoose')

const GeneroSchema = Schema({
    nombre: {
        type: String,
        require:[true,'Nombre genero requerido'],
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

    },
    descripcion:{
        type: String

    }
})

module.exports = model('Genero', GeneroSchema)