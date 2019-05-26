const express = require('express')
const app = express()

let opciones = {
	matematicas:{
		alias:'m',
		demand : true
	},
	programacion:{
		alias:'p',
		demand : true
	},
	logica:{
		alias:'l',
		demand : true
	}
};


let calcularPromedio = (notaMatematica,notaProgramacion,notaLogica) => {
    return (notaMatematica+notaProgramacion+notaLogica)/3;
}

let mostrarMayores3 = (promedio) => {
    mensaje = promedio > 3 ? 'El promedio es ' + promedio : "";
    return mensaje;
}

const argv = require ('yargs')
				.command('promedio','Calcular el pronedio ',opciones)
				.argv;


if(argv._.length == 0)
	console.log('Revisar el readme para mas informacion sobre el uso del programa');
else {

    if(argv._ == "promedio"){
        
        let mens = mostrarMayores3(calcularPromedio(argv.m,argv.p,argv.l));         

        app.get('/', function (req, res) {
        res.send(mens);
        })
        
        console.log('en su navegador puede ver la informacion en http://localhost:3000/');

        app.listen(3000);
        
    }else{
        console.log('Introdujo un comando invalido revisar el readme para mas informacion');
    }
}