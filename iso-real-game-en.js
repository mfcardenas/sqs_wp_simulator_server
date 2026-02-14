// === ISO LABORATORY - REAL TECHNICAL DECISIONS GAME ===

class ISOGameEngine {
    constructor() {
        this.gameState = {
            currentProject: null,
            metrics: {
                // ISO 25010 - Quality Characteristics
                functionalSuitability: 0,    // Functional Suitability
                performanceEfficiency: 0,    // Performance Efficiency  
                compatibility: 0,            // Compatibility
                usability: 0,                // Usability
                reliability: 0,              // Reliability
                security: 0,                 // Security
                maintainability: 0,          // Maintainability
                portability: 0               // Portability
            },
            resources: {
                budget: 100000,
                time: 12,                     // months
                developmentTeam: 5,
                testingTeam: 2,
                teamExperience: 'intermediate'
            },
            attemptId: null, // Persistence ID
            decisions: [],
            phase: 'planning',           // planning, development, testing, deployment
            score: 0,
            penalties: []
        };

        this.projects = {
            ecommerce: {
                name: "E-commerce Platform",
                description: "E-commerce system that must handle 10,000 concurrent users",
                minimumObjectives: {
                    functionalSuitability: 85,
                    performanceEfficiency: 80,
                    usability: 90,
                    security: 95,
                    reliability: 85
                },
                constraints: {
                    maxBudget: 150000,
                    maxTime: 18,
                    pciCompliance: true,
                    availability: 99.9
                },
                risks: ['traffic_spikes', 'security_attacks', 'payment_integration', 'user_experience']
            },
            hospital: {
                name: "Hospital Management System",
                description: "Critical medical software for patient and medical record management",
                minimumObjectives: {
                    functionalSuitability: 95,
                    reliability: 98,
                    security: 99,
                    usability: 85,
                    maintainability: 90
                },
                constraints: {
                    maxBudget: 200000,
                    maxTime: 24,
                    fdaCertification: true,
                    availability: 99.99,
                    hipaaCompliance: true
                },
                risks: ['critical_failures', 'data_loss', 'unauthorized_access', 'interoperability']
            },
            fintech: {
                name: "Financial Platform",
                description: "Banking system with real-time transactions and regulatory compliance",
                minimumObjectives: {
                    security: 98,
                    reliability: 95,
                    performanceEfficiency: 90,
                    functionalSuitability: 90,
                    compatibility: 85
                },
                constraints: {
                    maxBudget: 300000,
                    maxTime: 30,
                    soxCompliance: true,
                    availability: 99.99,
                    continuousAuditing: true
                },
                risks: ['regulatory_changes', 'fraud_attempts', 'system_downtime', 'data_breaches']
            },
            social: {
                name: "Social Network Platform",
                description: "Social media platform with multimedia content and real-time messaging",
                minimumObjectives: {
                    usability: 95,
                    performanceEfficiency: 85,
                    compatibility: 90,
                    functionalSuitability: 85,
                    portability: 80
                },
                constraints: {
                    maxBudget: 180000,
                    maxTime: 20,
                    globalScalability: true,
                    availability: 99.9
                },
                risks: ['viral_growth', 'content_moderation', 'performance_bottlenecks', 'privacy_concerns']
            }
        };

        this.decisions = {
            architecture: {
                monolithic: {
                    impact: { maintainability: -20, performanceEfficiency: +10, functionalSuitability: +5 },
                    cost: 0,
                    time: 0,
                    description: "Traditional monolithic architecture - simpler but less scalable"
                },
                microservices: {
                    impact: { maintainability: +15, performanceEfficiency: -5, compatibility: +20, functionalSuitability: +10 },
                    cost: 15000,
                    time: 3,
                    description: "Microservices - higher complexity but better scalability and maintenance"
                },
                serverless: {
                    impact: { performanceEfficiency: +25, portability: +15, maintainability: +10, functionalSuitability: +5 },
                    cost: -5000,
                    time: 1,
                    description: "Serverless architecture - high efficiency but vendor lock-in"
                }
            },
            database: {
                sql_traditional: {
                    impact: { reliability: +20, functionalSuitability: +10, compatibility: +15 },
                    cost: 5000,
                    time: 1,
                    description: "Traditional SQL database - full ACID compliance, well-known"
                },
                nosql_scalable: {
                    impact: { performanceEfficiency: +25, portability: +10, functionalSuitability: +5 },
                    cost: 8000,
                    time: 2,
                    description: "NoSQL for high scalability - eventual consistency"
                },
                hybrid: {
                    impact: { functionalSuitability: +20, performanceEfficiency: +10, maintainability: -10 },
                    cost: 12000,
                    time: 3,
                    description: "Hybrid SQL+NoSQL approach - maximum flexibility, higher complexity"
                }
            },
            testing: {
                manual_basic: {
                    impact: { reliability: +5, functionalSuitability: +5 },
                    cost: 2000,
                    time: 1,
                    description: "Basic manual testing - economical but limited"
                },
                automated_complete: {
                    impact: { reliability: +30, functionalSuitability: +20, maintainability: +15 },
                    cost: 25000,
                    time: 4,
                    description: "Complete automated testing suite - maximum quality"
                },
                automated_critical: {
                    impact: { reliability: +20, functionalSuitability: +15, security: +10 },
                    cost: 15000,
                    time: 2,
                    description: "Automated testing on critical functions - cost-benefit balance"
                }
            },
            security: {
                basic: {
                    impact: { security: +10 },
                    cost: 3000,
                    time: 1,
                    description: "Basic security measures - minimum acceptable"
                },
                advanced: {
                    impact: { security: +30, reliability: +10, functionalSuitability: -5 },
                    cost: 20000,
                    time: 3,
                    description: "Advanced multi-layer security - very robust"
                },
                extreme: {
                    impact: { security: +50, reliability: +20, usability: -15, performanceEfficiency: -10 },
                    cost: 35000,
                    time: 5,
                    description: "Military-grade security - maximum protection, UX impact"
                }
            },
            ui_ux: {
                functional_basic: {
                    impact: { usability: +10, functionalSuitability: +5 },
                    cost: 5000,
                    time: 2,
                    description: "Basic functional interface - meets minimum requirements"
                },
                professional_design: {
                    impact: { usability: +25, functionalSuitability: +10, performanceEfficiency: +5 },
                    cost: 15000,
                    time: 4,
                    description: "Professional UX design - optimized experience"
                },
                innovador_accesible: {
                    impact: { usability: +40, functionalSuitability: +15, compatibility: +20 },
                    cost: 25000,
                    time: 6,
                    description: "Innovative design with full accessibility - inclusive and modern"
                }
            }
        };

        this.randomEvents = [
            {
                name: "Requirements Change",
                probability: 0.3,
                impact: { functionalSuitability: -10, time: +2, cost: +5000 },
                description: "Client changes important requirements mid-project"
            },
            {
                name: "Security Vulnerability Discovered",
                probability: 0.2,
                impact: { security: -15, time: +1, cost: +3000 },
                description: "A critical vulnerability is discovered and must be fixed"
            },
            {
                name: "Senior Developer Leaves",
                probability: 0.15,
                impact: { maintainability: -10, time: +3, cost: +8000 },
                description: "A key developer leaves the project"
            },
            {
                name: "New Regulation",
                probability: 0.25,
                impact: { functionalSuitability: -5, security: +10, time: +2, cost: +6000 },
                description: "New regulation requires changes to the system"
            }
        ];
    }

    async startProject(projectType) {
        this.gameState.currentProject = this.projects[projectType];
        this.gameState.phase = 'planning';

        // Reset complete state
        this.resetMetrics();
        this.gameState.decisions = [];
        this.gameState.resources = {
            budget: 100000,
            time: 12,
            developmentTeam: 5,
            testingTeam: 2,
            teamExperience: 'intermediate'
        };
        this.gameState.score = 0;

        // Persistence: Create Attempt
        if (window.persistenceAPI) {
            const scenarioId = projectType;
            const scenarioTitle = this.gameState.currentProject.name;
            this.gameState.attemptId = await window.persistenceAPI.createAttempt(scenarioId, scenarioTitle);
        }

        this.renderGameInterface();
    }

    resetMetrics() {
        Object.keys(this.gameState.metrics).forEach(key => {
            this.gameState.metrics[key] = 0;
        });
    }

    makeDecision(category, option) {
        const decision = this.decisions[category][option];

        // Check if decision already exists for this category
        const existingIndex = this.gameState.decisions.findIndex(d => d.category === category);
        if (existingIndex !== -1) {
            const previousDecision = this.gameState.decisions[existingIndex];
            // Revert impacts
            Object.keys(previousDecision.decision.impact).forEach(metric => {
                if (metric === 'time' || metric === 'cost') {
                    this.gameState.resources[metric === 'time' ? 'time' : 'budget'] -= previousDecision.decision.impact[metric];
                } else {
                    this.gameState.metrics[metric] -= previousDecision.decision.impact[metric];
                }
            });
            // Remove previous
            this.gameState.decisions.splice(existingIndex, 1);
        }

        // Apply impacts to metrics
        Object.keys(decision.impact).forEach(metric => {
            if (metric === 'time' || metric === 'cost') {
                this.gameState.resources[metric === 'time' ? 'time' : 'budget'] += decision.impact[metric];
            } else {
                this.gameState.metrics[metric] += decision.impact[metric];
                // Ensure metrics are between 0 and 100
                this.gameState.metrics[metric] = Math.max(0, Math.min(100, this.gameState.metrics[metric]));
            }
        });

        // Register the decision
        this.gameState.decisions.push({
            phase: this.gameState.phase,
            category: category,
            option: option,
            decision: decision
        });

        // Calculate score based on decision effectiveness
        this.calculateScore();

        // Possible random event (only if new category decision)
        if (existingIndex === -1) {
            this.processRandomEvent();
        }

        // Update interface
        this.updateInterface();
    }

    calculateScore() {
        const project = this.gameState.currentProject;
        let totalPoints = 0;

        Object.keys(project.minimumObjectives).forEach(metric => {
            const objective = project.minimumObjectives[metric];
            const current = this.gameState.metrics[metric];

            if (current >= objective) {
                totalPoints += (current - objective) * 2 + objective;
            } else {
                totalPoints += current * 0.5; // Penalty for not meeting objective
            }
        });

        // Bonus for resource efficiency
        if (this.gameState.resources.budget > 0) {
            totalPoints += this.gameState.resources.budget * 0.01;
        }

        if (this.gameState.resources.time > 0) {
            totalPoints += this.gameState.resources.time * 10;
        }

        this.gameState.score = Math.round(totalPoints);
    }

    processRandomEvent() {
        const event = this.randomEvents.find(e => Math.random() < e.probability);
        if (event) {
            // Apply event impact
            Object.keys(event.impact).forEach(key => {
                if (key === 'time' || key === 'cost') {
                    const resource = key === 'time' ? 'time' : 'budget';
                    this.gameState.resources[resource] += event.impact[key];
                } else {
                    this.gameState.metrics[key] += event.impact[key];
                    this.gameState.metrics[key] = Math.max(0, Math.min(100, this.gameState.metrics[key]));
                }
            });

            this.showRandomEvent(event);
        }
    }

    renderGameInterface() {
        const gameInterface = document.getElementById('game-interface');
        if (!gameInterface) return;

        gameInterface.innerHTML = `
            <div class="project-header">
                <h1>🎯 ${this.gameState.currentProject.name}</h1>
                <p>${this.gameState.currentProject.description}</p>
                <div class="project-phase">Phase: <span class="phase-name">${this.gameState.phase}</span></div>
            </div>

            <div class="game-dashboard">
                <div class="metrics-panel">
                    <h2>📊 ISO 25010 Metrics</h2>
                    <div class="metrics-grid">
                        ${this.renderMetrics()}
                    </div>
                </div>

                <div class="resources-panel">
                    <h2>💰 Available Resources</h2>
                    <div class="resources-grid">
                        <div class="resource-item ${this.gameState.resources.budget < 0 ? 'negative' : ''}">
                            <span class="resource-icon">💵</span>
                            <span class="resource-label">Budget</span>
                            <span class="resource-value">$${this.gameState.resources.budget.toLocaleString()}</span>
                        </div>
                        <div class="resource-item ${this.gameState.resources.time < 0 ? 'negative' : ''}">
                            <span class="resource-icon">⏱️</span>
                            <span class="resource-label">Time</span>
                            <span class="resource-value">${this.gameState.resources.time} months</span>
                        </div>
                        <div class="resource-item">
                            <span class="resource-icon">🎯</span>
                            <span class="resource-label">Score</span>
                            <span class="resource-value">${this.gameState.score}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="decisions-panel">
                <h2>🤔 Technical Decisions</h2>
                <div class="decisions-grid">
                    ${this.renderDecisions()}
                </div>
            </div>

            <div class="objectives-panel">
                <h2>🎯 Project Objectives</h2>
                <div class="objectives-grid">
                    ${this.renderObjectives()}
                </div>
            </div>
        `;
    }

    renderMetrics() {
        return Object.keys(this.gameState.metrics).map(metric => {
            const value = this.gameState.metrics[metric];
            const objective = this.gameState.currentProject.minimumObjectives[metric] || 50;
            const meets = value >= objective;

            return `
                <div class="metric-card ${meets ? 'success' : 'pending'}">
                    <div class="metric-name">${this.getMetricName(metric)}</div>
                    <div class="metric-bar">
                        <div class="metric-fill" style="width: ${value}%"></div>
                        <div class="metric-target" style="left: ${objective}%"></div>
                    </div>
                    <div class="metric-value">${value}/100 (min: ${objective})</div>
                </div>
            `;
        }).join('');
    }

    renderDecisions() {
        return Object.keys(this.decisions).map(category => `
            <div class="decision-category">
                <h3>${this.getCategoryName(category)}</h3>
                <div class="decision-options">
                    ${Object.keys(this.decisions[category]).map(option => {
            const decision = this.decisions[category][option];
            const alreadyChosen = this.gameState.decisions.find(d => d.category === category);

            return `
                            <div class="decision-option ${alreadyChosen?.option === option ? 'selected' : ''}" 
                                 onclick="isoGame.makeDecision('${category}', '${option}')"
                                 ${alreadyChosen ? 'style="pointer-events: none; opacity: 0.6;"' : ''}>
                                <div class="option-header">
                                    <h4>${this.getOptionName(option)}</h4>
                                    <div class="option-cost">
                                        💰 ${decision.cost >= 0 ? '+' : ''}$${decision.cost.toLocaleString()} | 
                                        ⏱️ ${decision.time >= 0 ? '+' : ''}${decision.time}m
                                    </div>
                                </div>
                                <p class="option-description">${decision.description}</p>
                                <div class="option-impact">
                                    <strong>Impact:</strong>
                                    ${Object.keys(decision.impact).map(metric =>
                `<span class="impact-item ${decision.impact[metric] >= 0 ? 'positive' : 'negative'}">
                                            ${this.getMetricName(metric)}: ${decision.impact[metric] >= 0 ? '+' : ''}${decision.impact[metric]}
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

    renderObjectives() {
        return Object.keys(this.gameState.currentProject.minimumObjectives).map(metric => {
            const objective = this.gameState.currentProject.minimumObjectives[metric];
            const current = this.gameState.metrics[metric];
            const progress = Math.min(100, (current / objective) * 100);
            const completed = current >= objective;

            return `
                <div class="objective-card ${completed ? 'completed' : 'pending'}">
                    <div class="objective-name">${this.getMetricName(metric)}</div>
                    <div class="objective-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                        <span class="progress-text">${current}/${objective} ${completed ? '✅' : '⏳'}</span>
                    </div>
                </div>
            `;
        }).join('');
    }

    getMetricName(metric) {
        const names = {
            functionalSuitability: 'Functional Suitability',
            performanceEfficiency: 'Performance Efficiency',
            compatibility: 'Compatibility',
            usability: 'Usability',
            reliability: 'Reliability',
            security: 'Security',
            maintainability: 'Maintainability',
            portability: 'Portability',
            time: 'Time',
            cost: 'Cost'
        };
        return names[metric] || metric;
    }

    getCategoryName(category) {
        const names = {
            architecture: '🏢 System Architecture',
            database: '🗄️ Database Strategy',
            testing: '🧪 Testing Strategy',
            security: '🔒 Security Level',
            ui_ux: '🎨 UI/UX Design'
        };
        return names[category] || category;
    }

    getOptionName(option) {
        const names = {
            monolithic: 'Monolithic',
            microservices: 'Microservices',
            serverless: 'Serverless',
            sql_traditional: 'Traditional SQL',
            nosql_scalable: 'Scalable NoSQL',
            hybrid: 'Hybrid SQL+NoSQL',
            manual_basic: 'Basic Manual',
            automated_complete: 'Complete Automated',
            automated_critical: 'Critical Automated',
            basic: 'Basic',
            advanced: 'Advanced',
            extreme: 'Extreme',
            functional_basic: 'Basic Functional',
            professional_design: 'Professional',
            innovador_accesible: 'Innovative + Accessible'
        };
        return names[option] || option;
    }

    showRandomEvent(event) {
        const notification = document.createElement('div');
        notification.className = 'event-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h3>⚠️ ${event.name}</h3>
                <p>${event.description}</p>
                <div class="event-impacts">
                    <strong>Impact:</strong>
                    ${Object.keys(event.impact).map(key =>
            `<span>${this.getMetricName(key)}: ${event.impact[key] >= 0 ? '+' : ''}${event.impact[key]}</span>`
        ).join(', ')}
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Understood</button>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 10000);
    }

    updateInterface() {
        // Update metrics in real-time
        const metricsGrid = document.querySelector('.metrics-grid');
        if (metricsGrid) {
            metricsGrid.innerHTML = this.renderMetrics();
        }

        // Update resources
        const resourcesGrid = document.querySelector('.resources-grid');
        if (resourcesGrid) {
            resourcesGrid.innerHTML = `
                <div class="resource-item ${this.gameState.resources.budget < 0 ? 'negative' : ''}">
                    <span class="resource-icon">💵</span>
                    <span class="resource-label">Budget</span>
                    <span class="resource-value">$${this.gameState.resources.budget.toLocaleString()}</span>
                </div>
                <div class="resource-item ${this.gameState.resources.time < 0 ? 'negative' : ''}">
                    <span class="resource-icon">⏱️</span>
                    <span class="resource-label">Time</span>
                    <span class="resource-value">${this.gameState.resources.time} months</span>
                </div>
                <div class="resource-item">
                    <span class="resource-icon">🎯</span>
                    <span class="resource-label">Score</span>
                    <span class="resource-value">${this.gameState.score}</span>
                </div>
            `;
        }

        // Update decisions (to reflect selection)
        const decisionsGrid = document.querySelector('.decisions-grid');
        if (decisionsGrid) {
            decisionsGrid.innerHTML = this.renderDecisions();
        }

        // Update objectives
        const objectivesGrid = document.querySelector('.objectives-grid');
        if (objectivesGrid) {
            objectivesGrid.innerHTML = this.renderObjectives();
        }

        // Check if project is complete
        this.checkCompletion();
    }

    checkCompletion() {
        const allDecisionsMade = Object.keys(this.decisions).every(category =>
            this.gameState.decisions.find(d => d.category === category)
        );

        if (allDecisionsMade) {
            this.showFinalResult();
        }
    }

    async showFinalResult() {
        const project = this.gameState.currentProject;
        const objectivesMet = Object.keys(project.minimumObjectives).filter(metric =>
            this.gameState.metrics[metric] >= project.minimumObjectives[metric]
        );

        const successPercentage = (objectivesMet.length / Object.keys(project.minimumObjectives).length) * 100;

        // Persistence: Complete Attempt
        if (this.gameState.attemptId && window.persistenceAPI) {
            await window.persistenceAPI.completeAttempt(this.gameState.attemptId, {
                score: this.gameState.score,
                correctCount: objectivesMet.length,
                incorrectCount: Object.keys(project.minimumObjectives).length - objectivesMet.length,
                maxScore: 1000,
                metadata: {
                    project: project.name,
                    level: successPercentage >= 90 ? 'EXPERT' : successPercentage >= 70 ? 'ADVANCED' : 'NOVICE',
                    metrics: this.gameState.metrics,
                    resources: this.gameState.resources,
                    decisions: this.gameState.decisions.map(d => ({ cat: d.category, opt: d.option }))
                }
            });
        }

        let evaluation = '';
        if (successPercentage >= 90) {
            evaluation = '🏆 EXCEPTIONAL SUCCESS! You have mastered ISO standards.';
        } else if (successPercentage >= 70) {
            evaluation = '✅ SUCCESS! The project meets main objectives.';
        } else if (successPercentage >= 50) {
            evaluation = '⚠️ PARTIAL SUCCESS. The project works but needs improvements.';
        } else {
            evaluation = '❌ PROJECT FAILED. Minimum objectives not met.';
        }

        const modal = document.createElement('div');
        modal.className = 'game-completion-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h1>🎯 Project Completed</h1>
                <h2>${evaluation}</h2>
                
                <div class="final-metrics">
                    <h3>📊 Final Results</h3>
                    ${Object.keys(project.minimumObjectives).map(metric => {
            const objective = project.minimumObjectives[metric];
            const current = this.gameState.metrics[metric];
            const meets = current >= objective;

            return `
                            <div class="final-metric ${meets ? 'success' : 'fail'}">
                                <span class="metric-name">${this.getMetricName(metric)}</span>
                                <span class="metric-result">${current}/100 (target: ${objective}) ${meets ? '✅' : '❌'}</span>
                            </div>
                        `;
        }).join('')}
                </div>
                
                <div class="final-score">
                    <h3>🎯 Final Score: ${this.gameState.score}</h3>
                    <p>Remaining resources: $${this.gameState.resources.budget.toLocaleString()}, ${this.gameState.resources.time} months</p>
                </div>
                
                <div class="decision-summary">
                    <h3>📋 Decisions Made</h3>
                    ${this.gameState.decisions.map(d => `
                        <div class="decision-summary-item">
                            <strong>${this.getCategoryName(d.category)}:</strong> 
                            ${this.getOptionName(d.option)}
                        </div>
                    `).join('')}
                </div>
                
                <div class="modal-actions">
                    <button onclick="document.querySelector('.game-completion-modal').remove(); isoGame.backToMenu()">🏠 New Project</button>
                    <button onclick="document.querySelector('.game-completion-modal').remove(); isoGame.restartProject()">🔄 Repeat Project</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    backToMenu() {
        const gameInterface = document.getElementById('game-interface');
        if (gameInterface) {
            gameInterface.innerHTML = this.createProjectMenu();
        }
    }

    restartProject() {
        const currentType = Object.keys(this.projects).find(type =>
            this.projects[type] === this.gameState.currentProject
        );
        this.startProject(currentType);
    }

    createProjectMenu() {
        return `
            <div class="project-selection">
                <h1>🎯 ISO Laboratory - Project Simulator</h1>
                <p>Select a project and make technical decisions that impact real ISO 25010 metrics</p>
                
                <div class="projects-grid">
                    ${Object.keys(this.projects).map(type => {
            const project = this.projects[type];
            return `
                            <div class="project-card" onclick="isoGame.startProject('${type}')">
                                <h3>${project.name}</h3>
                                <p>${project.description}</p>
                                
                                <div class="project-objectives">
                                    <h4>Main Objectives:</h4>
                                    ${Object.keys(project.minimumObjectives).map(metric =>
                `<span class="objective-tag">${this.getMetricName(metric)}: ${project.minimumObjectives[metric]}%</span>`
            ).join('')}
                                </div>
                                
                                <div class="project-constraints">
                                    <div class="constraint">💰 Max: $${project.constraints.maxBudget.toLocaleString()}</div>
                                    <div class="constraint">⏱️ Max: ${project.constraints.maxTime} months</div>
                                </div>
                                
                                <button class="start-project-btn">Start Project</button>
                            </div>
                        `;
        }).join('')}
                </div>
                
                <div class="game-explanation">
                    <h2>🎮 How to Play</h2>
                    <ol>
                        <li><strong>Choose a project</strong> - Each has specific ISO objectives</li>
                        <li><strong>Make technical decisions</strong> - Architecture, DB, Testing, Security, UI/UX</li>
                        <li><strong>Manage resources</strong> - Limited budget and time</li>
                        <li><strong>Face random events</strong> - Just like in real projects</li>
                        <li><strong>Meet ISO objectives</strong> - Software quality metrics</li>
                    </ol>
                    
                    <div class="iso-standards-info">
                        <h3>📚 Applied ISO Standards</h3>
                        <div class="standards-grid">
                            <div class="standard-info">
                                <strong>ISO 25010</strong>
                                <p>Software product quality model with 8 measurable characteristics</p>
                            </div>
                            <div class="standard-info">
                                <strong>ISO 29148</strong>
                                <p>Requirements engineering processes</p>
                            </div>
                            <div class="standard-info">
                                <strong>ISO 9241</strong>
                                <p>Ergonomics and human-system interaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Global game instance
window.isoGame = new ISOGameEngine();