import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${colors.white};
  padding: 32px;

  overflow-x: auto;
  border-radius: 8px;

  > footer {
    padding: 24px;
    border-radius: 0px 0px 8px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    > button + button {
      margin-left: 24px;
    }
  }
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
