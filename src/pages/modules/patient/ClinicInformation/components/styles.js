import styled, { css } from 'styled-components'

export const Accordion = styled.div`
  max-height: 0;
  transition: 0.3s max-height;
  visibility: hidden;
  opacity: 0;
  /* ${({ order }) => {
    order === 'show' &&
    css`
        max-height: 1000px;
        visibility: visible;
        `
  }} */
  &[data-expanded='1'] {
    transition: 0.3s max-height;
    max-height: 2000px;
    visibility: visible;
    opacity: 1
  }
`
