// Button.tsx
import React from 'react'

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    props.onClick?.(e)
  }
  <button {...props} onClick={handleClick}>
    {props.children}
  </button>
}