// === ISO INTERACTIVE QUIZ MODULE ===

class ISOQuizModule {
    constructor() {
        this.questionsDatabase = {
            iso25010: [
                {
                    question: "According to ISO 25010, which of the following is NOT a main software quality characteristic?",
                    options: [
                        "Functional Suitability",
                        "Performance Efficiency",
                        "Code Complexity",
                        "Maintainability"
                    ],
                    correctAnswer: 2,
                    explanation: "ISO 25010 defines 8 main characteristics: Functional Suitability, Performance Efficiency, Compatibility, Usability, Reliability, Security, Maintainability, and Portability. 'Code Complexity' is not a main characteristic of the model.",
                    category: "concepts",
                    difficulty: "easy"
                },
                {
                    question: "In an e-commerce system processing 10,000 transactions per second, which Performance Efficiency sub-characteristic would be MOST critical?",
                    options: [
                        "Time Behaviour",
                        "Resource Utilization",  
                        "Capacity",
                        "All are equally important"
                    ],
                    correctAnswer: 0,
                    explanation: "Time Behaviour is critical in high-volume systems like e-commerce, as response time directly impacts user experience and conversions. Users abandon slow sites.",
                    category: "application",
                    difficulty: "intermediate"
                },
                {
                    question: "For a critical hospital system, what would be the MOST appropriate ISO 25010 priority configuration?",
                    options: [
                        "Usability > Performance > Reliability > Security",
                        "Security > Reliability > Functional Suitability > Maintainability", 
                        "Performance > Security > Usability > Compatibility",
                        "Functional Suitability > Usability > Performance > Reliability"
                    ],
                    correctAnswer: 1,
                    explanation: "In critical health systems: Security is vital to protect sensitive medical data, Reliability ensures continuous availability (lives depend on the system), Functional Suitability guarantees all medical functions work correctly, and Maintainability allows safe updates.",
                    category: "analysis",
                    difficulty: "advanced"
                },
                {
                    question: "Which Security sub-characteristic in ISO 25010 directly relates to preventing unauthorized modifications?",
                    options: [
                        "Confidentiality",
                        "Integrity",
                        "Non-repudiation", 
                        "Accountability"
                    ],
                    correctAnswer: 1,
                    explanation: "Integrity refers to the system's ability to prevent unauthorized modifications of data or software. It's fundamental in systems where information alteration can have serious consequences.",
                    category: "concepts",
                    difficulty: "intermediate"
                },
                {
                    question: "A mobile system must run on Android, iOS and Windows Phone. Which ISO 25010 characteristic is priority and why?",
                    options: [
                        "Compatibility - Co-existence to work with other apps",
                        "Portability - Adaptability for multiple platforms",
                        "Usability - Learnability for different interfaces",
                        "Performance Efficiency - Resource Utilization for limited devices"
                    ],
                    correctAnswer: 1,
                    explanation: "Portability-Adaptability is key for multi-platform systems. It allows software adaptation to different operational environments (Android, iOS, Windows Phone) while maintaining consistent functionality.",
                    category: "application", 
                    difficulty: "intermediate"
                }
            ],
            iso29148: [
                {
                    question: "According to ISO 29148, what is the fundamental difference between 'stakeholder requirement' and 'system requirement'?",
                    options: [
                        "Stakeholder requirements are technical, system requirements are functional",
                        "Stakeholder requirements express user needs, system requirements specify what the system must do",
                        "There's no difference, they are synonymous terms",
                        "Stakeholder requirements are optional, system requirements are mandatory"
                    ],
                    correctAnswer: 1,
                    explanation: "ISO 29148 clearly distinguishes: Stakeholder requirements express needs, desires and expectations of interested parties. System requirements specify functions, capabilities and constraints the system must fulfill to satisfy stakeholder requirements.",
                    category: "concepts",
                    difficulty: "intermediate"
                },
                {
                    question: "In a banking system project, which would be a correct example of 'constraint' according to ISO 29148?",
                    options: [
                        "The user must be able to transfer money between accounts",
                        "The system must comply with PCI-DSS regulations",
                        "The system must be easy to use",
                        "The system must process transactions quickly"
                    ],
                    correctAnswer: 1,
                    explanation: "A constraint according to ISO 29148 is a limitation or condition the system must comply with. PCI-DSS compliance is a mandatory regulatory constraint, not a system function but an external limitation that must be respected.",
                    category: "application",
                    difficulty: "intermediate"
                },
                {
                    question: "Which of these elements is NOT part of the 'Requirements Analysis' process according to ISO 29148?",
                    options: [
                        "Define system architecture",
                        "Analyze requirements completeness", 
                        "Evaluate requirements feasibility",
                        "Resolve conflicts between requirements"
                    ],
                    correctAnswer: 0,
                    explanation: "Defining system architecture belongs to design activities, not requirements analysis. ISO 29148 establishes that Requirements Analysis includes: analyzing completeness, consistency, feasibility, verifiability and resolving conflicts.",
                    category: "concepts",
                    difficulty: "advanced"
                },
                {
                    question: "For an IoT agricultural monitoring system, what type of requirement would be 'The system must send alerts when soil humidity drops below 30%'?",
                    options: [
                        "Functional requirement - Function",
                        "Performance requirement - Timing",
                        "Interface requirement - User interface",
                        "Design constraint - Implementation"
                    ],
                    correctAnswer: 0,
                    explanation: "It's a Functional requirement type Function because it describes a specific capability the system must provide: sending alerts based on sensor conditions. It defines WHAT the system must do, not HOW or HOW FAST.",
                    category: "application",
                    difficulty: "intermediate"
                }
            ],
            iso9241: [
                {
                    question: "According to ISO 9241-11, what is the correct definition of Usability?",
                    options: [
                        "The ease with which a user can learn to use a system",
                        "The extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use",
                        "A system's ability to prevent user errors",
                        "The speed with which a user can complete tasks in the system"
                    ],
                    correctAnswer: 1,
                    explanation: "ISO 9241-11 defines usability as the extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency and satisfaction in a specified context of use. This definition includes users, goals, context and three key components.",
                    category: "concepts",
                    difficulty: "easy"
                },
                {
                    question: "In designing a medical emergency application, which ISO 9241-110 principle would be MOST critical?",
                    options: [
                        "Suitability for individualization",
                        "Error tolerance",
                        "Conformity with user expectations",
                        "Self-descriptiveness"
                    ],
                    correctAnswer: 1,
                    explanation: "Error tolerance is critical in emergency medical applications where errors can have fatal consequences. The system must prevent errors, detect them when they occur and allow easy and quick correction, especially under pressure and stress.",
                    category: "application",
                    difficulty: "advanced"
                },
                {
                    question: "Which of these metrics is NOT directly related to 'efficiency' according to ISO 9241-11?",
                    options: [
                        "Time to complete a task",
                        "Number of clicks/touches required",
                        "User satisfaction level",
                        "Human and technological resources employed"
                    ],
                    correctAnswer: 2,
                    explanation: "User satisfaction is a separate component of usability in ISO 9241-11. Efficiency refers to resources employed in relation to accuracy and completeness of achieved goals (time, clicks, physical/mental effort).",
                    category: "concepts",
                    difficulty: "intermediate"
                }
            ]
        };

        this.activeQuiz = null;
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.timeLimit = 120; // 2 minutes by default
        this.timer = null;
    }

    startQuiz(category, difficulty = 'all') {
        let questions = [];
        
        if (category === 'all') {
            // Mix questions from all categories
            Object.values(this.questionsDatabase).forEach(categoryQuestions => {
                questions = questions.concat(categoryQuestions);
            });
        } else {
            questions = this.questionsDatabase[category] || [];
        }

        // Filter by difficulty if specified
        if (difficulty !== 'all') {
            questions = questions.filter(q => q.dificultad === difficulty);
        }

        // Randomly shuffle questions
        questions = this.shuffleArray([...questions]);
        
        // Take only 5 questions for the quiz
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
                        <h1>🧠 Interactive ISO Quiz</h1>
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
                    <span class="progress-text">Question ${this.currentQuestion + 1} of ${quiz.questions.length}</span>
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
                            🚪 Exit Quiz
                        </button>
                        <button class="quiz-btn primary" onclick="quizModule.submitAnswer()" id="submit-btn" disabled>
                            ${this.currentQuestion < quiz.questions.length - 1 ? '➡️ Next' : '🏁 Finish'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    selectAnswer(answerIndex) {
        // Remove previous selection
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.classList.remove('selected');
        });

        // Select new option
        document.querySelector(`.quiz-option[data-index="${answerIndex}"]`).classList.add('selected');
        
        // Enable submit button
        document.getElementById('submit-btn').disabled = false;
        
        // Save answer temporarily
        this.tempAnswer = answerIndex;
    }

    submitAnswer() {
        if (this.tempAnswer === undefined) return;

        const question = this.activeQuiz.questions[this.currentQuestion];
        const isCorrect = this.tempAnswer === question.respuestaCorrecta;
        
        // Save user answer
        this.userAnswers.push({
            questionIndex: this.currentQuestion,
            selectedAnswer: this.tempAnswer,
            correctAnswer: question.respuestaCorrecta,
            isCorrect: isCorrect,
            timeSpent: Date.now() - this.questionStartTime || 0
        });

        // Show immediate feedback
        this.showQuestionFeedback(question, this.tempAnswer);
    }

    showQuestionFeedback(question, userAnswer) {
        const isCorrect = userAnswer === question.respuestaCorrecta;
        
        // Color the options
        document.querySelectorAll('.quiz-option').forEach((option, index) => {
            option.style.pointerEvents = 'none';
            
            if (index === question.respuestaCorrecta) {
                option.classList.add('correct');
            } else if (index === userAnswer && !isCorrect) {
                option.classList.add('incorrect');
            }
        });

        // Show explanation
        const container = document.querySelector('.question-container');
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = `question-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackDiv.innerHTML = `
            <div class="feedback-header">
                <span class="feedback-icon">${isCorrect ? '✅' : '❌'}</span>
                <span class="feedback-text">${isCorrect ? 'Correct!' : 'Incorrect'}</span>
            </div>
            <div class="feedback-explanation">
                <strong>Explanation:</strong> ${question.explicacion}
            </div>
        `;
        
        container.appendChild(feedbackDiv);

        // Change button to continue
        const submitBtn = document.getElementById('submit-btn');
        submitBtn.textContent = this.currentQuestion < this.activeQuiz.questions.length - 1 ? '➡️ Next Question' : '🏁 View Results';
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
        if (percentage >= 90) performance = '🏆 EXCELLENT';
        else if (percentage >= 70) performance = '✅ GOOD'; 
        else if (percentage >= 50) performance = '⚠️ FAIR';
        else performance = '❌ NEEDS IMPROVEMENT';

        const gameInterface = document.getElementById('game-interface');
        gameInterface.innerHTML = `
            <div class="quiz-results">
                <div class="results-header">
                    <h1>📊 Quiz Results</h1>
                    <div class="performance-badge ${percentage >= 70 ? 'success' : 'warning'}">
                        ${performance}
                    </div>
                </div>

                <div class="results-summary">
                    <div class="result-stat">
                        <div class="stat-value">${correctAnswers}/${totalQuestions}</div>
                        <div class="stat-label">Correct Answers</div>
                    </div>
                    <div class="result-stat">
                        <div class="stat-value">${percentage}%</div>
                        <div class="stat-label">Accuracy</div>
                    </div>
                    <div class="result-stat">
                        <div class="stat-value">${totalTime}s</div>
                        <div class="stat-label">Total Time</div>
                    </div>
                    <div class="result-stat">
                        <div class="stat-value">${Math.round(totalTime/totalQuestions)}s</div>
                        <div class="stat-label">Average per Question</div>
                    </div>
                </div>

                <div class="detailed-results">
                    <h2>📋 Detailed Analysis</h2>
                    ${this.userAnswers.map((answer, index) => {
                        const question = quiz.questions[index];
                        return `
                            <div class="question-result ${answer.isCorrect ? 'correct' : 'incorrect'}">
                                <div class="question-summary">
                                    <span class="result-icon">${answer.isCorrect ? '✅' : '❌'}</span>
                                    <span class="question-number">Question ${index + 1}</span>
                                    <span class="question-category">${question.categoria} - ${question.dificultad}</span>
                                </div>
                                <div class="question-details">
                                    <p class="question-text">${question.pregunta}</p>
                                    <div class="answer-comparison">
                                        <div class="user-answer">
                                            <strong>Your answer:</strong> ${question.opciones[answer.selectedAnswer]}
                                        </div>
                                        ${!answer.isCorrect ? `
                                            <div class="correct-answer">
                                                <strong>Correct answer:</strong> ${question.opciones[answer.correctAnswer]}
                                            </div>
                                        ` : ''}
                                    </div>
                                    <div class="explanation">
                                        <strong>Explanation:</strong> ${question.explicacion}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <div class="results-actions">
                    <button class="quiz-btn secondary" onclick="quizModule.createQuizSelector()">
                        🔄 New Quiz
                    </button>
                    <button class="quiz-btn primary" onclick="isoGame.volverAlMenu()">
                        🏠 Back to Laboratory
                    </button>
                </div>
            </div>
        `;

        // Update main game score if available
        if (window.isoGame && isoGame.gameState) {
            const bonus = correctAnswers * 10;
            isoGame.gameState.puntuacion += bonus;
            console.log(`🎯 Quiz bonus: +${bonus} points`);
        }
    }

    createQuizSelector() {
        const gameInterface = document.getElementById('game-interface');
        gameInterface.innerHTML = `
            <div class="quiz-selector">
                <div class="selector-header">
                    <h1>🧠 Interactive ISO Quiz</h1>
                    <p>Test your knowledge of ISO standards with questions based on real cases</p>
                </div>

                <div class="quiz-options">
                    <h2>📚 Available Categories</h2>
                    <div class="category-grid">
                        <div class="category-card" onclick="quizModule.startQuiz('iso25010')">
                            <div class="category-icon">📊</div>
                            <h3>ISO 25010</h3>
                            <p>Software product quality model</p>
                            <div class="category-stats">
                                ${this.questionsDatabase.iso25010.length} questions available
                            </div>
                        </div>

                        <div class="category-card" onclick="quizModule.startQuiz('iso29148')">
                            <div class="category-icon">📋</div>
                            <h3>ISO 29148</h3>
                            <p>Requirements engineering</p>
                            <div class="category-stats">
                                ${this.questionsDatabase.iso29148.length} questions available
                            </div>
                        </div>

                        <div class="category-card" onclick="quizModule.startQuiz('iso9241')">
                            <div class="category-icon">🎨</div>
                            <h3>ISO 9241</h3>
                            <p>Ergonomics and human-system interaction</p>
                            <div class="category-stats">
                                ${this.questionsDatabase.iso9241.length} questions available
                            </div>
                        </div>

                        <div class="category-card" onclick="quizModule.startQuiz('all')">
                            <div class="category-icon">🌟</div>
                            <h3>Mixed Quiz</h3>
                            <p>Questions from all standards</p>
                            <div class="category-stats">
                                Complete challenge
                            </div>
                        </div>
                    </div>

                    <div class="difficulty-selector">
                        <h2>🎯 Difficulty Level</h2>
                        <div class="difficulty-buttons">
                            <button class="difficulty-btn easy" onclick="quizModule.setDifficulty('easy')">
                                🟢 Easy
                            </button>
                            <button class="difficulty-btn medium selected" onclick="quizModule.setDifficulty('intermediate')">
                                🟡 Intermediate  
                            </button>
                            <button class="difficulty-btn hard" onclick="quizModule.setDifficulty('advanced')">
                                🔴 Advanced
                            </button>
                            <button class="difficulty-btn all" onclick="quizModule.setDifficulty('all')">
                                🌈 All levels
                            </button>
                        </div>
                    </div>
                </div>

                <div class="quiz-info">
                    <h2>ℹ️ Quiz Information</h2>
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>📝 Questions:</strong> 5 per quiz
                        </div>
                        <div class="info-item">
                            <strong>⏱️ Time limit:</strong> 2 minutes
                        </div>
                        <div class="info-item">
                            <strong>📊 Feedback:</strong> Immediate with explanations
                        </div>
                        <div class="info-item">
                            <strong>🎯 Scoring:</strong> +10 points per correct answer
                        </div>
                    </div>
                </div>

                <div class="selector-actions">
                    <button class="quiz-btn secondary" onclick="isoGame.volverAlMenu()">
                        ⬅️ Back to Laboratory
                    </button>
                </div>
            </div>
        `;

        this.selectedDifficulty = 'intermediate';
    }

    setDifficulty(difficulty) {
        this.selectedDifficulty = difficulty;
        
        // Update UI
        document.querySelectorAll('.difficulty-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        event.target.classList.add('selected');
    }

    getCategoryName(category) {
        const names = {
            iso25010: 'ISO 25010 - Software Quality',
            iso29148: 'ISO 29148 - Requirements Engineering',
            iso9241: 'ISO 9241 - Human-System Interaction',
            all: 'Mixed ISO Quiz'
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
                
                // Change color when time is running out
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
        
        // If not answered, mark as incorrect
        if (this.tempAnswer === undefined) {
            this.tempAnswer = -1; // Invalid answer
        }
        
        // Submit answer automatically
        this.submitAnswer();
    }

    endQuiz() {
        this.stopTimer();
        
        if (confirm('Are you sure you want to end the quiz? Progress will be lost.')) {
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

// Global quiz module instance
window.quizModule = new ISOQuizModule();
