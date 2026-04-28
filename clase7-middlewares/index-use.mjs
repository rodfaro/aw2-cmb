import express from 'express'

const puerto = 3000
const app = express()

function middleware1(req, res, next){
    console.log('middleware1')
    next();
}

//el '/' funciona como prefijo, entonces el middleware se ejecuta para todas las 
// rutas que empiecen con '/', es decir, para todas las rutas en este caso.
app.use('/', middleware1)


app.get('/', (req, res) =>{
    console.log('respuesta final')
    res.send('hola')
})

app.get('/saludo', (req, res) =>{
    console.log('respuesta final')
    res.send('hola')
})

app.listen(puerto, ()=> {
    console.log(`Servidor escuchando en http://localhost:${puerto}`)
})
