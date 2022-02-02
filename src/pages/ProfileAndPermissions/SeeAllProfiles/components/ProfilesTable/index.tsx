import React from 'react'

import Actions from '../Actions'
import { Container } from './styles'

interface Profile {
  id: number
  name: string
  usersQuantity: number
}

interface DataProfilesProps {
  profiles: Profile[]
}

export const ProfilesTable: React.FC<DataProfilesProps> = ({ profiles }) => {
  return (
    <Container>
      {profiles?.map((profile: Profile, index: number) => (
        <ul key={index}>
          <li>{profile.name || '-'}</li>
          <li>{profile.usersQuantity || '-'}</li>
          <Actions id={profile.id} />
        </ul>
      ))}
      {!profiles?.length && <h2>Nenhum resultado encontrado</h2>}
    </Container>
  )
}
