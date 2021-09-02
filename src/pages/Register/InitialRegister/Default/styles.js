import styled from 'styled-components'
import shape from '../../assets/img/element3.png'
import colors from '../../styles/colors'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;

  background-image: url(${shape});
  background-repeat: no-repeat;
  background-color: ${colors.background.primary};
  background-size: 80%;
  background-position: left center;

  > aside {
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    > div {
      width: 100%;
      height: 100vh;
      background: linear-gradient(
        148.19deg,
        #9146ff -15.68%,
        #8f46fe -3.23%,
        rgba(136, 70, 252, 0.992703) 43.97%,
        #1c23bd 119.58%
      );
      opacity: 0.9;
      mix-blend-mode: multiply;
      filter: contrast(0.8);
    }

    > img {
      position: absolute;

      margin-top: 104px;
      width: 120px;
    }
  }

  > main {
    padding: 104px 88px 24px;
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
    > div {
      display: flex;
      align-items: center;
      margin-top: 48px;

      > div {
        margin-right: 24px;
      }
    }
  }
`
