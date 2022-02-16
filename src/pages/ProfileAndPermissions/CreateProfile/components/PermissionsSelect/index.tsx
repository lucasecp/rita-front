import React from 'react'

import { EmitType, enableRipple } from '@syncfusion/ej2-base'
import {
  NodeCheckEventArgs,
  TreeViewComponent,
} from '@syncfusion/ej2-react-navigations'

import { Container } from './styles'

enableRipple(true)

interface PermissionsSelectProps {
  nodeChecked: EmitType<NodeCheckEventArgs>
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
  nodeChecked,
}) => {
  const fields = {
    dataSource: permissions,
    id: 'id',
    text: 'name',
    child: 'subChild',
  }

  return (
    <Container>
      <TreeViewComponent
        fields={fields}
        showCheckBox={true}
        nodeChecked={nodeChecked}
      />
    </Container>
  )
}
