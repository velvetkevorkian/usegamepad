import { render } from "preact"
import useGamepad from 'usegamepad/preact'

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
          <th>Button</th>
          <th>Pressed</th>
        </thead>
        <tbody>
        {buttonList.map(button => (
          <tr key={button}>
            <td>{button}</td>
            <td>{buttons[button].toString()}</td>
          </tr>
        ))}
        <thead>
          <th>Axis</th>
          <th>Value</th>
        </thead>
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

render(<App />, document.body)
