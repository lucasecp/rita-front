import ButtonPrimary from '@/components/Button/Primary'
import colors from '@/styles/colors'
import styled, { css } from 'styled-components'

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
      font-style: normal;
      font-weight: 500;
      line-height: 40px;
      color: ${colors.gray.dark};
      margin-bottom: 32px;
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
