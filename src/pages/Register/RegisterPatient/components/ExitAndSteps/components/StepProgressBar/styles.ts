import styled, { css } from 'styled-components'

interface StepsProps {
  waiting?: boolean
  finish?: boolean
  active: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Step = styled.span<StepsProps>`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: block;
  transition: 0.3s;
  margin-bottom: 26px;

  ${({ waiting }) =>
    waiting &&
    css`
      background: #dfd2ff;
    `}

  ${({ finish }) =>
    finish &&
    css`
      background: #acffc5;
    `}

  ${({ active }) =>
    active &&
    css`
      background: #9146ff;
    `}

  +span {
    margin-left: 48px;

    ::before {
      content: '';
      height: 2px;
      width: 24px;
      border-radius: 2px;
      display: block;
      background-color: #efeafa;
      position: relative;
      left: -150%;
      top: 50%;
    }
  }
`
