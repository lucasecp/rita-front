import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 32px;
    line-height: 39px;
    font-weight: 500;
    color: ${colors.gray.dark};
  }

  > nav {
    display: flex;
    align-items: center;

    > a {
      display: flex;
      align-items: center;
      color: ${colors.gray.dark};
      font-size: 14px;
      font-weight: 500;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 40px;
        height: 40px;
        border-radius: 50%;

        border: solid 2px ${colors.purple.main.dark};

        overflow: hidden;
        margin-left: 24px;
      }
    }

    > svg {
      margin-left: 16px;
      cursor: pointer;
      width: 32px;

      fill: ${colors.purple.main.dark};
    }
  }
`
