import express from 'express'
import path from 'node:path'

const puerto = 3000
const app = express()


//express.static sirve para servir archivos estaticos, como html, css, js, imagenes, etc.
//hay que usar el modulo path
app.use(express.static(path.join('front')))

app.listen(puerto, ()=> {
    console.log(`Servidor escuchando en http://localhost:${puerto}`)
})
