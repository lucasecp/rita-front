import styled from 'styled-components'

export const Container = styled.section<{ disabled: boolean }>`
display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  ::after{
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: #EEEEEE;
    margin-top: 24px;
  }

>h3{
  color: ${({ disabled }) => (disabled ? '#909090' : '#46A86E')};
font-size: 16px;
font-weight: 700;
line-height: 24px;
margin-right: 24px;

}
   >div{
  display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      // click area in right
      padding: 10px 20px;

      display: flex;
      align-items: center;

      border: none;
      background-color: transparent;

      font-size: 14px;
      font-weight: 500;
      line-height: 21px;

      color: #6a6a6a;


      img {
        margin-right: 8px;
      }}
`
