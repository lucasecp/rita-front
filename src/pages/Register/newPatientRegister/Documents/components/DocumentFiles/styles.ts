import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: ${colors.white};

  padding: 32px;

  > h1 {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;

    color: ${colors.gray.dark};
    margin-bottom: 32px;
  }
`
