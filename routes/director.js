const { Router} = require('express')
const{crearDirector,obtenerDirector,actualizarDirector,EliminarDirector} = require('../controllers/director')

const router = Router()


/**Crear director */

router.post('/', crearDirector);

/**Obtener director */

router.get('/',obtenerDirector);

/**Actualizar director */

router.put('/:id',actualizarDirector);

/**Eliminar Director */

router.delete('/:id',EliminarDirector);


module.exports = router