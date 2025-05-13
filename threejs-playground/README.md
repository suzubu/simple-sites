# Three.js Playground (Vite + Vanilla JS)

A minimal, fast-starting environment for experimenting with Three.js using Vite and plain JavaScript. Perfect for shader tests, WebGL interactions, or lightweight visual explorations.

---

## 🛠️ Stack

- [Vite](https://vitejs.dev/) – Fast development server and bundler
- [Three.js](https://threejs.org/) – WebGL library for 3D rendering
- No frameworks – plain JavaScript

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## 🗂️ Best For / Example Use Cases

This starter is ideal for:

- 🎨 **Testing custom shaders**  
  Example: fragment/vertex GLSL prototypes

- 🌀 **Prototyping interactions**  
  Example: mouse or scroll-based effects

- 🧪 **Experimenting with render targets and postprocessing**  
  Example: creating a feedback loop or blur trail

- 📦 **Rapid 3D layout or animation tests**  
  Example: cube rotations, lighting setups, geometry demos

- 🔬 **Working without UI overhead**  
  Example: canvas-only studies, no React, no boilerplate

---

## 📁 Folder Structure

```
threejs-playground/
├── index.html
├── src/
│   ├── main.js         ← Three.js setup (scene, camera, renderer)
│   └── style.css       ← Optional styling (black background, white text)
├── public/
└── package.json
```

---

## 🧼 Notes

- No dependencies beyond `three` and `vite`
- Black background + canvas in fullscreen
- Ready for OrbitControls, shaders, or quick extensions

---

## 🔧 Customization Ideas

Want to expand it? Consider adding:
- OrbitControls
- Shader loader (GLSL loader)
- Stats.js or GUI panel
- Asset preloading system

---

Happy tinkering!
