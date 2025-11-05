# ✨ Motion Art Page: WebGL Fluid Simulation Demo

Hey there! 👋

Thanks for checking out this little project. This is a neat demo that brings a beautiful **WebGL fluid simulation** right into the browser, making for a super smooth and interactive background. It's based on some really clever math and GPU programming.

---

## 🎨 What is this?

This is a single-page application built with **React and TypeScript** that features a stunning, interactive fluid simulation. The "fluid" part of the page isn't just an animated video—it's calculated in real-time on your computer's GPU using **WebGL shaders**.

It's essentially a showcase for the **Stable Fluids** algorithm, which lets you "paint" with motion and color, creating those cool, swirling, dissipating effects that look like smoke, ink, or plasma.

### Key Technologies

* **React + TypeScript:** For the component structure and type safety.
* **Vite:** The lightning-fast build tool.
* **WebGL 2 (with WebGL 1 fallback):** The core engine running the fluid dynamics on the GPU.
* **Tailwind CSS:** Used for all the modern, responsive styling.

---

## 💻 How to Run It Locally

Getting this running on your machine is super easy, thanks to Vite.

1.  **Clone the Repository:**
    ```bash
    git clone [Your-Repo-URL]
    cd motionart-page
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The app should now be running at `http://localhost:5173` (or similar).

---

## 🖱️ How to Interact

Since the fluid simulation is meant to be interactive, give it a try!

* **Mouse Movement:** As you move your mouse, the movement injects **velocity** (force) and **density** (color) into the fluid grid.
* **Pop-up:** You'll notice a dedicated pop-up component that demonstrates a purchase/gating feature, which also correctly handles locking the background scroll without those annoying page jumps!

---

## 📂 Project Structure Snapshot

For reference, here’s a quick look at the main directories (matching your file structure):

| Folder/File | Purpose |
| :--- | :--- |
| `public/` | **Static assets.** Contains the necessary `script.js` for the fluid logic and your **`favicon.ico`** (or `.png`). |
| `src/` | **Source code.** All React components and application logic. |
| `src/components/` | All reusable React components (`App.tsx` and the `Popup` component). |
| `index.html` | The main entry point where the canvas is initialized and the favicon is linked. |
| `vite.config.ts` | The configuration file for the Vite build tool. |
| `tailwind.config.js` | Custom configurations for Tailwind CSS. |

---

## 💡 Credit Where Credit is Due

The amazing WebGL Fluid Simulation core logic is based on the fantastic work of **PavelDoGreat**:

* **CodePen:** [https://codepen.io/PavelDoGreat/pen/zdWzEL](https://codepen.io/PavelDoGreat/pen/zdWzEL)
* **GitHub Repo:** [https://github.com/PavelDoGreat/WebGL-Fluid-Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation)

My implementation just wraps this core logic within a modern React/TypeScript/Tailwind setup.

Enjoy the motion art! Feel free to fork it, play around with the fluid constants (like `DENSITY_DISSIPATION` or `CURL`), and make it your own.