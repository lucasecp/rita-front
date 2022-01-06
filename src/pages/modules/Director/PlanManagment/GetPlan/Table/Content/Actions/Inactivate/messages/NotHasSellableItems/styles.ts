import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${colors.gray.dark};
  text-align: center;
  max-width: 450px;

  > img {
    width: 56px;
  }

  > h6 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: inherit;

    > span {
      color: ${({ theme }) => theme.darkness};
    }
  }

  > p {
    margin-top: 26px;

    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: inherit;
  }

  > * + * {
    margin-top: 24px;
  }

  > footer {
    button + button {
      margin-left: 24px;
    }
  }

  @media (max-width: 500px) {
    > footer {
      display: flex;
      flex-direction: column;
      width: 100%;

      > button {
      }

      > button + button {
        margin-left: 0px;
        margin-top: 24px;
      }
    }
  }
`
