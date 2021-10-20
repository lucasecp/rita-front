import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* min-height: 100vh; */
  background-color: ${colors.gray.extraLight};

  > main {
    /* overflow: hidden; */

    > h1 {
      font-size: 32px;
      line-height: 39px;
      font-weight: 500;

      color: ${colors.gray.dark};

      margin-bottom: 16px;
    }
  }

  > header,
  > footer,
  > main {
    width: 100%;
    padding: 16px;
  }
`
