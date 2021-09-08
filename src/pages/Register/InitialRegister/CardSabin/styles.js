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
    min-width: 209px;

    > button {
      margin-top: 24px;

      display: block;
      margin-left: auto;
    }
  }

  @media (max-width: 935px) {
    ::before {
      width: 160px;
    }
    > img {
      width: 270px;
    }
  }

  @media (max-width: 860px) {
    flex-direction: column;

    > img {
      width: unset;
      margin-bottom: 32px;
    }

    ::before {
      content: unset;
    }

    > section {
      margin-left: 0px;

      > button {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  @media (max-width: 767px) {
    overflow: unset;
    margin-top: 88px;
    padding-bottom: 32px;

    > img {
      margin-top: calc(-56px - 88px);
    }
  }
`
