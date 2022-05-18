import styled, { css } from 'styled-components'

interface StepsProps {
  waiting?: boolean
  finish?: boolean
  active: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  justify-content: center;
  padding: 24px 0;
`

export const Step = styled.span<StepsProps>`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: block;
  transition: 0.3s;

  ${({ waiting }) =>
    waiting &&
    css`
      background: #eeeeee;
    `}

  ${({ finish }) =>
    finish &&
    css`
      background: #eeeeee;
    `}

  ${({ active }) =>
    active &&
    css`
      background: #acffc5;
    `}

  +span {
    margin-left: 48px;

    ::before {
      content: '';
      height: 2px;
      width: 24px;
      border-radius: 2px;
      display: block;
      background-color: #f5f5f5;
      position: relative;
      left: -150%;
      top: 50%;
    }
  }
`
