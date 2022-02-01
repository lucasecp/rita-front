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
import { profilesAndPermissionMapped } from './adapters/fromApi'
import InputText from '@/components/Form/InputText'
import { DIRECTOR_SEE_ALL_PROFILES } from '@/routes/constants/namedRoutes/routes'
import OutilineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'
import { PermissionsSelect } from './components/PermissionsSelect'

import { useHistory, useLocation } from 'react-router'

export const SeeOneProfile: React.FC = () => {
  useEffect(() => {
    document.title = 'Rita Saúde | Perfis - Visualização'
  }, [])

  const { Loading } = useLoading()
  const history = useHistory()
  const { id } = useLocation().state

  // const [profileAndPermissions, setProfileAndPermissions] = useState([])

  // useEffect(() => {
  //   const loadProfiles = async () => {
  //     try {
  //       Loading.turnOn()

  //       const { data: perfil } = await apiUser.get(`/perfil/${id}`)
  //       const { data: permissions } = await apiUser.get('/grupo-permissao')

  //       console.log(perfil, permissions)

  //       const profilesAndMapped = profilesAndPermissionMapped(data)

  //       setProfileAndPermissions(profilesAndMapped)

  //       console.log(profilesAndMapped)
  //     } catch (error) {
  //       // console.log(error)
  //       // toast.error('Erro ao carregar itens vendáveis!')
  //     } finally {
  //       Loading.turnOff()
  //     }
  //   }

  //   loadProfiles()
  // }, [])

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
          // value={profileAndPermissions.name}
          label="Nome do Perfil"
          disabled
        />
        <label htmlFor="categorias">Categoria</label>

        <PermissionsSelect />
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
