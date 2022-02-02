import React from 'react'

import { enableRipple } from '@syncfusion/ej2-base'
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations'

import { Container } from './styles'

enableRipple(true)

interface PermissionsSelectProps {
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
  permissions,
  onGetPermissions,
}) => {
  const fields = {
    dataSource: permissions,
    id: 'id',
    text: 'name',
    child: 'subChild',
  }

  const onTreeViewChange = (any1) => {
    console.log(any1)
  }

  return (
    <Container>
      <TreeViewComponent
        fields={fields}
        showCheckBox
        onChange={onTreeViewChange}
      />
    </Container>
  )
}
