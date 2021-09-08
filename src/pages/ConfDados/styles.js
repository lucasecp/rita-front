import styled from 'styled-components'
import colors from '../../styles/colors'
import shape from '../../assets/img/element3.png'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  background-image: url(${shape});
  background-repeat: no-repeat;
  background-position: 0px -287px;
  background-color: ${colors.background.primary};

  > aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(
      148.19deg,
      #9146ff -15.68%,
      #8f46fe -3.23%,
      rgba(136, 70, 252, 0.992703) 43.97%,
      #1c23bd 119.58%
    );
    opacity: 0.8;

    > img {
      margin-top: 104px;
      width: 96px;
    }
  }

  > main {
    padding: 104px 88px 24px;
  }

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-wrap: wrap;
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  > div {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
    border-radius: 8px;
    padding: 40px 32px 48px;

    > h6 {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;
      color: ${colors.text.link};
    }

    > Form {
      padding: 22px 0;
      font-family: Athletics;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: ${colors.background.activeLink};
      cursor: pointer;
    }

    > div {
      display: flex;
      padding: 15px 0;
      justify-content: flex-end;
      margin-right: 24px;
    }
  }

  @media (max-width: 630px) {
    display: flex;
    flex-direction: column;
  }
`
