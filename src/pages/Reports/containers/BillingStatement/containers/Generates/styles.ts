import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 32px;

  > div:first-child {
    gap: 24px;

    > button + button {
      margin-left: 24px;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 24px;

    > div {
      display: flex;
      flex-direction: column;

      > h6 {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;

        color: ${colors.gray.dark};
      }

      .MuiFormGroup-row {
        justify-content: end;

        > div:last-child {
          > label {
            margin-right: 0;
          }
        }
      }
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;

    gap: 24px;
  }
`
