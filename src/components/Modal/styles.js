import hexToRgba from '@/helpers/hexToRgba'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: ${hexToRgba(colors.black, 0.8)};
  z-index: 2;

  animation: fade 0.3s;

  @keyframes fade {
    from {
      background: ${hexToRgba(colors.black, 0.0)};
    }
  }

  > div {
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: fit-content;

    padding: 32px;

    min-width: 33%;
    opacity: 1;
    z-index: 9999;

    position: relative;

    > img {
      position: absolute;
      top: 0px;
      right: 0px;
      padding: 16px;
      cursor: pointer;
    }

    animation: slideDown 0.3s;

    @keyframes slideDown {
      from {
        transform: translateY(-24px);
      }
    }
  }

  @media (max-width: 767px) {
    > div {
      margin: 0 24px;
    }
  }
`
