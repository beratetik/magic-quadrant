import styled, { css } from 'styled-components'

import { color } from '../../shared/styles'

const innerLine = css`
  content: '';
  position: absolute;
  background-color: ${color.lightGrey};
  z-index: -1;
`

export const ChartWrapper = styled.div`
  min-width: 400px;
  width: 400px;
  height: 400px;
  max-height: 400px;
  border: 2px solid #696969;
  position: relative;

  &:before {
    left: calc(50% - 2px);
    width: 2px;
    height: 400px;
    ${innerLine}
  }

  &:after {
    left: 0;
    top: calc(50% - 2px);
    width: 400px;
    height: 2px;
    ${innerLine}
  }
`
