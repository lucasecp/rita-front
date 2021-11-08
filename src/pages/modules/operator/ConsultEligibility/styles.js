import styled, { css } from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  width: 100%;
  align-items: ${({ hasMessage }) => (hasMessage ? 'center' : 'flex-end')};

  padding: 40px 32px;

  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;

  background: ${colors.white};

  > button {
    width: fit-content;

    ${({ hasMessage }) =>
      hasMessage &&
      css`
        margin-bottom: 2px;
      `};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    > button {
      width: unset;
      margin-bottom: unset;
    }
  }
`
