import styled, { css } from 'styled-components'

export const Container = styled.div<{ show: boolean; height: number }>`
  position: absolute;
  top: 56px;
  min-width: 200px;
  background: #fff;
  border-radius: 0 0 20px 20px;
  z-index: 1;
  > button + button {
    border-top: solid 1px #eaf0fa;
  }
  > button:last-child {
    border-radius: 0 0 20px 20px;
  }
  visibility: hidden;
  max-height: 0;
  transition: 0.2s;
  > * {
    opacity: 0;
  }

  ${({ show, height }) =>
    show &&
    css`
      max-height: ${height + 'px'};
      transition: 0.2s;
      visibility: visible;
      > * {
        opacity: 1;
      }
    `}
`

export const Button = styled.button<{ color: string }>`
  border: none;
  display: flex;
  background: transparent;
  align-items: center;
  gap: 8px;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 500;
  line-height: 15px;
  color: #6a6a6a;
  padding: 12px;
  width: 100%;
  transition: 0.3s;
  :hover {
    background: #eeeeee;
  }

  &::before {
    content: '';
    display: block;
    background-color: ${({ color }) => color};
    min-width: 18px;
    height: 18px;
    border-radius: 50%;
  }
`
