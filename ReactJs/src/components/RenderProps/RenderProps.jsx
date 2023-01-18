import React, { useState } from 'react'

function RenderProps({ render }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      {open && <h2>Render active</h2>}
      {render(setOpen)}
    </div>
  )
}
export const Button = ({ setOpen, name = 'click me' }) => {
  return <button onClick={() => setOpen((prev) => !prev)}>{name}</button>
}

export default RenderProps
