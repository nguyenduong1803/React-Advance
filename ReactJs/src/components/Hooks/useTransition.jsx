import React, { memo, useDeferredValue, useEffect, useState, useTransition } from 'react'
// sử dụng giống debounce nhưng tự tính toán thời gian
function UseTransition() {
  const [name, setName] = useState('')
  const [defereValue2, setDefereValue2] = useState('')
  const [pending, startTransition] = useTransition()
  // const defereValue = useDeferredValue(name)
  const handleChange = (e) => {
    console.log(pending)
    const value = e.target.value
    setName(value)
    startTransition(() => {
      setDefereValue2(value)
    })
  }
  return (
    <div>
      <input type='text' value={name} onChange={handleChange} />
      {pending && <div>Loading.........</div>}
      {!pending && <Cart name={defereValue2} />}
    </div>
  )
}

const Cart = memo(({ name }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    console.log(name)
    // Tính toán nặng
    const SIZE = 19999
    const result = []
    for (let i = 0; i < SIZE; i++) {
      result.push(name)
    }
    setProducts(result)
  }, [name])

  // Render một danh sách lớn => tốn thời gian
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  )
})
export default UseTransition
