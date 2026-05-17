# Sahil Qureshi Portfolio

A modern, recruiter-focused portfolio website for Sahil Qureshi. It is built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons, and is configured for static export to GitHub Pages.

## Overview

The website presents Sahil's professional identity, education, internship experience, featured projects, individual engineering case studies, leadership activities, resume, and contact links.

Core pages:

- `/` homepage journey
- `/projects` full project library
- `/projects/[slug]` individual project case studies
- `/resume` resume preview and download page

## Tech Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Static export for GitHub Pages
- GitHub Actions deployment workflow

## Folder Structure

```text
src/
  app/
    page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
    resume/
      page.tsx
  components/
    Navbar.tsx
    Hero.tsx
    SectionHeading.tsx
    About.tsx
    Education.tsx
    Experience.tsx
    ProjectCard.tsx
    ProjectDetail.tsx
    Leadership.tsx
    ResumePreview.tsx
    Footer.tsx
  data/
    projects.ts
    experience.ts
    leadership.ts
  lib/
    utils.ts
public/
  images/
  resume/
```

## Install Dependencies

```bash
npm install
```

On this Windows machine, PowerShell may block `npm.ps1`. Use this instead:

```powershell
npm.cmd install
```

## Run Locally

```bash
npm run dev
```

Windows PowerShell alternative:

```powershell
npm.cmd run dev
```

Open `http://localhost:3000`.

## Build Static Site

```bash
npm run build
```

Windows PowerShell alternative:

```powershell
npm.cmd run build
```

The exported static site will be generated in `out/`.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Make sure the default branch is `main`.
3. In GitHub, go to `Settings -> Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to `main`; `.github/workflows/deploy.yml` will build and deploy the `out/` folder.

This project assumes the repository can be named `sahil16qureshi.github.io`. For that repository name, the site deploys at the root domain and does not need a `basePath`.

If you later deploy to a project repository instead of a user site, update `repoName` and the `isProjectPage` logic in `next.config.ts`.

## Replace Images

Add real image files at these paths:

```text
public/images/profile.jpg
public/images/giki-campus-1.jpg
public/images/giki-campus-2.jpg
public/images/giki-project.jpg
public/images/projects/secureai/thumbnail.png
public/images/projects/secureai/demo.png
public/images/projects/horizon/thumbnail.png
public/images/projects/horizon/demo.png
public/images/projects/gridshield/thumbnail.png
public/images/projects/gridshield/dashboard.png
public/images/projects/chess/thumbnail.png
public/images/projects/chess/graph.png
public/images/projects/medicine/thumbnail.png
```

Until images are added, the site shows styled fallback placeholders marked `REPLACE_THIS_WITH_ACTUAL_IMAGE`.

## Replace Resume

Replace the placeholder files with your real resume assets:

```text
public/resume/Sahil_Qureshi_Resume.pdf
public/resume/resume-preview.png
```

The PDF is used by the `Download Resume` and `View Resume` buttons. The PNG is shown as the visual preview.

## Update Project Links and Data

Edit project content in:

```text
src/data/projects.ts
```

Replace placeholders like:

```text
#REPLACE_THIS_WITH_ACTUAL_LINK
```

with real GitHub, demo, tutorial, presentation, notebook, or report links.

Also update:

```text
src/data/experience.ts
src/data/leadership.ts
src/lib/utils.ts
```

for internship duration, location, email, GitHub, LinkedIn, and location details.

## Notes for Recruiter Sharing

Before sharing the portfolio, replace:

- Real GitHub repository links
- Real LinkedIn URL
- Real email address
- Real resume PDF
- Resume preview image
- Profile image
- Project screenshots or demo images
- Verified metrics where currently marked as placeholders
