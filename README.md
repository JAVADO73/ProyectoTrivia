Quiz Interactivo

Proyecto web desarrollado con HTML, CSS y JavaScript. Consiste en un
quiz interactivo que permite responder preguntas, consultar el resultado
y editar o agregar preguntas desde la misma aplicación.

Información personal
Autor
Nombre: José Ángel Vado Miranda

Correo: vadoja73@gmail.com

GitHub: JAVADO73

Video https://1drv.ms/v/c/04eec4ec3b04bc5e/IQB2rSrSHxmCQqkE6Si7mFumAQnrJfiL0XEmyCmVTpHU094?e=EW9l2Y

Teléfono: 87327380

GitHub: JAVADO73


Descripción

La aplicación presenta una pantalla principal desde la cual el usuario
puede:

Responder la trivia.

Editar las preguntas existentes.

Agregar nuevas preguntas.

Volver al inicio desde cualquier pantalla.

Las preguntas se almacenan en un arreglo de objetos de JavaScript y se
generan dinámicamente mediante manipulación del DOM.

Tecnologías utilizadas

HTML5: estructura de la aplicación.

CSS3: diseño y estilos visuales.

JavaScript: lógica del quiz, manejo de eventos, preguntas,
respuestas, resultados y edición.

Estructura del proyecto

quiz-project/
├── index.html
├── styles.css
├── script.js
└── README.md

index.html

Contiene la estructura de las diferentes pantallas:

Pantalla de inicio.

Pantalla del quiz.

Pantalla de resultados.

Pantalla para editar preguntas.

styles.css

Contiene los estilos de la aplicación, incluyendo:

Diseño general.

Botones.

Tarjetas de preguntas.

Opciones de respuesta.

Editor de preguntas.

Botón de inicio fijo.

script.js

Contiene toda la lógica de la aplicación:

Arreglo de preguntas.

Generación dinámica de preguntas.

Selección y comprobación de respuestas.

Cálculo del puntaje.

Navegación entre pantallas.

Edición de preguntas.

Agregado de nuevas preguntas.

Funcionamiento

1. Pantalla principal

Al abrir la aplicación se muestra el menú principal con dos opciones:

Responder Trivia

Editar Preguntas

También existe un botón Inicio ubicado en una esquina para regresar
al menú principal.

2. Responder Trivia

Al seleccionar Responder Trivia, se muestran todas las preguntas en
una sola página.

Cada pregunta contiene varias opciones mediante botones de tipo radio.

Al finalizar, el usuario presiona Terminar Quiz.

El sistema:

Revisa las respuestas seleccionadas.

Compara cada respuesta con la respuesta correcta almacenada.

Calcula el puntaje.

Muestra retroalimentación de cada pregunta.

Presenta el resultado final.

Ejemplo:

Resultado: 4 / 5

3. Editar preguntas

Desde Editar Preguntas, el usuario puede modificar:

El texto de la pregunta.

Las opciones de respuesta.

La respuesta correcta.

También puede utilizar + Agregar pregunta para crear una nueva
pregunta.

Al presionar Guardar cambios, la información se actualiza en el
arreglo de preguntas que utiliza el quiz.

Estructura de las preguntas

Las preguntas se almacenan como objetos dentro de un arreglo:

let questions = [
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Marte", "Venus", "Júpiter", "Mercurio"],
        answer: "Júpiter"
    }
];

Cada objeto contiene:

Propiedad    Descripción

question   Texto de la pregunta
options    Arreglo con las opciones disponibles
answer     Respuesta correcta

Esto permite agregar o modificar preguntas sin tener que escribir
manualmente cada una en el HTML.

Manipulación del DOM

Uno de los elementos principales del proyecto es la manipulación del DOM
mediante JavaScript.

Por ejemplo, las preguntas se generan utilizando:

document.createElement()

y se agregan a la página mediante:

appendChild()

De esta forma, el contenido del quiz se crea dinámicamente a partir del
arreglo questions.

Navegación entre pantallas

La aplicación utiliza una función para controlar qué pantalla está
visible:

function showScreen(screen) {

    startScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    editScreen.classList.add("hidden");

    screen.classList.remove("hidden");
}

Primero se ocultan todas las pantallas y después se muestra únicamente
la pantalla seleccionada.

Almacenamiento de datos

El proyecto utiliza objetos y arreglos en memoria, por lo que no
necesita una base de datos.

Los cambios realizados en las preguntas permanecen mientras la página
esté abierta.

Si se recarga la página, las preguntas regresan a los valores iniciales
definidos en script.js.

Características principales

Quiz de preguntas y respuestas.

Cinco preguntas iniciales.

Preguntas almacenadas como objetos.

Generación dinámica mediante JavaScript.

Todas las preguntas visibles en una sola página.

Selección de respuestas mediante radio buttons.

Comprobación automática de respuestas.

Cálculo del puntaje.

Retroalimentación por pregunta.

Pantalla de resultados.

Reinicio del quiz.

Edición de preguntas.

Edición de opciones.

Selección de respuesta correcta.

Agregado de nuevas preguntas.

Navegación al inicio desde cualquier pantalla.

Uso de HTML, CSS y JavaScript sin base de datos.

Cómo ejecutar el proyecto

No se necesita instalar ninguna dependencia.

Opción 1: Abrir directamente

Descargar o clonar el repositorio.

Abrir la carpeta del proyecto.

Abrir index.html en un navegador.

Opción 2: Visual Studio Code

Abrir la carpeta del proyecto en Visual Studio Code.

Abrir index.html.

Ejecutarlo en el navegador.

Si se utiliza la extensión Live Server, también se puede ejecutar
desde el botón Go Live.

Dificultades principales

Durante el desarrollo, las partes que requirieron mayor trabajo fueron:

1. Generación dinámica de preguntas

Fue necesario utilizar JavaScript para recorrer el arreglo de objetos y
crear automáticamente las preguntas y sus opciones en el HTML.

2. Edición y agregado de preguntas

Se implementó un editor que permite modificar los objetos almacenados en
el arreglo y agregar nuevos objetos.

3. Navegación entre pantallas

Fue necesario controlar mediante JavaScript qué sección debía mostrarse
y cuáles debían permanecer ocultas, además de conectar los botones con
sus respectivas funciones.

Objetivo del proyecto

El objetivo es aplicar conocimientos de HTML, CSS y JavaScript,
especialmente:

Manipulación del DOM.

Arreglos y objetos.

Funciones.

Eventos.

Condicionales.

Recorridos con forEach.

Creación dinámica de elementos.

Manejo de formularios.

Actualización de datos en memoria.

Autor

Proyecto académico desarrollado para practicar el desarrollo web con
HTML, CSS y JavaScript.
