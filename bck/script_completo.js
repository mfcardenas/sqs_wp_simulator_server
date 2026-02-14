// === LABORATORIO ISO - SISTEMA COMPLETO ===

// === CONFIGURACIÓN Y DATOS ===
const DataManager = {
    scenarios: {
        0: {
            name: 'E-commerce Platform',
            icon: '🛍️',
            description: 'Plataforma de comercio electrónico escalable para startup tecnológica',
            context: 'Una startup tecnológica necesita desarrollar una plataforma de e-commerce que pueda escalar de 1,000 a 1 millón de usuarios en 2 años, competindo con Amazon en nicho específico.',
            challenges: [
                'Escalabilidad desde MVP hasta enterprise',
                'Product-market fit incierto en mercado competitivo',
                'Recursos limitados de desarrollo (5 desarrolladores)',
                'Presión de time-to-market (6 meses para MVP)',
                'Integración con múltiples sistemas de pago'
            ],
            successCriteria: [
                'Carga de 10,000 usuarios concurrentes sin degradación',
                'Tiempo de carga < 2 segundos en página principal',
                'Tasa de conversión > 2.5%',
                '99.9% uptime en horarios pico',
                'Retención de usuarios > 40% a los 3 meses'
            ],
            qualities: {
                'functional-suitability': 85,
                'performance-efficiency': 90,
                'compatibility': 85,
                'usability': 88,
                'reliability': 80,
                'security': 85,
                'maintainability': 75,
                'portability': 80
            }
        },
        1: {
            name: 'Sistema Hospitalario',
            icon: '🏥',
            description: 'Sistema crítico de gestión hospitalaria con historiales médicos electrónicos',
            context: 'Hospital de 500 camas necesita reemplazar sistema legacy de 15 años. Maneja 2,000 pacientes diarios y debe integrar con equipos médicos y sistemas de seguros.',
            challenges: [
                'Migración de datos críticos sin downtime',
                'Integración con 50+ equipos médicos diferentes',
                'Cumplimiento HIPAA y regulaciones médicas',
                'Entrenamiento de 1,200 profesionales médicos',
                'Disponibilidad 24/7 para emergencias'
            ],
            successCriteria: [
                'Cero pérdida de datos durante migración',
                'Disponibilidad 99.99% en áreas críticas',
                'Tiempo de respuesta < 1 segundo para consultas',
                'Cumplimiento 100% auditorías regulatorias',
                'Reducción 50% en tiempo de admisiones'
            ],
            qualities: {
                'functional-suitability': 95,
                'performance-efficiency': 85,
                'compatibility': 90,
                'usability': 75,
                'reliability': 98,
                'security': 95,
                'maintainability': 85,
                'portability': 70
            }
        },
        2: {
            name: 'Análisis Financiero',
            icon: '📊',
            description: 'Sistema de análisis financiero con AI para trading algorítmico',
            context: 'Hedge fund gestiona $2B y necesita plataforma de análisis en tiempo real. Debe procesar feeds de 50+ bolsas mundiales y ejecutar operaciones microsegundos.',
            challenges: [
                'Latencia ultra-baja (< 10 microsegundos)',
                'Procesamiento de 10TB datos diarios',
                'Regulaciones financieras múltiples jurisdicciones',
                'Algoritmos ML para detección de patterns',
                'Recuperación ante desastres instantánea'
            ],
            successCriteria: [
                'Latencia promedio < 5 microsegundos',
                'Precisión modelos ML > 85%',
                'Cero errores en ejecución de trades',
                'Throughput 1M+ transacciones/segundo',
                'ROI del sistema > 300% anual'
            ],
            qualities: {
                'functional-suitability': 90,
                'performance-efficiency': 98,
                'compatibility': 85,
                'usability': 70,
                'reliability': 95,
                'security': 90,
                'maintainability': 80,
                'portability': 75
            }
        },
        3: {
            name: 'App Móvil Social',
            icon: '📱',
            description: 'Aplicación móvil de redes sociales con video streaming en tiempo real',
            context: 'Startup compite con TikTok/Instagram. Necesita manejar videos HD, efectos AR/VR, y crecer de 0 a 10M usuarios en 18 meses con presupuesto limitado.',
            challenges: [
                'Fragmentación 3,000+ modelos Android',
                'Optimización para conexiones 2G-5G',
                'Moderación de contenido con IA',
                'Algoritmo de recomendación personalizado',
                'Monetización sin afectar experiencia'
            ],
            successCriteria: [
                'Tiempo de carga video < 2 segundos',
                'Crash rate < 0.1% en ambas plataformas',
                'Engagement diario > 45 minutos/usuario',
                'Rating > 4.6 estrellas en stores',
                'Crecimiento orgánico > 50% nuevos usuarios'
            ],
            qualities: {
                'functional-suitability': 80,
                'performance-efficiency': 90,
                'compatibility': 95,
                'usability': 95,
                'reliability': 85,
                'security': 80,
                'maintainability': 70,
                'portability': 98
            }
        }
    },

    qualityCharacteristics: {
        'functional-suitability': {
            name: 'Adecuación Funcional',
            description: 'Grado en que el producto proporciona funciones que satisfacen necesidades declaradas e implícitas',
            subcharacteristics: ['Completitud funcional', 'Corrección funcional', 'Pertinencia funcional']
        },
        'performance-efficiency': {
            name: 'Eficiencia de Desempeño',
            description: 'Desempeño relativo a la cantidad de recursos utilizados bajo condiciones determinadas',
            subcharacteristics: ['Comportamiento temporal', 'Utilización de recursos', 'Capacidad']
        },
        'compatibility': {
            name: 'Compatibilidad',
            description: 'Grado en que el producto puede intercambiar información con otros productos',
            subcharacteristics: ['Coexistencia', 'Interoperabilidad']
        },
        'usability': {
            name: 'Usabilidad',
            description: 'Grado en que el producto puede ser usado por usuarios específicos',
            subcharacteristics: ['Reconocimiento de idoneidad', 'Capacidad de aprendizaje', 'Operabilidad', 'Protección de errores', 'Estética de interfaz', 'Accesibilidad']
        },
        'reliability': {
            name: 'Confiabilidad',
            description: 'Grado en que el sistema realiza funciones específicas bajo condiciones específicas',
            subcharacteristics: ['Madurez', 'Disponibilidad', 'Tolerancia a fallos', 'Capacidad de recuperación']
        },
        'security': {
            name: 'Seguridad',
            description: 'Grado en que el producto protege información y datos',
            subcharacteristics: ['Confidencialidad', 'Integridad', 'No repudio', 'Responsabilidad', 'Autenticidad']
        },
        'maintainability': {
            name: 'Mantenibilidad',
            description: 'Grado de efectividad y eficiencia con que el producto puede ser modificado',
            subcharacteristics: ['Modularidad', 'Reutilización', 'Analizabilidad', 'Capacidad de modificación', 'Capacidad de prueba']
        },
        'portability': {
            name: 'Portabilidad',
            description: 'Grado de efectividad y eficiencia con que el sistema puede ser transferido',
            subcharacteristics: ['Adaptabilidad', 'Instalabilidad', 'Reemplazabilidad']
        }
    }
};

const AppConfig = {
    currentView: 'view-cycle',
    currentScenario: 0,
    userProgress: {},
    qualityCharacteristics: Object.keys(DataManager.qualityCharacteristics)
};

// === GESTORES DE INTERFAZ ===
const UIManager = {
    init: () => {
        console.log('🚀 Inicializando Laboratorio ISO...');
        UIManager.setupNavigation();
        UIManager.setupWizard();
        UIManager.initializeViews();
        UIManager.showTutorial();
    },

    setupNavigation: () => {
        const navItems = document.querySelectorAll('[data-view]');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const viewId = item.getAttribute('data-view');
                UIManager.switchView(viewId);
            });
        });
    },

    switchView: (viewId) => {
        console.log(`🔄 Cambiando a vista: ${viewId}`);
        
        // Actualizar navegación
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewId}"]`)?.classList.add('active');

        // Cambiar contenido
        document.querySelectorAll('.view-content').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(viewId)?.classList.add('active');
        
        AppConfig.currentView = viewId;
        
        // Actualizar contenido específico de la vista
        ViewManager.updateCurrentView(viewId);
        VisualizationManager.renderCurrentView(viewId);
    },

    setupWizard: () => {
        const wizard = document.getElementById('tutorial-wizard');
        if (!wizard) return;

        const nextBtn = document.getElementById('wizard-next');
        const prevBtn = document.getElementById('wizard-prev');
        const startBtn = document.getElementById('wizard-start');
        
        let currentStep = 1;
        const totalSteps = document.querySelectorAll('.wizard-step').length;

        const updateStep = () => {
            document.querySelectorAll('.wizard-step').forEach((step, index) => {
                step.classList.toggle('active', index + 1 === currentStep);
            });

            if (prevBtn) prevBtn.disabled = currentStep === 1;
            if (nextBtn) nextBtn.style.display = currentStep === totalSteps ? 'none' : 'inline-block';
            if (startBtn) startBtn.style.display = currentStep === totalSteps ? 'inline-block' : 'none';
        };

        nextBtn?.addEventListener('click', () => {
            if (currentStep < totalSteps) {
                currentStep++;
                updateStep();
            }
        });

        prevBtn?.addEventListener('click', () => {
            if (currentStep > 1) {
                currentStep--;
                updateStep();
            }
        });

        startBtn?.addEventListener('click', () => {
            UIManager.closeTutorial();
        });

        updateStep();
    },

    initializeViews: () => {
        // Inicializar scenario selector
        UIManager.setupScenarioSelector();
    },

    setupScenarioSelector: () => {
        const scenarioIndicator = document.getElementById('nav-current-scenario');
        if (scenarioIndicator) {
            scenarioIndicator.textContent = DataManager.scenarios[AppConfig.currentScenario].name;
            scenarioIndicator.style.cursor = 'pointer';
            scenarioIndicator.addEventListener('click', UIManager.showScenarioSelector);
        }
    },

    showScenarioSelector: () => {
        const scenarios = Object.values(DataManager.scenarios);
        const content = `
            <div class="scenario-selector-modal">
                <h3>🎯 Seleccionar Escenario de Desarrollo</h3>
                <div class="scenarios-grid">
                    ${scenarios.map((scenario, index) => `
                        <div class="scenario-option ${index === AppConfig.currentScenario ? 'selected' : ''}" 
                             onclick="UIManager.selectScenario(${index})">
                            <div class="scenario-icon">${scenario.icon}</div>
                            <h4>${scenario.name}</h4>
                            <p>${scenario.description}</p>
                            <div class="scenario-complexity">
                                <span class="complexity-label">Complejidad:</span>
                                <div class="complexity-bar">
                                    <div class="complexity-fill" style="width: ${ViewManager.calculateComplexity(scenario)}%"></div>
                                </div>
                                <span class="complexity-value">${ViewManager.calculateComplexity(scenario)}%</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        ViewManager.showModal(content);
    },

    selectScenario: (scenarioIndex) => {
        AppConfig.currentScenario = scenarioIndex;
        document.getElementById('nav-current-scenario').textContent = DataManager.scenarios[scenarioIndex].name;
        ViewManager.closeModal();
        ViewManager.updateCurrentView(AppConfig.currentView);
        VisualizationManager.renderCurrentView(AppConfig.currentView);
    },

    showTutorial: () => {
        const wizard = document.getElementById('tutorial-wizard');
        if (wizard) wizard.classList.add('active');
    },

    closeTutorial: () => {
        const wizard = document.getElementById('tutorial-wizard');
        if (wizard) wizard.classList.remove('active');
    },

    showProgress: () => {
        const progress = ViewManager.calculateUserProgress();
        const content = `
            <div class="progress-modal">
                <h3>📊 Tu Progreso en el Laboratorio</h3>
                <div class="progress-overview">
                    <div class="progress-metric">
                        <span class="metric-label">Vistas Exploradas:</span>
                        <span class="metric-value">${progress.viewsExplored}/4</span>
                        <div class="metric-bar">
                            <div class="metric-fill" style="width: ${progress.viewsExplored/4*100}%"></div>
                        </div>
                    </div>
                    <div class="progress-metric">
                        <span class="metric-label">Escenarios Analizados:</span>
                        <span class="metric-value">${progress.scenariosAnalyzed}/4</span>
                        <div class="metric-bar">
                            <div class="metric-fill" style="width: ${progress.scenariosAnalyzed/4*100}%"></div>
                        </div>
                    </div>
                    <div class="progress-metric">
                        <span class="metric-label">Tiempo en Sesión:</span>
                        <span class="metric-value">${progress.sessionTime}</span>
                    </div>
                </div>
            </div>
        `;
        ViewManager.showModal(content);
    },

    exportProgress: () => {
        const data = {
            timestamp: new Date().toISOString(),
            currentScenario: AppConfig.currentScenario,
            currentView: AppConfig.currentView,
            userProgress: AppConfig.userProgress,
            scenarios: DataManager.scenarios
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `laboratorio-iso-progreso-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    },

    showScenarioComparison: () => {
        const scenarios = Object.values(DataManager.scenarios);
        const content = `
            <div class="comparison-modal">
                <h3>⚖️ Comparación de Escenarios</h3>
                <div class="comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Aspecto</th>
                                ${scenarios.map(s => `<th>${s.icon} ${s.name}</th>`).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Complejidad</strong></td>
                                ${scenarios.map(s => `<td>${ViewManager.calculateComplexity(s)}%</td>`).join('')}
                            </tr>
                            <tr>
                                <td><strong>Riesgo</strong></td>
                                ${scenarios.map(s => `<td>${ViewManager.calculateRisk(s)}%</td>`).join('')}
                            </tr>
                            <tr>
                                <td><strong>Tipo</strong></td>
                                ${scenarios.map((s, i) => `<td>${DataManager.scenarios[i].name}</td>`).join('')}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        ViewManager.showModal(content);
    }
};

// === GESTOR DE VISTAS ===
const ViewManager = {
    updateCurrentView: (viewId) => {
        switch(viewId) {
            case 'view-cycle':
                ViewManager.updateCycleView();
                break;
            case 'view-quality':
                ViewManager.updateQualityView();
                break;
            case 'view-requirements':
                ViewManager.updateRequirementsView();
                break;
            case 'view-interaction':
                ViewManager.updateInteractionView();
                break;
        }
    },

    updateCycleView: () => {
        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        const detailsContainer = document.getElementById('scenario-details');
        
        if (detailsContainer && scenario) {
            const complexity = ViewManager.calculateComplexity(scenario);
            const risk = ViewManager.calculateRisk(scenario);
            
            detailsContainer.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${scenario.icon} ${scenario.name}</h3>
                        <p class="card-subtitle">${scenario.description}</p>
                    </div>
                    
                    <div class="scenario-overview">
                        <h4>📊 Métricas del Proyecto</h4>
                        <div class="metric-grid">
                            <div class="metric-item">
                                <span class="metric-label">Complejidad Técnica</span>
                                <span class="metric-value">${complexity}%</span>
                                <div class="metric-bar">
                                    <div class="metric-fill" style="width: ${complexity}%"></div>
                                </div>
                            </div>
                            <div class="metric-item">
                                <span class="metric-label">Factor de Riesgo</span>
                                <span class="metric-value">${risk}%</span>
                                <div class="metric-bar">
                                    <div class="metric-fill" style="width: ${risk}%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="scenario-documentation">
                        <h4>📋 Contexto del Proyecto</h4>
                        <div class="case-study">
                            <div class="case-context">
                                <strong>Situación:</strong> ${scenario.context}
                            </div>
                            <div class="case-challenges">
                                <strong>Desafíos principales:</strong>
                                <ul>
                                    ${scenario.challenges.map(c => `<li>${c}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="case-success-criteria">
                                <strong>Criterios de éxito:</strong>
                                <ul>
                                    ${scenario.successCriteria.map(c => `<li>${c}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    },

    updateQualityView: () => {
        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        const qualityContainer = document.getElementById('quality-characteristics-grid');
        
        if (qualityContainer && scenario) {
            qualityContainer.innerHTML = '';
            
            Object.entries(scenario.qualities).forEach(([key, value]) => {
                const characteristic = DataManager.qualityCharacteristics[key];
                const item = document.createElement('div');
                item.className = 'quality-item';
                item.innerHTML = `
                    <div class="quality-header">
                        <h4>${characteristic.name}</h4>
                        <span class="quality-score">${value}%</span>
                    </div>
                    <div class="quality-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${value}%"></div>
                        </div>
                    </div>
                    <p class="quality-description">${characteristic.description}</p>
                    <div class="quality-subcharacteristics">
                        <strong>Sub-características:</strong>
                        <ul>
                            ${characteristic.subcharacteristics.map(sub => `<li>${sub}</li>`).join('')}
                        </ul>
                    </div>
                `;
                qualityContainer.appendChild(item);
            });
        }
    },

    updateRequirementsView: () => {
        const container = document.getElementById('requirements-content');
        if (!container) return;

        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        container.innerHTML = `
            <div class="requirements-analysis">
                <h3>📋 Análisis de Requisitos - ${scenario.name}</h3>
                
                <div class="requirements-overview">
                    <div class="req-metric">
                        <span class="req-label">Complejidad de Requisitos</span>
                        <span class="req-value">${ViewManager.calculateRequirementsComplexity(scenario)}%</span>
                    </div>
                    <div class="req-metric">
                        <span class="req-label">Nivel de Detalle</span>
                        <span class="req-value">${ViewManager.calculateRequirementsDetail(scenario)}%</span>
                    </div>
                </div>

                <div class="requirements-categories">
                    <div class="req-category">
                        <h4>📋 Requisitos Funcionales</h4>
                        <p>Definen QUÉ debe hacer el sistema</p>
                        ${ViewManager.generateRequirementsExamples(scenario, 'functional')}
                    </div>
                    
                    <div class="req-category">
                        <h4>⚙️ Requisitos No Funcionales</h4>
                        <p>Definen CÓMO debe comportarse el sistema</p>
                        ${ViewManager.generateRequirementsExamples(scenario, 'non-functional')}
                    </div>
                    
                    <div class="req-category">
                        <h4>👤 Historias de Usuario</h4>
                        <p>Definen funcionalidades desde perspectiva del usuario</p>
                        ${ViewManager.generateRequirementsExamples(scenario, 'user-stories')}
                    </div>
                </div>
            </div>
        `;
    },

    updateInteractionView: () => {
        const container = document.getElementById('interaction-content');
        if (!container) return;

        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        container.innerHTML = `
            <div class="interaction-analysis">
                <h3>🎨 Análisis de Interacción - ${scenario.name}</h3>
                
                <div class="usability-metrics">
                    <div class="usability-metric">
                        <span class="metric-label">Índice de Usabilidad</span>
                        <span class="metric-value">${scenario.qualities.usability}%</span>
                        <div class="metric-bar">
                            <div class="metric-fill" style="width: ${scenario.qualities.usability}%"></div>
                        </div>
                    </div>
                </div>

                <div class="interaction-principles">
                    <h4>📐 Principios ISO 9241 Aplicados</h4>
                    ${ViewManager.generateUsabilityPrinciples(scenario)}
                </div>
                
                <div class="user-experience">
                    <h4>👥 Consideraciones de UX</h4>
                    ${ViewManager.generateUXConsiderations(scenario)}
                </div>
            </div>
        `;
    },

    // Funciones auxiliares
    calculateComplexity: (scenario) => {
        const weights = {
            'functional-suitability': 0.15,
            'performance-efficiency': 0.15,
            'compatibility': 0.1,
            'usability': 0.1,
            'reliability': 0.15,
            'security': 0.15,
            'maintainability': 0.1,
            'portability': 0.1
        };
        
        return Math.round(Object.entries(scenario.qualities)
            .reduce((total, [key, value]) => total + (value * (weights[key] || 0)), 0));
    },

    calculateRisk: (scenario) => {
        const complexityFactor = ViewManager.calculateComplexity(scenario);
        const reliabilityFactor = 100 - scenario.qualities.reliability;
        const securityFactor = 100 - scenario.qualities.security;
        
        return Math.round((complexityFactor * 0.4 + reliabilityFactor * 0.3 + securityFactor * 0.3));
    },

    calculateRequirementsComplexity: (scenario) => {
        return Math.round((scenario.qualities['functional-suitability'] + scenario.qualities['compatibility']) / 2);
    },

    calculateRequirementsDetail: (scenario) => {
        return Math.round((scenario.qualities['maintainability'] + scenario.qualities['usability']) / 2);
    },

    generateRequirementsExamples: (scenario, type) => {
        const examples = {
            'functional': [
                'El sistema debe autenticar usuarios mediante email y contraseña',
                'El sistema debe procesar pagos con múltiples métodos de pago',
                'El sistema debe generar reportes de actividad del usuario'
            ],
            'non-functional': [
                `El sistema debe responder en menos de ${scenario.name.includes('Financiero') ? '10ms' : '2 segundos'}`,
                `El sistema debe mantener ${scenario.qualities.reliability}% de disponibilidad`,
                `El sistema debe soportar ${scenario.name.includes('Social') ? '1M' : '100K'} usuarios concurrentes`
            ],
            'user-stories': [
                'Como usuario, quiero poder buscar productos para encontrar lo que necesito',
                'Como administrador, quiero poder gestionar usuarios para mantener la seguridad',
                'Como cliente, quiero recibir notificaciones para estar informado de actualizaciones'
            ]
        };
        
        return `
            <ul class="requirements-list">
                ${examples[type].map((req, index) => `
                    <li class="requirement-item">
                        <span class="req-id">REQ-${String(index + 1).padStart(3, '0')}</span>
                        <span class="req-text">${req}</span>
                        <span class="req-priority ${index === 0 ? 'high' : index === 1 ? 'medium' : 'low'}">
                            ${index === 0 ? 'Alta' : index === 1 ? 'Media' : 'Baja'}
                        </span>
                    </li>
                `).join('')}
            </ul>
        `;
    },

    generateUsabilityPrinciples: (scenario) => {
        return `
            <div class="principles-grid">
                <div class="principle-item">
                    <h5>🎯 Adecuación a la Tarea</h5>
                    <p>La interfaz está optimizada para las tareas específicas del ${scenario.name.toLowerCase()}</p>
                </div>
                <div class="principle-item">
                    <h5>📚 Autoexplicación</h5>
                    <p>Los elementos de interfaz son intuitivos y autoexplicativos</p>
                </div>
                <div class="principle-item">
                    <h5>🎮 Controlabilidad</h5>
                    <p>El usuario mantiene control sobre la interacción en todo momento</p>
                </div>
                <div class="principle-item">
                    <h5>⚠️ Tolerancia a Errores</h5>
                    <p>El sistema previene errores y facilita la recuperación cuando ocurren</p>
                </div>
            </div>
        `;
    },

    generateUXConsiderations: (scenario) => {
        const considerations = {
            'E-commerce Platform': [
                'Optimización para conversión de ventas',
                'Flujo de checkout simplificado',
                'Búsqueda y filtrado intuitivo'
            ],
            'Sistema Hospitalario': [
                'Interfaz optimizada para uso bajo presión',
                'Acceso rápido a información crítica',
                'Minimización de errores médicos'
            ],
            'Análisis Financiero': [
                'Visualización clara de datos complejos',
                'Herramientas de análisis avanzado',
                'Alertas en tiempo real'
            ],
            'App Móvil Social': [
                'Diseño mobile-first',
                'Interacciones gestuales intuitivas',
                'Optimización para engagement'
            ]
        };

        const scenarioConsiderations = considerations[scenario.name] || considerations['E-commerce Platform'];
        
        return `
            <ul class="ux-considerations">
                ${scenarioConsiderations.map(consideration => `
                    <li class="ux-item">
                        <span class="ux-icon">✓</span>
                        <span class="ux-text">${consideration}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    },

    calculateUserProgress: () => {
        const sessionStart = localStorage.getItem('sessionStart');
        const now = Date.now();
        const sessionDuration = sessionStart ? Math.floor((now - parseInt(sessionStart)) / 60000) : 0;
        
        return {
            viewsExplored: Object.keys(AppConfig.userProgress).length || 1,
            scenariosAnalyzed: 1, // Por ahora simplificado
            sessionTime: `${sessionDuration} min`
        };
    },

    showModal: (content) => {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close" onclick="ViewManager.closeModal()">✕</button>
                ${content}
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'flex';
    },

    closeModal: () => {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.remove();
        }
    },

    showQualityStandardInfo: () => {
        const content = `
            <div class="standard-info">
                <h3>📊 ISO/IEC 25010 - Modelo de Calidad del Software</h3>
                <p>Este estándar define un modelo de calidad que categoriza las características de calidad del software en 8 características principales:</p>
                <div class="characteristics-overview">
                    ${Object.entries(DataManager.qualityCharacteristics).map(([key, char]) => `
                        <div class="char-item">
                            <h4>${char.name}</h4>
                            <p>${char.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        ViewManager.showModal(content);
    },

    resetQualityView: () => {
        ViewManager.updateQualityView();
    }
};

// === GESTOR DE VISUALIZACIONES ===
const VisualizationManager = {
    renderCurrentView: (viewId) => {
        switch(viewId) {
            case 'view-quality':
                VisualizationManager.renderQualityChart();
                break;
            default:
                break;
        }
    },

    renderQualityChart: () => {
        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        const container = document.getElementById('quality-chart');
        
        if (!container) return;
        
        // Simple barra de progreso por ahora
        const qualities = Object.entries(scenario.qualities);
        container.innerHTML = `
            <div class="quality-chart">
                <h4>📊 Perfil de Calidad - ${scenario.name}</h4>
                <div class="chart-bars">
                    ${qualities.map(([key, value]) => `
                        <div class="chart-bar">
                            <span class="bar-label">${DataManager.qualityCharacteristics[key].name}</span>
                            <div class="bar-container">
                                <div class="bar-fill" style="width: ${value}%"></div>
                                <span class="bar-value">${value}%</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
};

// === FUNCIONES GLOBALES ===
function saveCurrentState() {
    const state = {
        currentView: AppConfig.currentView,
        currentScenario: AppConfig.currentScenario,
        userProgress: AppConfig.userProgress,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('laboratorio-iso-state', JSON.stringify(state));
    console.log('💾 Estado guardado correctamente');
    
    // Feedback visual
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.textContent = '✅ Estado guardado correctamente';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Iniciando Laboratorio ISO Completo...');
    
    // Cargar estado guardado
    try {
        const savedState = localStorage.getItem('laboratorio-iso-state');
        if (savedState) {
            const state = JSON.parse(savedState);
            AppConfig.currentView = state.currentView || 'view-cycle';
            AppConfig.currentScenario = state.currentScenario || 0;
            AppConfig.userProgress = state.userProgress || {};
        }
    } catch (e) {
        console.warn('⚠️ Error cargando estado:', e);
    }

    // Marcar timestamp de inicio de sesión
    if (!localStorage.getItem('sessionStart')) {
        localStorage.setItem('sessionStart', Date.now().toString());
    }

    // Inicializar aplicación
    UIManager.init();
    UIManager.switchView(AppConfig.currentView);
    
    // Configurar atajos de teclado
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    UIManager.switchView('view-cycle');
                    break;
                case '2':
                    e.preventDefault();
                    UIManager.switchView('view-quality');
                    break;
                case '3':
                    e.preventDefault();
                    UIManager.switchView('view-requirements');
                    break;
                case '4':
                    e.preventDefault();
                    UIManager.switchView('view-interaction');
                    break;
                case 's':
                    e.preventDefault();
                    saveCurrentState();
                    break;
                case 'h':
                    e.preventDefault();
                    UIManager.showTutorial();
                    break;
            }
        }
    });

    console.log('✅ Laboratorio ISO cargado completamente');
});

console.log('📚 Laboratorio ISO - Sistema Completo Cargado');