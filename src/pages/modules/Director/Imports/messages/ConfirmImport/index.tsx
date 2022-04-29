import React from 'react'
import { useHistory } from 'react-router-dom'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import apiPatient from '@/services/apiPatient'

import { Importing } from '../Importing'
import { useModal } from '@/hooks/useModal'
import { toast } from '@/styles/components/toastify'
import { DIRECTOR_IMPORT_REPORT } from '@/routes/constants/namedRoutes/routes'
import { AutocompleteOptions } from '@/components/Form/Autocomplete'
import { fromApiImport } from '../../adapters/fromApiImport'

import { Container, ButtonsArea } from './styles'

interface ConfirmImportProps {
  file: File
  company: AutocompleteOptions
}

export const ConfirmImport: React.FC<ConfirmImportProps> = ({
  file,
  company,
}) => {
  const history = useHistory()
  const { closeModal, showMessage } = useModal()

  const onMakeImport = async () => {
    const formFile = new FormData()
    formFile.append('planilha', file)

    showMessage(Importing)

    const dateNow = new Date()

    try {
      const response = await apiPatient.put(
        `/paciente/importacaoPaciente?empresa=${company.value}`,
        formFile,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )

      if (response.status === 200) {
        const importedDataMapped = fromApiImport(response.data)

        toast.success('Importação realizada com sucesso')
        closeModal()

        history.push(DIRECTOR_IMPORT_REPORT, {
          reportDetails: {
            data: dateNow.toLocaleDateString(),
            hour: dateNow.toLocaleTimeString().slice(0, -3),
            company,
          },
          importedDataMapped,
        })
      }
    } catch {
      toast.error('Houve algum erro durante a importação')
    } finally {
      closeModal()
    }
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>Deseja realmente fazer essa importação?</p>

      <ButtonsArea>
        <ButtonOutline onClick={closeModal}>Não</ButtonOutline>
        <ButtonPrimary onClick={onMakeImport}>Sim</ButtonPrimary>
      </ButtonsArea>
    </Container>
  )
}
