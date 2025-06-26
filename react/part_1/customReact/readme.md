
````markdown
# 🚀 React Fundamentals & Custom Renderer – Learning Summary

This README documents everything I’ve implemented and understood so far about how React works under the hood and how to use it in a real project using Vite.

I created a plain HTML + JS app that mimics how React renders elements. I added a `<div id="root"></div>` in the HTML, then in the linked JS file, I defined a React-like element:

```js
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "click me to visit google"
}
````

Then I created a `customRender` function which takes this element and a container (`#root`) and renders it like React does:

```js
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if (prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domElement)
}
```

Finally, I used it like this:

```js
const mainContainer = document.getElementById("root")
customRender(reactElement, mainContainer)
```

This taught me how JSX is just a fancy syntax for creating JavaScript objects that React later converts into actual DOM elements. I now understand how something like `React.createElement('a', {...}, 'text')` can be represented and rendered manually.

Then, I moved to a Vite + React setup. I created a project using `npm create vite@latest`, selected React, installed the dependencies using `npm install`, and started the development server with `npm run dev`.

In my `main.jsx` file, I wrote:

```jsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

const anotherElement = (
  <>
    <br />
    <a href="https://google.com" target="_blank">visit google</a>
  </>
)

const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherElement // Note: this won't render as an actual child here
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    {ReactElement}
  </>
)
```

And inside `App.jsx`, I wrote a simple component:

```jsx
function App() {
  const username = "chai aur code"
  return (
    <>
      <h2>{username}</h2>
      <h1>hi</h1>
    </>
  )
}
export default App
```

Here’s what I learned from this entire process:

* I now understand how to build a simplified version of React’s rendering system using JavaScript and DOM APIs.
* I know how `React.createElement()` works and what kind of object it returns and what it expects
first the type, then the attributes, then the text and then other children.
* I learned that React components must return a single root element, and for multiple elements we use fragments (`<> </>`).
* Inside JSX, we can only put JavaScript **expressions** (not statements like `if`, `for`, etc.).
* Component names and their filenames should always be **capitalized**, like `App` and `App.jsx`.
* JSX elements or components must be injected using `{}`.
* In a real Vite project, we render using `ReactDOM.createRoot(...).render(...)` inside `main.jsx`.

This journey helped me bridge the gap between how React works under the hood and how to use it efficiently with modern tooling like Vite.

