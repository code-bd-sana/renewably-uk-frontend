# Renewably UK - Next.js App

## Overview
A Next.js 16 application for Renewably UK — a renewable energy compliance portal for UK installation companies. Migrated from Vercel to Replit with a pixel-perfect implementation of the Figma design (GavinPrience784 / Developer Final page).

## Tech Stack
- **Framework**: Next.js 16.2.1 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS v4, shadcn/ui (Radix UI), Lucide React
- **Fonts**: Geist Sans, Geist Mono
- **Notifications**: Sonner
- **Language**: TypeScript

## Design System
- **Primary**: `#0F47A8` (blue)
- **Blue light**: `#3C79E0`
- **Blue tints**: `#EAF1FD` (sidebar/panels), `#B4CDF7`
- **Text dark**: `#030712`
- **Text muted**: `#6B7280`
- **BG gray**: `#F9FAFB`
- **Max content width**: `max-w-[1240px]` with `px-6` padding

## Project Structure
```
app/
  (auth)/           # Auth pages — login, sign-up, forgot-password, reset-password
  (home)/           # Public pages — home, insurance, funding, accreditation, news, contact
  dashboard/        # Dashboard — overview, submissions, documents, tickets,
                    #             create-insurance, insurance-certificates, profile
components/
  shared/
    navbar.tsx      # Sticky top nav
    footer.tsx      # 4-column blue footer
    logo.tsx        # Branded logo mark (text + icon — replaces broken Fabric.js SVG)
  ui/               # shadcn/ui primitives
lib/
  utils.ts          # cn() helper
public/
  renewably-uk.svg  # Original SVG (Fabric.js export — NOT used for logo rendering)
```

## Key Pages Built
| Route | Description |
|---|---|
| `/` | Home — 8 sections (hero, trust bar, services, how it works, stats, testimonials, CTA, etc) |
| `/insurance` | IBG & insurance products |
| `/funding` | ECO4, GBIS, LA Flex schemes |
| `/accreditation` | MCS, TrustMark, HIES info |
| `/news` | News listing |
| `/news/[slug]` | News detail with related articles sidebar |
| `/contact` | Contact form |
| `/login` | Split-screen auth |
| `/sign-up` | Split-screen registration |
| `/forget-password` | Email reset request + success state |
| `/reset-password` | New password form + success state |
| `/dashboard` | Overview stats + recent submissions table |
| `/dashboard/submissions` | Full submissions table |
| `/dashboard/documents` | Document library |
| `/dashboard/tickets` | Support tickets |
| `/dashboard/create-insurance` | IBG certificate generation form |
| `/dashboard/insurance-certificates` | Certificate list + download |
| `/dashboard/profile` | Editable profile/company/accreditation |

## Running the App
- **Dev**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Start**: `npm run start` (runs on port 5000)

## Replit Configuration
- Port: 5000 (required for Replit webview)
- Host: 0.0.0.0 (required for Replit proxy)
- Package manager: npm
- Node version: 20
