import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  overflow-x: hidden;
  padding: 32px 32px 0 32px;
  background: #fff;
  border-radius: 8px 8px 0px 0px;
  > footer {
    margin-top: 32px;
  }
  > *:last-child {
    margin: 32px -32px 0 -32px;
    padding: 35px 32px;
    background: #eeeeee;
  }
  @media (max-width: 767px) {
    padding: 25px 24px 0;
    > *:last-child {
      margin: 0 -24px;
      padding: 35px 24px;
    }
  }
`
