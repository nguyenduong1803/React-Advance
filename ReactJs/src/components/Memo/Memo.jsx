import React, { useState } from 'react'
import Title from './Title'

function Memo() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('Nam sách')
  return (
    <section>
      <div>
        <Title address={address} />
        <button onClick={() => setAddress('Change banner')}>Change title</button>
      </div>
      <div>
        <label htmlFor=''>Nhap ten</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type='text' />
      </div>
    </section>
  )
}

export default Memo
