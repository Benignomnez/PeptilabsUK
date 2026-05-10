import { supabase } from './supabase'

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('visible', true)
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function getAllProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data
}

export async function updateProduct(id, updates) {
  const { data, error } = await supabase
    .from('products')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function createProduct(product) {
  const { data, error } = await supabase
    .from('products')
    .insert(product)
    .select()
    .single()
  if (error) throw error
  return data
}

export async function deleteProduct(id) {
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) throw error
}

export async function uploadProductImage(file) {
  const ext = file.name.split('.').pop()
  const path = `products/${Date.now()}.${ext}`
  const { error } = await supabase.storage.from('product-images').upload(path, file)
  if (error) throw error
  const { data } = supabase.storage.from('product-images').getPublicUrl(path)
  return data.publicUrl
}
