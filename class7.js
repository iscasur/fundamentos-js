var israel = {
    nombre: 'Israel',
    apellido: 'Castro',
    edad: 30
}

var kim = {
    nombre: 'Kimberli',
    apellido: 'Apolonio',
    edad: 25
}

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    var { edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreEnMayusculas(israel)
imprimirNombreEnMayusculas(kim)
// imprimirNombreEnMayusculas({ nombre: "Renata" })
// imprimirNombreEnMayusculas({ apellido: "Castro" })