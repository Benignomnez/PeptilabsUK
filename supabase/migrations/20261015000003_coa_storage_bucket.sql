-- Create storage bucket for Certificate of Analysis files
insert into storage.buckets (id, name, public)
values ('coa-documents', 'coa-documents', true)
on conflict (id) do nothing;

-- Public can view certificate files
create policy "Public read coa documents"
  on storage.objects
  for select
  using (bucket_id = 'coa-documents');

-- Authenticated users can upload certificate files
create policy "Admins upload coa documents"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'coa-documents');

-- Authenticated users can update certificate files
create policy "Admins update coa documents"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'coa-documents');

-- Authenticated users can delete certificate files
create policy "Admins delete coa documents"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'coa-documents');
