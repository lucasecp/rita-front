import type { ChangeEvent } from 'react'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { OPERATOR_WALLET_TABLE_IMPORT_LIST } from '@/routes/constants/namedRoutes/routes'
import formatBytes from '@/helpers/formatBytes'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Select } from '@/components/Form/Select'
import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import { Container } from './styles'

export const WalletTableImportCreate: React.FC = () => {
  const [selectedType, setSelectedType] = useState(1)
  const [selectedRegional, setSelectedRegional] = useState(1)
  const [file, setFile] = useState<File>()
  const [fileName, setFileName] = useState('')
  const [fileSize, setFileSize] = useState(0)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFile(
      event.target.files && event.target.files.length
        ? event.target.files[0]
        : null
    )
  }

  useEffect(() => {
    const { name = '', size = 0 } = file || {}

    setFileName(name)
    setFileSize(size)
  }, [file])

  return (
    <DefaultLayout title="Carteira Digital">
      <Container>
        <h3>Importação de Tabelas</h3>

        <form>
          <Select
            options={[{ label: 'Particular', value: 1 }]}
            value={selectedType}
            setValue={setSelectedType}
          />
          <Select
            options={[{ label: 'Brasilia', value: 1 }]}
            value={selectedRegional}
            setValue={setSelectedRegional}
          />

          <section>
            <ButtonPrimary block>
              <input
                type="file"
                onChange={handleChange}
              />
            </ButtonPrimary>
            {fileName}//{formatBytes(fileSize)}
          </section>
        </form>

        <footer>
          <ButtonOutline>Processar</ButtonOutline>
          <NavLink to={OPERATOR_WALLET_TABLE_IMPORT_LIST}>
            <ButtonPrimary>Cancelar</ButtonPrimary>
          </NavLink>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
