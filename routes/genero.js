const { Router} = require('express')
const{crearGenero,obtenerGenero,actualizarGenero,eliminarGenero} = require('../controllers/genero')

const router = Router()


/**Crear genero */

router.post('/', crearGenero);

/**Obtener Genero */

router.get('/',obtenerGenero);

/**Actualizar Genero */

router.put('/:id',actualizarGenero);

/**Eliminar Genero */
router.delete('/:id',eliminarGenero)

module.exports = router