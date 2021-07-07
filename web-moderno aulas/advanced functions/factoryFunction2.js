//Aqui estamos criando uma função factory comum, passando parametros para ela e retornando os mesmos
//como atributos do objeto.
function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1 // Note que o desconto está fixo, poderia deixa-lo fixo passando-o como parametro tb
    }
}

console.log(criarProduto('notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))