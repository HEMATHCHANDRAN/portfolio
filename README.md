# HEMATHCHANDRAN Portfolio — Embedded Systems Engineer

**Professional Embedded Systems Engineer Portfolio** — An interactive, immersive portfolio website featuring realistic animations, real microcontroller images, and a unique car-driven navigation experience.

## ✨ Features

- **Realistic Design**: Professional UI with smooth animations, particle effects, and modern gradients
- **Real Microcontroller Images**: Actual images of ESP32, Raspberry Pi, Arduino, and STM32 from online sources
- **Interactive Navigation**: Car-driven experience with realistic road animations
- **Personalized Experience**: Visitors enter their name and email for a customized journey
- **Responsive Design**: Works beautifully on all devices
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Framer Motion

## 🚀 Quick Start

### Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### Build for production

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## 📋 User Flow

1. **Landing Page** — Welcome screen with animated background, particle effects, and a realistic robotic car. Visitors enter their name and email.
2. **Road Journey** — Animated road with realistic asphalt texture, center lines, and speed effects. Real microcontroller boards displayed roadside with hover tooltips.
3. **Hub/Junction** — Interactive traffic signal and direction selection:
   - **Left** → Personal info & contact
   - **Straight** → Experience & work history
   - **Right** → Projects portfolio
4. **Content Pages** — Rich, animated pages with smooth transitions and interactive elements.

## 📁 Project Structure

```
src/
├── views/          # Main page views (Landing, Hub, Road, Personal, Experience, Projects)
├── components/     # Reusable components (RoboticCar, TrafficSignal, McuRoadside, HubNav)
├── context/        # React context (UserContext for name/email)
├── data/           # Content data (profile, projects, experience, skills, etc.)
└── index.css       # Global styles with animations
```

## 🎨 Customization

### Update Your Profile

Edit `src/data/profile.ts`:
- Name, title, summary
- Contact information (email, phone, LinkedIn, GitHub)
- Address and resume URL
- Profile image URL

### Update Projects & Experience

- **Projects**: `src/data/projects.ts` — Add your projects with images and descriptions
- **Experience**: `src/data/experience.ts` — Add your work experience
- **Skills**: `src/data/skills.ts` — Update your technical skills
- **Education**: `src/data/education.ts` — Add your educational background

### Images

- Profile image: Set `profile.imageUrl` in `src/data/profile.ts`
- Project images: Set `projects[].imageUrl` in `src/data/projects.ts`
- Experience images: Set `experience[].imageUrl` in `src/data/experience.ts`

## 🚢 Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Professional portfolio"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**
6. Your site will be live in minutes!

### Vercel Configuration

The `vercel.json` file is already configured:
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing: All routes redirect to `index.html`

## 🔧 Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Styling
- **Framer Motion** — Animations
- **React Context** — State management

## 📝 Notes

- All microcontroller images are fetched from online sources (Unsplash/Wikipedia)
- The site is fully responsive and works on mobile, tablet, and desktop
- Animations respect `prefers-reduced-motion` for accessibility
- All external links open in new tabs with proper security attributes

## 📄 License

This portfolio is created for personal/professional use.

---

**Built with ❤️ by Hemathchandran G M**
