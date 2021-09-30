import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  background: ${colors.white};
  padding: 32px;
  width: 100%;

  > h1 {
    margin-bottom: 40px;

    font-size: 32px;
    font-weight: 500;
    line-height: 40px;

    color: ${colors.gray.dark};
  }
`
