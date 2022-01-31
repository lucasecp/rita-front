import React from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import ButtonOutline from '@/components/Button/Outline'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { Importing } from '../Importing'

import { useModal } from '@/hooks/useModal'
import { toast } from '@/styles/components/toastify'

import { Container, ButtonsArea } from './styles'

export const ConfirmImport: React.FC = () => {
  const { closeModal, showMessage } = useModal()

  const onMakeImport = () => {
    console.log('Importação aceita!')

    showMessage(Importing)

    return new Promise(function () {
      setTimeout(() => {
        const success = false

        if (success) {
          console.log('Importação finalizada!')
          toast.success('Importação realizada com sucesso')
          closeModal()
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
