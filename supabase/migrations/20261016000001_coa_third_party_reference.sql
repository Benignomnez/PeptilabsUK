-- Distinguish PeptiLabs UK's own batch certificates from third-party
-- reference certificates (e.g. a lab report another vendor commissioned
-- for the same compound, shown as general quality reference while
-- PeptiLabs UK's own lot testing is pending).
alter table public.coas
  add column if not exists is_third_party_reference boolean not null default false;

alter table public.coas
  add column if not exists source_name text;

comment on column public.coas.is_third_party_reference is
  'true when this certificate was issued to a different company for its own inventory, shown here only as a general quality reference for the compound — not a certificate of a PeptiLabs UK lot.';
comment on column public.coas.source_name is
  'Name of the third-party company/brand the certificate was actually issued to, shown in the reference disclaimer. Only relevant when is_third_party_reference is true.';
