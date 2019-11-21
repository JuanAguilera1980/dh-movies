const fs = require('fs');

let salas = JSON.parse(fs.readFileSync(__dirname + '/../data/theaters.json', 'utf-8'));

let lasSalas = salas.theaters;

let totalSalas = lasSalas.reduce((acum, unaSala) => {
	return acum + unaSala.total_rooms;
}, 0);

let contenido = 'Nuestras Salas \n\n';

contenido += `Total de Salas: ${totalSalas} \n\n`;

contenido += `Listado de Salas:\n\n`;

lasSalas.forEach(unaSala => {
	contenido += `Nombre: ${unaSala.name}\n`;
	contenido += `Dirección: ${unaSala.address}\n`;
	contenido += `Descripción: ${unaSala.description}\n\n`;
});

module.exports = contenido;