import React from 'react'

import "./Button.css"

export default function Button({type, name}) {
  return (
    <input 
        type="button" 
        value={name} 
        className={type == "add" ? "add-button" : "remove-button"} 
    />
  )
}
