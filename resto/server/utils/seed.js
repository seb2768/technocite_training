var Resto = require('../api/restos/model');

var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var restos = [{
    name: 'jade de chine',
    address: {
        street: "Rue d'Havré",
        number: 23,
        zip: 7000,
        town: "Mons",
        country: "Belgium"
    },
    cookTyme: ["asiatique", "Vientanienne"],
    comments: ["excellent", "superbe ambiance"],
    pictures: [{
        title: 'Nouvel an chinois',
        link: 'jade2016.jpg'
    }, {
        title: 'Nouvel an chinois',
        link: 'jade2015.jpg'
    }],
    url: 'http://www.jadechine.be',
    createdAt: Date.now()
}, {
    name: 'La bergerie',
    address: {
        street: "Rue des canadiens",
        number: 239,
        zip: 7020,
        town: "Hyon",
        country: "Belgium"
    },
    cookTyme: ["grecque", "farnçaise"],
    comments: ["pas bon", "moyen qualité"],
    pictures: [{
        title: 'Nouvel',
        link: 'bergerie2016.jpg'
    }, {
        title: 'Mes 40 ans',
        link: 'bergerie2015.jpg'
    }],
    url: 'http://www.jadechine.be',
    createdAt: Date.now()
}];



var createDoc = function(model, doc) {
    return new Promise(function(resolve, reject) {
        new model(doc).save(function(err, saved) {
            return err ? reject(err) : resolve(saved);
        });
    });
};

var cleanDB = function() {
    logger.log('... cleaning the DB');
    var cleanPromises = [Resto]
        .map(function(model) {
            return model.remove().exec();
        });
    return Promise.all(cleanPromises);
};

var createRestos = function(data) {

    var promises = restos.map(function(resto) {
        return createDoc(Resto, resto);
    });

    return Promise.all(promises)
        .then(function(restos) {
            return _.merge({
                restos: restos
            }, data || {});
        });
};

cleanDB()
    .then(createRestos)
    .then(logger.log.bind(logger))
    .catch(logger.log.bind(logger));