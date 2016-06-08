let mongoose = require('mongoose');
let validate = require('mongoose-validator');

let stringValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];


let restoModel = function() {

    let schema = mongoose.Schema({
        name: {
            type: String,
            required: true,
            validate: stringValidator
        },
        address: {
            street: {
                type: String,
                required: true
            },
            number: {
                type: Number,
                required: true
            },
            zip: {
                type: Number,
                required: true
            },
            town: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        },
        cookType: Array,
        quote: Number,
        comments: Array,
        pictures: mongoose.Schema.Types.Mixed,
        url: String,
        createdAt: {
            required: true,
            type: Date
        },
        updateAt: {
            type: Date,
            default: Date.now
        }


    });
    schema.pre('save', function(next) {
        var self = this;
        this.constructor.find({
            'address.street': self.address.street,
            'address.number': self.address.number,
            'address.zip': self.address.zip,
            'address.town': self.address.town,
            'address.country': self.address.country
        }, function(err, docs) {
            if (!docs.length) {
                next();
            } else {
                next(new Error("Restaurants exists!"));
            }
        });
    });

    return mongoose.model('resto', schema, 'restos');

};

module.exports = new restoModel();