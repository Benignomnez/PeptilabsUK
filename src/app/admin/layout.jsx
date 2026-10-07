'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
import AdminSidebar from '../../components/AdminSidebar'
import { supabase } from '../../services/supabase'

export default function AdminLayout({ children }) {
  const router = useRouter()
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, s) => setSession(s))
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (session === null) router.replace('/login')
  }, [session, router])

  if (session === undefined || session === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-900">
        <Loader2 size={28} className="animate-spin text-gold-400" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-navy-900">{children}</main>
    </div>
  )
}
