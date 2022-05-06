import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 48px;

    > h1 {
      font-size: 32px;
      line-height: 39px;
      font-weight: 500;
      color: ${colors.gray.dark};
    }
  }

  > nav {
    display: flex;
    align-items: center;
    margin-left: 24px;

    > svg {
      margin-left: 16px;
      cursor: pointer;
      min-width: 32px;
      max-width: 32px;

      fill: ${({ theme }) => theme.main};
    }
  }
`
