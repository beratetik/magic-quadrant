import styled from 'styled-components'

import { color, typo } from '../../../../shared/styles'

// left: ${({ item }) => (4 * item.x - Math.floor(15 / 2))}px;
// top: ${({ item }) => (4 * (100 - item.y) - Math.floor(15 / 2))}px;
export const Point = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${color.darkBlue};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  z-index: 1;
`


export const Label = styled.span`
  position: absolute;
  top: 10px;
  left: 15px;
  user-select: none;
  font-family: ${typo.family};
  color: ${color.darkBlue};
  cursor: default;
`
