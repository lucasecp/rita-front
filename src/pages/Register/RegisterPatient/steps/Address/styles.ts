import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

interface RegistrationDataStylesProps {
  active: boolean
}

export const Container = styled.div<RegistrationDataStylesProps>`
  background: ${colors.white};
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
      margin-bottom: 40px;
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;

      color: ${colors.gray.dark};
    }

    // no > before tag section
    > div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 24px;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 24px;
      > *:nth-child(4) {
        grid-column: span 2;
      }

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        > *:nth-child(4) {
          grid-column: 1;
        }
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
// export const BtnTerms = styled.button`
//   background-color: transparent;
//   color: blue;
//   text-decoration: underline;
//   border: none;
//   padding: 0;
//   margin: 0 3px;
// `

// export const CustomBtn = styled(ButtonPrimary)`
//   margin-left: auto;
// `

// export const BtnPrev = styled.button`
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 20px;
//   text-align: center;
//   color: #9146ff;
//   background-color: transparent;
//   border: none;
//   text-decoration: underline;
// `
