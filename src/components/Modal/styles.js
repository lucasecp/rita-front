import hexToRgba from '@/helpers/hexToRgba'
import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: ${hexToRgba(colors.black, 0.8)};
  z-index: 2;

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
    z-index: 3;
  }
`
