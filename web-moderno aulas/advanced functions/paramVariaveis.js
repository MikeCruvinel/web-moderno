//Podemos capturar os parametros de uma função que não foi "declarado" através do arguments
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log('a', 'b', 'c')

//Essa é uma forma OLD, tendo melhores formas de realizar isso.

