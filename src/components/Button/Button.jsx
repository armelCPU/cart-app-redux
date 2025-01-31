import React from 'react'

import "./Button.css"
import { useEffect } from 'react'
import { useState } from 'react';

export default function Button({type, name, onClick}) {
  const [buttonClass, SetButtonClass] = useState("");

  useEffect(() => {
    if (type == "add"){
      SetButtonClass("add-button");
    } else {
      if (type == "remove") {
        SetButtonClass("remove-button");
      } else {
        SetButtonClass("show-cart-button");
      }
    }
  }, []);

  return (
    <input 
        type="button" 
        value={name} 
        className={buttonClass}
        onClick={onClick} 
    />
  )
}
