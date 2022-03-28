import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
  > label {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    color: #909090;
    margin-bottom: 5px

  }

  > div {
    display: flex;
  }
`

export const Button = styled.button`
  background: ${({ theme }) => theme.extraLight};
  color: ${({ theme }) => theme.medium};
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  padding: 14px 30px;
  border: none;
  ::before {
    content: '';
    border: solid 1px #eeeeee;
    display: block;
    padding: 14px 30px;
  }
`
