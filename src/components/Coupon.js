import React from 'react'

const Coupon = ({discount, title, text, cta}) => {
  return (
    <div>
      <button>{discount}</button>
      <h2>{title}</h2>
      <p>{text} <strong>{cta}</strong></p>
    </div>
  )
}

export default Coupon