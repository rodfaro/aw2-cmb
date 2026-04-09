import fs from 'node:fs/promises'
import path from 'node:path'

function procesarDatos(datosAPI){
    try{
        //esta funcion con un Map se encarga de filtrar solo las columnas necesarias creando un nuevo array con esas columnas
        const datosApiFiltrados = datosAPI.map(elemento => ({
            id: elemento.id,
            name: elemento.name,
            email: elemento.email
        }))

        return datosApiFiltrados
    }
    catch(e){
        console.log(e)
    }
    
}

async function escribirDatos(datosFiltrados){
    try{
        //une y normaliza la ruta
        const ruta = path.join('./datos-filtrados.json')
        //convierte los datos a cadena en formato json
        const datos = JSON.stringify(datosFiltrados, null, 3)

        //escribe el archivo
        await fs.writeFile(ruta, datos)
    }
    catch(e){
        console.log(e)
    }
}

async function leerDatos(){
    try{
        const ruta = path.join('./datos-filtrados.json')
        const datos = await fs.readFile(ruta, 'utf-8')

        console.log(datos)
    }
    catch(e){
        console.log(e)
    }
}

//exportar funciones de manera nombrada
export {procesarDatos}
export {escribirDatos}
export {leerDatos}