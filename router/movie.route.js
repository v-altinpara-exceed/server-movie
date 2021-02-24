const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const movie_controller = require('../controllers/movie.controller');

// a simple test url to check that all of our files are communicating correctly.
router.post('/create', movie_controller.movie_create);
router.get('/usersList', movie_controller.movie_usersList); 
router.get('/:id', movie_controller.movie_details);
router.put('/:id/update', movie_controller.movie_update);
router.delete('/:id/delete', movie_controller.movie_delete);

module.exports = router;
