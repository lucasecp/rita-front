import styled, { css } from 'styled-components'

export const Container = styled.button<{
  isActive: boolean
  onlyOneProfile: boolean
  color: string
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  min-width: 40px;
  height: 40px;
  border-radius: 50%;

  overflow: hidden;
  margin-left: 16px;
  > svg {
    transition: 0.2s;
    min-width:8px;
    > path {
      fill: ${({ color }) => color};
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      > svg {
        transform: rotate(180deg);
      }
    `}

  ${({ onlyOneProfile }) =>
    onlyOneProfile &&
    css`
      > svg {
        display: none;
      }
    `}

  > img {
    min-height: 100%;
    border: solid 2px ${({ color }) => color};
    border-radius: 50px;
  }
  > span {
    background-color: ${({ color }) => color};
    border-radius: 50%;
    color: #fff;
    min-width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
  }
`
