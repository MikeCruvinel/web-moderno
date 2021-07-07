//Aqui ja temos a instancia de um objeto
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '1...',
    preco: 245
}

//Conforme for criando objetos semelhantes, pode haver uma super-lotação de objetos iguais.
//Para isso, podemos utilizar a function factory.

//Factory simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Cruvinel'
    }
}
//No caso, não é necessário o uso do new, pois sempre que chamar a função ela irá criar o objeto.
console.log(criarPessoa())

