import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1160px;
  position: relative;
  margin-top: 33px;
  margin-right: -11px;
  margin-bottom: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 16px;
    line-height: 20px;
    color: #6a6a6a;
    margin-right: 35px;
    + p {
      margin-top: 20px;
    }
  }

  strong {
    text-transform: uppercase;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 16px;
    color: #6a6a6a;
    align-self: flex-start;
  }

  > button {
    position: absolute;
    bottom: -90px;
  }
`
export const TextGroup = styled.div`
  overflow-y: auto;
  max-height: 300px;
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #eeeeee;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #afafaf;
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
