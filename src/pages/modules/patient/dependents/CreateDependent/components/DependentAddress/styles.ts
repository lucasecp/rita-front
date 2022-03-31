import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

interface FormAddressProps {
  showFields: boolean
}

export const Container = styled.div`
  padding: 32px 32px 0 32px;

  > h3 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: ${colors.purple.main.dark};
  }
`

export const InputsArea = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  overflow: hidden;

  > div {
    margin-bottom: 24px;
  }
`

export const FormAddress = styled.div<FormAddressProps>`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: scale(1);
      height: 255.5px;
    }
    to {
      opacity: 0;
      transform: scale(0.9);
      height: 0;
    }
  }

  display: flex;
  flex-direction: column;
  gap: 24px;

  ${({ showFields }) =>
    showFields
      ? css`
          animation: fadeIn 0.3s;
        `
      : css`
          animation: fadeOut 0.3s linear;
          animation-fill-mode: forwards;

          section {
            animation: fadeOut 0.3s linear;
            animation-fill-mode: forwards;
          }
        `}

  section {
    display: grid;
    gap: 24px;
  }

  section:nth-child(1) {
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  section:nth-child(2) {
    grid-template-columns: repeat(3, 1fr);

    div:nth-child(1) {
      grid-column: 1 / 3;
    }

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  section:nth-child(3) {
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
`
