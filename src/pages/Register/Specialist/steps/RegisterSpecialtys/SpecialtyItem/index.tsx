import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { MultiSelectOption } from '@/components/Form/MultSelect/index'
import InputText from '@/components/Form/InputText/index'
import { InputFile } from '@/components/Form/InputFile'
import OutlineButton from '@/components/Button/Outline/index'
import Instructios from '../components/Instructions/index'
import Actions from '../components/Actions'
import { isValidTypeFile } from '@/helpers/file/isValidTypeFile'
import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import warningCircleRed from '@/assets/icons/warning-circle-red.svg'
import { useRegisterSpecialist } from '../../../hooks'

interface SpecialtyItemProps {
  data: MultiSelectOption
  current: number
}

const SpecialtyItem: React.FC<SpecialtyItemProps> = ({ data, current }) => {
  const [photo, setPhoto] = useState('')

  const { errors, setErrors } = useRegisterSpecialist()

  useEffect(() => {
    if (!isValidTypeFile(photo) && photo) {
      return setErrors({
        ...errors,
        specialtysAndDocs:
          'Formato do Arquivo inválido. Por favor, selecione outro arquivo.',
      })
    }

    if (!isValidSizeFile(photo) && photo) {
      return setErrors({
        ...errors,
        specialtysAndDocs:
          'O tamanho máximo do arquivo deve ser 10MB. Por favor, selecione outro arquivo.',
      })
    }

    setErrors({
      ...errors,
      specialtysAndDocs: '',
    })
  }, [photo])

  return (
    <Container>
      <h2>Especialidade {current}</h2>
      <InputText value={data.name} disabled />

      {photo && !errors.specialtysAndDocs ? (
        <Actions file={photo} setPhoto={setPhoto} />
      ) : (
        <Instructios />
      )}

      <span>
        <InputFile setValue={setPhoto}>
          <OutlineButton
            small
            variation={errors.specialtysAndDocs ? 'red' : 'green'}
          >
            Selecionar Arquivo
          </OutlineButton>
        </InputFile>
        {errors.specialtysAndDocs && (
          <>
            <img src={warningCircleRed} /> <p>{errors.specialtysAndDocs}</p>{' '}
          </>
        )}
      </span>
    </Container>
  )
}

export default SpecialtyItem
