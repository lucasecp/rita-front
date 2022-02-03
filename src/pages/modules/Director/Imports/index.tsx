import React, { useEffect, useState } from 'react'
import { isValidTypeFileExcel } from '@/helpers/file/isValidTypeFileExcel'
import { isObjectEmpty } from '@/helpers/isObjectEmpty'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { InputFile } from '@/components/Form/InputFile'
import { Autocomplete } from '@/components/Form/Autocomplete'

import { useModal } from '@/hooks/useModal'

import { ConfirmImport } from './messages/ConfirmImport'
import { InvalidFormat } from './messages/InvalidFormat'

import { Container, BtnGroup, ContentFile } from './styles'

interface AutocompleteOptions {
  label: string
  value: string
}

interface Errors {
  file: string
  company: string
}

export const Import: React.FC = () => {
  const { showMessage } = useModal()

  const [file, setFile] = useState<File | null>({} as File)
  const [company, setCompany] = useState('')
  const [autocompleteOptions, setAutocompleteOptions] = useState<
    AutocompleteOptions[]
  >([])
  const [errors, setErrors] = useState<Errors>({
    file: '',
    company: '',
  })

  useEffect(() => {
    document.title = 'Rita Saúde | Importação'

    setAutocompleteOptions([
      { label: 'Sabin', value: '1' },
      { label: 'CSP', value: '2' },
      { label: 'Rita', value: '3' },
    ])
  }, [])

  useEffect(() => {
    const canValidateFile =
      typeof file === 'object' && file !== null && file.name

    if (canValidateFile && !isValidTypeFileExcel(file)) {
      showMessage(InvalidFormat)
      return setFile(null)
    }
  }, [file])

  const onCancel = () => {
    setFile(null)
    setCompany('')
  }

  const validateErrors = (fileParam: File | null, companyParam: string) => {
    let objectError = {} as Errors

    // Se não for null (click cancelar ou abriu explorer e fechou)
    if (fileParam === null) {
      if (companyParam) {
        objectError = {
          file: 'Inserir arquivo para realizar a importação.',
          company: '',
        }
      } else {
        objectError = {
          file: 'Inserir arquivo para realizar a importação.',
          company: 'A seleção da empresa é obrigatória.',
        }
      }
    }

    // Se for do tipo File, e tiver um nome (arquivo adicionado)
    if (typeof fileParam === 'object' && fileParam?.name) {
      if (companyParam) {
        objectError = {
          file: '',
          company: '',
        }
      } else {
        objectError = {
          file: '',
          company: 'A seleção da empresa é obrigatória.',
        }
      }
    }

    // Se for do tipo File
    // Não tiver um nome (não tem arquivo adicionado)
    // E não for null (click cancelar ou abriu explorer e fechou)
    if (
      typeof fileParam === 'object' &&
      !fileParam?.name &&
      fileParam !== null
    ) {
      if (companyParam) {
        objectError = {
          file: 'Inserir arquivo para realizar a importação.',
          company: '',
        }
      } else {
        objectError = {
          file: 'Inserir arquivo para realizar a importação.',
          company: 'A seleção da empresa é obrigatória.',
        }
      }
    }

    return objectError
  }

  const onRealizeImport = () => {
    const errorsSearched = validateErrors(file, company)

    if (errorsSearched.file || errorsSearched.company) {
      return setErrors(errorsSearched)
    }

    setErrors({ file: '', company: '' })
    showMessage(ConfirmImport, { file, company })
  }

  return (
    <DefaultLayout title="Importação">
      <Container>
        <InputFile setValue={setFile} clearOnClick accept=".xlsx, .xls">
          <label>Arquivo:</label>
          <ContentFile>
            <span>{file && typeof file === 'object' && file.name}</span>
            <button>Inserir arquivo</button>
          </ContentFile>
          {errors.file && <p className="error">{errors.file}</p>}
        </InputFile>
        <Autocomplete
          label="Empresa:"
          value={company}
          setValue={setCompany}
          options={autocompleteOptions}
          error={errors.company}
        />
      </Container>
      <BtnGroup>
        {((typeof file === 'object' && file?.name) || company) && (
          <ButtonOutline onClick={onCancel}>Cancelar</ButtonOutline>
        )}
        <ButtonPrimary onClick={onRealizeImport}>
          Realizar importação
        </ButtonPrimary>
      </BtnGroup>
    </DefaultLayout>
  )
}