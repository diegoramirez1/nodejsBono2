const express = require('express')
const app = express()
const estudiantes = require ('./commandEstudiante');

const argv = require ('yargs')
				.command('inscribir','Realizar proceso de inscripcion',estudiantes.opciones)
				.argv;

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);

