import React, { useEffect } from 'react'

function withSubscription(Component) {
  return function (props) {
    useEffect(() => {
      console.log('HOC')
    })
    return <Component {...props} />
  }
}

export default withSubscription
