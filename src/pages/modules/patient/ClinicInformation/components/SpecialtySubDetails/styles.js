import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 0;
  margin: 0 0px 0 140px;
  > ul li {
    margin: 0 0 17.5px 0;
    flex-wrap: wrap;
    > * {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      margin-top: 8px;
      margin-bottom:8px;
    }
    > h6 {
      color: #6a6a6a;
      margin-right: 8px;
    }
    display: flex;
    align-items: center;
    
    & > * {
      /* margin: 8px 0 */
    }
  }
  > ul > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    li:first-child {
      margin-right: 32px;
    }
    span {
      color: #303030;
      
    }
  }
  > ul > li > * + * {
  }
  > ul > li > svg {
    margin-right: 8px;
  }

  > ul > div + li > svg + h6 +  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    margin-right: 8px;
    & + span +  span {
      padding: 8px;
      background: #9146ff;
      color: #fff;
      font-family: Athletics;
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      border-radius: 16px;
    }
    & + span {
     margin-right: 8px;
    }
  }
  > ul > li:last-child span {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #303030;
  }
  > ul > li {
    flex-wrap: wrap;
  }
  @media (max-width: 991px) {
    margin-left: 0px;
    padding: 24px;
  }
  @media (max-width: 767px) {
    > ul li {
      justify-content: center;
      margin-right: 0 !important;
      flex-direction: column
    }
    > ul > div{
      flex-direction: column
    }
  }
`
