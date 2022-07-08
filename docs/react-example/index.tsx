import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import useGamepad from "usegamepad/react"


const el = document.createElement('div')
el.id = 'root'
document.body.append(el)
const root = createRoot(el)

const App = () => {
  const {gamepadState} = useGamepad({enableLogging: true})
  const {buttons, axes} = gamepadState
  const buttonList = ['a', 'b', 'x', 'y', 'lb', 'rb', 'lt', 'rt', 'back', 'start', 'ls', 'rs', 'up', 'down', 'left', 'right']
  const axisList = ['ls-x', 'ls-y', 'rs-x', 'rs-y']

  return (
    <>
      <style>{`
        td {
          border: 1px solid;
        }
      `}</style>
      <h1>Hello from Preact</h1>
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Pressed</th>
          </tr>
        </thead>
        <tbody>
        {buttonList.map(button => (
          <tr key={button}>
            <td>{button}</td>
            <td>{buttons[button].toString()}</td>
          </tr>
        ))}
          <tr>
            <th>Axis</th>
            <th>Value</th>
          </tr>
        {axisList.map(axis => (
          <tr key={axis}>
            <td>{axis}</td>
            <td>{axes[axis]}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}


root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
