import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.gray.dark};
    text-align: center;

    max-width: 522px;
  }
`
