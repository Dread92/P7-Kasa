import React, { Children } from 'react'

function Main(props) {
    const children = props.children;
    console.log("children de Main", children)
  return (
    <div>{...children}</div>
  )
}

export default Main