import styled from 'styled-components'
/** Styles */
import colors from '@/styles/colors'

export const Container = styled.div`
  > h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.blueViola.middle};
    margin-bottom: 24px;
  }
  > section {
     margin-top: 24px;
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     gap: 24px;
  }
  @media (max-width: 767px) {
    > section {
       display: grid;
       grid-template-columns: 1fr;
       gap: 24px;
     }
  }
`
