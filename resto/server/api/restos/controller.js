let logger = require(`${process.cwd()}/server/utils/logger`);
let model = require('./model');

exports.get = function(req, res) {
    model.find()
        .then(function(docs) {
            res.json(docs);
        });
};


exports.post = function(req, res) {
    var resto = new model(req.body);
    resto.save(function(err) {
        let message = {
            message: 'Document saved'
        };
        if (err) {
            message = err.message;
        }
        res.json(message);

    });
};

exports.put = function(req, res) {
    var id = req.params.id;
    model.findByIdAndUpdate(id, req.body, function(err) {
        let message = {
            message: 'Document upated'
        };
        if (err) {
            message = err;
        }
        res.json(message);

    });
};

exports.delete = function(req, res) {
    var id = req.params.id;
    model.findByIdAndRemove(id, function(err) {
        if (err) logger.log(err);
        res.json({
            message: 'Document Deleted'
        });
    });
};