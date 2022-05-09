import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px 8px 0 0;
  padding: 40px 32px 48px;

  h2 {
    font-weight: 500;
    margin: 24px 0 24px 100%;
    font-size: 32px;
    color: ${colors.purple.main.dark};
  }

  h3 {
    font-weight: 500;
    font-size: 22px;
    color: ${colors.purple.main.dark};
    margin-top: 32px;
  }
  span,
  li {
    font-size: 22px;
    color: ${colors.gray.middle};
  }
`

export const Top = styled.div`
  display: flex;
  grid-template-columns: auto auto;
  justify-content: space-between;
  gap: auto;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 33px;
    color: ${colors.purple.main.dark};
    margin: auto 0;
  }

  span {
    margin: auto 0;
    color: ${colors.purple.main.dark};
    font-size: 16px;
    padding: 16px;
    border-radius: 8px;
    border: 2px solid ${colors.purple.main.dark};
  }
`

export const Price = styled.div`
  display: flex;

  h2 {
    margin: 24px 0 0 auto;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  background-color: ${colors.gray.extraLight};
  border-radius: 0 0 8px 8px;

  button {
    margin: 24px auto;
  }
`
