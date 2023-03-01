const express = require('express');
const cityRouter = require('./city.router');
const continentRouter = require('./continent.router');
const countryRouter = require('./country.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/countries", countryRouter)
router.use("/cities", cityRouter )
router.use("/continents", continentRouter )

module.exports = router;