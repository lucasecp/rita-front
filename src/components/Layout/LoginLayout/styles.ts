import styled from 'styled-components'
import shape from '@/assets/img/element3.png'

export const Container = styled.div`
  /* display: grid; */
  padding: 24px;

  display: flex;
  /* justify-content: center; */
  align-items: stretch;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(
    148.19deg,
    ${({ theme }) => theme.main} -15.68%,
    #8f46fe -3.23%,
    rgba(136, 70, 252, 0.992703) 43.97%,
    #1c23bd 119.58%
  );

  ::after {
    content: '';
    background-image: url(${shape});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left center;
    width: 100%;
    min-height: 100%;
    height: 100vh;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.6;
  }
  /* > * {
    padding: 0 24px;
  } */
  * {
    z-index: 1;
  }

  > aside img {
    margin-left: -50px;
    padding-bottom: 46px;
    filter: invert(96%) sepia(95%) saturate(26%) hue-rotate(10deg)
      brightness(205%) contrast(100%);
  }
  > aside {
    display: flex;
    justify-content: center;
  }

  > main {
    /* height: 100%; */

    display: flex;
    flex-direction: column;
    flex: 1;

    justify-content: space-between;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    background-size: cover;

    padding: 16px;
  }

  > main {
    justify-self: stretch;
  }
  > main > footer {
    /* padding-top: 40px; */
    h6,
    div {
      color: #ffff;
    }
    img {
      filter: invert(96%) sepia(95%) saturate(26%) hue-rotate(10deg)
        brightness(205%) contrast(100%);
    }
  }
`
