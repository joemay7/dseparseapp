
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

var rtuController = require('cloud/controllers/rtu.js');

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

// Facebook Canvas App
app.post('/', function(request, response) {
  res.send('signed_request: ' + req.body.signed_request + '<br>' +
    'fb_locale:' + req.body.fb_locale);
});

// Realtime Update Callback
app.get('/rtu', rtuController.index);
app.post('/rtu', rtuController.record);

// Attach the Express app to Cloud Code.
app.listen();
