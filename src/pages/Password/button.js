import colors from '@/styles/colors'
import styled from 'styled-components'

export const Button = styled.div`
  margin-left: auto;
  justify-content: end;
  display: flex;

  button + button {
    margin-left: 15px;
  }
`
