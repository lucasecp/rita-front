import React from 'react'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'
import { ReactComponent as GroupUserIcon } from '@/assets/icons/people.svg'

const menuItemsValidator = [
  {
    path: '#',
    icon: <HomeIcon />,
    name: 'Inicio',
  },
  {
    path: '#',
    icon: <UserIcon />,
    name: 'Perfil',
  },
  {
    path: '#',
    icon: <GroupUserIcon />,
    name: 'Dependentes',
  },
]

export default menuItemsValidator
