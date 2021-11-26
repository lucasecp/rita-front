import React from 'react'
import { Avatar } from './components/Avatar'

import logoRitaGif from '@/assets/logo/logo-animated-without-background.gif'
import logoRitaInactive from '@/assets/logo/rita-inactive.svg'

import { Container } from './styles'
import TableActive from './components/TableActive'

export const DisplayUserInformations = ({ dataToDisplay }) => {
  const isPatientActive = dataToDisplay?.status === 'active'

  return (
    <Container isPatientActive={isPatientActive}>
      <Avatar />
      <h1>{dataToDisplay?.name}</h1>
      <div>
        CPF:<span>{dataToDisplay?.cpf}</span>
      </div>
      {dataToDisplay?.contractedPlan && (
        <div>
          Plano contratado:<span>{dataToDisplay?.contractedPlan}</span>
        </div>
      )}
      <section>
        <img
          src={isPatientActive ? logoRitaGif : logoRitaInactive}
          alt={`logo animada que representa usuário ${
            isPatientActive ? 'ativo' : 'inativo'
          }`}
        />
        <div>
          Status:
          <span>Paciente {isPatientActive ? 'Ativo' : 'Inativo'}</span>
        </div>
      </section>
      <TableActive table={dataToDisplay?.table} />
    </Container>
  )
}
