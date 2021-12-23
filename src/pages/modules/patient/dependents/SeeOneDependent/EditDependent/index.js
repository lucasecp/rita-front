import { Container, ButtonGroup } from './styles'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import ButtonLink from '@/components/Button/Link'
import OutilineButton from '@/components/Button/Outline'
import { DependentAddress } from '../components/DependentAddress'
import { DependentData } from '../components/DependentData'
import { Documents } from '../components/Documents'
import { Situation } from '../components/Situation'
import Danied from '../messages/Denied'
import { useModal } from '@/hooks/useModal'
import { toApi, fromApi } from '../adapters'

const EditDependent = ({ dependentData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [personalDatas, setPersonalDatas] = useState(
    dependentData.personalDatas || {}
  )

  const [address, setAddress] = useState(dependentData.address || {})

  const [buttonIsDisabled, setButtonIsDisabled] = useState(false)
  const [cancelEdit, setCancelEdit] = useState(false)
  const [prevData, setPrevData] = useState(dependentData)
  const { showSimple, showMessage } = useModal()
  const history = useHistory()

  useEffect(() => {
    setButtonIsDisabled(personalDatas?.hasError || address?.hasError)
  }, [address, personalDatas])

  const onEdit = () => {
    const status = dependentData.personalDatas.status

    if (status === 'PENDING') {
      return showSimple.warning(
        'Os dados desse dependente estão sendo analisados, pedimos que aguarde a aprovação pela nossa equipe.'
      )
    }

    if (status === 'BLOCKED') {
      return showMessage(Danied)
    }
    setIsEditing(true)
    scrollTo(0, 0)
  }
  const onSave = () => {
    setIsEditing(false)
    setPrevData({ personalDatas, address })
  }

  const onCancel = () => {
    setPrevData((prevState) => ({
      personalDatas: prevState.personalDatas,
      address: prevState.address,
    }))
    setCancelEdit(true)
    setIsEditing(false)
  }

  return (
    <Container>
      <DependentData
        isEditing={isEditing}
        personalDatas={personalDatas}
        setPersonalDatas={setPersonalDatas}
        initialData={prevData?.personalDatas}
        cancelEdit={cancelEdit}
      />
      <DependentAddress
        isEditing={isEditing}
        address={address}
        setAddress={setAddress}
        initialData={prevData?.address}
        cancelEdit={cancelEdit}
      />
      <Documents />
      <Situation />

      {!isEditing ? (
        <ButtonGroup>
          <ButtonLink>Voltar</ButtonLink>
          <OutilineButton onClick={onEdit}>Editar</OutilineButton>
        </ButtonGroup>
      ) : (
        <ButtonGroup>
          <ButtonLink onClick={onCancel}>Cancelar</ButtonLink>
          <OutilineButton onClick={onSave} disabled={buttonIsDisabled}>
            Salvar
          </OutilineButton>
        </ButtonGroup>
      )}
    </Container>
  )
}

export default EditDependent
