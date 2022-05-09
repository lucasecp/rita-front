import React from 'react'
import { Container } from './styles'
import OutilineButton from '@/components/Button/Outline'
import { useAuth } from '@/hooks/login'
import { INITIAL_PAGE } from '../../../../routes/constants/namedRoutes/routes'
import { useHistory } from 'react-router-dom'

interface CardProps {
  infoUser: {
    icon: JSX.Element | null
    title: string
    text: string
    color: string
    secondaryColor: string
    profile: string
  }
}

const Card: React.FC<CardProps> = ({ infoUser }) => {
  const { setDataLogin, user } = useAuth()

  const history = useHistory()

  const onChoose = () => {
    setDataLogin({
      ...user,
      profileChosen: infoUser.profile,
    })
    history.push(INITIAL_PAGE)
  }

  return (
    <Container color={infoUser.color} secondaryColor={infoUser.secondaryColor}>
      <div>{infoUser.icon}</div>
      <div>
        <span />
        <div>
          <h4>{infoUser.title}</h4>
          <p>{infoUser.text}</p>
          <OutilineButton variation="white" onClick={onChoose}>
            Entrar
          </OutilineButton>
        </div>
      </div>
    </Container>
  )
}

export default Card
