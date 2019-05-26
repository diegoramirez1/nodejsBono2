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


let calcularPromedio = (notaMatematica,notaProgramacion,notaLogica) => {
    return (notaMatematica+notaProgramacion+notaLogica)/3;
}

let mostrarMayores3 = (promedio) => {
    mensaje = promedio > 3 ? 'El promedio es ' + promedio : "";
    return mensaje;
}

module.exports = {
    calcularPromedio,
    mostrarMayores3,
	opciones
};