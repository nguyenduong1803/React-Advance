import React, { useEffect, useRef, useState } from 'react'

function UseImperative() {
  return (
    <div>
      <h2>useImperativeHandle</h2>
      <Input />
    </div>
  )
}
const Input = () => { 
  const refInput = useRef()
  const [value, setValue] = useState('')
  const name = 'Nguễn Hữu Dương'
  useEffect(() => {
    let numberIndex = 0
    refInput.current.focus()
    const timmer = setInterval(() => {
      setValue(name.slice(0, numberIndex))
      if (numberIndex === name.length) {
        clearInterval(timmer)
      }
      console.log(numberIndex)
      numberIndex++
    }, 100)
  }, [])

  return (
    <div>
      <input value={value} ref={refInput} />
    </div>
  )
}

export default UseImperative
