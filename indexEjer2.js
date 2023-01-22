//2) Desarrollar un Servidor en Node Js que reciba un numero, este debe responder 
//con el doble del numero y el triple del mismo. 
var http = require('http');
var url = require('url');

http.createServer( function(req, res){
    var q = url.parse(req.url, true);
    var datos = q.query; 

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result = parseFloat(datos.num1) * 2;
    res.write(datos.num1 + " x 2 = " + result);
    res.write('<br>');
    result = parseFloat(datos.num1) * 3;
    res.write(datos.num1 + " x 3 = " + result);

    res.end();

}).listen(3030);





