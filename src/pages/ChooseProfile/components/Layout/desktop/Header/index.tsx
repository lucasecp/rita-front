import React from 'react'
import { useAuth } from '@/hooks/login'
import { ReactComponent as ExitIcon } from '@/assets/icons/exit.svg'
import { Container } from './styles'
import CustomTooltip from '@/components/Tooltip'
import { Profile } from './Profile'

interface HeaderDesktopProps {
  title?: string
}

export const Header: React.FC<HeaderDesktopProps> = ({ title, children }) => {
  const { clearDataLogout } = useAuth()

  return (
    <Container>
      <div>
        <h1>{title || ''}</h1>
        {children}
      </div>
      <nav>
        <Profile />

        <CustomTooltip label={'Sair'}>
          <ExitIcon onClick={clearDataLogout} />
        </CustomTooltip>
      </nav>
    </Container>
  )
}
