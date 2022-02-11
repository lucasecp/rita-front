import React, { useEffect } from 'react'
// import { format, parseISO } from 'date-fns'

import arrowDownOutlineIcon from '@/assets/icons/arrow-down-outline.svg'

import { Container } from './styles'
import { useToggle } from '@/hooks/useToggle'

import { PatientData, PatientDataHolder } from '../../@types/index'

interface PersonExpandableProps {
  title: string
  personData: PatientData & PatientDataHolder
  defaultExpanded?: boolean
}

export const PersonExpandable: React.FC<PersonExpandableProps> = ({
  title,
  personData,
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
      <section>
        <div>
          <label>Plano Contratado:</label>
          <p>{personData?.plan || '-'}</p>
        </div>
        <div>
          <label>Tabela:</label>
          <p>{personData?.table || '-'}</p>
        </div>
        <div>
          <label>Nome da Empresa:</label>
          <p>{personData?.company?.corporateName || '-'}</p>
        </div>
        <section className="has-three-in-row">
          <div>
            <label>CNPJ da empresa:</label>
            <p>{personData?.company?.cnpj || '-'}</p>
          </div>
          <div>
            <label>Sigla da empresa:</label>
            <p>-</p>
          </div>
        </section>
      </section>
    </Container>
  )
}
