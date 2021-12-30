import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  margin: 106px 0 0 0;
  overflow-x: hidden;
  padding: 0 32px 0 32px;
  background: ${colors.purple.background.light};

  @media (max-width: 767px) {
    padding: 25px 24px 0;
    margin: 40px 0 0 0;
  }
`
export const Container = styled.div`
  @media (max-width: 767px) {
    > div > main > h1 {
      display: flex;
      justify-content: space-between;
    }}
    > div > header {
      justify-content: stretch;
      > h1 {
        margin: 0 40px 0 0;
      }
      > nav {
        margin-left: auto;
      }
    }
  }
`
