const contenedor = document.getElementById("cuestionario");

const preguntas = [
  {
    pregunta: "1. ¿Cuántos tipos de tazas de interés existen?",
    respuestas: {
      a: "1",
      b: "2",
      c: "4",
    },
    respuestaCorrecta: "b",
  },
  {
    pregunta: "2. ¿Cuál es el porcentaje de ahorro para los gastos extras?",
    respuestas: {
      a: "5%",
      b: "7%",
      c: "10%",
      d: "12",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. ¿Qué se contempla normalmente contra daños en los créditos hipotecarios?",
    respuestas: {
      a: "Contra fenómenos naturales",
      b: "Contra robo y daños de terceros",
      c: "Contra daños de terceros",
    },
    respuestaCorrecta: "a",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();