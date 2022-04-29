import { enableRipple } from '@syncfusion/ej2-base'
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations'

import { Container } from './styles'

enableRipple(true)

interface PermissionsSelectProps {
  disabled?: boolean
  permissions: {
    id: string
    name: string
    expanded?: boolean
    isChecked?: boolean
    subChild: {
      id: string
      name: string
      isChecked?: boolean
    }[]
  }[]
}

export const PermissionsSelect: React.FC<PermissionsSelectProps> = ({
  permissions = [],
}) => {
  const fields = {
    dataSource: permissions,
    id: 'id',
    text: 'name',
    child: 'subChild',
  }

  return (
    <Container>
      <TreeViewComponent fields={fields} showCheckBox />
    </Container>
  )
}
