import { render } from 'preact'
import useGamepad from 'usegamepad/preact'
import { SummaryTable, Style } from '../components'

const App = () => {
	const { gamepadState } = useGamepad({ enableLogging: true })
	const { buttons, axes } = gamepadState

	return (
		<>
			<Style />
			<h1>Hello from Preact</h1>
			<SummaryTable buttons={buttons} axes={axes} />
		</>
	)
}

render(<App />, document.body)
