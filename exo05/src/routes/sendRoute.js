let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let config = require(`${process.cwd()}/src/config.js`)
router.post('/', function(req, res) {
    console.log(req.body);
    var transporter = nodemailer.createTransport(`smtps://${config.user}:${config.pwd}@mail.gandi.net`);
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"TRIPTYK 👥" <info@triptyk.eu>',
        to: `${req.body.email}, gilles@triptyk.eu`,
        subject: `Contact from ${req.body.name} from our website ✔`,
        text: 'Hello world 🐴 From TRIPTYK', 
        html: '<b>Hello world 🐴</b><br/> FROM TRIPTYK' 
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
             res.send(error);
        }
       res.send('Message sent: ');
    });
});

module.exports = router;