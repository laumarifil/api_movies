const express = require('express');
const router = express.Router();
const moviesController = require ('../contollers/moviesController');

router.get('/', moviesController.getAll);

router.get('/:id', moviesController.getById);

router.post('/create', moviesController.create);

module.exports = router ; 