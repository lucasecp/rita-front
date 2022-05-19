import React, { useEffect } from 'react'
import { ReactComponent as PenIcon } from '@/assets/icons/pen-green.svg'
import { ReactComponent as ProfileIcon } from '@/assets/icons/clinic-profile.svg'

import { InputFile } from '@/components/Form/InputFile'
import Instructions from './Instructions'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline/index'
import { useRegisterClinic } from '../../hooks'
import { isValidTypeFile } from '@/helpers/file/isValidTypeFile'
import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import { useModal } from '@/hooks/useModal'

const Photo: React.FC = () => {
  const { photo, setPhoto } = useRegisterClinic()
  const { showSimple } = useModal()

  const removePhoto = () => setPhoto('')

  const imgSource =
    typeof photo === 'object' ? window.URL.createObjectURL(photo) : ''

  useEffect(() => {
    if (photo && !isValidTypeFile(photo, { onlyImage: true })) {
      removePhoto()

      showSimple.error(
        'Formato do Arquivo inválido. Por favor, selecione outro arquivo.',
      )
    }

    if (photo && !isValidSizeFile(photo)) {
      removePhoto()

      showSimple.error(
        'O tamanho máximo do arquivo deve ser 10MB. Por favor, selecione outro arquivo.',
      )
    }
  }, [photo])

  return (
    <Container>
      <div>
        <div>{photo ? <img src={imgSource} alt="" /> : <ProfileIcon />}</div>
        {photo && (
          <span>
            <InputFile setValue={setPhoto}>
              <PenIcon />
            </InputFile>
          </span>
        )}
      </div>

      <div>
        <Instructions />
        {!photo && (
          <>
            <InputFile setValue={setPhoto}>
              <OutlineButton small variation="blue">
                Selecionar Arquivo
              </OutlineButton>
            </InputFile>
          </>
        )}
      </div>
    </Container>
  )
}

export default Photo
