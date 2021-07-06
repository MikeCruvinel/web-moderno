const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()

//Quando chamamos a function exec, dentro dela a function minhaFuncao() também foi chamada, porem ela buscou a var valor dentro
//do contexto em que ela foi escrita.