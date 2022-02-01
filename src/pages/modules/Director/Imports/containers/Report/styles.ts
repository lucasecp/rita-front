import styled from 'styled-components'
import colors from '@/styles/colors'

export const Container = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 8px 8px 0 0;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    color: ${colors.gray.dark};
  }
`

export const BtnGroup = styled.div`
  background: ${colors.gray.light};
  padding: 24px 32px;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  @media (max-width: 767px) {
    > button {
      width: 100%;
    }
  }
`
