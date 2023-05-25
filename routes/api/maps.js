const express = require('express');
const router = express.Router();
const mapsCtrl = require('../../controllers/api/map');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST map
router.post('/', mapsCtrl.create);
router.get('/', mapsCtrl.index);
router.get('/:id', mapsCtrl.getOne);
router.get('/dashboard', mapsCtrl.getUserMaps);

module.exports = router;