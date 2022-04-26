import React, { useRef, useEffect, useState } from 'react'
import { Container, Button } from './styles'
import { useAuth } from '@/hooks/login'
import { useHistory } from 'react-router-dom';
import {
  profilesColors,
  profilesLabel,
  profiles,
} from '../../../../../../constants/profiles'
import { INITIAL_PAGE } from '@/routes/constants/namedRoutes/routes';

interface DropdownProfilesProps {
  show: boolean
}

const DropdownProfiles: React.FC<DropdownProfilesProps> = ({ show }) => {
  const { user, setDataLogin } = useAuth()

  const containerRef = useRef(null)

  const [heightContainer, setHeightContainer] = useState(0)
  const history = useHistory()

  const onChangeProfile = (permission: string[], profileChosen: string) => {
    setDataLogin({
      ...user,
      permissoes: permission,
      profileChosen,
    })
    history.push(INITIAL_PAGE)

  }

  useEffect(() => {
    setHeightContainer(
      [...containerRef.current?.children].reduce((ac, el) => {
        ac += el.offsetHeight
        return ac
      }, 0),
    )
  }, [containerRef])

  return (
    <Container
      show={show}
      ref={containerRef}
      height={heightContainer}
      onlyOneProfile={user?.area.length === 1}
    >
      {user?.area.length > 1 &&
        user?.area.map((val, index) => (
          <Button
            key={index}
            color={profilesColors[val.grupoPerfil]}
            onClick={() =>
              onChangeProfile(val.permissoes, profiles[val.grupoPerfil])
            }
          >
            Trocar para Área {profilesLabel[val.grupoPerfil]}
          </Button>
        ))}
    </Container>
  )
}

export default DropdownProfiles
