const Genero = require('../models/genero')
const { request, response} = require('express')

/** Crear Genero */

const crearGenero = async(req = request,res = response) => {
    console.log(req.body)
    const{ nombre,descripcion} = req.body

    try{

        const generoBD = await Genero.findOne({ nombre})

        if(generoBD){
            return res.status(400).json({msj:'ya existe nombre'})
        }


        const datos ={
            nombre,
            descripcion
        }

        const genero = new Genero(datos)

        await genero.save()

        return res.status(201).json(genero)

    } catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

    
};

/**Obtener los Generos */

const obtenerGenero = async (req = request,res = response) => {
    try {
        const generos = await Genero.find()
        return res.status(200).json(generos)
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

const actualizarGenero = async (req = request, res = response) => {
    const generoId = req.params.id
    const { nombre, descripcion } = req.body

    try {
        const genero = await Genero.findById(generoId)

        if (!genero){
            return res.status(404).json({ msj: 'Genero no encontrado '})
        }
         genero.nombre = nombre
         genero.descripcion = descripcion

         await genero.save();
         return res.status(200).json(genero)
    } catch (error){
        console.log(error);
        return res.status(500).json({ msj: error})
    }
}

const eliminarGenero = async (req = request, res = response) => {
    const generoId = req.params.id

    try{
        const genero = await Genero.findByIdAndRemove(generoId)
        if(!genero){
            return res.status(404).json({ msj: 'Genero no encontrado'})
        }
        

        return res.status(204).json()
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

module.exports={
    crearGenero,
    obtenerGenero,
    actualizarGenero,
    eliminarGenero
}