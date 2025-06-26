# React + Vite Setup

To set up a React project using Vite, run `npm create vite@latest`, give your project folder a name, and select React as the framework. After setup completes, navigate into the folder and run `npm install` to install the dependencies. Then, start the development server with `npm run dev`.

In React, components must return a single root element. To avoid unnecessary `<div>` wrappers, we use fragments: wrap the JSX in `<> </>`, which lets you return multiple elements as one virtual node without affecting the DOM structure.

Component names should always be capitalized—for example, use `Pubg` instead of `pubg`. Likewise, the filename should be capitalized too, like `Pubg.jsx` instead of `pubg.jsx`.

**Learnings Recap:**  
- Use `npm create vite@latest` to scaffold a Vite + React project  
- Run `npm install` and then `npm run dev`  
- React components must return a single root node—use fragments (`<> </>`) to wrap multiple elements  
- Capitalize component names and filenames (e.g., `Pubg.jsx`)  

