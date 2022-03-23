import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  background: #fff;
  border-radius: 8px 8px 0 0;

  display: flex;
  flex-direction: column;
  gap: 24px;

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
