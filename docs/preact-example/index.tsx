import { render } from 'preact'
import useGamepad from 'usegamepad/preact'
import { SummaryTable, Style, ConnectionStatusMessage } from '../components'

const App = () => {
	const { gamepadState, gamepadConnected } = useGamepad({ enableLogging: true })
	const { buttons, axes } = gamepadState

	return (
		<>
			<Style />
			<h1>Hello from Preact</h1>
			<ConnectionStatusMessage gamepadConnected={gamepadConnected} />
			<SummaryTable buttons={buttons} axes={axes} />
		</>
	)
}

render(<App />, document.body)
