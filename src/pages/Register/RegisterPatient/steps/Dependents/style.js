import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :first-child form::after{
    content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #EEEEEE;
      margin:40px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3,
  h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #6a6a6a;
    margin-bottom: 40px;
    align-self: flex-start;
  }
  h2 {
    margin-bottom: 70px;
  }
`
export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button + button{
    margin-left: 56px;
  }
`
