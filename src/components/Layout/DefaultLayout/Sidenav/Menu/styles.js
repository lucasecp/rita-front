import styled from 'styled-components'
import colors from '../../../../../styles/colors'

export const Container = styled.ul`
  > li {
    cursor: pointer;
    display: flex;

    transition: 0.3s;

    > span {
      width: 4px;
      color: red;

      transition: 0.3s;
    }
    > div {
      display: flex;
      align-items: center;

      padding: 18px 32px;

      > img {
      }
      > a {
        margin-left: 12px;
        color: ${colors.text.link};
        font-weight: 700;
        line-height: 20px;
        transition: 0.3s;
      }
    }

    :hover {
      background: ${colors.background.hoverLink};

      > span {
        background: ${colors.feedback.hoverLinkSpan};
      }

      > div {
        > a {
          color: ${colors.text.secondary};
        }
      }
    }

    :active {
      background: ${colors.background.activeLink};

      > span {
        background: ${colors.feedback.activeLinkSpan};
      }

      > div {
        > img {
          color: ${colors.feedback.activeLinkSpan};
        }

        > a {
          color: ${colors.text.secondary};
        }
      }
    }
  }
`
