import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 24px 24px;
  border: solid 1px #efeafa;
  border-radius: 8px;
  max-width: 1000px;

  header {
    display: flex;
    flex-direction: column;
    margin: 0 -24px 16px -24px;
    > h5 {
      background: #efeafa;
      color: #7338cb;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      text-align: center;
      padding: 8px;
    }
   
    }
  }
  > div  {
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    margin: -24px;
    
    >ul {
      margin: 24px;
      > h6{
       text-align: center;
      font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px;
color: #6A6A6A;
margin-bottom: 12px


    }
   
    > li {
      display: block;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      color: #6a6a6a;
      text-align: center;
     
    }
  }
}
`
