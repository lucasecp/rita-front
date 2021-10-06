import colors from '@/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 40px;

  > h1 {
    margin-bottom: 24px;

    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    color: ${colors.gray.dark};
  }

  > h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;

    color: ${colors.gray.middle};

    margin-bottom: 14px;
  }

  > .MuiFormGroup-root {
    flex-direction: row;

    > div + div {
      margin-left: 104px;
    }
  }

  > small {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: ${colors.orange.middleDark};
  }

  > small + h2 {
    margin-top: 24px;
  }

  textarea + h2,
  div + h2 {
    margin-top: 24px;
  }

  > div + small {
    margin-top: 2px;
  }

  > section {
    margin-top: 16px;
  }

  > footer {
    margin-top: 24px;

    display: flex;
    justify-content: center;

    button + button {
      margin-left: 32px;
    }
  }

  > div + div {
    margin-top: 16px;
  }

  @media (max-width: 767px) {
    > h2 {
      font-size: 16px;
      line-height: 1.4;
    }

    > .MuiFormGroup-root {
      > div + div {
        margin-left: 16px;
      }
    }

    > footer {
      flex-direction: column;

      > button + button {
        margin: 8px 0 0;
      }
    }
  }
`
