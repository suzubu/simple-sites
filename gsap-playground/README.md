# GSAP Playground (React + Vite)

A minimal React + Vite setup with GSAP and ScrollTrigger pre-configured.

This starter is perfect for experimenting with scroll-based animations, motion timelines, and DOM-based effects using GSAP — without any extra boilerplate.

---

## 🛠️ Stack

- [Vite](https://vitejs.dev/) – Fast dev server & bundler
- [React](https://react.dev/) – Component-based UI
- [GSAP](https://gsap.com/) – Animation engine
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) – Scroll-based animation plugin

---

## 🚀 Getting Started

You can scaffold this template using [`degit`](https://github.com/Rich-Harris/degit):

```bash
# 1. Scaffold the template
npx degit suzubu/template-hub/gsap-playground

# 2. Move into the project folder
cd gsap-playground

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🗂️ Best For / Example Use Cases

- 🎞️ Scroll-triggered animation tests  
- 📐 Timeline sequencing demos  
- 🌀 Smooth transitions or section-based effects  
- 🧪 Prototyping motion UI and content reveals  
- 🎯 Teaching or learning GSAP in a clean environment

---

## 📁 Folder Structure

```
gsap-playground/
├── index.html
├── src/
│   ├── App.jsx         ← ScrollTrigger demo with GSAP
│   ├── index.css       ← Styling for layout and animated elements
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🧼 Notes

- No router, state manager, or component libraries included
- Styles are handled with plain CSS for clarity
- Animation logic is handled in `App.jsx` with `useEffect` and `useRef`

---

## 🔧 Customization Ideas

- Add pinned sections with `ScrollTrigger`
- Chain multiple animations with `timeline()`
- Use `Framer Motion` or `Locomotive Scroll` for hybrid motion systems

---

Happy animating!
