// === LABORATORIO ISO - SISTEMA DE JUEGO INTERACTIVO ===

// === CONFIGURACIÓN DEL JUEGO ===
const GameConfig = {
    currentView: 'view-cycle',
    currentScenario: 0,
    playerScore: 0,
    playerLevel: 1,
    experiencePoints: 0,
    achievements: [],
    challengesCompleted: [],
    currentChallenge: null,
    gameState: 'menu' // menu, playing, challenge, results
};

// === DATOS DEL JUEGO ===
const GameData = {
    scenarios: {
        0: {
            name: 'E-commerce Platform',
            icon: '🛍️',
            description: 'Startup tecnológica que debe escalar de 1,000 a 1M usuarios',
            difficulty: 'Intermedio',
            budget: 500000,
            timeline: 18,
            context: 'Tu startup ha conseguido inversión Serie A. Tienes 18 meses para crear una plataforma que compita con Amazon en tu nicho. ¿Cómo distribuyes recursos?',
            challenges: [
                'Arquitectura para escalar rápidamente',
                'Product-market fit incierto',
                'Competencia con gigantes establecidos',
                'Recursos limitados de desarrollo'
            ],
            successMetrics: {
                'performance': { target: 90, current: 0 },
                'scalability': { target: 95, current: 0 },
                'usability': { target: 85, current: 0 },
                'security': { target: 80, current: 0 }
            },
            gameElements: {
                decisions: [
                    {
                        id: 'architecture',
                        question: '¿Qué arquitectura eliges para soportar el crecimiento?',
                        options: [
                            { text: 'Monolito simple para MVP rápido', score: -10, feedback: 'Riesgo alto de problemas de escalabilidad' },
                            { text: 'Microservicios desde el inicio', score: -5, feedback: 'Sobrecarga de complejidad para un MVP' },
                            { text: 'Monolito modular con plan de microservicios', score: 15, feedback: '¡Excelente! Equilibrio perfecto' },
                            { text: 'Serverless completo', score: 5, feedback: 'Bueno para escalar, pero costoso' }
                        ]
                    },
                    {
                        id: 'testing',
                        question: '¿Cómo implementas la estrategia de testing?',
                        options: [
                            { text: 'Solo testing manual', score: -15, feedback: 'Muy arriesgado para un startup' },
                            { text: 'Testing automatizado completo desde día 1', score: -5, feedback: 'Ralentiza mucho el MVP' },
                            { text: 'Tests unitarios críticos + E2E para flujos principales', score: 15, feedback: '¡Perfecto! Cobertura inteligente' },
                            { text: 'Solo tests de integración', score: 0, feedback: 'Insuficiente para detectar bugs' }
                        ]
                    }
                ]
            }
        },
        1: {
            name: 'Sistema Hospitalario',
            icon: '🏥',
            description: 'Sistema crítico que maneja vidas humanas',
            difficulty: 'Avanzado',
            budget: 2000000,
            timeline: 36,
            context: 'Hospital de 500 camas necesita reemplazar sistema legacy. Cero tolerancia a fallos, regulaciones estrictas.',
            challenges: [
                'Disponibilidad 99.99% requerida',
                'Cumplimiento HIPAA y regulaciones',
                'Integración con 50+ sistemas legacy',
                'Entrenamiento de 1,200 profesionales'
            ],
            successMetrics: {
                'reliability': { target: 99, current: 0 },
                'security': { target: 98, current: 0 },
                'compliance': { target: 100, current: 0 },
                'usability': { target: 80, current: 0 }
            },
            gameElements: {
                decisions: [
                    {
                        id: 'deployment',
                        question: '¿Cómo manejas el deployment sin afectar operaciones críticas?',
                        options: [
                            { text: 'Deployment nocturno de fin de semana', score: -10, feedback: 'Emergencias médicas no esperan horarios' },
                            { text: 'Blue-green deployment con rollback automático', score: 20, feedback: '¡Excelente! Máxima seguridad' },
                            { text: 'Rolling deployment gradual', score: 10, feedback: 'Bueno, pero riesgo durante transición' },
                            { text: 'Cambio completo en mantenimiento programado', score: -5, feedback: 'Muy arriesgado para sistema crítico' }
                        ]
                    }
                ]
            }
        }
    },

    challenges: {
        'iso25010_quiz': {
            title: '🎯 Maestro de Calidad ISO 25010',
            description: 'Demuestra tu dominio de las 8 características de calidad',
            type: 'quiz',
            timeLimit: 300, // 5 minutos
            questions: [
                {
                    question: '¿Cuál característica es MÁS importante para un sistema de trading financiero?',
                    options: [
                        { text: 'Usabilidad', isCorrect: false },
                        { text: 'Eficiencia de Desempeño', isCorrect: true },
                        { text: 'Portabilidad', isCorrect: false },
                        { text: 'Mantenibilidad', isCorrect: false }
                    ],
                    explanation: 'En trading, microsegundos de latencia significan millones en pérdidas/ganancias',
                    points: 10
                },
                {
                    question: '¿Qué sub-característica de Seguridad es crítica en aplicaciones médicas?',
                    options: [
                        { text: 'Autenticidad', isCorrect: false },
                        { text: 'Confidencialidad', isCorrect: true },
                        { text: 'No repudio', isCorrect: false },
                        { text: 'Responsabilidad', isCorrect: false }
                    ],
                    explanation: 'Los datos médicos requieren máxima protección de privacidad (HIPAA)',
                    points: 15
                }
            ]
        },

        'requirements_builder': {
            title: '🏗️ Constructor de Requisitos',
            description: 'Crea requisitos perfectos siguiendo ISO 29148',
            type: 'builder',
            scenario: 'mobile_app',
            tasks: [
                {
                    id: 'functional_req',
                    instruction: 'Escribe un requisito funcional para login de usuario',
                    template: 'El sistema debe [ACCIÓN] cuando [CONDICIÓN] para que [BENEFICIO]',
                    validation: {
                        mustInclude: ['autenticar', 'usuario', 'credenciales'],
                        mustAvoid: ['tal vez', 'posiblemente', 'algunos']
                    },
                    points: 20
                }
            ]
        },

        'usability_heuristics': {
            title: '🎨 Detective de UX',
            description: 'Encuentra problemas de usabilidad usando principios ISO 9241',
            type: 'investigation',
            scenarios: [
                {
                    interface: 'mobile_checkout',
                    description: 'Analiza esta interfaz de checkout móvil',
                    problems: [
                        { type: 'visibility', description: 'Estado del sistema no claro', points: 10 },
                        { type: 'error_prevention', description: 'Sin validación en tiempo real', points: 15 },
                        { type: 'consistency', description: 'Botones con estilos inconsistentes', points: 5 }
                    ]
                }
            ]
        }
    },

    achievements: {
        'first_decision': { name: '🎯 Primera Decisión', description: 'Toma tu primera decisión arquitectural', points: 5 },
        'perfect_score': { name: '💯 Puntuación Perfecta', description: 'Consigue 100% en un desafío', points: 25 },
        'iso_master': { name: '🏆 Maestro ISO', description: 'Completa todos los estándares', points: 50 },
        'speed_demon': { name: '⚡ Demonio de Velocidad', description: 'Completa un quiz en menos de 2 minutos', points: 15 }
    }
};

// === MOTOR DEL JUEGO ===
const GameEngine = {
    init: () => {
        console.log('🎮 Iniciando Motor de Juego...');
        GameEngine.loadGameState();
        GameEngine.setupGameUI();
        GameEngine.startGame();
    },

    loadGameState: () => {
        const savedGame = localStorage.getItem('iso-game-state');
        if (savedGame) {
            Object.assign(GameConfig, JSON.parse(savedGame));
        }
    },

    saveGameState: () => {
        localStorage.setItem('iso-game-state', JSON.stringify(GameConfig));
    },

    startGame: () => {
        GameConfig.gameState = 'playing';
        GameEngine.renderGameboard();
        GameEngine.updatePlayerStats();
    },

    renderGameboard: () => {
        const gameContainer = document.getElementById('game-container');
        if (!gameContainer) return;

        gameContainer.innerHTML = `
            <div class="game-interface">
                <div class="player-hud">
                    <div class="player-stats">
                        <div class="stat-item">
                            <span class="stat-icon">🏆</span>
                            <span class="stat-label">Score</span>
                            <span class="stat-value" id="player-score">${GameConfig.playerScore}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">⭐</span>
                            <span class="stat-label">Nivel</span>
                            <span class="stat-value" id="player-level">${GameConfig.playerLevel}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">💎</span>
                            <span class="stat-label">XP</span>
                            <span class="stat-value" id="player-xp">${GameConfig.experiencePoints}</span>
                        </div>
                    </div>
                    
                    <div class="progress-container">
                        <div class="xp-bar">
                            <div class="xp-fill" style="width: ${GameEngine.calculateXPProgress()}%"></div>
                        </div>
                        <span class="progress-text">${GameEngine.getXPToNextLevel()} XP para siguiente nivel</span>
                    </div>
                </div>

                <div class="scenario-selection">
                    <h2>🎯 Selecciona tu Misión</h2>
                    <div class="scenarios-grid">
                        ${Object.entries(GameData.scenarios).map(([id, scenario]) => `
                            <div class="scenario-card ${GameConfig.currentScenario == id ? 'selected' : ''}" 
                                 onclick="GameEngine.selectScenario(${id})">
                                <div class="scenario-header">
                                    <span class="scenario-icon">${scenario.icon}</span>
                                    <h3>${scenario.name}</h3>
                                    <span class="difficulty ${scenario.difficulty.toLowerCase()}">${scenario.difficulty}</span>
                                </div>
                                
                                <p class="scenario-desc">${scenario.description}</p>
                                
                                <div class="scenario-stats">
                                    <div class="stat-row">
                                        <span class="stat-label">💰 Presupuesto:</span>
                                        <span class="stat-value">$${(scenario.budget/1000)}K</span>
                                    </div>
                                    <div class="stat-row">
                                        <span class="stat-label">⏰ Tiempo:</span>
                                        <span class="stat-value">${scenario.timeline} meses</span>
                                    </div>
                                </div>
                                
                                <button class="scenario-btn">
                                    ${GameConfig.challengesCompleted.includes(id) ? '✅ Completado' : '🚀 Jugar'}
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="challenges-section">
                    <h2>🎮 Desafíos Disponibles</h2>
                    <div class="challenges-grid">
                        ${Object.entries(GameData.challenges).map(([id, challenge]) => `
                            <div class="challenge-card" onclick="GameEngine.startChallenge('${id}')">
                                <h3>${challenge.title}</h3>
                                <p>${challenge.description}</p>
                                <div class="challenge-meta">
                                    <span class="challenge-type">${challenge.type}</span>
                                    ${challenge.timeLimit ? `<span class="time-limit">⏱️ ${Math.floor(challenge.timeLimit/60)}min</span>` : ''}
                                </div>
                                <button class="challenge-btn">🎯 Comenzar</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    selectScenario: (scenarioId) => {
        GameConfig.currentScenario = parseInt(scenarioId);
        GameEngine.saveGameState();
        GameEngine.startScenarioGame(scenarioId);
    },

    startScenarioGame: (scenarioId) => {
        const scenario = GameData.scenarios[scenarioId];
        const gameContainer = document.getElementById('game-container');
        
        gameContainer.innerHTML = `
            <div class="scenario-game">
                <div class="game-header">
                    <button class="back-btn" onclick="GameEngine.renderGameboard()">⬅️ Volver</button>
                    <h1>${scenario.icon} ${scenario.name}</h1>
                    <div class="scenario-progress">
                        <span>Progreso: <span id="scenario-progress">0</span>/${scenario.gameElements.decisions.length}</span>
                    </div>
                </div>

                <div class="scenario-context">
                    <div class="context-card">
                        <h3>📋 Situación</h3>
                        <p>${scenario.context}</p>
                        
                        <div class="resources">
                            <div class="resource-item">
                                <span class="resource-icon">💰</span>
                                <span class="resource-label">Presupuesto:</span>
                                <span class="resource-value">$${(scenario.budget/1000)}K</span>
                            </div>
                            <div class="resource-item">
                                <span class="resource-icon">⏰</span>
                                <span class="resource-label">Tiempo:</span>
                                <span class="resource-value">${scenario.timeline} meses</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="objectives-panel">
                    <h3>🎯 Objetivos de Calidad</h3>
                    <div class="metrics-grid">
                        ${Object.entries(scenario.successMetrics).map(([metric, data]) => `
                            <div class="metric-objective">
                                <span class="metric-name">${GameEngine.getMetricDisplayName(metric)}</span>
                                <div class="metric-progress-bar">
                                    <div class="metric-current" style="width: ${(data.current/data.target)*100}%"></div>
                                </div>
                                <span class="metric-target">${data.current}/${data.target}%</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="decision-container" id="decision-container">
                    <!-- Las decisiones se cargan dinámicamente -->
                </div>
            </div>
        `;

        GameEngine.loadFirstDecision(scenarioId);
    },

    loadFirstDecision: (scenarioId) => {
        const scenario = GameData.scenarios[scenarioId];
        if (scenario.gameElements.decisions.length > 0) {
            GameEngine.showDecision(scenarioId, 0);
        }
    },

    showDecision: (scenarioId, decisionIndex) => {
        const scenario = GameData.scenarios[scenarioId];
        const decision = scenario.gameElements.decisions[decisionIndex];
        const container = document.getElementById('decision-container');
        
        container.innerHTML = `
            <div class="decision-card">
                <div class="decision-header">
                    <h2>🤔 Decisión ${decisionIndex + 1}/${scenario.gameElements.decisions.length}</h2>
                    <p class="decision-question">${decision.question}</p>
                </div>
                
                <div class="options-grid">
                    ${decision.options.map((option, index) => `
                        <button class="option-btn" onclick="GameEngine.makeDecision(${scenarioId}, ${decisionIndex}, ${index})">
                            <span class="option-text">${option.text}</span>
                            <span class="option-indicator">→</span>
                        </button>
                    `).join('')}
                </div>

                <div class="decision-help">
                    <p>💡 <strong>Tip:</strong> Piensa en los principios ISO 25010. ¿Qué características de calidad son más importantes para este escenario?</p>
                </div>
            </div>
        `;
    },

    makeDecision: (scenarioId, decisionIndex, optionIndex) => {
        const scenario = GameData.scenarios[scenarioId];
        const decision = scenario.gameElements.decisions[decisionIndex];
        const option = decision.options[optionIndex];
        
        // Calcular puntuación
        const points = Math.max(0, option.score);
        GameConfig.playerScore += points;
        GameConfig.experiencePoints += points;
        
        // Mostrar resultado
        GameEngine.showDecisionResult(scenarioId, decisionIndex, optionIndex, points);
        
        // Actualizar progreso
        document.getElementById('scenario-progress').textContent = decisionIndex + 1;
        
        GameEngine.saveGameState();
    },

    showDecisionResult: (scenarioId, decisionIndex, optionIndex, points) => {
        const scenario = GameData.scenarios[scenarioId];
        const decision = scenario.gameElements.decisions[decisionIndex];
        const option = decision.options[optionIndex];
        
        const container = document.getElementById('decision-container');
        const isGoodChoice = option.score > 5;
        
        container.innerHTML = `
            <div class="decision-result ${isGoodChoice ? 'success' : 'warning'}">
                <div class="result-header">
                    <div class="result-icon">${isGoodChoice ? '✅' : '⚠️'}</div>
                    <h2>${isGoodChoice ? '¡Excelente Decisión!' : 'Decisión Arriesgada'}</h2>
                    <div class="points-earned">+${points} puntos</div>
                </div>
                
                <div class="result-content">
                    <div class="chosen-option">
                        <h3>Tu elección:</h3>
                        <p>"${option.text}"</p>
                    </div>
                    
                    <div class="feedback">
                        <h3>Feedback del Experto:</h3>
                        <p>${option.feedback}</p>
                    </div>
                    
                    ${option.score > 10 ? `
                        <div class="bonus-info">
                            <h3>🎓 Aprende más:</h3>
                            <p>Esta decisión demuestra comprensión de los principios de ${GameEngine.getRelevantISOStandard(decision.id)} para sistemas ${scenario.name.toLowerCase()}.</p>
                        </div>
                    ` : ''}
                </div>
                
                <div class="result-actions">
                    ${decisionIndex < scenario.gameElements.decisions.length - 1 ? 
                        `<button class="continue-btn" onclick="GameEngine.showDecision(${scenarioId}, ${decisionIndex + 1})">
                            Siguiente Decisión →
                        </button>` :
                        `<button class="complete-btn" onclick="GameEngine.completeScenario(${scenarioId})">
                            🏆 Finalizar Escenario
                        </button>`
                    }
                </div>
            </div>
        `;
        
        // Actualizar HUD
        GameEngine.updatePlayerStats();
    },

    startChallenge: (challengeId) => {
        const challenge = GameData.challenges[challengeId];
        GameConfig.currentChallenge = challengeId;
        GameConfig.gameState = 'challenge';
        
        const gameContainer = document.getElementById('game-container');
        
        if (challenge.type === 'quiz') {
            GameEngine.renderQuizChallenge(challenge);
        } else if (challenge.type === 'builder') {
            GameEngine.renderBuilderChallenge(challenge);
        } else if (challenge.type === 'investigation') {
            GameEngine.renderInvestigationChallenge(challenge);
        }
    },

    renderQuizChallenge: (challenge) => {
        const gameContainer = document.getElementById('game-container');
        
        gameContainer.innerHTML = `
            <div class="quiz-challenge">
                <div class="challenge-header">
                    <button class="back-btn" onclick="GameEngine.renderGameboard()">⬅️ Volver</button>
                    <h1>${challenge.title}</h1>
                    <div class="timer" id="quiz-timer">${Math.floor(challenge.timeLimit/60)}:00</div>
                </div>
                
                <div class="challenge-description">
                    <p>${challenge.description}</p>
                </div>
                
                <div class="quiz-container" id="quiz-container">
                    <!-- Las preguntas se cargan aquí -->
                </div>
                
                <div class="quiz-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" id="quiz-progress" style="width: 0%"></div>
                    </div>
                    <span class="progress-text">Pregunta <span id="current-question">1</span> de ${challenge.questions.length}</span>
                </div>
            </div>
        `;
        
        GameEngine.startQuizTimer(challenge.timeLimit);
        GameEngine.showQuizQuestion(challenge, 0);
    },

    showQuizQuestion: (challenge, questionIndex) => {
        const question = challenge.questions[questionIndex];
        const container = document.getElementById('quiz-container');
        
        container.innerHTML = `
            <div class="quiz-question">
                <h2>${question.question}</h2>
                
                <div class="quiz-options">
                    ${question.options.map((option, index) => `
                        <button class="quiz-option" onclick="GameEngine.answerQuestion(${questionIndex}, ${index})">
                            ${option.text}
                        </button>
                    `).join('')}
                </div>
                
                <div class="question-help">
                    <p>💡 Piensa cuidadosamente. Esta pregunta vale <strong>${question.points} puntos</strong>.</p>
                </div>
            </div>
        `;
        
        // Actualizar progreso
        document.getElementById('current-question').textContent = questionIndex + 1;
        document.getElementById('quiz-progress').style.width = `${((questionIndex + 1) / challenge.questions.length) * 100}%`;
    },

    answerQuestion: (questionIndex, optionIndex) => {
        const challenge = GameData.challenges[GameConfig.currentChallenge];
        const question = challenge.questions[questionIndex];
        const option = question.options[optionIndex];
        
        const isCorrect = option.isCorrect;
        const points = isCorrect ? question.points : 0;
        
        if (isCorrect) {
            GameConfig.playerScore += points;
            GameConfig.experiencePoints += points;
        }
        
        // Mostrar resultado de la pregunta
        GameEngine.showQuestionResult(challenge, questionIndex, optionIndex, isCorrect, points);
    },

    showQuestionResult: (challenge, questionIndex, optionIndex, isCorrect, points) => {
        const question = challenge.questions[questionIndex];
        const container = document.getElementById('quiz-container');
        
        container.innerHTML = `
            <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="result-icon">${isCorrect ? '✅' : '❌'}</div>
                <h2>${isCorrect ? '¡Correcto!' : 'Incorrecto'}</h2>
                <div class="points">${isCorrect ? `+${points} puntos` : '0 puntos'}</div>
                
                <div class="explanation">
                    <h3>Explicación:</h3>
                    <p>${question.explanation}</p>
                </div>
                
                <div class="result-actions">
                    ${questionIndex < challenge.questions.length - 1 ? 
                        `<button class="continue-btn" onclick="GameEngine.showQuizQuestion(GameData.challenges['${GameConfig.currentChallenge}'], ${questionIndex + 1})">
                            Siguiente Pregunta →
                        </button>` :
                        `<button class="complete-btn" onclick="GameEngine.completeChallenge()">
                            🏆 Completar Quiz
                        </button>`
                    }
                </div>
            </div>
        `;
        
        GameEngine.updatePlayerStats();
    },

    // Funciones auxiliares
    calculateXPProgress: () => {
        const currentLevelXP = (GameConfig.playerLevel - 1) * 100;
        const nextLevelXP = GameConfig.playerLevel * 100;
        const progress = ((GameConfig.experiencePoints - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
        return Math.min(100, Math.max(0, progress));
    },

    getXPToNextLevel: () => {
        const nextLevelXP = GameConfig.playerLevel * 100;
        return Math.max(0, nextLevelXP - GameConfig.experiencePoints);
    },

    updatePlayerStats: () => {
        const scoreEl = document.getElementById('player-score');
        const levelEl = document.getElementById('player-level');
        const xpEl = document.getElementById('player-xp');
        
        if (scoreEl) scoreEl.textContent = GameConfig.playerScore;
        if (levelEl) levelEl.textContent = GameConfig.playerLevel;
        if (xpEl) xpEl.textContent = GameConfig.experiencePoints;
        
        // Verificar subida de nivel
        if (GameConfig.experiencePoints >= GameConfig.playerLevel * 100) {
            GameEngine.levelUp();
        }
    },

    levelUp: () => {
        GameConfig.playerLevel++;
        GameEngine.showLevelUpNotification();
        GameEngine.saveGameState();
    },

    showLevelUpNotification: () => {
        const notification = document.createElement('div');
        notification.className = 'level-up-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h2>🎉 ¡Subiste de Nivel!</h2>
                <p>Ahora eres <strong>Nivel ${GameConfig.playerLevel}</strong></p>
                <p>¡Sigue así, experto en ISO!</p>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    },

    getMetricDisplayName: (metric) => {
        const names = {
            'performance': 'Rendimiento',
            'scalability': 'Escalabilidad', 
            'usability': 'Usabilidad',
            'security': 'Seguridad',
            'reliability': 'Confiabilidad',
            'compliance': 'Cumplimiento'
        };
        return names[metric] || metric;
    },

    getRelevantISOStandard: (decisionId) => {
        if (decisionId.includes('architecture') || decisionId.includes('testing')) {
            return 'ISO 25010 (Calidad de Software)';
        } else if (decisionId.includes('requirements')) {
            return 'ISO 29148 (Ingeniería de Requisitos)';
        } else {
            return 'ISO 9241 (Usabilidad)';
        }
    },

    startQuizTimer: (timeLimit) => {
        let timeLeft = timeLimit;
        const timer = document.getElementById('quiz-timer');
        
        const countdown = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(countdown);
                GameEngine.timeUp();
            }
        }, 1000);
        
        GameConfig.currentTimer = countdown;
    },

    timeUp: () => {
        alert('⏰ ¡Tiempo agotado! El quiz se completará automáticamente.');
        GameEngine.completeChallenge();
    },

    completeChallenge: () => {
        if (GameConfig.currentTimer) {
            clearInterval(GameConfig.currentTimer);
        }
        
        GameConfig.challengesCompleted.push(GameConfig.currentChallenge);
        GameConfig.currentChallenge = null;
        GameConfig.gameState = 'playing';
        
        GameEngine.showCompletionReward();
        GameEngine.saveGameState();
    },

    completeScenario: (scenarioId) => {
        GameConfig.challengesCompleted.push(`scenario_${scenarioId}`);
        
        // Bonus por completar escenario
        const bonusPoints = 50;
        GameConfig.playerScore += bonusPoints;
        GameConfig.experiencePoints += bonusPoints;
        
        GameEngine.showScenarioCompletion(scenarioId, bonusPoints);
        GameEngine.saveGameState();
    },

    showCompletionReward: () => {
        const gameContainer = document.getElementById('game-container');
        gameContainer.innerHTML = `
            <div class="completion-reward">
                <div class="reward-content">
                    <h1>🎉 ¡Desafío Completado!</h1>
                    <div class="reward-stats">
                        <div class="stat-item">
                            <span class="stat-icon">🏆</span>
                            <span class="stat-value">+25 puntos bonus</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-icon">⭐</span>
                            <span class="stat-value">Experiencia ganada</span>
                        </div>
                    </div>
                    <button class="continue-btn" onclick="GameEngine.renderGameboard()">
                        🎮 Continuar Jugando
                    </button>
                </div>
            </div>
        `;
        
        GameConfig.playerScore += 25;
        GameConfig.experiencePoints += 25;
        GameEngine.updatePlayerStats();
    },

    showScenarioCompletion: (scenarioId, bonusPoints) => {
        const scenario = GameData.scenarios[scenarioId];
        const gameContainer = document.getElementById('game-container');
        
        gameContainer.innerHTML = `
            <div class="scenario-completion">
                <div class="completion-content">
                    <h1>🏆 ¡Escenario Completado!</h1>
                    <h2>${scenario.icon} ${scenario.name}</h2>
                    
                    <div class="completion-stats">
                        <div class="stat-card">
                            <span class="stat-icon">🏆</span>
                            <span class="stat-label">Puntos Bonus</span>
                            <span class="stat-value">+${bonusPoints}</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-icon">📊</span>
                            <span class="stat-label">Puntuación Total</span>
                            <span class="stat-value">${GameConfig.playerScore}</span>
                        </div>
                        <div class="stat-card">
                            <span class="stat-icon">⭐</span>
                            <span class="stat-label">Nivel Actual</span>
                            <span class="stat-value">${GameConfig.playerLevel}</span>
                        </div>
                    </div>
                    
                    <div class="completion-message">
                        <p>¡Excelente trabajo! Has demostrado un sólido entendimiento de los estándares ISO aplicados a ${scenario.name}.</p>
                        <p>Continúa explorando otros escenarios para convertirte en un verdadero experto.</p>
                    </div>
                    
                    <div class="completion-actions">
                        <button class="continue-btn" onclick="GameEngine.renderGameboard()">
                            🎮 Explorar Más Escenarios
                        </button>
                        <button class="share-btn" onclick="GameEngine.shareAchievement('${scenarioId}')">
                            📤 Compartir Logro
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    shareAchievement: (scenarioId) => {
        const scenario = GameData.scenarios[scenarioId];
        const shareText = `¡Completé el escenario "${scenario.name}" en el Laboratorio ISO! 🏆 Puntuación: ${GameConfig.playerScore} - Nivel: ${GameConfig.playerLevel}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Laboratorio ISO - Logro Desbloqueado',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: copiar al clipboard
            navigator.clipboard.writeText(shareText);
            alert('¡Logro copiado al clipboard! Pégalo donde quieras compartirlo.');
        }
    }
};

// === INICIALIZACIÓN DEL JUEGO ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Cargando Laboratorio ISO - Modo Juego...');
    
    // Crear contenedor del juego si no existe
    let gameContainer = document.getElementById('game-container');
    if (!gameContainer) {
        gameContainer = document.createElement('div');
        gameContainer.id = 'game-container';
        gameContainer.className = 'game-main-container';
        
        // Reemplazar contenido existente
        const mainContent = document.querySelector('.canvas-container') || document.body;
        mainContent.innerHTML = '';
        mainContent.appendChild(gameContainer);
    }
    
    // Inicializar motor del juego
    GameEngine.init();
    
    console.log('✅ Laboratorio ISO en modo juego cargado correctamente');
});

console.log('🎮 Laboratorio ISO - Sistema de Juego Cargado');