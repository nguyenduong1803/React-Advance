import React from 'react'

function connect(Component,newProps) {
  return function (props) {
    return <Component {...props} {...newProps} />
  }
}

export default connect