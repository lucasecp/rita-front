import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 26px 0 0;
  /* box-shadow: 0px 2px 8px 0px ${colors.gray.extraLight}; */
  margin: 24px 0px;
  background: ${colors.gray.extraLight};
  border-radius: 8px;
  position: relative;

  > footer {
    padding: 24px 32px;
    display: flex;
    align-items: center;
    align-self: stretch;

    background: ${colors.gray.extraLight};

    > button:last-child {
      margin-left: auto;
    }

    @media (max-width: 539px) {
      flex-direction: column;

      > button:last-child {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }
`
