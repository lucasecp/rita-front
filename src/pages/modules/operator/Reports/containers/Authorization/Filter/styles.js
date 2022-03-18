import styled from 'styled-components'

export const Container = styled.header`
  > div:first-child {
    display: grid;
    grid-template-columns: repeat(4, minmax(auto, 25%));
    align-items: start;
    gap: 24px;
    [span='2'] {
      grid-column: span 2;
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, minmax(auto, 33%));
      [span='2'] {
        grid-column: span 3 !important;
      }
    }
    @media (max-width: 991px) {
      grid-template-columns: repeat(2, minmax(auto, 50%));
      [span='2'] {
        grid-column: span 2 !important;
      }
    }
    @media (max-width: 767px) {
      grid-template-columns: 100%;
      [span='2'] {
        grid-column: 1 !important;
      }
    }
  }
`

export const BtnGroup = styled.div`
  display: flex;

  button:first-child {
    margin-right: 24px;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    button:first-child {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`
export const Controls = styled.div`
  margin-top: 32px;
  grid-column: span 4;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  > span {
    display: flex;
    margin-left: auto;
  }
  > span > div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 28px;
    align-items: center;
  }
  .MuiFormGroup-root {
    display: flex;
    flex-direction: row;
  }
  h6 {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    color: #6a6a6a;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    > span {
      margin-top: 32px;
      margin-left: 0;
    }
  }

  @media (max-width: 540px) {
    align-items: stretch;
    > span {
      flex-direction: column;
      button {
        margin-top: 16px;
        width: 100%;
      }
      > div:first-child {
        margin-right: 0;
      }
    }
  }
`