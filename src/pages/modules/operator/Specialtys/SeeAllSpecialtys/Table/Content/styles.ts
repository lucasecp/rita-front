import colors from '@/styles/colors'
import styled, { css } from 'styled-components'

interface StatusTypeProps {
  type: number
}

export const Container = styled.div`
  padding: 0px 32px;
  min-width: max-content;

  > ul {
    display: flex;
    padding: 25px 0;
    justify-content: space-between;
    position: relative;
    &::after {
      content: '';
      height: 1px;
      width: calc(100% + 64px);
      position: absolute;
      display: block;
      bottom: 0;
      left: -32px;

      background: ${({ theme }) => theme.extraLight};
    }
  }
  > ul li {
    color: #6a6a6a;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 24px;
    min-width: 217px;
    max-width: 217px;
    ::marker {
      display: none;
      color: transparent;
    }
    > div {
      width: fit-content;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  > h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    color: ${colors.gray.middle};
    text-align: center;
    padding: 32px 0;
  }
`

export const Status = styled.li<StatusTypeProps>`
  > span {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    border-radius: 16px;
    padding: 0 8px;
  }

  ${({ type }) =>
    type
      ? css`
          > span {
            background: ${colors.green.light};
            color: ${colors.green.dark};
          }
        `
      : css`
          > span {
            background: ${colors.orange.middleDark};
            color: ${({ theme }) => theme.extraLight};
          }
        `}}
`
