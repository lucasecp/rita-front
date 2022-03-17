import { Container } from './styles'

interface FormItemProps {
  label: string
  value: string
}

export const FormItem: React.FC<FormItemProps> = ({ label, value }) => {
  return (
    <Container>
      <label>{label}</label>
      <p>{value}</p>
    </Container>
  )
}
