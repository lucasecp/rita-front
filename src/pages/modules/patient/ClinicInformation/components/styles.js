import styled, { css } from 'styled-components'

export const Accordion = styled.div`
  max-height: 0;
  transition: 0.4s;
  visibility: hidden;
  transition-delay: .1s;
  /* ${({ order }) => {
    order === 'show' &&
    css`
        max-height: 1000px;
        visibility: visible;
        `
  }} */
  &[data-expanded='show'] {
    transition: 0.4s max-height;
    max-height: 2000px;
    visibility: visible;
  }
`
