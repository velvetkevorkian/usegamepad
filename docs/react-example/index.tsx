import {StrictMode} from "react"
import {createRoot} from "react-dom/client"

const root = createRoot(document.body)
root.render(
  <StrictMode>
    <h1>Hello from React</h1>
  </StrictMode>,
)
