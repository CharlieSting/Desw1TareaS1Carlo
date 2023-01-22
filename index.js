//*Tarea:
//1) Desarrollar un Servidor en Node Js que reciba de parametro el nombre de usuario, 
//el servicio debe responderle al cliente un mensaje de bienvenida con el nombre de usuario. 

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    

//ejemplo
//http://localhost?num1=7&num2=1&num3=1&num4=hola*/