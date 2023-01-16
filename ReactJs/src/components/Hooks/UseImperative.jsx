import React, { useEffect, useRef, useState } from 'react'
import { forwardRef } from 'react'
import { useImperativeHandle } from 'react'
// sử dụng ref để truyền dữ liệu từ con lên cha
function UseImperative() {
  const funcInputRef = useRef()
  const handleClick = () => {
    funcInputRef.current.writeName()
    console.log(funcInputRef)
  }
  return (
    <div>
      <h2>useImperativeHandle</h2>
      <button onClick={handleClick}>Write Name</button>
      <Input ref={funcInputRef} />
    </div>
  )
}
const Input = forwardRef((props, ref) => {
  const [value, setValue] = useState('')
  const refInput = useRef()
  const name = 'Nguễn Hữu Dương'
  //  func handle
  const writeName = () => {
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
  }
  useImperativeHandle(ref, () => {
    return { writeName }
  })
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} ref={refInput} />
    </div>
  )
})

export default UseImperative
