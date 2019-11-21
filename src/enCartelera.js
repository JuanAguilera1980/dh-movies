const fs = require('fs');

let peliculas = JSON.parse(fs.readFileSync(__dirname + '/../data/movies.json', 'utf-8'));

peliculas = peliculas.movies;

let pelisEnCartelera = peliculas.filter(cadaPeli => cadaPeli.release_date > '2019-10-01');

let contenido = 'En Cartelera\n\n';

contenido += `Total de Películas: ${pelisEnCartelera.length}\n\n`;

contenido += 'Listado de Películas: \n\n';

pelisEnCartelera.forEach(unaPelicula => {
	contenido += `Título: ${unaPelicula.title}\n`;
    contenido += `Reseña: ${unaPelicula.overview}\n\n`;
});

module.exports = contenido;