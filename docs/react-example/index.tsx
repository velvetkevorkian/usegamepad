import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import useGamepad from 'usegamepad/react'
import { SummaryTable, Style } from '../components'

const el = document.createElement('div')
el.id = 'root'
document.body.append(el)
const root = createRoot(el)

const App = () => {
	const { gamepadState } = useGamepad({ enableLogging: true })
	const { buttons, axes } = gamepadState

	return (
		<>
			<Style />
			<h1>Hello from React</h1>
			<SummaryTable buttons={buttons} axes={axes} />
		</>
	)
}

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
