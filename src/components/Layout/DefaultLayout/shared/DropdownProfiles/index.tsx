import React from 'react'
import { Container } from './styles'
import { useAuth } from '@/hooks/login';

interface DropdownProfilesProps {}

const DropdownProfiles: React.FC<DropdownProfilesProps> = () => {
  const {user} = useAuth()
  return (
    <Container>
    </Container>
  )
}

export default DropdownProfiles
