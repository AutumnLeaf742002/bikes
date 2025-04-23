import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router"
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import "./index.css"
import "animate.css"

import { RootRouter } from "./router"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <RootRouter />
    </HashRouter>
  </StrictMode>,
)
