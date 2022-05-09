import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  height: 100vh;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 26px;
    color: ${colors.purple.main.dark};
  }

  > img {
    max-width: 500px;
  }
`
