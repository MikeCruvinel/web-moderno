/*this.name = 'enzo'

function sayMyName() {
    console.log(this.name);
}

sayMyName()

*/

//function.call(this, arg1, arg2) 
//call do ingles chamar
//retornar o this do contexto que eu enviar.

this.name = 'Camilla'

const dev = {
    name: 'Isabela'
}

function sayMyName () {
    console.log(this.name)
}

sayMyName()
sayMyName.call(this)
sayMyName.call(dev)
