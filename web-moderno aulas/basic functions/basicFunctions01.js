//função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)

}

imprimirSoma(3, 4)
imprimirSoma(2)
imprimirSoma(2, 10, 15, 11)
imprimirSoma()

//função com retorno

function soma(a, b = 1) {
    return a + b 

}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())