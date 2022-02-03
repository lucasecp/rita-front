import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import {
  Container,
  useViewStyles,
  useItemStyles,
  useAccordionStyles,
} from './styles'
import { useLoading } from '@/hooks/useLoading'
import apiUser from '@/services/apiUser'
import { fromApi } from './adapters/fromApi'
import InputText from '@/components/Form/InputText'
import { DIRECTOR_SEE_ALL_PROFILES } from '@/routes/constants/namedRoutes/routes'
import OutilineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'
import { PermissionsSelect } from './components/PermissionsSelect'

import { useHistory, useLocation } from 'react-router'
import { id } from 'date-fns/locale'

export const SeeOneProfile: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Perfis - Visualização'
  }, [])

  const { Loading } = useLoading()
  const history = useHistory()
  const { id } = useLocation().state || {}

  const [profilesAndPermissions, setProfilesAndPermissions] = useState([])

  // const permissions = [
  //   {
  //     id: '01',
  //     name: 'Local Disk (C:)',
  //     expanded: true,
  //     subChild: [
  //       {
  //         id: '01-01',
  //         name: 'Program Files',
  //         isChecked: true,
  //       },
  //       {
  //         id: '01-02',
  //         name: 'Users',
  //         // expanded: true,
  //       },
  //       {
  //         id: '01-03',
  //         name: 'Windows',
  //       },
  //     ],
  //   },
  //   {
  //     id: '02',
  //     name: 'Local Disk (D:)',
  //     subChild: [
  //       {
  //         id: '02-01',
  //         name: 'Personals',
  //       },
  //       {
  //         id: '02-02',
  //         name: 'Projects',
  //       },
  //       {
  //         id: '02-03',
  //         name: 'Office',
  //       },
  //     ],
  //   },
  //   {
  //     id: '03',
  //     name: 'Local Disk (E:)',
  //     icon: 'folder',
  //     isChecked: true,
  //     subChild: [
  //       {
  //         id: '03-01',
  //         name: 'Pictures',
  //       },
  //       {
  //         id: '03-02',
  //         name: 'Documents',
  //       },
  //       {
  //         id: '03-03',
  //         name: 'Study Materials',
  //       },
  //     ],
  //   },
  // ]

  useEffect(() => {
    if (!id) {
      history.push(DIRECTOR_SEE_ALL_PROFILES)
      return
    }

    const loadProfiles = async () => {
      try {
        Loading.turnOn()

        const { data: profilesAndPermissions } = await apiUser.get(
          '/grupo-permissao',
        )

        const profilesAndPermissionsMapped = fromApi(profilesAndPermissions)

        setProfilesAndPermissions(profilesAndPermissionsMapped)

        const { data: profile } = await apiUser.get(`/perfil/${id}`)

        console.log(profile)
      } catch (error) {
        // console.log(error)
        // toast.error('Erro ao carregar itens vendáveis!')
      } finally {
        Loading.turnOff()
      }
    }

    loadProfiles()
  }, [])

  // const classesView = useViewStyles()
  // const classesItem = useItemStyles()
  // const classesAccordion = useAccordionStyles()

  // const [expanded, setExpanded] = React.useState([])
  // const [selected, setSelected] = React.useState([])

  // const handleToggle = (event, nodeIds) => {
  //   if (event.target.nodeName !== 'svg') {
  //     return
  //   }
  //   setExpanded(nodeIds)
  // }

  // const handleSelect = (event, nodeIds) => {
  //   if (event.target.nodeName === 'svg') {
  //     return
  //   }
  //   const first = nodeIds[0]
  //   if (selected.includes(first)) {
  //     setSelected(selected.filter((id) => id !== first))
  //   } else {
  //     setSelected([first, ...selected])
  //   }
  // }

  return (
    <DefaultLayout title="Perfis - Visualização">
      <Container>
        <InputText
          // value={profilesAndPermissions.name}
          label="Nome do Perfil"
          disabled
        />
        <label htmlFor="categorias">Categoria</label>
        {profilesAndPermissions.length && (
          <PermissionsSelect permissions={profilesAndPermissions} disabled />
        )}
        <footer>
          <ButtonLink onClick={() => history.push(DIRECTOR_SEE_ALL_PROFILES)}>
            Voltar
          </ButtonLink>
          <OutilineButton
          // onClick={() => history.push(DIRECTOR_SEE_PERFIS)}
          >
            Editar
          </OutilineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
