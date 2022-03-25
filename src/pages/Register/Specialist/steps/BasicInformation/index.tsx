import React, { useState, useEffect } from 'react'
import { useRegisterSpecialist } from '../../hooks'

import { Container } from './styles'
import InputText from '@/components/Form/InputText/index'
import { Select } from '@/components/Form/Select/index'
import { UF } from '@/constants/ufs'
import FooterNextStep from '../../components/FooterNextStep'
import SelectIssuingAgency from '@/components/smarts/SelectIssuingAgency/SelectIssuingAgency'
import { genericValidate } from '../../helpers/validatorFields'
import { useValidator } from '../../hooks/useValidator'
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError'

interface BasicInformationProps {}

const BasicInformation: React.FC<BasicInformationProps> = ({}) => {
  const { step, nextStep, errors, setErrors, setbasicInformation } =
    useRegisterSpecialist()

  const { hasErrors } = useValidator()

  const [profissionalRegister, setProfissionalRegister] = useState('')

  const [issuingAgency, setIssuingAgency] = useState('')

  const [issuingAgencyToApi, setIssuingAgencyToApi] = useState('')

  const [ufIssuingAgency, setufProfissionalRegister] = useState('')

  const [toggleClick, setToggleClick] = useState(0)

  const onNextStep = () => {

    if (
      hasErrors({
        profissionalRegister,
        issuingAgency,
        ufIssuingAgency,
      })
    ) {
      return setToggleClick(Math.random() * (10 - 3) + 3)
    }
    nextStep()
  }
  useEffect(() => {
    setbasicInformation({
      profissionalRegister,
      issuingAgency,
       issuingAgencyToApi,
      ufIssuingAgency,
    })
  }, [profissionalRegister, issuingAgency, ufIssuingAgency])


  console.log(issuingAgency,
    issuingAgencyToApi,)


  useEffect(() => {
    if (toggleClick !== 0) {
      scrollOntoFieldError(errors)
    }
  }, [toggleClick])

  return (
    <Container hidden={step !== 1}>
      <h2>Dados do Especialista</h2>
      <div>
        <InputText
          label="Registro Profissional:"
          value={profissionalRegister}
          setValue={setProfissionalRegister}
          name="profissionalRegister"
          onBlur={() =>
            setErrors({
              ...errors,
              profissionalRegister: genericValidate(
                profissionalRegister,
                'registro profissional',
              ),
            })
          }
          onKeyUp={() =>
            setErrors({
              ...errors,
              profissionalRegister: genericValidate(
                profissionalRegister,
                'registro profissional',
              ),
            })
          }
          hasError={!!errors.profissionalRegister}
          msgError={errors.profissionalRegister}
          onlyNumber
          maxLength={10}
        />

        <SelectIssuingAgency
          issuingAgency={issuingAgency}
          setIssuingAgency={setIssuingAgency}
          setIssuingAgencyToApi={setIssuingAgencyToApi}
          error={errors.issuingAgency}
        />

        <Select
          label="UF Órgão Emissor:"
          value={ufIssuingAgency}
          setValue={setufProfissionalRegister}
          name="ufIssuingAgency"
          options={UF}
          labelDefaultOption="Selecione"
          hasError={!!errors.ufIssuingAgency}
          msgError={errors.ufIssuingAgency}
        />
      </div>
      <FooterNextStep onClickNextStep={onNextStep} />
    </Container>
  )
}

export default BasicInformation
