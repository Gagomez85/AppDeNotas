const fs = require('fs');

const prueba = fs.readFileSync(__dirname + '//\//tareas.json','utf-8')
//const prueba = fs.readFileSync(__dirname + '//\//Prueba.json','utf-8')
console.log(prueba)

const contenidoJson = JSON.parse(prueba)

console.log(contenidoJson)