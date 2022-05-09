import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  > a {
    > svg {
      > path {
        fill: ${({ theme }) => theme.main};
      }
    }
  }

  > nav {
    display: flex;
    align-items: center;
    position: relative;
    display: flex;
    align-items: center;
    color: ${colors.gray.dark};
    font-size: 14px;
    font-weight: 500;

    > div {
    }

    > svg {
      margin-left: 16px;
      cursor: pointer;
      width: 32px;

      fill: ${({ theme }) => theme.main};
    }
  }
`

export const HamburgerButton = styled.button`
  margin-left: 20px;
  border: none;
  background: transparent;
  height: 40px;

  span {
    background-color: ${({ theme }) => theme.main};
    width: 24px;
    margin: 7px 0;
    height: 2px;
    margin: 4px 0;
    display: block;
    border-radius: 8px;
  }
  ::after,
  ::before {
    content: '';
    display: block;
    background-color: ${({ theme }) => theme.main};
    width: 24px;
    height: 2px;
    border-radius: 8px;
  }
  ::after {
    margin-top: 4px;
  }
  ::before {
    margin-bottom: 4px;
  }
`
