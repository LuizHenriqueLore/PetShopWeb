'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/service-controller');

router.get('/', controller.get);
router.get('/id/:id', controller.getById);
router.get('/title/:title', controller.getByTitle);
router.post('/', controller.post);
router.put('/id/:id', controller.put);
router.delete('/id/:id', controller.delete);

module.exports = router;