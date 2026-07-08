-- ══════════════════════════════════════════════════════════════════════════
-- MIGRACIÓN V6 — Ejecutar en Supabase SQL Editor
-- Agrega columnas para almacenar respuestas y resoluciones personalizadas o de la IA.
-- ══════════════════════════════════════════════════════════════════════════

ALTER TABLE public.estado_juego 
    ADD COLUMN IF NOT EXISTS pregunta_custom_respuesta TEXT,
    ADD COLUMN IF NOT EXISTS pregunta_custom_resolucion TEXT;
