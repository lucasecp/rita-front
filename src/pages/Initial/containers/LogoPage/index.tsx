import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import logo from '@/assets/logo/logo-animated-without-background.gif'

import { Container } from './styles'

export const LogoPage: React.FC = () => {
  return (
    <DefaultLayout title="Página Inicial">
      <Container>
        <img src={logo} />
      </Container>
    </DefaultLayout>
  )
}
