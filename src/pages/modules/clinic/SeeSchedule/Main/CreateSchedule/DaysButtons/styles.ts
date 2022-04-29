import styled, { css } from 'styled-components'

export const Container = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  label {
    margin-bottom: 6px;
    color: #909090;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
  }
`
export const Buttons = styled.button<{ active: boolean }>`
  padding: 4px;
  cursor: pointer;
  font-weight: 400;
  color: ${({ theme }) => theme.main};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 1px;
  transition: 0.3s;
  line-height: 20px;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  :hover {
    color: ${({ theme }) => theme.darkness};
  }
  ${({ active }) =>
    active &&
    css`
      color: #fff;
      background: ${({ theme }) => theme.main};
      :hover {
        color: #fff;
      }
    `}
`
