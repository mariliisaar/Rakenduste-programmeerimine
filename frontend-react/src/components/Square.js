import React from 'react'

const Square = ({height, width, colour, visible}) => {
  let style = {
    width: width,
    height: height,
    background: colour,
  }
  return(
    <>
      {visible && (
        <div style={style}></div>
      )}
    </>
  )
}

export default Square;