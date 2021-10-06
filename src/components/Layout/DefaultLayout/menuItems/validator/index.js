import React from 'react'

import { ReactComponent as HomeIcon } from '@/assets/icons/home.svg'
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg'
import { ReactComponent as GroupUserIcon } from '@/assets/icons/people.svg'
import { ReactComponent as PadLock } from '@/assets/icons/padlock.svg'


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
  {
    path: '#',
    icon: <PadLock />,
    name: 'Trocar senha',
  },
]

export default menuItemsValidator
