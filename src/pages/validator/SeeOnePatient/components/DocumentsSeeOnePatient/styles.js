import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  padding-top: 40px;

  > h2 {
    margin-bottom: 24px;

    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.gray.dark};
  }
`
