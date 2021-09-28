import styled from 'styled-components'

import colors from '@/styles/colors'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > img {
    margin-bottom: 24px;
  }

  > button {
    margin-top: 24px;
  }

  > p {
    max-width: 455px;
    word-wrap: break-word;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: ${colors.gray.dark};

    + p {
      margin-top: 10px;
    }

    a {
      display: inline-flex;
      align-items: center;
      color: #1c23bd;
    }

    img {
      margin-left: 6px;
    }
  }

  > footer {
    margin-top: 24px;
    display: flex;
    align-items: center;

    > button + button {
      margin-left: 20px;
    }
  }
`
