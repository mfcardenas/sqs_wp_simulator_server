/**
 * MEDCORE DASHBOARD - SISTEMA DE MÉTRICAS EN TIEMPO REAL
 * Manejo completo del dashboard de métricas y visualizaciones
 */

if (typeof MedCoreEngine !== 'undefined') {
    
    /**
     * Inicializar dashboard completo con todas las métricas
     */
    MedCoreEngine.prototype.initializeDashboard = function() {
        console.log('📊 Inicializando dashboard completo...');
        
        // Configurar actualización automática del dashboard
        this.dashboardUpdateInterval = setInterval(() => {
            this.updateAllDashboardMetrics();
        }, 2000); // Actualizar cada 2 segundos
        
        // Inicializar métricas iniciales
        this.initializeQualityMetrics();
        this.initializeStakeholderMetrics();
        this.updateAllDashboardMetrics();
        
        console.log('✅ Dashboard inicializado y actualizándose automáticamente');
    };
    
    /**
     * Inicializar métricas de calidad con valores base
     */
    MedCoreEngine.prototype.initializeQualityMetrics = function() {
        // Valores iniciales basados en la fase actual
        const baseValue = 20; // Valor base mínimo
        const phaseBonus = (this.projectState.currentPhase - 1) * 10; // Bonus por fase
        
        Object.keys(this.qualityMetrics).forEach(metric => {
            if (this.qualityMetrics[metric].value === 0) {
                this.qualityMetrics[metric].value = baseValue + Math.random() * 15;
            }
        });
        
        console.log('📈 Métricas de calidad inicializadas');
    };
    
    /**
     * Inicializar métricas de stakeholders con valores base
     */
    MedCoreEngine.prototype.initializeStakeholderMetrics = function() {
        Object.keys(this.stakeholders).forEach(stakeholderId => {
            if (this.stakeholders[stakeholderId].satisfaction === 50) {
                // Satisfacción inicial variable según el rol
                const baseValues = {
                    'medical_director': 55,
                    'cto': 60,
                    'admin_director': 45,
                    'emergency_chief': 50,
                    'systems_chief': 65
                };
                this.stakeholders[stakeholderId].satisfaction = baseValues[stakeholderId] || 50;
            }
        });
        
        console.log('👥 Métricas de stakeholders inicializadas');
    };
    
    /**
     * Actualizar todas las métricas del dashboard
     */
    MedCoreEngine.prototype.updateAllDashboardMetrics = function() {
        this.updateProjectMetrics();
        this.updateQualityDashboard();
        this.updateStakeholderSatisfaction();
        this.calculateOverallProgress();
        this.updateProjectStatus();
    };
    
    /**
     * Actualizar métricas principales del proyecto con animaciones
     */
    MedCoreEngine.prototype.updateProjectMetrics = function() {
        // Actualizar presupuesto con formato y colores
        const budgetRemaining = document.getElementById('budget-remaining');
        const budgetBar = document.getElementById('budget-bar');
        
        if (budgetRemaining) {
            const formattedBudget = this.formatCurrency(this.projectState.budget);
            budgetRemaining.textContent = formattedBudget;
            
            // Añadir clase de estado según el nivel
            budgetRemaining.className = 'metric-value';
            const budgetPercentage = (this.projectState.budget / this.projectState.initialBudget) * 100;
            if (budgetPercentage < 30) {
                budgetRemaining.classList.add('critical');
            } else if (budgetPercentage < 60) {
                budgetRemaining.classList.add('warning');
            } else {
                budgetRemaining.classList.add('healthy');
            }
        }
        
        if (budgetBar) {
            const budgetPercentage = (this.projectState.budget / this.projectState.initialBudget) * 100;
            this.animateBar(budgetBar, budgetPercentage);
            
            // Cambiar color según el nivel
            budgetBar.className = 'metric-fill';
            if (budgetPercentage < 30) {
                budgetBar.classList.add('critical');
            } else if (budgetPercentage < 60) {
                budgetBar.classList.add('warning');
            }
        }
        
        // Actualizar tiempo con formato mejorado
        const timeRemaining = document.getElementById('time-remaining');
        const timeBar = document.getElementById('time-bar');
        
        if (timeRemaining) {
            const timeText = this.formatTimeRemaining(this.projectState.timeRemaining);
            timeRemaining.textContent = timeText;
            
            // Añadir clase de estado según el tiempo
            timeRemaining.className = 'metric-value';
            const timePercentage = (this.projectState.timeRemaining / this.projectState.totalTime) * 100;
            if (timePercentage < 25) {
                timeRemaining.classList.add('critical');
            } else if (timePercentage < 50) {
                timeRemaining.classList.add('warning');
            } else {
                timeRemaining.classList.add('healthy');
            }
        }
        
        if (timeBar) {
            const timePercentage = (this.projectState.timeRemaining / this.projectState.totalTime) * 100;
            this.animateBar(timeBar, timePercentage);
            
            // Cambiar color según el nivel
            timeBar.className = 'metric-fill';
            if (timePercentage < 25) {
                timeBar.classList.add('critical');
            } else if (timePercentage < 50) {
                timeBar.classList.add('warning');
            }
        }
        
        // Actualizar progreso general
        const progressPercentage = document.getElementById('progress-percentage');
        const progressBar = document.getElementById('progress-bar');
        
        if (progressPercentage) {
            progressPercentage.textContent = `${Math.round(this.projectState.progressPercentage)}%`;
        }
        
        if (progressBar) {
            this.animateBar(progressBar, this.projectState.progressPercentage);
        }
    };
    
    /**
     * Animar barras de progreso suavemente
     */
    MedCoreEngine.prototype.animateBar = function(barElement, targetWidth) {
        if (!barElement) return;
        
        const currentWidth = parseFloat(barElement.style.width) || 0;
        const difference = targetWidth - currentWidth;
        const steps = 30;
        const stepSize = difference / steps;
        let currentStep = 0;
        
        const animate = () => {
            if (currentStep < steps) {
                const newWidth = currentWidth + (stepSize * currentStep);
                barElement.style.width = Math.max(0, Math.min(100, newWidth)) + '%';
                currentStep++;
                requestAnimationFrame(animate);
            } else {
                barElement.style.width = Math.max(0, Math.min(100, targetWidth)) + '%';
            }
        };
        
        requestAnimationFrame(animate);
    };
    
    /**
     * Actualizar dashboard de calidad ISO 25010 con métricas detalladas
     */
    MedCoreEngine.prototype.updateQualityDashboard = function() {
        const qualityDashboard = document.getElementById('quality-dashboard');
        if (!qualityDashboard) return;
        
        const metricsHTML = Object.entries(this.qualityMetrics).map(([key, metric]) => {
            const percentage = (metric.value / metric.target) * 100;
            const statusClass = percentage >= 80 ? 'excellent' : 
                              percentage >= 60 ? 'good' : 
                              percentage >= 40 ? 'fair' : 'poor';
            
            const trendClass = this.getMetricTrend(key);
            const trendIcon = this.getMetricTrendIcon(trendClass);
            
            return `
                <div class="metric-card ${statusClass}" data-metric="${key}">
                    <div class="metric-header">
                        <div class="metric-name-container">
                            <span class="metric-name">${this.getMetricDisplayName(key)}</span>
                            <span class="metric-trend ${trendClass}">${trendIcon}</span>
                        </div>
                        <span class="metric-score">${Math.round(metric.value)}%</span>
                    </div>
                    <div class="metric-progress">
                        <div class="progress-bar">
                            <div class="progress-fill ${statusClass}" 
                                 style="width: ${percentage}%" 
                                 data-target="${percentage}">
                            </div>
                        </div>
                        <div class="metric-details">
                            <span class="metric-target">Meta: ${metric.target}%</span>
                            <span class="metric-weight">Peso: ${Math.round(metric.weight * 100)}%</span>
                        </div>
                    </div>
                    <div class="metric-description">
                        ${this.getMetricDescription(key)}
                    </div>
                </div>
            `;
        }).join('');
        
        qualityDashboard.innerHTML = metricsHTML;
        
        // Animar barras de progreso
        setTimeout(() => {
            qualityDashboard.querySelectorAll('.progress-fill').forEach(bar => {
                const targetWidth = bar.getAttribute('data-target');
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = targetWidth + '%';
                }, 100);
            });
        }, 50);
    };
    
    /**
     * Actualizar satisfacción de stakeholders con detalles
     */
    MedCoreEngine.prototype.updateStakeholderSatisfaction = function() {
        const satisfactionGrid = document.getElementById('stakeholder-satisfaction');
        if (!satisfactionGrid) return;
        
        const stakeholdersHTML = Object.entries(this.stakeholders).map(([key, stakeholder]) => {
            const satisfactionClass = stakeholder.satisfaction >= 80 ? 'very-high' :
                                    stakeholder.satisfaction >= 65 ? 'high' :
                                    stakeholder.satisfaction >= 50 ? 'medium' :
                                    stakeholder.satisfaction >= 35 ? 'low' : 'very-low';
            
            const influenceWidth = stakeholder.influence * 100;
            const trendClass = this.getStakeholderTrend(key);
            const trendIcon = this.getStakeholderTrendIcon(trendClass);
            
            return `
                <div class="satisfaction-item ${satisfactionClass}" data-stakeholder="${key}">
                    <div class="stakeholder-info">
                        <div class="stakeholder-avatar">${this.getStakeholderAvatar(key)}</div>
                        <div class="stakeholder-details">
                            <span class="stakeholder-name">${stakeholder.name}</span>
                            <span class="stakeholder-role-mini">${stakeholder.role.split(' ')[0]}</span>
                        </div>
                    </div>
                    <div class="satisfaction-metrics">
                        <div class="satisfaction-bar">
                            <div class="satisfaction-fill ${satisfactionClass}" 
                                 style="width: 0%"
                                 data-target="${stakeholder.satisfaction}">
                            </div>
                        </div>
                        <div class="satisfaction-details">
                            <span class="satisfaction-score">${Math.round(stakeholder.satisfaction)}%</span>
                            <span class="satisfaction-trend ${trendClass}">${trendIcon}</span>
                        </div>
                    </div>
                    <div class="influence-indicator">
                        <div class="influence-bar">
                            <div class="influence-fill" style="width: ${influenceWidth}%"></div>
                        </div>
                        <span class="influence-text">${Math.round(influenceWidth)}%</span>
                    </div>
                </div>
            `;
        }).join('');
        
        satisfactionGrid.innerHTML = stakeholdersHTML;
        
        // Animar barras de satisfacción
        setTimeout(() => {
            satisfactionGrid.querySelectorAll('.satisfaction-fill').forEach(bar => {
                const targetWidth = bar.getAttribute('data-target');
                setTimeout(() => {
                    bar.style.width = targetWidth + '%';
                }, Math.random() * 500);
            });
        }, 100);
    };
    
    /**
     * Obtener descripción de métrica de calidad
     */
    MedCoreEngine.prototype.getMetricDescription = function(key) {
        const descriptions = {
            'functionalSuitability': 'Grado en que el software proporciona funciones que satisfacen necesidades implícitas y explícitas',
            'performanceEfficiency': 'Rendimiento relativo a la cantidad de recursos utilizados bajo condiciones determinadas',
            'compatibility': 'Grado en que el software puede intercambiar información y/o realizar funciones requeridas',
            'usability': 'Grado en que el software puede ser entendido, aprendido, usado y ser atractivo para el usuario',
            'reliability': 'Grado en que el sistema ejecuta funciones específicas bajo condiciones específicas',
            'security': 'Grado en que el software protege información y datos para que personas o sistemas no autorizados no puedan leerlos',
            'maintainability': 'Grado de efectividad y eficiencia con la que el software puede ser modificado',
            'portability': 'Grado de efectividad y eficiencia con la que el software puede ser transferido de un entorno a otro'
        };
        return descriptions[key] || 'Métrica de calidad de software';
    };
    
    /**
     * Actualizar estado general del proyecto
     */
    MedCoreEngine.prototype.updateProjectStatus = function() {
        const currentPhaseElement = document.getElementById('current-phase');
        if (currentPhaseElement) {
            const phase = this.phases[this.projectState.currentPhase];
            currentPhaseElement.textContent = `Fase ${this.projectState.currentPhase}: ${phase.name}`;
        }
        
        // Actualizar indicadores de salud del proyecto
        this.updateProjectHealthIndicators();
    };
    
    /**
     * Actualizar indicadores de salud del proyecto
     */
    MedCoreEngine.prototype.updateProjectHealthIndicators = function() {
        const healthScore = this.calculateProjectHealth();
        
        // Crear o actualizar indicador de salud general
        let healthIndicator = document.getElementById('project-health-indicator');
        if (!healthIndicator) {
            // Crear indicador si no existe
            const header = document.querySelector('.project-header');
            if (header) {
                const healthHTML = `
                    <div id="project-health-indicator" class="health-indicator">
                        <div class="health-label">Salud del Proyecto</div>
                        <div class="health-score ${this.getHealthClass(healthScore)}">${healthScore}%</div>
                        <div class="health-bar">
                            <div class="health-fill" style="width: ${healthScore}%"></div>
                        </div>
                    </div>
                `;
                header.insertAdjacentHTML('beforeend', healthHTML);
            }
        } else {
            // Actualizar indicador existente
            const scoreElement = healthIndicator.querySelector('.health-score');
            const fillElement = healthIndicator.querySelector('.health-fill');
            
            if (scoreElement) {
                scoreElement.textContent = healthScore + '%';
                scoreElement.className = `health-score ${this.getHealthClass(healthScore)}`;
            }
            
            if (fillElement) {
                this.animateBar(fillElement, healthScore);
            }
        }
    };
    
    /**
     * Calcular salud general del proyecto
     */
    MedCoreEngine.prototype.calculateProjectHealth = function() {
        const qualityAvg = this.calculateAverageQuality();
        const stakeholderAvg = this.calculateAverageStakeholderSatisfaction();
        const budgetHealth = (this.projectState.budget / this.projectState.initialBudget) * 100;
        const timeHealth = (this.projectState.timeRemaining / this.projectState.totalTime) * 100;
        
        // Ponderación: 40% calidad, 25% stakeholders, 20% presupuesto, 15% tiempo
        const healthScore = (qualityAvg * 0.4) + (stakeholderAvg * 0.25) + (budgetHealth * 0.2) + (timeHealth * 0.15);
        
        return Math.round(Math.max(0, Math.min(100, healthScore)));
    };
    
    /**
     * Obtener clase CSS para nivel de salud
     */
    MedCoreEngine.prototype.getHealthClass = function(score) {
        if (score >= 80) return 'excellent';
        if (score >= 65) return 'good';
        if (score >= 50) return 'fair';
        if (score >= 35) return 'poor';
        return 'critical';
    };
    
    /**
     * Formatear moneda
     */
    MedCoreEngine.prototype.formatCurrency = function(amount) {
        return '€' + amount.toLocaleString('es-ES');
    };
    
    /**
     * Formatear tiempo restante
     */
    MedCoreEngine.prototype.formatTimeRemaining = function(months) {
        if (months <= 0) return 'Tiempo agotado';
        if (months < 1) return `${Math.round(months * 30)} días`;
        if (months === 1) return '1 mes';
        return `${Math.round(months)} meses`;
    };
    
    /**
     * Obtener tendencia de métrica (placeholder - se puede expandir)
     */
    MedCoreEngine.prototype.getMetricTrend = function(metric) {
        // Por ahora, tendencia basada en el valor actual vs target
        const metricData = this.qualityMetrics[metric];
        const percentage = (metricData.value / metricData.target) * 100;
        
        if (percentage >= 90) return 'up';
        if (percentage >= 60) return 'stable';
        return 'down';
    };
    
    /**
     * Obtener icono de tendencia de métrica
     */
    MedCoreEngine.prototype.getMetricTrendIcon = function(trend) {
        const icons = {
            'up': '📈',
            'stable': '➡️',
            'down': '📉'
        };
        return icons[trend] || '➡️';
    };
    
    /**
     * Obtener tendencia de stakeholder
     */
    MedCoreEngine.prototype.getStakeholderTrend = function(stakeholderId) {
        const satisfaction = this.stakeholders[stakeholderId].satisfaction;
        
        if (satisfaction >= 70) return 'up';
        if (satisfaction >= 40) return 'stable';
        return 'down';
    };
    
    /**
     * Obtener icono de tendencia de stakeholder
     */
    MedCoreEngine.prototype.getStakeholderTrendIcon = function(trend) {
        const icons = {
            'up': '😊',
            'stable': '😐',
            'down': '😞'
        };
        return icons[trend] || '😐';
    };
    
    /**
     * Limpiar dashboard (cuando termina el juego)
     */
    MedCoreEngine.prototype.cleanupDashboard = function() {
        if (this.dashboardUpdateInterval) {
            clearInterval(this.dashboardUpdateInterval);
            console.log('🧹 Dashboard cleanup completado');
        }
    };
    
    console.log('📊 MedCore Dashboard cargado correctamente');
}

if (typeof MedCoreEngine === 'undefined') {
    console.warn('⚠️ MedCore Engine no está cargado. El dashboard no estará disponible.');
}