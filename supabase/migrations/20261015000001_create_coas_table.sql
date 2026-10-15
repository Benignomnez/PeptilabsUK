-- Create Certificates of Analysis (CoA) table
create table if not exists public.coas (
  id              uuid primary key default gen_random_uuid(),
  product_id      uuid references public.products(id) on delete set null,
  product_name    text not null,
  concentration   text,
  lab_name        text not null,
  sample_code     text,
  lot_code        text,
  received_date   date,
  published_date  date not null default current_date,
  file_url        text not null,
  visible         boolean not null default true,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Reuses the set_updated_at() function created in the products migration
create trigger coas_set_updated_at
  before update on public.coas
  for each row execute function public.set_updated_at();
