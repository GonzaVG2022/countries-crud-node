const { getAll, create, getOne, remove, update } = require('../controllers/continent.controllers');
const express = require('express');

const continentRouter = express.Router();

continentRouter.route('/')
    .get(getAll)
    .post(create);

    continentRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = continentRouter;