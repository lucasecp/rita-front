import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 450px;

  > img {
    width: 56px;
  }

  > h6 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: ${colors.gray.dark};
  }

   Textarea {
    width: 466px;
    height: 83px;
    margin-top: 24px;
    margin-left: 40px;
    margin-right: 40px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px #e5e5e5;
    border-radius: 4px;
    resize: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.gray.dark};
  }

  > p {
    margin: 0;
    > span {
      font-weight: 500;
      font-size: 12px;
      margin-left: 332px;
      line-height: 15px;
      text-align: right;
      color: ${colors.gray.middleLight};
    }
  }

  > * + * {
    margin-top: 24px;
  }

  > footer {
    button + button {
      margin-left: 24px;
    }
  }

  @media (max-width: 500px) {
    > p {
      min-width: unset;
    }

    > footer {
      display: flex;
      flex-direction: column;
      width: 100%;

      > button {
      }

      > button + button {
        margin-left: 0px;
        margin-top: 24px;
      }
    }
  }
`
