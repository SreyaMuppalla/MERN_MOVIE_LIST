const express = require('express');
const router = express.Router();

// Load Movie model
const Movie = require('../../models/Movie');

// @route GET api/movies/test
// @description tests movies route
// @access Public
router.get('/test', (req, res) => res.send('movie route testing!'));

// @route GET api/movies
// @description Get all movies
// @access Public
router.get('/', (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ nomoviesfound: 'No Movies found' }));
});

// @route GET api/movies/:id
// @description Get single movie by id
// @access Public
router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json({ nomoviefound: 'No Movie found' }));
});

// @route GET api/movies
// @description add/save movie
// @access Public
router.post('/', (req, res) => {
  Movie.create(req.body)
    .then(movie => res.json({ msg: 'Movie added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this movie' }));
});

// @route GET api/movies/:id
// @description Update movie
// @access Public
router.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(movie => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/movies/:id
// @description Delete movie by id
// @access Public
router.delete('/:id', (req, res) => {
  Movie.findByIdAndRemove(req.params.id, req.body)
    .then(movie => res.json({ mgs: 'Movie entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a movie' }));
});

module.exports = router;
