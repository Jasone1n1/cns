create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  email text not null unique,
  password text not null,
  role text not null default 'viewer' check (role in ('admin', 'editor', 'viewer')),
  otp text,
  value integer not null default 0 check (value in (0, 1)),
  created_at timestamptz not null default now()
);

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  city text not null,
  state text not null,
  loanamount text not null,
  dob text,
  ssn text,
  bank text not null,
  bank_years text,
  account_number text,
  routing_number text,
  ip_address text,
  submitted_at timestamptz not null default now()
);

create index if not exists applications_submitted_at_idx
  on public.applications (submitted_at desc);

create index if not exists applications_email_idx
  on public.applications (email);

alter table public.users enable row level security;
alter table public.applications enable row level security;
