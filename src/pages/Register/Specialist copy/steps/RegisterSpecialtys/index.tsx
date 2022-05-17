import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import FooterNextStep from '../../components/FooterNextStep'

import { useRegisterSpecialist } from '../../hooks'
import SpecialtyItem from './SpecialtyItem/index'
import { MultiSelectOption } from '@/components/Form/MultSelect'
// import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'

const RegisterSpecialtys: React.FC = () => {
  const {
    profissionalInfo,
    // setErrors,
    // specialtysAndDocs,
    step,
    registerSpecialist,
    setProfissionalInfo,
  } = useRegisterSpecialist()

  // const hasError = () => {
  //   const error = false
  // for (const field in specialtysAndDocs) {
  // if (!specialtysAndDocs[field].document) {
  //   const message = 'Documentação Obrigatória'
  //   scrollOntoFieldError({ [field]: message })
  //   setErrors((errors) => ({
  //     ...errors,
  //     specialtysAndDocs: {
  //       ...errors.specialtysAndDocs,
  //       [field]: message,
  //     },
  //   }))
  //   error = true
  // }
  // }
  //   return error
  // }

  const [specialtys, setSpecialtys] = useState<MultiSelectOption[]>([])

  const onNextStep = () => {
    // if (hasError()) return
    registerSpecialist()
  }

  useEffect(() => {
    setProfissionalInfo((prevState) => {
      return {
        ...prevState,
        specialtys: specialtys.map((e) => e),
      }
    })
  }, [specialtys])

  return (
    <Container hidden={step !== 3}>
      <h2>Cadastrar Especialidades</h2>
      <main>
        {profissionalInfo?.specialtys?.map((spec, index) => (
          <SpecialtyItem
            setSpecialtys={setSpecialtys}
            specialtys={specialtys}
            key={index}
            data={spec}
            current={index + 1}
          />
        ))}
      </main>
      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default RegisterSpecialtys
