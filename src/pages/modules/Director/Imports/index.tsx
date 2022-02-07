import React, { useEffect, useState } from 'react'
import { isValidTypeFileExcel } from '@/helpers/file/isValidTypeFileExcel'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { InputFile } from '@/components/Form/InputFile'
import CustomTooltip from '@/components/Tooltip'
import {
  Autocomplete,
  AutocompleteOptions,
} from '@/components/Form/Autocomplete'

import { useModal } from '@/hooks/useModal'

import { fromApiCompanies } from './adapters/fromApiCompanies'
import formatTextWithLimit from '@/helpers/formatTextWithLimit'

import { ConfirmImport } from './messages/ConfirmImport'
import { InvalidFormat } from './messages/InvalidFormat'

import { Container, BtnGroup, ContentFile } from './styles'
import apiUser from '@/services/apiUser'

interface Errors {
  file: string
  company: string
}

export const Import: React.FC = () => {
  const { showMessage } = useModal()

  const [file, setFile] = useState<File | null>({} as File)
  const [company, setCompany] = useState({
    value: 0,
    label: '',
  })
  const [autocompleteOptions, setAutocompleteOptions] = useState<
    AutocompleteOptions[]
  >([])
  const [errors, setErrors] = useState<Errors>({
    file: '',
    company: '',
  })

  useEffect(() => {
    document.title = 'Rita Saúde | Importação'

    const loadCompanies = async () => {
      const response = await apiUser.get('/empresa')
      const companyOptions = fromApiCompanies(response.data.dados)
      setAutocompleteOptions(companyOptions)
    }

    loadCompanies()
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
    setCompany({
      value: 0,
      label: '',
    })
  }

  const validateErrors = (fileParam: File | null, companyParam: string) => {
    let objectError = {} as Errors

    // A empresa está inclusa no array de empresas vindo da API
    const companyIsValid = autocompleteOptions
      .map((option) => {
        if (option.label === company.label && company.value !== 0) return true
        return false
      })
      .filter((option) => option === true)

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
      if (companyParam && companyIsValid[0]) {
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
    const errorsSearched = validateErrors(file, company.label)
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
            <CustomTooltip label={file && file.name}>
              <span>
                {file &&
                  typeof file === 'object' &&
                  formatTextWithLimit(file.name, 28)}
              </span>
            </CustomTooltip>
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
