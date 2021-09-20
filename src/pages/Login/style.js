import hexToRgba from '@/helpers/hexToRgba'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  background: ${hexToRgba(colors.white, 0.8)};
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;
  padding: 38px 32px 24px;
  margin: 0 auto;
  width: 60%;

  > div p {
    font-family: Athletics;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #afafaf;
    text-align: center;
    cursor: pointer;
  }

  > button {
    width: 100%;
  }

  > div p {
    border-bottom: 1px solid #afafaf;
    padding-bottom: 20px;
    text-decoration: underline;
    margin-bottom: 15px;
  }

  > div span {
    font-family: Athletics;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #afafaf;
    padding-left: 70px;
  }

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
    }
  }
`
