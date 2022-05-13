import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  > header {
    text-align: center;

    svg {
      color: ${({ theme }) => theme.main};
      height: 57px;
    }
  }

  > section {
    > p {
      font-weight: 500;
      font-size: 20px;
      line-height: 25px;

      color: ${colors.gray.dark};
      text-align: center;

      max-width: 522px;
    }
  }

  > footer {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 18px 24px;

    white-space: nowrap;

    > a > button {
      width: 100%;
    }
  }

  @media (max-width: 539px) {
    > footer {
      flex-direction: column;
      width: 100%;

      > * {
        width: 100%;
      }
    }
  }
`
