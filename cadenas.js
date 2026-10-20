//cadenas = conjunto de caracteres
//1 solo caracter = CHAR

// existen 3 formas para crear cadenas JS:
const tradicional = "Hola soy un texto"
const simples = 'un gusto conocerte'
const mensaje = `Soy un texto muy especial` //Backticks

//Backticks permite multilineas + inyeccion
const nombre = 'Jhon'
const carrera = 'programador'

const historia = `
Esta es la historia de ${nombre}
un ${carrera}
que solo queria Vibecodear
`
console.log(historia)

//Propiedades
const longitud = carrera.length // total de caracteres
console.log(longitud)

const amigos = "Luis , Miguel, Juan, Jose, Raul, Ernesto"

//metodos
console.log('concat:', carrera.concat(nombre))//concatena5r (unir)
console.log('repeat', carrera.repeat(3))//repetir
console.log('replace', carrera.replace('a','@'))//remplazar primero
console.log('uppercase', carrera.toUpperCase())//mayuscula
console.log('lowercase', carrera.toLowerCase())//minuscula
console.log('replace all:', carrera.replaceAll('a','@'))//reemplazar todos
console.log('split:', amigos.split(','))//devuelve un array
console.log('trim:', carrera.trim())//quita espacios vacios extremos

//extraer los  primeros caracteres
console.log('3 primeros:', carrera.substring(0,3))  //0=index (inicio), 3 = total
//extraer "grama" de programador
console.log('caracteres internos:',carrera.substring(3,8))