import React, { useEffect } from 'react'
// import { format, parseISO } from 'date-fns'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import { Container } from './styles'
import { useToggle } from '@/hooks/useToggle'

import { PatientData, PatientDataHolder } from '../../@types/index'

interface PersonExpandableProps {
  title: string
  personData: PatientData & PatientDataHolder
  holder?: boolean
  defaultExpanded?: boolean
}

export const PersonExpandable: React.FC<PersonExpandableProps> = ({
  title,
  personData,
  holder = false,
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
          <p>{personData?.name || ''}</p>
        </div>
        <div>
          <label>CPF:</label>
          <p>{personData?.cpf || ''}</p>
        </div>
        {holder && (
          <>
            <div>
              <label>Plano Contratado:</label>
              <p>{personData?.plan || '-'}</p>
            </div>
            <div>
              <label>Tabela Especial:</label>
              <p>{personData?.table || '-'}</p>
            </div>
            <div>
              <label>Empresa:</label>
              <p>{personData?.company || '-'}</p>
            </div>
          </>
        )}
      </section>
      <section>
        <div>
          <label>Data de Nascimento:</label>
          <p>{personData?.birthDate || ''}</p>
        </div>
        <div>
          <label>Gênero:</label>
          <p>{personData?.gender || ''}</p>
        </div>
        <div>
          <label>Celular:</label>
          <p>{personData?.phone || ''}</p>
        </div>
        <div>
          <label>E-mail:</label>
          <p>{personData?.email || ''}</p>
        </div>
      </section>
    </Container>
  )
}
