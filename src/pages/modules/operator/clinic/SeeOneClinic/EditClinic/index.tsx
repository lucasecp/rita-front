import ButtonLink from '@/components/Button/Link';
import OutilineButton from '@/components/Button/Outline';
import CancelEdting from '@/components/Modal/CancelEdting';
import { scrollOntoFieldError } from '@/helpers/scrollOntoFieldError';
import { useLoading } from '@/hooks/useLoading';
import { useModal } from '@/hooks/useModal';
import { OPERATOR_SEE_ALL_CLINICS } from '@/routes/constants/namedRoutes/routes';
import apiAdmin from '@/services/apiAdmin';
import { toast } from '@/styles/components/toastify';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { toApi } from '../adapters';
import { ClinicAcessData } from '../components/ClinicAcessData';
import { ClinicAddress } from '../components/ClinicAddress';
import { ClinicData } from '../components/ClinicData';
import { ClinicSpecialty } from '../components/ClinicSpecialty';
import Denied from '../messages/Denied';
import { ErrorsI } from '../Types';
import { ButtonGroup, Container } from './styles';

const EditClinic: React.FC<any> = ({ clinicData }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [personalDatas, setPersonalDatas] = useState(
    clinicData.personalDatas || {},
  )

  const [acessDatas, setAcessDatas] = useState(clinicData.acessDatas || {})
  const [specialtys, setSpecialtys] = useState(
    clinicData?.specialtys?.name || {},
  )
  const [address, setAddress] = useState(clinicData.address || {})
  const [fieldWasChanged, setFieldWasChanged] = useState(false)
  const [errors, setErrors] = useState<ErrorsI>({})

  const { showSimple, showMessage } = useModal()
  const { Loading } = useLoading()

  const history = useHistory()

  useEffect(() => {
    if (isEditing) {
      setFieldWasChanged(true)
    }
  }, [address, personalDatas, acessDatas, specialtys])

  const onEdit = () => {
    const status = clinicData.personalDatas?.status

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

  const hasErrorOnFields = (fields: any) => {
    let error = false
    const hasSpecificError = Object.values(errors)
    error = !!hasSpecificError[0]

    for (const field in fields) {
      if ((!fields[field] || !fields[field].length) && field !== 'complement') {
        setErrors((errors) => ({ ...errors, [field]: 'Campo obrigatório' }))
        error = true
      }
    }
    return error
  }

  const onSave = async () => {
    scrollOntoFieldError(errors)

    if (
      hasErrorOnFields({
        ...personalDatas,
        ...acessDatas,
        ...address,
        ...specialtys,
      })
    ) {
      return
    }

    try {
      Loading.turnOn()

      await apiAdmin.put(
        `/clinica/${clinicData.personalDatas?.id}`,
        toApi({
          id: clinicData.personalDatas?.id,
          ...personalDatas,
          ...acessDatas,
          ...address,
          ...specialtys,
        }),
      )

      toast.success('Alteração realizada com sucesso.')

      history.push(OPERATOR_SEE_ALL_CLINICS)
    } catch (error) {
      toast.error('Erro ao editar.')
    } finally {
      Loading.turnOff()
    }
  }

  const onCancel = () => {
    if (fieldWasChanged) {
      return showMessage(CancelEdting, {
        setEdting: setIsEditing,
        setFieldWasChanged,
      })
    }
    setIsEditing(false)
  }

  return (
    <Container>
      <ClinicData
        isEditing={isEditing}
        personalDatas={clinicData.personalDatas}
        setPersonalDatas={setPersonalDatas}
        initialData={clinicData?.personalDatas}
        errors={errors}
        setErrors={setErrors}
      />
      <ClinicAcessData
        isEditing={isEditing}
        acessDatas={clinicData.acessDatas}
        setAcessDatas={setAcessDatas}
        initialData={clinicData?.acessDatas}
        errors={errors}
        setErrors={setErrors}
      />
      <ClinicAddress
        isEditing={isEditing}
        address={clinicData.address}
        setAddress={setAddress}
        initialData={clinicData?.address}
        errors={errors}
        setErrors={setErrors}
      />
      <ClinicSpecialty
        isEditing={isEditing}
        clinicSpecialtys={clinicData?.specialtys}
        setClinicSpecialtys={setSpecialtys}
        initialData={clinicData?.specialtys}
        errors={errors}
        setErrors={setErrors}
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
          <OutilineButton onClick={onSave}>Salvar</OutilineButton>
        </ButtonGroup>
      )}
    </Container>
  )
}

export default EditClinic
