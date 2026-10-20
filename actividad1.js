//almacenar un texto en una variable y luego mostrarlo en un orden inverso en la consola
//ejemplo : "senati -> "itanes"

const textoOriginal = "AMOR"
const longitud = textoOriginal.length 

for (let i = longitud - 1; i >= 0; i--){
  console.log(textoOriginal.substring(i,i + 1))
  console.log('',textoOriginal.trim())
}


//crear una variable donde almacene una direccion de correo electronico
//verificar si el correo es valido cuando tiene un solo @
//ejemplo:
//jhon@gmail.com [correcto]
//luis@gmail@.com [incorrecto]
//mariagmail.com [incorrecto]

