import React, { useEffect, useState } from 'react'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { GeneralDatas } from './components/GeneralDatasProfile'
import { AddressProfile } from './components/AddressProfile'
import { SupplementaryData } from './components/SupplementaryData'
import { OwnerOfTheAccount } from './components/OwnerAccount'

import { Container } from './styles'
import { useToggle } from '@/hooks/useToggle'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { SuccessUpdateProfile } from './messages/SuccessUpdateProfile'

interface EditPersonalDataProps {
  personalDatas: {
    personalDatas: {
      name: string
      birthDate: string
      gender: string
      phone: string
      email: string
      hasError?: boolean
    }
    address: {
      cep: string
      uf: string
      city: string
      addressUser: string
      number: string
      district: string
      complement: string
      hasError?: boolean
    }
    supplementaryData: {
      contractedPlan: string
      contractedPlanSince: string
      price: string
      channel: string
      company: string
      hasError?: boolean
    }
    ownerOfTheAccount: {
      name?: string
      email?: string
      phone?: string
    }
  }
}

export const EditPersonalData: React.FC<EditPersonalDataProps> = ({
  personalDatas,
}) => {
  const { Loading } = useLoading()
  const { showSimple, showMessage } = useModal()

  const [isEditing, toogleEditing] = useToggle()
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState<
    boolean | undefined
  >(false)

  const [mainPersonalDatas, setMainPersonalDatas] = useState(
    personalDatas?.personalDatas,
  )
  const [address, setAddress] = useState(personalDatas?.address)
  const [ ownerOfTheAccount ] = useState(personalDatas?.ownerOfTheAccount)

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

      await apiPatient.put('/paciente/meu-perfil', {
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
    toogleEditing()
  }

  return (
    <Container>
      {!isEditing && (
        <OutlineButton onClick={toogleEditing}>
          Editar Informações
        </OutlineButton>
      )}
      {ownerOfTheAccount.name && <OwnerOfTheAccount ownerOfTheAccount={ownerOfTheAccount}/>}
      <GeneralDatas
        isEditing={isEditing}
        personalDatas={mainPersonalDatas}
        prevData={personalDatas.personalDatas}
        setPersonalDatas={setMainPersonalDatas}
      />
      <AddressProfile
        isEditing={isEditing}
        address={address}
        prevData={personalDatas.address}
        setAddress={setAddress}
      />
      {personalDatas?.supplementaryData?.contractedPlan && (
        <SupplementaryData
          supplementaryData={personalDatas?.supplementaryData}
        />
      )}
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
