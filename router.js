const contenidoSitio = require('./src/index');

const rutas = {
	elegida: (req, res) => {
		switch (req.url) {
			case '/':
				res.end(contenidoSitio.homePage);
				break;
			case '/en-cartelera':
				res.end(contenidoSitio.enCartelera);
				break;
			case '/mas-votadas':
				res.end(contenidoSitio.masVotadas);
				break;
			case '/sucursales':
				res.end(contenidoSitio.sucursales);
				break;
			case '/contacto':
				res.end(contenidoSitio.contacto);
				break;
			case '/preguntas-frecuentes':
				res.end(contenidoSitio.preguntas);
				break;
			default:
				res.end('404 not found')
		}
	}
}

module.exports = rutas;