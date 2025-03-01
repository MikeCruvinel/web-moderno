//Armazenando função dentro de uma variável 

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implícito com função arrow

const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)

imprimir2(3)