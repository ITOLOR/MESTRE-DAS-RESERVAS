const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { Body } = req.body;

    let responseMessage = 'Olá! Escolha uma opção:\n1. Ver categorias\n2. Ver carrinho\n3. Finalizar pedido';

    if (Body.trim() === '1') {
        responseMessage = 'Você escolheu categorias. [Frutas, Verduras, Bebidas]';
    } else if (Body.trim() === '2') {
        responseMessage = 'Seu carrinho está vazio.';
    } else if (Body.trim() === '3') {
        responseMessage = 'Por favor, envie seu endereço.';
    }

    const twilio = require('twilio');
    const twiml = new twilio.twiml.MessagingResponse();
    twiml.message(responseMessage);

    res.type('text/xml').send(twiml.toString());
});

module.exports = router;
