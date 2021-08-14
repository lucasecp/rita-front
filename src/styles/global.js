import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap');

    body,*{
        font-family: "Poppins";
        box-sizing: border-box;
    }
    .App{
        background-color: ${colors.background.primary};
    }
    ::placeholder{
        color: #C0C4CC;
    }

    a{
        text-decoration: none;
    }
    input[type="radio"]{
        margin: 0;
    }
`
