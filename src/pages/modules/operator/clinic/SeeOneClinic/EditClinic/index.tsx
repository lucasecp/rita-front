import { Container, ButtonGroup } from './styles'
import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router'
import ButtonLink from '@/components/Button/Link'
import OutilineButton from '@/components/Button/Outline'
import { ClinicAddress } from '../components/ClinicAddress'
import { ClinicData } from '../components/ClinicData'
import { ClinicAcessData } from '../components/ClinicAcessData'
import { ClinicSpecialty } from '../components/ClinicSpecialty'
import Denied from '../messages/Denied'
import { useModal } from '@/hooks/useModal'
import { useHistory } from 'react-router'
import { OPERATOR_SEE_ALL_CLINICS } from '@/routes/constants/namedRoutes/routes'
// import { toApi, fromApi } from '../adapters'

const EditClinic = ({ clinicData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [personalDatas, setPersonalDatas] = useState(
    clinicData.personalDatas || {},
  )

  const [acessDatas, setAcessDatas] = useState(clinicData.acessDatas || {})
  console.log(clinicData)
  const [specialtys, setSpecialtys] = useState(
    clinicData?.specialtys?.name || {},
  )
  const [address, setAddress] = useState(clinicData.address || {})
  const [buttonIsDisabled, setButtonIsDisabled] = useState(false)
  const [cancelEdit, setCancelEdit] = useState(false)
  const [prevData, setPrevData] = useState(clinicData)
  const { showSimple, showMessage } = useModal()
  const history = useHistory()

  useEffect(() => {
    setButtonIsDisabled(personalDatas?.hasError || address?.hasError)
  }, [address, personalDatas])

  const onEdit = () => {
    const status = clinicData.personalDatas.status

    if (status === 'PENDING') {
      return showSimple.warning(
        'Os dados desse dependente estão sendo analisados, pedimos que aguarde a aprovação pela nossa equipe.',
      )
    }

    if (status === 'BLOCKED') {
      return showMessage(Denied)
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
      <ClinicData
        isEditing={isEditing}
        personalDatas={clinicData.personalDatas}
        setPersonalDatas={setPersonalDatas}
        initialData={prevData?.personalDatas}
        cancelEdit={cancelEdit}
      />
      <ClinicAcessData
        isEditing={isEditing}
        acessDatas={clinicData.acessDatas}
        setAcessDatas={setAcessDatas}
        initialData={prevData?.acessDatas}
        cancelEdit={cancelEdit}
      />
      <ClinicAddress
        isEditing={isEditing}
        address={clinicData.address}
        setAddress={setAddress}
        initialData={prevData?.address}
        cancelEdit={cancelEdit}
      />
      <ClinicSpecialty
        isEditing={isEditing}
        clinicSpecialtys={clinicData?.specialtys}
        setClinicSpecialtys={setSpecialtys}
        initialData={prevData?.address}
        cancelEdit={cancelEdit}
      />

      {!isEditing ? (
        <ButtonGroup>
          <ButtonLink onClick={() => history.push(OPERATOR_SEE_ALL_CLINICS)}>
            Voltar
          </ButtonLink>
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

export default EditClinic
