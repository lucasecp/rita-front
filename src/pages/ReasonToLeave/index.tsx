import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import {
  ButtonArea,
  Content,
  TextAreaAndErrorMessage,
  TitleAndLogo,
} from './styles'
import { RadioGroup } from '@material-ui/core'
import RadioButton from '@/styles/components/RadioButton'
import Textarea from '@/components/Form/Textarea'
import ButtonPrimary from '@/components/Button/Primary'
import logo from '@/assets/logo/logo-animated-without-background.gif'
import { useModal } from '@/hooks/useModal'
import { ReasonError } from './messages/ReasonError'
import { ThankUser } from './messages/ThankUser'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { reasonToApi } from './adapters/toApi'
import { toast } from '@/styles/components/toastify'

export const ReasonToLeave: React.FC = () => {
  const [reason, setReason] = useState('')
  const [othersReason, setOthersReason] = useState('')
  const [othersReasonError, setOthersReasonError] = useState('')

  const { Loading } = useLoading()

  const { showMessage } = useModal()

  const { token } = useParams<{ token?: string }>()

  console.log(token)

  const onSendReason = async () => {
    if (reason.length === 0) {
      return showMessage(ReasonError)
    }

    if (reason === 'others' && othersReason.length === 0) {
      setOthersReasonError(
        'Necessário informar um motivo pelo qual você gostaria de sair da plataforma',
      )

      return showMessage(ReasonError)
    } else {
      setOthersReasonError('')
    }

    const reasonMapped = reasonToApi(reason) || othersReason

    try {
      Loading.turnOn()

      await apiPatient.delete('/paciente', {
        params: {
          token,
          motivo: reasonMapped,
        },
      })

      showMessage(ThankUser)
    } catch ({ response }) {
      toast.error('Erro ao sair da plataforma')
    } finally {
      Loading.turnOff()
    }
  }

  const onReasonChange = (_: unknown, value: string) => {
    setReason(value)
  }

  return (
    <RegisterLayout>
      <Content>
        <TitleAndLogo>
          <h6>
            Informe, por favor, o motivo pelo qual você deseja sair da
            plataforma
          </h6>
          <img src={logo} />
        </TitleAndLogo>
        <RadioGroup onChange={onReasonChange} value={reason}>
          <RadioButton
            value="adaptation"
            label="Eu não me adaptei ao plano da Rita Saúde"
            checked={reason === 'adaptation'}
          />
          <RadioButton
            value="expectation"
            label="A Rita Saúde não atendeu às minhas expectativas"
            checked={reason === 'expectation'}
          />
          <RadioButton
            value="wantingToLeave"
            label="Não desejo mais fazer parte da Rita Saúde"
            checked={reason === 'wantingToLeave'}
          />
          <RadioButton
            value="expensive"
            label="O Plano da Rita Saúde está muito caro para mim"
            checked={reason === 'expensive'}
          />
          <RadioButton
            value="moving"
            label="Vou aderir ao plano de outra empresa"
            checked={reason === 'moving'}
          />
          <RadioButton
            value="others"
            label="Outros"
            checked={reason === 'others'}
          />
        </RadioGroup>
        {reason === 'others' && (
          <TextAreaAndErrorMessage>
            <Textarea
              placeholder="Informe um motivo pelo qual você gostaria de sair da plataforma."
              setValue={setOthersReason}
              value={othersReason}
              showCaractersInformation
              limit={200}
              hasError={!!othersReasonError}
              messageError={othersReasonError}
            />
          </TextAreaAndErrorMessage>
        )}
        <ButtonArea>
          <ButtonPrimary onClick={onSendReason}>Enviar</ButtonPrimary>
        </ButtonArea>
      </Content>
    </RegisterLayout>
  )
}
