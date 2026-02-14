// === LABORATORIO ISO - JUEGO REAL DE DECISIONES TÉCNICAS ===

class ISOGameEngine {
    constructor() {
        this.gameState = {
            currentProject: null,
            metrics: {
                // ISO 25010 - Características de Calidad
                funcionalidad: 0,      // Functional Suitability
                eficiencia: 0,         // Performance Efficiency  
                compatibilidad: 0,     // Compatibility
                usabilidad: 0,         // Usability
                confiabilidad: 0,      // Reliability
                seguridad: 0,          // Security
                mantenibilidad: 0,     // Maintainability
                portabilidad: 0        // Portability
            },
            recursos: {
                presupuesto: 100000,
                tiempo: 12,            // meses
                equipoDesarrolladores: 5,
                equipoTesting: 2,
                equipoTesting: 2,
                experienciaEquipo: 'intermedio'
            },
            attemptId: null, // Persistence ID
            decisiones: [],
            fase: 'planificacion',     // planificacion, desarrollo, testing, despliegue
            puntuacion: 0,
            penalizaciones: []
        };

        this.proyectos = {
            ecommerce: {
                nombre: "Plataforma E-commerce",
                descripcion: "Sistema de comercio electrónico que debe manejar 10,000 usuarios concurrentes",
                objetivosMinimos: {
                    funcionalidad: 85,
                    eficiencia: 80,
                    usabilidad: 90,
                    seguridad: 95,
                    confiabilidad: 85
                },
                restricciones: {
                    presupuestoMaximo: 150000,
                    tiempoMaximo: 18,
                    cumplimientoPCI: true,
                    disponibilidad: 99.9
                },
                riesgos: ['picos_trafico', 'ataques_seguridad', 'integracion_pagos', 'experiencia_usuario']
            },
            hospital: {
                nombre: "Sistema de Gestión Hospitalaria",
                descripcion: "Software médico crítico para gestión de pacientes y historiales clínicos",
                objetivosMinimos: {
                    funcionalidad: 95,
                    confiabilidad: 98,
                    seguridad: 99,
                    usabilidad: 85,
                    mantenibilidad: 90
                },
                restricciones: {
                    presupuestoMaximo: 200000,
                    tiempoMaximo: 24,
                    certificacionFDA: true,
                    disponibilidad: 99.99,
                    cumplimientoHIPAA: true
                },
                riesgos: ['fallos_criticos', 'perdida_datos', 'acceso_no_autorizado', 'interoperabilidad']
            }
        };

        this.decisiones = {
            arquitectura: {
                monolitica: {
                    impacto: { mantenibilidad: -20, eficiencia: +10, funcionalidad: +5 },
                    costo: 0,
                    tiempo: 0,
                    descripcion: "Arquitectura monolítica tradicional - más simple pero menos escalable"
                },
                microservicios: {
                    impacto: { mantenibilidad: +15, eficiencia: -5, compatibilidad: +20, funcionalidad: +10 },
                    costo: 15000,
                    tiempo: 3,
                    descripcion: "Microservicios - mayor complejidad pero mejor escalabilidad y mantenimiento"
                },
                serverless: {
                    impacto: { eficiencia: +25, portabilidad: +15, mantenibilidad: +10, funcionalidad: +5 },
                    costo: -5000,
                    tiempo: 1,
                    descripcion: "Arquitectura serverless - alta eficiencia pero vendor lock-in"
                }
            },
            baseDatos: {
                sql_tradicional: {
                    impacto: { confiabilidad: +20, funcionalidad: +10, compatibilidad: +15 },
                    costo: 5000,
                    tiempo: 1,
                    descripcion: "Base de datos SQL tradicional - ACID completo, bien conocida"
                },
                nosql_escalable: {
                    impacto: { eficiencia: +25, portabilidad: +10, funcionalidad: +5 },
                    costo: 8000,
                    tiempo: 2,
                    descripcion: "NoSQL para alta escalabilidad - eventual consistency"
                },
                hibrida: {
                    impacto: { funcionalidad: +20, eficiencia: +10, mantenibilidad: -10 },
                    costo: 12000,
                    tiempo: 3,
                    descripcion: "Enfoque híbrido SQL+NoSQL - máxima flexibilidad, mayor complejidad"
                }
            },
            testing: {
                manual_basico: {
                    impacto: { confiabilidad: +5, funcionalidad: +5 },
                    costo: 2000,
                    tiempo: 1,
                    descripcion: "Testing manual básico - económico pero limitado"
                },
                automatizado_completo: {
                    impacto: { confiabilidad: +30, funcionalidad: +20, mantenibilidad: +15 },
                    costo: 25000,
                    tiempo: 4,
                    descripcion: "Suite completa de testing automatizado - máxima calidad"
                },
                automatizado_critico: {
                    impacto: { confiabilidad: +20, funcionalidad: +15, seguridad: +10 },
                    costo: 15000,
                    tiempo: 2,
                    descripcion: "Testing automatizado en funciones críticas - balance costo-beneficio"
                }
            },
            seguridad: {
                basica: {
                    impacto: { seguridad: +10 },
                    costo: 3000,
                    tiempo: 1,
                    descripcion: "Medidas básicas de seguridad - mínimo aceptable"
                },
                avanzada: {
                    impacto: { seguridad: +30, confiabilidad: +10, funcionalidad: -5 },
                    costo: 20000,
                    tiempo: 3,
                    descripcion: "Seguridad avanzada con múltiples capas - muy robusta"
                },
                extrema: {
                    impacto: { seguridad: +50, confiabilidad: +20, usabilidad: -15, eficiencia: -10 },
                    costo: 35000,
                    tiempo: 5,
                    descripcion: "Seguridad de nivel militar - máxima protección, impacto en UX"
                }
            },
            ui_ux: {
                funcional_basico: {
                    impacto: { usabilidad: +10, funcionalidad: +5 },
                    costo: 5000,
                    tiempo: 2,
                    descripcion: "Interfaz funcional básica - cumple requisitos mínimos"
                },
                diseño_profesional: {
                    impacto: { usabilidad: +25, funcionalidad: +10, eficiencia: +5 },
                    costo: 15000,
                    tiempo: 4,
                    descripcion: "Diseño UX profesional - experiencia optimizada"
                },
                innovador_accesible: {
                    impacto: { usabilidad: +40, funcionalidad: +15, compatibilidad: +20 },
                    costo: 25000,
                    tiempo: 6,
                    descripcion: "Diseño innovador con accesibilidad completa - inclusivo y moderno"
                }
            }
        };

        this.eventosAleatorios = [
            {
                nombre: "Cambio de Requisitos",
                probabilidad: 0.3,
                impacto: { funcionalidad: -10, tiempo: +2, costo: +5000 },
                descripcion: "El cliente cambia requisitos importantes a mitad del proyecto"
            },
            {
                nombre: "Vulnerabilidad de Seguridad Descubierta",
                probabilidad: 0.2,
                impacto: { seguridad: -15, tiempo: +1, costo: +3000 },
                descripcion: "Se descubre una vulnerabilidad crítica que debe solucionarse"
            },
            {
                nombre: "Desarrollador Senior se Va",
                probabilidad: 0.15,
                impacto: { mantenibilidad: -10, tiempo: +3, costo: +8000 },
                descripcion: "Un desarrollador clave abandona el proyecto"
            },
            {
                nombre: "Nueva Regulación",
                probabilidad: 0.25,
                impacto: { funcionalidad: -5, seguridad: +10, tiempo: +2, costo: +6000 },
                descripcion: "Nueva regulación requiere cambios en el sistema"
            }
        ];
    }

    async iniciarProyecto(tipoProyecto) {
        this.gameState.currentProject = this.proyectos[tipoProyecto];
        this.gameState.fase = 'planificacion';

        // Resetear estado completo
        this.resetearMetricas();
        this.gameState.decisiones = [];
        this.gameState.recursos = {
            presupuesto: 100000,
            tiempo: 12,
            equipoDesarrolladores: 5,
            equipoTesting: 2,
            experienciaEquipo: 'intermedio'
        };
        this.gameState.puntuacion = 0;

        // Persistence: Create Attempt
        if (window.persistenceAPI) {
            const scenarioId = tipoProyecto;
            const scenarioTitle = this.gameState.currentProject.nombre;
            this.gameState.attemptId = await window.persistenceAPI.createAttempt(scenarioId, scenarioTitle);
        }

        this.renderizarInterfazJuego();
    }

    resetearMetricas() {
        Object.keys(this.gameState.metrics).forEach(key => {
            this.gameState.metrics[key] = 0;
        });
    }

    tomarDecision(categoria, opcion) {
        const decision = this.decisiones[categoria][opcion];

        // Verificar si ya hay una decisión para esta categoría
        const indiceExistente = this.gameState.decisiones.findIndex(d => d.categoria === categoria);
        if (indiceExistente !== -1) {
            const decisionAnterior = this.gameState.decisiones[indiceExistente];
            // Revertir impactos de la decisión anterior
            Object.keys(decisionAnterior.decision.impacto).forEach(metrica => {
                if (metrica === 'tiempo' || metrica === 'costo') {
                    this.gameState.recursos[metrica === 'tiempo' ? 'tiempo' : 'presupuesto'] -= decisionAnterior.decision.impacto[metrica];
                } else {
                    this.gameState.metrics[metrica] -= decisionAnterior.decision.impacto[metrica];
                }
            });
            // Eliminar decisión anterior
            this.gameState.decisiones.splice(indiceExistente, 1);
        }

        // Aplicar impactos a las métricas
        Object.keys(decision.impacto).forEach(metrica => {
            if (metrica === 'tiempo' || metrica === 'costo') {
                this.gameState.recursos[metrica === 'tiempo' ? 'tiempo' : 'presupuesto'] += decision.impacto[metrica];
            } else {
                this.gameState.metrics[metrica] += decision.impacto[metrica];
                // Asegurar que las métricas estén entre 0 y 100
                this.gameState.metrics[metrica] = Math.max(0, Math.min(100, this.gameState.metrics[metrica]));
            }
        });

        // Registrar la decisión
        this.gameState.decisiones.push({
            fase: this.gameState.fase,
            categoria: categoria,
            opcion: opcion,
            decision: decision
        });

        // Calcular puntuación basada en efectividad de la decisión
        this.calcularPuntuacion();

        // Posible evento aleatorio (solo si es nueva decisión para evitar spam al cambiar)
        if (indiceExistente === -1) {
            this.procesarEventoAleatorio();
        }

        // Actualizar interfaz
        this.actualizarInterfaz();
    }

    calcularPuntuacion() {
        const proyecto = this.gameState.currentProject;
        let puntosTotales = 0;

        Object.keys(proyecto.objetivosMinimos).forEach(metrica => {
            const objetivo = proyecto.objetivosMinimos[metrica];
            const actual = this.gameState.metrics[metrica];

            if (actual >= objetivo) {
                puntosTotales += (actual - objetivo) * 2 + objetivo;
            } else {
                puntosTotales += actual * 0.5; // Penalización por no cumplir objetivo
            }
        });

        // Bonificación por eficiencia en recursos
        if (this.gameState.recursos.presupuesto > 0) {
            puntosTotales += this.gameState.recursos.presupuesto * 0.01;
        }

        if (this.gameState.recursos.tiempo > 0) {
            puntosTotales += this.gameState.recursos.tiempo * 10;
        }

        this.gameState.puntuacion = Math.round(puntosTotales);
    }

    procesarEventoAleatorio() {
        const evento = this.eventosAleatorios.find(e => Math.random() < e.probabilidad);
        if (evento) {
            // Aplicar impacto del evento
            Object.keys(evento.impacto).forEach(key => {
                if (key === 'tiempo' || key === 'costo') {
                    const recurso = key === 'tiempo' ? 'tiempo' : 'presupuesto';
                    this.gameState.recursos[recurso] += evento.impacto[key];
                } else {
                    this.gameState.metrics[key] += evento.impacto[key];
                    this.gameState.metrics[key] = Math.max(0, Math.min(100, this.gameState.metrics[key]));
                }
            });

            this.mostrarEventoAleatorio(evento);
        }
    }

    renderizarInterfazJuego() {
        const gameInterface = document.getElementById('game-interface');
        if (!gameInterface) return;

        gameInterface.innerHTML = `
            <div class="project-header">
                <h1>🎯 ${this.gameState.currentProject.nombre}</h1>
                <p>${this.gameState.currentProject.descripcion}</p>
                <div class="project-phase">Fase: <span class="phase-name">${this.gameState.fase}</span></div>
            </div>

            <div class="game-dashboard">
                <div class="metrics-panel">
                    <h2>📊 Métricas ISO 25010</h2>
                    <div class="metrics-grid">
                        ${this.renderizarMetricas()}
                    </div>
                </div>

                <div class="resources-panel">
                    <h2>💰 Recursos Disponibles</h2>
                    <div class="resources-grid">
                        <div class="resource-item ${this.gameState.recursos.presupuesto < 0 ? 'negative' : ''}">
                            <span class="resource-icon">💵</span>
                            <span class="resource-label">Presupuesto</span>
                            <span class="resource-value">$${this.gameState.recursos.presupuesto.toLocaleString()}</span>
                        </div>
                        <div class="resource-item ${this.gameState.recursos.tiempo < 0 ? 'negative' : ''}">
                            <span class="resource-icon">⏱️</span>
                            <span class="resource-label">Tiempo</span>
                            <span class="resource-value">${this.gameState.recursos.tiempo} meses</span>
                        </div>
                        <div class="resource-item">
                            <span class="resource-icon">🎯</span>
                            <span class="resource-label">Puntuación</span>
                            <span class="resource-value">${this.gameState.puntuacion}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="decisions-panel">
                <h2>🤔 Decisiones Técnicas</h2>
                <div class="decisions-grid">
                    ${this.renderizarDecisiones()}
                </div>
            </div>

            <div class="objectives-panel">
                <h2>🎯 Objetivos del Proyecto</h2>
                <div class="objectives-grid">
                    ${this.renderizarObjetivos()}
                </div>
            </div>
        `;
    }

    renderizarMetricas() {
        return Object.keys(this.gameState.metrics).map(metrica => {
            const valor = this.gameState.metrics[metrica];
            const objetivo = this.gameState.currentProject.objetivosMinimos[metrica] || 50;
            const cumple = valor >= objetivo;

            return `
                <div class="metric-card ${cumple ? 'success' : 'pending'}">
                    <div class="metric-name">${this.getNombreMetrica(metrica)}</div>
                    <div class="metric-bar">
                        <div class="metric-fill" style="width: ${valor}%"></div>
                        <div class="metric-target" style="left: ${objetivo}%"></div>
                    </div>
                    <div class="metric-value">${valor}/100 (min: ${objetivo})</div>
                </div>
            `;
        }).join('');
    }

    renderizarDecisiones() {
        return Object.keys(this.decisiones).map(categoria => `
            <div class="decision-category">
                <h3>${this.getNombreCategoria(categoria)}</h3>
                <div class="decision-options">
                    ${Object.keys(this.decisiones[categoria]).map(opcion => {
            const decision = this.decisiones[categoria][opcion];
            const yaElegida = this.gameState.decisiones.find(d => d.categoria === categoria);

            return `
                            <div class="decision-option ${yaElegida?.opcion === opcion ? 'selected' : ''}" 
                                 onclick="isoGame.tomarDecision('${categoria}', '${opcion}')"
                                 ${yaElegida ? 'style="pointer-events: none; opacity: 0.6;"' : ''}>
                                <div class="option-header">
                                    <h4>${this.getNombreOpcion(opcion)}</h4>
                                    <div class="option-cost">
                                        💰 ${decision.costo >= 0 ? '+' : ''}$${decision.costo.toLocaleString()} | 
                                        ⏱️ ${decision.tiempo >= 0 ? '+' : ''}${decision.tiempo}m
                                    </div>
                                </div>
                                <p class="option-description">${decision.descripcion}</p>
                                <div class="option-impact">
                                    <strong>Impacto:</strong>
                                    ${Object.keys(decision.impacto).map(metrica =>
                `<span class="impact-item ${decision.impacto[metrica] >= 0 ? 'positive' : 'negative'}">
                                            ${this.getNombreMetrica(metrica)}: ${decision.impacto[metrica] >= 0 ? '+' : ''}${decision.impacto[metrica]}
                                        </span>`
            ).join(' ')}
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `).join('');
    }

    renderizarObjetivos() {
        return Object.keys(this.gameState.currentProject.objetivosMinimos).map(metrica => {
            const objetivo = this.gameState.currentProject.objetivosMinimos[metrica];
            const actual = this.gameState.metrics[metrica];
            const progreso = Math.min(100, (actual / objetivo) * 100);
            const cumplido = actual >= objetivo;

            return `
                <div class="objective-card ${cumplido ? 'completed' : 'pending'}">
                    <div class="objective-name">${this.getNombreMetrica(metrica)}</div>
                    <div class="objective-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progreso}%"></div>
                        </div>
                        <span class="progress-text">${actual}/${objetivo} ${cumplido ? '✅' : '⏳'}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    getNombreMetrica(metrica) {
        const nombres = {
            funcionalidad: 'Funcionalidad',
            eficiencia: 'Eficiencia',
            compatibilidad: 'Compatibilidad',
            usabilidad: 'Usabilidad',
            confiabilidad: 'Confiabilidad',
            seguridad: 'Seguridad',
            mantenibilidad: 'Mantenibilidad',
            portabilidad: 'Portabilidad',
            tiempo: 'Tiempo',
            costo: 'Costo'
        };
        return nombres[metrica] || metrica;
    }

    getNombreCategoria(categoria) {
        const nombres = {
            arquitectura: '🏗️ Arquitectura del Sistema',
            baseDatos: '🗄️ Estrategia de Base de Datos',
            testing: '🧪 Estrategia de Testing',
            seguridad: '🔒 Nivel de Seguridad',
            ui_ux: '🎨 Diseño UI/UX'
        };
        return nombres[categoria] || categoria;
    }

    getNombreOpcion(opcion) {
        const nombres = {
            monolitica: 'Monolítica',
            microservicios: 'Microservicios',
            serverless: 'Serverless',
            sql_tradicional: 'SQL Tradicional',
            nosql_escalable: 'NoSQL Escalable',
            hibrida: 'Híbrida SQL+NoSQL',
            manual_basico: 'Manual Básico',
            automatizado_completo: 'Automatizado Completo',
            automatizado_critico: 'Automatizado Crítico',
            basica: 'Básica',
            avanzada: 'Avanzada',
            extrema: 'Extrema',
            funcional_basico: 'Funcional Básico',
            diseño_profesional: 'Profesional',
            innovador_accesible: 'Innovador + Accesible'
        };
        return nombres[opcion] || opcion;
    }

    mostrarEventoAleatorio(evento) {
        const notification = document.createElement('div');
        notification.className = 'event-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h3>⚠️ ${evento.nombre}</h3>
                <p>${evento.descripcion}</p>
                <div class="event-impacts">
                    <strong>Impacto:</strong>
                    ${Object.keys(evento.impacto).map(key =>
            `<span>${this.getNombreMetrica(key)}: ${evento.impacto[key] >= 0 ? '+' : ''}${evento.impacto[key]}</span>`
        ).join(', ')}
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Entendido</button>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 10000);
    }

    actualizarInterfaz() {
        // Actualizar métricas en tiempo real
        const metricsGrid = document.querySelector('.metrics-grid');
        if (metricsGrid) {
            metricsGrid.innerHTML = this.renderizarMetricas();
        }

        // Actualizar recursos
        const resourcesGrid = document.querySelector('.resources-grid');
        if (resourcesGrid) {
            resourcesGrid.innerHTML = `
                <div class="resource-item ${this.gameState.recursos.presupuesto < 0 ? 'negative' : ''}">
                    <span class="resource-icon">💵</span>
                    <span class="resource-label">Presupuesto</span>
                    <span class="resource-value">$${this.gameState.recursos.presupuesto.toLocaleString()}</span>
                </div>
                <div class="resource-item ${this.gameState.recursos.tiempo < 0 ? 'negative' : ''}">
                    <span class="resource-icon">⏱️</span>
                    <span class="resource-label">Tiempo</span>
                    <span class="resource-value">${this.gameState.recursos.tiempo} meses</span>
                </div>
                <div class="resource-item">
                    <span class="resource-icon">🎯</span>
                    <span class="resource-label">Puntuación</span>
                    <span class="resource-value">${this.gameState.puntuacion}</span>
                </div>
            `;
        }

        // Actualizar decisiones (para reflejar selección)
        const decisionsGrid = document.querySelector('.decisions-grid');
        if (decisionsGrid) {
            decisionsGrid.innerHTML = this.renderizarDecisiones();
        }

        // Actualizar objetivos
        const objectivesGrid = document.querySelector('.objectives-grid');
        if (objectivesGrid) {
            objectivesGrid.innerHTML = this.renderizarObjetivos();
        }

        // Verificar si el proyecto está completo
        this.verificarCompletacion();
    }

    verificarCompletacion() {
        const todasLasDecisiones = Object.keys(this.decisiones).every(categoria =>
            this.gameState.decisiones.find(d => d.categoria === categoria)
        );

        if (todasLasDecisiones) {
            this.mostrarResultadoFinal();
        }
    }

    async mostrarResultadoFinal() {
        const proyecto = this.gameState.currentProject;
        const objetivosCumplidos = Object.keys(proyecto.objetivosMinimos).filter(metrica =>
            this.gameState.metrics[metrica] >= proyecto.objetivosMinimos[metrica]
        );

        const porcentajeExito = (objetivosCumplidos.length / Object.keys(proyecto.objetivosMinimos).length) * 100;

        // Persistence: Complete Attempt
        if (this.gameState.attemptId && window.persistenceAPI) {
            await window.persistenceAPI.completeAttempt(this.gameState.attemptId, {
                score: this.gameState.puntuacion,
                correctCount: objetivosCumplidos.length,
                incorrectCount: Object.keys(proyecto.objetivosMinimos).length - objetivosCumplidos.length,
                maxScore: 1000,
                metadata: {
                    project: proyecto.nombre,
                    level: porcentajeExito >= 90 ? 'EXPERT' : porcentajeExito >= 70 ? 'ADVANCED' : 'NOVICE',
                    metrics: this.gameState.metrics,
                    resources: this.gameState.recursos,
                    decisions: this.gameState.decisiones.map(d => ({ cat: d.categoria, opt: d.opcion }))
                }
            });
        }

        let evaluacion = '';
        if (porcentajeExito >= 90) {
            evaluacion = '🏆 ¡ÉXITO EXCEPCIONAL! Has dominado los estándares ISO.';
        } else if (porcentajeExito >= 70) {
            evaluacion = '✅ ¡ÉXITO! El proyecto cumple los objetivos principales.';
        } else if (porcentajeExito >= 50) {
            evaluacion = '⚠️ ÉXITO PARCIAL. El proyecto funciona pero necesita mejoras.';
        } else {
            evaluacion = '❌ PROYECTO FALLIDO. No se cumplen los objetivos mínimos.';
        }

        const modal = document.createElement('div');
        modal.className = 'game-completion-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h1>🎯 Proyecto Completado</h1>
                <h2>${evaluacion}</h2>
                
                <div class="final-metrics">
                    <h3>📊 Resultados Finales</h3>
                    ${Object.keys(proyecto.objetivosMinimos).map(metrica => {
            const objetivo = proyecto.objetivosMinimos[metrica];
            const actual = this.gameState.metrics[metrica];
            const cumple = actual >= objetivo;

            return `
                            <div class="final-metric ${cumple ? 'success' : 'fail'}">
                                <span class="metric-name">${this.getNombreMetrica(metrica)}</span>
                                <span class="metric-result">${actual}/100 (objetivo: ${objetivo}) ${cumple ? '✅' : '❌'}</span>
                            </div>
                        `;
        }).join('')}
                </div>
                
                <div class="final-score">
                    <h3>🎯 Puntuación Final: ${this.gameState.puntuacion}</h3>
                    <p>Recursos restantes: $${this.gameState.recursos.presupuesto.toLocaleString()}, ${this.gameState.recursos.tiempo} meses</p>
                </div>
                
                <div class="decision-summary">
                    <h3>📋 Decisiones Tomadas</h3>
                    ${this.gameState.decisiones.map(d => `
                        <div class="decision-summary-item">
                            <strong>${this.getNombreCategoria(d.categoria)}:</strong> 
                            ${this.getNombreOpcion(d.opcion)}
                        </div>
                    `).join('')}
                </div>
                
                <div class="modal-actions">
                    <button onclick="document.querySelector('.game-completion-modal').remove(); isoGame.volverAlMenu()">🏠 Nuevo Proyecto</button>
                    <button onclick="document.querySelector('.game-completion-modal').remove(); isoGame.reiniciarProyecto()">🔄 Repetir Proyecto</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    volverAlMenu() {
        const gameInterface = document.getElementById('game-interface');
        if (gameInterface) {
            gameInterface.innerHTML = this.crearMenuProyectos();
        }
    }

    reiniciarProyecto() {
        const tipoActual = Object.keys(this.proyectos).find(tipo =>
            this.proyectos[tipo] === this.gameState.currentProject
        );
        this.iniciarProyecto(tipoActual);
    }

    crearMenuProyectos() {
        return `
            <div class="project-selection">
                <h1>🎯 Laboratorio ISO - Simulador de Proyectos</h1>
                <p>Selecciona un proyecto y toma decisiones técnicas que impacten métricas ISO 25010 reales</p>
                
                <div class="projects-grid">
                    ${Object.keys(this.proyectos).map(tipo => {
            const proyecto = this.proyectos[tipo];
            return `
                            <div class="project-card" onclick="isoGame.iniciarProyecto('${tipo}')">
                                <h3>${proyecto.nombre}</h3>
                                <p>${proyecto.descripcion}</p>
                                
                                <div class="project-objectives">
                                    <h4>Objetivos Principales:</h4>
                                    ${Object.keys(proyecto.objetivosMinimos).map(metrica =>
                `<span class="objective-tag">${this.getNombreMetrica(metrica)}: ${proyecto.objetivosMinimos[metrica]}%</span>`
            ).join('')}
                                </div>
                                
                                <div class="project-constraints">
                                    <div class="constraint">💰 Max: $${proyecto.restricciones.presupuestoMaximo.toLocaleString()}</div>
                                    <div class="constraint">⏱️ Max: ${proyecto.restricciones.tiempoMaximo} meses</div>
                                </div>
                                
                                <button class="start-project-btn">Iniciar Proyecto</button>
                            </div>
                        `;
        }).join('')}
                </div>
                
                <div class="game-explanation">
                    <h2>🎮 Cómo Jugar</h2>
                    <ol>
                        <li><strong>Elige un proyecto</strong> - Cada uno tiene objetivos ISO específicos</li>
                        <li><strong>Toma decisiones técnicas</strong> - Arquitectura, BD, Testing, Seguridad, UI/UX</li>
                        <li><strong>Gestiona recursos</strong> - Presupuesto y tiempo limitados</li>
                        <li><strong>Enfrenta eventos aleatorios</strong> - Como en proyectos reales</li>
                        <li><strong>Cumple objetivos ISO</strong> - Métricas de calidad del software</li>
                    </ol>
                    
                    <div class="iso-standards-info">
                        <h3>📚 Estándares ISO Aplicados</h3>
                        <div class="standards-grid">
                            <div class="standard-info">
                                <strong>ISO 25010</strong>
                                <p>Modelo de calidad del producto software con 8 características medibles</p>
                            </div>
                            <div class="standard-info">
                                <strong>ISO 29148</strong>
                                <p>Procesos de ingeniería de requisitos</p>
                            </div>
                            <div class="standard-info">
                                <strong>ISO 9241</strong>
                                <p>Ergonomía e interacción humano-sistema</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Instancia global del juego
window.isoGame = new ISOGameEngine();