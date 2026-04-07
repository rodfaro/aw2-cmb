import fsp from 'node:fs/promises'
import path from 'node:path'
import { deserialize, serialize } from 'node:v8';


const ruta = path.join('./datosAPI.json')

try{
    //Traemos los datos de la api con fetch y devuelve un obj Response
    const fetchResultado = await fetch('https://69d5127cd396bd74235e4ee6.mockapi.io/datos')

    //Convierte a formato json y los convierte en una arreglo/obj
    const resultado = await fetchResultado.json(); // A arreglo

    //Convertimos un arreglo u objeto a JSON
    const datos = JSON.stringify(resultado, null, 4)

    //Escribe el archivo
    
    await fsp.writeFile(ruta, datos)
    console.log(resultado)
}
catch (e){
    console.log(e)
}