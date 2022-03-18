import React, { useState } from 'react'
import { Container } from './styles'
import FooterNextStep from '../../components/FooterNextStep'

import { useMessage } from '@/hooks/useMessage'
import { useRegisterSpecialist } from '../../hooks'
import SpecialtyItem from './SpecialtyItem/index'

const RegisterSpecialtys: React.FC = ({}) => {
  const { profissionalInfo, step, errors, setErrors } = useRegisterSpecialist()

  const onNextStep = () => {}

  return (
    <Container hidden={step !== 3}>
      <h2>Cadastrar Especialidades</h2>
      <main>
        {profissionalInfo?.specialtys?.map((spec, index) => (
          <SpecialtyItem key={index} data={spec} current={index + 1} />
        ))}
      </main>
      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default RegisterSpecialtys
