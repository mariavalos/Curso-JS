//estructuras = OBJETOS
//desestructuras = ABRIR OBJETOS
const persona = {
  apellidos : "Quintana Meneses",
  nombres : "Nayeli Lucero",
  edad : 19,
  skills : ["PHP","Java","Javascript","SQL","Python"]
}

//guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/


//desestructurar es separar datos provinientes de un objeto
//NOTA:  no es necesario recuperar toda la coleccion
//NOTA: la variables deben coincidir con las claves
const {apellidos, nombres,edad, skills} = persona

console.log(apellidos, nombres, edad, skills)