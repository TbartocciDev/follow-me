const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/post');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', postsCtrl.create);
router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.getOne);

module.exports = router;