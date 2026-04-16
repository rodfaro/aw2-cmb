import http from 'node:http'
import { obtenerDatosAPI } from "./api.mjs";
import { escribirDatos } from "./archivosFS.mjs";
import { leerDatos } from './archivosFS.mjs';

//falta filtrar los usuarios y ver error/////////////

try{
    //datos api
    const datos = await obtenerDatosAPI();
    const puerto = 3000

    //obtener los usuarios  con  id < 10 y pasarlos a stringify
    const datosFiltrados = datos.filter((usuario) => usuario.id < 10)
    const usuariosFiltrados = JSON.stringify(datosFiltrados, null, 4)

    //escribir datos api y guardar local
    await escribirDatos(datos)
    
    //leer datos del archivo y se guarda en una variable const
    const datosUsuarios = await leerDatos();

    

    //servidor
    const app = http.createServer((req, res) =>{
        if(req.method === 'GET'){
            if(req.url === '/usuarios'){
                res.statusCode = 200
                res.end(datosUsuarios)
            }
            else if (req.url === '/usuarios/filtrados'){
                res.statusCode = 200
                res.end(usuariosFiltrados) //en el res.end tiene que estar parseado a cadena. NO ACEPTA JSON
            }
            else{
                res.statusCode = 404
                res.end('Recurso no encontrado')
            }
        }
    })

    app.listen(puerto, ()=>{
        console.log(`servidor escuchando en el puerto: ${puerto}`)
    })
    
}
catch(e){
    console.error(e)
}
    