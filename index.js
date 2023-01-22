//*Tarea:
//1) Desarrollar un Servidor en Node Js que reciba de parametro el nombre de usuario, 
//el servicio debe responderle al cliente un mensaje de bienvenida con el nombre de usuario. 

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var datos = q.query;
    var mensaje="Sea bienvenido a este sitio de node js";
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(mensaje +":"+ datos.usuario);
    
    res.end();

}).listen(3030);

// http://localhost:3030/?usuario=Carloa82891821