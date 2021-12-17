import React from 'react'
import { toast as toastify } from 'react-toastify'

import { ReactComponent as ErrorIcon } from '@/assets/icons/alerts/error.svg'
import { ReactComponent as SuccessIcon } from '@/assets/icons/alerts/success.svg'
import { ReactComponent as WarningIcon } from '@/assets/icons/alerts/warning.svg'
import Spinner from '@/components/Loading/Spinner'

const error = (message) => {
  return toastify.error(message, { icon: <ErrorIcon /> })
}

const success = (message) => {
  return toastify.success(message, { icon: <SuccessIcon /> })
}

const warning = (message) => {
  return toastify.warning(message, { icon: <WarningIcon /> })
}

const promise = (promisseReturn, message) => {
  return toastify.promise(
    promisseReturn,
    {
      pending: message.pending,

      error: {
        render() {
          return message.error
        },
        icon: <ErrorIcon />,
      },

      success: {
        render() {
          return message.success
        },

        icon: <SuccessIcon />,
      },
    },

    { icon: <Spinner /> }
  )
}

export const toast = {
  error,
  success,
  warning,
  promise,
}
