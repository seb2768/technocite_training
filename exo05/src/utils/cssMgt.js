let compressor = require('node-minify');
let fs = require('fs');

function CssMgt() {
    function render(page, cb) {
        let devMode = true;
        let file = `public/styles/${page.name}.min.css`;
        if (devMode) {
            new compressor.minify({
                type: 'clean-css',
                fileIn: page.css,
                fileOut: file,
                callback: function(err, min) {
                    console.log('Clean-css');
                    if (err) console.log(err);
                    cb();
                }
            });
        } else {
            fs.stat(file, function(err, stats) {
                if (err) console.log(err);
                if (stats) {
                    cb();
                } else {
                    new compressor.minify({
                        type: 'clean-css',
                        fileIn: page.css,
                        fileOut: file,
                        callback: function(err, min) {
                            console.log('Clean-css');
                            if (err) console.log(err);
                            cb();
                        }
                    });
                }
            });
        }
    }
    let that = {};
    that.render = render;
    return that;
}

module.exports = CssMgt;