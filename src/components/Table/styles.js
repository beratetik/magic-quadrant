import styled from 'styled-components'

import { color, typo } from '../../shared/styles'

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    margin: 30px 0;
  }
`

export const AddItemButton = styled.input`
  align-self: start;
  cursor: pointer;
`

export const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  grid-gap: 5px;
  margin-bottom: 5px;
`

export const Label = styled.p`
  border-radius: 4px;
  background-color: ${color.lightBlue};
  color: white;
  padding: 3px;
  font-size: ${typo.size}px;
  margin: 10px 0 0;
`
