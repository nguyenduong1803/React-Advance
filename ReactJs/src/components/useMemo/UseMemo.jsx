import React, { useMemo, useState } from 'react'
import Title from './Title'

function UseMemos() {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('Nam sách')
  const getAddress = useMemo(() => {
    return address
  }, [address])
  return (
    <section>
      <div>
        <Title address={getAddress} />
        <button onClick={() => setAddress('Change banner')}>Change title</button>
      </div>
      <div>
        <label htmlFor=''>Nhap useMemo </label>
        <input value={name} onChange={(e) => setName(e.target.value)} type='text' />
      </div>
    </section>
  )
}

export default UseMemos
