# Renewably UK - Next.js App

## Overview
A Next.js 16 application for Renewably UK, a renewable energy platform for the United Kingdom. Migrated from Vercel to Replit.

## Tech Stack
- **Framework**: Next.js 16.2.1 (App Router)
- **UI**: React 19, Tailwind CSS v4, shadcn/ui (Radix UI), Lucide React
- **Fonts**: Geist Sans, Geist Mono
- **Theming**: next-themes
- **Notifications**: Sonner
- **Language**: TypeScript

## Project Structure
- `app/` - Next.js App Router pages
  - `(auth)/` - Authentication pages (login, sign-up, forgot/reset password)
  - `(home)/` - Public-facing home pages
  - `dashboard/` - Dashboard with admin, contractor, and profile sections
- `components/` - Reusable UI components (admin, funding, insurance, news, shared, ui)
- `lib/` - Utility functions
- `public/` - Static assets including PWA manifest and service worker

## Features
- Progressive Web App (PWA) with service worker
- Role-based routing (admin, contractor)
- Multiple domain sections: accreditation, contact, funding, home, insurance, news

## Running the App
- **Dev**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Start**: `npm run start` (runs on port 5000)

## Replit Configuration
- Port: 5000 (required for Replit webview)
- Host: 0.0.0.0 (required for Replit proxy)
- Package manager: npm
- Node version: 20
