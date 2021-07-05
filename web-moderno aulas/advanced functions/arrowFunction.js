let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return está implicito

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' //o return deve ser obrigatoriamente colocado nessa forma.
ola = _ => 'Olá' //Assim tbm é valido, o parametro é real, mas pode ignora-lo.

console.log(ola())



