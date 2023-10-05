const Tipo = require('../models/tipo')
const { request, response} = require('express')

/** Crear Tipo */

const crearTipo = async(req = request,res = response) => {
    console.log(req.body)
    const{ nombre,descripcion} = req.body

    try{

        const tipoBD = await Tipo.findOne({ nombre})

        if(tipoBD){
            return res.status(400).json({msj:'ya existe nombre'})
        }


        const datos ={
            nombre,
            descripcion
        }

        const tipo = new Tipo(datos)

        await tipo.save()

        return res.status(201).json(tipo)

    } catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

    
};

/**Obtener los Tipo */

const obtenerTipo = async (req = request,res = response) => {
    try {
        const tipos = await Tipo.find()
        return res.status(200).json(tipos)
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

const actualizarTipo = async (req = request, res = response) => {
    const tipoId = req.params.id
    const { nombre, descripcion } = req.body

    try {
        const tipo = await Tipo.findById(tipoId)

        if (!tipo){
            return res.status(404).json({ msj: 'Tipo no encontrado '})
        }
         tipo.nombre = nombre
         tipo.descripcion = descripcion

         await tipo.save();
         return res.status(200).json(tipo)
    } catch (error){
        console.log(error);
        return res.status(500).json({ msj: error})
    }
}

const eliminarTipo = async (req = request, res = response) => {
    const tipoId = req.params.id

    try{
        const tipo = await Tipo.findByIdAndRemove(tipoId)
        if(!tipo){
            return res.status(404).json({ msj: 'Tipo no encontrado'})
        }
        

        return res.status(204).json()
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

module.exports={
    crearTipo,
    obtenerTipo,
    actualizarTipo,
    eliminarTipo
}