/**
 * SCRIPT DE VALIDACIÓN DE MEDCORE
 * Verifica que todos los componentes funcionen correctamente
 */

function runValidationTests() {
    console.log('🧪 Ejecutando pruebas de validación de MedCore...');
    
    const tests = [
        {
            name: 'Carga de MedCoreEngine',
            test: () => typeof MedCoreEngine !== 'undefined',
            fix: 'Verificar que medcore-engine.js se carga correctamente'
        },
        {
            name: 'Inicialización del motor',
            test: () => {
                try {
                    const engine = new MedCoreEngine();
                    return engine && engine.projectState;
                } catch (error) {
                    console.error('Error en inicialización:', error);
                    return false;
                }
            },
            fix: 'Revisar constructor de MedCoreEngine'
        },
        {
            name: 'Elementos DOM principales',
            test: () => {
                const elements = ['project-intro', 'project-interface', 'main-content'];
                return elements.every(id => document.getElementById(id) !== null);
            },
            fix: 'Verificar que todos los elementos HTML necesarios están presentes'
        },
        {
            name: 'Funciones de interfaz',
            test: () => {
                return typeof startProject === 'function' && 
                       typeof showBasicInterface === 'function' &&
                       typeof makeBasicDecision === 'function';
            },
            fix: 'Verificar que las funciones de interfaz están definidas'
        },
        {
            name: 'CSS cargado',
            test: () => {
                const computed = getComputedStyle(document.body);
                return computed.getPropertyValue('font-family') !== '';
            },
            fix: 'Verificar que medcore-styles.css se carga correctamente'
        }
    ];
    
    let passedTests = 0;
    let totalTests = tests.length;
    
    console.log(`\n📋 Ejecutando ${totalTests} pruebas...\n`);
    
    tests.forEach((test, index) => {
        try {
            const result = test.test();
            if (result) {
                console.log(`✅ ${index + 1}. ${test.name} - PASÓ`);
                passedTests++;
            } else {
                console.log(`❌ ${index + 1}. ${test.name} - FALLÓ`);
                console.log(`   💡 Solución: ${test.fix}`);
            }
        } catch (error) {
            console.log(`❌ ${index + 1}. ${test.name} - ERROR: ${error.message}`);
            console.log(`   💡 Solución: ${test.fix}`);
        }
    });
    
    console.log(`\n📊 Resultado: ${passedTests}/${totalTests} pruebas pasaron (${Math.round((passedTests/totalTests)*100)}%)`);
    
    if (passedTests === totalTests) {
        console.log('🎉 ¡Todas las pruebas pasaron! El juego debería funcionar correctamente.');
        return true;
    } else {
        console.log('⚠️ Algunas pruebas fallaron. Revisa las soluciones sugeridas.');
        return false;
    }
}

// Función para testing manual básico
function testBasicFunctionality() {
    console.log('🎮 Probando funcionalidad básica...');
    
    try {
        // Probar inicio del proyecto
        if (typeof startProject === 'function') {
            console.log('✅ Función startProject disponible');
        }
        
        // Probar interfaz básica
        if (typeof showBasicInterface === 'function') {
            console.log('✅ Función showBasicInterface disponible');
        }
        
        // Probar decisiones
        if (typeof makeBasicDecision === 'function') {
            console.log('✅ Función makeBasicDecision disponible');
        }
        
        // Probar elementos DOM
        const intro = document.getElementById('project-intro');
        const interface = document.getElementById('project-interface');
        const mainContent = document.getElementById('main-content');
        
        if (intro && interface && mainContent) {
            console.log('✅ Elementos DOM principales encontrados');
        } else {
            console.log('❌ Faltan elementos DOM principales');
        }
        
        console.log('🎉 Testing básico completado');
        return true;
        
    } catch (error) {
        console.error('❌ Error en testing básico:', error);
        return false;
    }
}

// Función para diagnosticar problemas comunes
function diagnoseCommonIssues() {
    console.log('🔍 Diagnosticando problemas comunes...');
    
    const issues = [];
    
    // Verificar scripts cargados
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    const expectedScripts = ['medcore-engine.js', 'medcore-phases.js', 'medcore-events.js', 'medcore-dashboard.js', 'medcore-standards.js'];
    
    expectedScripts.forEach(script => {
        const found = scripts.some(s => s.src.includes(script));
        if (!found) {
            issues.push(`Script faltante: ${script}`);
        }
    });
    
    // Verificar CSS
    const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    const hasStyles = stylesheets.some(s => s.href.includes('medcore-styles.css'));
    if (!hasStyles) {
        issues.push('Stylesheet faltante: medcore-styles.css');
    }
    
    // Verificar errores en consola
    const originalConsoleError = console.error;
    let errorCount = 0;
    console.error = function(...args) {
        errorCount++;
        originalConsoleError.apply(console, args);
    };
    
    if (issues.length === 0) {
        console.log('✅ No se encontraron problemas comunes');
    } else {
        console.log('❌ Problemas encontrados:');
        issues.forEach(issue => console.log(`   - ${issue}`));
    }
    
    return issues;
}

// Auto-ejecutar validación cuando se carga la página
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            console.log('🚀 Iniciando validación automática...');
            runValidationTests();
        }, 2000);
    });
} else {
    setTimeout(() => {
        console.log('🚀 Iniciando validación automática...');
        runValidationTests();
    }, 2000);
}

// Hacer funciones disponibles globalmente
window.runValidationTests = runValidationTests;
window.testBasicFunctionality = testBasicFunctionality;
window.diagnoseCommonIssues = diagnoseCommonIssues;

console.log('📋 Script de validación cargado. Usa runValidationTests() para ejecutar pruebas manuales.');