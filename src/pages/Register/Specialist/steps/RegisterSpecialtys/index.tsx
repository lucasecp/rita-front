import React from 'react'
import { Container } from './styles'
import FooterNextStep from '../../components/FooterNextStep'

import { useRegisterSpecialist } from '../../hooks'
import SpecialtyItem from './SpecialtyItem/index'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'

const RegisterSpecialtys: React.FC = () => {
  const {
    profissionalInfo,
    setErrors,
    specialtysAndDocs,
    step,
    registerSpecialist,
  } = useRegisterSpecialist()

  const hasError = () => {
    let error = false
    for (const field in specialtysAndDocs) {
      if (!specialtysAndDocs[field].document) {
        const message = 'Documentação Obrigatória'

        scrollOntoFieldError({ [field]: message })

        setErrors((errors) => ({
          ...errors,
          specialtysAndDocs: {
            ...errors.specialtysAndDocs,
            [field]: message,
          },
        }))
        error = true
      }
    }
    return error
  }

  const onNextStep = () => {
    if (hasError()) return
    registerSpecialist()
  }

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
