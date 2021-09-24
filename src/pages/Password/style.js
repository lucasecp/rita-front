import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.form`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;
  padding: 40px 32px;
  max-width: 768px;

  > h6 {
    font-size: 24px;
    font-weight: 700;
    color: ${colors.gray.dark};
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #afafaf;
    margin: 15px 0 24px 0;
  }
`

export const Button = styled.div`
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
  }
  @media(max-width: 767px){
    margin-top:50px;
  }
`
