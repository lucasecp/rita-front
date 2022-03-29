import { Container, ButtonGroup } from './styles'
import React from 'react'
import { PersonalDatas } from '../components/PersonalDatas'
import { Clinics } from '../components/Clinics'
import { ProfissionalDatas } from '../components/ProfissionalDatas'
import { Specialty } from '../components/Specialty'
import { useHistory } from 'react-router-dom'
import { CLINIC_SEE_ALL_SPECIALIST } from '@/routes/constants/namedRoutes/routes'
import OutlineButton from '@/components/Button/Outline'

interface EditSpecialistProps {
  specialistData: any
}

const EditSpecialist: React.FC<EditSpecialistProps> = ({ specialistData }) => {
  const history = useHistory()

  const onCancel = () => {
    history.push(CLINIC_SEE_ALL_SPECIALIST)
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
      </ButtonGroup>
    </Container>
  )
}

export default EditSpecialist
