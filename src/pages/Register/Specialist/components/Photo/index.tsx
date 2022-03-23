import React, { useEffect } from 'react'
import { ReactComponent as PenIcon } from '@/assets/icons/pen-green.svg'
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile-green.svg'

import { InputFile } from '@/components/Form/InputFile'
import Instructions from './Instructions'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline/index'
import SpecialistInfo from './SpecialistInfo'
import { useRegisterSpecialist } from '../../hooks'
import { isValidTypeFile } from '@/helpers/file/isValidTypeFile'
import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import { useModal } from '@/hooks/useModal'

const Photo: React.FC = () => {
  const { basicInformation, step, photo, setPhoto } = useRegisterSpecialist()
  const { showSimple } = useModal()

  const removePhoto = () => setPhoto(null)
  const someFieldIsEmpty = Object.values(basicInformation).some(
    (value) => !value,
  )

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
        <div>
          {photo ? (
            <img src={URL.createObjectURL(photo)} alt="" />
          ) : (
            <ProfileIcon />
          )}
        </div>
        {photo && (
          <span>
            <InputFile setValue={setPhoto}>
              <PenIcon />
            </InputFile>
          </span>
        )}
      </div>

      <div>
        {photo && !someFieldIsEmpty && step >= 2 && (
          <SpecialistInfo data={basicInformation} />
        )}
        {!photo && (
          <>
            <Instructions />
            <InputFile setValue={setPhoto}>
              <OutlineButton small variation="green">
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
