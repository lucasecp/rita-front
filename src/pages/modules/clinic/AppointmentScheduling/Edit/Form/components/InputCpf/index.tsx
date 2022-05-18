import React, { useEffect } from 'react'
import InputMask from '@/components/Form/InputMask'
import clearSpecialCaracter from '@/helpers/clearSpecialCharacters'
import apiPatient from '@/services/apiPatient'
import { ErrorsI } from '../../../types'
import { useLoading } from '@/hooks/useLoading'
import validateCpf from '@/helpers/validateCpf'

interface InputCpfProps {
  cpf: string
  setCpf: React.Dispatch<React.SetStateAction<string>>
  setIdPatient: React.Dispatch<React.SetStateAction<number>>
  setPatientName: React.Dispatch<React.SetStateAction<string>>
  setErrors: React.Dispatch<React.SetStateAction<ErrorsI>>
  error: string
  [x: string]: any
}

export const InputCpf: React.FC<InputCpfProps> = ({
  setCpf,
  cpf,
  setPatientName,
  setIdPatient,
  error,
  setErrors,
  ...rest
}) => {
  const { Loading } = useLoading()

  const setErrorCpf = (msg: string) =>
    setErrors((prevErrors) => ({
      ...prevErrors,
      cpf: msg,
    }))

  useEffect(() => {
    const clearCpf = clearSpecialCaracter(cpf)

    if (!clearCpf) {
      return
    }

    if (!validateCpf(cpf)) {
      return setErrorCpf('CPF inválido')
    }

    const getSpecialists = async () => {
      try {
        setErrorCpf('')

        Loading.turnOn()

        const { data } = await apiPatient.get(
          `paciente/cpf/clinica?cpf=${clearCpf}`,
        )

        if (data.status !== 'A') {
          setErrorCpf('CPF não habilitado para atendimento')

          throw new Error()
        }

        setPatientName(data.nome || '')

        setIdPatient(data.idPaciente)
      } catch (error) {
        if (error.response.status === 404) {
          setErrorCpf('Nenhum paciente associado a este CPF')
        }
      } finally {
        Loading.turnOff()
      }
    }

    getSpecialists()
  }, [cpf])

  return (
    <InputMask
      mask="999.999.999-99"
      label="CPF:"
      value={cpf}
      setValue={setCpf}
      hasError={!!error}
      msgError={error}
      {...rest}
    />
  )
}
