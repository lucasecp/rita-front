import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import { isValidTypeFile } from '@/helpers/file/isValidTypeFile'
import { isValidSizeFile } from '@/helpers/file/isValidSizeFile'
import {
  SpecialtysAndDocsType,
  ErrorsI,
  RqeAndSpecialtysType,
} from '../../Types'
import { MultiSelectOption } from '@/components/Form/MultSelect'
import InputFileStyled from '@/components/Form/InputFileStyled'
import Actions from './Actions'
import InputText from '@/components/Form/InputText'

interface DocumentsProps {
  data: MultiSelectOption
  setSpecialtysAndDocs: React.Dispatch<
    React.SetStateAction<SpecialtysAndDocsType>
  >
  errors: ErrorsI
  setErrors: React.Dispatch<React.SetStateAction<ErrorsI>>
  setRqeAndSpeciality: React.Dispatch<
    React.SetStateAction<RqeAndSpecialtysType>
  >
  initialData: SpecialtysAndDocsType
  isEditing: boolean
  formWasSubmited: boolean
}

const Documents: React.FC<DocumentsProps> = ({
  data,
  setSpecialtysAndDocs,
  setErrors,
  errors,
  setRqeAndSpeciality,
  initialData,
  isEditing,
  formWasSubmited,
}) => {
  const initialPhoto =
    !!initialData[data.name] && initialData[data.name].document

  const [photo, setPhoto] = useState(initialPhoto || '')

  const [rqe, setRqe] = useState(data.rqe || '')

  const removePhoto = () => {
    setPhoto('')

    setSpecialtysAndDocs((specialtysAndDocs: SpecialtysAndDocsType) => ({
      ...specialtysAndDocs,
      [data.name]: { idSpecialty: data.id, document: '' },
    }))
  }

  const removeSpecialtysAndRqe = () => {
    setSpecialtysAndDocs((specialtysAndDocs: SpecialtysAndDocsType) => {
      delete specialtysAndDocs[data.name]

      return specialtysAndDocs
    })

    setRqeAndSpeciality((reqAndSpecialtys: RqeAndSpecialtysType) => {
      delete reqAndSpecialtys['rqe-' + data.name]

      return reqAndSpecialtys
    })
  }

  const addError = (message: string) => {
    setErrors({
      ...errors,
      [data.name]: message,
    })
  }

  const clearErrors = () => {
    setErrors({
      ...errors,
      [data.name]: '',
      ['rqe-' + data.name]: '',
    })
  }

  const addSpeciatyAndDocs = () => {
    setSpecialtysAndDocs((specialtysAndDocs: SpecialtysAndDocsType) => ({
      ...specialtysAndDocs,
      [data.name]: { idSpecialty: data.id, document: photo },
    }))
  }

  useEffect(() => {
    addSpeciatyAndDocs()

    if (!photo) return

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
      clearErrors()

      removeSpecialtysAndRqe()
    }
  }, [])

  useEffect(() => {
    if (!data.rqeRequired) {
      return
    }

    setRqeAndSpeciality((reqAndSpecialtys: RqeAndSpecialtysType) => ({
      ...reqAndSpecialtys,
      ['rqe-' + data.name]: {
        idSpecialty: data.id,
        rqe,
      },
    }))
  }, [rqe])

  useEffect(() => {
    if (!formWasSubmited && !isEditing) {
      setPhoto(initialPhoto || ({} as File))
      setRqe(data.rqe || '')
    } 
  }, [formWasSubmited, isEditing])

  return (
    <Container>
      <div>
        <InputFileStyled
          setValue={setPhoto}
          label={`Documento de comprovação: (${data.name})`}
          color="green"
          hasError={!!errors[data.name]}
          msgError={errors[data.name]}
          disabled={!isEditing}
          name={data.name}
        />
        {data.rqeRequired && (
          <InputText
            label="RQE:"
            value={rqe}
            setValue={setRqe}
            onlyNumber
            maxLength={10}
            hasError={!!errors['rqe-' + data.name]}
            msgError={errors['rqe-' + data.name]}
            name={'rqe-' + data.name}
            disabled={!isEditing}
          />
        )}
      </div>
      {photo && (
        <Actions removePhoto={removePhoto} file={photo} disabled={!isEditing} />
      )}
    </Container>
  )
}

export default Documents
