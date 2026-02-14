// === LABORATORIO ISO - JAVASCRIPT PRINCIPAL ===

// === CONFIGURACIÓN DE LA APLICACIÓN ===
const AppConfig = {
    currentView: 'view-cycle',
    currentScenario: 0,  // Cambiado a número
    userProgress: {},
    qualityCharacteristics: [
        'functional-suitability',
        'performance-efficiency',
        'compatibility',
        'usability',
        'reliability',
        'security',
        'maintainability',
        'portability'
    ]
};

// === UTILIDADES ===
const Utils = {
    formatNumber: (num) => {
        return new Intl.NumberFormat().format(num);
    },

    generateId: () => {
        return Math.random().toString(36).substr(2, 9);
    },

    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    calculateDistance: (point1, point2) => {
        const dx = point1.x - point2.x;
        const dy = point1.y - point2.y;
        return Math.sqrt(dx * dx + dy * dy);
    },

    interpolateColor: (color1, color2, factor) => {
        const c1 = Utils.hexToRgb(color1);
        const c2 = Utils.hexToRgb(color2);
        
        const r = Math.round(c1.r + factor * (c2.r - c1.r));
        const g = Math.round(c1.g + factor * (c2.g - c1.g));
        const b = Math.round(c1.b + factor * (c2.b - c1.b));
        
        return Utils.rgbToHex(r, g, b);
    },

    hexToRgb: (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    },

    rgbToHex: (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
};

// === GESTOR DE DATOS ===
const DataManager = {
    scenarios: {
        'startup': {
            name: 'Startup Tecnológica',
            icon: '🚀',
            description: 'Empresa emergente desarrollando una plataforma SaaS innovadora para el mercado B2B',
            context: 'Una startup de 12 personas busca validar su MVP en el mercado de automatización de marketing. Con 18 meses de runway, necesitan alcanzar product-market fit y prepararse para la Serie A.',
            challenges: [
                'Validación de product-market fit con recursos limitados',
                'Escalabilidad técnica para crecimiento exponencial',
                'Competencia con empresas establecidas',
                'Recrutamiento de talento con equity limitado',
                'Iteración rápida basada en feedback de usuarios'
            ],
            successCriteria: [
                'Alcanzar 100 clientes pagos en 6 meses',
                'Retención mensual > 95%',
                'NPS > 50',
                'Costo de adquisición < 3x LTV',
                'Sistema escalable a 10,000 usuarios concurrentes'
            ],
            qualities: {
                'functional-suitability': 85,
                'performance-efficiency': 75,
                'compatibility': 70,
                'usability': 90,
                'reliability': 80,
                'security': 85,
                'maintainability': 75,
                'portability': 80
            }
        },
        'enterprise': {
            name: 'Corporación Empresarial',
            icon: '🏢',
            description: 'Sistema empresarial crítico para gestión de recursos humanos de multinacional',
            context: 'Una corporación Fortune 500 con 50,000 empleados necesita modernizar su sistema de RRHH legacy. El proyecto debe integrarse con 15 sistemas existentes y cumplir con regulaciones internacionales.',
            challenges: [
                'Integración con sistemas legacy de 20+ años',
                'Cumplimiento con GDPR, SOX y regulaciones locales',
                'Migración de datos críticos sin downtime',
                'Entrenamiento de 5,000 usuarios en 12 países',
                'Gestión de resistencia al cambio organizacional'
            ],
            successCriteria: [
                'Migración exitosa de 100% de datos sin pérdida',
                'Disponibilidad 99.9% durante horarios críticos',
                'Cumplimiento 100% con auditorías regulatorias',
                'Adopción > 85% en primeros 3 meses',
                'Reducción 40% en tiempo de procesamiento de nómina'
            ],
            qualities: {
                'functional-suitability': 95,
                'performance-efficiency': 85,
                'compatibility': 90,
                'usability': 75,
                'reliability': 95,
                'security': 98,
                'maintainability': 85,
                'portability': 70
            }
        },
        'mobile': {
            name: 'Aplicación Móvil',
            icon: '📱',
            description: 'App de comercio electrónico para dispositivos móviles con pagos y geolocalización',
            context: 'Una empresa de retail tradicional lanza su primera app móvil para competir con Amazon. Necesitan integrar con 200 tiendas físicas y procesar 50,000 transacciones diarias.',
            challenges: [
                'Fragmentación de dispositivos Android (2,000+ modelos)',
                'Optimización para conexiones lentas (2G/3G)',
                'Integración con sistemas POS de tiendas físicas',
                'Cumplimiento PCI DSS para pagos móviles',
                'Competencia con apps establecidas en app stores'
            ],
            successCriteria: [
                'Rating > 4.5 estrellas en ambas stores',
                'Tiempo de carga < 3 segundos en conexión 3G',
                'Tasa de conversión > 3.2%',
                'Crash rate < 0.1%',
                '1 millón de descargas en primer año'
            ],
            qualities: {
                'functional-suitability': 80,
                'performance-efficiency': 90,
                'compatibility': 85,
                'usability': 95,
                'reliability': 85,
                'security': 80,
                'maintainability': 70,
                'portability': 95
            }
        },
        'iot': {
            name: 'Sistema IoT Industrial',
            icon: '🏭',
            description: 'Plataforma de monitoreo industrial con 10,000+ sensores distribuidos',
            context: 'Una fábrica de automóviles implementa IoT para Industry 4.0. Necesita monitorear 50 líneas de producción con sensores de temperatura, vibración y calidad en tiempo real.',
            challenges: [
                'Conectividad en ambientes industriales hostiles',
                'Procesamiento de 1TB de datos de sensores diarios',
                'Seguridad contra ataques a infraestructura crítica',
                'Interoperabilidad entre protocolos OT/IT',
                'Mantenimiento predictivo con ML en edge computing'
            ],
            successCriteria: [
                'Latencia < 100ms para alertas críticas',
                '99.99% uptime de sistemas críticos',
                'Detección 95% de anomalías antes de fallos',
                'Reducción 30% en mantenimiento no planificado',
                'ROI positivo en 18 meses'
            ],
            qualities: {
                'functional-suitability': 75,
                'performance-efficiency': 95,
                'compatibility': 80,
                'usability': 60,
                'reliability': 98,
                'security': 90,
                'maintainability': 80,
                'portability': 85
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
    },

    requirements: {
        functional: [
            {
                id: 'REQ-001',
                type: 'Funcional',
                text: 'El sistema debe permitir a los usuarios registrarse proporcionando email, contraseña y confirmación de contraseña.',
                tags: ['Autenticación', 'Registro', 'Validación'],
                quality: 85
            },
            {
                id: 'REQ-002',
                type: 'Funcional',
                text: 'El sistema debe generar reportes de ventas mensuales en formato PDF con gráficos estadísticos.',
                tags: ['Reportes', 'PDF', 'Estadísticas'],
                quality: 90
            },
            {
                id: 'REQ-003',
                type: 'Funcional',
                text: 'El sistema debe enviar notificaciones por email cuando se complete una transacción.',
                tags: ['Notificaciones', 'Email', 'Transacciones'],
                quality: 80
            }
        ],
        nonFunctional: [
            {
                id: 'REQ-004',
                type: 'No Funcional',
                text: 'El sistema debe responder a las consultas de usuario en menos de 2 segundos en condiciones normales.',
                tags: ['Performance', 'Tiempo de respuesta'],
                quality: 95
            },
            {
                id: 'REQ-005',
                type: 'No Funcional',
                text: 'El sistema debe estar disponible 99.9% del tiempo.',
                tags: ['Disponibilidad', 'SLA'],
                quality: 90
            },
            {
                id: 'REQ-006',
                type: 'No Funcional',
                text: 'La aplicación debe ser compatible con navegadores Chrome, Firefox y Safari.',
                tags: ['Compatibilidad', 'Navegadores'],
                quality: 85
            }
        ],
        user: [
            {
                id: 'REQ-007',
                type: 'Usuario',
                text: 'Como usuario administrador, quiero poder gestionar cuentas de usuario para mantener la seguridad del sistema.',
                tags: ['User Story', 'Administración', 'Seguridad'],
                quality: 88
            },
            {
                id: 'REQ-008',
                type: 'Usuario',
                text: 'Como cliente, quiero poder buscar productos por categoría para encontrar lo que necesito rápidamente.',
                tags: ['User Story', 'Búsqueda', 'UX'],
                quality: 92
            }
        ]
    },

    components: [
        { id: 'actor', name: '👤 Actor', type: 'stakeholder' },
        { id: 'action', name: '⚡ Acción', type: 'behavior' },
        { id: 'object', name: '📦 Objeto', type: 'data' },
        { id: 'constraint', name: '🔒 Restricción', type: 'rule' },
        { id: 'condition', name: '❓ Condición', type: 'logic' },
        { id: 'result', name: '✅ Resultado', type: 'outcome' }
    ],

    usabilityPrinciples: [
        {
            name: 'Visibilidad del estado del sistema',
            description: 'El sistema debe mantener a los usuarios informados sobre lo que está sucediendo',
            weight: 15
        },
        {
            name: 'Correspondencia entre el sistema y el mundo real',
            description: 'El sistema debe hablar el lenguaje de los usuarios',
            weight: 12
        },
        {
            name: 'Control y libertad del usuario',
            description: 'Los usuarios a menudo eligen funciones del sistema por error',
            weight: 18
        },
        {
            name: 'Consistencia y estándares',
            description: 'Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo',
            weight: 16
        },
        {
            name: 'Prevención de errores',
            description: 'Mejor que buenos mensajes de error es un diseño cuidadoso que previene que ocurra un problema',
            weight: 20
        },
        {
            name: 'Reconocimiento antes que recuerdo',
            description: 'Minimizar la carga de memoria del usuario haciendo que objetos, acciones y opciones sean visibles',
            weight: 14
        },
        {
            name: 'Flexibilidad y eficiencia de uso',
            description: 'Los aceleradores pueden acelerar la interacción para el usuario experto',
            weight: 10
        },
        {
            name: 'Diseño estético y minimalista',
            description: 'Los diálogos no deben contener información irrelevante o raramente necesaria',
            weight: 12
        },
        {
            name: 'Ayudar a reconocer y recuperarse de errores',
            description: 'Los mensajes de error deben expresarse en lenguaje sencillo',
            weight: 8
        },
        {
            name: 'Ayuda y documentación',
            description: 'Aunque es mejor si el sistema puede ser usado sin documentación',
            weight: 5
        }
    ],

    interfaces: {
        login: {
            name: 'Interfaz de Login',
            description: 'Formulario de autenticación con validación en tiempo real',
            principles: {
                'Visibilidad del estado del sistema': 85,
                'Control y libertad del usuario': 70,
                'Consistencia y estándares': 90,
                'Prevención de errores': 80,
                'Reconocimiento antes que recuerdo': 85
            }
        },
        dashboard: {
            name: 'Dashboard Principal',
            description: 'Panel de control con métricas y accesos rápidos',
            principles: {
                'Visibilidad del estado del sistema': 95,
                'Correspondencia entre el sistema y el mundo real': 85,
                'Control y libertad del usuario': 90,
                'Consistencia y estándares': 85,
                'Diseño estético y minimalista': 80
            }
        },
        ecommerce: {
            name: 'Tienda Online',
            description: 'Catálogo de productos con carrito de compras',
            principles: {
                'Control y libertad del usuario': 95,
                'Consistencia y estándares': 90,
                'Prevención de errores': 85,
                'Reconocimiento antes que recuerdo': 90,
                'Flexibilidad y eficiencia de uso': 80
            }
        }
    }
};

// === GESTOR DE INTERFAZ ===
const UIManager = {
    init: () => {
        UIManager.setupNavigation();
        UIManager.setupEventListeners();
        UIManager.initializeTooltips();
    },

    setupNavigation: () => {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const viewId = item.getAttribute('data-view');
                if (viewId) {
                    UIManager.switchView(viewId);
                }
            });
        });
    },

    switchView: (viewId) => {
        // Ocultar todas las vistas
        document.querySelectorAll('.view-content').forEach(view => {
            view.classList.remove('active');
        });

        // Mostrar la vista seleccionada
        const targetView = document.getElementById(viewId);
        if (targetView) {
            targetView.classList.add('active');
            AppConfig.currentView = viewId;
            
            // Actualizar navegación activa
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            const activeNavItem = document.querySelector(`[data-view="${viewId}"]`);
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }

            // Actualizar barra de contexto
            UIManager.updateContextBar(viewId);

            // Inicializar vista específica
            ViewManager.initializeView(viewId);
        }
    },

    setupEventListeners: () => {
        // Event listeners globales
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn-reset')) {
                UIManager.resetCurrentView();
            }
        });

        // Drag and drop para requisitos
        document.addEventListener('dragover', (e) => {
            if (e.target.matches('.constructor-workspace') || e.target.closest('.constructor-workspace')) {
                e.preventDefault();
                e.target.classList.add('drag-over');
            }
        });

        document.addEventListener('dragleave', (e) => {
            if (e.target.matches('.constructor-workspace')) {
                e.target.classList.remove('drag-over');
            }
        });

        document.addEventListener('drop', (e) => {
            if (e.target.matches('.constructor-workspace') || e.target.closest('.constructor-workspace')) {
                e.preventDefault();
                e.target.classList.remove('drag-over');
                ViewManager.handleDrop(e);
            }
        });
    },

    initializeTooltips: () => {
        const tooltips = document.querySelectorAll('[title]');
        tooltips.forEach(element => {
            element.addEventListener('mouseenter', showTooltip);
            element.addEventListener('mouseleave', hideTooltip);
        });
    },

    resetCurrentView: () => {
        switch(AppConfig.currentView) {
            case 'view-quality':
                ViewManager.resetQualityView();
                break;
            case 'view-requirements':
                ViewManager.resetRequirementsView();
                break;
            case 'view-interaction':
                ViewManager.resetInteractionView();
                break;
        }
    },

    showLoading: (element) => {
        element.classList.add('loading');
    },

    hideLoading: (element) => {
        element.classList.remove('loading');
    }
};

// === GESTOR DE VISTAS ===
const ViewManager = {
    initializeView: (viewId) => {
        switch(viewId) {
            case 'view-cycle':
                ViewManager.initCycleView();
                break;
            case 'view-quality':
                ViewManager.initQualityView();
                break;
            case 'view-requirements':
                ViewManager.initRequirementsView();
                break;
            case 'view-interaction':
                ViewManager.initInteractionView();
                break;
        }
    },

    initCycleView: () => {
        const scenarioContainer = document.getElementById('scenarios-container');
        if (!scenarioContainer) return;

        scenarioContainer.innerHTML = Object.entries(DataManager.scenarios).map(([key, scenario]) => `
            <div class="scenario-card ${key === AppConfig.currentScenario ? 'active' : ''}" 
                 data-scenario="${key}" 
                 onclick="ViewManager.selectScenario('${key}')">
                <span class="scenario-icon">${scenario.icon}</span>
                <h3 class="scenario-title">${scenario.name}</h3>
                <p class="scenario-description">${scenario.description}</p>
            </div>
        `).join('');

        ViewManager.updateScenarioDetails();
    },

    selectScenario: (scenarioKey) => {
        AppConfig.currentScenario = scenarioKey;
        
        // Actualizar tarjetas
        document.querySelectorAll('.scenario-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const selectedCard = document.querySelector(`[data-scenario="${scenarioKey}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active');
        }

        ViewManager.updateScenarioDetails();
    },

    updateScenarioDetails: () => {
        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        const detailsContainer = document.getElementById('scenario-details');
        
        if (detailsContainer && scenario) {
            const stakeholders = ViewManager.getScenarioStakeholders();
            const risks = ViewManager.getScenarioRisks(scenario);
            const budget = ViewManager.getScenarioBudget(scenario);
            const technologies = ViewManager.getScenarioTechnologies(AppConfig.currentScenario);
            
            detailsContainer.innerHTML = `
                <div class="card">
                    <div class="card-header">
                        <div>
                            <h3 class="card-title">${scenario.icon} ${scenario.name}</h3>
                            <p class="card-subtitle">${scenario.description}</p>
                        </div>
                    </div>
                    
                    <div class="scenario-overview">
                        <h4>📊 Métricas del Proyecto</h4>
                        <div class="metric-grid">
                            <div class="metric-item interactive-metric" onclick="ViewManager.showMetricDetails('complexity')">
                                <span class="metric-label">Complejidad Técnica</span>
                                <span class="metric-value">${ViewManager.calculateComplexity(scenario)}%</span>
                                <div class="metric-trend ${ViewManager.calculateComplexity(scenario) > 75 ? 'trend-up' : 'trend-down'}">⚠️</div>
                            </div>
                            <div class="metric-item interactive-metric" onclick="ViewManager.showMetricDetails('risk')">
                                <span class="metric-label">Factor de Riesgo</span>
                                <span class="metric-value">${ViewManager.calculateRisk(scenario)}%</span>
                                <div class="metric-trend ${ViewManager.calculateRisk(scenario) > 50 ? 'trend-up' : 'trend-down'}">📈</div>
                            </div>
                            <div class="metric-item interactive-metric" onclick="ViewManager.showBudgetBreakdown()">
                                <span class="metric-label">Presupuesto</span>
                                <span class="metric-value">$${budget.total}K</span>
                                <div class="metric-trend">💰</div>
                            </div>
                            <div class="metric-item interactive-metric" onclick="ViewManager.showTeamDetails()">
                                <span class="metric-label">Equipo</span>
                                <span class="metric-value">${stakeholders.length + 3}</span>
                                <div class="metric-trend">👥</div>
                            </div>
                        </div>
                    </div>

                    <div class="scenario-documentation">
                        <h4>📋 Documentación del Caso</h4>
                        <div class="case-study">
                            <div class="case-context">
                                <strong>Contexto:</strong> ${scenario.context || 'Contexto específico del escenario de desarrollo'}
                            </div>
                            <div class="case-challenges">
                                <strong>Desafíos principales:</strong>
                                <ul>
                                    ${scenario.challenges?.map(c => `<li>${c}</li>`).join('') || '<li>Desafío no especificado</li>'}
                                </ul>
                            </div>
                            <div class="case-success-criteria">
                                <strong>Criterios de éxito:</strong>
                                <ul>
                                    ${scenario.successCriteria?.map(c => `<li>${c}</li>`).join('') || '<li>Criterio no especificado</li>'}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="stakeholders-section">
                        <h4>👥 Stakeholders Principales</h4>
                        <div class="stakeholders-grid">
                            ${stakeholders.map(s => `
                                <div class="stakeholder-item interactive-element" onclick="ViewManager.showStakeholderDetails('${s.role}')" title="${s.description}">
                                    <span class="stakeholder-icon">${s.icon}</span>
                                    <div class="stakeholder-info">
                                        <span class="stakeholder-name">${s.name}</span>
                                        <span class="stakeholder-role">${s.role}</span>
                                    </div>
                                    <span class="stakeholder-influence">${s.influence}%</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="technology-stack">
                        <h4>🛠️ Stack Tecnológico</h4>
                        <div class="tech-categories">
                            ${technologies}
                        </div>
                    </div>
                </div>
            `;
        }
    },

    getScenarioStakeholders: (scenarioIndex = null) => {
        const currentIndex = scenarioIndex !== null ? parseInt(scenarioIndex) : AppConfig.currentScenario;
        
        const stakeholdersByScenario = {
            0: [ // E-commerce Platform
                { icon: '🚀', name: 'CEO/Fundador', role: 'Visionario del Producto', influence: 95, description: 'Define la visión estratégica y objetivos de negocio' },
                { icon: '💰', name: 'Inversores', role: 'Financiamiento', influence: 85, description: 'Proveen capital y esperan ROI rápido' },
                { icon: '👨‍💻', name: 'CTO', role: 'Líder Técnico', influence: 90, description: 'Arquitecto de la solución técnica' },
                { icon: '🎨', name: 'Lead Designer', role: 'UX/UI', influence: 70, description: 'Responsable de la experiencia de usuario' }
            ],
            1: [ // Sistema Hospitalario
                { icon: '🏢', name: 'Sponsor Ejecutivo', role: 'Patrocinador', influence: 100, description: 'Ejecutivo que aprueba presupuesto y objetivos' },
                { icon: '🏛️', name: 'Compliance Officer', role: 'Cumplimiento', influence: 85, description: 'Asegura adherencia a regulaciones' },
                { icon: '🔒', name: 'CISO', role: 'Seguridad', influence: 90, description: 'Responsable de la seguridad informática' },
                { icon: '👨‍💼', name: 'Business Analyst', role: 'Análisis', influence: 80, description: 'Traduce requisitos de negocio a especificaciones' }
            ],
            2: [ // Sistema de Análisis Financiero
                { icon: '📊', name: 'CFO', role: 'Finanzas', influence: 95, description: 'Director financiero que define requisitos' },
                { icon: '📈', name: 'Analista Financiero', role: 'Análisis', influence: 85, description: 'Usuario principal del sistema' },
                { icon: '🔒', name: 'Compliance', role: 'Cumplimiento', influence: 80, description: 'Asegura cumplimiento regulatorio' },
                { icon: '👨‍💻', name: 'Data Engineer', role: 'Datos', influence: 75, description: 'Especialista en integración de datos' }
            ],
            3: [ // Aplicación Móvil de Redes Sociales
                { icon: '📱', name: 'Mobile Product Manager', role: 'Producto', influence: 90, description: 'Especialista en productos móviles' },
                { icon: '🎨', name: 'UI/UX Designer', role: 'Diseño', influence: 85, description: 'Especialista en interfaces móviles' },
                { icon: '👨‍💻', name: 'iOS Developer', role: 'Desarrollo', influence: 75, description: 'Desarrollador nativo iOS' },
                { icon: '🤖', name: 'Android Developer', role: 'Desarrollo', influence: 75, description: 'Desarrollador nativo Android' }
            ]
        };

        return stakeholdersByScenario[currentIndex] || stakeholdersByScenario[0];
    },

    getScenarioRisks: (scenario) => {
        const risksByScenario = {
            'startup': [
                { type: 'Mercado', description: 'Product-market fit incierto', probability: 70, impact: 90 },
                { type: 'Financiero', description: 'Runway limitado', probability: 60, impact: 95 },
                { type: 'Técnico', description: 'Escalabilidad prematura', probability: 50, impact: 70 },
                { type: 'Competencia', description: 'Entrada de competidores grandes', probability: 65, impact: 80 }
            ],
            'enterprise': [
                { type: 'Compliance', description: 'Cambios regulatorios', probability: 40, impact: 95 },
                { type: 'Integración', description: 'Sistemas legacy incompatibles', probability: 70, impact: 85 },
                { type: 'Político', description: 'Resistencia al cambio organizacional', probability: 80, impact: 70 },
                { type: 'Seguridad', description: 'Vulnerabilidades de datos', probability: 45, impact: 100 }
            ],
            'mobile': [
                { type: 'Fragmentación', description: 'Diversidad de dispositivos', probability: 85, impact: 60 },
                { type: 'Store Approval', description: 'Rechazo en app stores', probability: 30, impact: 80 },
                { type: 'Performance', description: 'Rendimiento en dispositivos antiguos', probability: 60, impact: 70 },
                { type: 'Privacy', description: 'Cambios en políticas de privacidad', probability: 50, impact: 75 }
            ],
            'iot': [
                { type: 'Conectividad', description: 'Fallos de red en campo', probability: 70, impact: 85 },
                { type: 'Hardware', description: 'Fallos de sensores', probability: 60, impact: 90 },
                { type: 'Escalabilidad', description: 'Millones de dispositivos simultáneos', probability: 80, impact: 95 },
                { type: 'Seguridad', description: 'Ataques a dispositivos IoT', probability: 75, impact: 100 }
            ]
        };

        return risksByScenario[AppConfig.currentScenario] || [];
    },

    getScenarioBudget: (scenario) => {
        const budgetByScenario = {
            'startup': {
                total: 150,
                breakdown: {
                    'Desarrollo': 60,
                    'Marketing': 40,
                    'Infraestructura': 25,
                    'Legal': 15,
                    'Contingencia': 10
                }
            },
            'enterprise': {
                total: 850,
                breakdown: {
                    'Desarrollo': 300,
                    'Licencias': 200,
                    'Consultoría': 150,
                    'Infraestructura': 120,
                    'Training': 50,
                    'Contingencia': 30
                }
            },
            'mobile': {
                total: 200,
                breakdown: {
                    'Desarrollo Native': 80,
                    'Diseño UI/UX': 50,
                    'Testing Devices': 30,
                    'App Store Fees': 15,
                    'Marketing': 20,
                    'Contingencia': 5
                }
            },
            'iot': {
                total: 650,
                breakdown: {
                    'Hardware': 200,
                    'Firmware': 100,
                    'Cloud Platform': 150,
                    'Conectividad': 80,
                    'Certificaciones': 70,
                    'Testing': 40,
                    'Contingencia': 10
                }
            }
        };

        return budgetByScenario[AppConfig.currentScenario] || { total: 100, breakdown: {} };
    },

    getScenarioTechnologies: (scenarioIndex) => {
        const technologies = {
            0: { // Plataforma E-commerce
                frameworks: ['React', 'Spring Boot'],
                databases: ['PostgreSQL', 'Redis'],
                tools: ['Docker', 'Jenkins'],
                cloud: ['AWS']
            },
            1: { // Sistema de Gestión Hospitalaria
                frameworks: ['Angular', 'Django'],
                databases: ['PostgreSQL', 'MongoDB'],
                tools: ['Kubernetes', 'Terraform'],
                cloud: ['Microsoft Azure']
            },
            2: { // Sistema de Análisis Financiero
                frameworks: ['Vue.js', 'Express.js'],
                databases: ['MySQL', 'Redis'],
                tools: ['Docker'],
                cloud: ['Google Cloud']
            },
            3: { // Aplicación Móvil de Redes Sociales
                frameworks: ['React', 'Express.js'],
                databases: ['MongoDB', 'Redis'],
                tools: ['Docker', 'Jenkins'],
                cloud: ['AWS']
            }
        };

        const scenarioTech = technologies[scenarioIndex] || technologies[0];
        let html = '<div class="technology-categories">';
        
        Object.entries(scenarioTech).forEach(([category, techs]) => {
            html += `
                <div class="tech-category">
                    <span class="tech-category-name">${ViewManager.formatCategoryName(category)}</span>
                    <div class="tech-tags">
                        ${techs.map(tech => 
                            `<span class="tech-tag" onclick="ViewManager.showTechnologyDetails('${tech}')">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        return html;
    },

    formatCategoryName: (category) => {
        const names = {
            'frameworks': '🔧 Frameworks',
            'databases': '💾 Bases de Datos',
            'tools': '⚙️ Herramientas',
            'cloud': '☁️ Plataforma Cloud'
        };
        return names[category] || category;
    },

    showMetricDetails: (metricType) => {
        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        const risks = ViewManager.getScenarioRisks(scenario);
        
        let content = '';
        switch(metricType) {
            case 'complexity':
                const complexity = ViewManager.calculateComplexity(scenario);
                content = `
                    <div class="metric-detail-modal">
                        <h4>📊 Complejidad Técnica: ${complexity}%</h4>
                        <div class="complexity-breakdown">
                            <div class="complexity-factor">
                                <span>Variabilidad de requisitos:</span>
                                <div class="progress-bar"><div class="progress" style="width: ${ViewManager.calculateVariance(Object.values(scenario.qualities))}%"></div></div>
                            </div>
                            <div class="complexity-factor">
                                <span>Integraciones necesarias:</span>
                                <div class="progress-bar"><div class="progress" style="width: ${complexity * 0.8}%"></div></div>
                            </div>
                            <div class="complexity-factor">
                                <span>Tecnologías nuevas:</span>
                                <div class="progress-bar"><div class="progress" style="width: ${complexity * 0.6}%"></div></div>
                            </div>
                        </div>
                    </div>
                `;
                break;
            case 'risk':
                const riskLevel = ViewManager.calculateRisk(scenario);
                content = `
                    <div class="metric-detail-modal">
                        <h4>⚠️ Factor de Riesgo: ${riskLevel}%</h4>
                        <div class="risk-breakdown">
                            ${risks.map(risk => `
                                <div class="risk-item">
                                    <div class="risk-header">
                                        <span class="risk-type">${risk.type}</span>
                                        <span class="risk-score">${Math.round(risk.probability * risk.impact / 100)}%</span>
                                    </div>
                                    <div class="risk-description">${risk.description}</div>
                                    <div class="risk-metrics">
                                        <small>Probabilidad: ${risk.probability}% | Impacto: ${risk.impact}%</small>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;
        }
        
        ViewManager.showModal(content);
    },

    showBudgetBreakdown: () => {
        const budget = ViewManager.getScenarioBudget();
        const content = `
            <div class="budget-modal">
                <h4>💰 Desglose del Presupuesto: $${budget.total}K</h4>
                <div class="budget-breakdown">
                    ${Object.entries(budget.breakdown).map(([category, amount]) => {
                        const percentage = (amount / budget.total * 100).toFixed(1);
                        return `
                            <div class="budget-item">
                                <div class="budget-header">
                                    <span class="budget-category">${category}</span>
                                    <span class="budget-amount">$${amount}K (${percentage}%)</span>
                                </div>
                                <div class="budget-bar">
                                    <div class="budget-progress" style="width: ${percentage}%"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="budget-insights">
                    <h5>Insights del Presupuesto:</h5>
                    <ul>
                        ${ViewManager.getBudgetInsights(budget).map(insight => `<li>${insight}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        ViewManager.showModal(content);
    },

    showTeamDetails: () => {
        const stakeholders = ViewManager.getScenarioStakeholders();
        const content = `
            <div class="team-modal">
                <h4>👥 Detalles del Equipo</h4>
                <div class="team-structure">
                    ${stakeholders.map(member => `
                        <div class="team-member">
                            <div class="member-avatar">${member.icon}</div>
                            <div class="member-info">
                                <h5>${member.name}</h5>
                                <p class="member-role">${member.role}</p>
                                <p class="member-description">${member.description}</p>
                                <div class="member-influence">
                                    <span>Influencia: </span>
                                    <div class="influence-bar">
                                        <div class="influence-level" style="width: ${member.influence}%"></div>
                                    </div>
                                    <span>${member.influence}%</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        ViewManager.showModal(content);
    },

    showStakeholderDetails: (role) => {
        const stakeholders = ViewManager.getScenarioStakeholders();
        const stakeholder = stakeholders.find(s => s.role === role);
        if (stakeholder) {
            const content = `
                <div class="stakeholder-detail-modal">
                    <div class="stakeholder-header">
                        <span class="stakeholder-avatar">${stakeholder.icon}</span>
                        <div>
                            <h4>${stakeholder.name}</h4>
                            <p class="stakeholder-title">${stakeholder.role}</p>
                        </div>
                    </div>
                    <div class="stakeholder-content">
                        <p><strong>Descripción:</strong> ${stakeholder.description}</p>
                        <p><strong>Nivel de influencia:</strong> ${stakeholder.influence}%</p>
                        <div class="stakeholder-responsibilities">
                            <h5>Responsabilidades principales:</h5>
                            <ul>
                                ${ViewManager.getStakeholderResponsibilities(stakeholder.role).map(resp => `<li>${resp}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="stakeholder-concerns">
                            <h5>Principales preocupaciones:</h5>
                            <ul>
                                ${ViewManager.getStakeholderConcerns(stakeholder.role).map(concern => `<li>${concern}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            ViewManager.showModal(content);
        }
    },

    showTechInfo: (technology) => {
        const techInfo = ViewManager.getTechnologyInfo(technology);
        const content = `
            <div class="tech-info-modal">
                <h4>🛠️ ${technology}</h4>
                <div class="tech-details">
                    <p><strong>Descripción:</strong> ${techInfo.description}</p>
                    <p><strong>Ventajas:</strong></p>
                    <ul>
                        ${techInfo.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                    <p><strong>Desafíos:</strong></p>
                    <ul>
                        ${techInfo.cons.map(con => `<li>${con}</li>`).join('')}
                    </ul>
                    <div class="tech-metrics">
                        <div class="tech-metric">
                            <span>Curva de aprendizaje:</span>
                            <div class="tech-bar"><div class="tech-progress" style="width: ${techInfo.learning_curve}%"></div></div>
                        </div>
                        <div class="tech-metric">
                            <span>Madurez:</span>
                            <div class="tech-bar"><div class="tech-progress" style="width: ${techInfo.maturity}%"></div></div>
                        </div>
                        <div class="tech-metric">
                            <span>Comunidad:</span>
                            <div class="tech-bar"><div class="tech-progress" style="width: ${techInfo.community}%"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        ViewManager.showModal(content);
    },

    showTechnologyDetails: (techName) => {
        const tech = ViewManager.getTechnologyInfo(techName);
        if (!tech) return;

        const modal = ViewManager.createModal(`Tecnología: ${techName}`, `
            <div class="tech-detail-view">
                <div class="tech-header">
                    <span class="tech-category-badge">${tech.category}</span>
                    <div class="tech-metrics">
                        <div class="metric-item">
                            <span>Complejidad</span>
                            <div class="progress-bar">
                                <div class="progress" style="width: ${tech.complexity * 10}%"></div>
                            </div>
                            <span>${tech.complexity}/10</span>
                        </div>
                        <div class="metric-item">
                            <span>Adopción</span>
                            <div class="progress-bar">
                                <div class="progress" style="width: ${tech.adoption}%"></div>
                            </div>
                            <span>${tech.adoption}%</span>
                        </div>
                    </div>
                </div>
                
                <div class="tech-description">
                    <p>${tech.description}</p>
                </div>

                <div class="tech-pros-cons">
                    <div class="pros-section">
                        <h5>✅ Ventajas</h5>
                        <ul>
                            ${tech.pros.map(pro => `<li>${pro}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="cons-section">
                        <h5>❌ Desventajas</h5>
                        <ul>
                            ${tech.cons.map(con => `<li>${con}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="tech-use-case">
                    <h5>💼 Caso de Uso Ideal</h5>
                    <p>${tech.useCase}</p>
                </div>

                <div class="tech-recommendation">
                    <h5>🎯 Recomendación</h5>
                    <p>${ViewManager.getTechRecommendation(tech)}</p>
                </div>
            </div>
        `);

        document.body.appendChild(modal);
        requestAnimationFrame(() => modal.classList.add('visible'));
    },

    getTechRecommendation: (tech) => {
        if (tech.complexity >= 8) {
            return '⚠️ Tecnología avanzada. Recomendada solo para equipos experimentados con tiempo suficiente para capacitación.';
        } else if (tech.complexity >= 6) {
            return '📚 Tecnología intermedia. Requiere capacitación del equipo pero ofrece beneficios significativos.';
        } else if (tech.complexity >= 4) {
            return '✅ Tecnología equilibrada. Buena opción para la mayoría de proyectos con preparación básica.';
        } else {
            return '🚀 Tecnología accesible. Ideal para proyectos con restricciones de tiempo o equipos junior.';
        }
    },

    createModal: (title, content) => {
        const modal = document.createElement('div');
        modal.className = 'dynamic-modal';
        modal.innerHTML = `
            <div class="modal-backdrop" onclick="this.parentElement.remove()"></div>
            <div class="modal-content">
                <button class="modal-close" onclick="this.closest('.dynamic-modal').remove()">×</button>
                <h3 style="margin-top: 0; color: var(--text-primary);">${title}</h3>
                ${content}
            </div>
        `;
        return modal;
    },

    getBudgetInsights: (budget) => {
        const insights = [];
        const sortedItems = Object.entries(budget.breakdown)
            .sort(([,a], [,b]) => b - a);
        
        const largest = sortedItems[0];
        const smallest = sortedItems[sortedItems.length - 1];
        
        insights.push(`Mayor inversión en ${largest[0]} ($${largest[1]}K)`);
        insights.push(`Menor asignación a ${smallest[0]} ($${smallest[1]}K)`);
        
        const devCost = budget.breakdown['Desarrollo'] || budget.breakdown['Desarrollo Native'] || 0;
        if (devCost > budget.total * 0.4) {
            insights.push('⚠️ Alto costo de desarrollo - considerar optimización');
        }
        
        const contingency = budget.breakdown['Contingencia'] || 0;
        if (contingency < budget.total * 0.1) {
            insights.push('🚨 Contingencia baja - aumentar buffer de riesgo');
        }
        
        return insights;
    },

    getStakeholderResponsibilities: (role) => {
        const responsibilities = {
            'Visionario del Producto': [
                'Definir la visión y estrategia del producto',
                'Priorizar features basado en valor de negocio', 
                'Comunicar objetivos al equipo',
                'Validar hipótesis con el mercado'
            ],
            'Financiamiento': [
                'Proveer capital inicial y rondas de inversión',
                'Monitorear KPIs financieros',
                'Asesorar en decisiones estratégicas',
                'Conectar con redes de negocio'
            ],
            'Líder Técnico': [
                'Diseñar la arquitectura del sistema',
                'Tomar decisiones técnicas críticas',
                'Supervisar el desarrollo del equipo',
                'Garantizar escalabilidad y performance'
            ]
        };
        
        return responsibilities[role] || [
            'Responsabilidades específicas del rol',
            'Colaboración con el equipo',
            'Entrega de resultados'
        ];
    },

    getStakeholderConcerns: (role) => {
        const concerns = {
            'Visionario del Producto': [
                'Product-market fit',
                'Competencia en el mercado',
                'Tiempo al mercado',
                'Escalabilidad del negocio'
            ],
            'Financiamiento': [
                'Retorno de inversión',
                'Burn rate y runway',
                'Crecimiento de usuarios',
                'Valoración de la empresa'
            ],
            'Líder Técnico': [
                'Deuda técnica',
                'Escalabilidad del sistema',
                'Seguridad y vulnerabilidades',
                'Performance bajo carga'
            ]
        };
        
        return concerns[role] || [
            'Riesgos del proyecto',
            'Calidad del entregable',
            'Cumplimiento de plazos'
        ];
    },

    getTechnologyInfo: (technology) => {
        const techDatabase = {
            frameworks: {
                'Angular': {
                    category: 'Frontend Framework',
                    description: 'Framework web robusto desarrollado por Google para aplicaciones SPA',
                    pros: ['Arquitectura escalable', 'TypeScript nativo', 'CLI poderoso', 'Ecosistema maduro'],
                    cons: ['Curva de aprendizaje empinada', 'Bundle size considerable'],
                    useCase: 'Aplicaciones empresariales complejas',
                    complexity: 8,
                    adoption: 85
                },
                'React': {
                    category: 'Frontend Framework',
                    description: 'Biblioteca JavaScript para interfaces de usuario desarrollada por Facebook',
                    pros: ['Flexibilidad máxima', 'Ecosistema gigante', 'Virtual DOM eficiente', 'JSX intuitivo'],
                    cons: ['Muchas decisiones técnicas', 'Configuración compleja inicial'],
                    useCase: 'Aplicaciones interactivas y dinámicas',
                    complexity: 6,
                    adoption: 92
                },
                'Vue.js': {
                    category: 'Frontend Framework',
                    description: 'Framework progresivo para construir interfaces de usuario',
                    pros: ['Fácil de aprender', 'Documentación excelente', 'Flexibilidad progresiva'],
                    cons: ['Ecosistema más pequeño', 'Menos ofertas laborales'],
                    useCase: 'Proyectos de tamaño medio y prototipos rápidos',
                    complexity: 4,
                    adoption: 65
                },
                'Spring Boot': {
                    category: 'Backend Framework',
                    description: 'Framework Java para desarrollo de aplicaciones empresariales',
                    pros: ['Configuración automática', 'Ecosistema Java robusto', 'Microservicios nativos'],
                    cons: ['Consumo de memoria alto', 'Tiempo de arranque lento'],
                    useCase: 'Aplicaciones empresariales y microservicios',
                    complexity: 7,
                    adoption: 88
                },
                'Django': {
                    category: 'Backend Framework',
                    description: 'Framework web de alto nivel para Python con filosofía "batteries included"',
                    pros: ['ORM potente', 'Admin panel automático', 'Seguridad robusta'],
                    cons: ['Monolítico por diseño', 'ORM puede ser limitante'],
                    useCase: 'Aplicaciones web con mucho contenido y gestión de datos',
                    complexity: 5,
                    adoption: 78
                },
                'Express.js': {
                    category: 'Backend Framework',
                    description: 'Framework web minimalista y flexible para Node.js',
                    pros: ['Simplicidad extrema', 'Flexibilidad total', 'Ecosistema NPM'],
                    cons: ['Muchas decisiones manuales', 'Falta estructura por defecto'],
                    useCase: 'APIs RESTful y aplicaciones web ligeras',
                    complexity: 3,
                    adoption: 89
                }
            },
            databases: {
                'PostgreSQL': {
                    category: 'Base de Datos Relacional',
                    description: 'Sistema de gestión de base de datos relacional avanzado y open source',
                    pros: ['ACID compliant', 'Extensiones potentes', 'JSON nativo', 'Escalabilidad'],
                    cons: ['Configuración compleja', 'Uso de memoria alto'],
                    useCase: 'Aplicaciones que requieren consistencia y características avanzadas',
                    complexity: 6,
                    adoption: 82
                },
                'MongoDB': {
                    category: 'Base de Datos NoSQL',
                    description: 'Base de datos de documentos NoSQL orientada a documentos',
                    pros: ['Esquema flexible', 'Escalabilidad horizontal', 'JSON nativo'],
                    cons: ['No ACID por defecto', 'Consultas complejas limitadas'],
                    useCase: 'Aplicaciones con datos no estructurados y alta escalabilidad',
                    complexity: 4,
                    adoption: 75
                },
                'Redis': {
                    category: 'Cache/Base de Datos en Memoria',
                    description: 'Almacén de estructura de datos en memoria ultra rápido',
                    pros: ['Velocidad extrema', 'Múltiples estructuras de datos', 'Pub/Sub nativo'],
                    cons: ['Limitado por RAM', 'Persistencia opcional'],
                    useCase: 'Caching, sesiones, colas de mensajes',
                    complexity: 3,
                    adoption: 88
                },
                'MySQL': {
                    category: 'Base de Datos Relacional',
                    description: 'Sistema de gestión de base de datos relacional más popular',
                    pros: ['Simplicidad', 'Rendimiento sólido', 'Ecosistema maduro'],
                    cons: ['Características avanzadas limitadas', 'Extensibilidad limitada'],
                    useCase: 'Aplicaciones web tradicionales y CMSs',
                    complexity: 4,
                    adoption: 91
                }
            },
            tools: {
                'Docker': {
                    category: 'Containerización',
                    description: 'Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores',
                    pros: ['Portabilidad completa', 'Aislamiento de aplicaciones', 'CI/CD simplificado'],
                    cons: ['Curva de aprendizaje', 'Overhead de recursos'],
                    useCase: 'Desarrollo, testing y despliegue de aplicaciones',
                    complexity: 5,
                    adoption: 85
                },
                'Kubernetes': {
                    category: 'Orquestación de Contenedores',
                    description: 'Sistema de orquestación para automatizar despliegue y gestión de aplicaciones',
                    pros: ['Auto-scaling', 'Self-healing', 'Declarativo', 'Vendor agnostic'],
                    cons: ['Complejidad extrema', 'Overhead para proyectos pequeños'],
                    useCase: 'Aplicaciones distribuidas a gran escala',
                    complexity: 9,
                    adoption: 71
                },
                'Jenkins': {
                    category: 'CI/CD',
                    description: 'Servidor de automatización para integración y despliegue continuo',
                    pros: ['Flexibilidad total', 'Ecosistema de plugins gigante', 'Open source'],
                    cons: ['UI anticuada', 'Configuración compleja'],
                    useCase: 'Pipelines de CI/CD complejos y personalizados',
                    complexity: 6,
                    adoption: 79
                },
                'Terraform': {
                    category: 'Infrastructure as Code',
                    description: 'Herramienta para construir, cambiar y versionar infraestructura de manera segura',
                    pros: ['Multi-cloud', 'Declarativo', 'State management', 'Plan preview'],
                    cons: ['Curva de aprendizaje', 'State file management'],
                    useCase: 'Gestión de infraestructura cloud automatizada',
                    complexity: 7,
                    adoption: 73
                }
            },
            cloud: {
                'AWS': {
                    category: 'Plataforma Cloud',
                    description: 'Plataforma de servicios cloud más completa y adoptada del mercado',
                    pros: ['Servicios más extensos', 'Ecosistema maduro', 'Global reach'],
                    cons: ['Complejidad de pricing', 'Vendor lock-in'],
                    useCase: 'Desde startups hasta enterprise, cualquier escala',
                    complexity: 8,
                    adoption: 89
                },
                'Microsoft Azure': {
                    category: 'Plataforma Cloud',
                    description: 'Plataforma cloud de Microsoft con fuerte integración empresarial',
                    pros: ['Integración Microsoft', 'Híbrido nativo', 'Enterprise features'],
                    cons: ['UI inconsistente', 'Documentación fragmentada'],
                    useCase: 'Organizaciones con stack Microsoft existente',
                    complexity: 7,
                    adoption: 78
                },
                'Google Cloud': {
                    category: 'Plataforma Cloud',
                    description: 'Plataforma cloud de Google con fortaleza en AI/ML y analytics',
                    pros: ['AI/ML superior', 'Pricing transparente', 'Kubernetes nativo'],
                    cons: ['Menos servicios empresariales', 'Adopción menor'],
                    useCase: 'Proyectos con fuerte componente de AI/ML y analytics',
                    complexity: 6,
                    adoption: 65
                }
            }
        };

        // Buscar en todas las categorías
        for (const [category, techs] of Object.entries(techDatabase)) {
            if (techs[technology]) {
                return techs[technology];
            }
        }
        
        return {
            category: 'Tecnología General',
            description: `Tecnología ${technology} - Información detallada no disponible`,
            pros: ['Ventajas por investigar'],
            cons: ['Desafíos por evaluar'],
            useCase: 'Caso de uso por determinar',
            complexity: 50,
            adoption: 50
        };
    },

    getScenarioTimeline: (scenario) => {
        return [
            { phase: 'Análisis', duration: '2-4 semanas' },
            { phase: 'Diseño', duration: '3-6 semanas' },
            { phase: 'Desarrollo', duration: '8-16 semanas' },
            { phase: 'Testing', duration: '2-4 semanas' },
            { phase: 'Deployment', duration: '1-2 semanas' }
        ];
    },

    calculateComplexity: (scenario) => {
        const qualities = Object.values(scenario.qualities);
        const variance = ViewManager.calculateVariance(qualities);
        return Math.round(70 + variance * 0.5);
    },

    calculateRisk: (scenario) => {
        const qualities = Object.values(scenario.qualities);
        const minQuality = Math.min(...qualities);
        return Math.round(100 - minQuality);
    },

    calculateVariance: (values) => {
        const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
        const squaredDiffs = values.map(val => Math.pow(val - mean, 2));
        return squaredDiffs.reduce((sum, val) => sum + val, 0) / values.length;
    },

    initQualityView: () => {
        ViewManager.createQualityControls();
        ViewManager.setupRadarChart();
        ViewManager.createComparisonPanel();
    },

    createQualityControls: () => {
        const controlsContainer = document.getElementById('quality-controls');
        if (!controlsContainer) return;

        controlsContainer.innerHTML = Object.entries(DataManager.qualityCharacteristics).map(([key, char]) => {
            const currentValue = DataManager.scenarios[AppConfig.currentScenario]?.qualities[key] || 50;
            return `
                <div class="quality-control">
                    <label for="slider-${key}" class="quality-label" title="${char.description}">
                        ${char.name}
                    </label>
                    <input type="range" 
                           id="slider-${key}" 
                           class="quality-slider" 
                           min="0" 
                           max="100" 
                           value="${currentValue}"
                           data-characteristic="${key}"
                           oninput="ViewManager.updateQualityValue('${key}', this.value)">
                    <div class="quality-value" id="value-${key}">${currentValue}%</div>
                </div>
            `;
        }).join('');
    },

    updateQualityValue: (characteristic, value) => {
        const valueElement = document.getElementById(`value-${characteristic}`);
        if (valueElement) {
            valueElement.textContent = `${value}%`;
        }

        // Actualizar datos del escenario actual
        if (DataManager.scenarios[AppConfig.currentScenario]) {
            DataManager.scenarios[AppConfig.currentScenario].qualities[characteristic] = parseInt(value);
        }

        // Redibujar gráfico
        ViewManager.drawRadarChart();
        
        // Actualizar panel derecho con métricas en tiempo real
        ViewManager.updateQualityMetrics();
    },

    updateQualityMetrics: () => {
        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        if (!scenario) return;
        
        const qualities = Object.values(scenario.qualities);
        const average = Math.round(qualities.reduce((sum, val) => sum + val, 0) / qualities.length);
        
        // Encontrar la característica más alta y más baja
        const qualityEntries = Object.entries(scenario.qualities);
        const highest = qualityEntries.reduce((max, current) => 
            current[1] > max[1] ? current : max
        );
        const lowest = qualityEntries.reduce((min, current) => 
            current[1] < min[1] ? current : min
        );
        
        // Actualizar elementos del DOM si existen
        const avgElement = document.getElementById('average-quality');
        const highestElement = document.getElementById('highest-quality');
        const lowestElement = document.getElementById('lowest-quality');
        
        if (avgElement) avgElement.textContent = `${average}%`;
        if (highestElement) {
            const charName = DataManager.qualityCharacteristics[highest[0]]?.name || highest[0];
            highestElement.textContent = `${charName} (${highest[1]}%)`;
        }
        if (lowestElement) {
            const charName = DataManager.qualityCharacteristics[lowest[0]]?.name || lowest[0];
            lowestElement.textContent = `${charName} (${lowest[1]}%)`;
        }
        
        // Actualizar recomendaciones dinámicas
        ViewManager.updateQualityRecommendations(average, lowest, highest);
    },

    updateQualityRecommendations: (average, lowest, highest) => {
        let recommendations = [];
        
        if (average < 70) {
            recommendations.push('⚠️ Puntuación general baja - revisar arquitectura');
        } else if (average > 90) {
            recommendations.push('✨ Excelente perfil de calidad - mantener estándares');
        }
        
        if (lowest[1] < 60) {
            const charName = DataManager.qualityCharacteristics[lowest[0]]?.name;
            recommendations.push(`📈 Mejorar ${charName} - es el punto más débil`);
        }
        
        if (highest[1] > 95) {
            const charName = DataManager.qualityCharacteristics[highest[0]]?.name;
            recommendations.push(`🎆 ${charName} es una fortaleza - aprovechar en marketing`);
        }
        
        const variance = ViewManager.calculateVariance(Object.values(DataManager.scenarios[AppConfig.currentScenario].qualities));
        if (variance > 400) {
            recommendations.push('⚖️ Gran variación entre características - balancear esfuerzos');
        }
        
        // Mostrar recomendaciones en panel derecho
        const qualityDetails = document.getElementById('quality-details');
        if (qualityDetails && recommendations.length > 0) {
            const existingRecommendations = qualityDetails.querySelector('.quality-recommendations');
            if (existingRecommendations) {
                existingRecommendations.remove();
            }
            
            const recommendationsDiv = document.createElement('div');
            recommendationsDiv.className = 'quality-recommendations';
            recommendationsDiv.innerHTML = `
                <div class="card" style="margin-top: 15px;">
                    <div class="card-header">
                        <h4 class="card-title">💡 Recomendaciones</h4>
                    </div>
                    <div class="recommendations-list">
                        ${recommendations.map(rec => `<div class="recommendation-item">${rec}</div>`).join('')}
                    </div>
                </div>
            `;
            qualityDetails.appendChild(recommendationsDiv);
        }
    },

    setupRadarChart: () => {
        const canvas = document.getElementById('radarCanvas');
        if (!canvas) return;

        canvas.width = 400;
        canvas.height = 400;

        ViewManager.drawRadarChart();
    },

    drawRadarChart: () => {
        const canvas = document.getElementById('radarCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = Math.min(centerX, centerY) - 60;

        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const characteristics = AppConfig.qualityCharacteristics;
        const angleStep = (2 * Math.PI) / characteristics.length;

        // Dibujar rejilla
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 1;

        for (let i = 1; i <= 5; i++) {
            ctx.beginPath();
            ctx.arc(centerX, centerY, (radius / 5) * i, 0, 2 * Math.PI);
            ctx.stroke();
        }

        // Dibujar líneas radiales y etiquetas
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';

        characteristics.forEach((char, index) => {
            const angle = index * angleStep - Math.PI / 2;
            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            // Línea radial
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(x, y);
            ctx.stroke();

            // Etiqueta
            const labelX = centerX + Math.cos(angle) * (radius + 30);
            const labelY = centerY + Math.sin(angle) * (radius + 30);
            const charData = DataManager.qualityCharacteristics[char];
            
            ctx.fillText(charData.name, labelX, labelY + 4);
        });

        // Dibujar datos del escenario actual
        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        if (scenario) {
            ctx.fillStyle = 'rgba(0, 102, 204, 0.3)';
            ctx.strokeStyle = '#0066cc';
            ctx.lineWidth = 2;

            ctx.beginPath();
            characteristics.forEach((char, index) => {
                const value = scenario.qualities[char] || 0;
                const angle = index * angleStep - Math.PI / 2;
                const distance = (value / 100) * radius;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Dibujar puntos
            ctx.fillStyle = '#0066cc';
            characteristics.forEach((char, index) => {
                const value = scenario.qualities[char] || 0;
                const angle = index * angleStep - Math.PI / 2;
                const distance = (value / 100) * radius;
                const x = centerX + Math.cos(angle) * distance;
                const y = centerY + Math.sin(angle) * distance;

                ctx.beginPath();
                ctx.arc(x, y, 4, 0, 2 * Math.PI);
                ctx.fill();
            });
        }
    },

    createComparisonPanel: () => {
        const comparisonContainer = document.getElementById('comparison-panel');
        if (!comparisonContainer) return;

        comparisonContainer.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">🔄 Comparación de Escenarios</h3>
                    <p class="card-subtitle">Analiza diferencias entre contextos</p>
                </div>
                <div class="comparison-grid">
                    ${Object.entries(DataManager.scenarios).map(([key, scenario]) => `
                        <div class="comparison-item ${key === AppConfig.currentScenario ? 'active' : ''}" 
                             data-scenario="${key}"
                             onclick="ViewManager.selectScenario('${key}')">
                            <div class="scenario-icon">${scenario.icon}</div>
                            <div class="scenario-name">${scenario.name}</div>
                            <div class="scenario-score">${ViewManager.calculateOverallScore(scenario)}%</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    calculateOverallScore: (scenario) => {
        const values = Object.values(scenario.qualities);
        const average = values.reduce((sum, val) => sum + val, 0) / values.length;
        return Math.round(average);
    },

    resetQualityView: () => {
        const scenario = DataManager.scenarios[AppConfig.currentScenario];
        Object.entries(scenario.qualities).forEach(([char, value]) => {
            const slider = document.getElementById(`slider-${char}`);
            const valueDisplay = document.getElementById(`value-${char}`);
            if (slider && valueDisplay) {
                slider.value = value;
                valueDisplay.textContent = `${value}%`;
            }
        });
        ViewManager.drawRadarChart();
        showNotification('Vista de calidad reiniciada', 'info');
    },

    initRequirementsView: () => {
        ViewManager.createRequirementsGallery();
        ViewManager.createRequirementsConstructor();
        ViewManager.createRequirementsAnalyzer();
    },

    createRequirementsGallery: () => {
        const galleryContainer = document.getElementById('requirements-gallery');
        if (!galleryContainer) return;

        const allRequirements = [
            ...DataManager.requirements.functional,
            ...DataManager.requirements.nonFunctional,
            ...DataManager.requirements.user
        ];

        galleryContainer.innerHTML = allRequirements.map(req => `
            <div class="requirement-card" data-req-id="${req.id}">
                <div class="requirement-type">${req.type}</div>
                <div class="requirement-text">${req.text}</div>
                <div class="requirement-tags">
                    ${req.tags.map(tag => `<span class="requirement-tag">${tag}</span>`).join('')}
                </div>
                <div class="requirement-quality">
                    <strong>Calidad: ${req.quality}%</strong>
                </div>
            </div>
        `).join('');
    },

    createRequirementsConstructor: () => {
        const constructorContainer = document.getElementById('requirements-constructor');
        if (!constructorContainer) return;

        constructorContainer.innerHTML = `
            <div class="constructor-section">
                <div class="card-header">
                    <h3 class="card-title">🔧 Constructor de Requisitos</h3>
                    <p class="card-subtitle">Arrastra componentes para crear requisitos</p>
                </div>
                <div class="constructor-grid">
                    <div class="components-panel">
                        <h4>Componentes Disponibles</h4>
                        ${DataManager.components.map(comp => `
                            <div class="component-item" 
                                 draggable="true" 
                                 data-component-id="${comp.id}"
                                 ondragstart="ViewManager.handleDragStart(event)">
                                ${comp.name}
                            </div>
                        `).join('')}
                    </div>
                    <div class="constructor-workspace" id="constructor-workspace">
                        <div class="workspace-placeholder">
                            <p>🎯 Arrastra componentes aquí para construir un requisito</p>
                        </div>
                    </div>
                </div>
                <div class="constructor-actions">
                    <button class="btn btn-secondary" onclick="ViewManager.clearConstructor()">🗑️ Limpiar</button>
                    <button class="btn" onclick="ViewManager.analyzeConstructedRequirement()">🔍 Analizar Calidad</button>
                </div>
            </div>
        `;
    },

    handleDragStart: (event) => {
        const componentId = event.target.getAttribute('data-component-id');
        event.dataTransfer.setData('text/plain', componentId);
    },

    handleDrop: (event) => {
        const componentId = event.dataTransfer.getData('text/plain');
        const component = DataManager.components.find(c => c.id === componentId);
        
        if (component) {
            const workspace = document.getElementById('constructor-workspace');
            const placeholder = workspace.querySelector('.workspace-placeholder');
            
            if (placeholder) {
                placeholder.remove();
            }

            const componentElement = document.createElement('div');
            componentElement.className = 'dropped-component';
            componentElement.innerHTML = `
                ${component.name}
                <button class="remove-component" onclick="this.parentElement.remove()">&times;</button>
            `;
            
            workspace.appendChild(componentElement);
        }
    },

    clearConstructor: () => {
        const workspace = document.getElementById('constructor-workspace');
        workspace.innerHTML = `
            <div class="workspace-placeholder">
                <p>🎯 Arrastra componentes aquí para construir un requisito</p>
            </div>
        `;
    },

    analyzeConstructedRequirement: () => {
        const workspace = document.getElementById('constructor-workspace');
        const components = workspace.querySelectorAll('.dropped-component');
        
        if (components.length === 0) {
            showNotification('Agrega componentes antes de analizar', 'warning');
            return;
        }

        const analysis = ViewManager.calculateRequirementQuality(components);
        ViewManager.showRequirementAnalysis(analysis);
    },

    calculateRequirementQuality: (components) => {
        const componentTypes = Array.from(components).map(comp => {
            const text = comp.textContent.trim();
            const component = DataManager.components.find(c => text.includes(c.name));
            return component ? component.type : 'unknown';
        });

        const hasActor = componentTypes.includes('stakeholder');
        const hasAction = componentTypes.includes('behavior');
        const hasObject = componentTypes.includes('data');
        const hasConstraint = componentTypes.includes('rule');
        
        const completeness = (hasActor + hasAction + hasObject) / 3 * 100;
        const clarity = componentTypes.length >= 3 ? 85 : 60;
        const verifiability = hasConstraint ? 90 : 70;
        
        return {
            completeness: Math.round(completeness),
            clarity: Math.round(clarity),
            verifiability: Math.round(verifiability),
            overall: Math.round((completeness + clarity + verifiability) / 3)
        };
    },

    showRequirementAnalysis: (analysis) => {
        const analysisContainer = document.getElementById('requirement-analysis');
        if (!analysisContainer) return;

        analysisContainer.innerHTML = `
            <div class="analysis-panel">
                <h4>📊 Análisis de Calidad</h4>
                <div class="metric-grid">
                    <div class="metric-item">
                        <span class="metric-name">Completitud</span>
                        <span class="metric-value">${analysis.completeness}%</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-name">Claridad</span>
                        <span class="metric-value">${analysis.clarity}%</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-name">Verificabilidad</span>
                        <span class="metric-value">${analysis.verifiability}%</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-name"><strong>Puntuación General</strong></span>
                        <span class="metric-value"><strong>${analysis.overall}%</strong></span>
                    </div>
                </div>
                <div class="analysis-recommendations">
                    ${ViewManager.getQualityRecommendations(analysis)}
                </div>
            </div>
        `;
    },

    getQualityRecommendations: (analysis) => {
        const recommendations = [];

        if (analysis.completeness < 80) {
            recommendations.push('⚠️ Asegúrate de incluir Actor, Acción y Objeto');
        }
        if (analysis.clarity < 80) {
            recommendations.push('💡 Agrega más componentes para mayor claridad');
        }
        if (analysis.verifiability < 80) {
            recommendations.push('🔒 Incluye restricciones para mejorar verificabilidad');
        }
        if (analysis.overall >= 85) {
            recommendations.push('✅ ¡Excelente calidad del requisito!');
        }

        return recommendations.map(rec => `<p>${rec}</p>`).join('');
    },

    createRequirementsAnalyzer: () => {
        // El analizador se crea dinámicamente al usar el constructor
    },

    resetRequirementsView: () => {
        ViewManager.clearConstructor();
        const analysisContainer = document.getElementById('requirement-analysis');
        if (analysisContainer) {
            analysisContainer.innerHTML = '';
        }
        showNotification('Vista de requisitos reiniciada', 'info');
    },

    initInteractionView: () => {
        ViewManager.createUsabilityInterfaces();
        ViewManager.createUsabilityPrinciples();
    },

    createUsabilityInterfaces: () => {
        const interfacesContainer = document.getElementById('usability-interfaces');
        if (!interfacesContainer) return;

        interfacesContainer.innerHTML = Object.entries(DataManager.interfaces).map(([key, interface]) => `
            <div class="interface-card" data-interface="${key}" onclick="ViewManager.selectInterface('${key}')">
                <div class="interface-preview">
                    ${ViewManager.renderMockInterface(key)}
                </div>
                <div class="interface-content">
                    <h3 class="interface-title">${interface.name}</h3>
                    <p class="interface-description">${interface.description}</p>
                </div>
            </div>
        `).join('');
    },

    renderMockInterface: (interfaceType) => {
        switch(interfaceType) {
            case 'login':
                return `
                    <div class="mock-interface">
                        <div class="mock-login">
                            <h3>Iniciar Sesión</h3>
                            <div class="login-form">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="usuario@email.com">
                                </div>
                                <div class="form-group">
                                    <label>Contraseña</label>
                                    <input type="password" placeholder="••••••••">
                                </div>
                                <button class="btn btn-small">Entrar</button>
                            </div>
                        </div>
                    </div>
                `;
            case 'dashboard':
                return `
                    <div class="mock-dashboard">
                        <div class="dashboard-header">Panel de Control</div>
                        <div class="dashboard-widget">
                            <div class="widget-number">1,234</div>
                            <div>Usuarios</div>
                        </div>
                        <div class="dashboard-widget">
                            <div class="widget-number">$45K</div>
                            <div>Ventas</div>
                        </div>
                        <div class="dashboard-widget">
                            <div class="widget-number">89%</div>
                            <div>Satisfacción</div>
                        </div>
                        <div class="dashboard-widget">
                            <div class="widget-number">156</div>
                            <div>Pedidos</div>
                        </div>
                    </div>
                `;
            case 'ecommerce':
                return `
                    <div class="mock-ecommerce">
                        <div class="ecommerce-header">Mi Tienda Online</div>
                        <div class="product-grid">
                            <div class="product-item">
                                <div class="product-image"></div>
                                <div>Producto A</div>
                                <div>$29.99</div>
                            </div>
                            <div class="product-item">
                                <div class="product-image"></div>
                                <div>Producto B</div>
                                <div>$39.99</div>
                            </div>
                        </div>
                        <div class="ecommerce-footer">🛒 Carrito (2)</div>
                    </div>
                `;
            default:
                return '<div class="mock-interface">Interface no disponible</div>';
        }
    },

    selectInterface: (interfaceKey) => {
        const interface = DataManager.interfaces[interfaceKey];
        ViewManager.updateUsabilityAnalysis(interface);
        
        // Resaltar interfaz seleccionada
        document.querySelectorAll('.interface-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const selectedCard = document.querySelector(`[data-interface="${interfaceKey}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active');
        }
    },

    createUsabilityPrinciples: () => {
        const principlesContainer = document.getElementById('usability-principles');
        if (!principlesContainer) return;

        principlesContainer.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">📋 Principios de Usabilidad (Jakob Nielsen)</h3>
                    <p class="card-subtitle">Análisis de la interfaz seleccionada</p>
                </div>
                <div id="principles-analysis" class="usability-principles">
                    <p class="text-center">👆 Selecciona una interfaz para ver el análisis</p>
                </div>
            </div>
        `;
    },

    updateUsabilityAnalysis: (interface) => {
        const analysisContainer = document.getElementById('principles-analysis');
        if (!analysisContainer || !interface) return;

        analysisContainer.innerHTML = Object.entries(interface.principles).map(([principle, score]) => `
            <div class="principle-item">
                <div class="principle-name">${principle}</div>
                <div class="principle-score">${score}%</div>
                <div class="principle-bar">
                    <div class="principle-progress" style="width: ${score}%"></div>
                </div>
            </div>
        `).join('');
    },

    resetInteractionView: () => {
        document.querySelectorAll('.interface-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const analysisContainer = document.getElementById('principles-analysis');
        if (analysisContainer) {
            analysisContainer.innerHTML = '<p class="text-center">👆 Selecciona una interfaz para ver el análisis</p>';
        }
        
        showNotification('Vista de usabilidad reiniciada', 'info');
    }
};

// === FUNCIONES GLOBALES ===
function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'global-tooltip';
    tooltip.textContent = e.target.getAttribute('title');
    e.target.removeAttribute('title');
    e.target.setAttribute('data-title', tooltip.textContent);
    
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 + 'px';
    tooltip.style.top = rect.top - 35 + 'px';
    
    requestAnimationFrame(() => {
        tooltip.classList.add('visible');
    });
}

function hideTooltip(e) {
    const tooltip = document.querySelector('.global-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
    
    const title = e.target.getAttribute('data-title');
    if (title) {
        e.target.setAttribute('title', title);
        e.target.removeAttribute('data-title');
    }
}

function saveCurrentState() {
    const state = {
        currentView: AppConfig.currentView,
        currentScenario: AppConfig.currentScenario,
        timestamp: new Date().toISOString(),
        qualityValues: {},
        userProgress: AppConfig.userProgress
    };

    // Guardar valores de calidad si están disponibles
    document.querySelectorAll('.quality-slider').forEach(slider => {
        state.qualityValues[slider.dataset.characteristic] = parseInt(slider.value);
    });

    localStorage.setItem('iso-lab-state', JSON.stringify(state));
    showNotification('Estado guardado correctamente', 'success');
}

function loadSavedState() {
    const saved = localStorage.getItem('iso-lab-state');
    if (!saved) return false;

    try {
        const state = JSON.parse(saved);
        AppConfig.currentView = state.currentView;
        AppConfig.currentScenario = state.currentScenario;
        AppConfig.userProgress = state.userProgress || {};

        // Restaurar vista
        UIManager.switchView(state.currentView);

        // Restaurar valores de calidad
        if (state.qualityValues && Object.keys(state.qualityValues).length > 0) {
            setTimeout(() => {
                Object.entries(state.qualityValues).forEach(([char, value]) => {
                    const slider = document.getElementById(`slider-${char}`);
                    if (slider) {
                        slider.value = value;
                        const valueDisplay = document.getElementById(`value-${char}`);
                        if (valueDisplay) {
                            valueDisplay.textContent = `${value}%`;
                        }
                    }
                });

                // Actualizar gráfico si está disponible
                if (ViewManager.drawRadarChart) {
                    ViewManager.drawRadarChart();
                }
            }, 500);
        }

        showNotification('Estado restaurado correctamente', 'info');
        return true;
    } catch (error) {
        console.error('Error loading saved state:', error);
        return false;
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${getNotificationIcon(type)}</span>
        <span class="notification-text">${message}</span>
    `;

    document.body.appendChild(notification);

    requestAnimationFrame(() => {
        notification.classList.add('visible');
    });

    setTimeout(() => {
        notification.classList.remove('visible');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': '✅',
        'error': '❌',
        'warning': '⚠️',
        'info': 'ℹ️'
    };
    return icons[type] || 'ℹ️';
}

function showWelcomeMessage() {
    const welcome = document.createElement('div');
    welcome.className = 'welcome-modal';
    welcome.innerHTML = `
        <div class="welcome-content">
            <div class="welcome-header">
                <h2>🎯 Bienvenido al Laboratorio ISO</h2>
                <button class="close-welcome" onclick="this.closest('.welcome-modal').remove()">×</button>
            </div>
            <div class="welcome-body">
                <p>Una herramienta interactiva para explorar los estándares ISO 25010, 29148 y 9241.</p>
                <div class="welcome-shortcuts">
                    <h3>Atajos de teclado:</h3>
                    <div class="shortcut-grid">
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> + <kbd>1</kbd> <span>Ecosistema</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> + <kbd>2</kbd> <span>Calidad</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> + <kbd>3</kbd> <span>Requisitos</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> + <kbd>4</kbd> <span>Usabilidad</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> + <kbd>S</kbd> <span>Guardar</span>
                        </div>
                        <div class="shortcut-item">
                            <kbd>Ctrl</kbd> + <kbd>R</kbd> <span>Reset</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="welcome-footer">
                <button class="btn btn-primary" onclick="this.closest('.welcome-modal').remove()">
                    🚀 Comenzar Exploración
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(welcome);

    requestAnimationFrame(() => {
        welcome.classList.add('visible');
    });
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    // Guardar timestamp de inicio de sesión
    if (!localStorage.getItem('sessionStart')) {
        localStorage.setItem('sessionStart', Date.now().toString());
    }

    // Inicializar tooltips globales
    const tooltips = document.querySelectorAll('[title]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });

    // Añadir atajos de teclado
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
                case 'r':
                    e.preventDefault();
                    UIManager.resetCurrentView();
                    break;
            }
        }
        // Cerrar modales con ESC
        if (e.key === 'Escape') {
            document.querySelectorAll('.dynamic-modal').forEach(modal => modal.remove());
        }
    });

    // Inicializar aplicación
    UIManager.init();
    ViewManager.initializeView('view-cycle');

    // Intentar cargar estado guardado
    setTimeout(() => {
        loadSavedState();
    }, 1000);
});