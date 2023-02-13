import { useState } from 'react'
import {AgentCard} from './Agent'
// import { Counter } from './Counter'

export default function App() {
  const [count, setCount] = useState(0)

  const handleSelectChanged = (status) => {
    if (status === true) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div>
      <h2>List of selected agents: {count}</h2>

      <AgentCard
        name="Ramin" 
        age={32}
        phone="0090 (534) 844 8902" 
        imageSrc="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        defaultSelected={false}
        onChange={handleSelectChanged}
      />

      <AgentCard
        name="Shire Koohi"
        age={40}
        phone="0098 (365) 06 14" 
        imageSrc="https://optimalw.com/wp-content/uploads/2015/10/sample-avatar.jpg" 
        defaultSelected={false}
        onChange={handleSelectChanged}
      />
    </div>
  )
}