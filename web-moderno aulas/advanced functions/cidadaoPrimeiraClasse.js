// função em JS é First-Class Object (Citizens)
// Higher-Order

function fun1() {

}

// Armazenar em uma variavel

const fun2 = function () {

}

// Armazenar em um Array

const array = [function (a, b){return a + b }, fun1, fun2]

console.log(array[0] (2, 3))

// Armazenar em um atributo de objeto

const obj = {}

obj.falar = function() {return 'opa'}

console.log(obj.falar())

// Passar função como parametro para outra função

function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar/conter uma uma função

function soma(a, b) {
    return function (c) {
        return function (d) {
            console.log(a + b + c + d)
        }
    }
}

soma(1, 2)(3)(1)

