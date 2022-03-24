import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  > h5 {
    font-size: 22px;
    color: ${colors.gray.middleLight};

    margin-top: 24px;
    max-width: 280px;
  }

  > form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    margin-top: 24px;

    > section,
    > footer {
      grid-column: span 2;
    }

    > footer {
      text-align: right;

      button + button {
        margin-left: 24px;
      }
    }
  }
`
