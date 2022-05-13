import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const NoHasPlansAvailableQuantity: React.FC = () => {
  const { closeModal } = useModal()

  const onCloseModal = () => {
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />

      <p>
        Infelizmente não possuímos planos com quantidade
        <br />
        Maiores de dependentes para a sua região
      </p>

      <footer>
        <ButtonPrimary onClick={onCloseModal} data-test="closeModalButton">
          Fechar
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
