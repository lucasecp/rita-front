import { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

import { Container, ContainerControls } from './styles'

interface CustomZoomRotateImageProps {
  image: string
}

export const CustomZoomRotateImage: React.FC<CustomZoomRotateImageProps> = ({
  image,
}) => {
  const [rotate, setRotate] = useState(0)

  const onRotate = (reset = false) => {
    if (reset) {
      setRotate(0)
      return
    }

    if (rotate === 270) {
      setRotate(0)
    } else {
      setRotate(rotate + 90)
    }
  }

  return (
    <Container>
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <ContainerControls>
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button
                onClick={() => {
                  resetTransform()
                  onRotate(true)
                }}
              >
                *
              </button>
              <button onClick={() => onRotate()}>/</button>
            </ContainerControls>
            <TransformComponent>
              <img
                src={image}
                alt="test"
                style={{
                  transform: `rotate(${rotate}deg)`,
                }}
              />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </Container>
  )
}
