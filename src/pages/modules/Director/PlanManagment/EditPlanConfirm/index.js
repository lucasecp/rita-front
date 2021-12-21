import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import { DefaultLayout } from '@/components/Layout/DefaultLayout'
import { Container } from './styles'
import OutilineButton from '@/components/Button/Outline'
import ButtonPrimary from '@/components/Button/Primary'
import { useToggle } from '@/hooks/useToggle'

export const EditPlanConfirm = () => {
  const history = useHistory()

  // Objeto hipotetico - popular a lista com os dados da api
  const sellableItems = [
    { id: 1, nome: 'Centro Oeste - Goiás (Estadual)', preco: 'R$ 39,90' },
    { id: 2, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 3, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 4, nome: 'Centro Oeste - Goiás (Estadual)', preco: 'R$ 39,90' },
    { id: 5, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 6, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 7, nome: 'Centro Oeste - Goiás (Estadual)', preco: 'R$ 39,90' },
    { id: 8, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 9, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 10, nome: 'Centro Oeste - Goiás (Estadual)', preco: 'R$ 39,90' },
    { id: 11, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 12, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 13, nome: 'Centro Oeste - Goiás (Estadual)', preco: 'R$ 39,90' },
    { id: 14, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
    { id: 15, nome: 'Centro Oeste - Brasília (Distrital)', preco: 'R$ 69,90' },
  ]

  const [isSellableItemsExpanded, toggleIsSellableItemsExpanded] = useToggle()

  const onDoNotProceed = () => {
    history.back()
  }

  return (
    <DefaultLayout title="Editar Plano">
      <Container>
        <div>
          <h1>
            Suas alterações afetarão os itens abaixo do Plano Vida, deseja
            prosseguir?
          </h1>

          {sellableItems.map((sellableItem, index) =>
            isSellableItemsExpanded ? (
              <p key={sellableItem.id}>
                {sellableItem.nome} - {sellableItem.preco}
              </p>
            ) : (
              index < 4 && (
                <p key={sellableItem.id}>
                  {sellableItem.nome} - {sellableItem.preco}
                </p>
              )
            )
          )}
          {sellableItems.length > 3 && (
            <span onClick={toggleIsSellableItemsExpanded}>
              Ver{' '}
              {isSellableItemsExpanded
                ? '-'
                : `+  (${sellableItems.length - 4})`}
            </span>
          )}
        </div>
        <footer>
          <ButtonPrimary onClick={onDoNotProceed}>Não</ButtonPrimary>
          <OutilineButton>Sim</OutilineButton>
        </footer>
      </Container>
    </DefaultLayout>
  )
}
