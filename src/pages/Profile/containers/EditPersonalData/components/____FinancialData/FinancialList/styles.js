import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;

  > * {
    width: 100%;
  }

  ${({ direction }) =>
    direction &&
    direction === 'horizontal' &&
    css`
      flex-flow: row wrap;
      > * {
        width: 300px;
      }
    `}
`
