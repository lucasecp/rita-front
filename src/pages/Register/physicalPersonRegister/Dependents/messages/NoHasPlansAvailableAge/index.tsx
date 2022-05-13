import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const NoHasPlansAvailableAge: React.FC = () => {
  const { closeModal } = useModal()

  const onCloseModal = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />

      <p>
        Infelizmente não possuímos planos para
        <br />
        Maiores de idade para a sua região
      </p>

      <footer>
        <ButtonPrimary onClick={onCloseModal} data-test="closeModalButton">
          Fechar
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
