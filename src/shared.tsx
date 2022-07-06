const useGamepad = ({useEffect}: {useEffect: Function}) => {
  useEffect(() => {
    console.log('effect hook fired')
  })
}

const useGamepadFactory = ({useEffect}: {useEffect: Function}) => useGamepad({useEffect})

export default useGamepadFactory
