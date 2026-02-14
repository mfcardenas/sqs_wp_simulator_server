/**
 * MEDCORE ENGINE - MOTOR PRINCIPAL DEL JUEGO
 * Sistema de gestión hospitalaria con aplicación de estándares ISO
 * 
 * Este motor gestiona toda la lógica del juego del proyecto MedCore:
 * - Fases del proyecto (5 fases principales)
 * - Métricas ISO 25010
 * - Gestión de recursos (presupuesto, tiempo)
 * - Satisfacción de stakeholders
 * - Eventos dinámicos
 * - Sistema de decisiones
 */

class MedCoreEngine {
    constructor() {
        console.log('🏥 Inicializando MedCore Engine...');
        
        // Estado del proyecto
        this.projectState = {
            currentPhase: 1,
            totalPhases: 5,
            startDate: new Date(),
            budget: 2500000,        // €2.5M
            initialBudget: 2500000,
            timeRemaining: 18,      // 18 meses
            totalTime: 18,
            progressPercentage: 0
        };
        
        // Métricas ISO 25010 - Características de Calidad
        this.qualityMetrics = {
            functionalSuitability: { value: 0, target: 85, weight: 0.15 },
            performanceEfficiency: { value: 0, target: 90, weight: 0.15 },
            compatibility: { value: 0, target: 80, weight: 0.10 },
            usability: { value: 0, target: 90, weight: 0.15 },
            reliability: { value: 0, target: 95, weight: 0.15 },
            security: { value: 0, target: 95, weight: 0.15 },
            maintainability: { value: 0, target: 80, weight: 0.10 },
            portability: { value: 0, target: 70, weight: 0.05 }
        };
        
        // Stakeholders del hospital y su satisfacción
        this.stakeholders = {
            'medical_director': {
                name: 'Dra. María González',
                role: 'Directora Médica',
                satisfaction: 50,
                priorities: ['functionalSuitability', 'usability', 'reliability'],
                influence: 0.25
            },
            'cto': {
                name: 'Ing. Carlos Méndez',
                role: 'CTO Hospital',
                satisfaction: 50,
                priorities: ['security', 'performanceEfficiency', 'maintainability'],
                influence: 0.20
            },
            'admin_director': {
                name: 'Lic. Ana Ruiz',
                role: 'Directora Administrativa',
                satisfaction: 50,
                priorities: ['usability', 'compatibility', 'functionalSuitability'],
                influence: 0.20
            },
            'emergency_chief': {
                name: 'Dr. Luis Torres',
                role: 'Jefe de Emergencias',
                satisfaction: 50,
                priorities: ['reliability', 'performanceEfficiency', 'usability'],
                influence: 0.20
            },
            'systems_chief': {
                name: 'Ing. Sofia Chen',
                role: 'Jefa de Sistemas',
                satisfaction: 50,
                priorities: ['maintainability', 'compatibility', 'portability'],
                influence: 0.15
            }
        };
        
        // Fases del proyecto con objetivos específicos
        this.phases = {
            1: {
                name: 'Definición y Análisis',
                icon: '🔍',
                description: 'Análisis de necesidades y definición de requisitos aplicando ISO 29148',
                standards: ['ISO 29148', 'ISO 25010'],
                duration: 3, // meses
                objectives: [
                    'Entrevistar a todos los stakeholders principales',
                    'Documentar requisitos funcionales y no funcionales',
                    'Definir la arquitectura general del sistema',
                    'Establecer métricas de calidad según ISO 25010'
                ],
                deliverables: [
                    'Documento de Requisitos del Sistema',
                    'Arquitectura de Alto Nivel',
                    'Plan de Calidad ISO 25010',
                    'Matriz de Stakeholders'
                ]
            },
            2: {
                name: 'Planificación',
                icon: '📋',
                description: 'Planificación detallada del proyecto aplicando ISO 12207',
                standards: ['ISO 12207', 'ISO 15288'],
                duration: 2, // meses
                objectives: [
                    'Definir metodología de desarrollo',
                    'Seleccionar tecnologías y herramientas',
                    'Planificar recursos humanos y técnicos',
                    'Establecer cronograma detallado'
                ],
                deliverables: [
                    'Plan de Proyecto Detallado',
                    'Arquitectura Técnica',
                    'Plan de Recursos',
                    'Cronograma Maestro'
                ]
            },
            3: {
                name: 'Diseño',
                icon: '🎨',
                description: 'Diseño detallado del sistema enfocado en calidad ISO 25010',
                standards: ['ISO 25010', 'ISO 9241'],
                duration: 4, // meses
                objectives: [
                    'Diseñar interfaces de usuario siguiendo ISO 9241',
                    'Definir arquitectura de software detallada',
                    'Especificar base de datos y APIs',
                    'Crear prototipos de alta fidelidad'
                ],
                deliverables: [
                    'Diseños de Interfaz de Usuario',
                    'Arquitectura de Software Detallada',
                    'Modelo de Datos',
                    'Prototipos Funcionales'
                ]
            },
            4: {
                name: 'Desarrollo',
                icon: '⚙️',
                description: 'Implementación del sistema con control de calidad continuo',
                standards: ['ISO 90003', 'ISO 25000'],
                duration: 6, // meses
                objectives: [
                    'Implementar funcionalidades core del sistema',
                    'Ejecutar pruebas continuas de calidad',
                    'Integrar módulos y sistemas externos',
                    'Documentar código y procesos'
                ],
                deliverables: [
                    'Sistema MedCore Funcional',
                    'Batería de Pruebas Automatizadas',
                    'Documentación Técnica',
                    'Manual de Integración'
                ]
            },
            5: {
                name: 'Implementación',
                icon: '🚀',
                description: 'Despliegue y puesta en marcha con evaluación ISO 25040',
                standards: ['ISO 25040', 'ISO 90003'],
                duration: 3, // meses
                objectives: [
                    'Desplegar sistema en ambiente de producción',
                    'Capacitar usuarios finales',
                    'Monitorear métricas de rendimiento',
                    'Evaluar satisfacción de stakeholders'
                ],
                deliverables: [
                    'Sistema en Producción',
                    'Plan de Capacitación Ejecutado',
                    'Métricas de Rendimiento',
                    'Evaluación Final de Calidad'
                ]
            }
        };
        
        // Eventos dinámicos que pueden ocurrir durante el proyecto
        this.eventPool = [
            {
                id: 'budget_cut',
                type: 'crisis',
                probability: 0.15,
                title: '💸 Recorte de Presupuesto',
                description: 'La administración del hospital ha decidido reducir el presupuesto del proyecto en un 15%.',
                impact: {
                    budget: -0.15,
                    stakeholder_satisfaction: { admin_director: -20, medical_director: -10 }
                }
            },
            {
                id: 'security_audit',
                type: 'requirement',
                probability: 0.20,
                title: '🔒 Auditoría de Seguridad Urgente',
                description: 'Se requiere una auditoría de seguridad adicional debido a nuevas regulaciones.',
                impact: {
                    time: -1,
                    budget: -50000,
                    quality: { security: +15 }
                }
            },
            {
                id: 'staff_turnover',
                type: 'resource',
                probability: 0.12,
                title: '👥 Rotación de Personal',
                description: 'Varios desarrolladores clave han dejado el equipo.',
                impact: {
                    time: -2,
                    quality: { maintainability: -10, functionalSuitability: -5 }
                }
            },
            {
                id: 'tech_breakthrough',
                type: 'opportunity',
                probability: 0.08,
                title: '🚀 Avance Tecnológico',
                description: 'Nueva tecnología disponible que puede mejorar significativamente el rendimiento.',
                impact: {
                    quality: { performanceEfficiency: +20, usability: +10 },
                    stakeholder_satisfaction: { cto: +15, systems_chief: +10 }
                }
            }
        ];
        
        // Decisiones disponibles por fase
        this.decisions = {};
        this.gameHistory = [];
        this.alerts = [];
        
        console.log('✅ MedCore Engine inicializado correctamente');
    }
    
    /**
     * Inicializar el motor del juego
     */
    init() {
        console.log('🚀 Iniciando MedCore Engine...');
        
        // Generar o cargar ID de sesión
        this.initializeSession();
        
        // Cargar progreso guardado si existe
        this.loadSavedProgress();
        
        // Configurar decisiones para cada fase
        this.initializeDecisions();
        
        // Inicializar sistemas básicos
        this.initializeBasicSystems();
        
        // Inicializar primera fase
        this.loadPhaseContent(this.projectState.currentPhase);
        
        // Configurar sistemas básicos
        this.setupBasicSystems();
        
        console.log('✅ MedCore Engine iniciado exitosamente');
    }
    
    /**
     * Inicializar estructuras básicas del juego
     */
    initializeGameStructures() {
        console.log('🔧 Inicializando estructuras del juego...');
        
        // Initialize base decision structure
        this.decisionTrees = {
            phase1: [], phase2: [], phase3: [], phase4: [], phase5: [],
            currentDecisions: [],
            decisionHistory: []
        };
        
        // Inicializar si está disponible
        if (typeof this.initializeStandardsKnowledge === 'function') {
            this.initializeStandardsKnowledge();
        }
        
        console.log('✅ Estructuras básicas inicializadas');
    }
    
    /**
     * Inicializar sistemas básicos
     */
    initializeBasicSystems() {
        console.log('⚙️ Inicializando sistemas básicos...');
        
        // Asegurar que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.finishInitialization());
        } else {
            this.finishInitialization();
        }
    }
    
    /**
     * Finalizar inicialización cuando el DOM esté listo
     */
    finishInitialization() {
        try {
            // Intentar inicializar dashboard si está disponible
            if (typeof this.updateDashboard === 'function') {
                this.updateDashboard();
            }
            
            console.log('✅ Sistemas básicos inicializados');
        } catch (error) {
            console.warn('⚠️ Error en inicialización:', error.message);
        }
    }
    
    /**
     * Configurar sistemas básicos
     */
    setupBasicSystems() {
        console.log('🛠️ Configurando sistemas...');
        
        // Configurar auto-guardado básico
        this.autoSaveInterval = setInterval(() => {
            try {
                this.saveToLocalStorage();
            } catch (error) {
                console.warn('⚠️ Error en auto-guardado:', error.message);
            }
        }, 30000); // Cada 30 segundos
        
        console.log('✅ Sistemas configurados');
    }
    
    /**
     * Inicializar sistema de sesiones
     */
    initializeSession() {
        // Generar o recuperar ID de sesión único
        this.sessionId = localStorage.getItem('medcore_session_id');
        if (!this.sessionId) {
            this.sessionId = this.generateSessionId();
            localStorage.setItem('medcore_session_id', this.sessionId);
        }
        
        console.log('🆔 Sesión inicializada:', this.sessionId);
        
        // Verificar si hay sesiones guardadas
        this.checkExistingSessions();
    }
    
    /**
     * Generar ID de sesión único
     */
    generateSessionId() {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substr(2, 9);
        return `medcore_${timestamp}_${random}`;
    }
    
    /**
     * Verificar y mostrar sesiones existentes
     */
    checkExistingSessions() {
        const sessions = this.getAllSavedSessions();
        if (sessions.length > 0) {
            this.showSessionSelector(sessions);
        }
    }
    
    /**
     * Obtener todas las sesiones guardadas
     */
    getAllSavedSessions() {
        const sessions = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('medcore_session_')) {
                try {
                    const data = JSON.parse(localStorage.getItem(key));
                    sessions.push({
                        sessionId: key.replace('medcore_session_', ''),
                        data: data,
                        lastSaved: data.lastSaved,
                        phase: data.projectState?.currentPhase || 1,
                        progress: data.projectState?.progressPercentage || 0
                    });
                } catch (error) {
                    console.warn('Error leyendo sesión:', key);
                }
            }
        }
        return sessions.sort((a, b) => new Date(b.lastSaved) - new Date(a.lastSaved));
    }
    
    /**
     * Mostrar selector de sesiones existentes
     */
    showSessionSelector(sessions) {
        const selectorHTML = `
            <div id="session-selector" class="modal-overlay" style="display: flex;">
                <div class="modal-container session-selector-modal">
                    <div class="modal-header">
                        <h2>🎮 Continuar Proyecto Existente</h2>
                    </div>
                    
                    <div class="modal-content">
                        <p>Hemos encontrado proyectos guardados. ¿Deseas continuar con alguno?</p>
                        
                        <div class="sessions-list">
                            ${sessions.map((session, index) => `
                                <div class="session-item" data-session="${session.sessionId}">
                                    <div class="session-info">
                                        <div class="session-title">Proyecto MedCore #${index + 1}</div>
                                        <div class="session-details">
                                            <span class="session-phase">Fase ${session.phase}</span>
                                            <span class="session-progress">${Math.round(session.progress)}% completado</span>
                                            <span class="session-date">${this.formatDate(session.lastSaved)}</span>
                                        </div>
                                    </div>
                                    <button class="load-session-btn" onclick="window.gameEngine.loadSession('${session.sessionId}')">
                                        Continuar
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="session-actions">
                            <button class="action-btn secondary" onclick="window.gameEngine.startNewSession()">
                                🆕 Nuevo Proyecto
                            </button>
                            <button class="action-btn danger" onclick="window.gameEngine.clearAllSessions()">
                                🗑️ Eliminar Todos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', selectorHTML);
    }
    
    /**
     * Cargar sesión específica
     */
    loadSession(sessionId) {
        try {
            const key = `medcore_session_${sessionId}`;
            const saved = localStorage.getItem(key);
            if (saved) {
                const progress = JSON.parse(saved);
                
                // Cargar todos los datos
                Object.assign(this.projectState, progress.projectState || {});
                Object.assign(this.qualityMetrics, progress.qualityMetrics || {});
                Object.assign(this.stakeholders, progress.stakeholders || {});
                this.gameHistory = progress.gameHistory || [];
                if (progress.eventState) {
                    this.eventState = progress.eventState;
                }
                
                // Actualizar ID de sesión actual
                this.sessionId = sessionId;
                localStorage.setItem('medcore_session_id', sessionId);
                
                // Cerrar selector y continuar
                this.closeSessionSelector();
                
                console.log('📁 Sesión cargada:', sessionId);
                this.addAlert('Proyecto cargado exitosamente', 'success');
                
                return true;
            }
        } catch (error) {
            console.error('❌ Error cargando sesión:', error);
            this.addAlert('Error cargando proyecto', 'error');
            return false;
        }
    }
    
    /**
     * Iniciar nueva sesión
     */
    startNewSession() {
        this.sessionId = this.generateSessionId();
        localStorage.setItem('medcore_session_id', this.sessionId);
        this.closeSessionSelector();
        this.addAlert('Nuevo proyecto iniciado', 'success');
        console.log('🆕 Nueva sesión iniciada:', this.sessionId);
    }
    
    /**
     * Eliminar todas las sesiones
     */
    clearAllSessions() {
        if (confirm('¿Estás seguro de que quieres eliminar todos los proyectos guardados?')) {
            const keys = Object.keys(localStorage).filter(key => key.startsWith('medcore_session_'));
            keys.forEach(key => localStorage.removeItem(key));
            this.closeSessionSelector();
            this.addAlert('Todos los proyectos eliminados', 'info');
            console.log('🗑️ Todas las sesiones eliminadas');
        }
    }
    
    /**
     * Cerrar selector de sesiones
     */
    closeSessionSelector() {
        const selector = document.getElementById('session-selector');
        if (selector) selector.remove();
    }
    
    /**
     * Cargar progreso guardado del localStorage
     */
    loadSavedProgress() {
        if (!this.sessionId) return;
        
        try {
            const key = `medcore_session_${this.sessionId}`;
            const saved = localStorage.getItem(key);
            if (saved) {
                const progress = JSON.parse(saved);
                Object.assign(this.projectState, progress.projectState || {});
                Object.assign(this.qualityMetrics, progress.qualityMetrics || {});
                Object.assign(this.stakeholders, progress.stakeholders || {});
                this.gameHistory = progress.gameHistory || [];
                
                console.log('📁 Progreso cargado desde localStorage');
            }
        } catch (error) {
            console.warn('⚠️ Error cargando progreso:', error);
        }
    }
    
    /**
     * Guardar progreso actual en localStorage con formato JSON completo
     */
    saveProgress() {
        if (!this.sessionId) {
            console.warn('⚠️ No hay ID de sesión para guardar');
            return false;
        }
        
        try {
            const progress = {
                sessionId: this.sessionId,
                projectState: this.projectState,
                qualityMetrics: this.qualityMetrics,
                stakeholders: this.stakeholders,
                gameHistory: this.gameHistory,
                eventState: this.eventState || {},
                gameSettings: {
                    difficulty: 'normal',
                    autoSave: true
                },
                metadata: {
                    version: '1.0.0',
                    hospitalName: 'Hospital San Rafael',
                    projectName: 'MedCore Hospital System'
                },
                lastSaved: new Date().toISOString(),
                totalPlayTime: this.calculatePlayTime()
            };
            
            const key = `medcore_session_${this.sessionId}`;
            localStorage.setItem(key, JSON.stringify(progress));
            
            console.log('💾 Progreso guardado exitosamente en:', key);
            this.addAlert('Progreso guardado exitosamente', 'success');
            
            return true;
        } catch (error) {
            console.error('❌ Error guardando progreso:', error);
            this.addAlert('Error guardando progreso', 'error');
            return false;
        }
    }
    
    /**
     * Configurar auto-guardado
     */
    setupAutoSave() {
        // Auto-guardado cada 2 minutos
        this.autoSaveInterval = setInterval(() => {
            this.saveProgress();
        }, 120000);
        
        // Guardar antes de cerrar la ventana
        window.addEventListener('beforeunload', () => {
            this.saveProgress();
        });
        
        console.log('💾 Auto-guardado configurado cada 2 minutos');
    }
    
    /**
     * Calcular tiempo total de juego
     */
    calculatePlayTime() {
        if (!this.gameStartTime) {
            this.gameStartTime = new Date();
        }
        return Math.round((new Date() - this.gameStartTime) / 1000 / 60); // minutos
    }
    
    /**
     * Formatear fecha para visualización
     */
    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diffMs / (1000 * 60));
        
        if (diffDays > 0) {
            return `Hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
        } else if (diffHours > 0) {
            return `Hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
        } else if (diffMinutes > 0) {
            return `Hace ${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''}`;
        } else {
            return 'Hace un momento';
        }
    }
    
    /**
     * Exportar datos de sesión como JSON
     */
    exportSessionData() {
        const progress = {
            sessionId: this.sessionId,
            projectState: this.projectState,
            qualityMetrics: this.qualityMetrics,
            stakeholders: this.stakeholders,
            gameHistory: this.gameHistory,
            exportedAt: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(progress, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `medcore_project_${this.sessionId}.json`;
        link.click();
        
        this.addAlert('Datos exportados exitosamente', 'success');
    }
    
    /**
     * Inicializar las fases del proyecto
     */
    startPhase(phaseNumber) {
        if (phaseNumber < 1 || phaseNumber > this.projectState.totalPhases) {
            console.warn('⚠️ Número de fase inválido:', phaseNumber);
            return;
        }
        
        this.projectState.currentPhase = phaseNumber;
        const currentPhase = this.phases[phaseNumber];
        
        console.log(`🎯 Iniciando ${currentPhase.name} (Fase ${phaseNumber})`);
        
        // Actualizar UI
        this.updatePhaseUI(currentPhase);
        this.updateMetrics();
        
        // Generar contenido específico de la fase
        this.loadPhaseContent(phaseNumber);
        
        // Registrar en historial
        this.gameHistory.push({
            action: 'phase_started',
            phase: phaseNumber,
            timestamp: new Date(),
            data: { phase: currentPhase.name }
        });
        
        // Alertar inicio de fase
        this.addAlert(`Iniciando ${currentPhase.name}`, 'info');
    }
    
    /**
     * Actualizar la interfaz de la fase actual
     */
    updatePhaseUI(phase) {
        // Actualizar título y descripción de fase
        const phaseTitle = document.getElementById('phase-title');
        const phaseIcon = document.getElementById('phase-icon');
        const phaseDescription = document.getElementById('phase-description');
        const currentPhaseStatus = document.getElementById('current-phase');
        
        if (phaseTitle) phaseTitle.textContent = `Fase ${this.projectState.currentPhase}: ${phase.name}`;
        if (phaseIcon) phaseIcon.textContent = phase.icon;
        if (phaseDescription) phaseDescription.textContent = phase.description;
        if (currentPhaseStatus) currentPhaseStatus.textContent = `Fase ${this.projectState.currentPhase}: ${phase.name}`;
        
        // Actualizar objetivos
        const objectivesList = document.getElementById('phase-objectives-list');
        if (objectivesList) {
            objectivesList.innerHTML = phase.objectives
                .map(objective => `<li>${objective}</li>`)
                .join('');
        }
        
        // Actualizar estándares aplicables
        const currentStandards = document.getElementById('current-standards');
        if (currentStandards) {
            currentStandards.innerHTML = phase.standards
                .map(standard => `
                    <div class="standard-item">
                        <strong>${standard}</strong>
                        <span>${this.getStandardDescription(standard)}</span>
                    </div>
                `).join('');
        }
    }
    
    /**
     * Cargar contenido específico de cada fase
     */
    loadPhaseContent(phaseNumber) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        const phase = this.phases[phaseNumber];
        
        let content = `
            <div class="phase-content">
                <div class="phase-header">
                    <h2>${phase.icon} ${phase.name}</h2>
                    <div class="phase-progress">
                        <span class="phase-number">Fase ${phaseNumber} de ${this.projectState.totalPhases}</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${(phaseNumber / this.projectState.totalPhases) * 100}%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="phase-description-expanded">
                    <p>${phase.description}</p>
                </div>
                
                <div class="phase-deliverables">
                    <h3>📋 Entregables de esta Fase</h3>
                    <div class="deliverables-grid">
                        ${phase.deliverables.map(deliverable => `
                            <div class="deliverable-item">
                                <span class="deliverable-icon">📄</span>
                                <span class="deliverable-name">${deliverable}</span>
                                <span class="deliverable-status pending">Pendiente</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="phase-decisions">
                    <h3>🤔 Decisiones Clave</h3>
                    <div id="decisions-container">
                        ${this.generatePhaseDecisions(phaseNumber)}
                    </div>
                </div>
                
                <div class="phase-actions">
                    <button class="action-btn primary" onclick="window.gameEngine.showDecisionModal()">
                        🎯 Tomar Decisión Estratégica
                    </button>
                    <button class="action-btn secondary" onclick="window.gameEngine.reviewDeliverables()">
                        📋 Revisar Entregables
                    </button>
                    <button class="action-btn secondary" onclick="window.gameEngine.consultStakeholders()">
                        👥 Consultar Stakeholders
                    </button>
                </div>
            </div>
        `;
        
        mainContent.innerHTML = content;
    }
    
    /**
     * Generar decisiones específicas para cada fase
     */
    generatePhaseDecisions(phaseNumber) {
        // Esto se expandirá con decisiones específicas por fase
        const decisionsHTML = `
            <div class="decisions-preview">
                <p>En esta fase deberás tomar decisiones importantes sobre:</p>
                <ul class="decisions-list">
                    <li>Metodología de trabajo</li>
                    <li>Tecnologías a utilizar</li>
                    <li>Priorización de características</li>
                    <li>Gestión de riesgos</li>
                </ul>
                <div class="decisions-note">
                    <strong>💡 Nota:</strong> Cada decisión afectará las métricas de calidad ISO 25010 y la satisfacción de stakeholders.
                </div>
            </div>
        `;
        
        return decisionsHTML;
    }
    
    /**
     * Actualizar todas las métricas en el dashboard
     */
    updateMetrics() {
        this.updateProjectMetrics();
        this.updateQualityDashboard();
        this.updateStakeholderSatisfaction();
        this.calculateOverallProgress();
    }
    
    /**
     * Actualizar métricas principales del proyecto
     */
    updateProjectMetrics() {
        // Actualizar presupuesto
        const budgetRemaining = document.getElementById('budget-remaining');
        const budgetBar = document.getElementById('budget-bar');
        
        if (budgetRemaining) {
            budgetRemaining.textContent = `€${this.projectState.budget.toLocaleString()}`;
        }
        
        if (budgetBar) {
            const budgetPercentage = (this.projectState.budget / this.projectState.initialBudget) * 100;
            budgetBar.style.width = budgetPercentage + '%';
            
            // Cambiar color según el nivel
            budgetBar.className = 'metric-fill';
            if (budgetPercentage < 30) {
                budgetBar.classList.add('low');
            }
        }
        
        // Actualizar tiempo
        const timeRemaining = document.getElementById('time-remaining');
        const timeBar = document.getElementById('time-bar');
        
        if (timeRemaining) {
            timeRemaining.textContent = `${this.projectState.timeRemaining} meses`;
        }
        
        if (timeBar) {
            const timePercentage = (this.projectState.timeRemaining / this.projectState.totalTime) * 100;
            timeBar.style.width = timePercentage + '%';
            
            // Cambiar color según el nivel
            timeBar.className = 'metric-fill';
            if (timePercentage < 30) {
                timeBar.classList.add('low');
            }
        }
        
        // Actualizar progreso
        const progressPercentage = document.getElementById('progress-percentage');
        const progressBar = document.getElementById('progress-bar');
        
        if (progressPercentage) {
            progressPercentage.textContent = `${Math.round(this.projectState.progressPercentage)}%`;
        }
        
        if (progressBar) {
            progressBar.style.width = this.projectState.progressPercentage + '%';
        }
    }
    
    /**
     * Actualizar dashboard de calidad ISO 25010
     */
    updateQualityDashboard() {
        const qualityDashboard = document.getElementById('quality-dashboard');
        if (!qualityDashboard) return;
        
        const metricsHTML = Object.entries(this.qualityMetrics).map(([key, metric]) => {
            const percentage = (metric.value / metric.target) * 100;
            const statusClass = percentage >= 80 ? 'success' : percentage >= 60 ? 'warning' : 'danger';
            
            return `
                <div class="metric-card ${statusClass}">
                    <div class="metric-header">
                        <span class="metric-name">${this.getMetricDisplayName(key)}</span>
                        <span class="metric-score">${metric.value}%</span>
                    </div>
                    <div class="metric-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                        <div class="metric-target">Meta: ${metric.target}%</div>
                    </div>
                </div>
            `;
        }).join('');
        
        qualityDashboard.innerHTML = metricsHTML;
    }
    
    /**
     * Actualizar satisfacción de stakeholders
     */
    updateStakeholderSatisfaction() {
        const satisfactionGrid = document.getElementById('stakeholder-satisfaction');
        if (!satisfactionGrid) return;
        
        const stakeholdersHTML = Object.entries(this.stakeholders).map(([key, stakeholder]) => {
            const satisfactionClass = stakeholder.satisfaction >= 70 ? 'high' : 
                                    stakeholder.satisfaction >= 40 ? 'medium' : 'low';
            
            return `
                <div class="satisfaction-item ${satisfactionClass}">
                    <span class="stakeholder-name">${stakeholder.name}</span>
                    <div class="satisfaction-bar">
                        <div class="satisfaction-fill" style="width: ${stakeholder.satisfaction}%"></div>
                    </div>
                    <span class="satisfaction-score">${stakeholder.satisfaction}%</span>
                </div>
            `;
        }).join('');
        
        satisfactionGrid.innerHTML = stakeholdersHTML;
    }
    
    /**
     * Calcular progreso general del proyecto
     */
    calculateOverallProgress() {
        // Progreso basado en fase actual y métricas de calidad
        const phaseProgress = ((this.projectState.currentPhase - 1) / this.projectState.totalPhases) * 100;
        const qualityProgress = this.calculateAverageQuality();
        
        // Progreso ponderado: 60% fase, 40% calidad
        this.projectState.progressPercentage = (phaseProgress * 0.6) + (qualityProgress * 0.4);
        
        // Actualizar UI
        const progressEl = document.getElementById('progress-percentage');
        const progressBar = document.getElementById('progress-bar');
        
        if (progressEl) progressEl.textContent = `${Math.round(this.projectState.progressPercentage)}%`;
        if (progressBar) progressBar.style.width = this.projectState.progressPercentage + '%';
    }
    
    /**
     * Calcular promedio ponderado de calidad
     */
    calculateAverageQuality() {
        let weightedSum = 0;
        let totalWeight = 0;
        
        Object.entries(this.qualityMetrics).forEach(([key, metric]) => {
            const normalizedValue = (metric.value / metric.target) * 100;
            weightedSum += normalizedValue * metric.weight;
            totalWeight += metric.weight;
        });
        
        return weightedSum / totalWeight;
    }
    
    /**
     * Agregar alerta al sistema
     */
    addAlert(message, type = 'info') {
        const alert = {
            id: Date.now(),
            message,
            type,
            timestamp: new Date()
        };
        
        this.alerts.unshift(alert);
        
        // Mantener máximo 10 alertas
        if (this.alerts.length > 10) {
            this.alerts = this.alerts.slice(0, 10);
        }
        
        // Actualizar UI
        this.updateAlertsUI();
        
        console.log(`🔔 [${type.toUpperCase()}] ${message}`);
    }
    
    /**
     * Actualizar UI de alertas
     */
    updateAlertsUI() {
        const alertsContainer = document.getElementById('project-alerts');
        if (!alertsContainer) return;
        
        const alertsHTML = this.alerts.map(alert => `
            <div class="alert-item ${alert.type}">
                <span class="alert-icon">${this.getAlertIcon(alert.type)}</span>
                <span class="alert-text">${alert.message}</span>
            </div>
        `).join('');
        
        alertsContainer.innerHTML = alertsHTML;
    }
    
    /**
     * Obtener icono para tipo de alerta
     */
    getAlertIcon(type) {
        const icons = {
            'success': '✅',
            'warning': '⚠️',
            'error': '❌',
            'info': 'ℹ️',
            'crisis': '🚨'
        };
        return icons[type] || 'ℹ️';
    }
    
    /**
     * Obtener descripción de estándar ISO
     */
    getStandardDescription(standard) {
        const descriptions = {
            'ISO 29148': 'Ingeniería de Requisitos',
            'ISO 25010': 'Características de Calidad de Software',
            'ISO 12207': 'Procesos del Ciclo de Vida del Software',
            'ISO 15288': 'Procesos del Ciclo de Vida del Sistema',
            'ISO 9241': 'Ergonomía de la Interacción Humano-Sistema',
            'ISO 90003': 'Ingeniería de Software - Directrices para ISO 9001',
            'ISO 25000': 'SQuaRE - Requisitos y Evaluación de Calidad',
            'ISO 25040': 'Proceso de Evaluación'
        };
        return descriptions[standard] || 'Estándar de calidad aplicable';
    }
    
    /**
     * Obtener nombre amigable de métrica de calidad
     */
    getMetricDisplayName(key) {
        const names = {
            'functionalSuitability': 'Adecuación Funcional',
            'performanceEfficiency': 'Eficiencia de Rendimiento',
            'compatibility': 'Compatibilidad',
            'usability': 'Usabilidad',
            'reliability': 'Fiabilidad',
            'security': 'Seguridad',
            'maintainability': 'Mantenibilidad',
            'portability': 'Portabilidad'
        };
        return names[key] || key;
    }
    
    /**
     * Programar eventos aleatorios
     */
    scheduleRandomEvents() {
        // Programar evaluación de eventos cada 30 segundos (simulando tiempo del proyecto)
        setInterval(() => {
            this.evaluateRandomEvents();
        }, 30000);
    }
    
    /**
     * Evaluar si ocurre un evento aleatorio
     */
    evaluateRandomEvents() {
        this.eventPool.forEach(event => {
            if (Math.random() < event.probability) {
                this.triggerEvent(event);
            }
        });
    }
    
    /**
     * Disparar un evento específico
     */
    triggerEvent(event) {
        console.log(`🎲 Evento disparado: ${event.title}`);
        
        // Aplicar impactos del evento
        if (event.impact.budget) {
            this.projectState.budget += this.projectState.budget * event.impact.budget;
        }
        
        if (event.impact.time) {
            this.projectState.timeRemaining += event.impact.time;
        }
        
        if (event.impact.quality) {
            Object.entries(event.impact.quality).forEach(([metric, change]) => {
                if (this.qualityMetrics[metric]) {
                    this.qualityMetrics[metric].value = Math.max(0, 
                        Math.min(100, this.qualityMetrics[metric].value + change)
                    );
                }
            });
        }
        
        if (event.impact.stakeholder_satisfaction) {
            Object.entries(event.impact.stakeholder_satisfaction).forEach(([stakeholder, change]) => {
                if (this.stakeholders[stakeholder]) {
                    this.stakeholders[stakeholder].satisfaction = Math.max(0, 
                        Math.min(100, this.stakeholders[stakeholder].satisfaction + change)
                    );
                }
            });
        }
        
        // Agregar alerta
        this.addAlert(event.description, event.type);
        
        // Actualizar métricas
        this.updateMetrics();
        
        // Registrar en historial
        this.gameHistory.push({
            action: 'random_event',
            event: event.id,
            timestamp: new Date(),
            data: event
        });
    }
    
    /**
     * Mostrar roadmap del proyecto
     */
    showProjectRoadmap() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        const roadmapHTML = `
            <div class="project-roadmap">
                <div class="roadmap-header">
                    <h2>🗺️ Roadmap del Proyecto MedCore</h2>
                    <p>Visualización completa de todas las fases del proyecto</p>
                </div>
                
                <div class="roadmap-timeline">
                    ${Object.entries(this.phases).map(([phaseNum, phase]) => {
                        const isCompleted = parseInt(phaseNum) < this.projectState.currentPhase;
                        const isCurrent = parseInt(phaseNum) === this.projectState.currentPhase;
                        const isPending = parseInt(phaseNum) > this.projectState.currentPhase;
                        
                        let statusClass = '';
                        let statusIcon = '';
                        if (isCompleted) {
                            statusClass = 'completed';
                            statusIcon = '✅';
                        } else if (isCurrent) {
                            statusClass = 'current';
                            statusIcon = '🔄';
                        } else {
                            statusClass = 'pending';
                            statusIcon = '⏳';
                        }
                        
                        return `
                            <div class="roadmap-phase ${statusClass}" data-phase="${phaseNum}">
                                <div class="phase-marker">
                                    <div class="phase-number">${phaseNum}</div>
                                    <div class="phase-status">${statusIcon}</div>
                                </div>
                                <div class="phase-content">
                                    <div class="phase-header">
                                        <h3>${phase.icon} ${phase.name}</h3>
                                        <span class="phase-duration">${phase.duration} meses</span>
                                    </div>
                                    <p class="phase-description">${phase.description}</p>
                                    
                                    <div class="phase-objectives">
                                        <h4>🎯 Objetivos</h4>
                                        <ul>
                                            ${phase.objectives.slice(0, 2).map(obj => `<li>${obj}</li>`).join('')}
                                        </ul>
                                    </div>
                                    
                                    <div class="phase-standards">
                                        <h4>📋 Estándares ISO</h4>
                                        <div class="standards-tags">
                                            ${phase.standards.map(std => `<span class="standard-tag">${std}</span>`).join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="roadmap-summary">
                    <div class="timeline-stats">
                        <div class="stat-item">
                            <span class="stat-label">Fases Completadas</span>
                            <span class="stat-value">${this.projectState.currentPhase - 1} / ${this.projectState.totalPhases}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Progreso Total</span>
                            <span class="stat-value">${Math.round(this.projectState.progressPercentage)}%</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Tiempo Restante</span>
                            <span class="stat-value">${this.formatTimeRemaining(this.projectState.timeRemaining)}</span>
                        </div>
                    </div>
                </div>
                
                <div class="roadmap-actions">
                    <button class="action-btn primary" onclick="window.gameEngine.loadPhaseContent(${this.projectState.currentPhase})">
                        ← Regresar a Fase Actual
                    </button>
                </div>
            </div>
        `;
        
        mainContent.innerHTML = roadmapHTML;
        this.addAlert('Roadmap del proyecto mostrado', 'info');
    }
    
    /**
     * Disparar reunión de emergencia
     */
    triggerEmergencyMeeting() {
        const emergencyOptions = [
            {
                id: 'budget_crisis',
                title: '💸 Crisis de Presupuesto',
                description: 'El presupuesto se está agotando más rápido de lo previsto',
                actions: [
                    { title: 'Solicitar presupuesto adicional', impact: { budget: 300000, stakeholder_satisfaction: { admin_director: -10 } } },
                    { title: 'Reducir alcance del proyecto', impact: { quality: { functionalSuitability: -15 }, stakeholder_satisfaction: { medical_director: -15 } } },
                    { title: 'Optimizar recursos existentes', impact: { time: 1, quality: { maintainability: -5 } } }
                ]
            },
            {
                id: 'timeline_crisis',
                title: '⏰ Crisis de Cronograma',
                description: 'El proyecto está retrasándose significativamente',
                actions: [
                    { title: 'Extender plazo de entrega', impact: { time: 3, stakeholder_satisfaction: { admin_director: -20, emergency_chief: -10 } } },
                    { title: 'Aumentar equipo de desarrollo', impact: { budget: -400000, time: -1 } },
                    { title: 'Trabajar horas extra', impact: { budget: -100000, quality: { reliability: -10 } } }
                ]
            },
            {
                id: 'stakeholder_conflict',
                title: '👥 Conflicto de Stakeholders',
                description: 'Hay desacuerdos importantes entre los stakeholders',
                actions: [
                    { title: 'Mediación entre stakeholders', impact: { time: 0.5, stakeholder_satisfaction: { medical_director: 10, admin_director: 10 } } },
                    { title: 'Priorizar necesidades médicas', impact: { stakeholder_satisfaction: { medical_director: 20, admin_director: -15 } } },
                    { title: 'Priorizar eficiencia administrativa', impact: { stakeholder_satisfaction: { admin_director: 20, medical_director: -15 } } }
                ]
            }
        ];
        
        // Seleccionar crisis basada en el estado actual del proyecto
        let selectedCrisis;
        const budgetPercent = (this.projectState.budget / this.projectState.initialBudget) * 100;
        const timePercent = (this.projectState.timeRemaining / this.projectState.totalTime) * 100;
        const avgSatisfaction = this.calculateAverageStakeholderSatisfaction();
        
        if (budgetPercent < 40) {
            selectedCrisis = emergencyOptions[0]; // Budget crisis
        } else if (timePercent < 30) {
            selectedCrisis = emergencyOptions[1]; // Timeline crisis
        } else if (avgSatisfaction < 50) {
            selectedCrisis = emergencyOptions[2]; // Stakeholder conflict
        } else {
            // Crisis aleatoria si todo está bien
            selectedCrisis = emergencyOptions[Math.floor(Math.random() * emergencyOptions.length)];
        }
        
        this.showEmergencyMeetingModal(selectedCrisis);
    }
    
    /**
     * Mostrar modal de reunión de emergencia
     */
    showEmergencyMeetingModal(crisis) {
        const modalHTML = `
            <div id="emergency-modal" class="modal-overlay" style="display: flex;">
                <div class="modal-container emergency-modal">
                    <div class="modal-header emergency-header">
                        <h2>🆘 Reunión de Emergencia</h2>
                        <div class="emergency-badge">URGENTE</div>
                    </div>
                    
                    <div class="modal-content">
                        <div class="emergency-situation">
                            <h3>${crisis.title}</h3>
                            <p>${crisis.description}</p>
                        </div>
                        
                        <div class="emergency-actions">
                            <h3>🤔 Acciones Disponibles</h3>
                            <div class="emergency-options">
                                ${crisis.actions.map((action, index) => `
                                    <div class="emergency-option" data-action="${index}">
                                        <h4>${action.title}</h4>
                                        <div class="action-impact">
                                            ${this.renderActionImpact(action.impact)}
                                        </div>
                                        <button class="emergency-action-btn" onclick="window.gameEngine.selectEmergencyAction('${crisis.id}', ${index})">
                                            Ejecutar Acción
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    /**
     * Seleccionar acción de emergencia
     */
    selectEmergencyAction(crisisId, actionIndex) {
        // Encontrar y aplicar la acción
        console.log(`🆘 Acción de emergencia seleccionada: ${crisisId} - ${actionIndex}`);
        
        // Cerrar modal
        const modal = document.getElementById('emergency-modal');
        if (modal) modal.remove();
        
        // Aplicar impacto (esto se expandiría con lógica específica)
        this.addAlert('Acción de emergencia ejecutada', 'success');
        this.updateMetrics();
        this.saveProgress();
    }
    
    /**
     * Realizar revisión de calidad
     */
    performQualityReview() {
        const qualityReport = this.generateQualityReport();
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        const reviewHTML = `
            <div class="quality-review">
                <div class="review-header">
                    <h2>🔍 Revisión de Calidad ISO 25010</h2>
                    <div class="review-date">${new Date().toLocaleDateString('es-ES')}</div>
                </div>
                
                <div class="quality-summary">
                    <div class="summary-card overall">
                        <h3>📊 Puntuación General</h3>
                        <div class="overall-score ${this.getQualityScoreClass(qualityReport.overallScore)}">
                            ${qualityReport.overallScore}%
                        </div>
                        <div class="score-interpretation">
                            ${this.getQualityInterpretation(qualityReport.overallScore)}
                        </div>
                    </div>
                </div>
                
                <div class="quality-metrics-detailed">
                    <h3>📈 Métricas Detalladas</h3>
                    <div class="metrics-grid">
                        ${Object.entries(this.qualityMetrics).map(([key, metric]) => {
                            const percentage = (metric.value / metric.target) * 100;
                            const status = percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : percentage >= 40 ? 'fair' : 'poor';
                            
                            return `
                                <div class="metric-detailed ${status}">
                                    <div class="metric-name">${this.getMetricDisplayName(key)}</div>
                                    <div class="metric-current">${Math.round(metric.value)}%</div>
                                    <div class="metric-target">Meta: ${metric.target}%</div>
                                    <div class="metric-status ${status}">
                                        ${this.getMetricStatus(percentage)}
                                    </div>
                                    <div class="improvement-suggestions">
                                        ${this.getImprovementSuggestions(key, percentage)}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
                
                <div class="quality-recommendations">
                    <h3>💡 Recomendaciones</h3>
                    <div class="recommendations-list">
                        ${qualityReport.recommendations.map(rec => `
                            <div class="recommendation-item">
                                <span class="recommendation-icon">${rec.icon}</span>
                                <span class="recommendation-text">${rec.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="review-actions">
                    <button class="action-btn primary" onclick="window.gameEngine.loadPhaseContent(${this.projectState.currentPhase})">
                        ← Regresar a la Fase
                    </button>
                    <button class="action-btn secondary" onclick="window.gameEngine.exportQualityReport()">
                        📄 Exportar Reporte
                    </button>
                </div>
            </div>
        `;
        
        mainContent.innerHTML = reviewHTML;
        this.addAlert('Revisión de calidad completada', 'success');
    }
    
    /**
     * Generar reporte de calidad
     */
    generateQualityReport() {
        const overallScore = this.calculateAverageQuality();
        
        const recommendations = [];
        
        Object.entries(this.qualityMetrics).forEach(([key, metric]) => {
            const percentage = (metric.value / metric.target) * 100;
            if (percentage < 60) {
                recommendations.push({
                    icon: '⚠️',
                    text: `Mejorar ${this.getMetricDisplayName(key)} - Actualmente en ${Math.round(percentage)}%`
                });
            }
        });
        
        if (recommendations.length === 0) {
            recommendations.push({
                icon: '✅',
                text: 'Todas las métricas están en niveles aceptables'
            });
        }
        
        return {
            overallScore: Math.round(overallScore),
            recommendations: recommendations,
            generatedAt: new Date()
        };
    }
    
    /**
     * Obtener clase CSS para puntuación de calidad
     */
    getQualityScoreClass(score) {
        if (score >= 80) return 'excellent';
        if (score >= 60) return 'good';
        if (score >= 40) return 'fair';
        return 'poor';
    }
    
    /**
     * Obtener interpretación de puntuación de calidad
     */
    getQualityInterpretation(score) {
        if (score >= 80) return 'Excelente calidad del sistema';
        if (score >= 60) return 'Buena calidad con áreas de mejora';
        if (score >= 40) return 'Calidad aceptable, requiere atención';
        return 'Calidad deficiente, acción urgente requerida';
    }
    
    /**
     * Obtener estado de métrica
     */
    getMetricStatus(percentage) {
        if (percentage >= 80) return '✅ Excelente';
        if (percentage >= 60) return '👍 Bueno';
        if (percentage >= 40) return '⚠️ Regular';
        return '❌ Deficiente';
    }
    
    /**
     * Obtener sugerencias de mejora
     */
    getImprovementSuggestions(metric, percentage) {
        const suggestions = {
            'functionalSuitability': percentage < 60 ? 'Revisar requisitos y funcionalidades implementadas' : 'Continuar con implementación según especificaciones',
            'performanceEfficiency': percentage < 60 ? 'Optimizar algoritmos y mejorar infraestructura' : 'Mantener monitoreo de rendimiento',
            'compatibility': percentage < 60 ? 'Mejorar APIs e integración con sistemas existentes' : 'Validar integraciones periódicamente',
            'usability': percentage < 60 ? 'Realizar pruebas de usuario y mejorar UX' : 'Continuar con testing de usabilidad',
            'reliability': percentage < 60 ? 'Incrementar cobertura de pruebas y manejo de errores' : 'Mantener prácticas de testing',
            'security': percentage < 60 ? 'Implementar controles de seguridad adicionales' : 'Realizar auditorías periódicas',
            'maintainability': percentage < 60 ? 'Mejorar documentación y refactorizar código' : 'Mantener buenas prácticas de desarrollo',
            'portability': percentage < 60 ? 'Estandarizar APIs y reducir dependencias' : 'Validar portabilidad regularmente'
        };
        
        return suggestions[metric] || 'Revisar implementación';
    }
    
    /**
     * Renderizar impacto de acción
     */
    renderActionImpact(impact) {
        if (!impact || Object.keys(impact).length === 0) {
            return '<p class="no-impact">Sin impacto específico</p>';
        }
        
        let impactHTML = '<div class="action-impact-summary">';
        
        if (impact.budget !== undefined) {
            const budgetClass = impact.budget > 0 ? 'positive' : 'negative';
            const budgetIcon = impact.budget > 0 ? '💰' : '💸';
            impactHTML += `
                <div class="impact-item ${budgetClass}">
                    <span class="impact-icon">${budgetIcon}</span>
                    <span>€${Math.abs(impact.budget).toLocaleString()}</span>
                </div>
            `;
        }
        
        if (impact.time !== undefined) {
            const timeClass = impact.time < 0 ? 'positive' : 'negative';
            const timeIcon = impact.time < 0 ? '⚡' : '⏳';
            impactHTML += `
                <div class="impact-item ${timeClass}">
                    <span class="impact-icon">${timeIcon}</span>
                    <span>${Math.abs(impact.time)} meses</span>
                </div>
            `;
        }
        
        if (impact.quality) {
            Object.entries(impact.quality).forEach(([metric, change]) => {
                const qualityClass = change > 0 ? 'positive' : 'negative';
                const qualityIcon = change > 0 ? '📈' : '📉';
                impactHTML += `
                    <div class="impact-item ${qualityClass}">
                        <span class="impact-icon">${qualityIcon}</span>
                        <span>${this.getMetricDisplayName(metric)}: ${change > 0 ? '+' : ''}${change}%</span>
                    </div>
                `;
            });
        }
        
        if (impact.stakeholder_satisfaction) {
            Object.entries(impact.stakeholder_satisfaction).forEach(([stakeholderId, change]) => {
                const stakeholder = this.stakeholders[stakeholderId];
                if (stakeholder) {
                    const stakeholderClass = change > 0 ? 'positive' : 'negative';
                    const stakeholderIcon = change > 0 ? '😊' : '😞';
                    impactHTML += `
                        <div class="impact-item ${stakeholderClass}">
                            <span class="impact-icon">${stakeholderIcon}</span>
                            <span>${stakeholder.name}: ${change > 0 ? '+' : ''}${change}%</span>
                        </div>
                    `;
                }
            });
        }
        
        impactHTML += '</div>';
        return impactHTML;
    }
    
    /**
     * Exportar reporte de calidad
     */
    exportQualityReport() {
        const report = this.generateQualityReport();
        const fullReport = {
            projectInfo: {
                name: 'MedCore Hospital System',
                hospital: 'Hospital San Rafael',
                phase: this.projectState.currentPhase,
                progress: this.projectState.progressPercentage
            },
            qualityMetrics: this.qualityMetrics,
            stakeholderSatisfaction: this.stakeholders,
            projectState: this.projectState,
            report: report,
            exportedAt: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(fullReport, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `medcore_quality_report_${Date.now()}.json`;
        link.click();
        
        this.addAlert('Reporte de calidad exportado', 'success');
    }
    
    /**
     * Limpiar recursos cuando se cierra el juego
     */
    cleanup() {
        // Limpiar intervalos
        if (this.eventIntervalId) {
            clearInterval(this.eventIntervalId);
        }
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }
        if (this.dashboardUpdateInterval) {
            clearInterval(this.dashboardUpdateInterval);
        }
        
        // Guardar progreso final
        this.saveProgress();
        
        console.log('🧹 MedCore Engine limpio y recursos liberados');
    }
    
    /**
     * Reiniciar el proyecto
     */
    restartProject() {
        if (confirm('¿Estás seguro de que quieres reiniciar el proyecto? Se perderá todo el progreso actual.')) {
            // Limpiar datos actuales
            this.cleanup();
            
            // Eliminar sesión actual
            if (this.sessionId) {
                localStorage.removeItem(`medcore_session_${this.sessionId}`);
                localStorage.removeItem('medcore_session_id');
            }
            
            // Recargar página
            location.reload();
        }
    }
    
    /**
     * Exportar reporte completo del proyecto
     */
    exportReport() {
        const fullReport = {
            projectInfo: {
                name: 'MedCore Hospital System',
                hospital: 'Hospital San Rafael',
                sessionId: this.sessionId,
                startDate: this.projectState.startDate,
                currentPhase: this.projectState.currentPhase,
                totalPhases: this.projectState.totalPhases
            },
            projectState: this.projectState,
            qualityMetrics: this.qualityMetrics,
            stakeholders: this.stakeholders,
            gameHistory: this.gameHistory,
            phases: this.phases,
            summary: {
                overallQuality: this.calculateAverageQuality(),
                stakeholderSatisfaction: this.calculateAverageStakeholderSatisfaction(),
                projectHealth: this.calculateProjectHealth(),
                budgetUsed: this.projectState.initialBudget - this.projectState.budget,
                timeElapsed: this.projectState.totalTime - this.projectState.timeRemaining
            },
            exportedAt: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(fullReport, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `medcore_project_report_${this.sessionId}.json`;
        link.click();
        
        this.addAlert('Reporte completo exportado', 'success');
    }
    
    /**
     * Mostrar modal de decisiones estratégicas
     */
    showDecisionModal() {
        const currentPhase = this.phases[this.projectState.currentPhase];
        const availableDecisions = this.getAvailableDecisions(this.projectState.currentPhase);
        
        if (availableDecisions.length === 0) {
            this.addAlert('No hay decisiones disponibles en esta fase actualmente', 'info');
            return;
        }
        
        const modalHTML = `
            <div id="decision-modal" class="modal-overlay" style="display: flex;">
                <div class="modal-container decision-modal">
                    <div class="modal-header">
                        <h2>🎯 Decisiones Estratégicas - ${currentPhase.name}</h2>
                        <button onclick="document.getElementById('decision-modal').remove()">✕</button>
                    </div>
                    
                    <div class="modal-content">
                        <div class="decision-context">
                            <h3>📋 Contexto de la Decisión</h3>
                            <p>Fase actual: <strong>${currentPhase.name}</strong></p>
                            <p>Progreso: ${this.projectState.phaseProgress[this.projectState.currentPhase] || 0}%</p>
                            <p>Presupuesto disponible: €${this.projectState.budget.toLocaleString()}</p>
                            <p>Satisfacción promedio de stakeholders: ${this.calculateAverageStakeholderSatisfaction()}%</p>
                        </div>
                        
                        <div class="available-decisions">
                            <h3>🤔 Decisiones Disponibles</h3>
                            ${availableDecisions.map((decision, index) => `
                                <div class="decision-option" onclick="window.gameEngine.selectDecision(${index})">
                                    <div class="decision-header">
                                        <h4>${decision.title}</h4>
                                        <span class="decision-type ${decision.type}">${decision.type.toUpperCase()}</span>
                                    </div>
                                    <p class="decision-description">${decision.description}</p>
                                    
                                    <div class="decision-impacts">
                                        <div class="impact-preview">
                                            ${decision.impacts.budget ? `<span class="impact budget">💰 ${decision.impacts.budget > 0 ? '+' : ''}€${decision.impacts.budget.toLocaleString()}</span>` : ''}
                                            ${decision.impacts.timeline ? `<span class="impact timeline">⏰ ${decision.impacts.timeline > 0 ? '+' : ''}${decision.impacts.timeline} días</span>` : ''}
                                            ${decision.impacts.quality ? Object.entries(decision.impacts.quality).map(([metric, value]) => 
                                                `<span class="impact quality">📊 ${metric}: ${value > 0 ? '+' : ''}${value}%</span>`
                                            ).join('') : ''}
                                        </div>
                                    </div>
                                    
                                    ${decision.requires ? `
                                        <div class="decision-requirements">
                                            <small>Requiere: ${decision.requires}</small>
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="action-btn secondary" onclick="document.getElementById('decision-modal').remove()">
                            Cancelar
                        </button>
                        <button class="action-btn info" onclick="window.gameEngine.showStandardsGuide()">
                            📚 Ver Guía de Estándares
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    /**
     * Obtener decisiones disponibles para una fase
     */
    getAvailableDecisions(phaseNumber) {
        if (typeof this.getPhaseDecisions === 'function') {
            return this.getPhaseDecisions(phaseNumber);
        }
        
        // Decisiones por defecto si no hay sistema de fases cargado
        const defaultDecisions = {
            1: [
                {
                    id: 'requirements_approach',
                    title: 'Enfoque de Recolección de Requisitos',
                    description: 'Decidir la metodología para capturar requisitos del personal médico',
                    type: 'strategic',
                    impacts: {
                        quality: { functionalSuitability: 15, reliability: 10 },
                        timeline: -5,
                        stakeholders: { 'Dr. García': 10, 'Ana Silva': 15 }
                    }
                },
                {
                    id: 'architecture_decision',
                    title: 'Arquitectura del Sistema',
                    description: 'Seleccionar la arquitectura base para el sistema MedCore',
                    type: 'technical',
                    impacts: {
                        budget: -50000,
                        quality: { performanceEfficiency: 20, maintainability: 15 },
                        timeline: 10
                    }
                }
            ],
            2: [
                {
                    id: 'development_methodology',
                    title: 'Metodología de Desarrollo',
                    description: 'Elegir entre desarrollo ágil o metodologías tradicionales',
                    type: 'process',
                    impacts: {
                        timeline: -10,
                        quality: { usability: 15 },
                        stakeholders: { 'Carlos Ruiz': 20 }
                    }
                }
            ],
            3: [
                {
                    id: 'testing_strategy',
                    title: 'Estrategia de Pruebas',
                    description: 'Definir el enfoque para pruebas del sistema hospitalario',
                    type: 'quality',
                    impacts: {
                        budget: -30000,
                        quality: { reliability: 25, security: 15 },
                        timeline: 5
                    }
                }
            ]
        };
        
        return defaultDecisions[phaseNumber] || [];
    }
    
    /**
     * Seleccionar una decisión específica
     */
    selectDecision(decisionIndex) {
        const availableDecisions = this.getAvailableDecisions(this.projectState.currentPhase);
        const decision = availableDecisions[decisionIndex];
        
        if (!decision) {
            this.addAlert('Decisión no válida', 'error');
            return;
        }
        
        // Aplicar impactos de la decisión
        this.applyDecisionImpacts(decision);
        
        // Registrar en historial
        if (!this.projectState.decisionHistory) {
            this.projectState.decisionHistory = [];
        }
        
        this.projectState.decisionHistory.push({
            phase: this.projectState.currentPhase,
            decision: decision,
            timestamp: new Date().toISOString(),
            impacts: decision.impacts
        });
        
        // Cerrar modal
        const modal = document.getElementById('decision-modal');
        if (modal) modal.remove();
        
        // Actualizar interfaz
        this.loadPhaseContent(this.projectState.currentPhase);
        this.updateDashboard();
        
        // Mostrar resultado
        this.addAlert(`✅ Decisión "${decision.title}" implementada exitosamente`, 'success');
        
        // Verificar si se completa la fase
        this.checkPhaseCompletion();
        
        // Guardar estado del juego
        this.saveToLocalStorage();
    }
    
    /**
     * Aplicar impactos de una decisión
     */
    applyDecisionImpacts(decision) {
        const impacts = decision.impacts;
        
        // Impacto en presupuesto
        if (impacts.budget) {
            this.projectState.budget += impacts.budget;
            console.log(`💰 Presupuesto modificado: ${impacts.budget > 0 ? '+' : ''}€${impacts.budget.toLocaleString()}`);
        }
        
        // Impacto en timeline
        if (impacts.timeline) {
            this.projectState.timeline.totalDays += impacts.timeline;
            console.log(`⏰ Timeline modificado: ${impacts.timeline > 0 ? '+' : ''}${impacts.timeline} días`);
        }
        
        // Impacto en calidad
        if (impacts.quality) {
            Object.entries(impacts.quality).forEach(([metric, value]) => {
                if (this.projectState.qualityMetrics[metric] !== undefined) {
                    this.projectState.qualityMetrics[metric] = Math.max(0, Math.min(100, 
                        this.projectState.qualityMetrics[metric] + value));
                    console.log(`📊 ${metric} modificado: ${value > 0 ? '+' : ''}${value}%`);
                }
            });
        }
        
        // Impacto en stakeholders
        if (impacts.stakeholders) {
            Object.entries(impacts.stakeholders).forEach(([stakeholder, value]) => {
                if (this.projectState.stakeholders[stakeholder]) {
                    this.projectState.stakeholders[stakeholder].satisfaction = Math.max(0, Math.min(100,
                        this.projectState.stakeholders[stakeholder].satisfaction + value));
                    console.log(`👥 ${stakeholder} satisfacción: ${value > 0 ? '+' : ''}${value}%`);
                }
            });
        }
        
        // Incrementar progreso de fase
        const currentProgress = this.projectState.phaseProgress[this.projectState.currentPhase] || 0;
        this.projectState.phaseProgress[this.projectState.currentPhase] = Math.min(100, currentProgress + 15);
    }
    
    /**
     * Revisar entregables de la fase actual
     */
    reviewDeliverables() {
        const currentPhase = this.phases[this.projectState.currentPhase];
        const progress = this.projectState.phaseProgress[this.projectState.currentPhase] || 0;
        
        const deliverablesHTML = `
            <div id="deliverables-modal" class="modal-overlay" style="display: flex;">
                <div class="modal-container deliverables-modal">
                    <div class="modal-header">
                        <h2>📋 Entregables - ${currentPhase.name}</h2>
                        <button onclick="document.getElementById('deliverables-modal').remove()">✕</button>
                    </div>
                    
                    <div class="modal-content">
                        <div class="phase-overview">
                            <h3>📊 Estado de la Fase</h3>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                                <span class="progress-text">${progress}% Completado</span>
                            </div>
                        </div>
                        
                        <div class="deliverables-list">
                            <h3>📄 Entregables Esperados</h3>
                            ${currentPhase.deliverables.map((deliverable, index) => `
                                <div class="deliverable-item ${progress > (index + 1) * (100 / currentPhase.deliverables.length) ? 'completed' : 'pending'}">
                                    <div class="deliverable-status">
                                        ${progress > (index + 1) * (100 / currentPhase.deliverables.length) ? '✅' : '⏳'}
                                    </div>
                                    <div class="deliverable-content">
                                        <h4>${deliverable}</h4>
                                        <p>Estado: ${progress > (index + 1) * (100 / currentPhase.deliverables.length) ? 'Completado' : 'En progreso'}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="standards-applied">
                            <h3>📚 Estándares Aplicados</h3>
                            ${this.getStandardsForPhase ? Object.keys(this.getStandardsForPhase(this.projectState.currentPhase)).map(standardId => 
                                `<span class="standard-tag">${standardId}</span>`
                            ).join('') : '<p>Estándares ISO aplicables según la fase del proyecto</p>'}
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="action-btn secondary" onclick="document.getElementById('deliverables-modal').remove()">
                            Cerrar
                        </button>
                        <button class="action-btn primary" onclick="window.gameEngine.completeDeliverable()">
                            ✅ Marcar Entregable Completado
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', deliverablesHTML);
    }
    
    /**
     * Completar un entregable de la fase
     */
    completeDeliverable() {
        const currentProgress = this.projectState.phaseProgress[this.projectState.currentPhase] || 0;
        const newProgress = Math.min(100, currentProgress + 20);
        
        this.projectState.phaseProgress[this.projectState.currentPhase] = newProgress;
        
        // Cerrar modal
        const modal = document.getElementById('deliverables-modal');
        if (modal) modal.remove();
        
        // Actualizar interfaz
        this.updateDashboard();
        this.loadPhaseContent(this.projectState.currentPhase);
        
        this.addAlert('✅ Progreso de entregable registrado', 'success');
        
        // Verificar finalización de fase
        if (newProgress >= 100) {
            this.checkPhaseCompletion();
        }
        
        // Guardar estado
        this.saveToLocalStorage();
    }
    
    /**
     * Consultar stakeholders
     */
    consultStakeholders() {
        const stakeholdersHTML = `
            <div id="stakeholders-modal" class="modal-overlay" style="display: flex;">
                <div class="modal-container stakeholders-modal">
                    <div class="modal-header">
                        <h2>👥 Consulta de Stakeholders</h2>
                        <button onclick="document.getElementById('stakeholders-modal').remove()">✕</button>
                    </div>
                    
                    <div class="modal-content">
                        <div class="stakeholders-grid">
                            ${Object.entries(this.projectState.stakeholders).map(([name, data]) => `
                                <div class="stakeholder-card" onclick="window.gameEngine.consultSpecificStakeholder('${name}')">
                                    <div class="stakeholder-avatar">
                                        ${data.role.includes('Doctor') ? '👨‍⚕️' : 
                                          data.role.includes('Enfermera') ? '👩‍⚕️' : 
                                          data.role.includes('IT') ? '👨‍💻' : 
                                          data.role.includes('Director') ? '👨‍💼' : '👤'}
                                    </div>
                                    <div class="stakeholder-info">
                                        <h4>${name}</h4>
                                        <p>${data.role}</p>
                                        <div class="satisfaction-meter">
                                            <div class="satisfaction-bar">
                                                <div class="satisfaction-fill" style="width: ${data.satisfaction}%; background: ${data.satisfaction > 70 ? '#4CAF50' : data.satisfaction > 40 ? '#FF9800' : '#F44336'}"></div>
                                            </div>
                                            <span>${data.satisfaction}% satisfacción</span>
                                        </div>
                                        <div class="priorities">
                                            <small>Prioridades: ${data.priorities.join(', ')}</small>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="action-btn secondary" onclick="document.getElementById('stakeholders-modal').remove()">
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', stakeholdersHTML);
    }
    
    /**
     * Consultar stakeholder específico
     */
    consultSpecificStakeholder(stakeholderName) {
        const stakeholder = this.projectState.stakeholders[stakeholderName];
        if (!stakeholder) return;
        
        // Cerrar modal anterior
        const modal = document.getElementById('stakeholders-modal');
        if (modal) modal.remove();
        
        // Generar feedback específico basado en su rol y satisfacción
        const feedback = this.generateStakeholderFeedback(stakeholderName, stakeholder);
        
        const consultationHTML = `
            <div id="consultation-modal" class="modal-overlay" style="display: flex;">
                <div class="modal-container consultation-modal">
                    <div class="modal-header">
                        <h2>💬 Consulta con ${stakeholderName}</h2>
                        <button onclick="document.getElementById('consultation-modal').remove()">✕</button>
                    </div>
                    
                    <div class="modal-content">
                        <div class="stakeholder-profile">
                            <div class="profile-header">
                                <div class="avatar-large">
                                    ${stakeholder.role.includes('Doctor') ? '👨‍⚕️' : 
                                      stakeholder.role.includes('Enfermera') ? '👩‍⚕️' : 
                                      stakeholder.role.includes('IT') ? '👨‍💻' : 
                                      stakeholder.role.includes('Director') ? '👨‍💼' : '👤'}
                                </div>
                                <div class="profile-info">
                                    <h3>${stakeholderName}</h3>
                                    <p>${stakeholder.role}</p>
                                    <div class="satisfaction-level ${stakeholder.satisfaction > 70 ? 'high' : stakeholder.satisfaction > 40 ? 'medium' : 'low'}">
                                        Satisfacción: ${stakeholder.satisfaction}%
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="consultation-content">
                            <h3>💬 Feedback Actual</h3>
                            <div class="feedback-message">
                                "${feedback.message}"
                            </div>
                            
                            <h3>🎯 Principales Preocupaciones</h3>
                            <ul class="concerns-list">
                                ${feedback.concerns.map(concern => `<li>${concern}</li>`).join('')}
                            </ul>
                            
                            <h3>💡 Sugerencias</h3>
                            <ul class="suggestions-list">
                                ${feedback.suggestions.map(suggestion => `<li>${suggestion}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="consultation-actions">
                            <h3>🤝 Acciones Disponibles</h3>
                            <div class="action-buttons">
                                <button class="action-btn primary" onclick="window.gameEngine.addressConcern('${stakeholderName}')">
                                    🔧 Abordar Preocupaciones
                                </button>
                                <button class="action-btn secondary" onclick="window.gameEngine.scheduleFollowUp('${stakeholderName}')">
                                    📅 Programar Seguimiento
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="action-btn secondary" onclick="document.getElementById('consultation-modal').remove()">
                            Finalizar Consulta
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', consultationHTML);
    }
    
    /**
     * Generar feedback específico del stakeholder
     */
    generateStakeholderFeedback(name, stakeholder) {
        const satisfaction = stakeholder.satisfaction;
        let message, concerns, suggestions;
        
        if (satisfaction >= 70) {
            message = `Estoy muy satisfecho con el progreso del proyecto MedCore. Creo que vamos por buen camino.`;
            concerns = [
                'Mantener el ritmo actual de desarrollo',
                'Asegurar que se cumplan todos los plazos'
            ];
            suggestions = [
                'Continuar con la comunicación regular',
                'Documentar las mejores prácticas identificadas'
            ];
        } else if (satisfaction >= 40) {
            message = `El proyecto va bien, pero tengo algunas preocupaciones que me gustaría discutir.`;
            concerns = [
                'Algunos requisitos podrían estar mejor definidos',
                'Necesitamos mayor claridad en ciertos aspectos técnicos'
            ];
            suggestions = [
                'Organizar sesiones de revisión más frecuentes',
                'Mejorar la documentación técnica'
            ];
        } else {
            message = `Estoy preocupado por el rumbo del proyecto. Necesitamos abordar varios problemas importantes.`;
            concerns = [
                'El proyecto no está cumpliendo mis expectativas',
                'Faltan elementos críticos para mi área de trabajo',
                'La comunicación no es suficientemente clara'
            ];
            suggestions = [
                'Reunión de emergencia para realinear objetivos',
                'Revisar completamente los requisitos',
                'Establecer un plan de recuperación'
            ];
        }
        
        // Personalizar según el rol
        if (stakeholder.role.includes('Doctor')) {
            concerns.push('Integración con los flujos de trabajo médicos');
            suggestions.push('Validar con más personal médico');
        } else if (stakeholder.role.includes('IT')) {
            concerns.push('Arquitectura técnica y escalabilidad');
            suggestions.push('Revisar las especificaciones técnicas');
        }
        
        return { message, concerns, suggestions };
    }
    
    /**
     * Abordar preocupaciones del stakeholder
     */
    addressConcern(stakeholderName) {
        const stakeholder = this.projectState.stakeholders[stakeholderName];
        if (!stakeholder) return;
        
        // Mejorar satisfacción
        const improvement = Math.random() * 20 + 10; // 10-30% mejora
        stakeholder.satisfaction = Math.min(100, stakeholder.satisfaction + improvement);
        
        // Aplicar costo en tiempo y recursos
        this.projectState.budget -= 5000; // Costo de abordar preocupaciones
        this.projectState.timeline.totalDays += 2; // Tiempo adicional
        
        // Cerrar modal
        const modal = document.getElementById('consultation-modal');
        if (modal) modal.remove();
        
        // Actualizar interfaz
        this.updateDashboard();
        
        this.addAlert(`✅ Preocupaciones de ${stakeholderName} abordadas. Satisfacción: +${Math.round(improvement)}%`, 'success');
        
        // Guardar estado
        this.saveToLocalStorage();
    }
    
    /**
     * Programar seguimiento con stakeholder
     */
    scheduleFollowUp(stakeholderName) {
        // Mejorar ligeramente la satisfacción por la atención
        const stakeholder = this.projectState.stakeholders[stakeholderName];
        if (stakeholder) {
            stakeholder.satisfaction = Math.min(100, stakeholder.satisfaction + 5);
        }
        
        // Cerrar modal
        const modal = document.getElementById('consultation-modal');
        if (modal) modal.remove();
        
        this.addAlert(`📅 Seguimiento programado con ${stakeholderName}`, 'info');
        
        // Guardar estado
        this.saveToLocalStorage();
    }
    
    /**
     * Verificar si la fase está completa
     */
    checkPhaseCompletion() {
        const currentProgress = this.projectState.phaseProgress[this.projectState.currentPhase] || 0;
        
        if (currentProgress >= 100) {
            this.addAlert(`🎉 ¡Fase ${this.projectState.currentPhase} completada!`, 'success');
            
            // Avanzar a la siguiente fase si está disponible
            if (this.projectState.currentPhase < 5) {
                setTimeout(() => {
                    this.advanceToNextPhase();
                }, 2000);
            } else {
                this.projectCompleted();
            }
        }
    }
    
    /**
     * Avanzar a la siguiente fase
     */
    advanceToNextPhase() {
        this.projectState.currentPhase++;
        this.projectState.phaseProgress[this.projectState.currentPhase] = 0;
        
        // Actualizar métricas base para la nueva fase
        Object.keys(this.projectState.qualityMetrics).forEach(metric => {
            this.projectState.qualityMetrics[metric] = Math.max(30, this.projectState.qualityMetrics[metric] - 5);
        });
        
        this.loadPhaseContent(this.projectState.currentPhase);
        this.updateDashboard();
        
        this.addAlert(`🚀 Avanzando a ${this.phases[this.projectState.currentPhase].name}`, 'info');
        
        // Guardar estado
        this.saveToLocalStorage();
    }
    
    /**
     * Proyecto completado
     */
    projectCompleted() {
        const finalScore = this.calculateFinalScore();
        
        const completionHTML = `
            <div id="completion-modal" class="modal-overlay" style="display: flex;">
                <div class="modal-container completion-modal">
                    <div class="modal-header">
                        <h2>🏆 ¡Proyecto MedCore Completado!</h2>
                    </div>
                    
                    <div class="modal-content">
                        <div class="final-score">
                            <h3>📊 Puntuación Final</h3>
                            <div class="score-display">
                                <span class="score-value">${finalScore}</span>
                                <span class="score-max">/100</span>
                            </div>
                            <div class="score-grade ${this.getScoreGrade(finalScore)}">
                                ${this.getScoreDescription(finalScore)}
                            </div>
                        </div>
                        
                        <div class="project-summary">
                            <h3>📋 Resumen del Proyecto</h3>
                            <p><strong>Presupuesto final:</strong> €${this.projectState.budget.toLocaleString()}</p>
                            <p><strong>Duración:</strong> ${this.projectState.timeline.totalDays} días</p>
                            <p><strong>Decisiones tomadas:</strong> ${this.projectState.decisionHistory?.length || 0}</p>
                            <p><strong>Satisfacción promedio:</strong> ${this.calculateAverageStakeholderSatisfaction()}%</p>
                        </div>
                        
                        <div class="achievements">
                            <h3>🏅 Logros Obtenidos</h3>
                            ${this.calculateAchievements().map(achievement => `
                                <div class="achievement-item">
                                    <span class="achievement-icon">${achievement.icon}</span>
                                    <span class="achievement-text">${achievement.name}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <button class="action-btn primary" onclick="window.gameEngine.exportFinalReport()">
                            📄 Exportar Reporte Final
                        </button>
                        <button class="action-btn secondary" onclick="window.gameEngine.startNewProject()">
                            🔄 Nuevo Proyecto
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', completionHTML);
    }
    
    /**
     * Calcular puntuación final
     */
    calculateFinalScore() {
        const qualityScore = this.calculateAverageQuality();
        const stakeholderScore = this.calculateAverageStakeholderSatisfaction();
        const budgetScore = Math.max(0, (this.projectState.budget / 2500000) * 100);
        const timelineScore = Math.max(0, 100 - ((this.projectState.timeline.totalDays - 540) / 540) * 100);
        
        return Math.round((qualityScore * 0.4 + stakeholderScore * 0.3 + budgetScore * 0.2 + timelineScore * 0.1));
    }
    
    /**
     * Obtener grado de puntuación
     */
    getScoreGrade(score) {
        if (score >= 90) return 'excellent';
        if (score >= 80) return 'good';
        if (score >= 70) return 'average';
        return 'needs-improvement';
    }
    
    /**
     * Obtener descripción de puntuación
     */
    getScoreDescription(score) {
        if (score >= 90) return '¡Excelente! Proyecto excepcional';
        if (score >= 80) return 'Buen trabajo, proyecto exitoso';
        if (score >= 70) return 'Proyecto aceptable';
        return 'Necesita mejoras significativas';
    }
    
    /**
     * Calcular logros obtenidos
     */
    calculateAchievements() {
        const achievements = [];
        
        if (this.projectState.budget > 0) {
            achievements.push({ icon: '💰', name: 'Gestor Financiero - Proyecto dentro del presupuesto' });
        }
        
        if (this.calculateAverageStakeholderSatisfaction() >= 80) {
            achievements.push({ icon: '👥', name: 'Líder Popular - Alta satisfacción de stakeholders' });
        }
        
        if (this.calculateAverageQuality() >= 85) {
            achievements.push({ icon: '🏆', name: 'Maestro de la Calidad - Excelencia en métricas' });
        }
        
        if (this.projectState.timeline.totalDays <= 540) {
            achievements.push({ icon: '⚡', name: 'Velocidad Máxima - Proyecto a tiempo' });
        }
        
        const decisionsCount = this.projectState.decisionHistory?.length || 0;
        if (decisionsCount >= 15) {
            achievements.push({ icon: '🧠', name: 'Estratega - Múltiples decisiones exitosas' });
        }
        
        return achievements;
    }
    
    /**
     * Iniciar nuevo proyecto
     */
    startNewProject() {
        if (confirm('¿Estás seguro de que quieres iniciar un nuevo proyecto? Se perderá el progreso actual.')) {
            localStorage.removeItem(`medcore_save_${this.sessionId}`);
            location.reload();
        }
    }
}
}

// Hacer disponible globalmente
window.MedCoreEngine = MedCoreEngine;

console.log('✅ MedCore Engine cargado correctamente');