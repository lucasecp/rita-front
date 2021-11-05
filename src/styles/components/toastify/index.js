import React from 'react'
import { toast as toastify } from 'react-toastify'

import { ReactComponent as ErrorIcon } from '@/assets/icons/alerts/error.svg'
import { ReactComponent as SuccessIcon } from '@/assets/icons/alerts/success.svg'

const error = (message) => {
  return toastify.error(message, { icon: <ErrorIcon /> })
}

const success = (message) => {
  return toastify.success(message, { icon: <SuccessIcon /> })
}

const toast = {
  error,
  success,
}

export { toast }
