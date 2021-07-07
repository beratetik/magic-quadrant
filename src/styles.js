import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 30px;
  text-align:center;
  
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`
