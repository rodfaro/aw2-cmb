async function obtenerDatosAPI(){
    try{
        const datosFetch = await fetch("https://api.escuelajs.co/api/v1/users")
        const resultados = await datosFetch.json();

        return resultados;
    }
    catch(e){
        console.log(e)
    }
    
}

export {obtenerDatosAPI}
