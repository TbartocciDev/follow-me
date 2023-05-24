const express = require('express');
const router = express.Router();
const mapsCtrl = require('../../controllers/api/map');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const map = require('../../models/map');

// All paths start with '/api/users'

// POST map
router.post('/', mapsCtrl.create);
router.get('/', mapsCtrl.index);
router.get('/dashboard', mapsCtrl.getUserMaps);

module.exports = router;