import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  background-color: ${colors.white};
  border-radius: 8px 8px 0 0;

  > h2 {
    padding: 26px 32px;

    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.gray.dark};
  }

  > footer {
    padding: 26px 32px;
    border-radius: 0 0 8px 8px;
    background-color: ${colors.gray.light};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 24px;

    @media (max-width: 767px) {
      flex-direction: column;

      * {
        width: 100%;
      }
    }
  }
`
