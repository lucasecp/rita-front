import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 48px;

    > h1 {
      font-size: 32px;
      line-height: 39px;
      font-weight: 500;
      color: ${colors.gray.dark};
    }
  }

  > nav {
    display: flex;
    align-items: center;
    margin-left: 24px;

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

        min-width: 40px;
        min-height: 40px;
        max-width: 40px;
        max-height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-left: 16px;

        > img {
          min-height: 100%;
          border: solid 2px ${colors.purple.main.dark};
          border-radius: 50px;
        }

        > span {
          background-color: ${colors.purple.main.dark};
          border-radius: 50%;
          color: #fff;
          width: 100%;
          height: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: none;
        }
      }
    }

    > svg {
      margin-left: 16px;
      cursor: pointer;
      min-width: 32px;
      max-width: 32px;

      fill: ${colors.purple.main.dark};
    }
  }
`
