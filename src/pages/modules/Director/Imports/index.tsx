import React, { useEffect, useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { InputFile } from '@/components/Form/InputFile'

import { Container, BtnGroup, ContentFile, AutoComplete } from './styles'

interface AutocompleteOptions {
  label: string
  value: string
}

export const Imports: React.FC = () => {
  const [file, setFile] = useState({} as File)
  const [company, setCompany] = useState('')
  const [autocompleteExpanded, setAutocompleteExpanded] = useState(false)
  const [autocompleteOptions, setAutocompleteOptions] = useState<
    AutocompleteOptions[]
  >([
    { label: 'Sabin', value: '1' },
    { label: 'CSP', value: '2' },
    { label: 'Rita', value: '3' },
  ])

  useEffect(() => {
    document.title = 'Rita Saúde | Importações'
  }, [])

  return (
    <DefaultLayout title="Importações">
      <Container>
        <InputFile setValue={setFile}>
          <label>Arquivo:</label>
          <ContentFile>
            <span>{file && file.name}</span>
            <button>Inserir arquivo</button>
          </ContentFile>
        </InputFile>
        <AutoComplete>
          <label htmlFor="company">Empresa</label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            onKeyUp={() => {
              if (company.length > 0) {
                setAutocompleteExpanded(true)
              } else {
                setAutocompleteExpanded(false)
              }
            }}
            onBlur={() => setAutocompleteExpanded(false)}
          />
          {autocompleteExpanded && (
            <ul>
              {autocompleteOptions.map((option) => (
                <li key={option.value}>{option.label}</li>
              ))}
            </ul>
          )}
        </AutoComplete>
      </Container>
      <BtnGroup>
        <ButtonPrimary>Realizar importação</ButtonPrimary>
      </BtnGroup>
    </DefaultLayout>
  )
}
