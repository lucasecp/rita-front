import { Container } from './styles'
import React from 'react'
import InputMask from '@/components/Form/InputMask'
import DependentInfo from './DependentInfo'
import ButtonPrimary from '@/components/Button/Primary'
import OutlineButton from '@/components/Button/Outline'
import { useModal } from '@/hooks/useModal'
import BelongingOtherHolder from '../messages/BelongingOtherHolder'

interface FormProps {}

const Form: React.FC<FormProps> = () => {

  const { showMessage } = useModal()

  return (
    <Container> 
      <h2>Dados do Dependente</h2>
      <InputMask mask="999.999.999-99" label="CPF do Dependente:" value={''} />
      <DependentInfo />
      <footer>
        <OutlineButton>Cancelar</OutlineButton>

        <ButtonPrimary onClick={() => showMessage(BelongingOtherHolder)}>
          Associar Dependentes
        </ButtonPrimary>
      </footer>
    </Container>
  )
}

export default Form
