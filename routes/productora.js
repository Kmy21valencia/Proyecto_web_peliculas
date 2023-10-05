const { Router} = require('express')
const{crearProductora,obtenerProductora,actualizarProductora,eliminarProductora} = require('../controllers/productora')

const router = Router()


/**Crear Productora */

router.post('/', crearProductora);

/**Obtener Productora */

router.get('/',obtenerProductora);

/**Actualizar Productora */

router.put('/:id',actualizarProductora);

/**Eliminar Productora */
router.delete('/:id',eliminarProductora)

module.exports = router