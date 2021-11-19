import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  background-color: ${colors.purple.background.light};

  padding: 112px 24px 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 24px 16px;
  }
`
