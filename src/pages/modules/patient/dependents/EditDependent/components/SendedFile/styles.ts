import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  > section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    > aside {
      /* display: flex; */
      div {
        margin-left: auto;
      }
    }

    > h6 {
      max-width: 187px;

      margin-left: 12px;
      margin-right: 12px;

      font-weight: bold;
      font-size: 16px;
      line-height: 150%;

      color: ${colors.purple.main.dark};
      word-break: break-all;
    }
  }

  @media (max-width: 930px) {
    > section {
      justify-content: space-between;
      width: 100%;
      gap: auto;
      > h6 {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 400px) {
    > section {
      flex-direction: column;
      display: flex;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      align-items: center;
      gap: auto;

      > div {
        width: 100%;

        > button {
          width: 100%;
        }
      }

      > h6 {
        margin: 12px 0 0;
      }
    }
  }
`
