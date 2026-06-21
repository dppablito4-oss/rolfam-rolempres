// --- SERVICIO DE INTELIGENCIA ARTIFICIAL (AIService) ---
// Abstracción que gestiona la comunicación con la IA (Supabase Edge Functions / Gemini / Fallback Local)

const SUPABASE_CONFIG = {
    url: "https://dyuadrzdrphzywbnxnhz.supabase.co",      // Se llenará cuando el usuario provee las credenciales
    anonKey: "sb_publishable_rCwOvgVa1kGlO5PFAa8tRg_E1KIWKWX",
    useEdgeFunctions: true
};

// Base de datos de problemas mock de alta calidad para pruebas offline (5 Pasos de Oro)
const MOCK_PROBLEMS = {
    "Edades": {
        "Básico": {
            problem: "La edad de un padre es el triple de la edad de su hijo. Si la suma de ambas edades es 48 años, ¿cuál es la edad de cada uno?",
            solution: `
                <div class="space-y-3">
                    <p><span class="step-pill">Paso 1: Identificar</span> Variable: Edad del hijo = $x$. Edad del padre = $3x$.</p>
                    <p><span class="step-pill">Paso 2: Traducir</span> La suma es 48: $x + 3x = 48$.</p>
                    <p><span class="step-pill">Paso 3: Igualar</span> Ecuación: $4x = 48$.</p>
                    <p><span class="step-pill">Paso 4: Coherencia</span> Resolviendo: $x = 12$.</p>
                    <p><span class="step-pill">Paso 5: Comprobar</span> El hijo tiene 12 años y el padre $3(12) = 36$ años. $12 + 36 = 48$. ¡Correcto!</p>
                </div>
            `
        },
        "Intermedio": {
            problem: "Hace 5 años la edad de María era el doble de la de su prima Lucía. Si hoy sus edades suman 40 años, ¿cuántos años tiene María actualmente?",
            solution: `
                <div class="space-y-3">
                    <p><span class="step-pill">Paso 1: Identificar</span> Hace 5 años: Lucía = $y$, María = $2y$. Hoy: Lucía = $y+5$, María = $2y+5$.</p>
                    <p><span class="step-pill">Paso 2: Traducir</span> La suma actual es 40: $(2y+5) + (y+5) = 40$.</p>
                    <p><span class="step-pill">Paso 3: Igualar</span> Ecuación: $3y + 10 = 40 \\Rightarrow 3y = 30 \\Rightarrow y = 10$.</p>
                    <p><span class="step-pill">Paso 4: Coherencia</span> Edad actual de María: $2(10) + 5 = 25$ años.</p>
                    <p><span class="step-pill">Paso 5: Comprobar</span> Hoy María tiene 25 y Lucía 15 ($10+5$). Suman $25+15 = 40$. Hace 5 años tenían 20 y 10 (María era el doble). ¡Correcto!</p>
                </div>
            `
        },
        "Avanzado": {
            problem: "La edad de un abuelo es hoy el cuádruple de la de su nieto. Hace 10 años era el séxtuple. ¿Dentro de cuántos años la edad del abuelo será el triple de la del nieto?",
            solution: `
                <div class="space-y-3">
                    <p><span class="step-pill">Paso 1: Identificar</span> Hoy: Nieto = $x$, Abuelo = $4x$. Hace 10 años: Nieto = $x-10$, Abuelo = $4x-10$.</p>
                    <p><span class="step-pill">Paso 2: Traducir</span> Hace 10 años era el séxtuple: $4x - 10 = 6(x - 10)$.</p>
                    <p><span class="step-pill">Paso 3: Igualar</span> $4x - 10 = 6x - 60 \\Rightarrow 2x = 50 \\Rightarrow x = 25$. Nieto tiene 25, Abuelo 100.</p>
                    <p><span class="step-pill">Paso 4: Coherencia</span> Buscamos los años futuros $N$ para triple edad: $100 + N = 3(25 + N) \\Rightarrow 100 + N = 75 + 3N \\Rightarrow 2N = 25 \\Rightarrow N = 12.5$ años.</p>
                    <p><span class="step-pill">Paso 5: Comprobar</span> En 12.5 años: Nieto = 37.5, Abuelo = 112.5. $112.5 / 37.5 = 3$. ¡Correcto!</p>
                </div>
            `
        }
    },
    "Geometría": {
        "Básico": {
            problem: "El perímetro de un cuadrado es de 36 cm. ¿Cuánto mide su área?",
            solution: `
                <div class="space-y-3">
                    <p><span class="step-pill">Paso 1: Identificar</span> Lado del cuadrado = $L$. Perímetro = $4L$. Área = $L^2$.</p>
                    <p><span class="step-pill">Paso 2: Traducir</span> $4L = 36$.</p>
                    <p><span class="step-pill">Paso 3: Igualar</span> Lado: $L = 9\\text{ cm}$.</p>
                    <p><span class="step-pill">Paso 4: Coherencia</span> Área: $Area = 9^2 = 81\\text{ cm}^2$.</p>
                    <p><span class="step-pill">Paso 5: Comprobar</span> El perímetro es $9+9+9+9=36$ y el área $9 \\times 9 = 81$. ¡Correcto!</p>
                </div>
            `
        },
        "Intermedio": {
            problem: "El largo de un rectángulo mide 4 metros más que el doble de su ancho. Si el perímetro es de 56 metros, calcula la longitud de sus lados.",
            solution: `
                <div class="space-y-3">
                    <p><span class="step-pill">Paso 1: Identificar</span> Ancho = $x$, Largo = $2x + 4$.</p>
                    <p><span class="step-pill">Paso 2: Traducir</span> Perímetro = $2(\\text{Ancho}) + 2(\\text{Largo}) = 56$.</p>
                    <p><span class="step-pill">Paso 3: Igualar</span> $2(x) + 2(2x + 4) = 56 \\Rightarrow 2x + 4x + 8 = 56 \\Rightarrow 6x = 48 \\Rightarrow x = 8$.</p>
                    <p><span class="step-pill">Paso 4: Coherencia</span> Ancho = 8 m, Largo = $2(8) + 4 = 20$ m.</p>
                    <p><span class="step-pill">Paso 5: Comprobar</span> Perímetro: $2(8) + 2(20) = 16 + 40 = 56$ m. ¡Correcto!</p>
                </div>
            `
        },
        "Avanzado": {
            problem: "En un triángulo rectángulo, la hipotenusa mide 2 cm más que el cateto mayor, y este a su vez mide 2 cm más que el cateto menor. Determina el área del triángulo.",
            solution: `
                <div class="space-y-3">
                    <p><span class="step-pill">Paso 1: Identificar</span> Cateto menor = $x$, Cateto mayor = $x+2$, Hipotenusa = $x+4$.</p>
                    <p><span class="step-pill">Paso 2: Traducir</span> Aplicando Teorema de Pitágoras: $x^2 + (x+2)^2 = (x+4)^2$.</p>
                    <p><span class="step-pill">Paso 3: Igualar</span> $x^2 + x^2 + 4x + 4 = x^2 + 8x + 16 \\Rightarrow x^2 - 4x - 12 = 0$.</p>
                    <p><span class="step-pill">Paso 4: Coherencia</span> Factorizando: $(x-6)(x+2) = 0 \\Rightarrow x=6$ (el valor de longitud debe ser positivo).</p>
                    <p><span class="step-pill">Paso 5: Comprobar</span> Catetos: 6 y 8, Hipotenusa: 10 ($6^2 + 8^2 = 100$). Área = $\\frac{6 \\times 8}{2} = 24\\text{ cm}^2$. ¡Correcto!</p>
                </div>
            `
        }
    }
};

class AIService {
    static async generateMockProblem(topic, difficulty) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const topicGroup = MOCK_PROBLEMS[topic] || MOCK_PROBLEMS["Edades"];
                const item = topicGroup[difficulty] || topicGroup["Básico"];
                resolve({
                    problem: item.problem,
                    solution: item.solution
                });
            }, 800);
        });
    }

    static async analyzeMockProblem(text) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`
                    <div class="space-y-3">
                        <p class="font-semibold text-cyan-400">Análisis Automatizado Local (Failsafe):</p>
                        <p><span class="step-pill">1. Identificación</span> Hemos analizado tu problema: <em>"${text.substring(0, 50)}..."</em></p>
                        <p class="mt-2 text-slate-300">Este es un análisis estructurado de respaldo local. Para habilitar traducciones en tiempo real mediante DeepSeek/Gemini, recuerda levantar tus Edge Functions en Supabase.</p>
                        <div class="bg-slate-950 p-3 rounded font-mono text-[11px] text-cyan-400 border border-slate-800">
                            Ecuación estimada: $Ax + B = C$
                        </div>
                    </div>
                `);
            }, 1000);
        });
    }

    static async generateProblem(topic, difficulty) {
        let challenge;
        if (SUPABASE_CONFIG.useEdgeFunctions && SUPABASE_CONFIG.url) {
            try {
                challenge = await this.callSupabaseFunction("generate-challenge", { topic, difficulty });
            } catch (e) {
                console.warn("Edge Function falló o no existe. Usando generador local de respaldo:", e);
                challenge = await this.generateMockProblem(topic, difficulty);
            }
        } else {
            challenge = await this.generateMockProblem(topic, difficulty);
        }

        // Registrar en la tabla exposicion_retos de Supabase si está configurado
        if (SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey) {
            try {
                const supabaseClient = window.supabase;
                if (supabaseClient) {
                    const client = supabaseClient.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
                    await client.from('exposicion_retos').insert({
                        topic: topic,
                        difficulty: difficulty,
                        problem_text: challenge.problem,
                        solution_html: challenge.solution
                    });
                    console.log("Desafío guardado en la tabla Supabase 'exposicion_retos'");
                }
            } catch (e) {
                console.error("Error al registrar en exposicion_retos:", e);
            }
        }
        
        return challenge;
    }

    static async analyzeProblem(text) {
        let analysis;
        if (SUPABASE_CONFIG.useEdgeFunctions && SUPABASE_CONFIG.url) {
            try {
                analysis = await this.callSupabaseFunction("analyze-equation", { text });
            } catch (e) {
                console.warn("Edge Function de análisis falló o no existe. Usando solucionador local de respaldo:", e);
                analysis = await this.analyzeMockProblem(text);
            }
        } else {
            analysis = await this.analyzeMockProblem(text);
        }

        // Registrar análisis en la tabla exposicion_retos si está configurado
        if (SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey) {
            try {
                const supabaseClient = window.supabase;
                if (supabaseClient) {
                    const client = supabaseClient.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
                    await client.from('exposicion_retos').insert({
                        topic: "Análisis de Entrada",
                        difficulty: "Personalizado",
                        problem_text: text,
                        solution_html: analysis
                    });
                    console.log("Análisis registrado en la tabla Supabase 'exposicion_retos'");
                }
            } catch (e) {
                console.error("Error al registrar análisis en exposicion_retos:", e);
            }
        }

        return analysis;
    }

    static async callSupabaseFunction(endpoint, payload) {
        const targetUrl = `${SUPABASE_CONFIG.url}/functions/v1/${endpoint}`;
        try {
            const response = await fetch(targetUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${SUPABASE_CONFIG.anonKey}`
                },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            return await response.json();
        } catch (e) {
            console.error("Error en Supabase Edge Function:", e);
            throw new Error("No se pudo conectar con la Edge Function de Supabase. Revisa las credenciales e intenta de nuevo.");
        }
    }
}

// --- CONFIGURACIÓN DE CONEXIÓN REMOTA REALTIME (INSPIRADO EN PABLITOEXPO) ---
class RemoteUplinkService {
    constructor(presentationController) {
        this.controller = presentationController;
        this.channel = null;
        this.laserEl = document.getElementById('virtual-laser');
        this.laserActiveTimeout = null;
        
        // Coordenadas del láser
        this.laserX = window.innerWidth / 2;
        this.laserY = window.innerHeight / 2;
        
        this.init();
    }
    
    init() {
        if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) {
            console.log("Supabase no configurado. Iniciando en modo local.");
            return;
        }
        
        const supabaseClient = window.supabase;
        if (!supabaseClient) {
            console.warn("Supabase SDK no cargado en el navegador.");
            return;
        }
        
        const client = supabaseClient.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
        this.channel = client.channel('presentation-planteo-ecuaciones');
        
        this.channel
            .on('broadcast', { event: 'navigate' }, (payload) => {
                if (payload.payload.direction === 'next') {
                    this.controller.next();
                } else if (payload.payload.direction === 'prev') {
                    this.controller.prev();
                }
            })
            .on('broadcast', { event: 'laser-move' }, (payload) => {
                this.moveLaser(payload.payload.dx, payload.payload.dy);
            })
            .on('broadcast', { event: 'remote-scroll' }, (payload) => {
                if (!document.body.classList.contains('presenter-mode')) {
                    window.scrollBy({ top: payload.payload.deltaY, behavior: 'auto' });
                }
            })
            .subscribe((status) => {
                if (status === 'SUBSCRIBED') {
                    this.controller.showToast("Uplink Remoto Enlazado con Supabase", "success");
                }
            });
    }
    
    moveLaser(dx, dy) {
        if (!this.laserEl) return;
        
        this.laserEl.style.opacity = '1';
        
        const sensitivity = 2.0;
        this.laserX += dx * window.innerWidth * sensitivity;
        this.laserY += dy * window.innerHeight * sensitivity;
        
        this.laserX = Math.max(0, Math.min(this.laserX, window.innerWidth));
        this.laserY = Math.max(0, Math.min(this.laserY, window.innerHeight));
        
        this.laserEl.style.left = `${this.laserX}px`;
        this.laserEl.style.top = `${this.laserY}px`;
        
        clearTimeout(this.laserActiveTimeout);
        this.laserActiveTimeout = setTimeout(() => {
            this.laserEl.style.opacity = '0';
        }, 1500);
    }
}

// --- LÓGICA DE CONTROL DE LA PRESENTACIÓN ---
class PresentationController {
    constructor() {
        this.slides = document.querySelectorAll('.slide-container');
        this.currentIndex = 0;
        this.slideWrapper = document.querySelector('.slide-wrapper');
        this.toastContainer = document.getElementById('toast-container');
        
        this.init();
    }

    init() {
        this.updateView();
        this.setupEventListeners();
        this.setupAutoScaling();
        this.setupScrollReveal();
        
        // Inicializar Uplink Remoto
        this.uplink = new RemoteUplinkService(this);
        
        // Renderizado inicial de fórmulas KaTeX
        this.renderMath();
    }

    setupEventListeners() {
        // Atajos de Teclado (solo activos en modo presentador)
        window.addEventListener('keydown', (e) => {
            if (document.body.classList.contains('presenter-mode')) {
                if (e.key === 'ArrowRight' || e.key === ' ') {
                    e.preventDefault();
                    this.next();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.prev();
                }
            }
        });

        // Escuchar redimensionamiento
        window.addEventListener('resize', () => this.handleScale());
    }

    setupAutoScaling() {
        this.handleScale();
    }

    setupScrollReveal() {
        // Observer para activar la animación de subida (fade up) al hacer scroll
        const revealElements = document.querySelectorAll('.reveal');
        
        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -100px 0px"
        };
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        revealElements.forEach(el => revealObserver.observe(el));
    }

    handleScale() {
        if (!document.body.classList.contains('presenter-mode') || !this.slideWrapper) {
            if (this.slideWrapper) this.slideWrapper.style.transform = 'none';
            return;
        }

        const baseWidth = 1280;
        const baseHeight = 700;
        
        const scaleX = window.innerWidth / baseWidth;
        const scaleY = window.innerHeight / baseHeight;
        
        const scale = Math.min(scaleX, scaleY) * 0.95; 
        
        this.slideWrapper.style.transform = `scale(${scale})`;
    }

    updateView() {
        const isPresenter = document.body.classList.contains('presenter-mode');
        
        this.slides.forEach((slide, index) => {
            if (isPresenter) {
                if (index === this.currentIndex) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            } else {
                slide.classList.add('active');
            }
        });

        const indicator = document.getElementById('slide-indicator');
        if (indicator) {
            indicator.innerText = `${this.currentIndex + 1} / ${this.slides.length}`;
        }
        
        this.handleScale();
    }

    next() {
        if (this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
            this.updateView();
        } else {
            this.showToast("Ya estás en la sección final de la clase.", "info");
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateView();
        } else {
            this.showToast("Estás en la sección de portada.", "info");
        }
    }

    setMode(mode) {
        const header = document.querySelector('header');
        const pBar = document.getElementById('presenter-bar');
        
        if (mode === 'presenter') {
            document.body.classList.add('presenter-mode');
            document.body.classList.remove('scroll-mode');
            if (pBar) pBar.style.display = 'flex';
            if (header) header.style.display = 'none';
        } else {
            document.body.classList.remove('presenter-mode');
            document.body.classList.add('scroll-mode');
            if (pBar) pBar.style.display = 'none';
            if (header) header.style.display = 'flex';
        }
        this.currentIndex = 0;
        this.updateView();
    }

    renderMath() {
        if (window.renderMathInElement) {
            window.renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ],
                throwOnError: false
            });
        }
    }

    showToast(message, type = 'info') {
        if (!this.toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `px-4 py-3 rounded-lg shadow-lg text-xs font-semibold flex items-center gap-2 border transition-all duration-300 transform translate-y-2 opacity-0`;
        
        let icon = '<i class="fa-solid fa-circle-info"></i>';
        if (type === 'error') {
            toast.className += ' bg-rose-950/90 border-rose-800 text-rose-200';
            icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
        } else if (type === 'warning') {
            toast.className += ' bg-amber-950/90 border-amber-800 text-amber-200';
            icon = '<i class="fa-solid fa-circle-exclamation"></i>';
        } else if (type === 'success') {
            toast.className += ' bg-emerald-950/90 border-emerald-800 text-emerald-200';
            icon = '<i class="fa-solid fa-circle-check"></i>';
        } else {
            toast.className += ' bg-cyan-950/90 border-cyan-800 text-cyan-200';
            icon = '<i class="fa-solid fa-sparkles"></i>';
        }

        toast.innerHTML = `${icon} <span>${message}</span>`;
        this.toastContainer.appendChild(toast);

        // Forzar reflow para animación
        setTimeout(() => {
            toast.classList.remove('translate-y-2', 'opacity-0');
        }, 10);

        setTimeout(() => {
            toast.classList.add('opacity-0', 'scale-95');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    }
}

// Inicializar la presentación globalmente
let presentation;
document.addEventListener('DOMContentLoaded', () => {
    presentation = new PresentationController();
    
    // Configurar botones de modo en el header
    const btnTogglePresenter = document.getElementById('btn-toggle-presenter');
    
    if (btnTogglePresenter) {
        btnTogglePresenter.addEventListener('click', () => {
            const isScrollMode = document.body.classList.contains('scroll-mode');
            if (isScrollMode) {
                presentation.setMode('presenter');
            } else {
                presentation.setMode('scroll');
            }
        });
    }
    
    // Listener para volver desde la barra de presentación
    const pBar = document.getElementById('presenter-bar');
    if (pBar) {
        if (!document.getElementById('btn-exit-presenter')) {
            const backBtn = document.createElement('button');
            backBtn.id = 'btn-exit-presenter';
            backBtn.setAttribute('aria-label', 'Volver al modo de lectura web continuo');
            backBtn.className = 'ml-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2.5 rounded-full text-xs font-bold transition-all';
            backBtn.innerHTML = '<i class="fa-solid fa-house mr-1.5"></i> Volver a Web';
            backBtn.onclick = () => {
                presentation.setMode('scroll');
            };
            pBar.appendChild(backBtn);
        }
    }
});

// Función expuesta en consola global para exportar las soluciones a PDF
window.exportSolutionsToPDF = () => {
    const wasPresenterMode = document.body.classList.contains('presenter-mode');
    if (wasPresenterMode) {
        presentation.setMode('scroll');
    }
    
    setTimeout(() => {
        window.print();
        if (wasPresenterMode) {
            presentation.setMode('presenter');
        }
    }, 300);
};

// Puentes de funciones globales para clics en botones HTML
let lastSolutionHtml = "";

async function generateAIProblem() {
    const diff = document.getElementById('select-diff').value;
    const topic = document.getElementById('select-topic').value;
    const btn = document.getElementById('btn-generate-ai');
    const output = document.getElementById('ai-problem-output');
    const btnSol = document.getElementById('btn-reveal-solution');

    output.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full gap-2">
            <i class="fa-solid fa-spinner animate-spin text-cyan-400 text-2xl"></i>
            <p class="text-xs text-slate-400">Generando tu desafío matemático...</p>
        </div>
    `;
    btn.disabled = true;
    btnSol.disabled = true;

    try {
        const challenge = await AIService.generateProblem(topic, diff);
        output.innerHTML = `
            <div class="space-y-3 font-sans">
                <p class="text-xs text-cyan-400 font-semibold uppercase tracking-wider">¡Nuevo Desafío Generado!</p>
                <p class="text-slate-200 leading-relaxed text-sm">${challenge.problem}</p>
            </div>
        `;
        lastSolutionHtml = challenge.solution;
        btnSol.disabled = false;
        
        // Re-renderizar KaTeX en el contenedor
        presentation.renderMath();
    } catch (e) {
        presentation.showToast(e.message, 'error');
        output.innerHTML = `<span class="text-rose-400">Error: ${e.message}</span>`;
    } finally {
        btn.disabled = false;
    }
}

function toggleAISolution() {
    if (!lastSolutionHtml) return;
    const output = document.getElementById('ai-problem-output');
    output.innerHTML += `
        <div class="mt-4 pt-4 border-t border-slate-800 text-slate-300 animate-fade-in font-sans">
            <p class="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-2">Resolución Paso a Paso:</p>
            <div class="text-xs bg-slate-900/60 p-3 rounded border border-slate-800 space-y-2">
                ${lastSolutionHtml}
            </div>
        </div>
    `;
    document.getElementById('btn-reveal-solution').disabled = true;
    
    // Re-renderizar KaTeX en el contenedor
    presentation.renderMath();
}

async function analyzeUserProblem() {
    const text = document.getElementById('user-problem-input').value.trim();
    const btn = document.getElementById('btn-analyze-ai');
    const output = document.getElementById('ai-analysis-output');

    if (!text) {
        presentation.showToast("Por favor, escribe un problema antes de analizar.", "warning");
        return;
    }

    output.innerHTML = `
        <div class="flex flex-col items-center justify-center h-full gap-2">
            <i class="fa-solid fa-circle-notch animate-spin text-cyan-400 text-2xl"></i>
            <p class="text-xs text-slate-400">Analizando el texto y mapeando ecuaciones...</p>
        </div>
    `;
    btn.disabled = true;

    try {
        const analysis = await AIService.analyzeProblem(text);
        output.innerHTML = `<div class="space-y-2 font-sans">${analysis}</div>`;
        
        // Re-renderizar KaTeX en el contenedor
        presentation.renderMath();
    } catch (e) {
        presentation.showToast(e.message, 'error');
        output.innerHTML = `<span class="text-rose-400">Error: ${e.message}</span>`;
    } finally {
        btn.disabled = false;
    }
}

// Expone para compatibilidad con controles del HTML plano si existieran
window.prevSlide = () => presentation && presentation.prev();
window.nextSlide = () => presentation && presentation.next();
window.toggleAISolution = toggleAISolution;
window.generateAIProblem = generateAIProblem;
window.analyzeUserProblem = analyzeUserProblem;
