import Background1 from '@/assets/img/element1.png'
import Background2 from '@/assets/img/element2.svg'
import Background3 from '@/assets/img/element3.svg'
import Background4 from '@/assets/img/element4.svg'
import OutlineButton from '@/components/Button/Outline'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { useAuth } from '@/hooks/login'
import { useLoading } from '@/hooks/useLoading'
import { useModal } from '@/hooks/useModal'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import apiPatient from '@/services/apiPatient'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useHistory } from 'react-router'

import DifferentPlanLife from './messages/DifferentPlanLife'
import VidaPlanLife from './messages/VidaPlanLife'
import VidaPlanLifeConfirm from './messages/VidaPlanLifeConfirm'
import { Card, Container, CustomCol } from './styles'

export const Services = () => {
  const [medicinesLink, SetMedicinesLink] = useState('')
  const { Loading } = useLoading()
  const { user } = useAuth()
  const { showMessage } = useModal()
  const history = useHistory()

  useEffect(() => {
    const getMedicineLink = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get('/paciente/drogaria')
        const link = data.farmacia.map((info) => info.site)
        SetMedicinesLink(link)
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }

    getMedicineLink()
  }, [])

  const hasPermission = (permission) => {
    return user.permissoes.some((p) => p === permission)
  }

  const onConsult = () => {
    if (!hasPermission('SERVICO_CONSULTA')) {
      return showMessage(DifferentPlanLife)
    }
    history.push(PATIENT_SCHEDULE_APPOINTMENT)
  }

  const onMedicines = () => {
    if (!hasPermission('SERVICO_MEDICAMENTO')) {
      return showMessage(DifferentPlanLife)
    }
    window.open(medicinesLink[0])
  }

  const onCsd = async () => {
    try {
      if (hasPermission('ATENDIMENTO_CSD')) {
        const { data } = await apiPatient.get('/atendimento')
        if (data) {
          return showMessage(VidaPlanLifeConfirm)
        }
      } else {
        return showMessage(DifferentPlanLife)
      }
    } catch (e) {
      if (hasPermission('ATENDIMENTO_CSD')) {
        return showMessage(VidaPlanLife)
      }

      return showMessage(DifferentPlanLife)
    }
  }

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <CustomCol md={6} order={hasPermission('ATENDIMENTO_CSD') ? 2 : 1}>
            <Card variation="middle-blue">
              <img src={Background2} />
              <h3>Consultas</h3>
              <p>
                Acesso à rede de médicos especialistas com preços diferenciados.
              </p>
              <OutlineButton variation="white" onClick={onConsult}>
                Agende sua consulta
              </OutlineButton>
            </Card>
          </CustomCol>
          <CustomCol md={6} order={hasPermission('ATENDIMENTO_CSD') ? 3 : 2}>
            <Card variation="light-blue">
              <img src={Background1} />
              <h3>Exames</h3>
              <p>
                Aqui você encontra Análises Clínicas, Exames de Imagem e até
                Vacinas.
              </p>
              <a
                href="https://www.sabin.com.br/#unities"
                target={'_blank'}
                rel="noreferrer"
              >
                <OutlineButton variation="blue">
                  Encontre seu laboratório
                </OutlineButton>
              </a>
            </Card>
          </CustomCol>
          <CustomCol md={6} order={hasPermission('ATENDIMENTO_CSD') ? 4 : 3}>
            <Card variation="dark-blue">
              <img src={Background4} />
              <h3>Medicamentos</h3>
              <p>Descontos especiais em redes de farmácias.</p>
              <OutlineButton variation="white" onClick={onMedicines}>
                Encontre uma farmácia
              </OutlineButton>
            </Card>
          </CustomCol>
          <CustomCol md={6} order={hasPermission('ATENDIMENTO_CSD') ? 1 : 4}>
            <Card variation="red">
              <img src={Background3} />
              <h3>CSD</h3>
              <p>Consulta online com a equipe de saúde da Rita.</p>
              <OutlineButton variation="white" onClick={onCsd}>
                Agendar Consulta
              </OutlineButton>
            </Card>
          </CustomCol>
        </Row>
      </Container>
    </DefaultLayout>
  )
}
