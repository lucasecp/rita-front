import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;
  padding: 40px 32px 48px;

  > h6 {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: ${colors.gray.dark};
    margin-bottom: 24px;
  }
  @media (max-width: 767px) {
    padding: 32px;
    > h6 {
      font-weight: 700;
      font-size: 20px;
      line-height: 28px;
    }
  }
`
export const BtnGroup = styled.div`
   margin-left: auto;
  justify-content: end;
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;

  button + button {
    margin-left: 15px;
  }
  @media (max-width: 539px) {
    flex-direction: column;
    > button:last-child {
      margin-left: 0;
      margin-top: 20px;
    }
    margin-top: 30px
  }
`
