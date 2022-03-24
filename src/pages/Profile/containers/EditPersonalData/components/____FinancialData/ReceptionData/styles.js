import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  > h4 {
    font-weight: 700;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 20px;

    color: ${colors.gray.middle};
  }

  > section {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    gap: 20px;

    max-width: 620px;

    > * {
      width: 50%;
    }
  }

  @media (max-width: 767px) {
    > section {
      max-width: none;

      > * {
        width: 100%;
      }
    }
  }

  ${({ formIsVisible }) =>
    formIsVisible &&
    css`
      > section {
        max-width: none;

        > * {
          width: 100%;
        }
      }
    `}
`
