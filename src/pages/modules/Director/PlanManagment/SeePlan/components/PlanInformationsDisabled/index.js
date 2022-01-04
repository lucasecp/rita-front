import React from 'react'
import ButtonPrimary from '@/components/Button/Primary'
import OutilineButton from '@/components/Button/Outline'
import InputText from '@/components/Form/InputText'
import CustomMultSelect from '@/components/Form/MultSelect'
import { Select } from '@/components/Form/Select'
import Textarea from '@/components/Form/Textarea'
import { ButtonGroup, Container } from './styles'
import mapDataToMultSelect from '../../helpers/mapDataToMultSelect'
import { showStatus } from '../../helpers/showStatus'
import { RangeOfUse } from '@/components/RangeOfUse'
import mapToRangeOfUse from '../../helpers/mapToRangeOfUse'
import {
  DIRECTOR_EDIT_PLAN,
  DIRECTOR_PLAN_MANAGMENT,
} from '@/routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router'

const PlanInformationsDisabled = ({ data }) => {
  const history = useHistory()

  return (
    <>
      <Container>
        <InputText label="Código*:" disabled value={data?.codigo || ''} />
        <InputText label="Nome*:" disabled value={data?.nome || ''} />
        <Textarea
          label="Descrição*:"
          disabled
          limit="150"
          showCaractersInformation
          value={data?.descricao || ''}
        />
        <CustomMultSelect
          disabled
          label="Serviços*:"
          variation="secondary"
          value={mapDataToMultSelect(data?.servicos)}
        />
        {data?.abrangencia && (
          <RangeOfUse
            label="Abrangência de Utilização*: "
            rangesOfUse={mapToRangeOfUse(data?.abrangencia)}
            viewMode
          />
        )}
        <Select
          label="Status*:"
          disabled
          value={data?.status || ''}
          options={[{ label: showStatus(data?.status), value: data?.status }]}
        />
      </Container>
      <ButtonGroup>
        <OutilineButton onClick={() => history.push(DIRECTOR_PLAN_MANAGMENT)}>
          Voltar
        </OutilineButton>
        <ButtonPrimary
          onClick={() => history.push(DIRECTOR_EDIT_PLAN, { plan: data })}
        >
          Editar
        </ButtonPrimary>
      </ButtonGroup>
    </>
  )
}

export default PlanInformationsDisabled
