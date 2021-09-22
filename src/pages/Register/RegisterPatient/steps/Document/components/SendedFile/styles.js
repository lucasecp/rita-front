import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > section {
    display: flex;
    align-items: center;

    > div button {
      width: max-content;
    }

    > h6 {
      width: 187px;

      margin-left: 12px;
      margin-right: 12px;

      font-weight: bold;
      font-size: 16px;
      line-height: 150%;

      color: ${colors.purple.main.dark};
    }
  }

  > aside {
    // aligned with the larger click area
    margin-right: -10px;

    display: flex;
    align-items: center;

    > button {
      // click area in right
      padding: 10px;

      display: flex;
      align-items: center;

      border: none;
      background-color: transparent;

      font-size: 14px;
      font-weight: 500;
      line-height: 21px;

      color: ${colors.gray.middle};

      /* + button {
        margin-left: 25px;
      } */
      img {
        margin-right: 8px;
      }
    }
  }
`
