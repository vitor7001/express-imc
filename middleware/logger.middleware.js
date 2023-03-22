function logger(req, res, next) {
    
    console.log("LOGGER FUNCIONANDO ...")
    next()
    console.log("LOGGER FINALIZANDO")

}


module.exports = logger