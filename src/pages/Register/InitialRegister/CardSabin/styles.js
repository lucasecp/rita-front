import colors from '@/styles/colors'
import styled from 'styled-components'

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 2px 8px rgba(223, 210, 255, 0.15);
  border-radius: 8px;
  padding: 54px 32px 45px 28px;

  display: flex;
  align-items: center;
  position: relative;

  overflow: hidden;

  ::before {
    content: '';
    width: 190px;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: ${colors.gray.light};
  }
  > img {
    z-index: 1;
  }

  > section {
    margin-left: 24px;
    width: 100%;

    > button {
      margin-top: 24px;

      display: block;
      margin-left: auto;
    }
  
  }
`
