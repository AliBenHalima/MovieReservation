const Movie = require("../Model/movie");
const fs = require("fs");

module.exports.getMovies = (req, res, next) => {
  Movie.find().then((movies) => {
    res.json(movies);
  });
};

module.exports.getMoviesByUser = (req, res, next) => {
  Movie.find({ creator: req.userData.userId }).then((movies) => {
    res.json(movies);
  });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.id).then((movie) => {
    fs.unlink("../src/assets/img/covers/" + movie.file, (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
  Movie.deleteOne({ _id: req.params.id }, function (err, movie) {
    if (err) {
      res.send(err);
    } else {
      res.send(movie);
    }
  });
};

module.exports.updateMovie = (req, res, next) => {
  console.log(req.file);
  Movie.findOne({ _id: req.body.id }).then((movie) => {
    if (movie) {
      if (req.body.name) movie.name = req.body.name;
      if (req.body.cat) movie.category = req.body.cat;
      if (req.body.desc) movie.desc = req.body.desc;
      if (req.body.duration) movie.duration = req.body.duration;
      if (req.body.prodName) movie.prodName = req.body.prodName;
      if (req.body.type) movie.type = req.body.type;
      if (req.file.filename) {
        fs.unlink("../src/assets/img/covers/" + movie.file, (err) => {
          if (err) {
            console.error(err);
          }
        });
        movie.file = req.file.filename;
      }
      movie.save();
    }
  });
};

module.exports.upload = (req, res, next) => {
  Movie.findOne({ name: req.body.name }).then((movie) => {
    if (movie) {
      console.log("movie_exist");
    } else {
      console.log(req.userData.userId);

      // console.log("enter" + req.body);
      const movie = new Movie({
        name: req.body.name,
        type: req.body.type,
        desc: req.body.desc,
        file: req.file.filename,
        duration: req.body.duration,
        rating: 0,
        prodName: req.body.prodName,
        category: req.body.cat,
        creator: req.userData.userId,
      });

      //  console.log("movie =" + movie);

      movie.save((err, movie) => {
        if (movie) {
          //  console.log("ok");
        } else console.log(err);
      });
    }
  });
};
