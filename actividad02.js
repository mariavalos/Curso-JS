//crear un objeto que almacena datos de una mascota
//desestructurar utilizando un minimo de 4 vareables
//mostar en consola

const mascota = {
  nombre : "Chiquito",
  edad : "4 años" ,
  skills : "dormir",
  peso_kg : 5,
  raza : "shih tzu",
  color: "beige"
}

const {nombre,edad, skills,raza} = mascota

console.log(nombre,edad, skills,raza)