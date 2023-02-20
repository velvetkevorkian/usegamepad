type ConnectionStatusMessageProps = {
  gamepadConnected: boolean
}

export const ConnectionStatusMessage = ({gamepadConnected}: ConnectionStatusMessageProps) => (
  <>
  <p>Gamepad is {gamepadConnected ? '' : 'not'} connected.</p>
  {!gamepadConnected && (
    <p>Press any button on your gamepad to connect.</p>
  )}
  </>
)
