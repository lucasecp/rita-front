import styled from 'styled-components'

export const Container = styled.div`
  background: #EEEEEE;
  border-radius: 8px 8px 0px 0px;
  padding: 24px;

  > section:nth-child(1){
    display: grid;
    //grid-template-columns: repeat(2, 100px) 1fr auto auto;
    grid-template-columns: 1fr 1fr 2fr 2fr;
    gap: 24px;
  }
  > section:nth-child(2){
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    gap: 24px;

    > button {
      position: relative;
      top: 7px;
    }
  }

  @media (max-width: 991px) {
    > section:nth-child(1) {
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 767px) {
    grid-template-columns: 100%;
    padding: 24px;
    > *:nth-child(4) {
      grid-column: span 1;
    }
    > *:nth-child(5) {
      grid-column: 1;
    }
  }
`
