// === MÓDULO DE QUIZ INTERACTIVO ISO ===

class ISOQuizModule {
    constructor() {
        this.questionsDatabase = {
            iso25010: [
                {
                    pregunta: "Según ISO 25010, ¿cuál de las siguientes NO es una característica principal de calidad del software?",
                    opciones: [
                        "Functional Suitability (Adecuación Funcional)",
                        "Performance Efficiency (Eficiencia de Desempeño)",
                        "Code Complexity (Complejidad del Código)",
                        "Maintainability (Mantenibilidad)"
                    ],
                    respuestaCorrecta: 2,
                    explicacion: "ISO 25010 define 8 características principales: Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, y Portability. 'Code Complexity' no es una característica principal del modelo.",
                    categoria: "conceptos",
                    dificultad: "facil"
                },
                {
                    pregunta: "En un sistema de e-commerce que procesa 10,000 transacciones por segundo, ¿qué subcaracterística de Performance Efficiency sería MÁS crítica?",
                    opciones: [
                        "Time Behaviour (Comportamiento Temporal)",
                        "Resource Utilization (Utilización de Recursos)",  
                        "Capacity (Capacidad)",
                        "Todas son igualmente importantes"
                    ],
                    respuestaCorrecta: 0,
                    explicacion: "Time Behaviour es crítico en sistemas de alto volumen como e-commerce, ya que el tiempo de respuesta directamente impacta la experiencia del usuario y las conversiones. Los usuarios abandonan sitios lentos.",
                    categoria: "aplicacion",
                    dificultad: "intermedio"
                },
                {
                    pregunta: "Para un sistema hospitalario crítico, ¿cuál sería la configuración de prioridades ISO 25010 MÁS apropiada?",
                    opciones: [
                        "Usability > Performance > Reliability > Security",
                        "Security > Reliability > Functional Suitability > Maintainability", 
                        "Performance > Security > Usability > Compatibility",
                        "Functional Suitability > Usability > Performance > Reliability"
                    ],
                    respuestaCorrecta: 1,
                    explicacion: "En sistemas críticos de salud: Security es vital para proteger datos médicos sensibles, Reliability asegura disponibilidad continua (vidas dependen del sistema), Functional Suitability garantiza que todas las funciones médicas funcionen correctamente, y Maintainability permite actualizaciones seguras.",
                    categoria: "analisis",
                    dificultad: "avanzado"
                },
                {
                    pregunta: "¿Qué subcaracterística de Security en ISO 25010 se relaciona directamente con prevenir modificaciones no autorizadas?",
                    opciones: [
                        "Confidentiality (Confidencialidad)",
                        "Integrity (Integridad)",
                        "Non-repudiation (No Repudio)", 
                        "Accountability (Responsabilidad)"
                    ],
                    respuestaCorrecta: 1,
                    explicacion: "Integrity se refiere a la capacidad del sistema de prevenir modificaciones no autorizadas de datos o software. Es fundamental en sistemas donde la alteración de información puede tener consecuencias graves.",
                    categoria: "conceptos",
                    dificultad: "intermedio"
                },
                {
                    pregunta: "Un sistema móvil debe ejecutarse en Android, iOS y Windows Phone. ¿Qué característica ISO 25010 es prioritaria y por qué?",
                    opciones: [
                        "Compatibility - Co-existence para funcionar con otras apps",
                        "Portability - Adaptability para múltiples plataformas",
                        "Usability - Learnability para diferentes interfaces",
                        "Performance Efficiency - Resource Utilization para dispositivos limitados"
                    ],
                    respuestaCorrecta: 1,
                    explicacion: "Portability-Adaptability es clave para sistemas multi-plataforma. Permite adaptar el software a diferentes entornos operacionales (Android, iOS, Windows Phone) manteniendo funcionalidad consistente.",
                    categoria: "aplicacion", 
                    dificultad: "intermedio"
                }
            ],
            iso29148: [
                {
                    pregunta: "Según ISO 29148, ¿cuál es la diferencia fundamental entre 'stakeholder requirement' y 'system requirement'?",
                    opciones: [
                        "Los stakeholder requirements son técnicos, los system requirements son funcionales",
                        "Los stakeholder requirements expresan necesidades de usuario, los system requirements especifican lo que el sistema debe hacer",
                        "No hay diferencia, son términos sinónimos",
                        "Los stakeholder requirements son opcionales, los system requirements son obligatorios"
                    ],
                    respuestaCorrecta: 1,
                    explicacion: "ISO 29148 distingue claramente: Stakeholder requirements expresan necesidades, deseos y expectativas de los interesados. System requirements especifican funciones, capacidades y restricciones que el sistema debe cumplir para satisfacer los stakeholder requirements.",
                    categoria: "conceptos",
                    dificultad: "intermedio"
                },
                {
                    pregunta: "En un proyecto de sistema bancario, ¿cuál sería un ejemplo correcto de 'constraint' según ISO 29148?",
                    opciones: [
                        "El usuario debe poder transferir dinero entre cuentas",
                        "El sistema debe cumplir con regulaciones PCI-DSS",
                        "El sistema debe ser fácil de usar",
                        "El sistema debe procesar transacciones rápidamente"
                    ],
                    respuestaCorrecta: 1,
                    explicacion: "Un constraint (restricción) según ISO 29148 es una limitación o condición que el sistema debe cumplir. El cumplimiento con PCI-DSS es una restricción regulatoria obligatoria, no una función del sistema sino una limitación externa que debe respetarse.",
                    categoria: "aplicacion",
                    dificultad: "intermedio"
                },
                {
                    pregunta: "¿Cuál de estos elementos NO es parte del proceso de 'Requirements Analysis' según ISO 29148?",
                    opciones: [
                        "Definir arquitectura del sistema",
                        "Analizar completitud de requisitos", 
                        "Evaluar feasibilidad de requisitos",
                        "Resolver conflictos entre requisitos"
                    ],
                    respuestaCorrecta: 0,
                    explicacion: "Definir arquitectura del sistema pertenece a las actividades de diseño, no al análisis de requisitos. ISO 29148 establece que Requirements Analysis incluye: analizar completitud, consistencia, feasibilidad, verificabilidad y resolver conflictos.",
                    categoria: "conceptos",
                    dificultad: "avanzado"
                },
                {
                    pregunta: "Para un sistema IoT de monitoreo agrícola, ¿qué tipo de requisito sería 'El sistema debe enviar alertas cuando la humedad del suelo baje del 30%'?",
                    opciones: [
                        "Functional requirement - Function",
                        "Performance requirement - Timing",
                        "Interface requirement - User interface",
                        "Design constraint - Implementation"
                    ],
                    respuestaCorrecta: 0,
                    explicacion: "Es un Functional requirement tipo Function porque describe una capacidad específica que el sistema debe proveer: enviar alertas basadas en condiciones del sensor. Define QUÉ debe hacer el sistema, no CÓMO o QUÉ TAN RÁPIDO.",
                    categoria: "aplicacion",
                    dificultad: "intermedio"
                }
            ],
            iso9241: [
                {
                    pregunta: "Según ISO 9241-11, ¿cuál es la definición correcta de Usabilidad?",
                    opciones: [
                        "La facilidad con que un usuario puede aprender a usar un sistema",
                        "La medida en que un producto puede ser usado por usuarios específicos para lograr objetivos específicos con efectividad, eficiencia y satisfacción en un contexto específico de uso",
                        "La capacidad de un sistema de prevenir errores del usuario",
                        "La velocidad con que un usuario puede completar tareas en el sistema"
                    ],
                    respuestaCorrecta: 1,
                    explicacion: "ISO 9241-11 define usabilidad como la medida en que un producto puede ser usado por usuarios específicos para lograr objetivos específicos con efectividad, eficiencia y satisfacción en un contexto específico de uso. Esta definición incluye usuarios, objetivos, contexto y tres componentes clave.",
                    categoria: "conceptos",
                    dificultad: "facil"
                },
                {
                    pregunta: "En el diseño de una aplicación médica para emergencias, ¿cuál principio de ISO 9241-110 sería MÁS crítico?",
                    opciones: [
                        "Suitability for individualization (Adecuación para individualización)",
                        "Error tolerance (Tolerancia a errores)",
                        "Conformity with user expectations (Conformidad con expectativas)",
                        "Self-descriptiveness (Auto-descriptividad)"
                    ],
                    respuestaCorrecta: 1,
                    explicacion: "Error tolerance es crítico en aplicaciones médicas de emergencia donde los errores pueden tener consecuencias fatales. El sistema debe prevenir errores, detectarlos cuando ocurran y permitir corrección fácil y rápida, especialmente bajo presión y estrés.",
                    categoria: "aplicacion",
                    dificultad: "avanzado"
                },
                {
                    pregunta: "¿Cuál de estas métricas NO está directamente relacionada con 'eficiencia' según ISO 9241-11?",
                    opciones: [
                        "Tiempo para completar una tarea",
                        "Número de clics/toques requeridos",
                        "Nivel de satisfacción del usuario",
                        "Recursos humanos y tecnológicos empleados"
                    ],
                    respuestaCorrecta: 2,
                    explicacion: "Satisfacción del usuario es un componente separado de usabilidad en ISO 9241-11. Eficiencia se refiere a recursos empleados en relación con exactitud y completitud de objetivos logrados (tiempo, clics, esfuerzo físico/mental).",
                    categoria: "conceptos",
                    dificultad: "intermedio"
                }
            ]
        };

        this.activeQuiz = null;
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.timeLimit = 120; // 2 minutos por defecto
        this.timer = null;
    }

    startQuiz(category, difficulty = 'all') {
        let questions = [];
        
        if (category === 'all') {
            // Mezclar preguntas de todas las categorías
            Object.values(this.questionsDatabase).forEach(categoryQuestions => {
                questions = questions.concat(categoryQuestions);
            });
        } else {
            questions = this.questionsDatabase[category] || [];
        }

        // Filtrar por dificultad si se especifica
        if (difficulty !== 'all') {
            questions = questions.filter(q => q.dificultad === difficulty);
        }

        // Mezclar preguntas aleatoriamente
        questions = this.shuffleArray([...questions]);
        
        // Tomar solo 5 preguntas para el quiz
        questions = questions.slice(0, 5);

        this.activeQuiz = {
            questions,
            category,
            difficulty,
            startTime: Date.now(),
            timeLimit: this.timeLimit
        };

        this.currentQuestion = 0;
        this.userAnswers = [];
        
        this.renderQuizInterface();
        this.startTimer();
    }

    renderQuizInterface() {
        const gameInterface = document.getElementById('game-interface');
        if (!gameInterface) return;

        const quiz = this.activeQuiz;
        const question = quiz.questions[this.currentQuestion];
        const progress = ((this.currentQuestion + 1) / quiz.questions.length) * 100;

        gameInterface.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <div class="quiz-info">
                        <h1>🧠 Quiz ISO Interactivo</h1>
                        <div class="quiz-meta">
                            <span class="quiz-category">${this.getCategoryName(quiz.category)}</span>
                            <span class="quiz-difficulty">${question.dificultad.toUpperCase()}</span>
                        </div>
                    </div>
                    <div class="quiz-timer" id="quiz-timer">
                        <span class="timer-icon">⏱️</span>
                        <span class="timer-text" id="timer-text">${this.timeLimit}s</span>
                    </div>
                </div>

                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="progress-text">Pregunta ${this.currentQuestion + 1} de ${quiz.questions.length}</span>
                </div>

                <div class="question-container">
                    <div class="question-text">
                        <h2>${question.pregunta}</h2>
                    </div>

                    <div class="options-container">
                        ${question.opciones.map((opcion, index) => `
                            <div class="quiz-option" onclick="quizModule.selectAnswer(${index})" data-index="${index}">
                                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                                <div class="option-text">${opcion}</div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="question-actions">
                        <button class="quiz-btn secondary" onclick="quizModule.endQuiz()">
                            🚪 Salir del Quiz
                        </button>
                        <button class="quiz-btn primary" onclick="quizModule.submitAnswer()" id="submit-btn" disabled>
                            ${this.currentQuestion < quiz.questions.length - 1 ? '➡️ Siguiente' : '🏁 Finalizar'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    selectAnswer(answerIndex) {
        // Remover selección previa
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.classList.remove('selected');
        });

        // Seleccionar nueva opción
        document.querySelector(`.quiz-option[data-index="${answerIndex}"]`).classList.add('selected');
        
        // Habilitar botón de submit
        document.getElementById('submit-btn').disabled = false;
        
        // Guardar respuesta temporalmente
        this.tempAnswer = answerIndex;
    }

    submitAnswer() {
        if (this.tempAnswer === undefined) return;

        const question = this.activeQuiz.questions[this.currentQuestion];
        const isCorrect = this.tempAnswer === question.respuestaCorrecta;
        
        // Guardar respuesta del usuario
        this.userAnswers.push({
            questionIndex: this.currentQuestion,
            selectedAnswer: this.tempAnswer,
            correctAnswer: question.respuestaCorrecta,
            isCorrect: isCorrect,
            timeSpent: Date.now() - this.questionStartTime || 0
        });

        // Mostrar feedback inmediato
        this.showQuestionFeedback(question, this.tempAnswer);
    }

    showQuestionFeedback(question, userAnswer) {
        const isCorrect = userAnswer === question.respuestaCorrecta;
        
        // Colorear las opciones
        document.querySelectorAll('.quiz-option').forEach((option, index) => {
            option.style.pointerEvents = 'none';
            
            if (index === question.respuestaCorrecta) {
                option.classList.add('correct');
            } else if (index === userAnswer && !isCorrect) {
                option.classList.add('incorrect');
            }
        });

        // Mostrar explicación
        const container = document.querySelector('.question-container');
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `question-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackDiv.innerHTML = `
            <div class="feedback-header">
                <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                <span class="feedback-text">${isCorrect ? '¡Correcto!' : 'Incorrecto'}</span>
            </div>
            <div class="feedback-explanation">
                <strong>Explicación:</strong> ${question.explicacion}
            </div>
        `;
        
        container.appendChild(feedbackDiv);

        // Cambiar botón para continuar
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.textContent = this.currentQuestion < this.activeQuiz.questions.length - 1 ? '➡️ Siguiente Pregunta' : '🏁 Ver Resultados';
        submitBtn.onclick = () => this.nextQuestion();
        submitBtn.disabled = false;
    }

    nextQuestion() {
        this.currentQuestion++;
        this.tempAnswer = undefined;
        
        if (this.currentQuestion >= this.activeQuiz.questions.length) {
            this.showQuizResults();
        } else {
            this.questionStartTime = Date.now();
            this.renderQuizInterface();
        }
    }

    showQuizResults() {
        this.stopTimer();
        
        const quiz = this.activeQuiz;
        const totalQuestions = quiz.questions.length;
        const correctAnswers = this.userAnswers.filter(a => a.isCorrect).length;
        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const totalTime = Math.round((Date.now() - quiz.startTime) / 1000);

        let performance = '';
        if (percentage >= 90) performance = '🏆 EXCELENTE';
        else if (percentage >= 70) performance = '✅ BUENO'; 
        else if (percentage >= 50) performance = '⚠️ REGULAR';
        else performance = '❌ NECESITA MEJORAR';

        const gameInterface = document.getElementById('game-interface');
        gameInterface.innerHTML = `
            <div class="quiz-results">
                <div class="results-header">
                    <h1>📊 Resultados del Quiz</h1>
                    <div class="performance-badge ${percentage >= 70 ? 'success' : 'warning'}">
                        ${performance}
                    </div>
                </div>

                <div class="results-summary">
                    <div class="result-stat">
                        <div class="stat-value">${correctAnswers}/${totalQuestions}</div>
                        <div class="stat-label">Respuestas Correctas</div>
                    </div>
                    <div class="result-stat">
                        <div class="stat-value">${percentage}%</div>
                        <div class="stat-label">Precisión</div>
                    </div>
                    <div class="result-stat">
                        <div class="stat-value">${totalTime}s</div>
                        <div class="stat-label">Tiempo Total</div>
                    </div>
                    <div class="result-stat">
                        <div class="stat-value">${Math.round(totalTime/totalQuestions)}s</div>
                        <div class="stat-label">Promedio por Pregunta</div>
                    </div>
                </div>

                <div class="detailed-results">
                    <h2>📋 Análisis Detallado</h2>
                    ${this.userAnswers.map((answer, index) => {
                        const question = quiz.questions[index];
                        return `
                            <div class="question-result ${answer.isCorrect ? 'correct' : 'incorrect'}">
                                <div class="question-summary">
                                    <span class="result-icon">${answer.isCorrect ? '✅' : '❌'}</span>
                                    <span class="question-number">Pregunta ${index + 1}</span>
                                    <span class="question-category">${question.categoria} - ${question.dificultad}</span>
                                </div>
                                <div class="question-details">
                                    <p class="question-text">${question.pregunta}</p>
                                    <div class="answer-comparison">
                                        <div class="user-answer">
                                            <strong>Tu respuesta:</strong> ${question.opciones[answer.selectedAnswer]}
                                        </div>
                                        ${!answer.isCorrect ? `
                                            <div class="correct-answer">
                                                <strong>Respuesta correcta:</strong> ${question.opciones[answer.correctAnswer]}
                                            </div>
                                        ` : ''}
                                    </div>
                                    <div class="explanation">
                                        <strong>Explicación:</strong> ${question.explicacion}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="results-actions">
                    <button class="quiz-btn secondary" onclick="quizModule.createQuizSelector()">
                        🔄 Nuevo Quiz
                    </button>
                    <button class="quiz-btn primary" onclick="isoGame.volverAlMenu()">
                        🏠 Volver al Laboratorio
                    </button>
                </div>
            </div>
        `;

        // Actualizar puntuación del juego principal si está disponible
        if (window.isoGame && isoGame.gameState) {
            const bonus = correctAnswers * 10;
            isoGame.gameState.puntuacion += bonus;
            console.log(`🎯 Bonus por quiz: +${bonus} puntos`);
        }
    }

    createQuizSelector() {
        const gameInterface = document.getElementById('game-interface');
        gameInterface.innerHTML = `
            <div class="quiz-selector">
                <div class="selector-header">
                    <h1>🧠 Quiz Interactivo ISO</h1>
                    <p>Pon a prueba tus conocimientos sobre estándares ISO con preguntas basadas en casos reales</p>
                </div>

                <div class="quiz-options">
                    <h2>📚 Categorías Disponibles</h2>
                    <div class="category-grid">
                        <div class="category-card" onclick="quizModule.startQuiz('iso25010')">
                            <div class="category-icon">📊</div>
                            <h3>ISO 25010</h3>
                            <p>Modelo de calidad del producto software</p>
                            <div class="category-stats">
                                ${this.questionsDatabase.iso25010.length} preguntas disponibles
                            </div>
                        </div>

                        <div class="category-card" onclick="quizModule.startQuiz('iso29148')">
                            <div class="category-icon">📋</div>
                            <h3>ISO 29148</h3>
                            <p>Ingeniería de requisitos</p>
                            <div class="category-stats">
                                ${this.questionsDatabase.iso29148.length} preguntas disponibles
                            </div>
                        </div>

                        <div class="category-card" onclick="quizModule.startQuiz('iso9241')">
                            <div class="category-icon">🎨</div>
                            <h3>ISO 9241</h3>
                            <p>Ergonomía e interacción humano-sistema</p>
                            <div class="category-stats">
                                ${this.questionsDatabase.iso9241.length} preguntas disponibles
                            </div>
                        </div>

                        <div class="category-card" onclick="quizModule.startQuiz('all')">
                            <div class="category-icon">🌟</div>
                            <h3>Quiz Mixto</h3>
                            <p>Preguntas de todos los estándares</p>
                            <div class="category-stats">
                                Desafío completo
                            </div>
                        </div>
                    </div>

                    <div class="difficulty-selector">
                        <h2>🎯 Nivel de Dificultad</h2>
                        <div class="difficulty-buttons">
                            <button class="difficulty-btn easy" onclick="quizModule.setDifficulty('facil')">
                                🟢 Fácil
                            </button>
                            <button class="difficulty-btn medium selected" onclick="quizModule.setDifficulty('intermedio')">
                                🟡 Intermedio  
                            </button>
                            <button class="difficulty-btn hard" onclick="quizModule.setDifficulty('avanzado')">
                                🔴 Avanzado
                            </button>
                            <button class="difficulty-btn all" onclick="quizModule.setDifficulty('all')">
                                🌈 Todos los niveles
                            </button>
                        </div>
                    </div>
                </div>

                <div class="quiz-info">
                    <h2>ℹ️ Información del Quiz</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>📝 Preguntas:</strong> 5 por quiz
                        </div>
                        <div class="info-item">
                            <strong>⏱️ Tiempo límite:</strong> 2 minutos
                        </div>
                        <div class="info-item">
                            <strong>📊 Feedback:</strong> Inmediato con explicaciones
                        </div>
                        <div class="info-item">
                            <strong>🎯 Puntuación:</strong> +10 puntos por respuesta correcta
                        </div>
                    </div>
                </div>

                <div class="selector-actions">
                    <button class="quiz-btn secondary" onclick="isoGame.volverAlMenu()">
                        ⬅️ Volver al Laboratorio
                    </button>
                </div>
            </div>
        `;

        this.selectedDifficulty = 'intermedio';
    }

    setDifficulty(difficulty) {
        this.selectedDifficulty = difficulty;
        
        // Actualizar UI
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        event.target.classList.add('selected');
    }

    getCategoryName(category) {
        const names = {
            iso25010: 'ISO 25010 - Calidad del Software',
            iso29148: 'ISO 29148 - Ingeniería de Requisitos',
            iso9241: 'ISO 9241 - Interacción Humano-Sistema',
            all: 'Quiz Mixto ISO'
        };
        return names[category] || category;
    }

    startTimer() {
        let timeLeft = this.timeLimit;
        this.questionStartTime = Date.now();
        
        this.timer = setInterval(() => {
            timeLeft--;
            const timerText = document.getElementById('timer-text');
            if (timerText) {
                timerText.textContent = `${timeLeft}s`;
                
                // Cambiar color cuando queda poco tiempo
                const timerElement = document.getElementById('quiz-timer');
                if (timeLeft <= 30) {
                    timerElement.classList.add('warning');
                }
                if (timeLeft <= 10) {
                    timerElement.classList.add('danger');
                }
            }
            
            if (timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    timeUp() {
        this.stopTimer();
        
        // Si no se ha respondido, marcar como incorrecta
        if (this.tempAnswer === undefined) {
            this.tempAnswer = -1; // Respuesta no válida
        }
        
        // Enviar respuesta automáticamente
        this.submitAnswer();
    }

    endQuiz() {
        this.stopTimer();
        
        if (confirm('¿Estás seguro de que quieres terminar el quiz? Se perderá el progreso.')) {
            this.createQuizSelector();
        } else {
            this.startTimer();
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}

// Instancia global del módulo de quiz
window.quizModule = new ISOQuizModule();