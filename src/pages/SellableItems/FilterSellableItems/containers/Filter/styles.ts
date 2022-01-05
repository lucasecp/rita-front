import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  padding: 24px 32px;
  background-color: ${colors.gray.light};
  border-radius: 8px 8px 0px 0px;

  > div:first-child {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(4, minmax(auto, 1fr));
  }

  > div:nth-child(2) {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
  }

  > div + div {
    margin-top: 24px;
  }

  > footer {
    display: flex;
    justify-content: end;
    margin-top: 24px;
    gap: 24px;
  }

  @media (max-width: 767px) {
    padding: 16px 24px;

    > div:first-child {
      gap: 16px;
      grid-template-columns: 1fr;
    }

    > div:nth-child(2) {
      gap: 16px;
      grid-template-columns: 1fr;
    }

    > div + div {
      margin-top: 16px;
    }

    > footer {
      flex-direction: column;

      > button + button {
        margin-left: 0px;
        margin-top: 16px;
      }
    }
  }
`
