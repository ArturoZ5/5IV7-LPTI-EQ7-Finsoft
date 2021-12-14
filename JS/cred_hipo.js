const contenedor = document.getElementById("cuestionario");

const preguntas = [
  {
    pregunta: "1. ¿Cuál es el plazo de tiempo usual para los créditos hipotecarios?",
    respuestas: {
      a: "3 a 9 meses",
      b: "5 a 15 años",
      c: "7 a 12 años",
      d: "5 a 30 años",
    },
    respuestaCorrecta: "d",
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