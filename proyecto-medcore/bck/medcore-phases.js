/**
 * MEDCORE PHASES - GESTIÓN DE FASES DEL PROYECTO
 * Define las decisiones específicas, contenido y flujo de cada fase del proyecto MedCore
 */

/**
 * Extender el motor principal con gestión avanzada de fases
 */
if (typeof MedCoreEngine !== 'undefined') {
    
    /**
     * Inicializar todas las decisiones específicas por fase
     */
    MedCoreEngine.prototype.initializeDecisions = function() {
        this.decisions = {
            // FASE 1: DEFINICIÓN Y ANÁLISIS
            1: [
                {
                    id: 'requirements_methodology',
                    title: '📋 Metodología de Análisis de Requisitos',
                    description: '¿Qué enfoque utilizarás para el levantamiento de requisitos?',
                    options: [
                        {
                            id: 'agile_scrum',
                            title: 'Metodología Ágil (Scrum)',
                            description: 'Sprints cortos con retroalimentación continua de stakeholders',
                            impact: {
                                budget: -50000,
                                time: 0,
                                quality: { usability: +15, functionalSuitability: +10 },
                                stakeholders: { medical_director: +10, emergency_chief: +15 }
                            },
                            standards: ['ISO 29148', 'ISO 12207']
                        },
                        {
                            id: 'waterfall_classic',
                            title: 'Metodología Cascada',
                            description: 'Análisis exhaustivo y documentación completa antes de proceder',
                            impact: {
                                budget: 0,
                                time: +1,
                                quality: { reliability: +15, maintainability: +10 },
                                stakeholders: { cto: +15, systems_chief: +10 }
                            },
                            standards: ['ISO 29148', 'ISO 90003']
                        },
                        {
                            id: 'hybrid_approach',
                            title: 'Enfoque Híbrido',
                            description: 'Combinación de metodologías según el módulo específico',
                            impact: {
                                budget: -25000,
                                time: 0.5,
                                quality: { compatibility: +15, functionalSuitability: +8, usability: +8 },
                                stakeholders: { admin_director: +12, cto: +8 }
                            },
                            standards: ['ISO 29148', 'ISO 12207', 'ISO 15288']
                        }
                    ]
                },
                {
                    id: 'stakeholder_prioritization',
                    title: '👥 Priorización de Stakeholders',
                    description: '¿A qué stakeholder darás mayor peso en las decisiones del sistema?',
                    options: [
                        {
                            id: 'medical_focus',
                            title: 'Priorizar Personal Médico',
                            description: 'Las decisiones se basarán principalmente en necesidades médicas',
                            impact: {
                                quality: { functionalSuitability: +20, usability: +15, reliability: +10 },
                                stakeholders: { medical_director: +20, emergency_chief: +15, admin_director: -5 }
                            }
                        },
                        {
                            id: 'admin_focus',
                            title: 'Priorizar Administración',
                            description: 'Enfoque en eficiencia operativa y control de costos',
                            impact: {
                                budget: +100000,
                                quality: { performanceEfficiency: +15, compatibility: +10 },
                                stakeholders: { admin_director: +20, medical_director: -5, cto: +10 }
                            }
                        },
                        {
                            id: 'tech_focus',
                            title: 'Priorizar Aspectos Técnicos',
                            description: 'Decisiones basadas en robustez técnica y escalabilidad',
                            impact: {
                                quality: { security: +20, maintainability: +15, portability: +10 },
                                stakeholders: { cto: +20, systems_chief: +15, emergency_chief: -5 }
                            }
                        },
                        {
                            id: 'balanced_approach',
                            title: 'Enfoque Equilibrado',
                            description: 'Balancear todas las perspectivas por igual',
                            impact: {
                                quality: { 
                                    functionalSuitability: +8, usability: +8, reliability: +8,
                                    security: +8, performanceEfficiency: +8 
                                },
                                stakeholders: { 
                                    medical_director: +8, admin_director: +8, cto: +8, 
                                    emergency_chief: +8, systems_chief: +8 
                                }
                            }
                        }
                    ]
                }
            ],
            
            // FASE 2: PLANIFICACIÓN
            2: [
                {
                    id: 'architecture_style',
                    title: '🏗️ Arquitectura del Sistema',
                    description: '¿Qué arquitectura técnica implementarás?',
                    options: [
                        {
                            id: 'microservices',
                            title: 'Arquitectura de Microservicios',
                            description: 'Servicios independientes y escalables',
                            impact: {
                                budget: -200000,
                                time: +2,
                                quality: { scalability: +20, maintainability: +15, portability: +10 },
                                stakeholders: { cto: +15, systems_chief: +20 }
                            },
                            standards: ['ISO 25010', 'ISO 12207']
                        },
                        {
                            id: 'monolithic',
                            title: 'Arquitectura Monolítica',
                            description: 'Sistema integrado y centralizado',
                            impact: {
                                budget: +50000,
                                time: -1,
                                quality: { reliability: +15, performanceEfficiency: +10 },
                                stakeholders: { admin_director: +15, emergency_chief: +10 }
                            },
                            standards: ['ISO 25010', 'ISO 90003']
                        },
                        {
                            id: 'service_oriented',
                            title: 'Arquitectura Orientada a Servicios (SOA)',
                            description: 'Servicios modulares con integración controlada',
                            impact: {
                                budget: -100000,
                                time: +1,
                                quality: { compatibility: +20, maintainability: +12, functionalSuitability: +8 },
                                stakeholders: { cto: +10, systems_chief: +12, medical_director: +8 }
                            },
                            standards: ['ISO 25010', 'ISO 15288']
                        }
                    ]
                }
            ],
            
            // FASE 3: DISEÑO
            3: [
                {
                    id: 'ui_framework',
                    title: '🎨 Framework de Interfaz de Usuario',
                    description: '¿Qué tecnología usarás para las interfaces?',
                    options: [
                        {
                            id: 'react_modern',
                            title: 'React con Design System Moderno',
                            description: 'Interfaz reactiva y moderna con componentes reutilizables',
                            impact: {
                                budget: -150000,
                                quality: { usability: +20, maintainability: +15 },
                                stakeholders: { medical_director: +15, emergency_chief: +10 }
                            }
                        },
                        {
                            id: 'classic_web',
                            title: 'Desarrollo Web Clásico',
                            description: 'HTML/CSS/JavaScript tradicional, estable y probado',
                            impact: {
                                budget: +75000,
                                time: -0.5,
                                quality: { reliability: +15, compatibility: +12 },
                                stakeholders: { admin_director: +15, systems_chief: +8 }
                            }
                        }
                    ]
                }
            ],
            
            // FASE 4: DESARROLLO
            4: [
                {
                    id: 'testing_strategy',
                    title: '🧪 Estrategia de Pruebas',
                    description: '¿Qué enfoque de testing implementarás?',
                    options: [
                        {
                            id: 'comprehensive_testing',
                            title: 'Testing Integral Automatizado',
                            description: 'Pruebas unitarias, integración y E2E automatizadas',
                            impact: {
                                budget: -300000,
                                time: +3,
                                quality: { reliability: +25, security: +15, maintainability: +20 },
                                stakeholders: { cto: +20, emergency_chief: +15 }
                            }
                        },
                        {
                            id: 'manual_testing',
                            title: 'Pruebas Manuales Dirigidas',
                            description: 'Testing manual enfocado en casos críticos',
                            impact: {
                                budget: +100000,
                                time: -1,
                                quality: { functionalSuitability: +15, usability: +10 },
                                stakeholders: { admin_director: +15, medical_director: +10 }
                            }
                        }
                    ]
                }
            ],
            
            // FASE 5: IMPLEMENTACIÓN
            5: [
                {
                    id: 'deployment_strategy',
                    title: '🚀 Estrategia de Despliegue',
                    description: '¿Cómo implementarás el sistema en producción?',
                    options: [
                        {
                            id: 'gradual_rollout',
                            title: 'Despliegue Gradual por Departamentos',
                            description: 'Implementación escalonada empezando por departamentos piloto',
                            impact: {
                                time: +2,
                                quality: { reliability: +20, usability: +15 },
                                stakeholders: { medical_director: +20, emergency_chief: +15 }
                            }
                        },
                        {
                            id: 'big_bang',
                            title: 'Despliegue Completo Inmediato',
                            description: 'Implementación total en todos los departamentos simultáneamente',
                            impact: {
                                time: -1,
                                budget: +50000,
                                quality: { performanceEfficiency: +10 },
                                stakeholders: { admin_director: +15, cto: -5 }
                            }
                        }
                    ]
                }
            ]
        };
        
        console.log('📋 Decisiones de todas las fases inicializadas');
    };
    
    /**
     * Mostrar modal de decisión estratégica
     */
    MedCoreEngine.prototype.showDecisionModal = function() {
        const currentPhaseDecisions = this.decisions[this.projectState.currentPhase];
        
        if (!currentPhaseDecisions || currentPhaseDecisions.length === 0) {
            this.addAlert('No hay decisiones disponibles en esta fase', 'info');
            return;
        }
        
        // Seleccionar una decisión aleatoria de las disponibles
        const decision = currentPhaseDecisions[Math.floor(Math.random() * currentPhaseDecisions.length)];
        
        this.showDecisionInterface(decision);
    };
    
    /**
     * Mostrar interfaz de decisión específica
     */
    MedCoreEngine.prototype.showDecisionInterface = function(decision) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        const decisionHTML = `
            <div class="decision-interface">
                <div class="decision-header">
                    <h2>${decision.title}</h2>
                    <div class="decision-phase">Fase ${this.projectState.currentPhase}: ${this.phases[this.projectState.currentPhase].name}</div>
                </div>
                
                <div class="decision-description">
                    <p>${decision.description}</p>
                </div>
                
                <div class="decision-options">
                    ${decision.options.map((option, index) => `
                        <div class="decision-option" data-option-id="${option.id}">
                            <div class="option-header">
                                <h3>${option.title}</h3>
                                <div class="option-standards">
                                    ${option.standards ? option.standards.map(std => `<span class="standard-tag">${std}</span>`).join('') : ''}
                                </div>
                            </div>
                            
                            <div class="option-description">
                                <p>${option.description}</p>
                            </div>
                            
                            <div class="option-impact">
                                <h4>📊 Impacto Esperado</h4>
                                ${this.renderOptionImpact(option.impact)}
                            </div>
                            
                            <button class="select-option-btn" onclick="window.gameEngine.selectDecisionOption('${decision.id}', '${option.id}')">
                                Seleccionar esta Opción
                            </button>
                        </div>
                    `).join('')}
                </div>
                
                <div class="decision-actions">
                    <button class="action-btn secondary" onclick="window.gameEngine.loadPhaseContent(${this.projectState.currentPhase})">
                        ← Regresar a la Fase
                    </button>
                    <button class="action-btn info" onclick="window.gameEngine.consultStakeholders()">
                        👥 Consultar Stakeholders
                    </button>
                </div>
            </div>
        `;
        
        mainContent.innerHTML = decisionHTML;
    };
    
    /**
     * Renderizar el impacto de una opción de decisión
     */
    MedCoreEngine.prototype.renderOptionImpact = function(impact) {
        let impactHTML = '<div class="impact-grid">';
        
        // Impacto en presupuesto
        if (impact.budget !== undefined) {
            const budgetChange = impact.budget;
            const budgetClass = budgetChange > 0 ? 'positive' : budgetChange < 0 ? 'negative' : 'neutral';
            const budgetIcon = budgetChange > 0 ? '💰' : budgetChange < 0 ? '💸' : '💰';
            impactHTML += `
                <div class="impact-item ${budgetClass}">
                    <span class="impact-icon">${budgetIcon}</span>
                    <span class="impact-label">Presupuesto:</span>
                    <span class="impact-value">${budgetChange >= 0 ? '+' : ''}€${Math.abs(budgetChange).toLocaleString()}</span>
                </div>
            `;
        }
        
        // Impacto en tiempo
        if (impact.time !== undefined) {
            const timeChange = impact.time;
            const timeClass = timeChange < 0 ? 'positive' : timeChange > 0 ? 'negative' : 'neutral';
            const timeIcon = timeChange < 0 ? '⚡' : timeChange > 0 ? '⏳' : '⏰';
            impactHTML += `
                <div class="impact-item ${timeClass}">
                    <span class="impact-icon">${timeIcon}</span>
                    <span class="impact-label">Tiempo:</span>
                    <span class="impact-value">${timeChange >= 0 ? '+' : ''}${timeChange} meses</span>
                </div>
            `;
        }
        
        // Impacto en calidad
        if (impact.quality) {
            Object.entries(impact.quality).forEach(([metric, change]) => {
                const qualityClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral';
                const qualityIcon = change > 0 ? '📈' : change < 0 ? '📉' : '📊';
                impactHTML += `
                    <div class="impact-item ${qualityClass}">
                        <span class="impact-icon">${qualityIcon}</span>
                        <span class="impact-label">${this.getMetricDisplayName(metric)}:</span>
                        <span class="impact-value">${change >= 0 ? '+' : ''}${change}%</span>
                    </div>
                `;
            });
        }
        
        // Impacto en stakeholders
        if (impact.stakeholders) {
            Object.entries(impact.stakeholders).forEach(([stakeholderId, change]) => {
                const stakeholder = this.stakeholders[stakeholderId];
                if (stakeholder) {
                    const stakeholderClass = change > 0 ? 'positive' : change < 0 ? 'negative' : 'neutral';
                    const stakeholderIcon = change > 0 ? '😊' : change < 0 ? '😞' : '😐';
                    impactHTML += `
                        <div class="impact-item ${stakeholderClass}">
                            <span class="impact-icon">${stakeholderIcon}</span>
                            <span class="impact-label">${stakeholder.name}:</span>
                            <span class="impact-value">${change >= 0 ? '+' : ''}${change}%</span>
                        </div>
                    `;
                }
            });
        }
        
        impactHTML += '</div>';
        return impactHTML;
    };
    
    /**
     * Seleccionar una opción de decisión
     */
    MedCoreEngine.prototype.selectDecisionOption = function(decisionId, optionId) {
        console.log(`🎯 Decisión tomada: ${decisionId} -> ${optionId}`);
        
        // Encontrar la decisión y opción específica
        const currentPhaseDecisions = this.decisions[this.projectState.currentPhase];
        const decision = currentPhaseDecisions.find(d => d.id === decisionId);
        if (!decision) {
            console.error('Decisión no encontrada:', decisionId);
            return;
        }
        
        const option = decision.options.find(o => o.id === optionId);
        if (!option) {
            console.error('Opción no encontrada:', optionId);
            return;
        }
        
        // Aplicar el impacto de la decisión
        this.applyDecisionImpact(option.impact);
        
        // Registrar en historial
        this.gameHistory.push({
            action: 'decision_made',
            phase: this.projectState.currentPhase,
            decision: decisionId,
            option: optionId,
            timestamp: new Date(),
            data: { decision, option }
        });
        
        // Mostrar resultado
        this.showDecisionResult(decision, option);
        
        // Actualizar métricas
        this.updateMetrics();
        
        // Guardar progreso
        this.saveProgress();
    };
    
    /**
     * Aplicar el impacto de una decisión
     */
    MedCoreEngine.prototype.applyDecisionImpact = function(impact) {
        // Aplicar cambios en presupuesto
        if (impact.budget !== undefined) {
            this.projectState.budget += impact.budget;
            this.projectState.budget = Math.max(0, this.projectState.budget);
        }
        
        // Aplicar cambios en tiempo
        if (impact.time !== undefined) {
            this.projectState.timeRemaining += impact.time;
            this.projectState.timeRemaining = Math.max(0, this.projectState.timeRemaining);
        }
        
        // Aplicar cambios en métricas de calidad
        if (impact.quality) {
            Object.entries(impact.quality).forEach(([metric, change]) => {
                if (this.qualityMetrics[metric]) {
                    this.qualityMetrics[metric].value += change;
                    this.qualityMetrics[metric].value = Math.max(0, 
                        Math.min(100, this.qualityMetrics[metric].value)
                    );
                }
            });
        }
        
        // Aplicar cambios en satisfacción de stakeholders
        if (impact.stakeholders) {
            Object.entries(impact.stakeholders).forEach(([stakeholderId, change]) => {
                if (this.stakeholders[stakeholderId]) {
                    this.stakeholders[stakeholderId].satisfaction += change;
                    this.stakeholders[stakeholderId].satisfaction = Math.max(0, 
                        Math.min(100, this.stakeholders[stakeholderId].satisfaction)
                    );
                }
            });
        }
    };
    
    /**
     * Mostrar resultado de una decisión
     */
    MedCoreEngine.prototype.showDecisionResult = function(decision, option) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        const resultHTML = `
            <div class="decision-result">
                <div class="result-header">
                    <h2>✅ Decisión Implementada</h2>
                    <div class="result-subtitle">Has seleccionado: ${option.title}</div>
                </div>
                
                <div class="result-content">
                    <div class="decision-summary">
                        <h3>${decision.title}</h3>
                        <p><strong>Opción seleccionada:</strong> ${option.title}</p>
                        <p>${option.description}</p>
                    </div>
                    
                    <div class="impact-applied">
                        <h3>📊 Impacto Aplicado al Proyecto</h3>
                        ${this.renderAppliedImpact(option.impact)}
                    </div>
                    
                    <div class="project-status-update">
                        <h3>📈 Estado Actual del Proyecto</h3>
                        <div class="status-metrics">
                            <div class="status-metric">
                                <span class="metric-icon">💰</span>
                                <span class="metric-name">Presupuesto:</span>
                                <span class="metric-value">€${this.projectState.budget.toLocaleString()}</span>
                            </div>
                            <div class="status-metric">
                                <span class="metric-icon">⏰</span>
                                <span class="metric-name">Tiempo restante:</span>
                                <span class="metric-value">${this.projectState.timeRemaining} meses</span>
                            </div>
                            <div class="status-metric">
                                <span class="metric-icon">📊</span>
                                <span class="metric-name">Progreso:</span>
                                <span class="metric-value">${Math.round(this.projectState.progressPercentage)}%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="standards-applied">
                        <h3>📋 Estándares ISO Aplicados</h3>
                        <div class="standards-list">
                            ${option.standards ? option.standards.map(std => `
                                <div class="standard-applied">
                                    <strong>${std}</strong>
                                    <span>${this.getStandardDescription(std)}</span>
                                </div>
                            `).join('') : '<p>No hay estándares específicos aplicados</p>'}
                        </div>
                    </div>
                </div>
                
                <div class="result-actions">
                    <button class="action-btn primary" onclick="window.gameEngine.loadPhaseContent(${this.projectState.currentPhase})">
                        ← Continuar con la Fase
                    </button>
                    <button class="action-btn secondary" onclick="window.gameEngine.showDecisionModal()">
                        🎯 Tomar Otra Decisión
                    </button>
                    ${this.projectState.currentPhase < this.projectState.totalPhases ? `
                        <button class="action-btn success" onclick="window.gameEngine.advancePhase()">
                            ➡️ Avanzar a Siguiente Fase
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        
        mainContent.innerHTML = resultHTML;
        
        // Agregar alerta de éxito
        this.addAlert(`Decisión implementada: ${option.title}`, 'success');
    };
    
    /**
     * Renderizar el impacto aplicado
     */
    MedCoreEngine.prototype.renderAppliedImpact = function(impact) {
        let appliedHTML = '<div class="applied-impact-grid">';
        
        if (impact.budget !== undefined) {
            const budgetChange = impact.budget;
            const budgetClass = budgetChange > 0 ? 'positive' : 'negative';
            appliedHTML += `
                <div class="applied-impact-item ${budgetClass}">
                    <span class="impact-icon">${budgetChange > 0 ? '💰' : '💸'}</span>
                    <span>Presupuesto ${budgetChange > 0 ? 'añadido' : 'utilizado'}: €${Math.abs(budgetChange).toLocaleString()}</span>
                </div>
            `;
        }
        
        if (impact.time !== undefined) {
            const timeChange = impact.time;
            const timeClass = timeChange < 0 ? 'positive' : 'negative';
            appliedHTML += `
                <div class="applied-impact-item ${timeClass}">
                    <span class="impact-icon">${timeChange < 0 ? '⚡' : '⏳'}</span>
                    <span>Tiempo ${timeChange < 0 ? 'ahorrado' : 'adicional'}: ${Math.abs(timeChange)} meses</span>
                </div>
            `;
        }
        
        if (impact.quality) {
            Object.entries(impact.quality).forEach(([metric, change]) => {
                appliedHTML += `
                    <div class="applied-impact-item ${change > 0 ? 'positive' : 'negative'}">
                        <span class="impact-icon">${change > 0 ? '📈' : '📉'}</span>
                        <span>${this.getMetricDisplayName(metric)}: ${change > 0 ? '+' : ''}${change}%</span>
                    </div>
                `;
            });
        }
        
        appliedHTML += '</div>';
        return appliedHTML;
    };
    
    /**
     * Avanzar a la siguiente fase
     */
    MedCoreEngine.prototype.advancePhase = function() {
        if (this.projectState.currentPhase >= this.projectState.totalPhases) {
            this.completeProject();
            return;
        }
        
        const nextPhase = this.projectState.currentPhase + 1;
        
        // Confirmar avance
        if (confirm(`¿Estás seguro de que quieres avanzar a la Fase ${nextPhase}?`)) {
            this.startPhase(nextPhase);
            this.addAlert(`Avanzando a Fase ${nextPhase}`, 'success');
        }
    };
    
    /**
     * Completar el proyecto
     */
    MedCoreEngine.prototype.completeProject = function() {
        console.log('🏆 Proyecto completado!');
        
        // Calcular puntaje final
        const finalScore = this.calculateFinalScore();
        
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            mainContent.innerHTML = `
                <div class="project-completion">
                    <div class="completion-header">
                        <h1>🏆 ¡Proyecto MedCore Completado!</h1>
                        <div class="final-score">Puntuación Final: ${finalScore}/100</div>
                    </div>
                    
                    <div class="project-summary">
                        <h2>📊 Resumen del Proyecto</h2>
                        <!-- Se implementará el resumen completo -->
                        <p>¡Felicitaciones por completar el sistema MedCore!</p>
                    </div>
                    
                    <div class="completion-actions">
                        <button class="action-btn primary" onclick="window.gameEngine.restartProject()">
                            🔄 Iniciar Nuevo Proyecto
                        </button>
                        <button class="action-btn secondary" onclick="window.gameEngine.exportReport()">
                            📄 Exportar Reporte
                        </button>
                    </div>
                </div>
            `;
        }
        
        this.addAlert('¡Proyecto completado exitosamente!', 'success');
    };
    
    /**
     * Calcular puntuación final
     */
    MedCoreEngine.prototype.calculateFinalScore = function() {
        // Implementar cálculo de puntuación basado en métricas
        const qualityScore = this.calculateAverageQuality();
        const stakeholderScore = this.calculateAverageStakeholderSatisfaction();
        const budgetScore = (this.projectState.budget / this.projectState.initialBudget) * 100;
        const timeScore = this.projectState.timeRemaining > 0 ? 100 : 50;
        
        return Math.round((qualityScore * 0.4) + (stakeholderScore * 0.3) + (budgetScore * 0.2) + (timeScore * 0.1));
    };
    
    /**
     * Calcular satisfacción promedio de stakeholders
     */
    MedCoreEngine.prototype.calculateAverageStakeholderSatisfaction = function() {
        let totalSatisfaction = 0;
        let totalInfluence = 0;
        
        Object.values(this.stakeholders).forEach(stakeholder => {
            totalSatisfaction += stakeholder.satisfaction * stakeholder.influence;
            totalInfluence += stakeholder.influence;
        });
        
        return totalSatisfaction / totalInfluence;
    };
    
    /**
     * Consultar stakeholders
     */
    MedCoreEngine.prototype.consultStakeholders = function() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        const stakeholdersHTML = `
            <div class="stakeholder-consultation">
                <div class="consultation-header">
                    <h2>👥 Consulta de Stakeholders</h2>
                    <p>Revisa las opiniones y prioridades de cada stakeholder</p>
                </div>
                
                <div class="stakeholders-grid">
                    ${Object.entries(this.stakeholders).map(([id, stakeholder]) => `
                        <div class="stakeholder-consultation-card">
                            <div class="stakeholder-header">
                                <div class="stakeholder-avatar">${this.getStakeholderAvatar(id)}</div>
                                <div class="stakeholder-info">
                                    <h3>${stakeholder.name}</h3>
                                    <p class="stakeholder-role">${stakeholder.role}</p>
                                </div>
                                <div class="satisfaction-indicator ${this.getSatisfactionClass(stakeholder.satisfaction)}">
                                    ${stakeholder.satisfaction}%
                                </div>
                            </div>
                            
                            <div class="stakeholder-priorities">
                                <h4>🎯 Prioridades</h4>
                                <div class="priorities-list">
                                    ${stakeholder.priorities.map(priority => `
                                        <span class="priority-tag">${this.getMetricDisplayName(priority)}</span>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <div class="stakeholder-influence">
                                <h4>📊 Influencia en el Proyecto</h4>
                                <div class="influence-bar">
                                    <div class="influence-fill" style="width: ${stakeholder.influence * 100}%"></div>
                                </div>
                                <span class="influence-percentage">${Math.round(stakeholder.influence * 100)}%</span>
                            </div>
                            
                            <div class="stakeholder-feedback">
                                <h4>💬 Comentarios Actuales</h4>
                                <p class="feedback-text">${this.getStakeholderFeedback(id, stakeholder.satisfaction)}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="consultation-actions">
                    <button class="action-btn primary" onclick="window.gameEngine.loadPhaseContent(${this.projectState.currentPhase})">
                        ← Regresar a la Fase
                    </button>
                    <button class="action-btn secondary" onclick="window.gameEngine.showDecisionModal()">
                        🎯 Tomar Decisión
                    </button>
                </div>
            </div>
        `;
        
        mainContent.innerHTML = stakeholdersHTML;
    };
    
    /**
     * Obtener avatar de stakeholder
     */
    MedCoreEngine.prototype.getStakeholderAvatar = function(stakeholderId) {
        const avatars = {
            'medical_director': '👩‍⚕️',
            'cto': '👨‍💼',
            'admin_director': '👩‍💼',
            'emergency_chief': '👨‍⚕️',
            'systems_chief': '👩‍💻'
        };
        return avatars[stakeholderId] || '👤';
    };
    
    /**
     * Obtener clase CSS para nivel de satisfacción
     */
    MedCoreEngine.prototype.getSatisfactionClass = function(satisfaction) {
        if (satisfaction >= 80) return 'high';
        if (satisfaction >= 60) return 'medium';
        if (satisfaction >= 40) return 'low';
        return 'very-low';
    };
    
    /**
     * Obtener feedback contextual de stakeholder
     */
    MedCoreEngine.prototype.getStakeholderFeedback = function(stakeholderId, satisfaction) {
        const feedbacks = {
            'medical_director': {
                high: "Excelente enfoque en la funcionalidad médica. El sistema será muy útil para nuestro personal.",
                medium: "El progreso es bueno, pero necesitamos más énfasis en la usabilidad clínica.",
                low: "Estoy preocupada por si el sistema realmente satisfará nuestras necesidades médicas.",
                'very-low': "El proyecto no está considerando adecuadamente los requisitos médicos críticos."
            },
            'cto': {
                high: "La arquitectura técnica es sólida y escalable. Buen trabajo en seguridad.",
                medium: "El enfoque técnico es adecuado, pero podríamos mejorar la eficiencia.",
                low: "Tengo dudas sobre la robustez técnica de la solución propuesta.",
                'very-low': "La implementación técnica presenta riesgos significativos."
            },
            'admin_director': {
                high: "El proyecto está bien controlado en términos de presupuesto y eficiencia.",
                medium: "Los costos están bajo control, pero necesitamos optimizar más.",
                low: "Me preocupa el impacto en el presupuesto y la eficiencia operativa.",
                'very-low': "El proyecto está excediendo expectativas de costo y complejidad."
            },
            'emergency_chief': {
                high: "El sistema parece que será confiable para emergencias 24/7.",
                medium: "Necesitamos asegurar que funcione perfectamente en situaciones críticas.",
                low: "Tengo serias dudas sobre la confiabilidad en emergencias.",
                'very-low': "Este sistema podría comprometer la atención de emergencias."
            },
            'systems_chief': {
                high: "La integración y mantenibilidad del sistema son excelentes.",
                medium: "El sistema es técnicamente viable, pero podría ser más fácil de mantener.",
                low: "La complejidad del sistema hará difícil el mantenimiento futuro.",
                'very-low': "El sistema será una pesadilla de mantener y actualizar."
            }
        };
        
        const satisfactionLevel = this.getSatisfactionClass(satisfaction);
        return feedbacks[stakeholderId]?.[satisfactionLevel] || "Sin comentarios específicos en este momento.";
    };
    
    /**
     * Revisar entregables de la fase actual
     */
    MedCoreEngine.prototype.reviewDeliverables = function() {
        const currentPhase = this.phases[this.projectState.currentPhase];
        
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        const deliverablesHTML = `
            <div class="deliverables-review">
                <div class="review-header">
                    <h2>📋 Entregables - ${currentPhase.name}</h2>
                    <p>Revisa y marca el progreso de los entregables de esta fase</p>
                </div>
                
                <div class="deliverables-detailed">
                    ${currentPhase.deliverables.map((deliverable, index) => `
                        <div class="deliverable-detailed" data-index="${index}">
                            <div class="deliverable-header">
                                <h3>${deliverable}</h3>
                                <div class="deliverable-status">
                                    <select class="status-selector" onchange="window.gameEngine.updateDeliverableStatus(${index}, this.value)">
                                        <option value="pending">📄 Pendiente</option>
                                        <option value="in-progress">⚙️ En Progreso</option>
                                        <option value="review">🔍 En Revisión</option>
                                        <option value="completed">✅ Completado</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div class="deliverable-description">
                                <p>${this.getDeliverableDescription(deliverable)}</p>
                            </div>
                            
                            <div class="deliverable-standards">
                                <h4>📋 Estándares ISO Aplicables</h4>
                                <div class="standards-tags">
                                    ${currentPhase.standards.map(std => `<span class="standard-tag">${std}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="review-actions">
                    <button class="action-btn primary" onclick="window.gameEngine.loadPhaseContent(${this.projectState.currentPhase})">
                        ← Regresar a la Fase
                    </button>
                    <button class="action-btn success" onclick="window.gameEngine.completeDeliverables()">
                        ✅ Marcar Entregables Como Completados
                    </button>
                </div>
            </div>
        `;
        
        mainContent.innerHTML = deliverablesHTML;
    };
    
    /**
     * Obtener descripción detallada de un entregable
     */
    MedCoreEngine.prototype.getDeliverableDescription = function(deliverable) {
        const descriptions = {
            'Documento de Requisitos del Sistema': 'Especificación completa de requisitos funcionales y no funcionales siguiendo ISO 29148.',
            'Arquitectura de Alto Nivel': 'Diseño arquitectónico general del sistema con componentes principales y sus interacciones.',
            'Plan de Calidad ISO 25010': 'Definición de métricas y procesos de calidad basados en las 8 características de ISO 25010.',
            'Matriz de Stakeholders': 'Identificación y análisis de todos los stakeholders con sus necesidades y nivel de influencia.',
            'Plan de Proyecto Detallado': 'Cronograma detallado con hitos, recursos y dependencias del proyecto.',
            'Arquitectura Técnica': 'Especificación técnica detallada de la infraestructura y tecnologías.',
            'Plan de Recursos': 'Asignación de recursos humanos, técnicos y financieros.',
            'Cronograma Maestro': 'Timeline principal del proyecto con todas las fases y entregables.',
            'Diseños de Interfaz de Usuario': 'Mockups y prototipos de todas las interfaces siguiendo ISO 9241.',
            'Arquitectura de Software Detallada': 'Especificación completa de componentes, módulos y sus interacciones.',
            'Modelo de Datos': 'Diseño de base de datos con entidades, relaciones y restricciones.',
            'Prototipos Funcionales': 'Prototipos interactivos para validación con usuarios finales.',
            'Sistema MedCore Funcional': 'Implementación completa de todas las funcionalidades core.',
            'Batería de Pruebas Automatizadas': 'Suite completa de tests unitarios, integración y E2E.',
            'Documentación Técnica': 'Documentación completa para desarrolladores y administradores.',
            'Manual de Integración': 'Guía para integrar el sistema con sistemas existentes.',
            'Sistema en Producción': 'Despliegue completo en ambiente productivo.',
            'Plan de Capacitación Ejecutado': 'Capacitación completa para todos los usuarios finales.',
            'Métricas de Rendimiento': 'Monitoreo y métricas de performance del sistema en producción.',
            'Evaluación Final de Calidad': 'Evaluación completa según ISO 25040.'
        };
        
        return descriptions[deliverable] || 'Descripción no disponible para este entregable.';
    };
    
    console.log('📋 MedCore Phases cargado correctamente');
}

// Verificar que el motor principal esté cargado
if (typeof MedCoreEngine === 'undefined') {
    console.warn('⚠️ MedCore Engine no está cargado. Las funcionalidades de fases no estarán disponibles.');
}