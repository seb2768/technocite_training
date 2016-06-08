function Erreur() {
    function middleware(req, res, next) {
        let err = new Error('Not Found');
        err.status = 404;
        res.status(404);
        res.render('404', {
            err
        });

    }
    return middleware;
}
module.exports = Erreur;