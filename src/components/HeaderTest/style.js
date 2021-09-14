import styled from 'styled-components'

export const HeaderLayout = styled.header`
  > nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  & a {
    color: #666666;
    font-size: 18px;
    text-decoration: underline;
    margin: 20px;
    transition: 0.3s;
    &:hover {
      color: #444;
      transition: 0.3s;
    }
  }
`
