import styled from 'styled-components'
import iconTubo from '@/assets/icons/tubo.svg'

interface ContainerProps {
  color: string
  secondaryColor: string
}
export const Container = styled.div<ContainerProps>`
  min-height: 195px;
  display: flex;

  > div:first-child {
    border-radius: 8px 0 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 32px;
    background: ${({ secondaryColor }) => secondaryColor};
  }

  > div:last-child {
    width: 100%;
    border-radius: 0 8px 8px 0;
    padding: 32px 24px;
    background: ${({ color }) => color};
    position: relative;
    overflow: hidden;
    > span {
      background: url(${iconTubo});
      background-size: cover;
      background-position: center;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      filter: invert(99%) sepia(1%) saturate(106%) hue-rotate(134deg)
        brightness(700%) contrast(907%);
    }
    > div {
      position: relative;
      > * {
        z-index: 3;
      }
      > p {
        word-break: break-word;
        margin-bottom: 32px;
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
      }
      > h4 {
        margin-bottom: 16px;
        font-size: 32px;
        color: #fff;
        font-weight: 700;
        line-height: 40px;
      }
    }
  }
`
