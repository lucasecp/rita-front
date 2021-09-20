import styled from 'styled-components'
import shape from '@/assets/img/element3.png'
import colors from '@/styles/colors'

export const Container = styled.div`
  display: grid;
  min-height: 100vh;
  background-image: url(${shape});
  background-repeat: no-repeat;
  background-color: ${colors.blue.middle};
  background-size: 100%;
  background-position: left center;

  @media (max-width: 1180px) {
    grid-template-columns: 3fr;
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
  }
  > section {
    > footer {
      margin-top: 32px;
    }
  }
`
