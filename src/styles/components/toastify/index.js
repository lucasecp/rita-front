import React from 'react'
import { toast as toastify } from 'react-toastify'

import { ReactComponent as ErrorIcon } from '@/assets/icons/alerts/error.svg'
import { ReactComponent as SuccessIcon } from '@/assets/icons/alerts/success.svg'
import { ReactComponent as WarningIcon } from '@/assets/icons/alerts/warning.svg'
import SpinnerLoading from '../SpinnerLoading'

const error = (message) => {
  return toastify.error(message, { icon: <ErrorIcon /> })
}

const success = (message) => {
  return toastify.success(message, { icon: <SuccessIcon /> })
}

const warning = (message) => {
  return toastify.warning(message, { icon: <WarningIcon /> })
}

const loading = (message, options) => {
  return toastify.loading(message, { icon: <SpinnerLoading />, closeButton: true, ...options })
}

const toast = {
  error,
  success,
  warning,
  loading,
}

export { toast }
