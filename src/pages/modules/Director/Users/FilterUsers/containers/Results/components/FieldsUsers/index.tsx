import { usersFields } from './constants/usersFields'
import { Container, ArrowUp, ArrowDown, Content } from './styles'

interface FieldsUsersProps {
  onGetOrder: any
}

export const FieldsUsers: React.FC<FieldsUsersProps> = ({ onGetOrder }) => {
  return (
    <Container>
      <div>
        {usersFields.map((order) => (
          <Content key={order.name}>
            <h5>{order.label}</h5>
            <div>
              <ArrowUp />
              <ArrowDown />
            </div>
          </Content>
        ))}
      </div>
    </Container>
  )
}
