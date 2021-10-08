import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  padding: 32px 24px;

  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;

  background: ${colors.white};
  transition: 0.3s;

  > footer {
    margin-top: 24px;

    display: flex;
    justify-content: center;

    button + button {
      margin-left: 32px;
    }
  }

  @media (max-width: 767px) {
    > footer {
      flex-direction: column;

      > button + button {
        margin: 8px 0 0;
      }
    }
  }
`
