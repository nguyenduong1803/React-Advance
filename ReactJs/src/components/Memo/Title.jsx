import React, { memo } from 'react'

function Title({ address }) {
  console.log('title')
  return <div>{address}</div>
}
// memo sử lí không render lại components khi state cha thay đổi
function equals(prevState, nextState) {
  console.log("nextState: " + nextState.address)
  console.log("prevState: " + prevState.address)
  return prevState.address === nextState.address;
}
export default memo(Title, equals)
