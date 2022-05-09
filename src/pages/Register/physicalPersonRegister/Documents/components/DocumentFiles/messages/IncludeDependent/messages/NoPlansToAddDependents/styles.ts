import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 56px;
  }

  > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.gray.dark};
    text-align: center;

    min-width: 450px;
  }

  > * + * {
    margin-top: 24px;
  }

  > footer {
    button + button {
      margin-left: 32px;
    }
  }

  @media (max-width: 500px) {
    > p {
      min-width: unset;
    }

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
