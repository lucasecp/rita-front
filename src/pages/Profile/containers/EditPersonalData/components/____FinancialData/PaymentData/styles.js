import styled from 'styled-components'
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
    max-width: 300px;
  }

  @media (max-width: 767px) {
    > section {
      max-width: none;
    }
  }
`
