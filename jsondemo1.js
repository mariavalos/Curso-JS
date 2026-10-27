// se requiere tenga las claves:
// 2 cadena 
//2 numerico (entero, decimal)
// 1 null
//1 logica (false/true)
//1 array (cadenas)
// 1 array (objetos)
//1 objeto (arrays)

//10 MINUTOS

const mascota = {
    nombre: "Chiquito",
    descripcion:"es de raza shih tzu , es de color beige y es muy dormilon",
    edad:4,
    cantidadvacunas:5,
    pesokg:5.5,
    lugarNacimiento: null,
    comemucho:false
}
  const historialClinico = {
    apellidos: "Quintana Meneses",
    nombres: "Nayeli Lucero",
    telefonos: ["936062111", "933740238"],
    parientecercano : {
      nombres: "Maria Esther",
      apellidos:"Avalos Pachas de Meneses",
      telefono:"056261495",
      direccion:"Psj los jazmines 110",
      referencia: null
    },
    familiarescasa:[
      { abuelo: "William Meneses S.", parte:"madre" },
      { abuela: "Maria Avalos Pachas de Meneses", parte:"madre" },
      { hermana: "Heydi Quintana Meneses", parte:"madre" },
    ],
    DTimportantes: { 
    DTmedicos:  ["tipo de sangre O+","alergias ninguna"],
    accidentes: ["ningun accidente grave"]
  }
}
//¿