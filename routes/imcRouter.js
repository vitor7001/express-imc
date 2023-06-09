var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  
    const {height, weight} = req.body

    const imc = weight / (height * height)
    const situacao = verificacao(imc)
    
    res.send({weight: weight, height: height, imc: parseFloat(imc.toFixed(2)), imcDescription: situacao})
});

function verificacao (imc) {
    switch (true) {
      case imc <= 18.5:
        return 'magreza'
        break
      case imc <= 24.9:
        return 'normal'
        break
      case imc <= 30:
        return 'sobrepeso'
        break
      case imc > 30:
        return 'obesidade'
        break
      default:
        return 'falha no cálculo'
        break
    }
  }
  

module.exports = router;
