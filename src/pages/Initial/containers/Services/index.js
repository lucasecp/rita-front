import React, { useEffect, useState } from 'react'
import { Container, Card, CustomCol } from './styles'
import OutlineButton from '@/components/Button/Outline'

import { useModal } from '@/hooks/useModal'

import { Row } from 'react-bootstrap'

import Background1 from '@/assets/img/element1.svg'
import Background2 from '@/assets/img/element2.svg'
import Background3 from '@/assets/img/element5.svg'
import Background4 from '@/assets/img/element4.svg'
import apiPatient from '@/services/apiPatient'
import { useLoading } from '@/hooks/useLoading'
import Socialplan from './messages/Socialplan'
import DifferentPlanLife from './messages/DifferentPlanLife'
import { useHistory } from 'react-router'
import { PATIENT_SCHEDULE_APPOINTMENT } from '@/routes/constants/namedRoutes/routes'
import { DefaultLayout } from '@/components/Layout/DefaultLayout'


export const Services = () => {
  const [plan, SetPlan] = useState('')
  const [medicinesLink, SetMedicinesLink] = useState('')
  const { Loading } = useLoading()
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

    const getPlans = async () => {
      try {
        Loading.turnOn()
        const { data } = await apiPatient.get('/paciente/meu-perfil')
        SetPlan(data.plano)
      } catch (error) {
      } finally {
        Loading.turnOff()
      }
    }

    getPlans()
    getMedicineLink()
  }, [])

  const onConsult = () => {
    if (plan === 'Social') {
      return showMessage(Socialplan)
    }
    history.push(PATIENT_SCHEDULE_APPOINTMENT)
  }

  const onMedicines = () => {
    if (plan === 'Social') {
      return showMessage(Socialplan)
    }
    window.open(medicinesLink[0])
  }

  const onCsd = () => {
    if (plan !== 'Vida') {
      return showMessage(DifferentPlanLife)
    }
  }

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <CustomCol md={6} order={plan === 'Vida' ? 2 : 1}>
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
          <CustomCol md={6} order={plan === 'Vida' ? 3 : 2}>
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
          <CustomCol md={6} order={plan === 'Vida' ? 4 : 3}>
            <Card variation="dark-blue">
              <img src={Background4} />
              <h3>Medicamentos</h3>
              <p>Descontos especiais em redes de farmácias.</p>
              <OutlineButton variation="white" onClick={onMedicines}>
                Encontre uma farmácia
              </OutlineButton>
            </Card>
          </CustomCol>
          <CustomCol md={6} order={plan === 'Vida' ? 1 : 4}>
            <Card variation="red">
              <img src={Background3} />
              <h3>CSD</h3>
              <p>Consulta online com a equipe de saúde da Rita.</p>
              <OutlineButton variation="white" onClick={onCsd}>
                Solicite Atendimento
              </OutlineButton>
            </Card>
          </CustomCol>
        </Row>
      </Container>
    </DefaultLayout>
  )
}
