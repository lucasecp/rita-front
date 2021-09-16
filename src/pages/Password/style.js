import hexToRgba from '@/helpers/hexToRgba'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  background: ${hexToRgba(colors.white, 0.8)};
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;
  padding: 38px 32px 24px;

  > div h6 {
    font-size: 24px;
    font-weight: 500;
    color: ${colors.gray.dark};
  }

  > div p {
    padding: 20px 0;
    font-family: Athletics;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #afafaf;
  }

  > div footer {
    padding: 20px 0;
    align-self: flex-end;
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
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

      > button + button {
        margin-left: 0px;
      }
    }
  }
`
