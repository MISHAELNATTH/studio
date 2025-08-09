Mishael Natth — Personal Portfolio Website
A clean, responsive portfolio website built with Next.js and Tailwind CSS to showcase projects, skills and contact info. The site includes GenAI-powered content generation and multiple project case studies. Live demo available below. 
mishaelnatthviswanathan.web.app

🔗 Live demo
https://mishaelnatthviswanathan.web.app/ 
mishaelnatthviswanathan.web.app

About
This portfolio presents my education, projects, experience, certificates and technical skills. It’s built to be fast, accessible and easy to maintain. The site also features GenAI-assisted content generation for some sections. 
mishaelnatthviswanathan.web.app

Features
Responsive, accessible layout for desktop and mobile

Static-exported Next.js app for fast hosting (Firebase Hosting friendly)

Tailwind CSS for utility-first styling

Project pages and project thumbnails with links to source/demo

Contact form for direct messages

Projects (highlight)
Arduino-based weather systems — Embedded systems projects showcasing sensor integration and C programming. 
mishaelnatthviswanathan.web.app

Restaurant Reservation System — GTK4 GUI in C with backend logic. 
mishaelnatthviswanathan.web.app

Portfolio Website — This repo; Next.js + Tailwind, responsive and GenAI features. 
mishaelnatthviswanathan.web.app

Exploratory Data Analysis — Data science projects using Python, Pandas, Matplotlib/Seaborn. 
mishaelnatthviswanathan.web.app

Recipe-Book App — First web app (React) demonstrating state management and routing. 
mishaelnatthviswanathan.web.app

Tech stack
Next.js (App Router), React, TypeScript, Tailwind CSS, Node.js. Tools: Git/GitHub, Firebase Hosting for deployment. The site also notes GenAI-powered content generation. 
mishaelnatthviswanathan.web.app

Getting started (local)
Clone the repository

bash
Copy
Edit
git clone https://github.com/MISHAELNATTH/studio.git
cd studio
Install dependencies

bash
Copy
Edit
npm install
Run dev server (hot reload)

bash
Copy
Edit
npm run dev
Dev server uses the project’s configured port (check package.json; e.g. next dev --turbopack -p 9002).

Build for production (static export)

bash
Copy
Edit
npm run build
Note: this project uses Next’s static export (output: 'export' in next.config.*) so the build writes static files to out/.

Local preview of production build (optional)

bash
Copy
Edit
npx serve out
# or use a simple static server of your choice
Deploying to Firebase Hosting
Install Firebase CLI (if needed)

bash
Copy
Edit
npm install -g firebase-tools
firebase login
Initialize hosting (first time)

bash
Copy
Edit
firebase init hosting
When asked:

Choose your Firebase project (or create one)

Set public directory to out

Configure as SPA: Yes

Overwrite index.html: No

Deploy

bash
Copy
Edit
npm run build
firebase deploy
If you want a nicer .web.app host (for example mishaelnatth.web.app), create a new Firebase project with that project id and deploy to it (you cannot rename an existing project's default .web.app subdomain). You can also connect a custom domain from the Firebase console.

Common troubleshooting
One image not loading in production: Ensure the image file is in public/ and the <img> uses an absolute path like /images/name.png. Firebase hosting is case-sensitive — confirm exact filename case. If using Next <Image>, set images.unoptimized: true in next.config for static export.

Favicon still showing default: Replace public/favicon.ico and restart.

Dev overlay (Next/Turbopack): This appears only in dev mode and won’t show in production.

Scripts (important ones)
npm run dev — start dev server (hot reload)

npm run build — production build (static export)

npm run start — start a Node server (if needed)

npm run deploy — (optional) add to package.json as "deploy": "npm run build && firebase deploy" for one-step deploy

Contributing
If you want to suggest improvements or fixes, please open an issue or a pull request on the repo. Keep changes focused, add clear commit messages, and include a short description of why the change is needed.

Contact
Use the contact form on the website or open an issue on this repository. The site’s contact section is available on the live demo.
