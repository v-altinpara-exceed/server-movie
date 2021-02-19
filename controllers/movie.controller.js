const Movie = require('../models/movie.model');

exports.movie_create = function (req, res) {
  let movie = new Movie(
      {
        nameMovie: req.body.nameMovie,
        descriptionMovie: req.body.descriptionMovie,
        genreMovie: req.body.genreMovie,
        posterMovie: req.body.posterMovie,
      }
  );

  movie.save(function (err) {
      if (err) {  
          return next(err);
      }
      res.send('Movie Created successfully')
  })
};

exports.movie_usersList = function(req, res) {
  Movie.find({}, function(err, movies) {
    if (err) {  
      return next(err);
    }
    var userMap = {};

    movies.forEach(function(movie) {
      userMap[movie._id] = movie;
    });

    res.send(userMap);  
  });
};

exports.movie_details = function (req, res) {
  Movie.findById(req.params.id, function (err, movie) {
      if (err) return next(err);
      res.send(movie);
  });
};

exports.movie_update = function (req, res) {
  Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, movie) {
      if (err) return next(err);
      res.send('Movie udpated.');
  });
};

exports.movie_delete = function (req, res) {
  Movie.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};