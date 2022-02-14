import React, { useEffect, useMemo } from 'react'

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
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'

export const RegisterPatient: React.FC = () => {
  const location = useLocation()
  const { Loading } = useLoading()
  const { token } = useParams<{ token?: string }>()

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

    const loadPatientDataFromTokenParams = async () => {
      if (token) {
        try {
          Loading.turnOn()

          // NjE5NDgxOTUzNzIxOTc1MDQxMA==
          const { data } = await apiPatient.get('/paciente/token/', {
            params: { token },
          })

          const initialRegisterMapped = initialRegisterPatientFromApi(data)

          setInitialRegisterData(initialRegisterMapped)
        } catch (error) {
          console.log(error)
        } finally {
          Loading.turnOff()
        }
      }
    }

    loadPatientDataFromTokenParams()
  }, [])

  const activeStep = useMemo(() => {
    const one = isActiveStep(1)
    const two = isActiveStep(2)
    const three = isActiveStep(3)
    const four = isActiveStep(4)

    return {
      one,
      two,
      three,
      four,
    }
  }, [isActiveStep])

  return (
    <RegisterLayout>
      <Container>
        <ExitAndSteps />
        <RegistrationData isActive={activeStep.one} />
        <Address isActive={activeStep.two} />
        <Documents isActive={activeStep.three} />
        <Dependents isActive={activeStep.four} />
      </Container>
    </RegisterLayout>
  )
}
