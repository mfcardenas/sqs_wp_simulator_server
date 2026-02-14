/**
 * MEDCORE STANDARDS - GESTIÓN DE ESTÁNDARES ISO
 * Información detallada y aplicación de estándares ISO en el proyecto
 */

if (typeof MedCoreEngine !== 'undefined') {
    
    /**
     * Inicializar base de conocimientos de estándares ISO
     */
    MedCoreEngine.prototype.initializeStandardsKnowledge = function() {
        this.isoStandards = {
            'ISO 29148': {
                name: 'Ingeniería de Requisitos',
                fullName: 'ISO/IEC/IEEE 29148:2018 - Ingeniería de sistemas y software - Procesos del ciclo de vida - Ingeniería de requisitos',
                category: 'Requirements Engineering',
                applicablePhases: [1, 2],
                description: 'Define procesos para el manejo de requisitos a lo largo del ciclo de vida del desarrollo de sistemas y software.',
                keyPrinciples: [
                    'Identificación clara de requisitos',
                    'Análisis y especificación detallada',
                    'Validación con stakeholders',
                    'Gestión de cambios de requisitos',
                    'Trazabilidad durante el desarrollo'
                ],
                hospitalApplication: 'En el contexto hospitalario, este estándar asegura que todos los requisitos médicos, administrativos y técnicos sean capturados, analizados y gestionados correctamente.',
                benefits: [
                    'Reduce ambigüedad en requisitos médicos críticos',
                    'Mejora comunicación entre personal médico y técnico',
                    'Asegura cumplimiento de regulaciones sanitarias',
                    'Facilita validación del sistema con usuarios finales'
                ]
            },
            
            'ISO 25010': {
                name: 'Características de Calidad',
                fullName: 'ISO/IEC 25010:2011 - Ingeniería de sistemas y software - Requisitos y evaluación de calidad de sistemas y software (SQuaRE) - Modelo de calidad del sistema y software',
                category: 'Quality Model',
                applicablePhases: [1, 2, 3, 4, 5],
                description: 'Define un modelo de calidad que especifica ocho características de calidad para sistemas y software.',
                keyPrinciples: [
                    'Adecuación funcional',
                    'Eficiencia de rendimiento',
                    'Compatibilidad',
                    'Usabilidad',
                    'Fiabilidad',
                    'Seguridad',
                    'Mantenibilidad',
                    'Portabilidad'
                ],
                hospitalApplication: 'Fundamental para garantizar que el sistema hospitalario sea confiable, seguro, usable y mantenible en un entorno crítico 24/7.',
                benefits: [
                    'Sistema confiable para operaciones críticas',
                    'Interfaces intuitivas para personal médico',
                    'Seguridad robusta para datos de pacientes',
                    'Fácil mantenimiento y actualizaciones'
                ]
            },
            
            'ISO 12207': {
                name: 'Procesos del Ciclo de Vida del Software',
                fullName: 'ISO/IEC 12207:2017 - Ingeniería de sistemas y software - Procesos del ciclo de vida del software',
                category: 'Software Lifecycle',
                applicablePhases: [2, 3, 4, 5],
                description: 'Establece un marco común para los procesos del ciclo de vida del software.',
                keyPrinciples: [
                    'Procesos de acuerdo',
                    'Procesos organizacionales del proyecto',
                    'Procesos técnicos',
                    'Procesos de implementación del software'
                ],
                hospitalApplication: 'Estructura el desarrollo del sistema MedCore siguiendo procesos probados para proyectos de software críticos.',
                benefits: [
                    'Desarrollo estructurado y predecible',
                    'Mejor gestión de riesgos del proyecto',
                    'Calidad consistente en entregas',
                    'Facilita auditorías y certificaciones'
                ]
            },
            
            'ISO 15288': {
                name: 'Procesos del Ciclo de Vida del Sistema',
                fullName: 'ISO/IEC/IEEE 15288:2015 - Ingeniería de sistemas y software - Procesos del ciclo de vida del sistema',
                category: 'Systems Engineering',
                applicablePhases: [1, 2, 3],
                description: 'Establece un marco común para describir el ciclo de vida de sistemas creados por humanos.',
                keyPrinciples: [
                    'Enfoque sistémico',
                    'Gestión de interfaces',
                    'Verificación y validación',
                    'Gestión de configuración'
                ],
                hospitalApplication: 'Asegura que el sistema MedCore se integre efectivamente con todos los sistemas hospitalarios existentes.',
                benefits: [
                    'Integración seamless con sistemas existentes',
                    'Arquitectura de sistema robusta',
                    'Gestión efectiva de dependencias',
                    'Minimiza disrupciones operacionales'
                ]
            },
            
            'ISO 9241': {
                name: 'Ergonomía de la Interacción Humano-Sistema',
                fullName: 'ISO 9241 - Ergonomía de la interacción humano-sistema',
                category: 'Human-Computer Interaction',
                applicablePhases: [3, 4, 5],
                description: 'Proporciona principios y directrices para el diseño de interfaces de usuario ergonómicas.',
                keyPrinciples: [
                    'Adecuación a la tarea',
                    'Auto-descriptividad',
                    'Conformidad con expectativas del usuario',
                    'Adecuación para el aprendizaje',
                    'Controlabilidad',
                    'Tolerancia a errores',
                    'Adecuación para individualización'
                ],
                hospitalApplication: 'Crítico para diseñar interfaces que el personal médico pueda usar eficientemente bajo presión en situaciones de emergencia.',
                benefits: [
                    'Reducción de errores médicos por UX deficiente',
                    'Mayor productividad del personal médico',
                    'Menor curva de aprendizaje',
                    'Satisfacción del usuario mejorada'
                ]
            },
            
            'ISO 90003': {
                name: 'Ingeniería de Software - Directrices para ISO 9001',
                fullName: 'ISO/IEC 90003:2014 - Ingeniería de software y sistemas - Directrices para la aplicación de ISO 9001:2008 a software de computador',
                category: 'Quality Management',
                applicablePhases: [2, 3, 4, 5],
                description: 'Proporciona directrices para organizaciones en la aplicación de ISO 9001 al desarrollo y mantenimiento de software.',
                keyPrinciples: [
                    'Gestión de la calidad',
                    'Mejora continua',
                    'Satisfacción del cliente',
                    'Enfoque basado en procesos'
                ],
                hospitalApplication: 'Establece procesos de calidad que aseguran que el sistema MedCore cumpla con estándares médicos y regulatorios.',
                benefits: [
                    'Cumplimiento de estándares de calidad médica',
                    'Procesos repetibles y auditables',
                    'Mejora continua del sistema',
                    'Satisfacción garantizada de usuarios médicos'
                ]
            },
            
            'ISO 25000': {
                name: 'SQuaRE - Requisitos y Evaluación de Calidad',
                fullName: 'ISO/IEC 25000 - Ingeniería de sistemas y software - Requisitos y evaluación de calidad de sistemas y software (SQuaRE)',
                category: 'Quality Requirements and Evaluation',
                applicablePhases: [3, 4, 5],
                description: 'Familia de estándares que proporciona directrices para especificar y evaluar la calidad del software.',
                keyPrinciples: [
                    'Modelo de calidad',
                    'Medición de la calidad',
                    'Requisitos de calidad',
                    'Evaluación de la calidad'
                ],
                hospitalApplication: 'Framework para medir y evaluar continuamente la calidad del sistema MedCore según métricas objetivas.',
                benefits: [
                    'Medición objetiva de calidad del sistema',
                    'Identificación temprana de problemas',
                    'Benchmarking contra estándares industriales',
                    'Mejora continua basada en métricas'
                ]
            },
            
            'ISO 25040': {
                name: 'Proceso de Evaluación',
                fullName: 'ISO/IEC 25040:2011 - Ingeniería de sistemas y software - Requisitos y evaluación de calidad de sistemas y software (SQuaRE) - Proceso de evaluación',
                category: 'Evaluation Process',
                applicablePhases: [4, 5],
                description: 'Define un proceso general para la evaluación de productos de software.',
                keyPrinciples: [
                    'Planificación de la evaluación',
                    'Especificación de requisitos de evaluación',
                    'Diseño de la evaluación',
                    'Ejecución de la evaluación',
                    'Conclusión de la evaluación'
                ],
                hospitalApplication: 'Proceso estructurado para evaluar si el sistema MedCore cumple con todos los requisitos hospitalarios antes del despliegue.',
                benefits: [
                    'Evaluación sistemática antes del go-live',
                    'Validación objetiva de requisitos',
                    'Reducción de riesgos en producción',
                    'Evidencia documentada de calidad'
                ]
            }
        };
        
        console.log('📋 Base de conocimientos de estándares ISO inicializada');
    };
    
    /**
     * Obtener información detallada de un estándar
     */
    MedCoreEngine.prototype.getStandardDetails = function(standardId) {
        return this.isoStandards[standardId] || null;
    };
    
    /**
     * Obtener estándares aplicables a una fase específica
     */
    MedCoreEngine.prototype.getStandardsForPhase = function(phaseNumber) {
        const applicableStandards = {};
        Object.entries(this.isoStandards).forEach(([id, standard]) => {
            if (standard.applicablePhases.includes(phaseNumber)) {
                applicableStandards[id] = standard;
            }
        });
        return applicableStandards;
    };
    
    /**
     * Mostrar guía de estándares ISO
     */
    MedCoreEngine.prototype.showStandardsGuide = function() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        const currentPhaseStandards = this.getStandardsForPhase(this.projectState.currentPhase);
        
        const guideHTML = `
            <div class="standards-guide">
                <div class="guide-header">
                    <h2>📚 Guía de Estándares ISO - Fase ${this.projectState.currentPhase}</h2>
                    <p>Estándares aplicables a la fase actual del proyecto MedCore</p>
                </div>
                
                <div class="current-phase-standards">
                    <h3>🎯 Estándares para ${this.phases[this.projectState.currentPhase].name}</h3>
                    <div class="standards-grid">
                        ${Object.entries(currentPhaseStandards).map(([id, standard]) => `
                            <div class="standard-card current">
                                <div class="standard-header">
                                    <h4>${id}</h4>
                                    <span class="standard-category">${standard.category}</span>
                                </div>
                                <h5>${standard.name}</h5>
                                <p class="standard-description">${standard.description}</p>
                                
                                <div class="hospital-application">
                                    <h6>🏥 Aplicación Hospitalaria</h6>
                                    <p>${standard.hospitalApplication}</p>
                                </div>
                                
                                <div class="standard-benefits">
                                    <h6>✅ Beneficios</h6>
                                    <ul>
                                        ${standard.benefits.slice(0, 2).map(benefit => `<li>${benefit}</li>`).join('')}
                                    </ul>
                                </div>
                                
                                <button class="view-details-btn" onclick="window.gameEngine.showStandardDetails('${id}')">
                                    Ver Detalles
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="all-standards-overview">
                    <h3>📋 Resumen de Todos los Estándares</h3>
                    <div class="standards-timeline">
                        ${Object.entries(this.isoStandards).map(([id, standard]) => `
                            <div class="standard-timeline-item">
                                <div class="standard-phases">
                                    ${standard.applicablePhases.map(phase => `
                                        <span class="phase-badge ${phase <= this.projectState.currentPhase ? 'completed' : phase === this.projectState.currentPhase ? 'current' : 'pending'}">
                                            ${phase}
                                        </span>
                                    `).join('')}
                                </div>
                                <div class="standard-info">
                                    <strong>${id}</strong>
                                    <span>${standard.name}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="guide-actions">
                    <button class="action-btn primary" onclick="window.gameEngine.loadPhaseContent(${this.projectState.currentPhase})">
                        ← Regresar a la Fase
                    </button>
                    <button class="action-btn secondary" onclick="window.gameEngine.exportStandardsCompliance()">
                        📄 Exportar Cumplimiento
                    </button>
                </div>
            </div>
        `;
        
        mainContent.innerHTML = guideHTML;
        this.addAlert('Guía de estándares ISO mostrada', 'info');
    };
    
    /**
     * Mostrar detalles de un estándar específico
     */
    MedCoreEngine.prototype.showStandardDetails = function(standardId) {
        const standard = this.getStandardDetails(standardId);
        if (!standard) return;
        
        const detailsHTML = `
            <div id="standard-details-modal" class="modal-overlay" style="display: flex;">
                <div class="modal-container standard-details-modal">
                    <div class="modal-header">
                        <h2>${standardId} - ${standard.name}</h2>
                        <button onclick="document.getElementById('standard-details-modal').remove()">✕</button>
                    </div>
                    
                    <div class="modal-content">
                        <div class="standard-full-details">
                            <div class="standard-meta">
                                <h3>📋 Información General</h3>
                                <p><strong>Nombre completo:</strong> ${standard.fullName}</p>
                                <p><strong>Categoría:</strong> ${standard.category}</p>
                                <p><strong>Fases aplicables:</strong> ${standard.applicablePhases.join(', ')}</p>
                            </div>
                            
                            <div class="standard-description-full">
                                <h3>📖 Descripción</h3>
                                <p>${standard.description}</p>
                            </div>
                            
                            <div class="standard-principles">
                                <h3>🎯 Principios Clave</h3>
                                <ul>
                                    ${standard.keyPrinciples.map(principle => `<li>${principle}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="hospital-application-full">
                                <h3>🏥 Aplicación en Contexto Hospitalario</h3>
                                <p>${standard.hospitalApplication}</p>
                            </div>
                            
                            <div class="standard-benefits-full">
                                <h3>✅ Beneficios Específicos</h3>
                                <ul>
                                    ${standard.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', detailsHTML);
    };
    
    /**
     * Exportar reporte de cumplimiento de estándares
     */
    MedCoreEngine.prototype.exportStandardsCompliance = function() {
        const compliance = {
            projectInfo: {
                name: 'MedCore Hospital System',
                hospital: 'Hospital San Rafael',
                currentPhase: this.projectState.currentPhase,
                assessmentDate: new Date().toISOString()
            },
            standardsApplied: {},
            phaseCompliance: {},
            overallCompliance: this.calculateStandardsCompliance(),
            recommendations: this.getComplianceRecommendations()
        };
        
        // Evaluar cumplimiento por estándar
        Object.entries(this.isoStandards).forEach(([id, standard]) => {
            compliance.standardsApplied[id] = {
                name: standard.name,
                applicablePhases: standard.applicablePhases,
                currentlyApplicable: standard.applicablePhases.includes(this.projectState.currentPhase),
                complianceScore: this.calculateStandardCompliance(id)
            };
        });
        
        // Evaluar cumplimiento por fase
        for (let phase = 1; phase <= this.projectState.totalPhases; phase++) {
            compliance.phaseCompliance[phase] = {
                completed: phase < this.projectState.currentPhase,
                standards: this.getStandardsForPhase(phase),
                complianceScore: phase < this.projectState.currentPhase ? 100 : 
                               phase === this.projectState.currentPhase ? 50 : 0
            };
        }
        
        const dataStr = JSON.stringify(compliance, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `medcore_standards_compliance_${Date.now()}.json`;
        link.click();
        
        this.addAlert('Reporte de cumplimiento exportado', 'success');
    };
    
    /**
     * Calcular cumplimiento general de estándares
     */
    MedCoreEngine.prototype.calculateStandardsCompliance = function() {
        // Implementación básica - se puede expandir
        const phaseProgress = (this.projectState.currentPhase / this.projectState.totalPhases) * 100;
        const qualityScore = this.calculateAverageQuality();
        
        return Math.round((phaseProgress + qualityScore) / 2);
    };
    
    /**
     * Calcular cumplimiento de un estándar específico
     */
    MedCoreEngine.prototype.calculateStandardCompliance = function(standardId) {
        // Implementación básica basada en métricas de calidad relacionadas
        const standard = this.isoStandards[standardId];
        if (!standard) return 0;
        
        // Si el estándar no aplica a la fase actual, cumplimiento es 0
        if (!standard.applicablePhases.includes(this.projectState.currentPhase)) {
            return 0;
        }
        
        // Calcular basado en progreso de fase y métricas relacionadas
        const baseScore = (this.projectState.currentPhase / standard.applicablePhases.length) * 50;
        const qualityBonus = this.calculateAverageQuality() * 0.5;
        
        return Math.round(Math.min(100, baseScore + qualityBonus));
    };
    
    /**
     * Obtener recomendaciones de cumplimiento
     */
    MedCoreEngine.prototype.getComplianceRecommendations = function() {
        const recommendations = [];
        
        const currentStandards = this.getStandardsForPhase(this.projectState.currentPhase);
        Object.keys(currentStandards).forEach(standardId => {
            const compliance = this.calculateStandardCompliance(standardId);
            if (compliance < 80) {
                recommendations.push(`Mejorar cumplimiento de ${standardId} - Actualmente en ${compliance}%`);
            }
        });
        
        if (recommendations.length === 0) {
            recommendations.push('Cumplimiento de estándares en nivel aceptable para la fase actual');
        }
        
        return recommendations;
    };
    
    // Inicializar automáticamente cuando se carga el script
    if (window.gameEngine && window.gameEngine.initializeStandardsKnowledge) {
        window.gameEngine.initializeStandardsKnowledge();
    }
    
    console.log('📚 MedCore Standards cargado correctamente');
}

if (typeof MedCoreEngine === 'undefined') {
    console.warn('⚠️ MedCore Engine no está cargado. Los estándares ISO no estarán disponibles.');
}