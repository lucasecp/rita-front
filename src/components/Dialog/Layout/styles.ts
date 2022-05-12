import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 24px;

  max-width: 460px;

  > header {
    text-align: center;

    svg {
      color: ${({ theme }) => theme.main};
      margin-bottom: 10px;
      height: 57px;
    }

    h3 {
      font-size: 24px;
      color: ${colors.gray.dark};
    }
  }

  > section {
    width: 100%;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: ${colors.gray.light};
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${colors.gray.middleLight};
      border-radius: 50px;
    }

    &::-webkit-scrollbar-thumb:hover,
    &::-webkit-scrollbar-thumb:active {
      background: ${colors.gray.middle};
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
