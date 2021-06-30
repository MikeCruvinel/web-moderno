var funcs = []

//Como var não tem escopo de função, ele irá sempre imprimir o mesmo valor.
//Se usasse o LET, isso não aconteceria.
for(var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()