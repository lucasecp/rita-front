import React, { useState } from 'react'

import warning from '@/assets/icons/alerts/warning.svg'

import { useModal } from '@/hooks/useModal'
import { Container } from './styles'
import ButtonPrimary from '@/components/Button/Primary'
import Textarea from '@/components/Form/Textarea'
import { useLoading } from '@/hooks/useLoading'
import apiWallet from '@/services/apiWallet'
import { toast } from '@/styles/components/toastify'

function validateRequired(value?: string | null) {
  return [null, undefined, ''].includes(value) ? 'Campo obrigatório.' : ''
}

type PaymentRequestRejectionProps = {
  data: RitaWallet.PaymentRequest
}

export const PaymentRequestRejection: React.FC<PaymentRequestRejectionProps> = ({
  data,
}) => {
  const [reason, setReason] = useState('')
  const { closeModal } = useModal()
  const { Loading } = useLoading()
  // const { user } = useAuth()
  const [errors, setErrors] = useState<{ reason?: string }>({})

  async function onSubmit() {
    const newErrors = {
      reason: validateRequired(reason),
    }
    const hasErrors = Object.values(newErrors).some((value) => value !== '')
    setErrors(newErrors)

    if (!hasErrors) {
      try {
        Loading.turnOn()

        await apiWallet.post('/reject-event', {
          reason,
          type_event: 'string',
          event_id: 'string',
          payment_request_id: data.id,
        })

        toast.success('Mensagem enviada com sucesso')
        closeModal()
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message)
        }

        console.error(error)
      }

      Loading.turnOff()
    }
  }

  return (
    <Container>
      <header>
        <img src={warning} />
      </header>

      <section>
        <h3>Obrigado pela informação.</h3>
        <p>
          Faremos uma revisão dos atendimentos e serviços relacionados a sua
          conta.
        </p>
      </section>

      <section>
        <Textarea
          placeholder="Informações adicionais"
          rows={4}
          name="reason"
          value={reason}
          setValue={setReason}
          hasError={Boolean(errors.reason)}
          messageError={errors.reason}
          onBlur={() =>
            setErrors({ ...errors, reason: validateRequired(reason) })
          }
          onKeyUp={() =>
            setErrors({ ...errors, reason: validateRequired(reason) })
          }
          style={{ width: '100%' }}
        />
        <p className="hint">Mínimo 50 caracteres</p>
      </section>

      <footer>
        <ButtonPrimary onClick={onSubmit}>Enviar</ButtonPrimary>
      </footer>
    </Container>
  )
}
