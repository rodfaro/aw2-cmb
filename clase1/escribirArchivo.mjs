//Import no nombrada
import fsp from 'node:fs/promises'
import path from 'node:path'

try{
    const ruta = path.join('./texto.txt')

    //esribimos un arcihvo
    await fsp.writeFile(ruta, 'Nuevo contenido 2')

}catch(e){
    console.log(e)
}