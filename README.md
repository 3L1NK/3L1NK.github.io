# 3L1NK Personal Portfolio Website

### Live Preview
Check out the live version of my portfolio here:  [**3L1NK Website Portfolio**](https://ericrusli-portofolio.netlify.app/)

---

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Framework**: React.js + Vite
- **Styling**: Tailwind CSS
- **3D/Animation**: Three.js, React Three Fiber, Drei, GSAP
- **Deployment**: Netlify

---

## Features
- **Responsive Design**: Fully optimized for all screen sizes, from desktop to mobile.
- **Dynamic Projects Section**: Showcases my latest projects with hover effects and links.
- **About Me Section**: Highlighting my skills, experience, and career goals.
- **Contact Form**: Users can easily get in touch with me via the integrated form.

---

## Repository Overview
This GitHub repository contains the source code for my portfolio. Feel free to explore the files and structure:
- `src/`: Main source folder with React components.
- `public/`: Static assets like images and icons.
- `package.json`: JavaScript project metadata, dependencies, and npm scripts.
- `package-lock.json`: Locked dependency versions. This is the npm equivalent of a reproducible requirements file.
- `.nvmrc`: Recommended Node.js version for this project.
- `.env.example`: Example environment variables for the contact form.
- `README.md`: Project documentation (this file).

---

## Requirements

- Node.js `22.11.0` recommended. If you use `nvm`, run:

  ```bash
  nvm use
  ```

- npm, which comes with Node.js.

JavaScript projects do not use a Python-style `venv`. The equivalent local dependency folder is `node_modules/`, created by `npm install`. Do not commit `node_modules/`.

---

## Local Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/3L1NK/3L1NK.github.io.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 3L1NK.github.io
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a local environment file if you want the contact form to work:

   ```bash
   cp .env.example .env
   ```

   Then fill in the EmailJS values inside `.env`.

5. Start the local development server:

   ```bash
   npm run local
   ```

6. Open the website:

   ```bash
   http://127.0.0.1:5173/
   ```

---

## Useful Commands

Run the local dev server:

```bash
npm run local
```

Run lint checks:

```bash
npm run lint
```

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---
## Future Enhancements
- Add more interactive animations using libraries like GSAP or Framer Motion.
- Expand the blog or achievements section to highlight milestones.
- Implement a dark mode toggle.

--- 
## Contact
Feel free to reach out with feedback or collaboration opportunities:

- Email: ericrusli123@gmail.com
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/eric-rusli/)
- GitHub: [3L1NK](https://github.com/3L1NK)
