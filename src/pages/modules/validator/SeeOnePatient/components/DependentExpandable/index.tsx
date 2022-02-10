import React, { useEffect } from 'react'
// import { format, parseISO } from 'date-fns'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import { Container } from './styles'
import { useToggle } from '@/hooks/useToggle'

import { PatientData, PatientDataHolder } from '../../@types/index'

interface DependentExpandableProps {
  title: string
  dependentData: PatientData & PatientDataHolder
  defaultExpanded?: boolean
}

export const DependentExpandable: React.FC<DependentExpandableProps> = ({
  title,
  dependentData,
  defaultExpanded = false,
}) => {
  const [expanded, toggleExpanded] = useToggle(defaultExpanded)

  useEffect(() => {
    if (!expanded && defaultExpanded) {
      toggleExpanded()
    }
  }, [defaultExpanded])

  return (
    <Container expanded={expanded}>
      <header>
        <h2>{title}</h2>
        <img src={arrowDownOutlineIcon} onClick={toggleExpanded} />
      </header>
      <section>
        <div>
          <label>Nome Completo:</label>
          <p>{dependentData?.name || ''}</p>
        </div>
        <div>
          <label>CPF:</label>
          <p>{dependentData?.cpf || ''}</p>
        </div>
      </section>
      <section>
        <div>
          <label>Data de Nascimento:</label>
          <p>{dependentData?.birthDate || ''}</p>
        </div>
        <div>
          <label>Gênero:</label>
          <p>{dependentData?.gender || ''}</p>
        </div>
        <div>
          <label>Celular:</label>
          <p>{dependentData?.phone || ''}</p>
        </div>
        <div>
          <label>E-mail:</label>
          <p>{dependentData?.email || ''}</p>
        </div>
      </section>
    </Container>
  )
}
