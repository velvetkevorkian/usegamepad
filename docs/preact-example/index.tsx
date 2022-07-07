import { render } from "preact"
import useGamepad from 'usegamepad/preact'

const App = () => {
  useGamepad()
  return <h1>Hello from Preact</h1>

}

render(<App />, document.body)
