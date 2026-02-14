// === LABORATORIO ISO - VERSIÓN FUNCIONAL ===

// === CONFIGURACIÓN ===
const AppConfig = {
    currentView: 'view-cycle',
    currentScenario: 0,
    scenarios: [
        {
            id: 0,
            name: "E-commerce Platform",
            icon: "🛍️",
            description: "Plataforma de comercio electrónico escalable",
            type: "startup"
        },
        {
            id: 1,
            name: "Sistema Hospitalario",
            icon: "🏥",
            description: "Sistema de gestión médica crítica",
            type: "enterprise"
        },
        {
            id: 2,
            name: "Análisis Financiero",
            icon: "📊",
            description: "Sistema de análisis de datos financieros",
            type: "enterprise"
        },
        {
            id: 3,
            name: "App Móvil Social",
            icon: "📱",
            description: "Aplicación móvil de redes sociales",
            type: "mobile"
        }
    ]
};

// === GESTOR DE INTERFAZ ===
const UIManager = {
    init: () => {
        console.log('🚀 Inicializando UIManager...');
        UIManager.setupNavigation();
        UIManager.setupWizard();
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
        console.log(`Cambiando a vista: ${viewId}`);
        
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
    },

    setupWizard: () => {
        console.log('⚙️ Configurando wizard...');
        
        const wizard = document.getElementById('tutorial-wizard');
        const nextBtn = document.getElementById('wizard-next');
        const prevBtn = document.getElementById('wizard-prev');
        const startBtn = document.getElementById('wizard-start');
        
        if (!wizard) {
            console.log('❌ No se encontró el wizard');
            return;
        }

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

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentStep < totalSteps) {
                    currentStep++;
                    updateStep();
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateStep();
                }
            });
        }

        if (startBtn) {
            startBtn.addEventListener('click', () => {
                UIManager.closeTutorial();
            });
        }

        updateStep();
    },

    showTutorial: () => {
        console.log('📖 Mostrando tutorial...');
        const wizard = document.getElementById('tutorial-wizard');
        if (wizard) {
            wizard.classList.add('active');
        }
    },

    closeTutorial: () => {
        console.log('❌ Cerrando tutorial...');
        const wizard = document.getElementById('tutorial-wizard');
        if (wizard) {
            wizard.classList.remove('active');
        }
    },

    showProgress: () => {
        alert('Funcionalidad de progreso en desarrollo');
    },

    exportProgress: () => {
        alert('Funcionalidad de exportación en desarrollo');
    },

    showScenarioComparison: () => {
        alert('Comparación de escenarios en desarrollo');
    }
};

// === GESTOR DE VISTAS ===
const ViewManager = {
    showQualityStandardInfo: () => {
        alert('Información del estándar ISO 25010 en desarrollo');
    },

    resetQualityView: () => {
        alert('Reset de vista en desarrollo');
    }
};

// === FUNCIONES GLOBALES ===
function saveCurrentState() {
    console.log('💾 Guardando estado...');
    localStorage.setItem('app-state', JSON.stringify({
        currentView: AppConfig.currentView,
        currentScenario: AppConfig.currentScenario,
        timestamp: new Date().toISOString()
    }));
    alert('Estado guardado correctamente');
}

// === INICIALIZACIÓN ===
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎯 Iniciando Laboratorio ISO...');
    
    // Cargar estado guardado
    try {
        const savedState = localStorage.getItem('app-state');
        if (savedState) {
            const state = JSON.parse(savedState);
            AppConfig.currentView = state.currentView || 'view-cycle';
            AppConfig.currentScenario = state.currentScenario || 0;
        }
    } catch (e) {
        console.warn('⚠️ Error cargando estado guardado:', e);
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

    console.log('✅ Aplicación iniciada correctamente');
});

// === LOG DE DEBUG ===
console.log('📄 Script cargado - Laboratorio ISO v2.0');