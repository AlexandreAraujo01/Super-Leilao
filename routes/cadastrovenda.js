var express = require('express');
var router = express.Router();

/* GET cadastro listing. */
router.get('/', function (req, res, next) {
  res.render('cadastro', { title: 'Leilão Holandes - Cadastrar venda' });
});

router.post('/cadastrar', async function (req, res, next) {
  let teste = req.body
  console.log(teste)
  // res.render('cadastro', { title: 'Leilão Holandes - Cadastrar venda' });
});

module.exports = router;
