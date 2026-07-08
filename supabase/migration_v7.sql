-- ══════════════════════════════════════════════════════════════════════════
-- MIGRACIÓN V7 — Ejecutar en Supabase SQL Editor
-- Agrega columna 'activo' a participantes para baneo/desconexión sutil.
-- ══════════════════════════════════════════════════════════════════════════

ALTER TABLE public.participantes 
    ADD COLUMN IF NOT EXISTS activo BOOLEAN DEFAULT true;
