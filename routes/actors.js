const express = require('express');
const router = express.Router();
const actorsController = require ('../contollers/actorsController');

router.get('/', actorsController.getAll);

router.get('/:id', actorsController.getById);

router.post('/create', actorsController.create);

module.exports = router ; 