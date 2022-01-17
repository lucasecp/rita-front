import { css } from 'styled-components'
import regular from '../assets/fonts/athletics/regular.otf'
import light from '../assets/fonts/athletics/light.otf'
import lightItalic from '../assets/fonts/athletics/lightItalic.otf'
import regularItalic from '../assets/fonts/athletics/regularItalic.otf'
import medium from '../assets/fonts/athletics/medium.otf'
import mediumItalic from '../assets/fonts/athletics/mediumItalic.otf'
import bold from '../assets/fonts/athletics/bold.otf'
import boldItalic from '../assets/fonts/athletics/boldItalic.otf'
import extraBold from '../assets/fonts/athletics/extraBold.otf'
import extraBoldItalic from '../assets/fonts/athletics/extraBoldItalic.otf'
import black from '../assets/fonts/athletics/black.otf'
import blackItalic from '../assets/fonts/athletics/blackItalic.otf'

const fonts = css`
  @font-face {
    font-family: 'Athletics';
    font-weight: 300;
    src: url(${light}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 300;
    font-style: italic;
    src: url(${lightItalic}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 400;
    src: url(${regular}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 400;
    font-style: italic;
    src: url(${regularItalic}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 500;
    src: url(${medium}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 500;
    font-style: italic;
    src: url(${mediumItalic}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 700;
    src: url(${bold}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 700;
    font-style: italic;
    src: url(${boldItalic}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 800;
    src: url(${extraBold}) format('opentype');
  }
  @font-face {
    font-family: 'Athletics';
    font-weight: 800;
    font-style: italic;
    src: url(${extraBoldItalic}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 900;
    src: url(${black}) format('opentype');
  }

  @font-face {
    font-family: 'Athletics';
    font-weight: 900;
    font-style: italic;
    src: url(${blackItalic}) format('opentype');
  }
`
export default fonts
