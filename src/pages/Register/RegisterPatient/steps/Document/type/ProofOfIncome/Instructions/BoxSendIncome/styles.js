import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  > h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;

    color: ${colors.gray.dark};

    margin-bottom: 8px;
  }

  > span {
    margin-top: 8px;
    margin-bottom: 16px;
    color: ${colors.orange.middleDark};
  }
  > section {
    > span {
    }
  }
`
