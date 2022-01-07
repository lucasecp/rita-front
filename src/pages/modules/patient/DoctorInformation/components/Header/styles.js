import styled from 'styled-components'

export const DoctorImage = styled.div`
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 147px;
    height: 147px;
    border-radius: 50%;
    object-fit: fill;
  }
`
export const DefaultImage = styled.div`
  width: 147px;
  height: 147px;
  background: #eeeeee;
  border-radius: 50%;
  margin-right: 24px;
`
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    text-align: left;
    color: #303030;
    line-height: 30px;
    margin: 8px 0 0 0;
  }
  h4 {
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #6a6a6a;
    line-height: 25px;
    padding: 0 0 24px 0;
  }
  li {
    > h6 {
      font-size: 16px;
      font-style: normal;
      line-height: 20px;
      text-align: left;
      color: #6a6a6a;
      padding: 0 0 8px 0;
      > span {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
        color: #303030;
        padding: 0 8px 0 0;
      }
    }
  }
  @media (max-width: 767px) {
    justify-content: center;
  }
  
  @media (max-width: 560px) {
    > div:first-child {
      margin-right: 0;
    }
  }
`
