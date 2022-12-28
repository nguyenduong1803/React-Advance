import React from 'react'
import connect from '../HOC/connect'
import withSubscription from '../HOC/WithSubscription'

function Button(props) {
console.log(props)
  return (
    <button>Button</button>
  )
}

export default  connect(Button,{name:"duong",age:12})