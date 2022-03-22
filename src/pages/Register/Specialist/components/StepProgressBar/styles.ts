import styled, { css } from 'styled-components'

interface StepsProps {
  waiting?: boolean
  finish?: boolean
  active: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #F5F5F5;
  justify-content: center;
  padding: 24px 0

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
      background:#EEEEEE;
    `}

  ${({ finish }) =>
    finish &&
    css`
      background: #EEEEEE;
    `}

  ${({ active }) =>
    active &&
    css`
      background: #ACFFC5;
    `}

  +span {
    margin-left: 48px;

    ::before {
      content: '';
      height: 2px;
      width: 24px;
      border-radius: 2px;
      display: block;
      background-color: #F5F5F5;
      position: relative;
      left: -150%;
      top: 50%;
    }
  }
`
