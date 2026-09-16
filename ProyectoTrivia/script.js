// ==========================================
// PREGUNTAS DEL QUIZ
// ==========================================

let questions = [
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Marte", "Venus", "Júpiter", "Mercurio"],
        answer: "Júpiter"
    },

    {
        question: "¿Cuánto es 5 + 7?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },

    {
        question: "¿Cuál es el océano más grande?",
        options: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        answer: "Pacífico"
    },

    {
        question: "¿Quién pintó la Mona Lisa?",
        options: [
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Pablo Picasso",
            "Claude Monet"
        ],
        answer: "Leonardo da Vinci"
    },

    {
        question: "¿Cuál de estos es un lenguaje de programación?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Photoshop"
        ],
        answer: "JavaScript"
    }
];


// ==========================================
// VARIABLES
// ==========================================

let score = 0;


// ==========================================
// PANTALLAS
// ==========================================

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const editScreen =
    document.getElementById("edit-screen");


// ==========================================
// BOTONES
// ==========================================

const startQuizBtn =
    document.getElementById("start-quiz-btn");

const editQuestionsBtn =
    document.getElementById("edit-questions-btn");

const finishBtn =
    document.getElementById("finish-btn");

const restartBtn =
    document.getElementById("restart-btn");

const addQuestionBtn =
    document.getElementById("add-question-btn");

const saveQuestionsBtn =
    document.getElementById("save-questions-btn");

const backHomeBtn =
    document.getElementById("back-home-btn");

const homeBtn =
    document.getElementById("home-btn");


// ==========================================
// ELEMENTOS DEL QUIZ
// ==========================================

const optionsContainer =
    document.getElementById("options-container");

const finalScore =
    document.getElementById("final-score");


// ==========================================
// EDITOR
// ==========================================

const questionsEditor =
    document.getElementById("questions-editor");


// ==========================================
// MOSTRAR UNA PANTALLA
// ==========================================

function showScreen(screen) {

    startScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    editScreen.classList.add("hidden");

    screen.classList.remove("hidden");
}


// ==========================================
// INICIAR EL QUIZ
// ==========================================

function startQuiz() {

    score = 0;

    showScreen(quizScreen);

    showAllQuestions();
}


// ==========================================
// MOSTRAR TODAS LAS PREGUNTAS
// ==========================================

function showAllQuestions() {

    // Limpiar preguntas anteriores
    optionsContainer.innerHTML = "";


    // Recorrer el arreglo de preguntas
    questions.forEach((question, index) => {

        // Crear contenedor de la pregunta
        const questionBox =
            document.createElement("div");

        questionBox.classList.add("question-box");


        // ======================================
        // TEXTO DE LA PREGUNTA
        // ======================================

        const questionTitle =
            document.createElement("h3");

        questionTitle.textContent =
            `${index + 1}. ${question.question}`;

        questionBox.appendChild(questionTitle);


        // ======================================
        // CREAR OPCIONES
        // ======================================

        question.options.forEach(option => {

            const label =
                document.createElement("label");

            const radio =
                document.createElement("input");

            radio.type = "radio";

            // Cada pregunta tiene su propio grupo
            radio.name = `question-${index}`;

            radio.value = option;


            // Agregar radio al label
            label.appendChild(radio);

            // Agregar texto
            label.appendChild(
                document.createTextNode(" " + option)
            );


            // Agregar opción a la pregunta
            questionBox.appendChild(label);
        });


        // ======================================
        // ESPACIO PARA FEEDBACK
        // ======================================

        const questionFeedback =
            document.createElement("p");

        questionFeedback.classList.add(
            "question-feedback"
        );

        questionFeedback.id =
            `feedback-${index}`;

        questionBox.appendChild(
            questionFeedback
        );


        // ======================================
        // AGREGAR PREGUNTA A LA PÁGINA
        // ======================================

        optionsContainer.appendChild(
            questionBox
        );
    });
}


// ==========================================
// TERMINAR EL QUIZ
// ==========================================

function finishQuiz() {

    score = 0;


    // Recorrer todas las preguntas
    questions.forEach((question, index) => {

        // Buscar respuesta seleccionada
        const selected =
            document.querySelector(
                `input[name="question-${index}"]:checked`
            );


        // Buscar espacio para feedback
        const questionFeedback =
            document.getElementById(
                `feedback-${index}`
            );


        // ======================================
        // NO RESPONDIÓ
        // ======================================

        if (!selected) {

            questionFeedback.textContent =
                "⚠ No respondiste esta pregunta.";

            return;
        }


        // ======================================
        // RESPUESTA CORRECTA
        // ======================================

        if (selected.value === question.answer) {

            score++;

            questionFeedback.textContent =
                "✓ ¡Correcto!";
        }


        // ======================================
        // RESPUESTA INCORRECTA
        // ======================================

        else {

            questionFeedback.textContent =
                `✗ Incorrecto. La respuesta correcta era: ${question.answer}`;
        }
    });


    // Esperar un segundo para mostrar feedback
    setTimeout(() => {

        showResults();

    }, 1000);
}


// ==========================================
// MOSTRAR RESULTADOS
// ==========================================

function showResults() {

    showScreen(resultScreen);

    finalScore.textContent =
        `${score} / ${questions.length}`;
}


// ==========================================
// VOLVER AL INICIO
// ==========================================

function goHome() {

    score = 0;

    showScreen(startScreen);
}


// ==========================================
// MOSTRAR EDITOR
// ==========================================

function showEditor() {

    // Limpiar editor
    questionsEditor.innerHTML = "";


    // Recorrer preguntas
    questions.forEach((question, index) => {

        // Crear caja
        const questionBox =
            document.createElement("div");

        questionBox.classList.add(
            "question-editor"
        );


        // ======================================
        // TÍTULO
        // ======================================

        const questionTitle =
            document.createElement("h3");

        questionTitle.textContent =
            `Pregunta ${index + 1}`;

        questionBox.appendChild(
            questionTitle
        );


        // ======================================
        // TEXTO DE LA PREGUNTA
        // ======================================

        const questionInput =
            document.createElement("input");

        questionInput.type = "text";

        questionInput.value =
            question.question;

        questionInput.classList.add(
            "edit-question"
        );

        questionInput.placeholder =
            "Escribe la pregunta";

        questionBox.appendChild(
            questionInput
        );


        // ======================================
        // OPCIONES
        // ======================================

        question.options.forEach(
            (option, optionIndex) => {

                const optionInput =
                    document.createElement("input");

                optionInput.type = "text";

                optionInput.value =
                    option;

                optionInput.classList.add(
                    "edit-option"
                );

                optionInput.dataset.option =
                    optionIndex;

                optionInput.placeholder =
                    `Opción ${optionIndex + 1}`;

                questionBox.appendChild(
                    optionInput
                );
            }
        );


        // ======================================
        // RESPUESTA CORRECTA
        // ======================================

        const answerLabel =
            document.createElement("label");

        answerLabel.textContent =
            "Respuesta correcta:";

        questionBox.appendChild(
            answerLabel
        );


        // Crear SELECT
        const answerSelect =
            document.createElement("select");

        answerSelect.classList.add(
            "edit-answer"
        );


        // Agregar opciones al SELECT
        question.options.forEach(option => {

            const optionElement =
                document.createElement("option");

            optionElement.value =
                option;

            optionElement.textContent =
                option;


            // Seleccionar respuesta actual
            if (option === question.answer) {

                optionElement.selected = true;
            }


            answerSelect.appendChild(
                optionElement
            );
        });


        questionBox.appendChild(
            answerSelect
        );


        // ======================================
        // AGREGAR AL EDITOR
        // ======================================

        questionsEditor.appendChild(
            questionBox
        );
    });
}


// ==========================================
// GUARDAR CAMBIOS
// ==========================================

function saveQuestions() {

    // Obtener todas las cajas
    const questionBoxes =
        document.querySelectorAll(
            ".question-editor"
        );


    // Recorrer cada caja
    questionBoxes.forEach(
        (box, index) => {

            // Buscar pregunta
            const questionInput =
                box.querySelector(
                    ".edit-question"
                );


            // Buscar opciones
            const optionInputs =
                box.querySelectorAll(
                    ".edit-option"
                );


            // Buscar respuesta correcta
            const answerSelect =
                box.querySelector(
                    ".edit-answer"
                );


            // ==================================
            // ACTUALIZAR PREGUNTA
            // ==================================

            questions[index].question =
                questionInput.value;


            // ==================================
            // ACTUALIZAR OPCIONES
            // ==================================

            questions[index].options =
                Array.from(optionInputs).map(
                    input => input.value
                );


            // ==================================
            // ACTUALIZAR RESPUESTA
            // ==================================

            questions[index].answer =
                answerSelect.value;
        }
    );


    alert("¡Preguntas actualizadas!");


    // Volver al inicio
    showScreen(startScreen);
}


// ==========================================
// AGREGAR NUEVA PREGUNTA
// ==========================================

function addQuestion() {

    questions.push({

        question: "Nueva pregunta",

        options: [
            "Opción 1",
            "Opción 2",
            "Opción 3",
            "Opción 4"
        ],

        answer: "Opción 1"
    });


    // Volver a mostrar el editor
    showEditor();
}


// ==========================================
// BOTÓN: RESPONDER TRIVIA
// ==========================================

startQuizBtn.addEventListener(
    "click",
    startQuiz
);


// ==========================================
// BOTÓN: EDITAR PREGUNTAS
// ==========================================

editQuestionsBtn.addEventListener(
    "click",
    () => {

        showScreen(editScreen);

        showEditor();
    }
);


// ==========================================
// BOTÓN: TERMINAR QUIZ
// ==========================================

finishBtn.addEventListener(
    "click",
    finishQuiz
);


// ==========================================
// BOTÓN: VOLVER A EMPEZAR
// ==========================================

restartBtn.addEventListener(
    "click",
    startQuiz
);


// ==========================================
// BOTÓN: AGREGAR PREGUNTA
// ==========================================

addQuestionBtn.addEventListener(
    "click",
    addQuestion
);


// ==========================================
// BOTÓN: GUARDAR CAMBIOS
// ==========================================

saveQuestionsBtn.addEventListener(
    "click",
    saveQuestions
);


// ==========================================
// BOTÓN: VOLVER AL INICIO
// ==========================================

backHomeBtn.addEventListener(
    "click",
    goHome
);


// ==========================================
// BOTÓN DE INICIO FIJO
// ==========================================

homeBtn.addEventListener(
    "click",
    goHome
);