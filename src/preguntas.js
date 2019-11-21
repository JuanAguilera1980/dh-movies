const fs = require('fs');

let preguntas = JSON.parse(fs.readFileSync(__dirname + '/../data/faqs.json', 'utf-8'));

let lasPreguntas = preguntas.faqs;

let contenido = 'Preguntas Frecuentes.\n\n';

contenido += `Total de Preguntas: ${preguntas.total_faqs}\n\n`;

contenido += 'Listado de Preguntas:\n\n';

lasPreguntas.forEach(cadaPregunta => {
    contenido += `Pregunta: ${cadaPregunta.faq_title}\n`;
    contenido += `Respuesta ${cadaPregunta.faq_answer}\n\n`;
});

module.exports = contenido;