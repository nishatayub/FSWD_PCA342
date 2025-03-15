// write product card here
import React from 'react'
import Button from "./button"

const productcard = () => {
    const image = ""
    const name = "Scented Candle"
    const price = 312
  return (
    <div>
      <img src={image} alt="candle" />
      <h1>{`${name}`}</h1>
      <h3>{`${price}`}</h3>
      <Button />
    </div>
  )
}

export default productcard
