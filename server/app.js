var request = require('request');
var session = require('express-session');
var url = require('url');
var RedisStore = require('connect-redis')(session);
var express = require('express');
var path = require('path');
var winston = require('winston');
request.debug=false;

var app = express();

winston.add(
  winston.transports.File, {
    filename: 'loggggggggg.log',
    level: 'info',
    // json: true,
    eol: '\n', // for Windows, or `eol: ‘n’,` for *NIX OSs
    timestamp: true,
  }
)
//
// var logger = new (winston.Logger)({
//   transports: [
//     new (winston.transports.File)({
//       filename: 'loggggggggg.log',
//       timestamp: function() {
//         return Date.now();
//       },
//       formatter: function(options) {
//         // Return string will be passed to logger.
//         return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (options.message ? options.message : '') +
//           (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
//       }
//     })
//   ]
// });
// logger.info('Data to log.');


winston.log('info', 'Hello log files!')
winston.info('Hello again log files!')



var config = require('../config.json').frontend;

var logMiddleware = function() {
  return function(req, res, next) {

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // console.log(ip);
    req.log = function () {
        var first_parameter = arguments[0];
        var other_parameters = Array.prototype.slice.call(arguments, 1);

        function formatConsoleDate (date) {
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var milliseconds = date.getMilliseconds();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var year = date.getFullYear();

            return ip+' [' +
                day+
                '/'+
                month+
                '/'+
                year+
                ' '+
                   ((hour < 10) ? '0' + hour: hour) +
                   ':' +
                   ((minutes < 10) ? '0' + minutes: minutes) +
                   ':' +
                   ((seconds < 10) ? '0' + seconds: seconds) +
                   //'.' +
                   //('00' + milliseconds).slice(-3) +
                   '] ';
        }

        console.log.apply(console, [formatConsoleDate(new Date()) + first_parameter].concat(other_parameters));
    };

    next();
  }
}


var sessionMiddleware = session({
  secret: 'yacare123456789',
  resave: true,
  saveUninitialized: true//,
//  store: new RedisStore(localhost)
});


app.use(sessionMiddleware);
app.use(logMiddleware());


app.use(function(req, res, next) {
//loguear todo
  // logger.log('info', '%s %s %s', req.headers.host, req.method, req.url)
  var a = "ale"
  winston.log('info', {host: req.headers.host, url: req.url, method: req.method})
  // winston.log('info', req.headers);
  // winston.log('info', req.url);
  // winston.log('info', req.method);
  next();
});




app.use('/backendPublic', function(req, res, next){
  var options = {
    url: config.protocol+'://'+config.backendIP+req.url,//https
  };
  console.log(options.url);
  req.pipe(request(options)).pipe(res);
});

app.use('/', function(req, res, next) {
console.log(req.url);
  next();
});

app.use('/', express.static(path.join(__dirname, '..')));

app.use('/bower_components', express.static(path.join(__dirname, '..', 'bower_components')));


app.use('/backend', isAuthenticated(), function(req, res, next){ //isAuthenticated(),

  var options = {
    url: config.protocol+'://'+config.backendIP+req.url,//https
    headers: {
      'userSystemId': req.session.uid
    }
  };
	req.pipe(request(options)).pipe(res);
});

app.use('/geoobject', function(req, res, next){
  var options = {
    url: 'https://'+config.urlGeoObject+req.url
  };

  request(options, function(error, response, body) {
    if(response){
      res.status(response.statusCode);
      res.set(response.headers);
      res.send(body);
    }
  })
  //req.pipe(request(options)).pipe(res);
});



var ser = app.listen(3022);


function isAuthenticated(){


  return function(req, res, next) {
    if (req.session.uid){
         //puede pasar
      next();
    }
    else{
         //no puede pasar
           //next();
    }
  }

}

process.on('uncaughtException', function (exception) {
  // handle or ignore error
  console.log("error")
  console.log(exception);
});
