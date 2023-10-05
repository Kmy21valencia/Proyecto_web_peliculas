const { Router} = require('express')
const{crearMedia,obtenerMedia,actualizarMedia,eliminarMedia} = require('../controllers/media')

const router = Router()


/**Crear media */

router.post('/', crearMedia);

/**Obtener media */

router.get('/',obtenerMedia);

/**Actualizar media */

router.put('/:id',actualizarMedia);

/**Eliminar media */
router.delete('/:id',eliminarMedia)

module.exports = router