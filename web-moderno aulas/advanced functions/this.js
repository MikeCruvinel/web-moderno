function teste() {
    let ae = console.log('oe')
    this.ae
}

teste()

// O this dentro de uma function está no contexto global, ou seja this === global.
// O this fora de uma function NÃO está dentro do contexto global, está no contexto module.exports, ou seja
// this === module.exports
// O this dentro de uma function pode ter o contexto alterado usando o .bind, ou seja this === obj.bind
// O this dentro de uma function Arrow, está no contexto module.exports no qual foi criado, ou seja this === module.exports.



