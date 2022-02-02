import React from 'react'
import { useHistory } from 'react-router-dom'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Importing } from '../Importing'

import { useModal } from '@/hooks/useModal'
import { toast } from '@/styles/components/toastify'
import { DIRECTOR_IMPORT_REPORT } from '@/routes/constants/namedRoutes/routes'

import { Container, ButtonsArea } from './styles'
import apiPatient from '@/services/apiPatient'

interface ConfirmImportProps {
  file: File
  company: string
}

export const ConfirmImport: React.FC<ConfirmImportProps> = ({
  file,
  company,
}) => {
  const history = useHistory()
  const { closeModal, showMessage } = useModal()

  const onMakeImport = async () => {
    const formData = new FormData()
    formData.append('file', file)

    showMessage(Importing)

    const response = await apiPatient.put(
      '/paciente/importacaoPaciente',
      {
        planilha: formData,
      },
      {
        params: { gravar: true },
      },
    )

    return new Promise(function () {
      setTimeout(() => {
        const success = true

        if (success) {
          console.log('Importação finalizada!')
          toast.success('Importação realizada com sucesso')
          closeModal()
          history.push(DIRECTOR_IMPORT_REPORT)
        } else {
          console.log('Importação há erros!')
          toast.error('Houve algum erro durante a importação')
          closeModal()
        }
      }, 5000)
    })
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
