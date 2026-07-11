-- ═══════════════════════════════════════════════════════════════════════════
-- EDUFLIX — Script SQL de Inicialización para Supabase
-- Pega este script completo en: Supabase Dashboard → SQL Editor → New Query → Run
-- ═══════════════════════════════════════════════════════════════════════════

-- 1. Tabla de perfiles de expositores
CREATE TABLE IF NOT EXISTS public.perfiles (
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    avatar      TEXT NOT NULL DEFAULT '🎓',
    color       TEXT NOT NULL DEFAULT '#e50914',
    created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar Seguridad RLS
ALTER TABLE public.perfiles ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad para Perfiles (Acceso libre para simulación interactiva)
DROP POLICY IF EXISTS "Lectura pública perfiles" ON public.perfiles;
CREATE POLICY "Lectura pública perfiles" ON public.perfiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Inserción pública perfiles" ON public.perfiles;
CREATE POLICY "Inserción pública perfiles" ON public.perfiles FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Actualización pública perfiles" ON public.perfiles;
CREATE POLICY "Actualización pública perfiles" ON public.perfiles FOR UPDATE USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Eliminación pública perfiles" ON public.perfiles;
CREATE POLICY "Eliminación pública perfiles" ON public.perfiles FOR DELETE USING (true);


-- 2. Tabla de retos y casos analizados
CREATE TABLE IF NOT EXISTS public.exposicion_retos (
    id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    topic        TEXT NOT NULL DEFAULT 'General',
    difficulty   TEXT NOT NULL DEFAULT 'Básico',
    problem_text TEXT NOT NULL,
    solution_html TEXT,
    created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar Seguridad RLS
ALTER TABLE public.exposicion_retos ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad para retos/casos
DROP POLICY IF EXISTS "Lectura pública de retos" ON public.exposicion_retos;
CREATE POLICY "Lectura pública de retos" ON public.exposicion_retos FOR SELECT USING (true);

DROP POLICY IF EXISTS "Inserción anónima de retos" ON public.exposicion_retos;
CREATE POLICY "Inserción anónima de retos" ON public.exposicion_retos FOR INSERT WITH CHECK (true);


-- 3. Habilitar Realtime para permitir el control remoto y actualización de perfiles
DO $$
BEGIN
    -- Habilitar realtime en perfiles
    IF NOT EXISTS (
        SELECT 1 FROM pg_publication_rel pr
        JOIN pg_publication p ON p.oid = pr.prpubid
        JOIN pg_class c ON c.oid = pr.prrelid
        WHERE p.pubname = 'supabase_realtime' 
          AND c.relname = 'perfiles' 
          AND c.relnamespace = 'public'::regnamespace
    ) THEN
        ALTER PUBLICATION supabase_realtime ADD TABLE public.perfiles;
    END IF;
END $$;


-- 4. Semilla de perfiles de expositores con tus nombres
INSERT INTO public.perfiles (id, name, avatar, color)
VALUES 
    (1, 'Pablo Claudio', '⚖️', '#e50914'),
    (2, 'Samuel', '🎓', '#6366f1'),
    (3, 'Público General', '👥', '#10b981')
ON CONFLICT (id) DO UPDATE 
SET name = EXCLUDED.name, avatar = EXCLUDED.avatar, color = EXCLUDED.color;
