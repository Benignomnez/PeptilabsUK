import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://znjjzernrorapgrfjsqt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpuamp6ZXJucm9yYXBncmZqc3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzQ2NzMsImV4cCI6MjA5NDAxMDY3M30.b9Hsqh8c6WN__0HOC6n_lQD2oYjgbNWy5Nw6H8f3P-4'
)
