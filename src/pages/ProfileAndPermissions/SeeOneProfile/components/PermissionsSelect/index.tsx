import React, { useEffect, useState } from 'react'

import { Container } from './styles'
import CheckboxTree from 'react-checkbox-tree'
import 'react-checkbox-tree/lib/react-checkbox-tree.css'

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
  const [test, setTest] = useState([])

  const nodes = [
    {
      value: 'mars',
      label: 'Mars',
      children: [
        { value: 'phobos', label: 'Phobos' },
        { value: 'deimos', label: 'Deimos' },
      ],
    },

    {
      value: 'teste1',
      label: 'teste1',
      children: [
        { value: 'phobos1', label: 'Phobos' },
        { value: 'deimos1', label: 'Deimos' },
      ],
    },
    {
      value: 'teste2',
      label: 'teste2',
      children: [
        { value: 'phobos2', label: 'Phobos', id: 1 },
        { value: 'deimos2', label: 'Deimos', id: 2 },
      ],
    },
    {
      value: 'teste3',
      label: 'teste3',
      children: [
        { value: 'phobos3', label: 'Phobos' },
        { value: 'deimos3', label: 'Deimos' },
      ],
    },
  ]

  const [checked, setChecked] = useState([])
  const [expanded, setExpanded] = useState([])

  console.log(checked, expanded)

  const onTreeViewChange = (any1) => {
    console.log(any1)
  }

  return (
    <Container>
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onClick={(newChecked) => setChecked([newChecked])}
        onExpand={(newExpanded) => setExpanded([newExpanded])}
      />
    </Container>
  )
}
