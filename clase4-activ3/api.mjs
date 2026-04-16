async function obtenerDatosAPI(){
    try{
        const datos = await fetch("https://api.escuelajs.co/api/v1/users")
        const datosJSON = await datos.json();

        return datosJSON
    }
    catch(e){
        console.error(e)
    }
    
}


export {obtenerDatosAPI}
