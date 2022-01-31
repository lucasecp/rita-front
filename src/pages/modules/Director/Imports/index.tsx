import React, { useEffect, useState } from 'react'
import { isObjectEmpty } from '@/helpers/isObjectEmpty'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { InputFile } from '@/components/Form/InputFile'
import { Autocomplete } from '@/components/Form/Autocomplete'

import { useModal } from '@/hooks/useModal'

import { ConfirmImport } from './messages/ConfirmImport'
import { Importing } from './messages/Importing'

import { Container, BtnGroup, ContentFile } from './styles'

interface AutocompleteOptions {
  label: string
  value: string
}

interface Errors {
  file: string
  company: string
}

export const Imports: React.FC = () => {
  const { showMessage } = useModal()

  const [file, setFile] = useState<File | string>({} as File)
  const [company, setCompany] = useState('')
  const [autocompleteOptions, setAutocompleteOptions] = useState<
    AutocompleteOptions[]
  >([])
  const [errors, setErrors] = useState<Errors>({
    file: '',
    company: '',
  })

  useEffect(() => {
    document.title = 'Rita Saúde | Importações'

    setAutocompleteOptions([
      { label: 'Sabin', value: '1' },
      { label: 'CSP', value: '2' },
      { label: 'Rita', value: '3' },
    ])
  }, [])

  const onCancel = () => {
    setFile('')
    setCompany('')
  }

  const validateErrors = (fileParam: File, companyParam: string) => {
    let objectError = {} as Errors

    if (!fileParam.name) {
      objectError = {
        file: 'Inserir arquivo para realizar a importação.',
        company: '',
      }
    }

    if (!companyParam) {
      objectError = {
        file: '',
        company: 'A seleção da empresa é obrigatória.',
      }
    }

    if (!fileParam.name && !companyParam) {
      objectError = {
        file: 'Inserir arquivo para realizar a importação.',
        company: 'A seleção da empresa é obrigatória.',
      }
    }

    return objectError
  }

  const onSubmitImport = () => {
    // if (typeof file === 'object') {
    //   const errorsSearched = validateErrors(file, company)
    //   setErrors(errorsSearched)
    // }

    showMessage(ConfirmImport)
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
          label="Empresa"
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
        <ButtonPrimary onClick={onSubmitImport}>
          Realizar importação
        </ButtonPrimary>
      </BtnGroup>
    </DefaultLayout>
  )
}
