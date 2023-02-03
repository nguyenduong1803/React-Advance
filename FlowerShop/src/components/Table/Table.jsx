import React, { useRef } from 'react'

const data = [
  { id: '1', name: 'duong', des: 'dessc', price: 122 },
  { id: '2', name: 'duong', des: 'dessdfasdfasdsc', price: 1242 },
  { id: '3', name: 'duong', des: 'des22222222sc', price: 122 },
  { id: '4', name: 'duong fa', des: 'de1111ssc', price: 122 },
  { id: '5', name: 'duong', des: 'dessc', price: 233 },
  { id: '6', name: 'duong', des: 'dessc', price: 1422 },
  { id: '7', name: 'duong', des: 'dessc', price: 1223 }
]

function Table() {
  const refCol = useRef(null)
  const dataEdit = []
  function click() {
    const map = getMap()
    map.forEach((value) => {
      const object = {}
      const arr = Array.from(value).map((value) => {
        return value.innerText
      })
    })
  }
  function getMap() {
    if (!refCol.current) {
      // Initialize the Map on first usage.
      refCol.current = new Map()
    }
    return refCol.current
  }

  return (
    <div className='wrap'>
      <button className='button' onClick={click}>
        Save Change
      </button>
      <table id='table'>
        <thead>
          <tr style={{ backgroundColor: '#f5f6f7' }}>
            <td style={{ width: '50px' }}>ST</td>
            <td>Description</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                ref={(node) => {
                  const map = getMap()
                  if (node) {
                    map.set(item.id, node.children)
                  } else {
                    map.delete(item.id)
                  }
                }}
                key={item.id}
              >
                <td>
                  <p suppressContentEditableWarning={true} contentEditable={true}>
                    {index + 1}
                  </p>
                </td>
                <td>
                  <p suppressContentEditableWarning={true} contentEditable={true}>
                    {item.des}
                  </p>
                </td>
                <td>
                  <p suppressContentEditableWarning={true} contentEditable={true}>
                    {item.name}
                  </p>
                </td>
                <td>
                  <p suppressContentEditableWarning={true} contentEditable={true}>
                    {item.price}
                  </p>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Table
