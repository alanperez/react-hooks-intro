import React, {useState, useEffect} from 'react'

const App = () => {
  const [count,setCount] = useState(0)
  const [isOn, setIsOn] = useState(false)
  // dedicated to mouse position
    const [mousePosition, setMousePosition] = useState({ x: null, y: null })

    useEffect( () => {
      document.title = `You have clicked ${count} times`
      window.addEventListener('mousemove', handleMouseMove)

      // replicates component will mount
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    },  [count])
    

    // handlemove func
    const handleMouseMove = e => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY
      })
    }


    //incrmements counter
    const incrementCount = () => {
      setCount(prevCount => prevCount + 1)
    }

    // toggles the light
  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }
  return (
    <>
    <h2>Counter</h2>
    <button onClick={incrementCount} > I was clicked {count} times</button>

    <h2>Toggle Light</h2>
    <h2>Toggle Light</h2>
     <img
      src={
        isOn
        ? 'https://icon.now.sh/highlight/fd0'
        : 'https://icon.now.sh/highlight/aaa'
      } 
      style={{
        height:'50px',
        width: '50px',
        // background: isOn ? "yellow" : "grey"
      }}
      onClick={toggleLight}
      />

      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />
    </>
  )
}

export default App