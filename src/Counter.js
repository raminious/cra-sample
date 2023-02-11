import { useState } from "react"

export function Counter() {
  const [value, setValue] = useState(10)
 
  const handleClick = () => {
    setValue(value + 1)
  }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleClick}>Count Me</button>
    </>
  )
}