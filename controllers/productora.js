const Productora = require('../models/productora')
const { request, response} = require('express')

/** Crear Productora */

const crearProductora = async(req = request,res = response) => {
    console.log(req.body)
    const{ nombre,descripcion,estado,slogan} = req.body

    try{

        const productoraBD = await Productora.findOne({ nombre})

        if(productoraBD){
            return res.status(400).json({msj:'ya existe nombre'})
        }


        const datos ={
            nombre,
            descripcion,
            estado,
            slogan
        }

        const productora = new Productora(datos)

        await productora.save()

        return res.status(201).json(productora)

    } catch(error){
        console.log(error)
        return res.status(500).json({msj:error})
    }

    
};

/**Obtener los Productora */

const obtenerProductora = async (req = request,res = response) => {
    try {
        const productoras = await Productora.find()
        return res.status(200).json(productoras)
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

const actualizarProductora = async (req = request, res = response) => {
    const productoraId = req.params.id
    const { nombre,descripcion,estado,slogan } = req.body

    try {
        const productora = await Productora.findById(productoraId)

        if (!productora){
            return res.status(404).json({ msj: 'productora no encontrado '})
        }
         prodcutora.nombre = nombre
         productora.descripcion = descripcion
         productora.slogan = slogan
         prodcutora.estado = estado

         await productora.save();
         return res.status(200).json(productora)
    } catch (error){
        console.log(error);
        return res.status(500).json({ msj: error})
    }
}

const eliminarProductora = async (req = request, res = response) => {
    const productoraId = req.params.id

    try{
        const productora = await Productora.findByIdAndRemove(productoraId)
        if(!productora){
            return res.status(404).json({ msj: 'Productora no encontrado'})
        }
        

        return res.status(204).json()
    }catch (error){
        console.log(error)
        return res.status(500).json({ msj: error})
    }
}

module.exports={
    crearProductora,
    obtenerProductora,
    actualizarProductora,
    eliminarProductora
}