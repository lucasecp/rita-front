import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    color: ${colors.gray.dark};
  }
`
