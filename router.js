const express = require("express");
const router = express.Router();
const controller = require('./controller');

module.exports = router;

router.post('/players', controller.players);

router.get('/getcards', controller.getCards)