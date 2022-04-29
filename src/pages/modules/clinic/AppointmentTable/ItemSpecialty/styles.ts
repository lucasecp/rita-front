import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px 32px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 54px;
  position: relative;
  align-items: center;
  background: #fff;
  box-shadow: 0px 2px 8px 0px #0000001a;

  > h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    color: #6a6a6a;
    word-break: break-word;
  }
  > div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    @media (max-width: 767px) {
      grid-template-columns: 100%;
    }
  }
  &::before {
    content: '';
    width: 10px;
    height: 100%;
    position: absolute;
    left: 0;
    display: block;
    background: ${({ theme }) => theme.mediumLight};
    top: 0;
  }
  @media (max-width: 767px) {
    grid-template-columns: 100%;
    gap: 32px;
  }
`
