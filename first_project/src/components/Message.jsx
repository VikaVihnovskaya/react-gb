import React from "react";
import './message.css';
function Message ({name, text}) {
  return (
      <div className='message'>
        <h1 className='name'>My name is {name}</h1>
        <p className='text'>I am from {text}</p>
      </div>
  )
}
export default Message;