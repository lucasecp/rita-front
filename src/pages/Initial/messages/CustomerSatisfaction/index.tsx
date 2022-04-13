import React, { useState, useEffect } from 'react'
import moment from 'moment'

import apiWallet from '@/services/apiWallet'
import { useModal } from '@/hooks/useModal'
import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { toast } from '@/styles/components/toastify'
import { PaymentRequestRejection } from '@/pages/Initial/messages/PaymentRequestRejection'

import { ReactComponent as StarIcon } from '@/assets/icons/star.svg'
import { Container } from './styles'

type CustomerSatisfactionProps = {
  data: RitaWallet.API.Get.PaymentCSAT
}

export const CustomerSatisfaction: React.FC<CustomerSatisfactionProps> = ({
  data,
}) => {
  const { showMessage, closeModal } = useModal()
  const [scoreSelected, setScoreSelected] = useState(0)
  const [scoreHovered, setScoreHovered] = useState(0)
  const [scoreText, setScoreText] = useState('')
  const [hasError, setHasError] = useState(false)

  function handleRatingMouseEnter(index: number) {
    setHasError(false)
    setScoreHovered(index + 1)
  }

  function handleRatingMouseLeave() {
    setScoreHovered(0)
  }

  function handleRatingClick(index: number) {
    setHasError(false)
    setScoreSelected(index + 1)
  }

  function handleRejectClick() {
    showMessage(PaymentRequestRejection, {}, true)
  }

  async function handleSendClick() {
    if (scoreSelected) {
      await apiWallet.post('/payment/csat', {
        id: data.id,
        score: scoreSelected,
      })
      closeModal()
      toast.success('Obrigado por sua resposta.')
    } else {
      setHasError(true)
    }
  }

  useEffect(() => {
    setScoreText(
      ['', 'Muito ruim', 'Ruim', 'Bom', 'Muito bom', 'Excelente'][
        scoreHovered || scoreSelected
      ],
    )
  }, [scoreSelected, scoreHovered])

  return (
    <Container>
      <header>
        <p>
          Como você avalia <strong>{data.description}</strong>?
        </p>
      </header>

      <section>
        <div>
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className={
                scoreHovered
                  ? scoreHovered > index
                    ? 'active'
                    : ''
                  : scoreSelected > index
                  ? 'active'
                  : ''
              }
              onMouseEnter={() => handleRatingMouseEnter(index)}
              onMouseLeave={() => handleRatingMouseLeave()}
              onClick={() => handleRatingClick(index)}
            />
          ))}
        </div>

        <p>
          {scoreText}
          {hasError && <q>Por favor, selecione uma pontuação.</q>}
        </p>
      </section>

      <footer>
        <OutlineButton onClick={handleRejectClick}>
          Não reconheço esse atendimento
        </OutlineButton>
        <ButtonPrimary onClick={handleSendClick}>Enviar</ButtonPrimary>
      </footer>
    </Container>
  )
}
