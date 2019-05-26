const express = require('express')
const app = express()
const estudiantes = require ('./commandEstudiante');

const argv = require ('yargs')
				.command('promedio','Calcular el pronedio ',estudiantes.opciones)
				.argv;


if(argv._.length == 0)
	console.log('Revisar el readme para mas informacion sobre el uso del programa');
else {

    if(argv._ == "promedio"){
        
        let mens = estudiantes.mostrarMayores3(estudiantes.calcularPromedio(argv.m,argv.m,argv.l,argv.n));         

        app.get('/', function (req, res) {
        res.send(mens);
        })
        
        console.log('en su navegador puede ver la informacion en http://localhost:3000/');

        app.listen(3000);
        
    }else{
        console.log('Introdujo un comando invalido revisar el readme para mas informacion');
    }
}

