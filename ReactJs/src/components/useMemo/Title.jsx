import React, { memo } from 'react'

function Title({ address }) {
  console.log('title')
  return <div>{address}</div>
}

export default memo(Title)
