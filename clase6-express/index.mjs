import express, { urlencoded } from 'express';

const productos = [
        {
            id: 1,
            nombre: "remera",
            precio: 20000,
        },
        {
            id: 2,
            nombre: "pantalon",
            precio: 40000,
        },
        {
            id: 3,
            nombre: "zapatillas",
            precio: 120000,
        }
    ]

const PUERTO = 3000
const app = express();

//avisamos a Express --> Chequear datos del cliente ---> cuerpo (configuracion)
//revisar q el cuerpo tenga datos basicamente


app.use(urlencoded({extended:true}))
app.use(express.json())


app.get('/', (req, res) =>{
    res.send('Estas en la raiz')
})

app.get('/usuarios', (req, res) =>{

    //objeto js se puede manipular
    const objJS = {
        materia: "AW2"
    }

    res.status(200)
    //cadena de texto q seria como un objeto js

    //res.set('content-type', 'application/json')
    //res.send('{"nombre:" "rodri"}')

    //opcion mas corta
    res.json(objJS)
})

app.get('/productos', (req, res) => {
    res.json(productos)
})

app.get('/productos/:id_producto', (req, res) => {
    //para filtrar por ID
    const id = parseInt(req.params.id_producto)
    console.log(id)
    //filter
    const productosFiltrado = productos.filter((producto) => producto.id === id)
    
    if (productosFiltrado.length > 0){
        res.json(productosFiltrado)
    }else{
        res.json({"mensaje": "Producto no encontrado con ese ID "})
    }
})


//Enviar datos al servidor (metodo POST)
app.post('/productos', (req, res) => {

    //verificamos el cuerpo del mensaje
    //solo funciona con el urlencoded en true
    const datosCliente = req.body
    //console.log(datosCliente)

    productos.push(datosCliente)
    res.status(201).json({mensaje: "producto dado de alta"})
})

app.listen(PUERTO, ()=>{    
    console.log(`servidor escuchando en el puerto: ${PUERTO}`)
})