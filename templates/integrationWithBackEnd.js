const mapResponseFromApi = async () => {
  try {
    Loading.turnOn()

    const response = await api.method(
      '/route',
      { dataForPost },
      {
        params: {
          dataToSendInQueryParams,
        },
      }
    )

    // remove when finished configuring API responses
    console.log(response)

    switch (response.data.mensagem) {
      case 'Message From Api 1':
        return [
          typesResponses.ACTION_1,
          { exempleWithObjectData: response.data.objectData },
        ]

      case 'Message From Api 2':
        return [typesResponses.ACTION_2]

      default:
        // Move out to this function
        showSimple.error('Erro não tratado no Front!')
        // enable console.log when finished configuring API responses
        // console.log(response)
        return [typesResponses.FRONTEND_COULD_NOT_HANDLE_ERROR]
    }
  } catch ({ response }) {
    // remove when finished configuring API responses
    console.log(response)

    if (response.status.toString()[0] === '4') {
      switch (response.data.mensagem) {
        case 'Message Error 1 From Api':
          return [typesResponses.ERROR_1]

        case 'Message Error 2 From Api':
          return [typesResponses.ERROR_2]

        default:
          // Move out to this function
          showSimple.error('Erro não tratado no Front!')
          // enable console.log when finished configuring API responses
          // console.log(response)
          return [typesResponses.FRONTEND_COULD_NOT_HANDLE_ERROR]
      }
    }

    if (response.status.toString()[0] === '5') {
      // Move out to this function
      showSimple.error('Erro no Servidor!')
      // enable console.log when finished configuring API responses
      // console.log(response)
      return [typesResponses.INTERNAL_SERVER_ERROR]
    }
  } finally {
    Loading.turnOff()
  }
}

// get responses mapped
const [responseApiMessage, responseApiData] = await mapResponseFromApi()

// object example to map the function mapResponseFromApi()
// put the possible responses in typesResponses
// put this file in services/index.js
export const typesResponses = {
  ACTION_1: 'ACTION_1',
  ACTION_2: 'ACTION_2',
  ERROR_1: 'ERROR_1',
  ERROR_2: 'ERROR_2',
  FRONTEND_COULD_NOT_HANDLE_ERROR: 'FRONTEND_COULD_NOT_HANDLE_ERROR',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
}
