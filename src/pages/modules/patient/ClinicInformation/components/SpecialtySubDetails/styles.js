import styled from 'styled-components'

export const MainInfo = styled.li`
  margin-right: 32px;
  > h6 {
    margin-right: 8px;
    color: #6a6a6a;
  }
  > span {
    color: #303030;
  }
`
export const ContainerMainInfo = styled.div`
  margin: -25.5px 0 25.5px -32px;
  > * {
    margin-left: 32px !important;
    margin-top: 17px;
  }
`
export const Price = styled.li`
  padding-bottom: 25.5px;
  margin-top: -8px;
  margin-bottom: -8px;
`

export const Phone = styled.li`
  padding-bottom: 25.5px;
  > span {
    color: #303030;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  }
`

export const RitaPrice = styled.span`
  padding: 8px;
  background: #9146ff;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  border-radius: 16px;
`
export const DefaultPrice = styled.span`
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: #303030;
  }
  `
export const Container = styled.div`
  padding: 32px 32px 32px 0;
  margin: 0 0px 0 140px;
  > ul {
    margin: -8px;
    li {
      flex-wrap: wrap;
      display: flex;
      align-items: center;
      > * {
        font-size: 16px;
        line-height: 20px;
        margin: 8px;
        & + * {
          margin-left: 0;
        }
      }
      > h6 {
        color: #6a6a6a;
      }
    }
  }
  > ul > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
      color: #303030;
    }
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
      flex-direction: column;
    }
    > ul > div {
      flex-direction: column;
    }
  }
  @media (max-width: 767px) {
    padding: 16px;
  }
`
