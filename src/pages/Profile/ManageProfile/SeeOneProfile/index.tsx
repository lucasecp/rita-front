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
import { DIRECTOR_SEE_PERFIS } from '@/routes/constants/namedRoutes/routes'
import OutilineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'
import { ReactComponent as ExpandedLogo } from '@/assets/logo/expanded-logo.svg'

import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

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

  const classesView = useViewStyles()
  const classesItem = useItemStyles()
  const classesAccordion = useAccordionStyles()

  const [expanded, setExpanded] = React.useState([])
  const [selected, setSelected] = React.useState([])

  const handleToggle = (event, nodeIds) => {
    if (event.target.nodeName !== 'svg') {
      return
    }
    setExpanded(nodeIds)
  }

  const handleSelect = (event, nodeIds) => {
    if (event.target.nodeName === 'svg') {
      return
    }
    const first = nodeIds[0]
    if (selected.includes(first)) {
      setSelected(selected.filter((id) => id !== first))
    } else {
      setSelected([first, ...selected])
    }
  }

  return (
    <DefaultLayout title="Perfis - Visualização">
      <Container>
        <InputText
          // value={profileAndPermissions.name}
          label="Nome do Perfil"
          disabled
        />
        <label htmlFor="telas">Telas</label>
        <TreeView
          classes={classesView}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          selected={selected}
          onNodeToggle={handleToggle}
          onNodeSelect={handleSelect}
          multiSelect
        >
          <TreeItem classes={classesAccordion} nodeId="1" label="teste 1">
            <TreeItem classes={classesItem} nodeId="2" label="Calendar" />
            <TreeItem classes={classesItem} nodeId="3" label="Chrome" />
            <TreeItem classes={classesItem} nodeId="4" label="Webstorm" />
          </TreeItem>
          <TreeItem classes={classesAccordion} nodeId="5" label="teste 2">
            <TreeItem classes={classesItem} nodeId="6" label="Calendar" />
            <TreeItem classes={classesItem} nodeId="7" label="Chrome" />
            <TreeItem classes={classesItem} nodeId="8" label="Webstorm" />
          </TreeItem>
          <TreeItem classes={classesAccordion} nodeId="9" label="teste 3">
            <TreeItem classes={classesItem} nodeId="10" label="Calendar" />
            <TreeItem classes={classesItem} nodeId="11" label="Chrome" />
            <TreeItem classes={classesItem} nodeId="12" label="Webstorm" />
          </TreeItem>
          <TreeItem classes={classesAccordion} nodeId="13" label="teste 4 ">
            <TreeItem classes={classesItem} nodeId="14" label="Calendar" />
            <TreeItem classes={classesItem} nodeId="15" label="Chrome" />
            <TreeItem classes={classesItem} nodeId="16" label="Webstorm" />
          </TreeItem>
          {/* {profileAndPermissions.permissions &&
            profileAndPermissions.permissions.map((permission) => {
              return (
                <TreeItem
                  classes={classesItem}
                  nodeId="1"
                  label={permission.name}
                >
                  <TreeItem classes={classesItem} nodeId="2" label="Calendar" />
                  <TreeItem classes={classesItem} nodeId="3" label="Chrome" />
                  <TreeItem classes={classesItem} nodeId="4" label="Webstorm" />
                </TreeItem>
              )
            })} */}
        </TreeView>

        <footer>
          <ButtonLink onClick={() => history.push(DIRECTOR_SEE_PERFIS)}>
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
