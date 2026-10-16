import { supabase } from './supabase'

export async function getCoas() {
  const { data, error } = await supabase
    .from('coas')
    .select('*')
    .eq('visible', true)
    .order('published_date', { ascending: false })
  if (error) throw error
  return data
}

export async function getCoaById(id) {
  const { data, error } = await supabase
    .from('coas')
    .select('*')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}

export async function getVisibleCoaProductIds() {
  const { data, error } = await supabase
    .from('coas')
    .select('product_id, is_third_party_reference')
    .eq('visible', true)
    .not('product_id', 'is', null)
  if (error) throw error
  return data.map(c => ({ productId: c.product_id, isReference: c.is_third_party_reference }))
}

export async function getCoaByProductId(productId) {
  if (!productId) return null
  const { data, error } = await supabase
    .from('coas')
    .select('*')
    .eq('product_id', productId)
    .eq('visible', true)
    .order('published_date', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (error) throw error
  return data
}

export async function getAllCoas() {
  const { data, error } = await supabase
    .from('coas')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function createCoa(coa) {
  const { data, error } = await supabase
    .from('coas')
    .insert(coa)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function updateCoa(id, updates) {
  const { data, error } = await supabase
    .from('coas')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteCoa(id) {
  const { error } = await supabase.from('coas').delete().eq('id', id)
  if (error) throw error
}

export async function uploadCoaFile(file) {
  const ext = file.name.split('.').pop()
  const path = `coas/${Date.now()}.${ext}`
  const { error } = await supabase.storage.from('coa-documents').upload(path, file)
  if (error) throw error
  const { data } = supabase.storage.from('coa-documents').getPublicUrl(path)
  return data.publicUrl
}
