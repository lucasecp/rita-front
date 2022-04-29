import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: ${colors.white};

  > div {
    padding: 40px 32px;

    > section {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 24px;

      margin-bottom: 32px;
    }

    > div + div {
      margin-top: 32px;
    }

    > div:last-child {
      /* display: block; */
      /* width: fit-content; */
      display: inline-block;
    }
  }

  > footer {
    padding: 24px;
    /* overflow: hidden; */
    border-radius: 0px 0px 8px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.light};

    > button + button {
      margin-left: 24px;
    }
  }

  @media (max-width: 767px) {
    > div {
      padding: 32px 24px;

      > section {
        grid-template-columns: 1fr;

        margin-bottom: 16px;
      }

      > div + div {
        margin-top: 16px;
      }

      > div:last-child {
        /* display: block; */
        /* width: fit-content; */
        display: unset;
      }
    }

    > footer {
      /* padding: 16px; */
      flex-direction: column;

      > button {
        width: 100%;
      }

      > button + button {
        margin-left: 0px;
        margin-top: 16px;
      }
    }
  }
`
