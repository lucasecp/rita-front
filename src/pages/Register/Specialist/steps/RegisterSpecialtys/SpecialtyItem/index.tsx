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

  const nameField = 'specialtysAndDocs' + current

  const errorSpecialtysAndDocs = errors.specialtysAndDocs || {}

  const hasKeyInSpecialtyErrors = (key: string) => {
    return key in errorSpecialtysAndDocs
  }

  const removePhoto = () => {
    setPhoto('')
    setSpecialtysAndDocs((specialtysAndDocs: SpecialtysAndDocsType) => ({
      ...specialtysAndDocs,
      [nameField]: { idSpecialty: data.id, document: '' },
    }))
  }

  const removeSpecialtysAndDocs = () => {
    setSpecialtysAndDocs((specialtysAndDocs: SpecialtysAndDocsType) => {
      delete specialtysAndDocs[nameField]
      return specialtysAndDocs
    })
  }

  const addError = (message: string) => {
    setErrors({
      ...errors,
      specialtysAndDocs: {
        ...errorSpecialtysAndDocs,
        [nameField]: message,
      },
    })
  }

  const addSpeciatyAndDocs = () => {
    setSpecialtysAndDocs((specialtysAndDocs: SpecialtysAndDocsType) => ({
      ...specialtysAndDocs,
      [nameField]: { idSpecialty: data.id, document: photo },
    }))
  }

  useEffect(() => {
    addSpeciatyAndDocs()

    if(!photo) return

    addError('')

    if (!isValidTypeFile(photo)) {
      removePhoto()

      addError(
        'Formato do Arquivo inválido. Por favor, selecione outro arquivo.',
      )
    } else if (!isValidSizeFile(photo)) {
      removePhoto()

      addError(
        'O tamanho máximo do arquivo deve ser 10MB. Por favor, selecione outro arquivo.',
      )
    } 
  }, [photo])

  useEffect(() => {
    return () => {
      addError('')
      removeSpecialtysAndDocs()
    }
  }, [])

  return (
    <Container name={nameField}>
      <h2>Especialidade {current}</h2>
      <InputText value={data.name} disabled />

      {photo &&
      hasKeyInSpecialtyErrors(nameField) &&
      !errors.specialtysAndDocs[nameField] ? (
        <Actions file={photo} setPhoto={setPhoto} removePhoto={removePhoto} />
      ) : (
        <Instructios />
      )}

      <span>
        <InputFile setValue={setPhoto}>
          <OutlineButton
            small
            variation={
              hasKeyInSpecialtyErrors(nameField) &&
              errors.specialtysAndDocs[nameField] && !photo
                ? 'red'
                : 'green'
            }
          >
            Selecionar Arquivo
          </OutlineButton>
        </InputFile>
        {hasKeyInSpecialtyErrors(nameField) &&
          errors.specialtysAndDocs[nameField] && !photo && (
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
