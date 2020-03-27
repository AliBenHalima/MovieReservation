const Movie = require('../Model/Movie');




module.exports.upload = (req, res, next) => {
    console.log(req.body);
    if (true) {

        console.log("upload");
        console.log(req.file);
        Movie.findOne({ name: req.body.name })
            .then(movie => {
                if (movie) {
                    console.log('movie_exist');
                }
                else {
                    console.log("enter" + req.body);
                    const movie = new Movie({
                        name: req.body.name,
                        type: req.body.type,
                        desc: req.body.desc,
                        file: req.body.file,
                        duration: req.body.duration,
                        rating: 0,
                        prodName: req.body.prodName,
                        category: req.body.cat
                    });

                    console.log("movie =" + movie);

                    movie.save((err, movie) => {
                        if (movie) {
                            console.log("ok");
                        }
                        else
                            console.log(err);
                    });
                };
            })
    }
};
