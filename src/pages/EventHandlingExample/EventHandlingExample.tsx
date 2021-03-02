import React, { useState } from 'react'
import './EventHandlingExample.scss'

export const EventHandlingExample = () => (
  <BobbyWidget onSave={() => console.log('Parent says, "Hey!"')} />
)

export const BobbyWidget = ({
  onSave,
  onClose,
}: {
  onSave: () => void
  onClose?: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    onSave()

    setIsOpen(false)
    onClose && onClose()
    console.log('heyo')
  }
  return (
    <div className="EventHandlingExample" onClick={handleClick}>
      <div>I am {isOpen ? 'open' : 'closed'}</div>

      <SaveButton onClick={onSave} />
    </div>
  )
}

const SaveButton = ({ onClick }: { onClick: () => void }) => {
  const handleClick = () => {
    onClick()
  }
  return <button onClick={handleClick}>Save</button>
}
