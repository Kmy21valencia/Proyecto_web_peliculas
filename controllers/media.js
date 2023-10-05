const Media = require('../models/media')
const { request, response} = require('express')

/** Crear Media */

const crearMedia = async(req = request,res = response) => {
    console.log(req.body)
    const{ serial,titulo,url,imagen,fechaCreacion,fechaActualizacion,añoEstreno,genero,Tipo,director,productora} = req.body

    try{

        const mediaBD = await Media.findOne({ titulo})

        if(mediaBD){
            return res.status(400).json({msj:'ya existe nombre'})
        }


        const datos ={
            serial,
            titulo,
            url,
            imagen,
            fechaCreacion,
            fechaActualizacion,
            añoEstreno,
            genero,
            Tipo,
            director,
            productora
        }

        const media = new Media(datos)

        await media.save()

        return res.status(201).json(media)

    } catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

    
};

/**Obtener los Media */

const obtenerMedia = async (req = request,res = response) => {
    try {
        const medias = await Media.find()
        return res.status(200).json(medias)
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

const actualizarMedia = async (req = request, res = response) => {
    const mediaId = req.params.id
    const { serial,titulo,url,imagen,fechaCreacion,fechaActualizacion,añoEstreno,genero,Tipo,director,productora} = req.body

    try {
        const media = await Media.findById(mediaId)

        if (!media){
            return res.status(404).json({ msj: 'Media no encontrado '})
        }
         media.serial = serial
         media.titulo = titulo
         media.url = url
         media.imagen = imagen
         media.fechaCreacion = fechaCreacion
         media.fechaActualizacion = fechaActualizacion
         media.añoEstreno = añoEstreno
         media.genero = genero
         media.Tipo = Tipo
         media.productora = productora
         media.director = director
    
         

         await media.save();
         return res.status(200).json(media)
    } catch (error){
        console.log(error);
        return res.status(500).json({ msj: error})
    }
}

const eliminarMedia = async (req = request, res = response) => {
    const mediaId = req.params.id

    try{
        const media = await Media.findByIdAndRemove(mediaId)
        if(!media){
            return res.status(404).json({ msj: 'media no encontrado'})
        }
        

        return res.status(204).json()
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

module.exports={
    crearMedia,
    obtenerMedia,
    actualizarMedia,
    eliminarMedia
}