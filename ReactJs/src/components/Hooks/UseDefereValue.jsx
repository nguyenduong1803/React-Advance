import React, { memo, useDeferredValue, useEffect, useState } from 'react'
// sử dụng giống debounce nhưng tự tính toán thời gian
function UseDefereValue() {
  const [name, setName] = useState('')
  const defereValue = useDeferredValue(name)
  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <Cart name={defereValue} />
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
export default UseDefereValue
