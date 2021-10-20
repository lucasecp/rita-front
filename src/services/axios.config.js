import axios from 'axios'

export axios.interceptors.response.use(
  (response) => {
    console.log('working intercept')

    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('working intercept')

    return Promise.reject(error)
  }
)

