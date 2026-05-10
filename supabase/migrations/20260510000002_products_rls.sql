-- Enable Row Level Security on products
alter table public.products enable row level security;

-- Anyone can read visible products (public storefront)
create policy "Public read visible products"
  on public.products
  for select
  using (visible = true);

-- Authenticated users (admins) can read all products
create policy "Admins read all products"
  on public.products
  for select
  to authenticated
  using (true);

-- Authenticated users can insert products
create policy "Admins insert products"
  on public.products
  for insert
  to authenticated
  with check (true);

-- Authenticated users can update products
create policy "Admins update products"
  on public.products
  for update
  to authenticated
  using (true)
  with check (true);

-- Authenticated users can delete products
create policy "Admins delete products"
  on public.products
  for delete
  to authenticated
  using (true);
