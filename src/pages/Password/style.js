import hexToRgba from '@/helpers/hexToRgba'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;
  padding: 50px 30px;
  max-width: 768px;
  margin-top: 104px;

  > h6 {
    font-size: 24px;
    font-weight: 500;
    color: ${colors.gray.dark};
  }

  > p {
    padding: 20px 0;
    font-family: Athletics;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #afafaf;
  }
`
/* 



  @media (max-width: 900px) {
    > footer {
      align-self: center;
    }
  }

  @media (max-width: 800px) {
    padding: 32px 16px 24px;
  }

  @media (max-width: 550px) {
    > footer {
      display: flex;
      flex-direction: column;
      width: 100%;

      > button + button {
        margin-left: 0px;
      }
    } 
  }  */
