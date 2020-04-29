const Movie = require('../Model/movie');

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
	Movie.deleteOne({ _id: req.params.id }, function(err, movie) {
		if (err) {
			res.send(err);
		} else {
			res.send(movie);
		}
	});
};

module.exports.upload = (req, res, next) => {
	//console.log(req.body);
	if (true) {
		//console.log("upload");
		//console.log(req.file);
		Movie.findOne({ name: req.body.name }).then((movie) => {
			if (movie) {
				console.log('movie_exist');
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
					creator: req.userData.userId
				});

				//  console.log("movie =" + movie);

				movie.save((err, movie) => {
					if (movie) {
						//  console.log("ok");
					} else console.log(err);
				});
			}
		});
	}
};
