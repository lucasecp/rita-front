import { Container, ButtonGroup } from './styles'
import React from 'react'
import { PersonalDatas } from '../components/PersonalDatas'
import { Clinics } from '../components/Clinics'
import { ProfissionalDatas } from '../components/ProfissionalDatas'
import { Specialty } from '../components/Specialty'
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import OutlineButton from '@/components/Button/Outline'
import PrimaryButton from '@/components/Button/Primary'
import apiAdmin from '@/services/apiAdmin'
import { useModal } from '@/hooks/useModal'

interface EditSpecialistProps {
  specialistData: any
}

const EditSpecialist: React.FC<EditSpecialistProps> = ({ specialistData }) => {
  const history = useHistory()
  const { showMessage } = useModal()

  const onCancel = () => {
    history.push(CLINIC_SEE_ALL_SPECIALIST)
  }

  /** @description Atualiza o status para 'A' */
  const authorizeSpecialist = async () => {
    await apiAdmin.patch(`/clinica/${59}/medico/${12}?statusMedicoClinica=A`)
  }

  const confirmAuthorizationSpecialist = () => {

  }

  return (
    <Container>
      <div>
        <PersonalDatas personalDatas={specialistData?.personalDatas} />
        <ProfissionalDatas data={specialistData?.profissionalData} />
        <Specialty specialistSpecialtys={specialistData?.specialtys} />
        <Clinics specialistClinic={specialistData?.clinics} />
      </div>

      <ButtonGroup>
        <OutlineButton onClick={onCancel}>Voltar</OutlineButton>
        {specialistData?.status === 'A' && <PrimaryButton onClick={onCancel}>Autorizar</PrimaryButton>}
      </ButtonGroup>
    </Container>
  )
}

export default EditSpecialist
