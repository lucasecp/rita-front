import React, { useEffect, useMemo, useState } from 'react'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'
import { Address } from './steps/Address'
import { RegistrationData } from './steps/RegistrationData'
import { Documents } from './steps/Documents'
import { Dependents } from './steps/Dependents'
import { Container } from './styles'
import { useLocation, useParams } from 'react-router'
import { ExitAndSteps } from './components/ExitAndSteps'
import { useRegisterPatient } from './hooks'
import { initialRegisterPatientFromApi } from './adapters/fromApi'

export const RegisterPatient = () => {
  const location = useLocation()
  const { Loading } = useLoading()
  const { token } = useParams()

  const { isActiveStep, setInitialRegisterData } = useRegisterPatient()

  useEffect(() => {
    document.title = 'Rita Saúde | Cadastro'

    if (location.state) {
      const initialRegisterMapped = initialRegisterPatientFromApi(
        location.state?.userData,
      )

      setInitialRegisterData(initialRegisterMapped)
      return
    }

    if (token) {
      try {
        Loading.turnOn()
        // NjE5NDgxOTUzNzIxOTc1MDQxMA==
      } catch (error) {
        console.log(error)
      } finally {
        Loading.turnOff()
      }
    }
  }, [])

  const isActiveStepOne = useMemo(() => isActiveStep(1), [isActiveStep])

  const isActiveStepTwo = useMemo(() => isActiveStep(2), [isActiveStep])

  const isActiveStepThree = useMemo(() => isActiveStep(3), [isActiveStep])

  const isActiveStepFour = useMemo(() => isActiveStep(4), [isActiveStep])

  return (
    <RegisterLayout>
      <Container>
        <ExitAndSteps />
        <RegistrationData isActive={isActiveStepOne} />
        <Address isActive={isActiveStepTwo} />
        <Documents isActive={isActiveStepThree} />
        <Dependents isActive={isActiveStepFour} />
      </Container>
    </RegisterLayout>
  )
}
