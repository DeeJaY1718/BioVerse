# 🧬 BioVerse — A/L Biology Education Platform

A premium, futuristic marketing website for **BioVerse**, an A/L Biology education brand led by
**Hudha Haleem Ishak (Pre-Med)** — Kandy District Rank 82 (2025 A/L), 3+ years teaching experience.

> **"Understanding beats memorization."**

This project is a fully responsive, animated, single-page React application built to attract new
Biology students, promote courses, provide learning resources, build trust, and drive WhatsApp
registrations — while laying the foundation for future BioVerse student platforms (e.g. the
upcoming AI Biology Assistant).

---

## ✨ Features

- **Cinematic Hero** — animated biotech backdrop, floating mascot character, dual CTAs
- **About** — lecturer credentials, teaching philosophy, concept-based pillars
- **Courses** — 2027 & 2028 A/L Biology batches with feature breakdowns
- **The BioVerse Learning System** — Short Notes, MCQ Sprint, SEQ Mastery, Essay Marathon, BioCheck
- **BioVerse Vault** — premium notes library gated behind WhatsApp access
- **Free Resources** — lead-generation resources to convert visitors into students
- **Testimonials** — honest "coming soon" placeholder (no fake reviews)
- **BioVerse AI Assistant** — future roadmap teaser section
- **FAQ** — accordion-style answers to common student questions
- **Contact CTA + Floating WhatsApp Button** — persistent conversion path
- **Top Announcement Banner** — promotes the newest batch / free session
- Smooth scrolling, Framer Motion transitions, glassmorphism cards, gradient accents

## 🎨 Brand Palette

| Token             | Hex       | Usage                          |
|-------------------|-----------|---------------------------------|
| Primary Emerald   | `#065F46` | Buttons, headings, dark sections|
| Accent Lime       | `#A3E635` | Highlights, CTAs, icons         |
| Background Cream  | `#F3F4F6` | Page background                 |

## 🛠 Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS 4**
- **Framer Motion** — animation
- **Lucide React** — icons
- **React Router** — routing scaffold for future pages

## 📁 Project Structure

```
src/
  components/     Reusable UI (Navbar, Footer, Button, CourseCard, ResourceCard, FAQItem, ...)
  sections/       Page sections (Hero, About, Courses, LearningSystem, Vault, FAQ, ...)
  pages/          Route-level pages (Home)
  data/           Static content (courses, FAQs, resources, social links)
  utils/          Shared helpers (cn className merger)
public/
  images/         Generated brand imagery (mascot, backgrounds, OG image)
  favicon.svg, robots.txt, sitemap.xml
IMAGE_PROMPTS.md  AI image-generation prompt documentation
netlify.toml      Netlify build & redirect configuration
```

## 🚀 Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## ☁️ Deploying to Netlify

1. Push this repository to GitHub.
2. In Netlify: **New site from Git** → select the repo.
3. Build settings are pre-configured via `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy — SPA redirects are already handled for client-side routing.

## 📞 Contact & Social

- **WhatsApp:** +94 76 766 8717
- **Instagram:** [@bioverseonig](https://www.instagram.com/bioverseonig)
- **Telegram:** [t.me/BioVerseBackup](https://t.me/BioVerseBackup)

## 🗺️ Roadmap

- BioVerse AI Assistant (concept clarification, MCQ practice, revision)
- Student results dashboard
- Full digital notes portal

---

Built with care for A/L Biology students across Sri Lanka. 🇱🇰
