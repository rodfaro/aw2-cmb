// ExpressJS ---> framework de NodeJS para crear aplicaciones web y APIs de manera sencilla y rápida
import express from 'express';

const PUERTO = 3000

const app = express(); // esta funcion devuelve un objeto que representa nuestra aplicación web ya configurada

/*
app.get sirve para definir una ruta y un controlador para manejar las solicitudes GET a esa ruta. 
En este caso, estamos definiendo la ruta raíz '/' y un controlador que se 
ejecutará cuando se reciba una solicitud GET a esa ruta.
*/

//Solo se ejecuta el callback cuando se hace una solicitud GET a la ruta '/'
app.get('/', (req, res) =>{
    res.status(200)
    res.contentType('text/html') // res.contentType se utiliza para establecer el tipo de contenido de la respuesta. En este caso, estamos estableciendo el tipo de contenido como 'text/plain', lo que indica que la respuesta será texto sin formato.
    res.send('<h1>Hola, esto es un h1 en html</h1>') // res.send se utiliza para enviar una respuesta al cliente. En este caso, estamos enviando el texto 'Hola Mundo' como respuesta.
})

app.get('/usuarios', (req, res) =>{
    res.send('usuarios')
})

app.get('/tomi', (req, res) => {
    res.send('Hola Tomi')
    res.redirect('https://google.com') // res.redirect se utiliza para redirigir al cliente a otra ruta.
});

app.post('/usuarios', (req, res) =>{
    res.status(201) 
    res.send('esto es un metodo POST')
})

//app.listen sirve para iniciar el servidor y escuchar las solicitudes entrantes en el puerto especificado.
app.listen(PUERTO, () =>{
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`)
})