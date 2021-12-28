import styled from 'styled-components'

export const Container = styled.div`
  animation: loadingCircular 1.4s linear infinite;

  @keyframes loadingCircular {
    0% {
      transform-origin: 50% 50%;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
