const express = require('express');
const router = express.Router();
const items = require('./../app/items');
const currency = require('./../app/currency');


router.post('/payment', function (req, res) {
    console.log(req.body);
    if (currency.checkCurrency(req.body.currency)) {
        const totalPayment = currency.getTotal(req.body.dollar, req.body.cents);
        const allowedItems = items.getAllowedItems(totalPayment);
        console.log('length', Object.keys(allowedItems).length);
        if (Object.keys(allowedItems).length > 0) {
            res.status(200).send({
                code: 200,
                items: allowedItems
            });
        } else {
            res.status(400).send({
                code: 400,
                error: 'Invalid amount'
            });
        }
    } else {
        res.status(400).send({
            code: 400,
            error: 'Invalid currency'
        });
    }
});


module.exports = router;