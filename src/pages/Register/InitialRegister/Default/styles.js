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
    line-height: 140%;
    color: ${colors.text.link};
  }
  > div {
    display: flex;
    align-items: center;
    margin-top: 48px;

    > div {
      margin-right: 24px;
    }
  }
  @media(max-width:767px){
    >div{
      flex-direction: column;
      align-items: center;
      margin-top: 24px;
      > div{
        margin: 0 0 24px 0;
      }
    }
  > h6 {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }
  }
  `
