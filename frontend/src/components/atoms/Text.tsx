// Text.tsx
import React from 'react'

export const Text = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`text ${props.className}`} {...props}>{props.children}</p>
)