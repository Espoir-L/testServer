var PORT = 8086;
var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
    var pathname = decodeURIComponent(url.parse(request.url).pathname);
    console.log(pathname);
    if (pathname === "/") {
      response.writeHead(200, {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE'
      });
      response.write('polyfill-fetch-test');
      response.end();
    }
    else {
      response.writeHead(404, {
          'Content-Type': 'text/html',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type,XFILENAME,XFILECATEGORY,XFILESIZE'
      });
      response.write('This request URL ' + pathname + ' was not found on this server.');
      response.end();
    }
});
server.listen(PORT);
console.log("server running at port " + PORT);