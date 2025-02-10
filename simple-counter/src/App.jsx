import { useState } from "react"

function App() {

  const [no,setNo] = useState(0)

  const Inc = () => {
    setNo(no + 1)
  }

  const Dec = () => {
    setNo(no - 1)
  }

  const reset = () => {
    setNo(0)
  }

  return (
      <div align="center">
            <h1>Counter App</h1>
            <h2>Counter :- {no}</h2>
            <button onClick={ () => Inc() }>+</button>
            <button disabled={no==0} onClick={ () => Dec() }>-</button>
            <button onClick={ () => reset() }>R</button>


      </div>
  )
}
export default App
