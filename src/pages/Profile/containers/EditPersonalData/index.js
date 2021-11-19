import React, { useEffect, useState } from 'react'

import OutlineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'

import { AddressProfile } from './components/AddressProfile'
import { GeneralDatas } from './components/GeneralDatasProfile'

import { Container } from './styles'
import { useToggle } from '@/hooks/useToggle'

export const EditPersonalData = () => {
  const [isEditing, toogleEditing] = useToggle()
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(false)

  const [personalDatas, setPersonalDatas] = useState({})
  const [address, setAddress] = useState({})

  useEffect(() => {
    setIsSaveButtonDisabled(personalDatas.hasError)
  }, [personalDatas])

  return (
    <Container>
      {!isEditing && (
        <OutlineButton onClick={toogleEditing}>
          Editar Informações
        </OutlineButton>
      )}
      <GeneralDatas
        isEditing={isEditing}
        personalDatas={personalDatas}
        setPersonalDatas={setPersonalDatas}
      />
      <AddressProfile
        isEditing={isEditing}
        address={address}
        setAddress={setAddress}
      />
      {isEditing && (
        <footer>
          <OutlineButton onClick={toogleEditing}>Cancelar</OutlineButton>
          <ButtonPrimary disabled={isSaveButtonDisabled}>
            Salvar Alterações
          </ButtonPrimary>
        </footer>
      )}
    </Container>
  )
}
