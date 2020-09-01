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

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(israel)
imprimirNombreEnMayusculas(kim)
imprimirNombreEnMayusculas({ nombre: "Renata" })
// imprimirNombreEnMayusculas()
imprimirNombreEnMayusculas({ apellido: "Castro" })