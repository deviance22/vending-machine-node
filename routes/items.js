const express = require('express');
const router = express.Router();
const items = require('./../app/items');


router.get('/', (req, res) => {
    res.send(items.getItems());
});


module.exports = router;