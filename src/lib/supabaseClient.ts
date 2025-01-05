// src/lib/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

// Reemplaza estos valores con tus credenciales de Supabase
const SUPABASE_URL = 'https://odolofjixzwxfntaveii.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kb2xvZmppeHp3eGZudGF2ZWlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMDg0OTEsImV4cCI6MjAyODY4NDQ5MX0.VDK9k1PIyr6taMG5eIfNpNbwKfhXGtBvuspawOqs3r8';

// Crear el cliente de Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
