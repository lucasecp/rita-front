import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;

  > section {
    padding: 32px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(223 210 255 / 15%) 0px 2px 8px 0px;
    border-radius: 8px;

    display: flex;
    flex-flow: column nowrap;
    gap: 24px;

    > header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > h3 {
        font-size: 24px;
        font-weight: 400;
        color: ${colors.gray.middle};
      }
    }
  }
`

export const TableColumnDetails = styled.button`
  color: ${colors.gray.middle};
  font-size: 16px;

  > svg {
    height: 16px;
    vertical-align: text-top;
  }

  &:hover {
    color: ${colors.gray.dark};
  }
`

export const TableColumnStatus = styled.span<{ name?: string }>`
  display: inline-block;
  background-color: ${colors.gray.middleLight};
  border-radius: 16px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;

  padding: 0 10px;

  ${({ name }) =>
    String(name).toUpperCase() === 'NEW' &&
    css`
      background-color: ${colors.pink.middle};
    `}

  ${({ name }) =>
    String(name).toUpperCase() === 'OK' &&
    css`
      background-color: ${colors.green.light};
      color: ${colors.green.dark};
    `}
`

export const TableColumnAmount = styled.div`
  text-align: right;

  svg {
    height: 10px;
    vertical-align: text-top;
  }

  small {
    display: block;
    color: ${colors.gray.middle};
    font-size: 0.75em;
  }
`
