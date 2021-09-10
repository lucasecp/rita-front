import colors from '@/styles/colors'
import styled from 'styled-components'

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
    max-width: 410px;

    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }

  // Insert Token
  > h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    text-align: center;

    color: ${colors.gray.dark};

    max-width: 670px;
    margin-bottom: 16px;
  }
  > h5 {
    font-weight: 900;
    font-size: 20px;
    line-height: 150%;
    text-align: center;

    color: ${colors.orange.middle};

    margin-bottom: 16px;
  }
  > h2 {
    font-weight: 900;
    font-size: 20px;
    line-height: 150%;
    text-align: center;

    color: ${colors.gray.dark};

    margin-bottom: 8px;
  }
  > small {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: ${colors.orange.middle};

    margin-top: 8px;
    margin-bottom: 16px;
  }
  > h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: ${colors.blueViola.light};

    margin-top: 8px;
  }
  > footer {
    margin-top: 24px;
    
    > button + button {
      margin-left: 24px;
    }
  }

  > div + div {
    margin-top: 24px;
  }
`
