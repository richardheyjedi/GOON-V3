-- Execute este arquivo uma única vez no SQL Editor do Supabase.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 120),
  phone text not null check (char_length(phone) between 6 and 40),
  revenue text,
  company text check (company is null or char_length(company) between 1 and 120),
  niche text check (niche is null or char_length(niche) between 1 and 120),
  sales_channel text check (sales_channel is null or char_length(sales_channel) between 1 and 120),
  instagram text not null check (char_length(instagram) between 1 and 120)
);

-- Migração segura para instalações que ainda usam o campo "revenue".
alter table public.leads add column if not exists company text;
alter table public.leads add column if not exists niche text;
alter table public.leads add column if not exists sales_channel text;
alter table public.leads alter column revenue drop not null;

alter table public.leads enable row level security;

revoke all on table public.leads from anon, authenticated;
grant insert on table public.leads to anon, authenticated;
grant select, delete on table public.leads to authenticated;

drop policy if exists "Public can submit leads" on public.leads;
create policy "Public can submit leads"
on public.leads
for insert
to anon, authenticated
with check (true);

drop policy if exists "Authenticated users can read leads" on public.leads;
create policy "Authenticated users can read leads"
on public.leads
for select
to authenticated
using (true);

drop policy if exists "Authenticated users can delete leads" on public.leads;
create policy "Authenticated users can delete leads"
on public.leads
for delete
to authenticated
using (true);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
