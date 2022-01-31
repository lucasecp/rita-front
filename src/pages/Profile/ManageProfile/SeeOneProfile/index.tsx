import React, { useEffect, useState } from 'react'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container } from './styles'
import { useLoading } from '@/hooks/useLoading'
import apiUser from '@/services/apiUser'
import { profilesAndPermissionMapped } from './adapters/fromApi'
import InputText from '@/components/Form/InputText'
import { DIRECTOR_SEE_PERFIS } from '@/routes/constants/namedRoutes/routes'
import OutilineButton from '@/components/Button/Outline'
import ButtonLink from '@/components/Button/Link'

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

  const [profileAndPermissions, setProfileAndPermissions] = useState([])

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        Loading.turnOn()

        const { data: perfil } = await apiUser.get(`/perfil/${id}`)
        const { data: permissions } = await apiUser.get('/grupo-permissao')

        console.log(perfil, permissions)

        const profilesAndMapped = profilesAndPermissionMapped(data)

        setProfileAndPermissions(profilesAndMapped)

        console.log(profilesAndMapped)
      } catch (error) {
        // console.log(error)
        // toast.error('Erro ao carregar itens vendáveis!')
      } finally {
        Loading.turnOff()
      }
    }

    loadProfiles()
  }, [])

  const useViewStyles = makeStyles({
    root: {},
  })

  const useItemStyles = makeStyles((theme) => ({
    root: {
      '& > .MuiTreeItem-content > .MuiTreeItem-label': {
        display: 'flex',
        alignItems: 'center',
        padding: '4px 0',
        background: 'transparent !important',
        pointerEvents: 'none',
      },
      '& > .MuiTreeItem-content  > .MuiTreeItem-label::before': {
        content: "''",
        display: 'inline-block',
        width: 12,
        height: 12,
        marginRight: 8,
        border: '1px solid #ccc',
        background: 'white',
      },
    },
    iconContainer: {
      marginRight: 12,
      '& > svg': {
        padding: 8,
        '&:hover': {
          opacity: 0.6,
        },
      },
    },
    label: {
      padding: 0,
    },
    selected: {
      '& > .MuiTreeItem-content  > .MuiTreeItem-label::before': {
        background: theme.palette.primary.main,
        border: '1px solid transparent',
      },
    },
  }))

  const classesView = useViewStyles()
  const classesItem = useItemStyles()

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
          value={profileAndPermissions.name}
          label="Nome do Perfil"
          disabled
        />
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
          {profileAndPermissions.permissions &&
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
            })}
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
