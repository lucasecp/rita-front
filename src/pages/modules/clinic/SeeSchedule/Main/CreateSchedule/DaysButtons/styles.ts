import styled, { css } from 'styled-components'

export const Container = styled.div`
  > div {
    display: flex;
    flex-wrap: wrap;
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
  padding: 8px;
  cursor: pointer;
  font-weight: 400;
  color: ${({ theme }) => theme.main};
  font-size: 16px;
  transition: 0.3s;
  line-height: 20px;
  border: none;
  :hover {
    color: ${({ theme }) => theme.darkness};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.darkness};
    `}
`
