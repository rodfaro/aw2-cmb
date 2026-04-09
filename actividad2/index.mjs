import { escribirDatos, leerDatos } from './funcionesEscrituraLectura.mjs';
import { obtenerDatosAPI } from './funcionesFetch.mjs'
import {procesarDatos} from './funcionesEscrituraLectura.mjs';

try{
    //guarda en variable los datos de la API convertidos ya a obj JSON
    const datosAPI = await obtenerDatosAPI()

    //guarda en una variable el nuevo arreglo del map con las columnas filtradas
    const DatosApiFiltrados = procesarDatos(datosAPI);

    //convierte el arreglo de objetos del map a cadena de texto en formato json y lo escribe en el sistema
    escribirDatos(DatosApiFiltrados)

    //lee los datos del archivo .json local y imprime en consola
    leerDatos();
}
catch(e){
    console.log(e)
}

