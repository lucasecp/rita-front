import styled from 'styled-components'
import colors from '@/styles/colors'

import BG1 from '@/assets/img/dashboard-balance1.png'
import BG2 from '@/assets/img/dashboard-balance2.png'
import BG3 from '@/assets/img/dashboard-balance3.png'
import BG4 from '@/assets/img/dashboard-balance4.png'

export const Container = styled.section`
  > section {
    display: flex;
    flex-flow: row nowrap;
    gap: 24px;

    margin-top: 24px;

    > div {
      flex: 1;
      background-color: ${colors.black};
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 8px;
      color: #fff;

      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      gap: 10px;
      padding: 24px;

      > h3 {
        color: inherit; /* @workaround */
        font-size: 20px;
      }

      > span {
        border: 1px solid #fff;
        border-radius: 16px;
        padding: 2px 8px;

        font-size: 16px;
      }

      > p {
        font-size: 14px;
      }

      &:nth-child(1) {
        background-color: ${colors.blueViola.light};
        background-image: url(${BG1});
      }

      &:nth-child(2) {
        background-color: ${colors.blue.light};
        background-image: url(${BG2});
      }

      &:nth-child(3) {
        background-color: ${colors.blueViola.middle};
        background-image: url(${BG3});
      }

      &:nth-child(4) {
        background-color: ${colors.orange.middle};
        background-image: url(${BG4});
      }
    }
  }
`
