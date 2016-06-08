let mongoose = require('mongoose');
let db = function(){
    return {
        config: function(){
            mongoose.connect('mongodb://localhost/restos');
            let db = mongoose.connection;
            db.on('error', console.error.bind(console,'Connection Error'));
            db.once('open', function(){
                console.log('db connection open');
            })       
        }
    }
}
module.exports = db();