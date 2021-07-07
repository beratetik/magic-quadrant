import styled from 'styled-components'

import { typo } from '../../../../shared/styles'

export const AxisWrapper = styled.div`
  position: absolute;
  transform: ${({type}) => type === 'x' ? `translate(-78px, 325px) rotate(270deg);` : `translate(0px, 405px)`}; 
  font-size: 15px;
  font-family: ${typo.family};
`
