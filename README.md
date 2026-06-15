# Rahul Kumar - Interactive 3D Portfolio

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80)

A highly interactive, cyberpunk-themed personal portfolio built with React, Vite, and React Three Fiber. The portfolio features a premium glassmorphism design, gamified scroll experiences, 3D tilt effects, and an interactive easter-egg terminal.

**Live Demo:** [https://react-portfolio-sable-five.vercel.app](https://react-portfolio-sable-five.vercel.app)

---

## ✨ Features

- **Premium 3D UI**: Interactive 3D tilt effects on cards using `react-parallax-tilt`.
- **Interactive 3D Canvas**: A fully interactive, rotating Cyberpunk Icosahedron built with `@react-three/fiber` and `three.js`.
- **Glassmorphism Aesthetic**: Sleek, translucent background components with neon green (`#00ff88`) and cyber blue (`#00ccff`) accents.
- **Scroll Reveal Animations**: Smooth fade-in and slide-up animations tied to your scroll position using `IntersectionObserver`.
- **Gamification**: Earn XP as you scroll through the site and unlock achievements (like finding the secret terminal).
- **Easter Egg Terminal**: A hidden command-line interface where you can type commands like `help`, `skills`, `projects`, and `hack`.
- **Fully Responsive**: Optimized for seamless viewing on desktops, tablets, and mobile devices.

## 🛠️ Technologies Used

- **React 19**
- **Vite** (for blazing fast builds)
- **Three.js & React Three Fiber** (for the 3D CyberCube animation)
- **Framer Motion & Custom Hooks** (for animations)
- **Vanilla CSS** (using modern CSS variables for theming)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahul11f/Portfolio-react.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Portfolio-react
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the site!

## 📝 Customization

All the content for this portfolio is centralized in a single data file to make updates incredibly easy.

1. Open `src/data/portfolioData.js`.
2. Update the `personal`, `about`, `skills`, `projects`, and `education` objects with your own information.
3. Replace images and resumes in the `public/` directory.
4. Customize the terminal commands or achievements in the same file!

## 📄 License

This project is open-source and available for educational purposes or as a template. Feel free to fork and customize it!

---
*Designed & Built by Rahul Kumar*
