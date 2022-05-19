/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { staticStatus } from '../static/status'

export const formatStatusColumn = (status: string) => {
  return staticStatus.filter((item) => item.value === status)[0].label
}
