import {UseGamepadParams, GamepadState, Button, Axis } from "./types"

const initialState = (): GamepadState => ({
  buttons: {
    'a': false,
     'b': false,
     'x': false,
     'y': false,
     'lb': false,
     'rb': false,
     'lt': false,
     'rt': false,
     'back': false,
     'start': false,
     'ls': false,
     'rs': false,
     'up': false,
     'down': false,
     'left': false,
     'right': false,
  },
  axes: {
    'ls-x': 0,
     'ls-y': 0,
     'rs-x': 0,
     'rs-y': 0,
  }
})

const buttonList: Button[] = ['a', 'b', 'x', 'y', 'lb', 'rb', 'lt', 'rt', 'back', 'start', 'ls', 'rs', 'up', 'down', 'left', 'right']

const axisList: Axis[] = ['ls-x', 'ls-y', 'rs-x', 'rs-y']

const useGamepad = ({useEffect, useRef, useState, options}: UseGamepadParams) => {
  const [state, setState] = useState({...initialState()})
  const connectedGamepadRef = useRef()
  const gamepadStateRef = useRef({...initialState()})

  const poll = () => {
    let stateHasChanged = false
    const newState = {...initialState()}
    connectedGamepadRef.current.buttons.forEach((button: GamepadButton, i: number) => {
      const buttonName = buttonList[i]
      const { pressed } = button
      newState.buttons[buttonName] = pressed

      if (gamepadStateRef.current.buttons[buttonName] !== pressed) {
        stateHasChanged = true
      }
    })

    connectedGamepadRef.current.axes.forEach((axis: number, i: number) => {
      const axisName = axisList[i]
      newState.axes[axisName] = axis
      if (gamepadStateRef.current[axisName] !== axis) {
        stateHasChanged = true
      }
    })

    // TODO: compare full state in one go?
    if (stateHasChanged) {
      gamepadStateRef.current = newState
      setState(() => newState)
    }

    requestAnimationFrame(poll)
  }

  const handleGamepadConnected = (event: GamepadEvent) => {
    window.removeEventListener('gamepadconnected', handleGamepadConnected)
    connectedGamepadRef.current = event.gamepad
    console.log(event.gamepad)
    requestAnimationFrame(poll)
  }

  useEffect(() => {
    window.addEventListener('gamepadconnected', handleGamepadConnected)

    return(() => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected)
    })
  }, [])

  return {
    gamepadState: state,
  }
}

export default useGamepad
