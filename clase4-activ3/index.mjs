import http from 'node:http'
import { obtenerDatosAPI } from "./api.mjs";
import { escribirDatos } from "./archivosFS.mjs";
import { leerDatos } from './archivosFS.mjs';

//falta filtrar los usuarios y ver error/////////////

try{
    //datos api
    const datos = await obtenerDatosAPI();
    const puerto = 3000

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
            else if (req.url === './usuarios/filtrados'){

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
    throw new Error(e)
}
    