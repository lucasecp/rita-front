import ButtonPrimary from '@/components/Button/Primary'

import { useModal } from '@/hooks/useModal'

import { Container } from './styles'

export const NoHasPlansAvailableAge: React.FC = () => {
  const { closeModal } = useModal()

  const onCloseModal = () => {
    closeModal()
  }

  return (
    <Container>
      <h3>
        Infelizmente não possuímos planos para
        <br />
        maiores de idade para a sua região
      </h3>

      <footer>
        <ButtonPrimary onClick={onCloseModal} data-test="closeModalButton">
          Fechar
        </ButtonPrimary>
      </footer>
    </Container>
  )
}
