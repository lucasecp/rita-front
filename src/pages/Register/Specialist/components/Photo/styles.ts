import styled from 'styled-components'

export const Container = styled.header`
  background: #F5F5F5;
  position: relative;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 27px;
  border-radius: 8px;

  > * {
    margin: 17.5px;
  }

  > div:last-child {
    >*+*{
      margin-top: 24px
    }
  }

  > div:first-child {
    position: relative;
    > div {
      height: 159px;
      width: 159px;
      border-radius: 50%; 
      position: relative;
      border: solid #4B8864 2px;
      background: #fff;
      display: flex;
      align-items: stretch;
      justify-content: center;
      overflow: hidden;
    }
    > span {
      background: #084C4F;
      position: absolute;
      right: -16px;
      bottom: 16px;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
  > div:last-child {


    }
  }

  ::before {
    content: '';
    position: absolute;
    background: #4B8864;
    height: 100%;
    width: 17px;
    display: block;
    left: 0;
    top: 0;
    border-radius: 8px 0px 0px 8px;
  }
`
