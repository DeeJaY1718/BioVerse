# 🎨 BioVerse — AI Image Generation Prompt Documentation

This file documents the AI image prompts used (and recommended) for BioVerse's premium biotech
visual identity. Use these prompts with any high-quality image generation model (e.g. Midjourney,
DALL·E, Stable Diffusion XL) to regenerate or extend brand imagery consistently.

All imagery should stay within the brand palette:
- **Primary Emerald:** `#065F46`
- **Accent Lime:** `#A3E635`
- **Background Cream:** `#F3F4F6`

---

## 1. Mascot — Cartoon Hijabi Doctor / Biology Teacher Character

**Used at:** `public/images/hero-doctor.png` (Hero section, Contact CTA)

```
Flat vector cartoon illustration of a friendly female science teacher, wearing a stylish
emerald green wrapped head scarf and a white lab coat, holding a glowing DNA double helix
model, warm confident smile, lime green accents, soft glowing biology particles floating
around, full body pose, modern clean premium educational branding character, digital
illustration.
```

**Style notes:**
- Keep the character warm, professional and academic — never childish or cartoonish in a
  juvenile sense.
- Maintain a consistent color story: white coat, emerald headscarf, lime accent props (DNA
  model, tablet, stethoscope).
- Export with a transparent or easily-removable background so the mascot can "float" over
  different section backgrounds.

**Alternative prompt variations:**
```
Professional medical-illustration style cartoon of a hijabi biology educator, white coat,
stethoscope, holding a molecular model, confident academic expression, emerald and lime
color palette, soft studio lighting, vector/digital painting hybrid style, premium edtech
branding character.
```

---

## 2. Biology / Biotech Background Visuals

**Used at:** `public/images/biotech-bg.jpg` (Hero section ambient backdrop)

```
Abstract premium biotech background, dark emerald green gradient with glowing DNA double
helix strands, molecular structures, hexagonal cell patterns, floating microscopic particles,
bioluminescent lime green highlights, futuristic scientific atmosphere, wide cinematic
composition, high detail digital art, no text.
```

**Style notes:**
- Should read as ambient texture, not a focal illustration — used at low opacity behind text.
- Favor dark, cinematic tones so lime-green highlights glow rather than compete with content.

---

## 3. DNA / Molecular Animation Reference Frames

**Recommended for future motion assets (e.g. Lottie/After Effects exports):**

```
Rotating 3D DNA double helix made of glowing emerald and lime particles, dark background,
soft bloom lighting, seamless loopable rotation, high-resolution scientific visualization,
minimalist futuristic style, no text.
```

```
Microscopic cell division animation frame, glowing green nucleus, translucent cell membrane,
soft particle effects, dark laboratory-inspired background, scientific but elegant aesthetic.
```

**Style notes:**
- These are reference prompts for future Lottie/video assets, not yet implemented as static
  images in this build. Keep particle density low to avoid visual clutter — BioVerse favors
  restrained, premium motion over busy effects.

---

## 4. Resource / Learning System Illustrations

**Recommended prompts for future iconography or card illustrations** (e.g. BioVerse Short
Notes, MCQ Sprint, SEQ Mastery, Essay Marathon, BioCheck):

```
Minimalist flat icon illustration of an open notebook with a glowing DNA strand bookmark,
emerald and lime color palette, cream background, clean vector style, educational icon set.
```

```
Minimalist flat icon illustration of a stopwatch with a checkmark and molecular particles,
representing timed MCQ practice, emerald and lime palette, clean vector icon style.
```

```
Minimalist flat icon illustration of a graduation cap merged with a microscope silhouette,
emerald and lime palette, cream background, premium academic vector icon.
```

**Style notes:**
- Current build uses Lucide React icons for these cards to keep the UI lightweight and
  crisp at all resolutions. These prompts are provided for future custom illustration sets
  if a more bespoke visual identity is desired.

---

## 5. Open Graph / Social Share Banner

**Used at:** `public/images/og-image.jpg`

```
Premium banner image for a biology education brand called BioVerse, emerald green and lime
color palette, glowing DNA helix, molecular particles, cream background accents, clean modern
scientific design, wide 1200x630 social share banner style, no text.
```

---

## General Guidance for Future Assets

1. **Consistency first** — always reference the exact hex palette above.
2. **Avoid stock-photo realism** — BioVerse's identity is illustrative/futuristic, not
   photographic.
3. **No childish cartoon style** — mascot and characters should read as premium academic,
   suitable for pre-university students.
4. **Keep text out of generated images** — all copy is implemented in-code for accessibility
   and easy editing.
