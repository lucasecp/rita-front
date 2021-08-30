import { createGlobalStyle } from 'styled-components'
import colors from './colors'

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap'); */

  @font-face {
    font-family: Athletics;
    font-weight: 300;
    src: url(../assets/fonts/athletics/light.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 300;
    font-style: italic;
    src: url(../assets/fonts/athletics/lightItalic.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 400;
    src: url(../assets/fonts/athletics/regular.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 400;
    font-style: italic;
    src: url(../assets/fonts/athletics/regularItalic.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 500;
    src: url(../assets/fonts/athletics/medium.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 500;
    font-style: italic;
    src: url(../assets/fonts/athletics/mediumItalic.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 700;
    src: url(../assets/fonts/athletics/bold.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 700;
    font-style: italic;
    src: url(../assets/fonts/athletics/boldItalic.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 800;
    src: url(../assets/fonts/athletics/extraBold.otf)
  }
  @font-face {
    font-family: Athletics;
    font-weight: 800;
    font-style: italic;
    src: url(../assets/fonts/athletics/extraItalic.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 900;
    src: url(../assets/fonts/athletics/black.otf)
  }

  @font-face {
    font-family: Athletics;
    font-weight: 900;
    font-style: italic;
    src: url(../assets/fonts/athletics/blackItalic.otf)
  }


    body,*{
        font-family: "Athletics";
        box-sizing: border-box;

    }
    img{
      max-width: 100%;
      display: block;
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
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

input{
  outline: none;
}
`
