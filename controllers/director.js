const Director = require('../models/director')
const { request, response} = require('express')

/** Crear Director */

const crearDirector = async(req = request,res = response) => {
    console.log(req.body)
    const{ nombre,estado} = req.body

    try{

        const directorBD = await Director.findOne({ nombre})

        if(directorBD){
            return res.status(400).json({msj:'ya existe nombre'})
        }


        const datos ={
            nombre,
            estado
        }

        const director = new Director(datos)

        await director.save()

        return res.status(201).json(director)

    } catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

    
};

/**Obtener los Directores */

const obtenerDirector = async (req = request,res = response) => {
    try {
        const director = await Director.find()
        return res.status(200).json(director)
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

const actualizarDirector = async (req = request, res = response) => {
    const directorId = req.params.id
    const { nombre, estado } = req.body

    try {
        const director = await Director.findById(directorId)

        if (!director){
            return res.status(404).json({ msj: 'Director no encontrado '})
        }
         director.nombre = nombre
         director.estado = estado

         await director.save();
         return res.status(200).json(director)
    } catch (error){
        console.log(error);
        return res.status(500).json({ msj: error})
    }
}

const EliminarDirector = async (req = request, res = response) => {
    const directord = req.params.id

    try{
        const director = await Director.findById(directorId)
        if(!director){
            return res.status(404).json({ msj: 'Director no encontrado'})
        }
        await director.remove()

        return res.status(204).json()
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

module.exports={
    crearDirector,
    obtenerDirector,
    actualizarDirector,
    EliminarDirector
}