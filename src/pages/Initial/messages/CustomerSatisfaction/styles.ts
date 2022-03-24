import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 48px;

  max-width: 460px;

  > header {
    > p {
      color: ${colors.gray.dark};
      font-size: 20px;
      text-align: center;
      line-height: 1.2;
    }
  }

  > section {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      svg {
        color: ${({ theme }) => theme.main};
        height: 44px;

        cursor: pointer;

        &.active {
          fill: ${({ theme }) => theme.mediumLight};
        }
      }
    }

    > p {
      color: ${({ theme }) => theme.main};
      font-size: 24px;
      line-height: 1;
      text-align: center;

      min-height: 24px;
      margin-top: 16px;

      > q {
        color: ${colors.orange.middleDark};
        font-size: 12px;
      }
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
