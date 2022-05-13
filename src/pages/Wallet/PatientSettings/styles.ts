import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;

  > section {
    padding: 32px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
    border-radius: 8px;

    display: flex;
    flex-flow: column nowrap;

    h3 {
      font-size: 24px;
      color: ${colors.gray.dark};
    }

    h5 {
      font-size: 16px;
      color: ${colors.gray.middleLight};

      margin-top: 18px;
      max-width: 320px;
    }

    > section {
      display: flex;
      flex-flow: row nowrap;
      gap: 24px;

      margin-top: 24px;
    }

    > form {
      margin-top: 24px;
    }

    &.empty {
      background-color: ${({ theme }) => theme.main};

      > p {
        font-size: 18px;
        color: #fff;
        text-align: center;

        a {
          color: inherit;
          box-shadow: 0 -2px 0 0 #fff inset;
        }
      }
    }
  }
`
