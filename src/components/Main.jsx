import React, { Children } from 'react'
import "./Main.scss";
function Main(props) {
    const children = props.children;
    console.log("children de Main", children)
  return (
    <div className='main'>{...children}</div>
  )
}

export default Main