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
import { SpecialtysAndDocsType } from '../../../types'

interface SpecialtyItemProps {
  data: MultiSelectOption
  current: number
}

const SpecialtyItem: React.FC<SpecialtyItemProps> = ({ data, current }) => {
  const [photo, setPhoto] = useState('')

  const { errors, setSpecialtysAndDocs, setErrors } = useRegisterSpecialist()

  const removePhoto = () => setPhoto('')

  const nameField = 'specialtysAndDocs' + current

  const errorSpecialtysAndDocs = errors.specialtysAndDocs || {}

  const hasKeyInSpecialtyErrors = (key: string) => {
    return key in errorSpecialtysAndDocs
  }

  useEffect(() => {
    if (!photo) return

    if (!isValidTypeFile(photo)) {
      removePhoto()

      return setErrors({
        ...errors,
        specialtysAndDocs: {
          ...errorSpecialtysAndDocs,
          [nameField]:
            'Formato do Arquivo inválido. Por favor, selecione outro arquivo.',
        },
      })
    }

    if (!isValidSizeFile(photo)) {
      removePhoto()

      return setErrors({
        ...errors,
        specialtysAndDocs: {
          ...errorSpecialtysAndDocs,
          [nameField]:
            'O tamanho máximo do arquivo deve ser 10MB. Por favor, selecione outro arquivo.',
        },
      })
    }

    setErrors({
      ...errors,
      specialtysAndDocs: {
        ...errorSpecialtysAndDocs,
        [nameField]: '',
      },
    })

    setSpecialtysAndDocs((specialtysAndDocs: SpecialtysAndDocsType[]) => ([
      ...specialtysAndDocs,
      { name: [nameField], idSpecialty: data.id, document: photo },
    ]))
  }, [photo])

  return (
    <Container>
      <h2>Especialidade {current}</h2>
      <InputText value={data.name} disabled />

      {photo &&
      hasKeyInSpecialtyErrors(nameField) &&
      !errors.specialtysAndDocs[nameField] ? (
        <Actions file={photo} setPhoto={setPhoto} nameField={nameField}/>
      ) : (
        <Instructios />
      )}

      <span>
        <InputFile setValue={setPhoto}>
          <OutlineButton
            small
            variation={
              hasKeyInSpecialtyErrors(nameField) &&
              errors.specialtysAndDocs[nameField]
                ? 'red'
                : 'green'
            }
          >
            Selecionar Arquivo
          </OutlineButton>
        </InputFile>
        {hasKeyInSpecialtyErrors(nameField) &&
          errors.specialtysAndDocs[nameField] && (
            <>
              <img src={warningCircleRed} />{' '}
              <p>{errors.specialtysAndDocs[nameField]}</p>{' '}
            </>
          )}
      </span>
    </Container>
  )
}

export default SpecialtyItem
