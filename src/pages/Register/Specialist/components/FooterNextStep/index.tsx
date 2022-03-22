import OutlineButton from '@/components/Button/Outline'
import React from 'react'
import ButtonPrimary from '../../../../../components/Button/Primary/index'
import { useRegisterSpecialist } from '../../hooks'
import { Container } from './styles'

interface FooterNexStepProps {
  onClickNextStep: () => void
}

const FooterNextStep: React.FC<FooterNexStepProps> = ({ onClickNextStep }) => {
  const { step, previousStep, stepAmount, registerSpecialist } = useRegisterSpecialist()

  return (
    <Container>
      {step > 1 && (
        <OutlineButton variation="green" onClick={previousStep}>
          Voltar
        </OutlineButton>
      )}

      {step === stepAmount ? (
        <ButtonPrimary variation="green" onClick={onClickNextStep}>
          Finalizar
        </ButtonPrimary>
      ) : (
        <ButtonPrimary variation="green" onClick={onClickNextStep}>
          Próxima Etapa
        </ButtonPrimary>
      )}
    </Container>
  )
}

export default FooterNextStep
