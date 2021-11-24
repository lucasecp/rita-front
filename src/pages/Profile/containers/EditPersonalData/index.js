import React, { useEffect, useState } from 'react'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { AddressProfile } from './components/AddressProfile'
import { GeneralDatas } from './components/GeneralDatasProfile'

import { Container } from './styles'
import { useToggle } from '@/hooks/useToggle'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { SuccessUpdateProfile } from './messages/SuccessUpdateProfile'
import { SupplementaryData } from './components/SupplementaryData'

export const EditPersonalData = ({ personalDatas }) => {
  const { Loading } = useLoading()
  const { showSimple, showMessage } = useModal()

  const [isEditing, toogleEditing] = useToggle()
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)

  const [mainPersonalDatas, setMainPersonalDatas] = useState(
    personalDatas?.personalDatas
  )
  const [address, setAddress] = useState(personalDatas?.address)

  useEffect(() => {
    setIsSaveButtonDisabled(mainPersonalDatas?.hasError || address?.hasError)
  }, [mainPersonalDatas, address])

  const onSaveChanges = async () => {
    try {
      Loading.turnOn()

      const mainPersonalDatasMapped = {
        nome: mainPersonalDatas.name,
        sexo: mainPersonalDatas.gender,
        dataNascimento: mainPersonalDatas.birthDate,
        telefone: mainPersonalDatas.phone,
        email: mainPersonalDatas.email,
      }

      const addressMapped = {
        endereco: {
          cep: address.cep,
          logradouro: address.addressUser,
          numero: address.number,
          complemento: address.complement,
          bairro: address.district,
          cidade: address.city,
          uf: address.uf,
        },
      }

      await apiPatient.put('/paciente', {
        ...mainPersonalDatasMapped,
        ...addressMapped,
      })

      showMessage(SuccessUpdateProfile)
    } catch ({ response }) {
      showSimple.error('Erro ao atualizar suas informações, tente novamente!')
    } finally {
      Loading.turnOff()
    }
  }

  const onCancelEditing = () => {
    setMainPersonalDatas(personalDatas?.personalDatas)
    setAddress(personalDatas?.address)
    toogleEditing()
  }

  return (
    <Container>
      {!isEditing && (
        <OutlineButton onClick={toogleEditing}>
          Editar Informações
        </OutlineButton>
      )}
      <GeneralDatas
        isEditing={isEditing}
        personalDatas={mainPersonalDatas}
        setPersonalDatas={setMainPersonalDatas}
      />
      <AddressProfile
        isEditing={isEditing}
        address={address}
        setAddress={setAddress}
      />
      <SupplementaryData />
      {isEditing && (
        <footer>
          <OutlineButton onClick={onCancelEditing}>Cancelar</OutlineButton>
          <ButtonPrimary
            onClick={onSaveChanges}
            disabled={isSaveButtonDisabled}
          >
            Salvar Alterações
          </ButtonPrimary>
        </footer>
      )}
    </Container>
  )
}
