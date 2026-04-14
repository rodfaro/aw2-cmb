
import http from 'node:http';
import fps from 'node:fs/promises';
import path from 'node:path';

//creamos una instancia de servidor
const app = http.createServer(async (peticion, respuesta) => {
    console.log(peticion) //---> lo que envia el cliente(navegador) al servidor

    //console.log(peticion.method)

    if (peticion.method === 'GET') {
        //si la url es /usuarios
        if (peticion.url === '/usuarios') {
            //el end va al ultimo, antes se envia todo en la peticion y dps al ultimo el end con los datos.
            return respuesta.end(`
                ruta /usuarios
            `) //---> lo que envia el servidor al cliente(navegador) para cerrar la conexion, si no se cierra la conexion el navegador se queda esperando una respuesta y no muestra nada
        }

        //si la url es / (raiz)
        if (peticion.url === '/') {
            return respuesta.end(`
                ruta /
            `)
        }
    }
    if (peticion.method === 'POST') {
        if (peticion.url === '/') {
            const ruta = path.join('./contenido.txt')
            await fps.writeFile(ruta, 'contenido de prueba falso')
            //se crea el archivo al hacer el post
            return respuesta.end(`
                recurso creado
                `)
        }
    }

    //cualquier otra ruta que no existe q devuelva un mensaje de error
    //en caso de fallback
    respuesta.statusCode = 404 // cambia el codigo de estado a 404 q significa que no encuentra la ruta
    return respuesta.end('ruta no encontrada')
    
})

//el puerto 443 y 80 son los puertos por defecto para http y https y no se muestran en la url
//puerto >= 3000 son puertos comunes para desarrollo/pruebas y no estan reservados

//abrimos puerto
// el listen es un metodo que se encarga de escuchar las peticiones que llegan al servidor, el primer parametro es el puerto y el segundo parametro es una funcion que se ejecuta cuando el servidor esta listo para recibir peticiones

app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`)
})
