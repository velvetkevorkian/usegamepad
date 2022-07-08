export type Button ='a'| 'b'| 'x'| 'y'| 'lb'| 'rb'| 'lt'| 'rt'| 'back'| 'start'| 'ls'| 'rs'| 'up'| 'down'| 'left'| 'right'

export type Axis = 'ls-x'| 'ls-y'| 'rs-x'| 'rs-y'

type Buttons = {
  [B in Button]: boolean
}

type Axes = {
  [A in Axis]: number
}

export type GamepadState = {
  buttons: Buttons,
  axes: Axes
}

export type UseGamepadOptions = {
  enableLogging: boolean
}

export type UseGamepadParams = {
  useEffect: Function
  useRef: Function
  useState: Function
  options: UseGamepadOptions
}
