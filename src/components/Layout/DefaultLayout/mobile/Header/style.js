import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  >a{
    img{
      min-width:30px
    }
  }
  > nav {
    display: flex;
    align-items: center;
    position: relative;
    > a {
      display: flex;
      align-items: center;
      color: #6a6a6a;
      font-size: 14px;
      font-weight: 500;

    }
    img {
      filter: invert(28%) sepia(63%) saturate(2375%) hue-rotate(248deg)
        brightness(105%) contrast(102%);
      margin-left: 20px;
      cursor: pointer;
    }
  }
`
export const Profile = styled.div`
  border-radius: 50%;
  border: solid 2px #9146ff;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: 20px;
  > img {
    filter: none !important;
    margin-left: 0 !important;
  }
`
export const Hamburger = styled.button`
 margin-left: 20px;
 border: none;
 background: transparent;
 height: 40px;
  span {
    background-color: #9146ff;
    width: 24px;
    margin: 7px 0;
    height: 2px;
    margin: 4px 0;
    display: block;
    border-radius: 8px;
  }
  ::after,
  ::before {
    content: '';
    display: block;
    background-color: #9146ff;
    width: 24px;
    height: 2px;
    border-radius: 8px;
  }
  ::after{
    margin-top:4px;
  }
  ::before{
    margin-bottom:4px;
  }
`
