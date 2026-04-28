import express from 'express'

const puerto = 3000
const app = express()
/*
    MIDDLEWARES 
son funciones que se ejecutan antes de llegar a la ruta, pueden modificar 
la req y res, y pueden decidir si se ejecuta la siguiente función o no, 
dependiendo de la lógica que tengan dentro.
*/

//En este caso si el usuario existe sigue avanzando, sino se detiene y no avanza.
function middleware1(req, res, next){
    console.log('se ejecuta el middleware1')
    const usuarioExiste = true
    
    if(usuarioExiste)
    {
        console.log('el usuario existe')
        next();
    }
    else{
        console.log('el usuario no existe')
        res.send('usuario no puede pasar')
    }
    
    // el next es para que se ejecute el siguiente middleware o la ruta, 
    // si no se pone el next, el servidor se queda esperando y no responde
}

app.get('/', middleware1, (req, res) =>{
    console.log('respuesta final')
    res.send('hola')
})

app.get('/:string', (req, res) =>{
    const cadena = req.params.string

    /*  
    Estrucutra de los params
        req.params = {
            string: ''
        }
    */
    console.log(cadena)
    res.send('hola')
})

app.listen(puerto, ()=> {
    console.log(`Servidor escuchando en http://localhost:${puerto}`)
})
