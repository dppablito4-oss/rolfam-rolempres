-- ═══════════════════════════════════════════════════════════════════════════
-- ECUACIONES.io — Script SQL para Supabase
-- Pega esto en: Supabase Dashboard → SQL Editor → New Query → Run
-- ═══════════════════════════════════════════════════════════════════════════

-- 1. Crear la tabla de retos/análisis generados
CREATE TABLE IF NOT EXISTS public.exposicion_retos (
    id           uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
    topic        text        NOT NULL DEFAULT 'General',
    difficulty   text        NOT NULL DEFAULT 'Básico',
    problem_text text        NOT NULL,
    solution_html text,
    created_at   timestamptz DEFAULT now()
);

-- 2. Índice para ordenar por fecha fácilmente
CREATE INDEX IF NOT EXISTS idx_exposicion_retos_created
    ON public.exposicion_retos (created_at DESC);

-- 3. Habilitar RLS (Row Level Security) — recomendado siempre
ALTER TABLE public.exposicion_retos ENABLE ROW LEVEL SECURITY;

-- 4. Política de lectura pública (cualquiera puede leer)
CREATE POLICY "Lectura pública de retos"
    ON public.exposicion_retos
    FOR SELECT
    USING (true);

-- 5. Política de inserción anónima (el cliente puede insertar sin login)
CREATE POLICY "Inserción anónima de retos"
    ON public.exposicion_retos
    FOR INSERT
    WITH CHECK (true);

-- ──────────────────────────────────────────────────────────────────────────────
-- VERIFICACIÓN: ejecuta esto para confirmar que la tabla existe y tiene datos
-- SELECT * FROM public.exposicion_retos ORDER BY created_at DESC LIMIT 20;
-- ──────────────────────────────────────────────────────────────────────────────
