import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.section`
  background-color: ${colors.white};

  padding: 40px 32px;

  display: flex;
  flex-direction: column;

  > button {
    width: fit-content;
    align-self: end;
    margin-bottom: 24px;
  }

  > div + div {
    margin-top: 24px;
  }

  > footer {
    margin-top: 40px;

    margin-left: auto;

    > button + button {
      margin-left: 24px;
    }
  }

  @media (max-width: 820px) {
    padding: 24px 16px;

    > button {
      width: 100%;
      align-self: center;
    }

    > footer {
      width: 100%;
      display: flex;
      flex-direction: column;

      margin-top: 40px;

      > button + button {
        margin-left: 0px;
        margin-top: 24px;
      }
    }
  }
`
