const mongoose = require ('mongoose')


const mongoConn = async () => {
try{
    await mongoose.connect('mongodb+srv://camivaar:2219kamilo@invenariocluster.lco9pnm.mongodb.net/',{
        
    })
    console.log('Conexion ok')
    } catch (e) {
        console.log('Error de conexion', e)
        throw new Error('Error de conexion')
    }
    

}
module.exports = {mongoConn}