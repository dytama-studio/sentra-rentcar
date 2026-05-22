# Sentra Rent Car

Sentra Rent Car is a car rental management and marketing application built with Next.js, Supabase, PostgreSQL, Drizzle ORM, and Better Auth.

Copyright (c) 2026 Dytama Digital - https://www.dytama.com. All rights reserved.

This repository is distributed as proprietary source code unless a separate written agreement states otherwise. See [LICENSE](./LICENSE), [TERMS.md](./TERMS.md), and [OWNERSHIP.md](./OWNERSHIP.md) for ownership, usage, and commercial handoff terms.

This README focuses on two things:

1. How to install and run the project locally
2. How to release it using Vercel and Supabase

## Tech Stack

- Next.js 14
- React 18
- Supabase
- PostgreSQL
- Drizzle ORM
- Better Auth
- Tailwind CSS
- tRPC

## Prerequisites

Before you start, make sure you have:

- Node.js 20 or later
- pnpm
- A Supabase project
- A Vercel account

## Local Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd rentcar
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Create the environment file

Copy the example file:

```bash
cp .env.example .env
```

Then update the values inside `.env`.

## Environment Variables

These are the main variables you need for local development and production:

```env
SITE_URL="http://localhost:3000"
DATABASE_URL=""
DIRECT_URL=""

BETTER_AUTH_SECRET=""
BETTER_AUTH_URL="http://localhost:3000"

EMAIL_FROM="no-reply@yourdomain.com"
SMTP_HOST=""
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASS=""

KEEP_ALIVE_SECRET=""

NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=""

NEXT_PUBLIC_EMAIL=""
NEXT_PUBLIC_ADDRESS=""
NEXT_PUBLIC_PHONE=""
NEXT_PUBLIC_FAX=""
NEXT_PUBLIC_API_URL=""
NEXT_PUBLIC_API_MOCK_URL=""
```

Notes:

- `DATABASE_URL` is used by the app and Drizzle commands.
- `DIRECT_URL` is optional in the current codebase, but it is useful if you want to keep a direct database connection string for manual SQL or future migration workflows.
- `BETTER_AUTH_URL` should match the app URL for the current environment.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY` must use the exact variable name above because that is what the code reads.

## Supabase Setup

### 1. Create a new Supabase project

Inside Supabase, create a new project and wait until the database is ready.

### 2. Get the required credentials

From your Supabase project, collect:

- Project URL
- Publishable key / anon key
- PostgreSQL connection string

Use them to fill:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY`
- `DATABASE_URL`
- `DIRECT_URL`

### 3. Create the storage bucket

This project uploads images to a Supabase Storage bucket named `sentracar`.

Create that bucket manually in Supabase Storage before testing image uploads.

### 4. Run database migration

If your schema is already represented by the committed Drizzle migrations, run:

```bash
pnpm db:migrate
```

If you prefer syncing schema directly during early development, you can use:

```bash
pnpm db:push
```

Use one approach consistently in your team.

### 5. Seed the initial data

```bash
pnpm db:seed
```

The seed creates a default organization, branch, and admin account.

Default seeded admin credentials:

- Email: `admin@gmail.com`
- Password: `admin480`

Change this password immediately after your first successful login.

### 6. Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm check-types
pnpm db:generate
pnpm db:migrate
pnpm db:push
pnpm db:seed
pnpm test-all
```

## Release with Vercel and Supabase

### 1. Push your code to GitHub

Vercel works best when the project is connected to a GitHub repository.

### 2. Import the project into Vercel

- Open Vercel
- Click `Add New Project`
- Import this repository
- Keep the framework preset as `Next.js`

### 3. Add environment variables in Vercel

In the Vercel project settings, add the same variables you use locally.

Minimum required production variables:

```env
SITE_URL="https://your-project.vercel.app"
DATABASE_URL=""
BETTER_AUTH_SECRET=""
BETTER_AUTH_URL="https://your-project.vercel.app"
EMAIL_FROM="no-reply@yourdomain.com"
SMTP_HOST=""
SMTP_PORT="587"
SMTP_USER=""
SMTP_PASS=""
KEEP_ALIVE_SECRET=""
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=""
```

If you use custom contact information in the site config, also add:

```env
NEXT_PUBLIC_EMAIL=""
NEXT_PUBLIC_ADDRESS=""
NEXT_PUBLIC_PHONE=""
NEXT_PUBLIC_FAX=""
```

### 4. Make sure Supabase allows your production domain

In Supabase Authentication settings:

- Add your Vercel production URL to the allowed site URL list
- Add any callback or redirect URLs required by your auth flow

If you also use a custom domain, add that domain too.

### 5. Run database changes before or during release

Before a production release, make sure your production database is up to date.

Recommended flow:

1. Run schema changes on the target Supabase database
2. Confirm the app builds locally with `pnpm test-all`
3. Deploy to Vercel

If you are using Drizzle migrations, apply them against the production database before promoting the release.

### 6. Deploy

After the environment variables are saved, trigger a deployment from Vercel.

Vercel will:

- install dependencies
- build the Next.js app
- publish the release

### 7. Verify the production release

After deployment, test these items:

- Home page loads correctly
- Admin login works
- Database reads and writes work
- Supabase image uploads work
- Password reset email works
- Public URLs and SEO metadata use the correct domain

## Recommended Release Checklist

Use this simple checklist for every release:

1. Pull the latest code
2. Update `.env` values if needed
3. Run `pnpm install`
4. Run `pnpm test-all`
5. Apply database changes
6. Confirm Supabase Storage bucket `sentracar` exists
7. Confirm Vercel environment variables are complete
8. Deploy to Vercel
9. Test login, upload, and core rental flows in production

## Notes for Teams

- Keep local, staging, and production environment variables separate.
- Never commit secrets to the repository.
- If you change env variable names in code, update both `.env.example` and this README at the same time.
