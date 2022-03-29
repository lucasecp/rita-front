import styled from 'styled-components'
import shape from '@/assets/img/element3.png'
import colors from '@/styles/colors'

interface ContainerProps {
  profile?: string
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: 1fr 3fr;
  min-height: 100vh;
  background: #f5f5f5;

  > aside {
    background-image: url(${shape});
    background-repeat: no-repeat;
    background-color: ${colors.gray.extraLight};
    background-size: cover;
    background-position: 100%;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    > div {
      width: 100%;
      height: 100%;
      opacity: 0.9;
      mix-blend-mode: multiply;
      background: #46a86e;
      filter: contrast(0.8);
    }

    > img {
      position: fixed;

      margin-top: 104px;
      width: 120px;
    }
  }

  > main {
    padding: 32px 88px 24px;

    > section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 100%;
    }
  }

  @media (max-width: 1180px) {
    grid-template-columns: 3fr 9fr;
  }

  @media (max-width: 1065px) {
    > main {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    background-size: cover;
    > aside {
      > div {
        height: 160px;
        padding: 48px;
      }

      > img {
        margin-left: -20px;
        margin-top: 48px;
        filter: brightness(6.5);
        position: absolute;
      }
    }
    > main {
      /* padding: 40px 24px 24px; */
      padding: 24px 16px 24px;
      height: 100%;

      > section {
        > footer {
          margin-top: 32px;
        }
      }
    }
  }
`
