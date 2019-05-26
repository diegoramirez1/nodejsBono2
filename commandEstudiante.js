let opciones = {
	nombreInteresado:{
		alias:'n',
		demand : true
	},
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


let calcularPromedio = (notaMatematica,notaProgramacion,notaLogica, nombreEstudiante) => {
    console.log('El promedio de ' + nombreEstudiante + es (notaMatematica+notaProgramacion+notaLogica)/3);
}


module.exports = {
	calcularPromedio,
	opciones
};