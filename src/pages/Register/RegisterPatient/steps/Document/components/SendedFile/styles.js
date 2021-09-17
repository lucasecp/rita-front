import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background: red;

  > section {
  }

  > div {
    > button {
      /* display: flex;
      align-items: center;
      border: none;
      background-color: transparent; */
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;

      color: ${colors.gray.middle};
      padding: 0;

      /* + button {
        margin-left: 25px;
      } */
      /* img {
        margin-right: 10px;
      } */
    }
  }
`
