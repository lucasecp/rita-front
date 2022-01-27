import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${colors.white};

  overflow-x: auto;
  border-radius: 8px;
`

export const Content = styled.div`
  /* overflow-x: hidden;
  padding: 32px 32px 0 32px;
  background: ${colors.purple.background.light};

  > *:last-child {
    margin: 0 -32px;
    padding: 35px 32px;
    background: #fff;
  }

  @media (max-width: 767px) {
    padding: 25px 24px 0;
  } */
`
