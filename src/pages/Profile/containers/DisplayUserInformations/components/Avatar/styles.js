import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  > img {
    object-fit: cover;
  }

  > div {
    :first-child {
      overflow: hidden;

      border: 3px solid ${colors.purple.main.dark};
      border-radius: 50%;

      background-image: ${({ source }) => `url(${source})`};
      /* background-attachment: fixed; */
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      width: 160px;
      height: 160px;
    }

    :last-child {
      position: absolute;
      right: -4px;
      bottom: 16px;

      padding: 8px 7px 7px 8px;
      border-radius: 50%;
      background: ${colors.blue.middle};

      box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.15);

      cursor: pointer;

      > svg {
        stroke: ${colors.blue.light};
      }
    }
  }

  @media (max-width: 767px) {
    > div {
      :first-child {
        width: 108px;
        height: 108px;
      }

      :last-child {
        right: -8px;
        bottom: 4px;
      }
    }
  }
`
