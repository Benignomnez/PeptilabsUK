import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://znjjzernrorapgrfjsqt.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuamp6ZXJucm9yYXBncmZqc3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzQ2NzMsImV4cCI6MjA5NDAxMDY3M30.b9Hsqh8c6WN__0HOC6n_lQD2oYjgbNWy5Nw6H8f3P-4'

export const supabase = createClient(supabaseUrl, supabaseKey)
