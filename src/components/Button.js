import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button className="btnComponent" onClick={(e)=>{
      e.preventDefault();
      if(props.handler) props.handler(props.loginStatus, props.userStatus);
    }}>{props.text}</button>
  )
}

export default Button