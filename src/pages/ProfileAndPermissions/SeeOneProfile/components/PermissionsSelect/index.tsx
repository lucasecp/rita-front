import React, { useEffect, useMemo, useState } from 'react'

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
  disabled,
}) => {
  const fields = {
    dataSource: permissions,
    id: 'id',
    text: 'name',
    child: 'subChild',
  }

  console.log(permissions)

  const onTreeViewChange = (any1) => {
    console.log(any1)
  }

  console.log(fields)

  return (
    <Container>
      <TreeViewComponent
        disabled={disabled}
        fields={fields}
        showCheckBox
        nodeChecked={onTreeViewChange}
      />
    </Container>
  )
}
