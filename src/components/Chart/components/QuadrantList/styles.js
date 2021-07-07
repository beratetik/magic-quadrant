import styled from 'styled-components'

import { color, typo } from '../../../../shared/styles/index'

export const QuadrantListWrapper = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  flex-wrap: wrap;
`

export const QuadrantWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: ${({ index }) => index < 2 ? "flex-start" : "flex-end"};
`

export const QuadrantText = styled.span`
  background-color: ${color.lightBlue};
  font-size: ${typo.size}px;
  font-family: ${typo.family};
  user-select: none;
  color: white;
  padding: 3px 5px;
  border-radius: 4px;
  margin: 3px;
`
