import React, { useState } from 'react'
import { ReactComponent as PenIcon } from '@/assets/icons/pen-green.svg'
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile-green.svg'

import { InputFile } from '@/components/Form/InputFile'
import Instructions from './Instructions'
import { Container } from './styles'
import OutlineButton from '@/components/Button/Outline/index'
import SpecialistInfo from './SpecialistInfo'
import { useRegisterSpecialist } from '../../hooks'

const Photo: React.FC = ({}) => {
  const [photo, setPhoto] = useState('')

  const { profissionalInfo, step } = useRegisterSpecialist()

  return (
    <Container>
      <div>
        <div>
          <ProfileIcon />
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
        {step > 2 && photo && <SpecialistInfo data={profissionalInfo} />}
        {!photo  && (
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
