import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import useGamepad from "usegamepad/react"


const el = document.createElement('div')
el.id = 'root'
document.body.append(el)
const root = createRoot(el)

const App = () => {
  useGamepad()
  return <h1>Hello from React</h1>
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
