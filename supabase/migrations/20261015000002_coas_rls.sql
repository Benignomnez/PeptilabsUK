-- Enable Row Level Security on coas
alter table public.coas enable row level security;

-- Anyone can read visible certificates (public CoA index)
create policy "Public read visible coas"
  on public.coas
  for select
  using (visible = true);

-- Authenticated users (admins) can read all certificates
create policy "Admins read all coas"
  on public.coas
  for select
  to authenticated
  using (true);

-- Authenticated users can insert certificates
create policy "Admins insert coas"
  on public.coas
  for insert
  to authenticated
  with check (true);

-- Authenticated users can update certificates
create policy "Admins update coas"
  on public.coas
  for update
  to authenticated
  using (true)
  with check (true);

-- Authenticated users can delete certificates
create policy "Admins delete coas"
  on public.coas
  for delete
  to authenticated
  using (true);
