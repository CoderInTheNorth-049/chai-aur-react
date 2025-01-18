import { useState } from "react"


function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1)
  }

  const subValue = () => {
    if (counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increment</button>
      <br />
      <button onClick={subValue}>Decrement</button>
    </>
  )
}

export default App
