import styled from "styled-components";
import colors from "../../../../styles/colors";
export const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  >h1{
    font-size: 32px;
    line-height: 39px;
    font-weight: 500;
    color: ${colors.text.link};
  }
   > nav{
     display: flex;
     align-items: center;
     > a{
       display: flex;
       align-items: center;
       color: #6A6A6A;
       font-size: 14px;
       font-weight:500;
     }
    > img:last-child{
       transform: rotate(-180deg);
     }
   }
   img{
    filter: invert(28%) sepia(63%) saturate(2375%) hue-rotate(248deg) brightness(105%) contrast(102%);
    margin-left:20px;
    cursor: pointer
   }
   @media(max-width:767px){
    padding:40px 40px 24px 40px;
   }
`
export const Profile = styled.div`
    border-radius: 50%;
    border: solid 2px #9146FF;
    min-width: 40px;
    height:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-left: 20px;
    > img{
      filter: none;
      margin-left: 0;
    }
`
