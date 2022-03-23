import React, { useState } from 'react'

import ButtonPrimary from '@/components/Button/Primary'
import warningIcon from '@/assets/icons/alerts/warning.svg'
import { Container, FormGroup } from './styles'
import { useModal } from '@/hooks/useModal'
import InputText from '@/components/Form/InputText/index'
import { MultiSelectOption } from '@/components/Form/MultSelect/index'

interface InsertRqeNumberProps {
  setSpecialtys: (option: any) => MultiSelectOption[]
  currentSpecialty: MultiSelectOption
}

const InsertRqeNumber: React.FC<InsertRqeNumberProps> = ({
  setSpecialtys,
  currentSpecialty,
}) => {
  const { closeModal } = useModal()


  const [rqe, setRqe] = useState('')
  const [error, setError] = useState('')

  const onInsertRqe = () => {
    if (!rqe) {
      return setError('Campo obrigatório.')
    }
    setSpecialtys((specialtys: MultiSelectOption[]) => [
      ...specialtys,
      { ...currentSpecialty, rqe },
    ])
    closeModal()
  }

  return (
    <Container>
      <img src={warningIcon} />
      <p>
        Essa especialidade requer inscrição, por favor insira o número abaixo:
      </p>
      <FormGroup>
        <InputText
          label="RQE:"
          value={rqe}
          setValue={setRqe}
          onlyNumber
          maxLength={10}
          hasError={!!error}
          msgError={error}
        />
        <ButtonPrimary onClick={onInsertRqe}>Enviar</ButtonPrimary>
      </FormGroup>
    </Container>
  )
}

export default InsertRqeNumber
