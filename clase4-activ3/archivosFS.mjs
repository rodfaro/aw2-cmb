import fsp from 'node:fs/promises'
import path from 'node:path'



async function escribirDatos(datos){
    try{
        const ruta = path.join('./archivo.json')

        const datosString = JSON.stringify(datos, null, 4)
        await fsp.writeFile(ruta, datosString)
    }
    catch(e){
        console.error(e)
    }
}

async function leerDatos(){
    try{
        const ruta = path.join('./archivo.json')
        const lectura = await fsp.readFile(ruta, 'utf-8')

        //console.log(lectura)
        return lectura
    }
    catch(e){
        console.error(e)
    }
}


export {escribirDatos}
export {leerDatos}