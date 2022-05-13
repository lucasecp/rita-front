import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

interface RegistrationDataStylesProps {
  active: boolean
}

export const Container = styled.div<RegistrationDataStylesProps>`
  background: #fff;
  width: 100%;

  display: none;

  ${({ active }) =>
    active &&
    css`
      display: block;
    `}

  > div {
    padding: 32px;

    > h1 {
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      color: ${colors.gray.dark};
      margin-bottom: 40px;
    }

    > section {
      margin: 24px 0;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;

      @media (max-width: 767px) {
        grid-template-columns: 1fr;
      }
    }
  }

  > footer {
    padding: 24px 32px;
    display: flex;
    align-items: center;
    align-self: stretch;

    background: ${colors.gray.extraLight};

    > button:last-child {
      margin-left: auto;
    }

    @media (max-width: 539px) {
      flex-direction: column;

      > button:last-child {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
`

export const ButtonLinkBlue = styled.button`
  background-color: transparent;
  color: blue;
  text-decoration: underline;
  border: none;
  padding: 0;
  margin: 0 3px;
`
