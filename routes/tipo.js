const { Router} = require('express')
const{crearTipo,obtenerTipo,actualizarTipo,eliminarTipo} = require('../controllers/tipo')

const router = Router()


/**Crear Tipo */

router.post('/', crearTipo);

/**Obtener Tipo */

router.get('/',obtenerTipo);

/**Actualizar Tipo */

router.put('/:id',actualizarTipo);

/**Eliminar Tipo */
router.delete('/:id',eliminarTipo)

module.exports = router