import React from 'react'

import { Point, Label } from './styles'

const Points = ({ itemList, onMouseDown }) => (
  <>
    {itemList?.map((item, index) => (
      <Point
        id="circle"
        ref={item.ref}
        key={index}
        onMouseDown={(e) => onMouseDown(e, index)}
        size="15"
        style={{
          left: (4 * item.x - Math.floor(15 / 2)) + 'px',
          top: (4 * (100 - item.y) - Math.floor(15 / 2)) + 'px'
        }}
        {...{ item }}
      >
        <Label>{item.label}</Label>
      </Point>
    )
    )}
  </>
)

export default Points
