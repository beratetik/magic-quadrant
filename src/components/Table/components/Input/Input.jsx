import React from 'react'

const Input = ({ type, ...rest }) => {
  if (type === "number") {
    return (
      <input
        min="0"
        max="100"
        step="1"
        {...{ type, ...rest }}
      />
    )
  }

  return <input {...{ type, ...rest }} />
}

export default Input
