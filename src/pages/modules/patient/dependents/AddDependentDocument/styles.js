import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  padding: 32px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
  border-radius: 8px;
  > div {
    padding: 40px 32px;

    > h1 {
      margin-bottom: 16px;
      color: ${colors.gray.dark};
      font-weight: 500;
      font-size: 32px;
      line-height: 30px;
    }
  }
`
