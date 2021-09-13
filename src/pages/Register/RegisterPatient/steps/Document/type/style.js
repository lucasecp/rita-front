import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;
  h2 {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #6a6a6a;
    width: 100%;
    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #efeafa;
      margin-top: 3px;
    }
  }
  h3 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #909090;
  }
  h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: 0em;
    color: #9146ff;
    margin-bottom: 15px;
  }
  .MuiAccordionDetails-root {
    padding: 0;
    display: block;
  }
  .MuiAccordionSummary-root {
    padding: 0;
  }
  .MuiPaper-elevation1 {
    box-shadow: none;
  }
  .MuiAccordionSummary-content {
    flex-direction: column;
  }
  .MuiButtonBase-root {
    cursor: default !important;
  }
`
export const Content = styled.div`
  display: flex;
  margin-top: 24px;
  > div:first-child {
    margin-right: 100px;
  }
  ul {
    margin-bottom: 45px;
    li + li {
      margin-top: 15px;
    }
    li {
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: #6a6a6a;
      display: flex;
      align-items: center;
    }
    li::before {
      content: '';
      height: 5px;
      width: 5px;
      min-width: 5px;
      border-radius: 50%;
      background: #6a6a6a;
      display: inline-block;
      margin-right: 8px;
      align-self: center;
    }
  }
  span {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #909090;
    margin-top: 20px;
    display: inline-block;
  }
`

export const ContentFile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
  button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: right;
    color: #DF644B;
    img{
      margin-right: 5px;
    }
;
  }
  span {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #9146FF;
;
  }
`
