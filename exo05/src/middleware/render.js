function Render() {
    let async = require('async');
    let PagesModel = require(`${process.cwd()}/src/models/pages`);
    let cssMgt = require(`${process.cwd()}/src/utils/cssMgt`)();
    let jsMgt = require(`${process.cwd()}/src/utils/jsMgt`)();
    let model = PagesModel();
    let response, page;

    function middleware(req, res, next) {
        console.log('render');
        response = res;
        page = model.searchPageByUrl(req.url);
        if (page) {
            async.parallel([
                function(cb) {
                    cssMgt.render(page, cb);
                },
                function(cb) {
                    jsMgt.render(page, cb);
                }
            ], sendPageAfterRender);

        } else {
            next();
        }
    };

    function sendPageAfterRender() {
        console.log('renderPage');
        page.styles = `/styles/${page.name}.min.css`;
        page.scripts = `/scripts/${page.name}.min.js`;
        response.render(page.template, {
            layout: page.layout,
            model: page
        });
    }

    return middleware;
}

module.exports = Render;