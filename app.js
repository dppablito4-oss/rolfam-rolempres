// ═══════════════════════════════════════════════════════════════════════════
// ECUACIONES.IO — LÓGICA DE LA APLICACIÓN ESTILO NETFLIX
// ═══════════════════════════════════════════════════════════════════════════

// ── Supabase Configuration ──────────────────────────────────────────────────
const SUPABASE_CONFIG = {
    url: "https://dyuadrzdrphzywbnxnhz.supabase.co",
    // Nota: Esta clave anónima es segura para exponer en el frontend gracias a las políticas RLS de Supabase.
    anonKey: "sb_publishable_rCwOvgVa1kGlO5PFAa8tRg_E1KIWKWX",
    useEdgeFunctions: true
};

const supabaseClient = (typeof window !== 'undefined' && window.supabase && SUPABASE_CONFIG.url) 
    ? window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey) 
    : null;

// ── Slide Data (contenido de cada diapositiva para modal y presentador) ─────
const SLIDES_DATA = {
    'slide-planteo': {
        title: '¿Qué significa "Plantear"?',
        icon: '🎓',
        heroColor: 'linear-gradient(135deg, #1a0000, #2d0000)',
        coverImage: 'assets/images/math_red_cover.png',
        description: 'Proceso riguroso de traducción lingüística y conceptual del lenguaje cotidiano al lenguaje formal matemático.',
        content: `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center;">
                <div>
                    <p style="font-size:1.05rem;color:var(--color-text-secondary);margin-bottom:20px;">
                        Plantear una ecuación es un riguroso proceso de <strong>traducción lingüística y conceptual</strong>.
                    </p>
                    <div class="modal-math-box" style="text-align:center;">
                        <span style="font-size:1.1rem;font-weight:700;">Lenguaje Verbal (Mundo Real)</span><br>
                        <span style="font-size:2rem;color:var(--color-accent);display:block;margin:8px 0;">↓</span>
                        <span style="font-size:1.1rem;font-weight:700;color:var(--color-accent);">Lenguaje Formal (Ecuación)</span>
                    </div>
                    <p style="color:var(--color-text-muted);font-size:0.9rem;margin-top:16px;">
                        Es la base fundamental del modelado de sistemas físicos, económicos y astronómicos.
                    </p>
                </div>
                <div style="background:rgba(229,9,20,0.04);border-radius:12px;padding:24px;text-align:center;border:1px solid rgba(229,9,20,0.1);">
                    <div style="font-size:5rem;margin-bottom:16px;">📝</div>
                    <div style="font-family:var(--font-mono);color:var(--color-accent);font-size:1.2rem;">"La suma de dos números es 48"</div>
                    <div style="font-size:1.5rem;color:var(--color-text-muted);margin:12px 0;">↓</div>
                    <div style="font-family:var(--font-mono);color:#fff;font-size:1.4rem;">$x + y = 48$</div>
                </div>
            </div>`
    },
    'slide-pasos': {
        title: 'Los 5 Pasos de Oro',
        icon: '✅',
        heroColor: 'linear-gradient(135deg, #001a0d, #002614)',
        coverImage: 'assets/images/math_green_cover.png',
        description: 'La metodología probada para plantear cualquier ecuación de forma sistemática y sin errores.',
        content: `
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:16px;">
                ${[
                    ['🔍','1. Identificar','Aislar y definir claramente las variables o incógnitas del sistema.'],
                    ['🗣️','2. Traducir','Mapear los conectores lógicos de cantidad a operadores algebraicos.'],
                    ['⚖️','3. Igualar','Establecer el punto de balance o igualdad de la ecuación.']
                ].map(([icon,title,desc]) => `
                    <div style="background:rgba(229,9,20,0.05);border:1px solid rgba(229,9,20,0.15);border-radius:10px;padding:20px;text-align:center;">
                        <div style="font-size:2.5rem;margin-bottom:12px;">${icon}</div>
                        <div style="font-weight:700;font-family:var(--font-heading);margin-bottom:8px;color:var(--color-accent);">${title}</div>
                        <p style="font-size:0.8rem;color:var(--color-text-muted);">${desc}</p>
                    </div>`).join('')}
            </div>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;">
                ${[
                    ['📐','4. Coherencia','Asegurar homogeneidad dimensional de todos los términos (unidades).'],
                    ['✔️','5. Comprobar','Validar la consistencia lógica del resultado en el contexto original.']
                ].map(([icon,title,desc]) => `
                    <div style="background:rgba(229,9,20,0.05);border:1px solid rgba(229,9,20,0.15);border-radius:10px;padding:20px;text-align:center;">
                        <div style="font-size:2.5rem;margin-bottom:12px;">${icon}</div>
                        <div style="font-weight:700;font-family:var(--font-heading);margin-bottom:8px;color:var(--color-accent);">${title}</div>
                        <p style="font-size:0.8rem;color:var(--color-text-muted);">${desc}</p>
                    </div>`).join('')}
            </div>`
    },
    'slide-diccionario': {
        title: 'Diccionario de Traducción Rápida',
        icon: '📖',
        heroColor: 'linear-gradient(135deg, #00102d, #001a45)',
        coverImage: 'assets/images/math_blue_cover.png',
        description: 'Referencia rápida de palabras clave y sus operadores matemáticos equivalentes.',
        content: `
            <table class="modal-table">
                <thead>
                    <tr>
                        <th>Término Verbal Común</th>
                        <th>Operador Matemático</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>"El doble de un valor", "El triple de un valor"</td><td class="mono">$2x$ / $3x$</td></tr>
                    <tr><td>"Aumentado en", "Disminuido en", "Excede a"</td><td class="mono">$+k$ / $-k$ / $A - B = k$</td></tr>
                    <tr><td>"Tres números consecutivos"</td><td class="mono">$x, x+1, x+2$</td></tr>
                    <tr><td>"Es equivalente a", "Representa", "Nos da"</td><td class="mono">$=$</td></tr>
                    <tr><td>"La mitad de", "La tercera parte de"</td><td class="mono">$x/2$ / $x/3$</td></tr>
                    <tr><td>"Más que", "Menos que"</td><td class="mono">$A + k$ / $A - k$</td></tr>
                </tbody>
            </table>`
    },
    'slide-errores': {
        title: '¡Cuidado! Evita estos Errores',
        icon: '⚠️',
        heroColor: 'linear-gradient(135deg, #1a0000, #2d0000)',
        coverImage: 'assets/images/math_red_cover.png',
        description: 'Los tres errores más frecuentes al plantear ecuaciones y cómo evitarlos.',
        content: `
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;">
                ${[
                    ['❌','Olvidar Paréntesis','Al multiplicar el "doble de la suma", el multiplicador afecta a todos los términos dentro.'],
                    ['⚠️','Mezclar Unidades','No operes minutos con horas o metros con centímetros sin antes hacer la conversión.'],
                    ['🤔','Resultados Absurdos','Si el cálculo de una edad da fraccionario o negativo, revisa el planteamiento original.']
                ].map(([icon,title,desc]) => `
                    <div style="background:rgba(229,9,20,0.08);border:1px solid rgba(229,9,20,0.25);border-radius:12px;padding:24px;text-align:center;">
                        <div style="font-size:3rem;margin-bottom:12px;">${icon}</div>
                        <h3 style="font-weight:700;font-family:var(--font-heading);margin-bottom:10px;color:#fff;">${title}</h3>
                        <p style="font-size:0.85rem;color:var(--color-text-muted);">${desc}</p>
                    </div>`).join('')}
            </div>`
    },
    'slide-resumen': {
        title: 'En Resumen...',
        icon: '🏆',
        heroColor: 'linear-gradient(135deg, #0a1a00, #102400)',
        coverImage: 'assets/images/math_olive_cover.png',
        description: 'Las 4 claves fundamentales que garantizan el éxito en el planteo de ecuaciones.',
        content: `
            <ul style="list-style:none;display:flex;flex-direction:column;gap:20px;">
                ${[
                    'Lee el problema al menos 3 veces antes de estructurar variables.',
                    'Traduce palabra por palabra metódicamente al lenguaje formal.',
                    'Conserva el orden en cada una de las operaciones algebraicas.',
                    'Comprueba siempre el valor obtenido con el enunciado original.'
                ].map(tip => `
                    <li style="display:flex;align-items:center;gap:16px;font-size:1.05rem;color:var(--color-text-secondary);">
                        <span style="color:#46d369;font-size:1.5rem;flex-shrink:0;">✓</span>
                        ${tip}
                    </li>`).join('')}
            </ul>`
    },
    'slide-ej1': {
        title: 'Ejemplo 1: Suma de Consecutivos',
        icon: '1️⃣',
        heroColor: 'linear-gradient(135deg, #00102d, #001a45)',
        coverImage: 'assets/images/math_blue_cover.png',
        description: 'Problema clásico de aritmética: la suma de tres números enteros consecutivos es 72.',
        content: `
            <h3 style="font-size:1.1rem;color:var(--color-text-secondary);margin-bottom:20px;">
                <strong>Problema:</strong> La suma de tres números consecutivos es 72. Hallar los números.
            </h3>
            <div class="modal-math-box">
                <p><span class="modal-step-pill">Paso 1</span> Variables: Sean los números $x$, $x+1$, $x+2$</p>
                <p style="margin-top:10px;"><span class="modal-step-pill">Paso 2</span> Ecuación: $$x + (x+1) + (x+2) = 72$$</p>
                <p style="margin-top:10px;"><span class="modal-step-pill">Paso 3</span> Simplificar: $$3x + 3 = 72 \\Rightarrow 3x = 69 \\Rightarrow x = 23$$</p>
            </div>
            <div class="modal-solution-tag">
                <i class="fa-solid fa-circle-check"></i>
                Solución: Los números son <strong style="margin-left:4px;">23, 24 y 25</strong>.
            </div>`
    },
    'slide-ej2': {
        title: 'Ejemplo 2: Operadores Combinados',
        icon: '2️⃣',
        heroColor: 'linear-gradient(135deg, #00102d, #001a45)',
        coverImage: 'assets/images/math_olive_cover.png',
        description: 'El doble de un número aumentado en 5 es igual a 21. Encuentra el número.',
        content: `
            <h3 style="font-size:1.1rem;color:var(--color-text-secondary);margin-bottom:20px;">
                <strong>Problema:</strong> El doble de un número aumentado en 5 es igual a 21.
            </h3>
            <div class="modal-math-box">
                <p><span class="modal-step-pill">Ecuación</span> $$2x + 5 = 21$$</p>
                <p style="margin-top:12px;"><span class="modal-step-pill">Solución</span> $$2x = 16 \\Rightarrow x = 8$$</p>
            </div>
            <p style="font-size:0.85rem;color:var(--color-text-muted);margin-top:16px;background:rgba(229,9,20,0.05);padding:12px;border-radius:8px;border-left:3px solid var(--color-accent);">
                ⚠️ Un error común es interpretar el enunciado como $2(x+5)$, lo cual alteraría el resultado.
            </p>
            <div class="modal-solution-tag"><i class="fa-solid fa-circle-check"></i> Solución: el número es <strong style="margin-left:4px;">8</strong>.</div>`
    },
    'slide-ej3': {
        title: 'Ejemplo 3: Edades (Línea Temporal)',
        icon: '3️⃣',
        heroColor: 'linear-gradient(135deg, #002014, #001a10)',
        coverImage: 'assets/images/math_green_cover.png',
        description: 'Problema clásico de edades con desplazamiento temporal futuro.',
        content: `
            <h3 style="font-size:1rem;color:var(--color-text-secondary);margin-bottom:16px;">
                <strong>Problema:</strong> La edad de Ana es el triple de la de su hijo. Dentro de 10 años será el doble. ¿Qué edad tiene cada uno?
            </h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
                <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:16px;text-align:center;">
                    <div style="font-size:0.7rem;text-transform:uppercase;color:var(--color-text-faint);font-weight:700;margin-bottom:10px;">Estado Actual</div>
                    <p style="font-family:var(--font-mono);">Hijo: $x$</p>
                    <p style="font-family:var(--font-mono);">Ana: $3x$</p>
                </div>
                <div style="background:rgba(255,255,255,0.04);border-radius:8px;padding:16px;text-align:center;">
                    <div style="font-size:0.7rem;text-transform:uppercase;color:var(--color-text-faint);font-weight:700;margin-bottom:10px;">En 10 años</div>
                    <p style="font-family:var(--font-mono);">Hijo: $x + 10$</p>
                    <p style="font-family:var(--font-mono);">Ana: $3x + 10$</p>
                </div>
            </div>
            <div class="modal-math-box">
                <p><span class="modal-step-pill">Igualdad</span> $$3x + 10 = 2(x + 10) \\Rightarrow x = 10$$</p>
            </div>
            <div class="modal-solution-tag"><i class="fa-solid fa-circle-check"></i> Ana tiene <strong style="margin:0 4px;">30 años</strong>; su hijo tiene <strong style="margin:0 4px;">10 años</strong>.</div>`
    },
    'slide-ej4': {
        title: 'Ejemplo 4: Modelado Geométrico',
        icon: '4️⃣',
        heroColor: 'linear-gradient(135deg, #00102d, #001a45)',
        coverImage: 'assets/images/math_blue_cover.png',
        description: 'Hallar las dimensiones de un rectángulo dado su perímetro.',
        content: `
            <h3 style="font-size:1rem;color:var(--color-text-secondary);margin-bottom:16px;">
                <strong>Problema:</strong> En un rectángulo, el largo es 4 cm mayor que el ancho y su perímetro es 32 cm.
            </h3>
            <div class="modal-math-box">
                <p>Ancho: $x$ · Largo: $x + 4$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Perímetro</span> $$2(x) + 2(x + 4) = 32$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Cálculo</span> $$4x + 8 = 32 \\Rightarrow 4x = 24 \\Rightarrow x = 6$$</p>
            </div>
            <div class="modal-solution-tag"><i class="fa-solid fa-circle-check"></i> Ancho = <strong style="margin:0 4px;">6 cm</strong> · Largo = <strong style="margin:0 4px;">10 cm</strong>.</div>`
    },
    'slide-ej5': {
        title: 'Ejemplo 5: Reparto de Cantidades',
        icon: '5️⃣',
        heroColor: 'linear-gradient(135deg, #002014, #001a10)',
        coverImage: 'assets/images/math_red_cover.png',
        description: 'Se reparten 50 caramelos entre dos niños: uno recibe 10 más que el otro.',
        content: `
            <h3 style="font-size:1rem;color:var(--color-text-secondary);margin-bottom:16px;">
                <strong>Problema:</strong> Se reparten 50 caramelos entre dos niños de modo que uno recibe 10 más que el otro.
            </h3>
            <div class="modal-math-box">
                <p>Niño A: $x$ · Niño B: $x + 10$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$x + (x + 10) = 50$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Solución</span> $$2x = 40 \\Rightarrow x = 20$$</p>
            </div>
            <div class="modal-solution-tag"><i class="fa-solid fa-circle-check"></i> Niño A = <strong style="margin:0 4px;">20</strong> · Niño B = <strong style="margin:0 4px;">30</strong> caramelos.</div>`
    },
    'slide-ej6': {
        title: 'Reto UNI I — Edades en el Tiempo',
        icon: '⭐',
        heroColor: 'linear-gradient(135deg, #1a0030, #0d0020)',
        description: 'Problema de preselección UNI con razones temporales. Calcular a+b.',
        content: `
            <p style="font-size:0.9rem;color:var(--color-text-muted);margin-bottom:16px;border-left:3px solid #a78bfa;padding-left:12px;">
                <strong>Problema (UNI):</strong> La edad de A hace $a$ años era a la de B como 5:4. Dentro de $b$ años la razón será 7:6. La suma de edades es 46 y la diferencia es 4. Calcule $a+b$.
            </p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div style="background:rgba(167,139,250,0.05);border:1px solid rgba(167,139,250,0.2);border-radius:10px;padding:16px;">
                    <p style="font-weight:700;color:#a78bfa;margin-bottom:8px;font-size:0.85rem;">1. Invariante Temporal:</p>
                    <div class="modal-math-box" style="border-color:#a78bfa;background:rgba(167,139,250,0.04);">
                        $$A - B = 4 \\quad \\land \\quad A + B = 46$$
                        <p style="color:#46d369;font-weight:700;text-align:center;margin-top:8px;">A = 25 años, B = 21 años</p>
                    </div>
                </div>
                <div style="background:rgba(167,139,250,0.05);border:1px solid rgba(167,139,250,0.2);border-radius:10px;padding:16px;">
                    <p style="font-weight:700;color:#a78bfa;margin-bottom:8px;font-size:0.85rem;">2. Razones Temporales:</p>
                    <div class="modal-math-box" style="border-color:#a78bfa;background:rgba(167,139,250,0.04);">
                        <p style="font-size:0.85rem;">Pasado: $$\\frac{25-a}{21-a} = \\frac{5}{4} \\Rightarrow a=5$$</p>
                        <p style="font-size:0.85rem;">Futuro: $$\\frac{25+b}{21+b} = \\frac{7}{6} \\Rightarrow b=3$$</p>
                    </div>
                </div>
            </div>
            <div class="modal-solution-tag"><i class="fa-solid fa-circle-check"></i> Resultado: $a + b = 5 + 3 = $ <strong style="margin-left:6px;font-size:1.3rem;color:#46d369;">8</strong></div>`
    },
    'slide-ej7': {
        title: 'Reto UNI II — Modelado Diofántico',
        icon: '⭐⭐',
        heroColor: 'linear-gradient(135deg, #1a0030, #0d0020)',
        description: 'Ecuación diofántica con restricción de enteros positivos. Cantidad máxima de textos.',
        content: `
            <p style="font-size:0.9rem;color:var(--color-text-muted);margin-bottom:16px;border-left:3px solid #a78bfa;padding-left:12px;">
                <strong>Problema (UNI):</strong> Textos de Física a $30 y de Química a $20. Gastó $500. Los de Química exceden al doble de Física. Determina la cantidad máxima de textos de Química.
            </p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                <div style="background:rgba(167,139,250,0.05);border:1px solid rgba(167,139,250,0.2);border-radius:10px;padding:16px;">
                    <p style="font-weight:700;color:#a78bfa;margin-bottom:8px;font-size:0.85rem;">1. Ecuación Diofántica:</p>
                    <div class="modal-math-box" style="border-color:#a78bfa;background:rgba(167,139,250,0.04);">
                        $$30x + 20y = 500 \\Rightarrow 3x + 2y = 50$$
                        <p style="font-size:0.8rem;color:var(--color-text-muted);margin-top:8px;">$y = 25 - 1.5x$. Para $y$ entero, $x$ debe ser par.</p>
                    </div>
                </div>
                <div style="background:rgba(167,139,250,0.05);border:1px solid rgba(167,139,250,0.2);border-radius:10px;padding:16px;">
                    <p style="font-weight:700;color:#a78bfa;margin-bottom:8px;font-size:0.85rem;">2. Restricción $y > 2x$:</p>
                    <ul style="list-style:none;font-size:0.82rem;color:var(--color-text-muted);display:flex;flex-direction:column;gap:6px;">
                        <li>$x=2 \\Rightarrow y=22$ ✓ <span style="color:#46d369;font-weight:700;">(Cumple: 22 > 4)</span></li>
                        <li>$x=4 \\Rightarrow y=19$ ✓ <span style="color:#46d369;">(Cumple: 19 > 8)</span></li>
                        <li>$x=6 \\Rightarrow y=16$ ✓ <span style="color:#46d369;">(Cumple: 16 > 12)</span></li>
                        <li>$x=8 \\Rightarrow y=13$ ✗ <span style="color:#e50914;">(No cumple: 13 ≯ 16)</span></li>
                    </ul>
                </div>
            </div>
            <div class="modal-solution-tag"><i class="fa-solid fa-circle-check"></i> Máximo de textos de Química: <strong style="margin-left:6px;font-size:1.3rem;color:#46d369;">22</strong></div>`
    }
};

// ── Torneo Data (3 bloques x 5 niveles) ─────────────────────────────────────
const DEFAULT_TORNEO_BLOCKS = [
    // ══════════ BLOQUE 1 ══════════
    {
        id: 'bloque-1',
        nombre: 'Bloque 1 — Clásicos de Planteo',
        color: '#e50914',
        preguntas: [
            {
                nivel: 1,
                titulo: 'Nivel 1: El Número Misterioso',
                subtitulo: 'Básico · Traducción directa',
                icono: '🔢',
                ecuacion: '2x + 12 = 42',
                enunciado: 'El doble de un número, aumentado en 12, es igual a 42. Hallar el número.',
                planteamiento: `<p><span class="modal-step-pill">Incógnita</span> El número desconocido: $x$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Traducción</span> El doble del número: $2x$. Aumentado en 12: $+12$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$2x + 12 = 42$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> Restamos 12 a ambos lados: $$2x = 42 - 12 = 30$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 2</span> Dividimos entre 2: $$x = \\frac{30}{2} = 15$$</p>`,
                respuesta: 'El número es <strong>15</strong>.'
            },
            {
                nivel: 2,
                titulo: 'Nivel 2: Los Hermanos Consecutivos',
                subtitulo: 'Intermedio-Bajo · Consecutivos',
                icono: '👫',
                ecuacion: 'x + (x+1) + (x+2) = 105',
                enunciado: 'La suma de tres números enteros consecutivos es igual a 105. ¿Cuál es el número mayor?',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Primer número: $x$. Segundo: $x+1$. Tercero (mayor): $x+2$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$x + (x+1) + (x+2) = 105$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> Agrupamos términos semejantes: $$3x + 3 = 105$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 2</span> $$3x = 102 \\Rightarrow x = 34$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 3</span> El mayor es $x + 2 = 34 + 2 = 36$.</p>`,
                respuesta: 'El número mayor es <strong>36</strong>.'
            },
            {
                nivel: 3,
                titulo: 'Nivel 3: Desafío en la Granja',
                subtitulo: 'Intermedio · Cabezas y patas',
                icono: '🐓',
                ecuacion: '4c + 2(35 - c) = 116',
                enunciado: 'En una granja hay gallinas y conejos. En total se cuentan 35 cabezas y 116 patas. ¿Cuántos conejos hay?',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Conejos: $c$ (4 patas). Gallinas: $35 - c$ (2 patas).</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$4c + 2(35 - c) = 116$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> Aplicamos distributiva: $$4c + 70 - 2c = 116$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 2</span> $$2c = 116 - 70 = 46$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 3</span> $$c = 23$$</p>`,
                respuesta: 'Hay <strong>23 conejos</strong> en la granja.'
            },
            {
                nivel: 4,
                titulo: 'Nivel 4: Gastos Compartidos',
                subtitulo: 'Intermedio-Avanzado · Aporte variable',
                icono: '🎁',
                ecuacion: '10A = 8(A + 5)',
                enunciado: 'Un grupo de 10 amigos compra un regalo. 2 no pudieron pagar, y los restantes pusieron 5 soles más cada uno. ¿Cuánto costó el regalo?',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Cuota inicial: $A$. Amigos que pagan: $10 - 2 = 8$. Cuota final: $A + 5$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Igualdad</span> El costo total es el mismo: $$10A = 8(A + 5)$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$10A = 8A + 40$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 2</span> $$2A = 40 \\Rightarrow A = 20 \\text{ soles}$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 3</span> Costo total: $$10 \\times 20 = 200 \\text{ soles}$$</p>`,
                respuesta: 'El regalo costó <strong>200 soles</strong>.'
            },
            {
                nivel: 5,
                titulo: 'Nivel 5: El Dilema de las Edades',
                subtitulo: 'Avanzado · Cruce temporal',
                icono: '⏳',
                ecuacion: '7x = 70',
                enunciado: 'Yo tengo el triple de la edad que tú tenías cuando yo tenía la edad que tú tienes. Cuando tú tengas la edad que yo tengo, la suma de nuestras edades será 70. ¿Qué edad tengo actualmente?',
                planteamiento: `<p><span class="modal-step-pill">Clave</span> La diferencia de edades (Yo − Tú) es constante en el tiempo.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Pasado</span> Tú tenías $x$. Yo tenía lo que tú tienes ahora: $y$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Presente</span> Yo tengo $3x$. Tú tienes $y$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Relación</span> $$y - x = 3x - y \\Rightarrow 2y = 4x \\Rightarrow y = 2x$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Futuro</span> Tú tendrás $3x$ (pasan $x$ años). Yo tendré $3x + x = 4x$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$4x + 3x = 70 \\Rightarrow 7x = 70 \\Rightarrow x = 10$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Mi edad</span> $$3x = 3(10) = 30 \\text{ años}$$</p>`,
                respuesta: 'Actualmente tengo <strong>30 años</strong>.'
            }
        ]
    },
    // ══════════ BLOQUE 2 ══════════
    {
        id: 'bloque-2',
        nombre: 'Bloque 2 — Problemas Mixtos',
        color: '#6366f1',
        preguntas: [
            {
                nivel: 1,
                titulo: 'Nivel 1: La Mitad y el Resto',
                subtitulo: 'Básico · Fracciones de un número',
                icono: '½',
                ecuacion: 'x/2 + 8 = 22',
                enunciado: 'La mitad de un número aumentada en 8 es igual a 22. ¿Cuál es el número?',
                planteamiento: `<p><span class="modal-step-pill">Incógnita</span> El número: $x$. Su mitad: $\\frac{x}{2}$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$\\frac{x}{2} + 8 = 22$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$\\frac{x}{2} = 14$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 2</span> $$x = 28$$</p>`,
                respuesta: 'El número es <strong>28</strong>.'
            },
            {
                nivel: 2,
                titulo: 'Nivel 2: Números Pares Consecutivos',
                subtitulo: 'Intermedio-Bajo · Pares',
                icono: '2️⃣',
                ecuacion: 'x + (x+2) + (x+4) = 90',
                enunciado: 'La suma de tres números pares consecutivos es 90. Halla el mayor.',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Primer par: $x$. Segundo: $x+2$. Tercero (mayor): $x+4$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$x + (x+2) + (x+4) = 90$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$3x + 6 = 90 \\Rightarrow 3x = 84 \\Rightarrow x = 28$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Mayor</span> $$x + 4 = 32$$</p>`,
                respuesta: 'El número mayor es <strong>32</strong>.'
            },
            {
                nivel: 3,
                titulo: 'Nivel 3: La Piscina',
                subtitulo: 'Intermedio · Geometría rectangular',
                icono: '🏊',
                ecuacion: '2x + 2(2x+5) = 70',
                enunciado: 'El largo de una piscina excede al doble del ancho en 5 m. El perímetro es 70 m. Halla el largo.',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Ancho: $x$. Largo: $2x + 5$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Perímetro</span> $$2x + 2(2x + 5) = 70$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$2x + 4x + 10 = 70 \\Rightarrow 6x = 60 \\Rightarrow x = 10$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Largo</span> $$2(10) + 5 = 25 \\text{ m}$$</p>`,
                respuesta: 'El largo mide <strong>25 m</strong>.'
            },
            {
                nivel: 4,
                titulo: 'Nivel 4: El Viaje en Tren',
                subtitulo: 'Intermedio-Avanzado · Velocidad',
                icono: '🚂',
                ecuacion: '60t = 80(t - 1)',
                enunciado: 'Un tren parte a 60 km/h. Una hora después sale otro a 80 km/h por la misma ruta. ¿Cuánto tarda el segundo en alcanzar al primero?',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Tiempo del 2° tren: $t$ horas. Tiempo del 1°: $t + 1$ horas.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Igualdad</span> Distancias iguales al alcanzar: $$60(t+1) = 80t$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$60t + 60 = 80t \\Rightarrow 60 = 20t \\Rightarrow t = 3 \\text{ h}$$</p>`,
                respuesta: 'El segundo tren alcanza al primero en <strong>3 horas</strong>.'
            },
            {
                nivel: 5,
                titulo: 'Nivel 5: Dos Capitales con Interés',
                subtitulo: 'Avanzado · Interés simple',
                icono: '💰',
                ecuacion: '0.05x + 0.08(20000-x) = 1300',
                enunciado: 'Se invierten S/. 20,000 en dos cuentas: una al 5% y otra al 8% anual. Los intereses suman S/. 1,300. ¿Cuánto se invirtió en cada cuenta?',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Capital al 5%: $x$. Capital al 8%: $20000 - x$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$0.05x + 0.08(20000 - x) = 1300$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$0.05x + 1600 - 0.08x = 1300$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Paso 2</span> $$-0.03x = -300 \\Rightarrow x = 10000$$</p>`,
                respuesta: '<strong>S/. 10,000 al 5%</strong> y <strong>S/. 10,000 al 8%</strong>.'
            }
        ]
    },
    // ══════════ BLOQUE 3 ══════════
    {
        id: 'bloque-3',
        nombre: 'Bloque 3 — Nivel UNI',
        color: '#10b981',
        preguntas: [
            {
                nivel: 1,
                titulo: 'Nivel 1: División en Partes',
                subtitulo: 'Básico · Proporciones directas',
                icono: '📊',
                ecuacion: '3x + x = 80',
                enunciado: 'Dividir 80 en dos partes de forma que una sea el triple de la otra. Halla la parte mayor.',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Parte menor: $x$. Parte mayor: $3x$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$3x + x = 80$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$4x = 80 \\Rightarrow x = 20$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Mayor</span> $$3x = 60$$</p>`,
                respuesta: 'La parte mayor es <strong>60</strong>.'
            },
            {
                nivel: 2,
                titulo: 'Nivel 2: Monedas en la Alcancía',
                subtitulo: 'Intermedio-Bajo · Sistemas monedas',
                icono: '🪙',
                ecuacion: '0.50x + 1.00(30-x) = 20',
                enunciado: 'Una alcancía tiene 30 monedas de 50 céntimos y 1 sol. En total hay S/. 20. ¿Cuántas monedas de 1 sol hay?',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Monedas de 50 cts: $x$. Monedas de 1 sol: $30 - x$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$0.50x + 1.00(30 - x) = 20$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$0.50x + 30 - x = 20 \\Rightarrow -0.50x = -10 \\Rightarrow x = 20$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">De 1 sol</span> $$30 - 20 = 10$$</p>`,
                respuesta: 'Hay <strong>10 monedas de 1 sol</strong>.'
            },
            {
                nivel: 3,
                titulo: 'Nivel 3: El Descuento Justo',
                subtitulo: 'Intermedio · Porcentajes comerciales',
                icono: '🏷️',
                ecuacion: 'x - 0.15x = 510',
                enunciado: 'Un artículo tiene un descuento del 15%. Si el precio final es S/. 510, ¿cuál era el precio original?',
                planteamiento: `<p><span class="modal-step-pill">Variable</span> Precio original: $x$. Con 15% de descuento: $x - 0.15x = 0.85x$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$0.85x = 510$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$x = \\frac{510}{0.85} = 600$$</p>`,
                respuesta: 'El precio original era <strong>S/. 600</strong>.'
            },
            {
                nivel: 4,
                titulo: 'Nivel 4: La Mezcla de Soluciones',
                subtitulo: 'Intermedio-Avanzado · Concentración',
                icono: '🧪',
                ecuacion: '0.30x + 0.70(10-x) = 0.50(10)',
                enunciado: 'Se mezclan litros de una solución al 30% y al 70% para obtener 10 L al 50%. ¿Cuántos litros de cada una se necesitan?',
                planteamiento: `<p><span class="modal-step-pill">Variables</span> Litros al 30%: $x$. Litros al 70%: $10 - x$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Ecuación</span> $$0.30x + 0.70(10 - x) = 0.50 \\times 10$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Paso 1</span> $$0.30x + 7 - 0.70x = 5 \\Rightarrow -0.40x = -2 \\Rightarrow x = 5$$</p>`,
                respuesta: '<strong>5 L al 30%</strong> y <strong>5 L al 70%</strong>.'
            },
            {
                nivel: 5,
                titulo: 'Nivel 5: Edades en Razón (UNI)',
                subtitulo: 'Avanzado · Razones y tiempo',
                icono: '⭐',
                ecuacion: '(A-5)/(B-5) = 5/4',
                enunciado: 'La suma de edades de A y B es 46 y su diferencia es 4. Hace $a$ años la razón era 5:4. Dentro de $b$ años será 7:6. Calcule $a+b$.',
                planteamiento: `<p><span class="modal-step-pill">Sistema</span> $A + B = 46$ y $A - B = 4$. Resolviendo: $A = 25$, $B = 21$.</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Pasado</span> $$\\frac{25-a}{21-a} = \\frac{5}{4}$$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Futuro</span> $$\\frac{25+b}{21+b} = \\frac{7}{6}$$</p>`,
                resolucion: `<p><span class="modal-step-pill">Pasado</span> $4(25-a) = 5(21-a) \\Rightarrow 100-4a = 105-5a \\Rightarrow a = 5$</p>
                <p style="margin-top:8px;"><span class="modal-step-pill">Futuro</span> $6(25+b) = 7(21+b) \\Rightarrow 150+6b = 147+7b \\Rightarrow b = 3$</p>`,
                respuesta: '$a + b = 5 + 3 = $ <strong style="color:#46d369;font-size:1.2rem;">8</strong>'
            }
        ]
    }
];

// ── Torneo State & Persistence ───────────────────────────────────────────────
const TORNEO_STORAGE_KEY = 'ecuaciones_io_torneo_v1';
let torneoActiveBlock = 0; // índice 0, 1 o 2
let torneoBlocks = null;

function loadTorneoData() {
    try {
        const saved = localStorage.getItem(TORNEO_STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            torneoBlocks = parsed.blocks || JSON.parse(JSON.stringify(DEFAULT_TORNEO_BLOCKS));
            torneoActiveBlock = typeof parsed.activeBlock === 'number' ? parsed.activeBlock : 0;
        } else {
            torneoBlocks = JSON.parse(JSON.stringify(DEFAULT_TORNEO_BLOCKS));
            torneoActiveBlock = 0;
        }
    } catch(e) {
        torneoBlocks = JSON.parse(JSON.stringify(DEFAULT_TORNEO_BLOCKS));
        torneoActiveBlock = 0;
    }
}

function saveTorneoData() {
    try {
        localStorage.setItem(TORNEO_STORAGE_KEY, JSON.stringify({
            blocks: torneoBlocks,
            activeBlock: torneoActiveBlock
        }));
    } catch(e) { console.warn('No se pudo guardar en localStorage:', e); }
}

function resetTorneoData() {
    torneoBlocks = JSON.parse(JSON.stringify(DEFAULT_TORNEO_BLOCKS));
    torneoActiveBlock = 0;
    saveTorneoData();
}

// ── Dynamic SLIDES_DATA injection for Torneo ─────────────────────────────────
function updateTorneoSlides() {
    const block = torneoBlocks[torneoActiveBlock];
    if (!block) return;

    const levelColors = ['#e50914','#f59e0b','#10b981','#6366f1','#a78bfa'];

    block.preguntas.forEach((p, i) => {
        const slideId = `slide-torneo-${i + 1}`;
        SLIDES_DATA[slideId] = {
            title: p.titulo,
            icon: p.icono,
            heroColor: `linear-gradient(135deg, #0d0d1a, #1a1a2e)`,
            description: p.subtitulo,
            content: `
                <div style="border-left:4px solid ${levelColors[i]};padding:12px 20px;background:rgba(255,255,255,0.03);border-radius:0 8px 8px 0;margin-bottom:20px;">
                    <p style="font-size:0.95rem;color:var(--color-text-secondary);line-height:1.7;">${p.enunciado}</p>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
                    <div>
                        <p style="font-size:0.7rem;text-transform:uppercase;color:var(--color-text-faint);font-weight:700;letter-spacing:1px;margin-bottom:12px;">📐 Planteamiento</p>
                        <div class="modal-math-box" style="border-color:${levelColors[i]};">
                            ${p.planteamiento}
                        </div>
                    </div>
                    <div>
                        <p style="font-size:0.7rem;text-transform:uppercase;color:var(--color-text-faint);font-weight:700;letter-spacing:1px;margin-bottom:12px;">🔢 Resolución</p>
                        <div class="modal-math-box" style="border-color:${levelColors[i]};">
                            ${p.resolucion}
                        </div>
                    </div>
                </div>
                <div class="modal-solution-tag" style="margin-top:20px;">
                    <i class="fa-solid fa-circle-check"></i> ${p.respuesta}
                </div>`
        };
    });
}

function getTorneoPresenterSlides() {
    return [1,2,3,4,5].map(n => `slide-torneo-${n}`);
}

// ── Dynamic PRESENTER_SLIDES (computed) ──────────────────────────────────────
function getPresenterSlides() {
    return [
        'slide-planteo', 'slide-pasos', 'slide-diccionario',
        'slide-ej1', 'slide-ej2', 'slide-ej3', 'slide-ej4', 'slide-ej5',
        ...getTorneoPresenterSlides(),
        'slide-errores', 'slide-resumen'
    ];
}

// Backward compatibility — mantener PRESENTER_SLIDES como referencia mutable
let PRESENTER_SLIDES = getPresenterSlides();

// ── Torneo Card Rendering ─────────────────────────────────────────────────────
function renderTorneoCards() {
    const track = document.getElementById('track-row-torneo');
    if (!track) return;

    loadTorneoData();
    updateTorneoSlides();
    PRESENTER_SLIDES = getPresenterSlides();

    const block = torneoBlocks[torneoActiveBlock];
    const levelBadges = ['Básico','Intermedio-Bajo','Intermedio','Intermedio-Avanzado','Avanzado'];
    const levelColors = ['#46d369','#f59e0b','#f59e0b','#f59e0b','#e50914'];
    const accentColor = block.color;

    track.innerHTML = block.preguntas.map((p, i) => `
        <div class="slide-card" onclick="openSlideModal('slide-torneo-${i+1}')" aria-label="Ver: ${p.titulo}">
            <div class="slide-card-thumb">
                <div class="slide-card-thumb-inner" style="background:linear-gradient(135deg,#1a1a2e,#0d0d1a);">
                    <div class="slide-card-icon" style="color:${accentColor};">${p.icono}</div>
                    <div class="slide-card-label">${p.titulo.replace(/Nivel \d+: /, '')}</div>
                    <div class="slide-card-math" style="font-family:var(--font-mono);color:rgba(255,255,255,0.3);font-size:0.7rem;">${p.ecuacion}</div>
                </div>
            </div>
            <div class="slide-card-info">
                <div class="slide-card-actions">
                    <button class="card-btn play" onclick="event.stopPropagation();openSlideModal('slide-torneo-${i+1}')" aria-label="Abrir diapositiva">
                        <i class="fa-solid fa-play"></i>
                    </button>
                    <button class="card-btn" aria-label="Más opciones"><i class="fa-solid fa-ellipsis"></i></button>
                </div>
                <div class="slide-card-info-title">${p.titulo}</div>
                <div class="slide-card-info-tags">
                    <span class="card-tag" style="color:${levelColors[i]};font-weight:700;">${levelBadges[i]}</span>
                    <span class="card-tag">${block.nombre.split('—')[1].trim()}</span>
                </div>
            </div>
        </div>`
    ).join('');

    // Update section header subtitle
    const blockLabel = document.getElementById('torneo-block-label');
    if (blockLabel) {
        blockLabel.textContent = block.nombre;
        blockLabel.style.color = block.color;
    }
}

// ── Torneo Block Switch (called from Admin & Realtime) ───────────────────────
function switchTorneoBlock(blockIndex, fromRemote = false) {
    if (blockIndex < 0 || blockIndex >= torneoBlocks.length) return;
    torneoActiveBlock = blockIndex;
    saveTorneoData();
    renderTorneoCards();
    const block = torneoBlocks[blockIndex];
    showToast(`🏆 ${fromRemote ? '📡 Remoto: ' : ''}Bloque activado: ${block.nombre}`, 'success');

    // Broadcast to remote if triggered locally
    if (!fromRemote && supabaseClient) {
        try {
            supabaseClient.channel('presentation-planteo-ecuaciones').send({
                type: 'broadcast',
                event: 'change-block',
                payload: { blockIndex }
            });
        } catch(e) {}
    }
}

// ── Admin Modal ──────────────────────────────────────────────────────────────
let adminActiveBlockTab = 0;

function openAdminModal() {
    loadTorneoData();
    adminActiveBlockTab = torneoActiveBlock;
    renderAdminModal();
    document.getElementById('admin-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeAdminModal() {
    document.getElementById('admin-modal').classList.remove('open');
    document.body.style.overflow = '';
}

function renderAdminModal() {
    // Update active block tabs highlight
    document.querySelectorAll('.admin-block-tab').forEach((tab, i) => {
        tab.classList.toggle('active', i === adminActiveBlockTab);
    });

    const block = torneoBlocks[adminActiveBlockTab];
    const container = document.getElementById('admin-questions-container');
    if (!container) return;

    container.innerHTML = block.preguntas.map((p, qi) => `
        <div class="admin-question-card">
            <div class="admin-question-header">
                <span class="admin-question-num">Nivel ${qi + 1}</span>
                <span class="admin-question-icon">${p.icono}</span>
            </div>
            <div class="admin-field-group">
                <label class="admin-label" for="aq-${qi}-titulo">Título</label>
                <input class="admin-input" id="aq-${qi}-titulo" type="text" value="${p.titulo.replace(/"/g,'&quot;')}" placeholder="Título del nivel">
            </div>
            <div class="admin-field-group">
                <label class="admin-label" for="aq-${qi}-subtitulo">Subtítulo / Etiqueta</label>
                <input class="admin-input" id="aq-${qi}-subtitulo" type="text" value="${p.subtitulo.replace(/"/g,'&quot;')}" placeholder="Ej: Básico · Traducción">
            </div>
            <div class="admin-field-group">
                <label class="admin-label" for="aq-${qi}-ecuacion">Ecuación (texto plano para la tarjeta)</label>
                <input class="admin-input" id="aq-${qi}-ecuacion" type="text" value="${p.ecuacion.replace(/"/g,'&quot;')}" placeholder="Ej: 2x + 12 = 42">
            </div>
            <div class="admin-field-group">
                <label class="admin-label" for="aq-${qi}-enunciado">Enunciado del Problema</label>
                <textarea class="admin-textarea" id="aq-${qi}-enunciado" rows="3" placeholder="Escribe el enunciado del problema...">${p.enunciado}</textarea>
            </div>
            <div class="admin-field-group">
                <label class="admin-label" for="aq-${qi}-planteamiento">Planteamiento (HTML + KaTeX $$...$$)</label>
                <textarea class="admin-textarea" id="aq-${qi}-planteamiento" rows="5" placeholder="HTML con fórmulas KaTeX...">${p.planteamiento.trim()}</textarea>
            </div>
            <div class="admin-field-group">
                <label class="admin-label" for="aq-${qi}-resolucion">Resolución Paso a Paso (HTML + KaTeX $$...$$)</label>
                <textarea class="admin-textarea" id="aq-${qi}-resolucion" rows="5" placeholder="HTML con fórmulas KaTeX...">${p.resolucion.trim()}</textarea>
            </div>
            <div class="admin-field-group">
                <label class="admin-label" for="aq-${qi}-respuesta">Respuesta Final (HTML corto)</label>
                <input class="admin-input" id="aq-${qi}-respuesta" type="text" value="${p.respuesta.replace(/"/g,'&quot;')}" placeholder="Ej: El número es &lt;strong&gt;15&lt;/strong&gt;.">
            </div>
        </div>`
    ).join('');
}

function switchAdminTab(blockIndex) {
    adminActiveBlockTab = blockIndex;
    renderAdminModal();
}

function saveAdminChanges() {
    const block = torneoBlocks[adminActiveBlockTab];
    block.preguntas.forEach((p, qi) => {
        p.titulo       = document.getElementById(`aq-${qi}-titulo`)?.value       || p.titulo;
        p.subtitulo    = document.getElementById(`aq-${qi}-subtitulo`)?.value    || p.subtitulo;
        p.ecuacion     = document.getElementById(`aq-${qi}-ecuacion`)?.value     || p.ecuacion;
        p.enunciado    = document.getElementById(`aq-${qi}-enunciado`)?.value    || p.enunciado;
        p.planteamiento = document.getElementById(`aq-${qi}-planteamiento`)?.value || p.planteamiento;
        p.resolucion   = document.getElementById(`aq-${qi}-resolucion`)?.value   || p.resolucion;
        p.respuesta    = document.getElementById(`aq-${qi}-respuesta`)?.value    || p.respuesta;
    });

    saveTorneoData();
    updateTorneoSlides();
    if (adminActiveBlockTab === torneoActiveBlock) renderTorneoCards();

    showToast('✅ Cambios guardados correctamente.', 'success');
}

function resetAdminBlock() {
    if (!confirm(`¿Restaurar el Bloque ${adminActiveBlockTab + 1} a sus valores originales? Esta acción no se puede deshacer.`)) return;
    torneoBlocks[adminActiveBlockTab] = JSON.parse(JSON.stringify(DEFAULT_TORNEO_BLOCKS[adminActiveBlockTab]));
    saveTorneoData();
    renderAdminModal();
    if (adminActiveBlockTab === torneoActiveBlock) {
        updateTorneoSlides();
        renderTorneoCards();
    }
    showToast('🔄 Bloque restaurado a valores originales.', 'info');
}

// ── State ────────────────────────────────────────────────────────────────────
let activeProfile = null;
let presenterIndex = 0;
let carouselOffsets = {};
let lastSolutionHtml = '';

// ── Profile Selection ────────────────────────────────────────────────────────
function selectProfile(name, avatarSrc, accentColor) {
    activeProfile = { name, avatarSrc, accentColor };

    // Update header avatar
    const headerAvatar = document.getElementById('header-avatar');
    if (headerAvatar) {
        if (avatarSrc) {
            headerAvatar.outerHTML = `<div class="header-profile-mini-icon" id="header-avatar" style="background:${accentColor}22;" title="${name}">
                <img src="${avatarSrc}" alt="${name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;" onerror="this.outerHTML='🎓'">
            </div>`;
        } else {
            headerAvatar.style.background = `${accentColor}22`;
            headerAvatar.textContent = '👤';
            headerAvatar.title = name;
        }
    }

    // Fade out profile screen, fade in app
    const profileScreen = document.getElementById('profile-screen');
    const mainApp = document.getElementById('main-app');

    profileScreen.classList.add('fade-out');

    setTimeout(() => {
        profileScreen.style.display = 'none';
        mainApp.classList.add('visible');

        // Init scroll reveal
        initScrollReveal();
        renderAllMath();
        // Init Netflix-style video previews
        initCardPreviews();
        // Init Torneo dynamic cards
        renderTorneoCards();
    }, 800);
}

// ── Carousel Logic ───────────────────────────────────────────────────────────
function slideCarousel(rowId, direction) {
    const track = document.getElementById(`track-${rowId}`);
    if (!track) return;

    const cardWidth = 280 + 8; // card width + gap
    const visibleCount = Math.floor(track.parentElement.offsetWidth / cardWidth);
    const totalCards = track.children.length;
    const maxOffset = Math.max(0, totalCards - visibleCount);

    if (!carouselOffsets[rowId]) carouselOffsets[rowId] = 0;
    carouselOffsets[rowId] = Math.max(0, Math.min(carouselOffsets[rowId] + direction, maxOffset));

    track.style.transform = `translateX(-${carouselOffsets[rowId] * cardWidth}px)`;
}

// ── Slide Modal ───────────────────────────────────────────────────────────────
function openSlideModal(slideId) {
    stopAllPreviews();
    const data = SLIDES_DATA[slideId];
    if (!data) return;

    const modal = document.getElementById('slide-modal');
    const content = document.getElementById('modal-content');

    const bgStyle = data.coverImage 
        ? `background: linear-gradient(to top, rgba(20,20,20,1) 0%, rgba(20,20,20,0.4) 50%, rgba(20,20,20,0.85) 100%), url('${data.coverImage}');`
        : `background: ${data.heroColor};`;

    content.innerHTML = `
        <div class="modal-hero" style="${bgStyle}">
            <div class="modal-hero-bg">${data.icon}</div>
            <div class="modal-hero-content">
                <h2 class="modal-hero-title">${data.title}</h2>
                <div class="modal-hero-actions">
                    <button class="btn-play" style="font-size:0.9rem;padding:10px 20px;" onclick="closeSlideModal();startPresenterFromSlide('${slideId}')">
                        <i class="fa-solid fa-play"></i> Presentar
                    </button>
                </div>
            </div>
        </div>
        <div class="modal-bottom">
            <div class="modal-bottom-grid">
                <div>
                    <p class="modal-description">${data.description}</p>
                </div>
                <div class="modal-meta">
                    <p><span class="modal-meta-label">Tema: </span><span class="modal-meta-value">Planteo de Ecuaciones</span></p>
                    <p><span class="modal-meta-label">Nivel: </span><span class="modal-meta-value">Básico–UNI</span></p>
                </div>
            </div>
            <div class="modal-content-area">
                ${data.content}
            </div>
        </div>`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Render math
    setTimeout(() => renderAllMath(), 50);
}

function closeSlideModal(e) {
    if (e && e.target !== e.currentTarget) return;
    const modal = document.getElementById('slide-modal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
}

// ── Presenter Mode ────────────────────────────────────────────────────────────
function startPresenterMode() {
    stopAllPreviews();
    presenterIndex = 0;
    renderPresenterSlide();
    document.getElementById('presenter-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function startPresenterFromSlide(slideId) {
    const idx = PRESENTER_SLIDES.indexOf(slideId);
    presenterIndex = idx >= 0 ? idx : 0;
    renderPresenterSlide();
    document.getElementById('presenter-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function exitPresenterMode() {
    document.getElementById('presenter-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

function renderPresenterSlide() {
    const slideId = PRESENTER_SLIDES[presenterIndex];
    const data = SLIDES_DATA[slideId];
    if (!data) return;

    const container = document.getElementById('presenter-slide-content');
    const indicator = document.getElementById('pbar-indicator');

    container.innerHTML = `
        <h2 style="font-family:var(--font-heading);font-size:1.8rem;font-weight:800;margin-bottom:20px;display:flex;align-items:center;gap:12px;padding-bottom:12px;border-bottom:2px solid var(--color-accent);">
            <span>${data.icon}</span> ${data.title}
        </h2>
        <p style="font-size:1rem;color:var(--color-text-muted);margin-bottom:24px;">${data.description}</p>
        <div style="font-size:1.05rem;line-height:1.8;">${data.content}</div>`;

    indicator.textContent = `${presenterIndex + 1} / ${PRESENTER_SLIDES.length}`;
    setTimeout(() => renderAllMath(), 50);
}

function presenterNext() {
    if (presenterIndex < PRESENTER_SLIDES.length - 1) {
        presenterIndex++;
        renderPresenterSlide();
    } else {
        showToast('Llegaste a la última diapositiva.', 'info');
    }
}

function presenterPrev() {
    if (presenterIndex > 0) {
        presenterIndex--;
        renderPresenterSlide();
    } else {
        showToast('Estás en la primera diapositiva.', 'info');
    }
}

// Global keyboard navigation
window.addEventListener('keydown', (e) => {
    if (document.getElementById('presenter-overlay').classList.contains('active')) {
        if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); presenterNext(); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); presenterPrev(); }
        else if (e.key === 'Escape') exitPresenterMode();
    } else if (document.getElementById('qr-modal').classList.contains('open')) {
        if (e.key === 'Escape') closeQRModal();
    } else if (document.getElementById('slide-modal').classList.contains('open')) {
        if (e.key === 'Escape') closeSlideModal();
    } else if (document.getElementById('admin-modal').classList.contains('open')) {
        if (e.key === 'Escape') closeAdminModal();
    }
});

// ── Scroll Reveal ─────────────────────────────────────────────────────────────
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── Header scroll effect ──────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
    const header = document.getElementById('netflix-header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 80);
    }
});

// ── KaTeX Math Rendering ──────────────────────────────────────────────────────
function renderAllMath() {
    if (window.renderMathInElement) {
        window.renderMathInElement(document.body, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
    }
}

// ── Toast Notifications ───────────────────────────────────────────────────────
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const colors = {
        error:   { bg: 'rgba(229,9,20,0.9)', icon: 'fa-triangle-exclamation' },
        warning: { bg: 'rgba(180,130,0,0.9)', icon: 'fa-circle-exclamation' },
        success: { bg: 'rgba(70,211,105,0.15)', icon: 'fa-circle-check' },
        info:    { bg: 'rgba(40,40,40,0.95)', icon: 'fa-circle-info' }
    };
    const c = colors[type] || colors.info;

    toast.style.cssText = `
        background:${c.bg};
        border:1px solid rgba(255,255,255,0.15);
        color:#fff;
        padding:10px 16px;
        border-radius:6px;
        font-size:0.82rem;
        font-weight:600;
        display:flex;
        align-items:center;
        gap:8px;
        box-shadow:0 4px 20px rgba(0,0,0,0.5);
        opacity:0;
        transform:translateY(8px);
        transition:all 0.3s ease;
        backdrop-filter:blur(8px);`;
    toast.innerHTML = `<i class="fa-solid ${c.icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(4px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

// ── AI Service ────────────────────────────────────────────────────────────────
const MOCK_PROBLEMS = {
    "Edades": {
        "Básico": {
            problem: "La edad de un padre es el triple de la edad de su hijo. Si la suma de ambas edades es 48 años, ¿cuál es la edad de cada uno?",
            solution: `<div style="display:flex;flex-direction:column;gap:10px;">
                <p><span class="step-pill">Paso 1</span> Variable: Edad del hijo = $x$. Edad del padre = $3x$.</p>
                <p><span class="step-pill">Paso 2</span> La suma es 48: $x + 3x = 48$.</p>
                <p><span class="step-pill">Paso 3</span> Ecuación: $4x = 48$.</p>
                <p><span class="step-pill">Paso 4</span> Resolviendo: $x = 12$.</p>
                <p><span class="step-pill">Paso 5</span> El hijo tiene 12 años y el padre $3(12) = 36$ años. $12 + 36 = 48$ ✓</p>
            </div>`
        },
        "Intermedio": {
            problem: "Hace 5 años la edad de María era el doble de la de su prima Lucía. Si hoy sus edades suman 40 años, ¿cuántos años tiene María actualmente?",
            solution: `<div style="display:flex;flex-direction:column;gap:10px;">
                <p><span class="step-pill">Paso 1</span> Hace 5 años: Lucía = $y$, María = $2y$. Hoy: Lucía = $y+5$, María = $2y+5$.</p>
                <p><span class="step-pill">Paso 2</span> La suma actual: $(2y+5) + (y+5) = 40$.</p>
                <p><span class="step-pill">Paso 3</span> $3y + 10 = 40 \\Rightarrow y = 10$.</p>
                <p><span class="step-pill">Paso 4</span> María = $2(10) + 5 = 25$ años.</p>
                <p><span class="step-pill">Paso 5</span> $25 + 15 = 40$ ✓</p>
            </div>`
        },
        "Avanzado": {
            problem: "Un abuelo hoy cuadruplica la edad de su nieto. Hace 10 años era el séxtuple. ¿En cuántos años la edad del abuelo será el triple de la del nieto?",
            solution: `<div style="display:flex;flex-direction:column;gap:10px;">
                <p><span class="step-pill">Paso 1</span> Nieto = $x$, Abuelo = $4x$. Hace 10: $4x-10 = 6(x-10)$.</p>
                <p><span class="step-pill">Paso 2</span> $4x-10=6x-60 \\Rightarrow 2x=50 \\Rightarrow x=25$. Abuelo=100.</p>
                <p><span class="step-pill">Paso 3</span> Buscamos $N$: $100+N = 3(25+N) \\Rightarrow N=12.5$ años.</p>
                <p><span class="step-pill">Paso 4</span> Las edades futuras serán 37.5 y 112.5 años, cantidades coherentes.</p>
                <p><span class="step-pill">Paso 5</span> En 12.5 años: Nieto=37.5, Abuelo=112.5. $112.5/37.5=3$ ✓</p>
            </div>`
        }
    },
    "Geometría": {
        "Básico": {
            problem: "El perímetro de un cuadrado es de 36 cm. ¿Cuánto mide su área?",
            solution: `<div style="display:flex;flex-direction:column;gap:10px;">
                <p><span class="step-pill">Paso 1</span> Lado = $L$. Perímetro = $4L$. Área = $L^2$.</p>
                <p><span class="step-pill">Paso 2</span> $4L = 36$.</p>
                <p><span class="step-pill">Paso 3</span> $L = 9$ cm.</p>
                <p><span class="step-pill">Paso 4</span> Área: $9^2 = 81$ cm².</p>
                <p><span class="step-pill">Paso 5</span> Perímetro: $9 \\times 4 = 36$ ✓</p>
            </div>`
        },
        "Intermedio": {
            problem: "El largo de un rectángulo mide 4 metros más que el doble de su ancho. Si el perímetro es de 56 metros, calcula sus lados.",
            solution: `<div style="display:flex;flex-direction:column;gap:10px;">
                <p><span class="step-pill">Paso 1</span> Ancho = $x$, Largo = $2x + 4$.</p>
                <p><span class="step-pill">Paso 2</span> Perímetro: $2(x) + 2(2x + 4) = 56$.</p>
                <p><span class="step-pill">Paso 3</span> $6x + 8 = 56 \\Rightarrow x = 8$.</p>
                <p><span class="step-pill">Paso 4</span> Ancho = 8 m, Largo = 20 m.</p>
                <p><span class="step-pill">Paso 5</span> $2(8) + 2(20) = 56$ ✓</p>
            </div>`
        },
        "Avanzado": {
            problem: "En un triángulo rectángulo, la hipotenusa mide 2 cm más que el cateto mayor, y este 2 cm más que el menor. Determina el área.",
            solution: `<div style="display:flex;flex-direction:column;gap:10px;">
                <p><span class="step-pill">Paso 1</span> Cat. menor = $x$, mayor = $x+2$, hipotenusa = $x+4$.</p>
                <p><span class="step-pill">Paso 2</span> Pitágoras: $x^2 + (x+2)^2 = (x+4)^2$.</p>
                <p><span class="step-pill">Paso 3</span> $x^2 - 4x - 12 = 0 \\Rightarrow (x-6)(x+2)=0 \\Rightarrow x=6$.</p>
                <p><span class="step-pill">Paso 4</span> Catetos: 6 y 8. Área = $\\frac{6 \\times 8}{2} = 24$ cm².</p>
                <p><span class="step-pill">Paso 5</span> $6^2 + 8^2 = 100 = 10^2$ ✓</p>
            </div>`
        }
    }
};

class AIService {
    static async generateMockProblem(topic, difficulty) {
        return new Promise(resolve => {
            setTimeout(() => {
                const group = MOCK_PROBLEMS[topic] || MOCK_PROBLEMS['Edades'];
                const item = group[difficulty] || group['Básico'];
                resolve({ problem: item.problem, solution: item.solution });
            }, 800);
        });
    }

    static async analyzeMockProblem(text) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`<div style="display:flex;flex-direction:column;gap:10px;">
                    <p style="color:#54b3d6;font-weight:700;">Análisis Estructurado (Modo Offline):</p>
                    <p><span class="step-pill">1. Identificación</span> Problema analizado: <em>"${text.substring(0, 60)}..."</em></p>
                    <p style="color:var(--color-text-muted);">Para análisis en tiempo real con DeepSeek/Gemini, despliega las Edge Functions de Supabase con los endpoints <code>generate-challenge</code> y <code>analyze-equation</code>.</p>
                    <div style="background:#0d0d0d;padding:10px;border-radius:6px;font-family:var(--font-mono);font-size:0.8rem;color:#54b3d6;border:1px solid rgba(255,255,255,0.06);">
                        Ecuación estimada: $Ax + B = C$
                    </div>
                </div>`);
            }, 1000);
        });
    }

    static async generateProblem(topic, difficulty) {
        let challenge;
        if (SUPABASE_CONFIG.useEdgeFunctions && SUPABASE_CONFIG.url) {
            try {
                challenge = await this.callSupabaseFunction('generate-challenge', { topic, difficulty });
            } catch (e) {
                console.warn('Edge Function no disponible. Usando generador local:', e);
                challenge = await this.generateMockProblem(topic, difficulty);
            }
        } else {
            challenge = await this.generateMockProblem(topic, difficulty);
        }

        // Save to Supabase table
        if (supabaseClient) {
            try {
                await supabaseClient.from('exposicion_retos').insert({
                    topic, difficulty,
                    problem_text: challenge.problem,
                    solution_html: challenge.solution
                });
            } catch (e) { console.warn('No se pudo registrar en Supabase:', e); }
        }

        return challenge;
    }

    static async analyzeProblem(text) {
        let analysis;
        if (SUPABASE_CONFIG.useEdgeFunctions && SUPABASE_CONFIG.url) {
            try {
                analysis = await this.callSupabaseFunction('analyze-equation', { text });
            } catch (e) {
                console.warn('Edge Function no disponible. Usando analizador local:', e);
                analysis = await this.analyzeMockProblem(text);
            }
        } else {
            analysis = await this.analyzeMockProblem(text);
        }

        if (supabaseClient) {
            try {
                await supabaseClient.from('exposicion_retos').insert({
                    topic: 'Análisis de Entrada',
                    difficulty: 'Personalizado',
                    problem_text: text,
                    solution_html: analysis
                });
            } catch (e) { console.warn('No se pudo registrar análisis en Supabase:', e); }
        }

        return analysis;
    }

    static async callSupabaseFunction(endpoint, payload) {
        const response = await fetch(`${SUPABASE_CONFIG.url}/functions/v1/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${SUPABASE_CONFIG.anonKey}`
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    }
}

// ── Supabase Realtime (Virtual Laser Pointer + Remote Commands) ──────────────────────
function initRealtimeUplink() {
    if (!supabaseClient) return;

    const laser = document.getElementById('virtual-laser');
    let laserX = window.innerWidth / 2, laserY = window.innerHeight / 2;
    let hideTimeout;

    supabaseClient.channel('presentation-planteo-ecuaciones')
        .on('broadcast', { event: 'laser-move' }, ({ payload }) => {
            if (!laser) return;
            laser.style.opacity = '1';
            laserX = Math.max(0, Math.min(laserX + payload.dx * window.innerWidth * 2, window.innerWidth));
            laserY = Math.max(0, Math.min(laserY + payload.dy * window.innerHeight * 2, window.innerHeight));
            laser.style.left = `${laserX}px`;
            laser.style.top = `${laserY}px`;
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => { laser.style.opacity = '0'; }, 1500);
        })
        .on('broadcast', { event: 'navigate' }, ({ payload }) => {
            if (document.getElementById('presenter-overlay').classList.contains('active')) {
                if (payload.direction === 'next') presenterNext();
                else presenterPrev();
            }
        })
        .on('broadcast', { event: 'start-presentation' }, () => {
            startPresenterMode();
            showToast('▶️ Presentación iniciada desde el mando remoto', 'success');
        })
        .on('broadcast', { event: 'exit-presentation' }, () => {
            exitPresenterMode();
            showToast('⏹️ Presentación detenida desde el mando remoto', 'info');
        })
        .on('broadcast', { event: 'change-block' }, ({ payload }) => {
            if (typeof payload.blockIndex === 'number') {
                switchTorneoBlock(payload.blockIndex, true);
            }
        })
        .subscribe((status) => {
            if (status === 'SUBSCRIBED') showToast('🔗 Mando remoto listo', 'success');
        });
}

// ── AI Button Handlers ────────────────────────────────────────────────────────
async function generateAIProblem() {
    const diff = document.getElementById('select-diff').value;
    const topic = document.getElementById('select-topic').value;
    const btn = document.getElementById('btn-generate-ai');
    const output = document.getElementById('ai-problem-output');
    const btnSol = document.getElementById('btn-reveal-solution');

    output.innerHTML = `<div style="display:flex;align-items:center;gap:10px;height:100%;justify-content:center;">
        <i class="fa-solid fa-spinner fa-spin" style="color:var(--color-accent);font-size:1.5rem;"></i>
        <span style="color:var(--color-text-muted);">Generando desafío matemático...</span>
    </div>`;
    btn.disabled = true; btnSol.disabled = true;

    try {
        const challenge = await AIService.generateProblem(topic, diff);
        output.innerHTML = `<div>
            <p style="color:#46d369;font-weight:700;font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">¡Nuevo Desafío!</p>
            <p style="color:var(--color-text-secondary);line-height:1.65;">${challenge.problem}</p>
        </div>`;
        lastSolutionHtml = challenge.solution;
        btnSol.disabled = false;
        setTimeout(() => renderAllMath(), 50);
    } catch (e) {
        showToast(e.message, 'error');
        output.innerHTML = `<span style="color:var(--color-accent);">Error: ${e.message}</span>`;
    } finally {
        btn.disabled = false;
    }
}

function toggleAISolution() {
    if (!lastSolutionHtml) return;
    const output = document.getElementById('ai-problem-output');
    output.insertAdjacentHTML('beforeend', `<div style="margin-top:14px;padding-top:14px;border-top:1px solid rgba(255,255,255,0.08);">
        <p style="color:#46d369;font-weight:700;font-size:0.72rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;">Resolución Paso a Paso:</p>
        <div style="font-size:0.82rem;display:flex;flex-direction:column;gap:8px;">${lastSolutionHtml}</div>
    </div>`);
    document.getElementById('btn-reveal-solution').disabled = true;
    setTimeout(() => renderAllMath(), 50);
}

async function analyzeUserProblem() {
    const text = document.getElementById('user-problem-input').value.trim();
    const btn = document.getElementById('btn-analyze-ai');
    const output = document.getElementById('ai-analysis-output');

    if (!text) { showToast('Por favor, escribe un problema antes de analizar.', 'warning'); return; }

    output.innerHTML = `<div style="display:flex;align-items:center;gap:10px;height:100%;justify-content:center;">
        <i class="fa-solid fa-circle-notch fa-spin" style="color:var(--color-accent);font-size:1.5rem;"></i>
        <span style="color:var(--color-text-muted);">Analizando y mapeando ecuaciones...</span>
    </div>`;
    btn.disabled = true;

    try {
        const analysis = await AIService.analyzeProblem(text);
        output.innerHTML = `<div style="font-size:0.82rem;">${analysis}</div>`;
        setTimeout(() => renderAllMath(), 50);
    } catch (e) {
        showToast(e.message, 'error');
        output.innerHTML = `<span style="color:var(--color-accent);">Error: ${e.message}</span>`;
    } finally {
        btn.disabled = false;
    }
}

// ── QR Modal ──────────────────────────────────────────────────────────────────
function openQRModal() {
    const base = window.location.origin + window.location.pathname.replace(/[^\/]*$/, '');
    const remoteURL = base + 'remote.html';
    const encoded = encodeURIComponent(remoteURL);
    const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=141414&bgcolor=ffffff&data=${encoded}`;

    document.getElementById('qr-img').src = qrAPI;
    document.getElementById('qr-url-text').textContent = remoteURL;
    document.getElementById('qr-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeQRModal() {
    document.getElementById('qr-modal').classList.remove('open');
    document.body.style.overflow = '';
}



// ── PDF Export ────────────────────────────────────────────────────────────────
window.exportSolutionsToPDF = () => {
    showToast('Preparando exportación a PDF...', 'info');
    setTimeout(() => window.print(), 400);
};

// ── Card Video Previews (Netflix-style hover) ─────────────────────────────────

/**
 * Map of YouTube video IDs per card to the channel name for the badge.
 * Cards that don't have a data-yt-id attribute are skipped automatically.
 */
const YT_CHANNEL_NAMES = {
    'CJEsybfPQSE': 'Profe Alex',
    'CN4n6Tfc5WI': 'Susi Profe',
    'F1d5vGkHlT8': 'JulioProfe',
    'K3t1XN1gN7c': 'JulioProfe',
    'R9H7nJ7yU38': 'JulioProfe',
    'kYJ53u0aJ8o': 'El Traductor',
    'F71H4y2t5aY': 'Academia Vonex'
};

let _previewTimers = {};
let _autoKillTimers = {};

/**
 * Stops all active video previews and destroys their iframes.
 */
function stopAllPreviews() {
    // Cancel all pending hover timers
    Object.values(_previewTimers).forEach(t => clearTimeout(t));
    _previewTimers = {};

    // Cancel all auto-kill timers
    Object.values(_autoKillTimers).forEach(t => clearTimeout(t));
    _autoKillTimers = {};

    // Remove all active preview iframes and badges
    document.querySelectorAll('.card-video-container').forEach(el => {
        // Setting src to '' stops audio immediately before removal
        const iframe = el.querySelector('iframe');
        if (iframe) iframe.src = '';
        el.remove();
    });
    document.querySelectorAll('.card-video-badge').forEach(el => el.remove());
}

/**
 * Initialises Netflix-style hover preview on every .slide-card that has
 * a data-yt-id attribute.
 */
/**
 * Initialises Netflix-style hover preview on every .slide-card that has
 * a data-yt-id attribute.
 */
function initCardPreviews() {
    // Prevent duplicate listeners by keeping track of initialized cards
    document.querySelectorAll('.slide-card[data-yt-id]').forEach((card, index) => {
        if (card.dataset.previewInit) return;
        card.dataset.previewInit = 'true';
        
        const ytId    = card.dataset.ytId;
        const ytStart = parseInt(card.dataset.ytStart || '0', 10);
        const cardKey = ytId + '_' + index;

        // ── mouseenter: schedule preview after 600 ms (like Netflix)
        card.addEventListener('mouseenter', () => {
            // Clear any previous timer for this card
            if (_previewTimers[cardKey]) {
                clearTimeout(_previewTimers[cardKey]);
            }

            _previewTimers[cardKey] = setTimeout(() => {
                // Don't start if presenter overlay or slide modal is open
                if (
                    document.getElementById('presenter-overlay').classList.contains('active') ||
                    document.getElementById('slide-modal').classList.contains('open')
                ) return;

                // Remove any existing preview on this card first
                _destroyCardPreview(card);

                // Build the container
                const container = document.createElement('div');
                container.className = 'card-video-container';

                // Channel badge
                const badge = document.createElement('div');
                badge.className = 'card-video-badge';
                badge.textContent = YT_CHANNEL_NAMES[ytId] || 'YouTube';

                // Inject into the thumb (first child of card)
                const thumb = card.querySelector('.slide-card-thumb');
                if (!thumb) return;
                thumb.appendChild(container);
                thumb.appendChild(badge);

                // Load YouTube iframe directly for preview
                const src = [
                    `https://www.youtube.com/embed/${ytId}`,
                    `?autoplay=1`,
                    `&mute=1`,
                    `&controls=0`,
                    `&modestbranding=1`,
                    `&rel=0`,
                    `&fs=0`,
                    `&iv_load_policy=3`,
                    `&disablekb=1`,
                    `&start=${ytStart}`,
                    `&enablejsapi=0`,
                    `&playsinline=1`
                ].join('');

                const iframe = document.createElement('iframe');
                iframe.src = src;
                iframe.title = 'Vista previa de video';
                iframe.allow = 'autoplay; encrypted-media';
                iframe.setAttribute('allowfullscreen', '');

                container.appendChild(iframe);

                // Fade in YouTube iframe after a short delay
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        container.classList.add('visible');
                        badge.classList.add('visible');
                    });
                });

                // Auto-kill after 15 seconds to save resources
                _autoKillTimers[cardKey] = setTimeout(() => {
                    _destroyCardPreview(card);
                }, 15000);

            }, 600);
        });

        // ── mouseleave: cancel timer and destroy preview immediately
        card.addEventListener('mouseleave', () => {
            if (_previewTimers[cardKey]) {
                clearTimeout(_previewTimers[cardKey]);
                delete _previewTimers[cardKey];
            }
            if (_autoKillTimers[cardKey]) {
                clearTimeout(_autoKillTimers[cardKey]);
                delete _autoKillTimers[cardKey];
            }
            _destroyCardPreview(card);
        });
    });
}

/** Remove the video preview from a single card, stopping audio first. */
function _destroyCardPreview(card) {
    const thumb = card.querySelector('.slide-card-thumb');
    if (!thumb) return;

    const container = thumb.querySelector('.card-video-container');
    if (container) {
        const iframe = container.querySelector('iframe');
        if (iframe) iframe.src = ''; // stops audio immediately
        
        const video = container.querySelector('video');
        if (video) {
            video.pause();
            video.src = '';
            try {
                video.load();
            } catch(e) {}
        }
        
        container.remove();
    }
    const badge = thumb.querySelector('.card-video-badge');
    if (badge) badge.remove();
}

// ── Global Bindings ───────────────────────────────────────────────────────────
window.generateAIProblem = generateAIProblem;
window.toggleAISolution = toggleAISolution;
window.analyzeUserProblem = analyzeUserProblem;
window.selectProfile = selectProfile;
window.openSlideModal = openSlideModal;
window.closeSlideModal = closeSlideModal;
window.startPresenterMode = startPresenterMode;
window.startPresenterFromSlide = startPresenterFromSlide;
window.exitPresenterMode = exitPresenterMode;
window.presenterNext = presenterNext;
window.presenterPrev = presenterPrev;
window.slideCarousel = slideCarousel;
window.showToast = showToast;
window.stopAllPreviews = stopAllPreviews;
window.initCardPreviews = initCardPreviews;
window.openQRModal = openQRModal;
window.closeQRModal = closeQRModal;
window.openAdminModal = openAdminModal;
window.closeAdminModal = closeAdminModal;
window.switchAdminTab = switchAdminTab;
window.saveAdminChanges = saveAdminChanges;
window.resetAdminBlock = resetAdminBlock;
window.switchTorneoBlock = switchTorneoBlock;
window.renderTorneoCards = renderTorneoCards;

// ── Init on DOM Ready ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initRealtimeUplink();
    renderAllMath();
    // Pre-load torneo data so it's ready when the user selects a profile
    loadTorneoData();
    updateTorneoSlides();
    PRESENTER_SLIDES = getPresenterSlides();
});
