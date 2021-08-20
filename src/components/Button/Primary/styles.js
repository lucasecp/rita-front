import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  padding: 10px 40px;
  cursor: pointer;
  font-weight: 700;
  color: #fff;
  font-size: 14px;
  background: linear-gradient(35deg, #9198e5, #e66465);
  transition: 0.2s;
  border-radius: 14px;

  ::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(35deg, #e66465, #9198e5);
    opacity: 0;
    border-radius: 14px;

    transition: all 0.2s ease-in-out;
    z-index: 0;
  }
  :hover {
    ::after {
      opacity: 1;
    }

    transform: scale(5.1);
  }

  > span {
    position: relative;
    z-index: 1;
  }
`
