import React from 'react'

import { QuadrantListWrapper, QuadrantWrapper, QuadrantText } from './styles'

const Quadrant = ({ item, index }) => (
  <QuadrantWrapper {...{ index }}>
    <QuadrantText>
      {item}
    </QuadrantText>
  </QuadrantWrapper>
)

const QuadrantList = ({ list }) => (
  <QuadrantListWrapper>
    {list?.map((item, index) => <Quadrant key={index} {...{ item, index }} />)}
  </QuadrantListWrapper>
)

export default QuadrantList
