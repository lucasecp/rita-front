import styled, { css } from 'styled-components'

interface InputStyledI {
  color?: string
} 

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #909090;
    margin-bottom: 5px;
  }

  > * {
    display: flex;

    width: 100%;

    > span {
      width: 100%;
      border: solid 1px #eeeeee;
      display: block;
      padding: 14px 30px;
      position: relative;
      border-radius: 4px 0 0 4px;
      cursor: pointer;
    }
  }
}
`

export const Button = styled.button<InputStyledI>`
  background: ${({ theme }) => theme.extraLight};
  color: ${({ theme }) => theme.medium};
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  padding: 14px 30px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  max-width: 164px;
  min-width: 164px;
  ${({ color }) =>
    color === 'green' &&
    css`
      color: #4b8864;
    `}
`
