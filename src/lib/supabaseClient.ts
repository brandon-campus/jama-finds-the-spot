import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ikuepelyaubbgwyqtysa.supabase.co'; // Reemplaza con tu URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrdWVwZWx5YXViYmd3eXF0eXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MjUxMDAsImV4cCI6MjA2ODEwMTEwMH0.6oLhHnnheR9ihfHypWOSMvgUG__-p6ynnNlcEZNUmIU'; // Reemplaza con tu anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);