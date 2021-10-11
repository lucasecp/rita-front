  try {
    Loading.turnOn()

    const response = await api.method('/route')

    // remove when finished configuring API responses
    console.log(response)

    if (response.status === 200) {
      if (response.data.mensagem === 'Message From Api') {
        // Actions
      }
    }
  } catch ({ response }) {
    // remove when finished configuring API responses
    console.log(response)

    if (response.status[0] === 4) {
      if (response.status === 401) {
        // Actions to 401 Error
      }
    }

    if (response.status[0] === 5) {
      showMessage(SimpleModal, {
        type: MODAL_TYPES.ERROR,
        message: 'Erro no Servidor!',
      })
    }
  } finally {
    Loading.turnOff()
  }
}

