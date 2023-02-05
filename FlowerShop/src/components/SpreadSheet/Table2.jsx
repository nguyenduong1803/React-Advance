import React, { useState } from 'react'
import Spreadsheet from 'react-spreadsheet'

const data = [
  { id: '1', name: 'duong', des: 'dessc', price: 122 },
  { id: '2', name: 'duong', des: 'dessdfasdfasdsc', price: 1242 },
  { id: '3', name: 'duong', des: 'des22222222sc', price: 122 },
  { id: '4', name: 'duong fa', des: 'de1111ssc', price: 122 },
  { id: '5', name: 'duong', des: 'dessc', price: 233 },
  { id: '6', name: 'duong', des: 'dessc', price: 1422 },
  { id: '7', name: 'duong', des: 'dessc', price: 1223 }
]
function Table2() {
  const [data, setData] = useState([
    [{ value: 'Vanilla' }, { value: 'Chocolate' }, { value: 'duong coi' }, { value: 'heelo' }],
    [{ value: 'Strawberry' }, { value: 'Cookies' }]
  ])
  return (
    <div>
      <Spreadsheet data={data} onChange={setData} />
    </div>
  )
}

export default Table2
