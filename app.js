var express = require('express');
var builder = require('xmlbuilder');
var js2xmlparser = require("js2xmlparser");

// <circle cx="100" cy="100" r="50"  />


// <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

// "svg":  {"@": { "xmlns" : "http://www.w3.org/2000/svg", "xmlns:xlink" : "http://www.w3.org/1999/xlink"}, }

// js2xmlparser test
var data = {
	
	
	"svg":  {"@": { "xmlns" : "http://www.w3.org/2000/svg", "xmlns:xlink" : "http://www.w3.org/1999/xlink"}, 
	
	
	"circle": {
        "@": {
            "cx": "200",
            "cy": "200",
            "r": "100"
        },
       
    },
},
};

var circle = js2xmlparser("div", data);

// xmlbuilder test
var xml = builder.create('root')
  .ele('xmlbuilder', {'for': 'node-js'})
    .ele('repo', {'type': 'git'}, 'git://github.com/oozcitak/xmlbuilder-js.git')
  .end({ pretty: true});

// image/svg+xml
var app = express();
app.get('/', function(req, res){
  var body = circle;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Content-Length', Buffer.byteLength(body));
    
  res.end(body);
});

// app.use(express.static(__dirname + '/'));


app.listen(3000);

console.log('Listening on port 3000');