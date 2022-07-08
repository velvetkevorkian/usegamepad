import {useEffect, useRef, useState} from 'react'
import useGamepad from '../shared'
import { UseGamepadOptions } from '../shared/types'

export default (options: UseGamepadOptions) => useGamepad({useEffect, useRef, useState, options})
