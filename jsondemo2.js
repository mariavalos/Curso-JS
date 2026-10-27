//Paso 1 : URL (endpoint)
const API_URL = `https://dragonball-api.com/api/characters/${id}`

//PASO 2: Funcion asincrona (tiempos distintos/diferidos) - Latencia
async function obtenerPersonaje(id){


  // PASO 3: APP es propensa a errores...
  try{

    //PASO 4 : realizar la peticion
    const respuesta = await fetch(API_URL)

    //PASO 5:¿existe una respuesta?
    if (!respuesta.ok){
      throw new Error(`No hay comunicacion con el servidor`)// ¡STOP!
    }

    //PASO 6: si llegamos hasta aqui, entonces hemos recibido los datos (JSON)
    // JSON (cadena) >OBJECT JS
    const datos = await respuesta.json()
    //PASO 7:MOstar todo el json
    //console.log(datos)

    //mostrar solo el nombre de las trasformaciones
    const trasformaciones = datos.trasformaciones
    trasformaciones.forEach(trasformacion => {
      console.log(trasformacion.name)
    });

  }catch(e){
    console.error(`No se pudo concretar la operación: ${e}`)
  }
}
// test
//debemos pasar el id del personaje
obtenerPersonaje(3)