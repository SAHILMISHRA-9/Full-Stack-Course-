// import {createRoot} from "react-dom/client"
// const root=createRoot(document.getElementById("root"))
// root.render(<h1>Hellow React bhai</h1>)

// import ReactDOM from "react-dom/client"
// ReactDOM.createRoot(document.getElementById("root"))
// .render(<h1>Helooooooooo</h1>)

// import { createElement } from "react";
// import {createRoot} from "react-dom/client"
// const root=createRoot(document.getElementById("root"))
// root.render(createElement("h1",null,"hellow from createElement"))

// import { createElement } from "react";
// import {createRoot} from "react-dom/client"
// const root=createRoot(document.getElementById("root"))
// const reactElement=createElement("h1",null,"hellow from createElement")
// console.log(reactElement)
// root.render(
//   reactElement
// )


// import ReactDOM from "react-dom/client";
// ReactDOM.createRoot(document.getElementById("root"))
// .render(<ul>
//   <li>Using react I can build so many project</li>
//   <li>React is one of my favourite</li>
//   <li>React is fun to learn</li>
// </ul>)


import {createRoot} from "react-dom/client"
const root=createRoot(document.getElementById("root"))
const reactElement=<h1><span>HEllO FROM JSX!</span></h1>

root.render(
  reactElement
)