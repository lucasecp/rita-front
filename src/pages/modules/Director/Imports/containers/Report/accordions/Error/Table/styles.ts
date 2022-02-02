import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  width: 100%;
  overflow-x: auto;

  header {
    min-width: max-content;
    display: grid;
    grid-template-columns: 0.1fr 0.3fr 0.2fr 0.2fr 0.2fr;

    padding: 8px 16px;
    background: #f5f5f5;

    > p {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: ${colors.gray.middle};
    }

    @media (max-width: 868px) {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 25px;
      text-align: center;

      > p {
        min-width: 150px;
        max-width: 150px;
      }
    }
  }

  main {
    > div {
      min-width: max-content;
      padding: 8px 16px;
      display: grid;
      grid-template-columns: 0.1fr 0.3fr 0.2fr 0.2fr 0.2fr;
      border-bottom: 1px solid ${colors.gray.light};

      > p {
        font-weight: 400;
        font-size: 14px;
        line-height: 17.5px;
      }

      @media (max-width: 868px) {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 25px;
        text-align: center;

        > p {
          min-width: 150px;
          max-width: 150px;
        }
      }
    }
  }
`
