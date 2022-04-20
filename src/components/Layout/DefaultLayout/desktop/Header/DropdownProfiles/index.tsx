import React, { useRef, useEffect, useState } from 'react'
import { Container, Button } from './styles'
import { useAuth } from '@/hooks/login'
import { useHistory } from 'react-router-dom';
import { INITIAL_PAGE } from '@/routes/constants/namedRoutes/routes';
import {
  profilesColors,
  profilesLabel,
  profiles,
} from '../../../static/profiles'

interface DropdownProfilesProps {
  show: boolean
  setShow: (x: boolean) => void
}

const DropdownProfiles: React.FC<DropdownProfilesProps> = ({
  show,
  setShow,
}) => {
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


    setShow(false)
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
    <Container show={show} ref={containerRef} height={heightContainer}>
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
