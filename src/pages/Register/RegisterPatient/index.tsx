import React, { useEffect, useMemo } from 'react'

import { useLocation, useParams } from 'react-router'

import { RegisterLayout } from '@/components/Layout/RegisterLayout'

import { ExitAndSteps } from './components/ExitAndSteps'

import { RegistrationData } from './steps/RegistrationData'
import { Address } from './steps/Address'
import { Documents } from './steps/Documents'
import { Dependents } from './steps/Dependents'

import { useRegisterPatient } from './hooks'
import { useLoading } from '@/hooks/useLoading'

import { Container } from './styles'

import apiPatient from '@/services/apiPatient'
import { initialRegisterPatientFromApi } from './adapters/fromApi'

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

    if (token) {
      const loadPatientDataFromTokenParams = async () => {
        try {
          Loading.turnOn()

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

      loadPatientDataFromTokenParams()
    }
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
