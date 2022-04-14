import React, { useState, useEffect } from 'react'

import onlyNumbers from '@/helpers/clear/onlyNumbers'
import { useModal } from '@/hooks/useModal'
import { useAuth } from '@/hooks/login'
import ButtonPrimary from '@/components/Button/Primary'

import { ReactComponent as WhatsappIcon } from '@/assets/icons/whatsapp.svg'
import { ReactComponent as TimesCircleIcon } from '@/assets/icons/times-circle.svg'
import { Container } from './styles'

export const PaymentRequestAccessBlocked: React.FC<{
  phoneNumber?: string
}> = ({ phoneNumber }) => {
  const { logout } = useAuth()
  const { closeModal } = useModal()
  const [phoneLink, setPhoneLink] = useState('')
  const [whatsappLink, setWhatsappLink] = useState('')

  useEffect(() => {
    const url = new URL(`https://wa.me/${onlyNumbers(phoneNumber)}`)
    url.search = new URLSearchParams({
      text: 'Meu acesso foi bloqueado no Rita Saúde',
    }).toString()

    setPhoneLink(`tel:${onlyNumbers(phoneNumber)}`)
    setWhatsappLink(url.toString())
  }, [phoneNumber])

  function handleOkClick() {
    closeModal()
    logout()
  }

  return (
    <Container variant="danger">
      <header>
        <TimesCircleIcon />
      </header>

      <section>
        <p>
          Seu acesso foi bloqueado devido à excesso de tentativas.
          <br />
          Pedimos que entre em contato com a central de atendimento.{' '}
          {phoneNumber && (
            <>
              <a href={phoneLink} target="_blank">
                {phoneNumber}
              </a>{' '}
              <a href={whatsappLink} target="_blank">
                <WhatsappIcon />
              </a>
            </>
          )}
        </p>
      </section>

      <footer>
        <ButtonPrimary onClick={handleOkClick}>OK</ButtonPrimary>
      </footer>
    </Container>
  )
}
