// ═══════════════════════════════════════════════════════════════════════════
// EDUFLIX.IO — LÓGICA DE LA APLICACIÓN ESTILO NETFLIX (EXPOSICIÓN ÉTICA)
// ═══════════════════════════════════════════════════════════════════════════

// ── Supabase Configuration (Simulación offline por defecto para estabilidad) ──────
const SUPABASE_CONFIG = {
    url: null, 
    anonKey: null,
    useEdgeFunctions: false
};

const supabaseClient = null;

// ── Slide Data (contenido de cada diapositiva para modal y presentador) ─────
const SLIDES_DATA = {
    'slide-coresponsabilidad': {
        title: 'Coresponsabilidad Socioeducativa',
        icon: '🌐',
        heroColor: 'linear-gradient(135deg, #1a0000, #2d0000)',
        coverImage: 'assets/images/escudo_unheval.png',
        description: 'La delimitación de fronteras y evolución de la relación familia-escuela en el marco de la corresponsabilidad.',
        content: `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center;">
                <div>
                    <p style="font-size:1.05rem;color:var(--color-text-secondary);margin-bottom:20px;">
                        Tradicionalmente, la socialización se dividía: el hogar asumía la **socialización primaria** (modales y valores básicos) y la escuela la **instrucción cognitiva** y transmisión de saberes abstractos.
                    </p>
                    <div class="modal-math-box" style="text-align:center;">
                        <span style="font-size:1.1rem;font-weight:700;">Hogar (Afecto y Socialización Primaria)</span><br>
                        <span style="font-size:1.5rem;color:var(--color-accent);display:block;margin:6px 0;">↔</span>
                        <span style="font-size:1.1rem;font-weight:700;color:var(--color-accent);">Escuela (Instrucción y Ciudadanía)</span>
                    </div>
                </div>
                <div style="background:rgba(229,9,20,0.04);border-radius:12px;padding:24px;border:1px solid rgba(229,9,20,0.1);">
                    <h4 style="color:var(--color-accent);font-family:var(--font-heading);font-weight:700;margin-bottom:12px;">Transición Paradigmática</h4>
                    <p style="color:var(--color-text-muted);font-size:0.85rem;line-height:1.6;">
                        Las transformaciones demográficas, inserción laboral de la mujer y el ingreso temprano escolar desarticularon la rigidez de fronteras. Hoy, la pedagogía defiende una **alianza estratégica** donde ambos son corresponsables.
                    </p>
                </div>
            </div>`
    },
    'slide-familia-socializador': {
        title: 'La Familia como Microsistema',
        icon: '👨‍👩‍👧‍👦',
        heroColor: 'linear-gradient(135deg, #001a0d, #002614)',
        coverImage: 'assets/images/logo_educacion_myf.png',
        description: 'La familia constituye el primer nicho ecológico y socializador del individuo.',
        content: `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
                <div>
                    <p style="font-size:1rem;color:var(--color-text-secondary);line-height:1.6;">
                        Es un sistema biopsicosocial complejo donde se configuran los primeros vínculos afectivos. Funciona como un **refugio emocional** y un **faro moral** que amortigua las tensiones escolares.
                    </p>
                    <ul style="list-style:none;padding:0;margin-top:16px;display:flex;flex-direction:column;gap:8px;font-size:0.85rem;color:var(--color-text-muted);">
                        <li>✓ Asimilación de pautas de convivencia.</li>
                        <li>✓ Regulación de impulsos y emociones.</li>
                        <li>✓ Interiorización de valores éticos primarios.</li>
                    </ul>
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:12px;padding:20px;">
                    <h4 style="color:#fff;font-weight:700;margin-bottom:10px;font-size:0.9rem;">Transmisión Transgeneracional</h4>
                    <p style="font-size:0.8rem;color:var(--color-text-muted);line-height:1.5;">
                        La formación socioafectiva recibida por el menor bajo pautas de alta implicación parental favorece que este repita dichos patrones en sus generaciones venideras, consolidando un círculo virtuoso de desarrollo humano.
                    </p>
                </div>
            </div>`
    },
    'slide-esferas-epstein': {
        title: 'Esferas de Influencia de Epstein',
        icon: '📐',
        heroColor: 'linear-gradient(135deg, #00102d, #001a45)',
        coverImage: 'assets/images/math_logic_concept.png',
        description: 'La teoría de esferas superpuestas de Joyce Epstein y las 6 tipologías de involucramiento.',
        content: `
            <p style="font-size:1rem;color:var(--color-text-secondary);margin-bottom:18px;">
                El estudiante está en el centro de un tejido relacional conformado por la familia, la escuela y la comunidad. Estas esferas cooperan bajo el **principio de cuidado mutuo** mediante seis tipologías de prácticas:
            </p>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;font-size:0.8rem;">
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;">
                    <h5 style="color:var(--color-accent);font-weight:700;margin-bottom:6px;">1. Crianza</h5>
                    <p style="color:var(--color-text-muted);">Provisión de salud, nutrición y rutinas estables de sueño en el hogar.</p>
                </div>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;">
                    <h5 style="color:var(--color-accent);font-weight:700;margin-bottom:6px;">2. Comunicación</h5>
                    <p style="color:var(--color-text-muted);">Comprensión de programas escolares y canales bidireccionales.</p>
                </div>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;">
                    <h5 style="color:var(--color-accent);font-weight:700;margin-bottom:6px;">3. Voluntariado</h5>
                    <p style="color:var(--color-text-muted);">Colaboración de los padres en la organización de eventos y tareas de aula.</p>
                </div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;font-size:0.8rem;margin-top:12px;">
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;">
                    <h5 style="color:var(--color-accent);font-weight:700;margin-bottom:6px;">4. Aprendizaje en Casa</h5>
                    <p style="color:var(--color-text-muted);">Ayuda proactiva con las tareas, lectura conjunta y supervisión.</p>
                </div>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;">
                    <h5 style="color:var(--color-accent);font-weight:700;margin-bottom:6px;">5. Toma de Decisiones</h5>
                    <p style="color:var(--color-text-muted);">Liderazgo en la asociación de padres (PTA/PTO) y consejos escolares.</p>
                </div>
                <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;">
                    <h5 style="color:var(--color-accent);font-weight:700;margin-bottom:6px;">6. Colaboración</h5>
                    <p style="color:var(--color-text-muted);">Coordinación con empresas locales y entidades de salud.</p>
                </div>
            </div>`
    },
    'slide-epstein-datos': {
        title: 'Datos Cuantitativos de Epstein',
        icon: '📊',
        heroColor: 'linear-gradient(135deg, #1a0030, #0d0020)',
        coverImage: 'assets/images/math_problem_solving.png',
        description: 'Evidencias empíricas del involucramiento de 707 padres y madres de secundaria.',
        content: `
            <table class="modal-table" style="font-size:0.78rem;">
                <thead>
                    <tr>
                        <th>Tipo de Involucramiento</th>
                        <th>Media Global ($\\bar{x}$)</th>
                        <th>Variabilidad por Género (Prueba T)</th>
                        <th>Variabilidad por Tipo de Centro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Crianza (Tipo 1)</td><td>$\\bar{x} = 0.462$ (DE=3)</td><td>Mujeres: $\\bar{x} = 0.439$; Hombres: $\\bar{x} = 0.536$</td><td>Alto en todos los niveles académicos.</td></tr>
                    <tr><td>Comunicación (Tipo 2)</td><td>$\\bar{x} = 0.674$ (DE=3)</td><td>Mujeres: $\\bar{x} = 0.655$; Hombres: $\\bar{x} = 0.713$</td><td>Menor frecuencia en todos los sectores.</td></tr>
                    <tr><td>Voluntariado (Tipo 3)</td><td>Rango bajo de frec.</td><td>Mujeres: $\\bar{x} = 0.753$; Hombres: $\\bar{x} = 0.758$</td><td>Primer grado: 2.36; Tercero: 2.36</td></tr>
                    <tr><td>Aprendizaje en Hogar (Tipo 4)</td><td>Alta preferencia</td><td>Mujeres: $\\bar{x} = 0.709$; Hombres: $\\bar{x} = 0.812$</td><td>Segundo grado: 3.71; Tercero: 3.59</td></tr>
                    <tr><td>Toma de Decisiones (Tipo 5)</td><td>$\\bar{x} = 0.723$ (DE=3)</td><td>No presenta diferencias de género.</td><td>Públicas: 3.66; Privadas: 3.66</td></tr>
                </tbody>
            </table>`
    },
    'slide-bentler-eqs': {
        title: 'Modelo de Ecuaciones Estructurales EQS',
        icon: '📈',
        heroColor: 'linear-gradient(135deg, #102400, #0a1a00)',
        coverImage: 'assets/images/math_logic_concept.png',
        description: 'Análisis de interrelaciones causales socioeconómicas y cognitivas mediante EQS de Bentler.',
        content: `
            <div style="display:grid;grid-template-columns:1fr 1.2fr;gap:20px;align-items:center;">
                <div>
                    <p style="font-size:0.95rem;color:var(--color-text-secondary);line-height:1.6;">
                        El programa EQS de Bentler demuestra que los determinantes del rendimiento son:
                    </p>
                    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:12px;font-size:0.8rem;margin-top:10px;">
                        <strong>Variables de Rendimiento:</strong>
                        <ul style="padding-left:16px;margin:6px 0 0;color:var(--color-text-muted);">
                            <li>Capacidad verbal: $\\gamma = 0.560, p < 0.001$</li>
                            <li>Nivel cultural de padres: $\\gamma = 0.384, p < 0.001$</li>
                        </ul>
                    </div>
                </div>
                <div style="background:rgba(70,211,105,0.04);border-radius:10px;padding:16px;border:1px solid rgba(70,211,105,0.15);font-size:0.85rem;">
                    <h5 style="color:#46d369;font-weight:700;margin-bottom:8px;">Canalización del Involucramiento</h5>
                    <p style="color:var(--color-text-muted);line-height:1.5;">
                        Las variables socioeconómicas no inciden **directamente** en el logro del alumno, sino que se canalizan **indirectamente** a través del nivel de involucramiento parental:
                        <strong style="color:#fff;display:block;margin-top:6px;text-align:center;font-size:1.1rem;">$\\gamma = 0.069, p < 0.05$</strong>
                    </p>
                </div>
            </div>`
    },
    'slide-pigmalion': {
        title: 'Expectativas y Efecto Pigmalión',
        icon: '✨',
        heroColor: 'linear-gradient(135deg, #1a0000, #2d0000)',
        coverImage: 'assets/images/math_problem_solving.png',
        description: 'La influencia del afecto y las expectativas elevadas como profecías autocumplidas.',
        content: `
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
                <div style="background:rgba(229,9,20,0.05);border:1px solid rgba(229,9,20,0.15);border-radius:10px;padding:20px;text-align:center;">
                    <div style="font-size:2.2rem;margin-bottom:8px;">💖</div>
                    <div style="font-weight:700;color:var(--color-accent);margin-bottom:6px;">94% de Impacto</div>
                    <p style="font-size:0.75rem;color:var(--color-text-muted);">De los padres reconoce que el afecto en el hogar influye directamente en las notas.</p>
                </div>
                <div style="background:rgba(229,9,20,0.05);border:1px solid rgba(229,9,20,0.15);border-radius:10px;padding:20px;text-align:center;">
                    <div style="font-size:2.2rem;margin-bottom:8px;">🎯</div>
                    <div style="font-weight:700;color:var(--color-accent);margin-bottom:6px;">Efecto Pigmalión</div>
                    <p style="font-size:0.75rem;color:var(--color-text-muted);">Las altas expectativas actúan como una profecía del éxito en el aprendizaje.</p>
                </div>
                <div style="background:rgba(229,9,20,0.05);border:1px solid rgba(229,9,20,0.15);border-radius:10px;padding:20px;text-align:center;">
                    <div style="font-size:2.2rem;margin-bottom:8px;">🛡️</div>
                    <div style="font-weight:700;color:var(--color-accent);margin-bottom:6px;">Refugio Moral</div>
                    <p style="font-size:0.75rem;color:var(--color-text-muted);">El microsistema familiar amortigua las tensiones del ámbito social.</p>
                </div>
            </div>`
    },
    'slide-escuela-intersubjetividad': {
        title: 'Escenario de Intersubjetividad',
        icon: '🏫',
        heroColor: 'linear-gradient(135deg, #00102d, #001a45)',
        coverImage: 'assets/images/logo_educacion_myf.png',
        description: 'La escuela como institución de socialización cívica y política secundaria.',
        content: `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;">
                <div>
                    <p style="font-size:0.95rem;color:var(--color-text-secondary);line-height:1.6;">
                        La escuela es la institución mediadora por excelencia entre el entorno local y el global. Desarrolla competencias afectivas, morales y cívicas que estructuran al educando en la sociedad.
                    </p>
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px;font-size:0.8rem;color:var(--color-text-muted);">
                    <strong>Competencias Clave:</strong>
                    <ul style="padding-left:16px;margin:6px 0 0;display:flex;flex-direction:column;gap:4px;">
                        <li>Reconocimiento mutuo del otro.</li>
                        <li>Construcción de una identidad pluralista.</li>
                        <li>Resolución pacífica de conflictos y debates.</li>
                    </ul>
                </div>
            </div>`
    },
    'slide-habermas-civico': {
        title: 'Acción Comunicativa de Habermas',
        icon: '🗣️',
        heroColor: 'linear-gradient(135deg, #001a0d, #002614)',
        coverImage: 'assets/images/math_logic_concept.png',
        description: 'Configurar un espacio libre de coerción fundamentado en la dignidad.',
        content: `
            <div style="background:rgba(70,211,105,0.04);border:1px solid rgba(70,211,105,0.15);border-radius:12px;padding:24px;margin-bottom:16px;text-align:center;">
                <p style="font-family:var(--font-mono);font-size:1.15rem;color:#46d369;margin-bottom:8px;">"Convivencia libre de dominación y coerción"</p>
                <p style="font-size:0.85rem;color:var(--color-text-muted);">El aprendizaje cívico debe alejarse del simple adoctrinamiento teórico de leyes.</p>
            </div>
            <p style="font-size:0.9rem;color:var(--color-text-secondary);line-height:1.6;">
                La escuela prepara para la acción comunicativa mediante la asimilación del derecho propio y del deber colectivo desde una perspectiva de responsabilidad y solidaridad natural cívica.
            </p>`
    },
    'slide-sacristan-inclusion': {
        title: 'Inclusión Ciudadana de Sacristán',
        icon: '📖',
        heroColor: 'linear-gradient(135deg, #1a0030, #0d0020)',
        coverImage: 'assets/images/math_problem_solving.png',
        description: 'La educación formal como la llave indispensables de inclusión en la vida pública activa.',
        content: `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;">
                <div>
                    <p style="font-size:0.95rem;color:var(--color-text-secondary);line-height:1.65;">
                        Gimeno Sacristán (2001) postula que la educación formal actúa como el mecanismo principal de inclusión en las sociedades modernas; carecer de ella equivale a quedar **excluido de la participación pública activa**.
                    </p>
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:20px;">
                    <h5 style="color:var(--color-accent);font-weight:700;margin-bottom:8px;font-size:0.9rem;">Transmisión Cívica</h5>
                    <p style="font-size:0.8rem;color:var(--color-text-muted);line-height:1.5;">
                        Se gestan valores como la tolerancia y la justicia a través de vivencias y experiencias morales prácticas del alumno.
                    </p>
                </div>
            </div>`
    },
    'slide-estrategias-aula': {
        title: 'Estrategias Activas en el Aula',
        icon: '🤝',
        heroColor: 'linear-gradient(135deg, #102400, #0a1a00)',
        coverImage: 'assets/images/logo_educacion_myf.png',
        description: 'Estrategias didácticas activas que priorizan la voz y participación del educando.',
        content: `
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;font-size:0.82rem;">
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:12px;">
                    <strong>💬 Diálogo Constante:</strong>
                    <p style="color:var(--color-text-muted);margin-top:4px;">Asambleas escolares que estimulan la concertación.</p>
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:12px;">
                    <strong>⚖️ Debate de Dilemas:</strong>
                    <p style="color:var(--color-text-muted);margin-top:4px;">Discusión ordenada de dilemas cívicos complejos.</p>
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:12px;">
                    <strong>🧩 Juego Cooperativo:</strong>
                    <p style="color:var(--color-text-muted);margin-top:4px;">Trabajo en equipo y manejo constructivo de la frustración.</p>
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:8px;padding:12px;">
                    <strong>🌍 Interculturalidad:</strong>
                    <p style="color:var(--color-text-muted);margin-top:4px;">Integrar bagajes culturales de alumnos migrantes.</p>
                </div>
            </div>`
    },
    'slide-barreras-fricciones': {
        title: 'Barreras de Cooperación Relacionales',
        icon: '⚠️',
        heroColor: 'linear-gradient(135deg, #1a0000, #2d0000)',
        coverImage: 'assets/images/escudo_unheval.png',
        description: 'La existencia de 49 barreras concretas según Hornby y Lafaele (2011).',
        content: `
            <p style="font-size:0.95rem;color:var(--color-text-secondary);margin-bottom:16px;">
                La relación familia-escuela se enfrenta a obstáculos de naturaleza **estructural** (tiempo, dinero, recursos) y **psicológica** (prejuicios, temores, creencias):
            </p>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;font-size:0.75rem;text-align:center;">
                <div style="background:rgba(229,9,20,0.06);border:1px solid rgba(229,9,20,0.15);border-radius:8px;padding:12px;">
                    <div style="font-size:1.8rem;margin-bottom:6px;">💼</div>
                    <strong style="color:var(--color-accent);display:block;margin-bottom:4px;">Socio-profesionales</strong>
                    <span>Apatía del docente o prejuicios.</span>
                </div>
                <div style="background:rgba(229,9,20,0.06);border:1px solid rgba(229,9,20,0.15);border-radius:8px;padding:12px;">
                    <div style="font-size:1.8rem;margin-bottom:6px;">🚪</div>
                    <strong style="color:var(--color-accent);display:block;margin-bottom:4px;">Institucionales</strong>
                    <span>Reglamentos restrictivos o burocracia.</span>
                </div>
                <div style="background:rgba(229,9,20,0.06);border:1px solid rgba(229,9,20,0.15);border-radius:8px;padding:12px;">
                    <div style="font-size:1.8rem;margin-bottom:6px;">⏳</div>
                    <strong style="color:var(--color-accent);display:block;margin-bottom:4px;">Sociofamiliares</strong>
                    <span>Jornadas largas y sobrecarga.</span>
                </div>
                <div style="background:rgba(229,9,20,0.06);border:1px solid rgba(229,9,20,0.15);border-radius:8px;padding:12px;">
                    <div style="font-size:1.8rem;margin-bottom:6px;">🙈</div>
                    <strong style="color:var(--color-accent);display:block;margin-bottom:4px;">Dinámica Escolar</strong>
                    <span>El estudiante oculta información.</span>
                </div>
            </div>`
    },
    'slide-barreras-detalles': {
        title: 'Desafíos de Cooperación al Detalle',
        icon: '🔍',
        heroColor: 'linear-gradient(135deg, #00102d, #001a45)',
        coverImage: 'assets/images/math_logic_concept.png',
        description: 'Análisis detallado de fricciones estructurales del profesorado y las familias.',
        content: `
            <table class="modal-table" style="font-size:0.75rem;">
                <thead>
                    <tr>
                        <th>Categoría de la Barrera</th>
                        <th>Desafíos Prácticos</th>
                        <th>Mecanismo Relacional</th>
                        <th>Cohesión resultante</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>**Socio-profesionales**</td><td>Falta de capacitación para cooperar, apatía o prejuicios de clase.</td><td>Se percibe la implicación familiar como intrusión a la autonomía.</td><td>Familias pierden confianza y toman posturas defensivas.</td></tr>
                    <tr><td>**Institucionales**</td><td>Reglamentos que prohíben acceso, rigidez de horarios de atención.</td><td>Predominio de un esquema burocrático y asimetría de poder.</td><td>Incomunicación del colegio con el entorno social.</td></tr>
                    <tr><td>**Sociofamiliares**</td><td>Jornadas laborales extensas, temores a la incompetencia curricular.</td><td>Desajuste estructural de horarios laborales actuales.</td><td>Fatiga y delegación del menor en cuidadores informales.</td></tr>
                </tbody>
            </table>`
    },
    'slide-estrategias-alianzas': {
        title: 'Estrategias de Intervención: Alianzas',
        icon: '💡',
        heroColor: 'linear-gradient(135deg, #001a0d, #002614)',
        coverImage: 'assets/images/logo_educacion_myf.png',
        description: 'Talleres de Escuela de Padres activos (ejemplo: programa CEMPA).',
        content: `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center;">
                <div>
                    <p style="font-size:0.95rem;color:var(--color-text-secondary);line-height:1.6;">
                        Superar barreras requiere un plan comunicativo continuo y preventivo. El programa CEMPA <strong>"Construyendo Ciudadanía en Familia"</strong> es un modelo exitoso:
                    </p>
                </div>
                <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:16px;font-size:0.8rem;color:var(--color-text-muted);">
                    <strong>Taller Práctico:</strong>
                    <ul style="padding-left:16px;margin:6px 0 0;display:flex;flex-direction:column;gap:4px;">
                        <li>Educar para el desarrollo del autoconcepto (cartulinas de Vila).</li>
                        <li>Análisis DAFO aplicado a la dinámica familiar.</li>
                        <li>Deconstrucción de prejuicios parentales.</li>
                    </ul>
                </div>
            </div>`
    },
    'slide-johns-hopkins-abc': {
        title: 'El Modelo de Johns Hopkins',
        icon: '📋',
        heroColor: 'linear-gradient(135deg, #1a0030, #0d0020)',
        coverImage: 'assets/images/math_problem_solving.png',
        description: 'ABC de la comunicación y el impacto de canales digitales en la asistencia.',
        content: `
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;">
                <div style="background:rgba(167,139,250,0.05);border:1px solid rgba(167,139,250,0.2);border-radius:10px;padding:18px;">
                    <h5 style="color:#a78bfa;font-weight:700;margin-bottom:8px;font-size:0.85rem;">-24% Ausentismo Escolar</h5>
                    <p style="font-size:0.75rem;color:var(--color-text-muted);line-height:1.5;">
                        El uso de encuestas periódicas en línea y buzones de sugerencias asíncronos reduce el absentismo al detectar temprano problemas emocionales.
                    </p>
                </div>
                <div style="background:rgba(167,139,250,0.05);border:1px solid rgba(167,139,250,0.2);border-radius:10px;padding:18px;">
                    <h5 style="color:#a78bfa;font-weight:700;margin-bottom:8px;font-size:0.85rem;">ABC de Vidal Schmill</h5>
                    <p style="font-size:0.75rem;color:var(--color-text-muted);line-height:1.5;">
                        Garantizar un **Lenguaje Sencillo** traduciendo jergas pedagógicas complejas a boletines con gráficos para evitar la marginación de los padres.
                    </p>
                </div>
            </div>`
    },
    'slide-fin': {
        title: 'Exposición Finalizada',
        icon: '🎬',
        heroColor: 'linear-gradient(135deg, #09090b, #111115)',
        coverImage: 'assets/images/escudo_unheval.png',
        description: '¡Muchas gracias por su atención!',
        content: `
            <div class="netflix-ending-container">
                <div class="netflix-ending-left">
                    <div class="netflix-credits-box">
                        <h3 class="credits-logo" style="font-family:'Poppins', sans-serif;font-weight:900;letter-spacing:-1px;color:#e50914;font-size:2rem;margin-bottom:12px;">EDU<span style="color:#fff;">FLIX</span></h3>
                        <p class="credits-title" style="font-size:0.95rem;color:#e5e5e5;font-weight:700;margin-bottom:18px;">Exposición: Corresponsabilidad Socioeducativa</p>
                        <div class="credits-roll">
                            <div class="credit-row"><span class="credit-label">Expositor:</span> <span class="credit-value">Pablito_DP</span></div>
                            <div class="credit-row"><span class="credit-label">Institución:</span> <span class="credit-value">UNHEVAL (Huánuco)</span></div>
                            <div class="credit-row"><span class="credit-label">Facultad:</span> <span class="credit-value">Educación Secundaria</span></div>
                            <div class="credit-row"><span class="credit-label">Presentador:</span> <span class="credit-value">Eduflix Presenter 2.0</span></div>
                        </div>
                        <div class="thanks-message">⚖️ ¡Muchas gracias por su atención! ⚖️</div>
                    </div>
                </div>
                <div class="netflix-ending-right">
                    <div class="netflix-next-card">
                        <div class="next-banner">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> RECOMENDADO A CONTINUACIÓN
                        </div>
                        <div class="next-card-content">
                            <div class="next-title">Taller de Casos con IA</div>
                            <p class="next-desc">Explora dilemas de coeducación y obtén resoluciones automáticas en tiempo real.</p>
                            <div class="countdown-row">
                                <button class="btn-netflix-red btn-next-act" onclick="exitPresenterMode(); window.location.hash='#ai-section'; document.getElementById('ai-section').scrollIntoView({behavior:'smooth'});" style="padding:10px 20px; font-weight:700;">
                                    Ir al Taller ahora <span class="countdown-sec" id="ending-countdown">10</span>
                                </button>
                                <button class="btn-netflix-grey btn-next-act" onclick="exitPresenterMode(); window.location.hash='#row-fundamentos'; document.getElementById('row-fundamentos').scrollIntoView({behavior:'smooth'});" style="padding:10px 20px;">
                                    Volver a catálogo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }
};

// All slides in presenter order
const PRESENTER_SLIDES = [
    'slide-coresponsabilidad', 'slide-familia-socializador', 'slide-esferas-epstein', 'slide-epstein-datos',
    'slide-bentler-eqs', 'slide-pigmalion', 'slide-escuela-intersubjetividad', 'slide-habermas-civico',
    'slide-sacristan-inclusion', 'slide-estrategias-aula', 'slide-barreras-fricciones', 'slide-barreras-detalles',
    'slide-estrategias-alianzas', 'slide-johns-hopkins-abc', 'slide-fin'
];

// Cuestionario data for the local simulation generator (Offline)
const MOCK_PROBLEMS = {
    'Crianza': {
        'Básico': {
            problem: "Caso 1: En un centro escolar, la profesora nota que un niño de 8 años se queda dormido sistemáticamente en las primeras clases. Al comunicarse con el hogar, descubre que la madre trabaja en el mercado nocturno de Huánuco y el padre no supervisa las rutinas de sueño del menor, aduciendo que 'cuidar el sueño es asunto de la madre'. ¿Qué tipología de Epstein se ve vulnerada y qué acción inmediata se debe tomar?",
            solution: `<p><span class="modal-step-pill">1. Identificación</span> Se vulnera la **Crianza (Tipo 1)** de Epstein, que exige la provisión de rutinas estables de sueño e higiene en el hogar de forma equitativa.</p>
                       <p style="margin-top:8px;"><span class="modal-step-pill">2. Análisis</span> El desajuste de roles por género (el padre delega la responsabilidad) genera fatiga extrema en el estudiante, afectando su desempeño cognitivo inicial.</p>
                       <p style="margin-top:8px;"><span class="modal-step-pill">3. Recomendación</span> Implementar una sesión de orientación familiar desde el Departamento Psicológico escolar para involucrar corresponsablemente al padre en las rutinas de cuidado.</p>`,
            answer: "Crianza"
        },
        'Avanzado': {
            problem: "Caso 2: En la preselección escolar de la UNHEVAL se observa que los estudiantes con mayores recursos económicos tienen acceso a clases de refuerzo y asesoría, mientras que las familias de bajos recursos reportan jornadas laborales agrícolas de hasta 14 horas, delegando el cuidado escolar en hermanos menores. ¿Cómo se explica este impacto según el modelo EQS de Bentler y las esferas de Epstein?",
            solution: `<p><span class="modal-step-pill">1. Análisis EQS</span> Las ecuaciones de Bentler demuestran que el nivel socioeconómico de origen no incide directamente en el rendimiento, sino indirectamente (gamma = 0.069) a través del nivel de involucramiento parental.</p>
                       <p style="margin-top:8px;"><span class="modal-step-pill">2. Explicación</span> La sobrecarga laboral actúa como una barrera sociofamiliar estructural que impide la provisión de un ambiente físico libre de distractores.</p>
                       <p style="margin-top:8px;"><span class="modal-step-pill">3. Propuesta</span> Crear espacios de estudio asistido o tutorías gratuitas dentro de la escuela para mitigar la brecha de apoyo en el hogar.</p>`,
            answer: "Involucramiento"
        }
    },
    'Barreras': {
        'Básico': {
            problem: "Caso 3: Los profesores de un colegio consideran que las familias rurales de Huánuco son 'apáticas' y 'no tienen las capacidades cognitivas' para ayudar a sus hijos con las tareas curriculares de ciencia. Por ende, los docentes no envían guías de trabajo a casa. ¿Qué barrera clasificada por Hornby y Lafaele (2011) se está manifestando aquí?",
            solution: `<p><span class="modal-step-pill">1. Identificación</span> Se trata de una **Barrera Socio-profesional del Profesorado**.</p>
                       <p style="margin-top:8px;"><span class="modal-step-pill">2. Detalle</span> Se manifiesta una actitud prejuiciosa y estereotipada del profesor que desvaloriza las habilidades parentales y la diversidad cultural de la comunidad rural.</p>
                       <p style="margin-top:8px;"><span class="modal-step-pill">3. Solución</span> Capacitación docente en competencias de inclusión, valoración cultural y diseño de tareas participativas adaptadas al entorno rural.</p>`,
            answer: "Socio-profesional"
        },
        'Avanzado': {
            problem: "Caso 4: Un centro educativo impone un horario único de atención de padres de 10:00 a 11:30 a.m. los días martes. Quienes no asistan a las citas del tutor reciben una amonestación económica. El 60% de los padres trabaja en el sector informal o comercial y no puede abandonar sus puestos en ese horario. ¿Cómo se clasifica esta barrera y cómo se puede superar según los informes de Johns Hopkins?",
            solution: `<p><span class="modal-step-pill">1. Clasificación</span> Es una **Barrera Institucional y Escolar** (puertas cerradas y asimetría de horarios).</p>
                       <p style="margin-top:8px;"><span class="modal-step-pill">2. Impacto</span> Consolida una barrera burocrática y punitiva que en lugar de invitar, aleja y genera rechazo familiar hacia la institución escolar.</p>
                       <p style="margin-top:8px;"><span class="modal-step-pill">3. Corrección</span> Reconfigurar los canales: usar encuestas en línea, programar reuniones virtuales asincrónicas y buzones virtuales de sugerencias (reducción demostrada del ausentismo en un 24%).</p>`,
            answer: "Institucional"
        }
    }
};

// ── State ────────────────────────────────────────────────────────────────────
let activeProfile = null;
let presenterIndex = 0;
let carouselOffsets = {};
let lastSolutionHtml = '';
let lastExpectedAnswer = '';

// ── Profiles Management & Selection ──────────────────────────────────────────
const DEFAULT_PROFILES = [
    { name: 'Expositor UNHEVAL', avatar: '⚖️', color: '#e50914' },
    { name: 'Invitado Docente', avatar: '🎓', color: '#6366f1' },
    { name: 'Público General', avatar: '👥', color: '#10b981' }
];

let currentEditingProfileIndex = null;
let localProfilesCache = [];

async function initProfiles() {
    let profiles = localStorage.getItem('eduflix_profiles');
    if (!profiles) {
        profiles = JSON.stringify(DEFAULT_PROFILES);
        localStorage.setItem('eduflix_profiles', profiles);
    }
    localProfilesCache = JSON.parse(profiles);
    renderProfiles();
}

function getProfiles() {
    return localProfilesCache.length > 0 ? localProfilesCache : DEFAULT_PROFILES;
}

function saveProfiles(profiles) {
    localProfilesCache = profiles;
    localStorage.setItem('eduflix_profiles', JSON.stringify(profiles));
}

function renderProfiles() {
    const grid = document.getElementById('profiles-grid-container');
    if (!grid) return;

    const profiles = getProfiles();
    let html = '';
    profiles.forEach((p, idx) => {
        html += `
        <div class="profile-card" role="button" tabindex="0" aria-label="Seleccionar perfil de ${p.name}"
             onclick="selectProfile('${p.name}', '${p.avatar}', '${p.color}')"
             onkeydown="if(event.key==='Enter') selectProfile('${p.name}','${p.avatar}','${p.color}')">
            <div class="profile-avatar-icon" style="background:linear-gradient(135deg,${p.color}88,${p.color}); color:#fff; display:flex; align-items:center; justify-content:center; font-size:3.5rem;">
                ${p.avatar}
            </div>
            <span class="profile-name">${p.name}</span>
        </div>`;
    });

    html += `
    <div class="profile-card" role="button" tabindex="0" aria-label="Entrar como invitado"
         onclick="selectProfile('Invitado', '👤', '#6d6d6e')"
         onkeydown="if(event.key==='Enter') selectProfile('Invitado','👤','#6d6d6e')">
        <div class="profile-avatar-icon" style="background:rgba(109,109,110,0.2); border:3px solid transparent; color:#6d6d6e; display:flex; align-items:center; justify-content:center; font-size:3.5rem;">
            <i class="fa-solid fa-user-plus"></i>
        </div>
        <span class="profile-name">Invitado</span>
    </div>`;

    grid.innerHTML = html;
}

function openProfileManageModal() {
    renderProfileManageList();
    document.getElementById('profile-list-view').style.display = 'block';
    document.getElementById('profile-form-view').style.display = 'none';
    document.getElementById('profile-manage-modal').classList.add('open');
}

function closeProfileManageModal() {
    document.getElementById('profile-manage-modal').classList.remove('open');
    renderProfiles();
}

function renderProfileManageList() {
    const list = document.getElementById('profile-manage-list');
    if (!list) return;
    const profiles = getProfiles();
    let html = '';
    profiles.forEach((p, idx) => {
        html += `
        <div class="profile-manage-item">
            <div class="profile-manage-item-info">
                <div class="profile-manage-item-avatar" style="background:${p.color};">
                    ${p.avatar}
                </div>
                <span class="profile-manage-item-name">${p.name}</span>
            </div>
            <div class="profile-manage-item-actions">
                <button class="profile-action-btn" onclick="showEditProfileForm(${idx})"><i class="fa-solid fa-pen"></i></button>
                <button class="profile-action-btn delete" onclick="deleteProfile(${idx})"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`;
    });
    list.innerHTML = html || '<p style="color:var(--color-text-muted);font-size:0.8rem;text-align:center;padding:12px 0;">No hay perfiles personalizados.</p>';
}

function showAddProfileForm() {
    currentEditingProfileIndex = null;
    document.getElementById('profile-form-title').textContent = 'Añadir Perfil';
    document.getElementById('profile-input-name').value = '';
    document.getElementById('profile-list-view').style.display = 'none';
    document.getElementById('profile-form-view').style.display = 'block';
    renderAvatarChoices();
    renderColorChoices();
}

function showEditProfileForm(idx) {
    currentEditingProfileIndex = idx;
    const p = getProfiles()[idx];
    document.getElementById('profile-form-title').textContent = 'Editar Perfil';
    document.getElementById('profile-input-name').value = p.name;
    document.getElementById('profile-list-view').style.display = 'none';
    document.getElementById('profile-form-view').style.display = 'block';
    renderAvatarChoices(p.avatar);
    renderColorChoices(p.color);
}

const AVATAR_OPTIONS = ['⚖️', '🎓', '📚', '👥', '🍎', '⭐', '🧩'];
const COLOR_OPTIONS = ['#e50914', '#6366f1', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
let selectedAvatar = '⚖️';
let selectedColor = '#e50914';

function renderAvatarChoices(active = '⚖️') {
    selectedAvatar = active;
    const container = document.getElementById('avatar-choices-container');
    container.innerHTML = AVATAR_OPTIONS.map(a => `
        <button class="profile-manage" style="padding:6px 12px; font-size:1.5rem; border:2px solid ${a===active?'#e50914':'transparent'}" onclick="selectAvatarChoice('${a}')">
            ${a}
        </button>
    `).join('');
}

function selectAvatarChoice(a) {
    renderAvatarChoices(a);
}

function renderColorChoices(active = '#e50914') {
    selectedColor = active;
    const container = document.getElementById('color-choices-container');
    container.innerHTML = COLOR_OPTIONS.map(c => `
        <button style="width:30px;height:30px;border-radius:4px;background:${c};border:2px solid ${c===active?'#fff':'transparent'}" onclick="selectColorChoice('${c}')"></button>
    `).join('');
}

function selectColorChoice(c) {
    renderColorChoices(c);
}

function saveProfileForm() {
    const name = document.getElementById('profile-input-name').value.trim();
    if (!name) { showToast('Por favor, ingresa un nombre.', 'warning'); return; }

    const profiles = getProfiles();
    if (currentEditingProfileIndex === null) {
        // Add
        profiles.push({ name, avatar: selectedAvatar, color: selectedColor });
    } else {
        // Edit
        profiles[currentEditingProfileIndex] = { name, avatar: selectedAvatar, color: selectedColor };
    }
    saveProfiles(profiles);
    showToast('Perfil guardado.', 'success');
    openProfileManageModal();
}

function deleteProfile(idx) {
    const profiles = getProfiles();
    const name = profiles[idx].name;
    if (confirm(`¿Estás seguro de eliminar el perfil de ${name}?`)) {
        profiles.splice(idx, 1);
        saveProfiles(profiles);
        showToast('Perfil eliminado.', 'info');
        renderProfileManageList();
    }
}

function cancelProfileForm() {
    document.getElementById('profile-list-view').style.display = 'block';
    document.getElementById('profile-form-view').style.display = 'none';
}

function selectProfile(name, avatarSrc, accentColor) {
    activeProfile = { name, avatarSrc, accentColor };
    const headerAvatar = document.getElementById('header-avatar');
    if (headerAvatar) {
        headerAvatar.style.background = `${accentColor}22`;
        headerAvatar.textContent = avatarSrc;
    }

    const profileScreen = document.getElementById('profile-screen');
    const mainApp = document.getElementById('main-app');

    profileScreen.classList.add('fade-out');

    setTimeout(() => {
        profileScreen.style.display = 'none';
        mainApp.classList.add('visible');
        renderAllMath();
        initCardPreviews();
        initCardBackgrounds();
    }, 800);
}

// ── Carousel Logic ───────────────────────────────────────────────────────────
function slideCarousel(rowId, direction) {
    const track = document.getElementById(`track-${rowId}`);
    if (!track) return;

    const cardWidth = 264 + 16; 
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
        ? `background: linear-gradient(to top, rgba(20,20,20,1) 0%, rgba(20,20,20,0.4) 50%, rgba(20,20,20,0.85) 100%), url('${data.coverImage}') center/cover;`
        : `background: ${data.heroColor};`;

    content.innerHTML = `
        <div class="modal-hero" style="${bgStyle}">
            <div class="modal-hero-bg">${data.icon}</div>
            <div class="modal-hero-content">
                <h2 class="modal-hero-title">${data.title}</h2>
                <div class="modal-hero-actions">
                    <button class="btn-play" style="font-size:0.9rem;padding:10px 20px;" onclick="closeSlideModal();startPresenterFromSlide('${slideId}')">
                        <i class="fa-solid fa-play"></i> Presentar Tema
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
                    <p><span class="modal-meta-label">Tema: </span><span class="modal-meta-value">Coresponsabilidad</span></p>
                    <p><span class="modal-meta-label">Exposición: </span><span class="modal-meta-value">Nivel UNHEVAL</span></p>
                </div>
            </div>
            <div class="modal-content-area">
                ${data.content}
            </div>
        </div>`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
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
    _presenterRenderAll();
    document.getElementById('presenter-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => _presenterScrollTo(presenterIndex));
}

function startPresenterFromSlide(slideId) {
    const idx = PRESENTER_SLIDES.indexOf(slideId);
    presenterIndex = idx >= 0 ? idx : 0;
    _presenterRenderAll();
    document.getElementById('presenter-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => _presenterScrollTo(presenterIndex));
}

let endingTimer = null;
function startEndingCountdown() {
    stopEndingCountdown();
    let sec = 10;
    const el = document.getElementById('ending-countdown');
    if (el) el.textContent = sec;
    endingTimer = setInterval(() => {
        sec--;
        const el2 = document.getElementById('ending-countdown');
        if (el2) el2.textContent = sec;
        if (sec <= 0) {
            stopEndingCountdown();
            exitPresenterMode();
            const aiSec = document.getElementById('ai-section');
            if (aiSec) aiSec.scrollIntoView({ behavior: 'smooth' });
            window.location.hash = '#ai-section';
        }
    }, 1000);
}
function stopEndingCountdown() {
    if (endingTimer) {
        clearInterval(endingTimer);
        endingTimer = null;
    }
}

function exitPresenterMode() {
    document.getElementById('presenter-overlay').classList.remove('active');
    document.body.style.overflow = '';
    stopEndingCountdown();
}

function _presenterRenderAll() {
    const view = document.getElementById('presenter-slide-view');
    if (!view) return;

    view.innerHTML = PRESENTER_SLIDES.map((slideId, i) => {
        const data = SLIDES_DATA[slideId];
        if (!data) return '';
        return `
        <div class="presenter-slide-card${i === presenterIndex ? ' ps-active' : ''}" id="ps-card-${i}" data-ps-index="${i}">
            <div class="ps-badge"><i class="fa-solid fa-bookmark"></i> ${i + 1} / ${PRESENTER_SLIDES.length}</div>
            <h2 style="font-family:var(--font-heading);font-size:1.8rem;font-weight:800;margin-bottom:16px;display:flex;align-items:center;gap:12px;padding-bottom:12px;border-bottom:2px solid var(--color-accent);">
                <span>${data.icon}</span> ${data.title}
            </h2>
            <p style="font-size:1rem;color:var(--color-text-muted);margin-bottom:24px;">${data.description}</p>
            <div style="font-size:1.05rem;line-height:1.8;">${data.content}</div>
        </div>`;
    }).join('');

    _presenterUpdateIndicator();
    setTimeout(() => renderAllMath(), 50);
}

function _presenterScrollTo(idx) {
    const card = document.getElementById(`ps-card-${idx}`);
    if (!card) return;
    card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    document.querySelectorAll('.presenter-slide-card').forEach((el, i) => {
        el.classList.toggle('ps-active', i === idx);
    });
}

function _presenterUpdateIndicator() {
    const ind = document.getElementById('presenter-page-indicator');
    if (ind) ind.textContent = `${presenterIndex + 1} / ${PRESENTER_SLIDES.length}`;

    const bar = document.getElementById('presenter-progress-bar');
    if (bar) {
        const pct = ((presenterIndex + 1) / PRESENTER_SLIDES.length) * 100;
        bar.style.width = `${pct}%`;
    }
}

function presenterNext() {
    if (presenterIndex < PRESENTER_SLIDES.length - 1) {
        playSound('click');
        presenterIndex++;
        _presenterScrollTo(presenterIndex);
        _presenterUpdateIndicator();
        stopEndingCountdown();
        if (PRESENTER_SLIDES[presenterIndex] === 'slide-fin') {
            startEndingCountdown();
        }
    }
}

function presenterPrev() {
    if (presenterIndex > 0) {
        playSound('click');
        presenterIndex--;
        _presenterScrollTo(presenterIndex);
        _presenterUpdateIndicator();
        stopEndingCountdown();
    }
}

// Keyboard nav in Presenter mode
document.addEventListener('keydown', (e) => {
    const pres = document.getElementById('presenter-overlay');
    if (pres && pres.classList.contains('active')) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            presenterNext();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            presenterPrev();
        } else if (e.key === 'Escape') {
            exitPresenterMode();
        }
    }
});

// ── AI Taller / Dilemas Logic (Simulación Local) ───────────────────────────
async function generateAIProblem() {
    const diff = document.getElementById('select-diff').value;
    const topic = document.getElementById('select-topic').value;
    const btn = document.getElementById('btn-generate-ai');
    const output = document.getElementById('ai-problem-output');
    const btnSol = document.getElementById('btn-reveal-solution');

    const solOutput = document.getElementById('ai-solution-output');
    if (solOutput) {
        solOutput.innerHTML = '';
        solOutput.style.display = 'none';
    }

    output.innerHTML = `<div style="display:flex;align-items:center;gap:10px;height:100%;justify-content:center;">
        <i class="fa-solid fa-spinner fa-spin" style="color:var(--color-accent);font-size:1.5rem;"></i>
        <span style="color:var(--color-text-muted);">Generando caso socioeducativo...</span>
    </div>`;
    btn.disabled = true; btnSol.disabled = true;

    try {
        const challenge = await new Promise(resolve => {
            setTimeout(() => {
                const group = MOCK_PROBLEMS[topic] || MOCK_PROBLEMS['Crianza'];
                const item = group[diff] || group['Básico'];
                resolve(item);
            }, 800);
        });

        output.innerHTML = `<div>
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
                <p style="color:#46d369;font-weight:700;font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;margin:0;">¡Caso Generado!</p>
                <button class="speaker-btn" style="margin-left:0; width: 30px; height: 30px;" onclick="speakText(document.getElementById('challenge-text').textContent)" title="Escuchar caso">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <p id="challenge-text" style="color:var(--color-text-secondary);line-height:1.65;margin-bottom:12px;font-size:0.85rem;">${challenge.problem}</p>
            
            <div class="practice-container">
                <span class="practice-title">📝 Diagnóstico (Escribe tu respuesta: ej. Crianza o Involucramiento o Institucional o Socio-profesional):</span>
                <div class="practice-input-row">
                    <input type="text" id="practice-user-answer" class="practice-input" placeholder="Ingresa tu respuesta..." onkeydown="if(event.key==='Enter') checkTallerAnswer()">
                    <button class="practice-btn-check" onclick="checkTallerAnswer()">
                        <i class="fa-solid fa-circle-check"></i> Verificar
                    </button>
                </div>
                <div id="practice-feedback-msg" class="practice-feedback"></div>
            </div>
        </div>`;

        lastSolutionHtml = challenge.solution;
        lastExpectedAnswer = challenge.answer;
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
    const solOutput = document.getElementById('ai-solution-output');
    if (solOutput) {
        solOutput.innerHTML = `<div>
            <p style="color:#46d369;font-weight:700;font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Resolución y Análisis del Caso:</p>
            <div style="font-size:0.82rem;display:flex;flex-direction:column;gap:8px;">${lastSolutionHtml}</div>
        </div>`;
        solOutput.style.display = 'block';
        solOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    document.getElementById('btn-reveal-solution').disabled = true;
    setTimeout(() => renderAllMath(), 50);
}

function checkTallerAnswer() {
    const input = document.getElementById('practice-user-answer');
    const msg = document.getElementById('practice-feedback-msg');
    if (!input || !msg) return;

    const userText = input.value.trim().toLowerCase();
    const expected = lastExpectedAnswer.toLowerCase();

    if (!userText) { showToast('Por favor, escribe una respuesta.', 'warning'); return; }

    if (userText.includes(expected) || expected.includes(userText)) {
        playSound('bell');
        msg.className = 'practice-feedback correct';
        msg.innerHTML = `<i class="fa-solid fa-circle-check"></i> ¡Excelente! Has identificado el factor ético clave.`;
        showToast('Respuesta correcta', 'success');
    } else {
        msg.className = 'practice-feedback incorrect';
        msg.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Diagnóstico incorrecto. Intenta con: "${lastExpectedAnswer}".`;
        showToast('Intenta otra vez', 'error');
    }
}

async function analyzeUserProblem() {
    const text = document.getElementById('user-problem-input').value.trim();
    const btn = document.getElementById('btn-analyze-ai');
    const output = document.getElementById('ai-analysis-output');

    if (!text) { showToast('Por favor, escribe un caso antes de analizar.', 'warning'); return; }

    output.innerHTML = `<div style="display:flex;align-items:center;gap:10px;height:100%;justify-content:center;">
        <i class="fa-solid fa-circle-notch fa-spin" style="color:var(--color-accent);font-size:1.5rem;"></i>
        <span style="color:var(--color-text-muted);">Analizando barreras socioeducativas...</span>
    </div>`;
    btn.disabled = true;

    try {
        const analysis = await new Promise(resolve => {
            setTimeout(() => {
                let factor = "Estructural";
                if (text.toLowerCase().includes("docente") || text.toLowerCase().includes("profesor")) {
                    factor = "Socio-profesional de Hornby (Prejuicio/Apatía)";
                } else if (text.toLowerCase().includes("horario") || text.toLowerCase().includes("cita") || text.toLowerCase().includes("reunión")) {
                    factor = "Institucional / Escolar (Rigidez de Tiempos)";
                } else if (text.toLowerCase().includes("trabajo") || text.toLowerCase().includes("jornada") || text.toLowerCase().includes("dinero")) {
                    factor = "Sociofamiliar / Económica (Dificultad de conciliación)";
                } else if (text.toLowerCase().includes("hijo") || text.toLowerCase().includes("oculta") || text.toLowerCase().includes("nota")) {
                    factor = "Dinámica del Estudiante (Ocultamiento evasivo)";
                }

                resolve(`
                    <div style="display:flex;flex-direction:column;gap:10px;">
                        <p style="color:#54b3d6;font-weight:700;">Análisis del Conflicto:</p>
                        <p><span class="step-pill">1. Clasificación</span> Factor predominante estimado: <strong>${factor}</strong></p>
                        <p style="color:var(--color-text-muted);font-size:0.8rem;">El caso ingresado evidencia una fricción de corresponsabilidad en el modelo de Epstein. Se recomienda aplicar el ABC de la comunicación (simplificar lenguaje y flexibilizar horarios) para mitigar el conflicto.</p>
                    </div>
                `);
            }, 1000);
        });

        output.innerHTML = `<div style="font-size:0.82rem;">${analysis}</div>`;
        setTimeout(() => renderAllMath(), 50);
    } catch (e) {
        output.innerHTML = `<span style="color:var(--color-accent);">Error: ${e.message}</span>`;
    } finally {
        btn.disabled = false;
    }
}

// ── Text-to-Speech (Speaker) ──────────────────────────────────────────────────
function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        window.speechSynthesis.speak(utterance);
    } else {
        showToast('TTS no soportado en este navegador.', 'warning');
    }
}

// ── KaTeX Math Render ────────────────────────────────────────────────────────
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

// ── Toast notifications ──────────────────────────────────────────────────────
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'circle-check';
    else if (type === 'error') icon = 'circle-xmark';
    else if (type === 'warning') icon = 'triangle-exclamation';

    toast.innerHTML = `<i class="fa-solid fa-${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('visible');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ── Hover Preview and Video Backgrounds ─────────────────────────────────────
let _previewTimers = {};
let _autoKillTimers = {};

function stopAllPreviews() {
    Object.values(_previewTimers).forEach(t => clearTimeout(t));
    _previewTimers = {};
    Object.values(_autoKillTimers).forEach(t => clearTimeout(t));
    _autoKillTimers = {};

    document.querySelectorAll('.card-video-container').forEach(el => el.remove());
    document.querySelectorAll('.card-video-badge').forEach(el => el.remove());
}

function initCardPreviews() {
    document.querySelectorAll('.slide-card[data-yt-id]').forEach((card, index) => {
        if (card.dataset.previewInit) return;
        card.dataset.previewInit = 'true';

        const ytId = card.dataset.ytId;
        const ytStart = parseInt(card.dataset.ytStart || '0', 10);
        const cardKey = ytId + '_' + index;

        card.addEventListener('mouseenter', () => {
            if (_previewTimers[cardKey]) clearTimeout(_previewTimers[cardKey]);

            _previewTimers[cardKey] = setTimeout(() => {
                if (
                    document.getElementById('presenter-overlay').classList.contains('active') ||
                    document.getElementById('slide-modal').classList.contains('open')
                ) return;

                _destroyCardPreview(card);

                const container = document.createElement('div');
                container.className = 'card-video-container';

                const badge = document.createElement('div');
                badge.className = 'card-video-badge';
                badge.textContent = 'EDUFLIX Preview';

                const thumb = card.querySelector('.slide-card-thumb');
                if (!thumb) return;
                thumb.appendChild(container);
                thumb.appendChild(badge);

                // Use the local video files to preview on hover
                const video = document.createElement('video');
                video.src = 'assets/videos/CJEsybfPQSE.mp4'; // Use the local video
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                video.style.width = '100%';
                video.style.height = '100%';
                video.style.objectFit = 'cover';

                container.appendChild(video);

                requestAnimationFrame(() => {
                    container.classList.add('visible');
                    badge.classList.add('visible');
                });

                _autoKillTimers[cardKey] = setTimeout(() => {
                    _destroyCardPreview(card);
                }, 15000);

            }, 600);
        });

        card.addEventListener('mouseleave', () => {
            if (_previewTimers[cardKey]) clearTimeout(_previewTimers[cardKey]);
            if (_autoKillTimers[cardKey]) clearTimeout(_autoKillTimers[cardKey]);
            _destroyCardPreview(card);
        });
    });
}

function _destroyCardPreview(card) {
    const thumb = card.querySelector('.slide-card-thumb');
    if (!thumb) return;

    const container = thumb.querySelector('.card-video-container');
    if (container) {
        const video = container.querySelector('video');
        if (video) {
            video.pause();
            video.src = '';
        }
        container.remove();
    }
    const badge = thumb.querySelector('.card-video-badge');
    if (badge) badge.remove();
}

function initCardBackgrounds() {
    document.querySelectorAll('.slide-card').forEach(card => {
        const onclickAttr = card.getAttribute('onclick') || '';
        const match = onclickAttr.match(/openSlideModal\(['"]([^'"]+)['"]\)/);
        if (!match) return;

        const slideId = match[1];
        const slideData = SLIDES_DATA[slideId];
        if (!slideData) return;

        const thumb = card.querySelector('.slide-card-thumb');
        if (thumb) {
            if (slideData.coverImage) {
                thumb.style.background = `linear-gradient(to top, rgba(20,20,20,0.85) 0%, rgba(20,20,20,0.2) 60%, rgba(20,20,20,0.7) 100%), url('${slideData.coverImage}') center/cover`;
            } else {
                thumb.style.background = slideData.heroColor;
            }
        }
    });
}

// ── Bindings ──────────────────────────────────────────────────────────────
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
window.openProfileManageModal = openProfileManageModal;
window.closeProfileManageModal = closeProfileManageModal;
window.showAddProfileForm = showAddProfileForm;
window.showEditProfileForm = showEditProfileForm;
window.selectAvatarChoice = selectAvatarChoice;
window.selectColorChoice = selectColorChoice;
window.saveProfileForm = saveProfileForm;
window.deleteProfile = deleteProfile;
window.cancelProfileForm = cancelProfileForm;
window.checkTallerAnswer = checkTallerAnswer;
window.speakText = speakText;
window.initCardBackgrounds = initCardBackgrounds;

// Page initialization
document.addEventListener('DOMContentLoaded', () => {
    initProfiles();
    renderAllMath();
});
