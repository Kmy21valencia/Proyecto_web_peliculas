const{ Schema,model}= require('mongoose')

const ProductoraSchema = Schema({
    nombre: {
        type: String,
        require:[true,'Nombre productora requerido'],
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

    },
    slogan:{
        type:String
    }
})

module.exports = model('Productora', ProductoraSchema)