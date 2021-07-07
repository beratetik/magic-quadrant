import React from 'react'

import { AxisWrapper } from './styles'

const axisConfig = {
  x: "Ability to execute → ",
  y: "Completeness of vision →"
}

const Axis = () => (
  <>
    <AxisWrapper type="x">{axisConfig.x}</AxisWrapper>
    <AxisWrapper type="y">{axisConfig.y}</AxisWrapper>
  </>
)

export default Axis
