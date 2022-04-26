import React, { useRef, useEffect, useState } from 'react'
// import { Container, Button } from './styles'
import { useAuth } from '@/hooks/login'
import { profilesColors, profilesLabel } from '../../../../../constants/profiles'

interface DropdownProfilesProps {
  show: boolean
  setShow: (x: boolean) => void
}

const DropdownProfiles: React.FC<DropdownProfilesProps> = ({ show, setShow }) => {
  const { user, setDataLogin } = useAuth()
  const containerRef = useRef(null)
  const [heightContainer, setHeightContainer] = useState(0)

  const onChangeProfile = (permission: string[], profileChosen: string) => {
    setDataLogin({
      ...user,
      permissoes: permission,
      profileChosen,
    })

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

  return null
    // <Container show={show} ref={containerRef} height={heightContainer}>
    //   {user?.area.map((val, index) => (
    //     <Button
    //       key={index}
    //       color={profilesColors[val.grupoPerfil]}
    //       onClick={() =>
    //         onChangeProfile(val.permissoes, profilesLabel[val.grupoPerfil])
    //       }
    //     >
    //       Trocar para Perfil {profilesLabel[val.grupoPerfil]}
    //     </Button>
    //   ))}
    // </Container>
  
}

export default DropdownProfiles
