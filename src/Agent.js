import { useState } from 'react'
import './agent.css'

export function AgentCard({ name, age, phone, imageSrc, defaultSelected, onChange }) {
  const [isSelected, setIsSelected] = useState(defaultSelected)

  const myStyle = {
    background: isSelected ? 'yellow' : '#cecece',
    border: isSelected ? '1px solid #000' : 'none'
  }

  const handleClick = () => {
    setIsSelected(isSelected ? false : true)

    // callback
    onChange(isSelected ? false : true)
  }

  return (
    <div className='agent-container' style={myStyle} onClick={handleClick}>
      <img className='avatar' src={imageSrc} alt={name}/>

      <div>
        <div className='title'>{name}: {age}</div>
        <div>{phone}</div>
      </div>
    </div>
  )
}
