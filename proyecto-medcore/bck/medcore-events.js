/**
 * MEDCORE EVENTS - SISTEMA DE EVENTOS DINÁMICOS
 * Gestiona eventos aleatorios y crisis que impactan el proyecto
 */

if (typeof MedCoreEngine !== 'undefined') {
    
    /**
     * Inicializar sistema de eventos dinámicos
     */
    MedCoreEngine.prototype.initializeEventSystem = function() {
        console.log('🎲 Inicializando sistema de eventos dinámicos...');
        
        // Expandir pool de eventos con más variedad
        this.eventPool = [
            // EVENTOS DE CRISIS
            {
                id: 'budget_cut_15',
                type: 'crisis',
                phase: [1, 2, 3],
                probability: 0.15,
                title: '💸 Recorte de Presupuesto Moderado',
                description: 'La administración del hospital reduce el presupuesto en 15% debido a ajustes financieros.',
                impact: {
                    budget: -375000, // 15% de 2.5M
                    stakeholder_satisfaction: { 
                        admin_director: -15, 
                        medical_director: -10,
                        emergency_chief: -5
                    }
                },
                options: [
                    {
                        id: 'accept_cut',
                        title: 'Aceptar el recorte',
                        description: 'Reorganizar el proyecto con menos presupuesto',
                        impact: {
                            quality: { maintainability: -10, portability: -8 }
                        }
                    },
                    {
                        id: 'negotiate_timeline',
                        title: 'Negociar extensión de tiempo',
                        description: 'Solicitar más tiempo para compensar el menor presupuesto',
                        impact: {
                            time: +2,
                            stakeholder_satisfaction: { admin_director: +5 }
                        }
                    },
                    {
                        id: 'reduce_scope',
                        title: 'Reducir alcance del proyecto',
                        description: 'Eliminar funcionalidades no críticas',
                        impact: {
                            quality: { functionalSuitability: -15 },
                            stakeholder_satisfaction: { medical_director: -10 }
                        }
                    }
                ]
            },
            
            {
                id: 'security_audit_urgent',
                type: 'requirement',
                phase: [2, 3, 4],
                probability: 0.18,
                title: '🔒 Auditoría de Seguridad Urgente',
                description: 'Nuevas regulaciones de protección de datos médicos requieren auditoría inmediata.',
                impact: {
                    time: -1,
                    budget: -80000
                },
                options: [
                    {
                        id: 'hire_security_expert',
                        title: 'Contratar experto en seguridad',
                        description: 'Traer especialista para acelerar el proceso',
                        impact: {
                            budget: -120000,
                            quality: { security: +25 },
                            stakeholder_satisfaction: { cto: +15 }
                        }
                    },
                    {
                        id: 'internal_security_review',
                        title: 'Revisión interna de seguridad',
                        description: 'Usar recursos internos para la auditoría',
                        impact: {
                            time: -2,
                            quality: { security: +15 },
                            stakeholder_satisfaction: { admin_director: +10 }
                        }
                    }
                ]
            },
            
            {
                id: 'key_developer_leaves',
                type: 'resource',
                phase: [3, 4],
                probability: 0.12,
                title: '👥 Desarrollador Clave Abandona el Proyecto',
                description: 'El arquitecto principal del sistema ha decidido dejar la empresa.',
                impact: {
                    time: -2,
                    quality: { maintainability: -15, functionalSuitability: -10 }
                },
                options: [
                    {
                        id: 'hire_replacement_fast',
                        title: 'Contratar reemplazo urgente',
                        description: 'Buscar arquitecto senior inmediatamente',
                        impact: {
                            budget: -200000,
                            time: +1,
                            stakeholder_satisfaction: { cto: +10 }
                        }
                    },
                    {
                        id: 'redistribute_workload',
                        title: 'Redistribuir carga de trabajo',
                        description: 'Dividir responsabilidades entre equipo actual',
                        impact: {
                            time: -1,
                            quality: { performanceEfficiency: -8 },
                            stakeholder_satisfaction: { systems_chief: -10 }
                        }
                    },
                    {
                        id: 'simplify_architecture',
                        title: 'Simplificar arquitectura',
                        description: 'Reducir complejidad técnica del sistema',
                        impact: {
                            quality: { portability: -12, maintainability: +5 },
                            stakeholder_satisfaction: { admin_director: +8 }
                        }
                    }
                ]
            },
            
            // EVENTOS DE OPORTUNIDAD
            {
                id: 'new_technology_available',
                type: 'opportunity',
                phase: [2, 3],
                probability: 0.08,
                title: '🚀 Nueva Tecnología Disponible',
                description: 'Framework de IA médica que puede mejorar significativamente las capacidades del sistema.',
                impact: {},
                options: [
                    {
                        id: 'adopt_ai_technology',
                        title: 'Adoptar tecnología de IA',
                        description: 'Integrar capacidades de inteligencia artificial',
                        impact: {
                            budget: -300000,
                            time: +1,
                            quality: { functionalSuitability: +20, usability: +15 },
                            stakeholder_satisfaction: { medical_director: +20, cto: +15 }
                        }
                    },
                    {
                        id: 'evaluate_later',
                        title: 'Evaluar para versión futura',
                        description: 'Mantener plan actual, considerar IA para v2.0',
                        impact: {
                            stakeholder_satisfaction: { cto: +5 }
                        }
                    },
                    {
                        id: 'pilot_implementation',
                        title: 'Implementación piloto',
                        description: 'Probar IA en módulo específico',
                        impact: {
                            budget: -150000,
                            quality: { functionalSuitability: +10 },
                            stakeholder_satisfaction: { medical_director: +10 }
                        }
                    }
                ]
            },
            
            {
                id: 'government_incentive',
                type: 'opportunity',
                phase: [1, 2],
                probability: 0.06,
                title: '💰 Incentivo Gubernamental',
                description: 'Programa de subsidios para digitalización hospitalaria aprobado.',
                impact: {},
                options: [
                    {
                        id: 'apply_for_incentive',
                        title: 'Aplicar al programa',
                        description: 'Solicitar subsidio gubernamental',
                        impact: {
                            budget: +500000,
                            time: +0.5, // tiempo de tramitación
                            stakeholder_satisfaction: { admin_director: +20 }
                        }
                    },
                    {
                        id: 'continue_as_planned',
                        title: 'Continuar según lo planeado',
                        description: 'No cambiar el enfoque actual',
                        impact: {}
                    }
                ]
            },
            
            // EVENTOS DE STAKEHOLDERS
            {
                id: 'emergency_department_feedback',
                type: 'stakeholder',
                phase: [3, 4],
                probability: 0.20,
                title: '🏥 Retroalimentación de Emergencias',
                description: 'El departamento de emergencias solicita funcionalidades adicionales críticas.',
                impact: {},
                options: [
                    {
                        id: 'implement_emergency_features',
                        title: 'Implementar funcionalidades de emergencia',
                        description: 'Añadir módulo especializado para emergencias',
                        impact: {
                            budget: -150000,
                            time: +1,
                            quality: { functionalSuitability: +15, reliability: +10 },
                            stakeholder_satisfaction: { emergency_chief: +25, medical_director: +10 }
                        }
                    },
                    {
                        id: 'phase_two_implementation',
                        title: 'Programar para fase 2',
                        description: 'Incluir en versión futura del sistema',
                        impact: {
                            stakeholder_satisfaction: { emergency_chief: -10, admin_director: +5 }
                        }
                    }
                ]
            },
            
            {
                id: 'staff_training_concerns',
                type: 'stakeholder',
                phase: [4, 5],
                probability: 0.25,
                title: '📚 Preocupaciones sobre Capacitación',
                description: 'El personal médico expresa preocupación sobre la complejidad del nuevo sistema.',
                impact: {},
                options: [
                    {
                        id: 'enhanced_training_program',
                        title: 'Programa de capacitación extendido',
                        description: 'Desarrollar capacitación especializada',
                        impact: {
                            budget: -100000,
                            time: +0.5,
                            quality: { usability: +15 },
                            stakeholder_satisfaction: { medical_director: +15, emergency_chief: +10 }
                        }
                    },
                    {
                        id: 'simplify_interface',
                        title: 'Simplificar interfaz',
                        description: 'Rediseñar UX para mayor simplicidad',
                        impact: {
                            time: +1,
                            quality: { usability: +20, functionalSuitability: -5 },
                            stakeholder_satisfaction: { medical_director: +20 }
                        }
                    },
                    {
                        id: 'gradual_rollout_plan',
                        title: 'Plan de despliegue gradual',
                        description: 'Implementar módulos progresivamente',
                        impact: {
                            time: +2,
                            quality: { reliability: +10 },
                            stakeholder_satisfaction: { medical_director: +10, systems_chief: +5 }
                        }
                    }
                ]
            }
        ];
        
        // Estado de eventos
        this.eventState = {
            eventsTriggered: [],
            eventQueue: [],
            lastEventTime: Date.now(),
            eventCooldown: 45000 // 45 segundos entre evaluaciones
        };
        
        console.log('✅ Sistema de eventos inicializado con', this.eventPool.length, 'eventos');
    };
    
    /**
     * Programar evaluación periódica de eventos
     */
    MedCoreEngine.prototype.scheduleRandomEvents = function() {
        // Evaluación cada 30-60 segundos
        const evaluateEvents = () => {
            const currentTime = Date.now();
            if (currentTime - this.eventState.lastEventTime >= this.eventState.eventCooldown) {
                this.evaluateRandomEvents();
                this.eventState.lastEventTime = currentTime;
            }
        };
        
        // Programar evaluaciones
        this.eventIntervalId = setInterval(evaluateEvents, 30000);
        
        console.log('📅 Eventos aleatorios programados cada 30 segundos');
    };
    
    /**
     * Evaluar si debe ocurrir un evento aleatorio
     */
    MedCoreEngine.prototype.evaluateRandomEvents = function() {
        const currentPhase = this.projectState.currentPhase;
        
        // Filtrar eventos aplicables a la fase actual
        const applicableEvents = this.eventPool.filter(event => 
            !event.phase || event.phase.includes(currentPhase)
        ).filter(event => 
            !this.eventState.eventsTriggered.includes(event.id)
        );
        
        if (applicableEvents.length === 0) return;
        
        // Evaluar cada evento
        applicableEvents.forEach(event => {
            const randomValue = Math.random();
            
            // Ajustar probabilidad según fase (más eventos en fases intermedias)
            let adjustedProbability = event.probability;
            if (currentPhase === 2 || currentPhase === 3) {
                adjustedProbability *= 1.3; // 30% más probable en fases críticas
            }
            
            if (randomValue < adjustedProbability) {
                this.triggerEvent(event);
                this.eventState.eventsTriggered.push(event.id);
            }
        });
    };
    
    /**
     * Disparar un evento específico
     */
    MedCoreEngine.prototype.triggerEvent = function(event) {
        console.log(`🎲 Evento disparado: ${event.title}`);
        
        // Si el evento tiene opciones, mostrar interfaz de decisión
        if (event.options && event.options.length > 0) {
            this.showEventDecisionModal(event);
        } else {
            // Aplicar impacto directo
            this.applyEventImpact(event.impact);
            this.addAlert(event.description, event.type);
            this.updateMetrics();
        }
        
        // Registrar en historial
        this.gameHistory.push({
            action: 'random_event_triggered',
            eventId: event.id,
            phase: this.projectState.currentPhase,
            timestamp: new Date(),
            data: event
        });
    };
    
    /**
     * Mostrar modal de decisión para evento
     */
    MedCoreEngine.prototype.showEventDecisionModal = function(event) {
        // Crear modal dinámico
        const modalHTML = `
            <div id="event-modal" class="modal-overlay" style="display: flex;">
                <div class="modal-container event-modal">
                    <div class="modal-header event-header ${event.type}">
                        <h2>${event.title}</h2>
                        <div class="event-type-badge">${this.getEventTypeName(event.type)}</div>
                    </div>
                    
                    <div class="modal-content">
                        <div class="event-description">
                            <p>${event.description}</p>
                        </div>
                        
                        <div class="event-immediate-impact">
                            <h3>📊 Impacto Inmediato</h3>
                            ${this.renderEventImpact(event.impact)}
                        </div>
                        
                        <div class="event-options">
                            <h3>🤔 ¿Cómo responderás?</h3>
                            <div class="event-options-grid">
                                ${event.options.map(option => `
                                    <div class="event-option" data-option-id="${option.id}">
                                        <div class="option-header">
                                            <h4>${option.title}</h4>
                                        </div>
                                        <div class="option-description">
                                            <p>${option.description}</p>
                                        </div>
                                        <div class="option-impact">
                                            <h5>Consecuencias:</h5>
                                            ${this.renderEventImpact(option.impact)}
                                        </div>
                                        <button class="event-option-btn" onclick="window.gameEngine.selectEventOption('${event.id}', '${option.id}')">
                                            Seleccionar
                                        </button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Añadir al DOM
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        // Agregar alerta
        this.addAlert(`Evento crítico: ${event.title}`, 'crisis');
    };
    
    /**
     * Seleccionar opción de evento
     */
    MedCoreEngine.prototype.selectEventOption = function(eventId, optionId) {
        console.log(`🎯 Opción de evento seleccionada: ${eventId} -> ${optionId}`);
        
        // Encontrar evento y opción
        const event = this.eventPool.find(e => e.id === eventId);
        const option = event?.options.find(o => o.id === optionId);
        
        if (!event || !option) {
            console.error('Evento u opción no encontrada');
            return;
        }
        
        // Aplicar impactos combinados (evento + opción)
        this.applyEventImpact(event.impact);
        this.applyEventImpact(option.impact);
        
        // Cerrar modal
        const modal = document.getElementById('event-modal');
        if (modal) modal.remove();
        
        // Mostrar resultado
        this.showEventResult(event, option);
        
        // Actualizar métricas
        this.updateMetrics();
        
        // Registrar decisión en historial
        this.gameHistory.push({
            action: 'event_option_selected',
            eventId: eventId,
            optionId: optionId,
            phase: this.projectState.currentPhase,
            timestamp: new Date(),
            data: { event, option }
        });
        
        // Guardar progreso
        this.saveProgress();
    };
    
    /**
     * Aplicar impacto de evento
     */
    MedCoreEngine.prototype.applyEventImpact = function(impact) {
        if (!impact) return;
        
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
        if (impact.stakeholder_satisfaction) {
            Object.entries(impact.stakeholder_satisfaction).forEach(([stakeholderId, change]) => {
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
     * Renderizar impacto de evento
     */
    MedCoreEngine.prototype.renderEventImpact = function(impact) {
        if (!impact || Object.keys(impact).length === 0) {
            return '<p class="no-impact">Sin impacto inmediato</p>';
        }
        
        let impactHTML = '<div class="impact-summary">';
        
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
        
        impactHTML += '</div>';
        return impactHTML;
    };
    
    /**
     * Mostrar resultado de evento
     */
    MedCoreEngine.prototype.showEventResult = function(event, option) {
        const resultHTML = `
            <div class="event-result-notification">
                <div class="result-header">
                    <h3>✅ Evento Resuelto</h3>
                    <button class="close-notification" onclick="this.parentElement.parentElement.remove()">✕</button>
                </div>
                <div class="result-content">
                    <p><strong>${event.title}</strong></p>
                    <p>Opción seleccionada: ${option.title}</p>
                    <p class="result-description">${option.description}</p>
                </div>
            </div>
        `;
        
        // Mostrar notificación temporal
        const notification = document.createElement('div');
        notification.innerHTML = resultHTML;
        notification.className = 'floating-notification';
        document.body.appendChild(notification);
        
        // Auto-remover después de 8 segundos
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 8000);
        
        // Agregar alerta al sistema
        this.addAlert(`Evento resuelto: ${option.title}`, 'success');
    };
    
    /**
     * Obtener nombre amigable del tipo de evento
     */
    MedCoreEngine.prototype.getEventTypeName = function(type) {
        const names = {
            'crisis': '🚨 Crisis',
            'opportunity': '🌟 Oportunidad', 
            'requirement': '📋 Requisito',
            'resource': '👥 Recursos',
            'stakeholder': '👔 Stakeholder'
        };
        return names[type] || type;
    };
    
    /**
     * Limpiar sistema de eventos (cuando termina el juego)
     */
    MedCoreEngine.prototype.cleanup = function() {
        if (this.eventIntervalId) {
            clearInterval(this.eventIntervalId);
            console.log('🧹 Sistema de eventos limpiado');
        }
    };
    
    console.log('🎲 MedCore Events cargado correctamente');
}

if (typeof MedCoreEngine === 'undefined') {
    console.warn('⚠️ MedCore Engine no está cargado. Los eventos dinámicos no estarán disponibles.');
}