const{ Schema,model}= require('mongoose')

const MediaSchema = Schema({
    serial:{
        type: String,
        require: [true, 'Serial requerido'],
        unique: [true, 'Media ya existe']
    },
    titulo: {
        type: String,
        require:[true,'titulo requerido'],
        minlength: 1
    },
    url: {
        type: String,

    },
    imagen:{
        type: String
    },
    fechaCreacion:{
        type: Date,
        default: new Date()
    },
    fechaActualizacion:{
        type: Date,
        default: new Date()

    },
    añoEstreno:{
        type: Date,
        require: true
    },
    genero:{
        type:Schema.Types.ObjectId,
        ref: 'Genero',
        require: true
    },
    Tipo:{
        type:Schema.Types.ObjectId,
        ref: 'Tipo',
        require: true
    },
    director:{
        type:Schema.Types.ObjectId,
        ref: 'Director',
        require: true
    },
    productora:{
        type:Schema.Types.ObjectId,
        ref: 'Productora',
        require: true
    }
})

module.exports = model('Media',  MediaSchema)